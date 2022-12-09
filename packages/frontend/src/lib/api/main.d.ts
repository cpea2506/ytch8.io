/* eslint-disable  @typescript-eslint/no-explicit-any */

declare type User = {
    email: FormDataEntryValue | null;
    password: FormDataEntryValue | null;
    username?: FormDataEntryValue | null;
};

declare type AxiosFunction = (...p: any) => AxiosPromise;

declare type GithubData = {
    client_secret: string;
    client_id: string;
    code: string;
    state: string;
};

declare type GithubAccessToken = {
    access_token: string;
    token_type: string;
    scope: string;
};

declare type GoogleData = {
    credential: string;
};

declare type GithubResponse = {
    login: string;
    avatar_url: string;
    name: string;
};
