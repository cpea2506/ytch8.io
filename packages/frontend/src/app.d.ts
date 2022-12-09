// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
    interface Locals {
        userid: string | null;
    }

    interface PageData {
        user: {
            username: string;
            email: string;
            image: string;
        };
        genres: Array<{
            id: string;
            name: string;
        }>;
    }

    interface Error {
        message: string;
        code: string;
    }

    // interface Platform {}
}
