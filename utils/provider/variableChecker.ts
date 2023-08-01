export function keyValidation(key: string) {
    if (!key) {
        return {
            status: false,
            error: 'No Key Provided',
        };
    }

    return {
        status: true,
        error: null,
    };
}
