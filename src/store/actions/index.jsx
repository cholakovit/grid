export const selectCrypto = (crypto) => {
    return {
        type: 'SELECT',
        payload: crypto
    }
}