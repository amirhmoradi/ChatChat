type ServiceProvidersProps = {
    OpenAI: OpenAIServiceProviderProps;
    'Hugging Face': HuggingFaceServiceProviderProps;
    Claude: ClaudeServiceProviderProps;
    Azure: AzureServiceProviderProps;
    Custom: CustomServiceProviderProps;
    Team: TeamServiceProviderProps;
    Cohere: CohereServiceProviderProps;
    Extension: ExtensionServiceProviderProps;
};

interface OpenAIServiceProviderProps {
    apiKey: string;
    apiEndpoint: string;
    apiModel: string;
    apiTemperature: number;
    setApiKey: (key: string) => void;
    setApiEndpoint: (endpoint: string) => void;
    setApiModel: (model: string) => void;
    setApiTemperature: (temperature: number) => void;
    user: User; // replace with actual type
    useCloudSettings: boolean;
    setUseCloudSettings: (use: boolean) => void;
}

interface HuggingFaceServiceProviderProps {
    accessToken: string;
    huggingFaceModel: string;
    setAccessToken: (token: string) => void;
    setHuggingFaceModel: (model: string) => void;
}

interface ClaudeServiceProviderProps {
    claudeAPIKey: string;
    claudeAPIModel: string;
    claudeAPITemperature: number;
    setClaudeAPIKey: (key: string) => void;
    setClaudeAPIModel: (model: string) => void;
    setClaudeAPITemperature: (temperature: number) => void;
}

interface AzureServiceProviderProps {
    azureAPIKey: string;
    azureAPIModel: string;
    azureAPIEndpoint: string;
    azureAPITemperature: number;
    azureAPIDeploymentName: string;
    setAzureAPIKey: (key: string) => void;
    setAzureAPIModel: (model: string) => void;
    setAzureAPIEndpoint: (endpoint: string) => void;
    setAzureAPITemperature: (temperature: number) => void;
    setAzureAPIDeploymentName: (deploymentName: string) => void;
}

interface CustomServiceProviderProps {}

interface TeamServiceProviderProps {
    accessCode: string;
    setAccessCode: (code: string) => void;
}

interface CohereServiceProviderProps {
    cohereAPIKey: string;
    cohereModel: string;
    setCohereAPIKey: (key: string) => void;
    setCohereModel: (model: string) => void;
}

interface ExtensionServiceProviderProps {}
