declare type LoginUser = {
    username: string;
    password: string;
};

declare type RegisterUser = {
    email: string;
} & LoginUser;
