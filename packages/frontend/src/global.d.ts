export {};

declare global {
    interface Window {
        loginWithGoogle: (response) => void;
    }
}
