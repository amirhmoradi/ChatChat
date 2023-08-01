import { keyValidation } from '@/utils/provider/variableChecker';

export async function sendCohereMessages(model: string, message: string, apiKey: string) {
    if (!keyValidation(apiKey).status) {
        return keyValidation(apiKey).error;
    }

    const response = await fetch('https://api.cohere.ai/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
            'Cohere-Version': '2022-12-06',
        },
        body: JSON.stringify({
            model: model,
            prompt: message,
            return_likelihoods: 'NONE',
            max_tokens: 200,
            temperature: 0.9,
            p: 1,
        }),
    });

    const data = await response.json();

    return data.generations[0].text;
}
