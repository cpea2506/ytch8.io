/* eslint-disable  @typescript-eslint/no-explicit-any */

import { AxiosPromise } from "axios";

declare type User = {
    email: FormDataEntryValue | null;
    password: FormDataEntryValue | null;
    username?: FormDataEntryValue | null;
};

declare type AxiosFunction = (...p: any) => AxiosPromise;
