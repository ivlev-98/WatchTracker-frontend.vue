export interface UserState {
    auth: boolean,
    user?: User,
    loginErrors?: loginErrors,
    registerErrors?: registerErrors
}
export interface User {
    id: number,
    name: string,
    email: string
}
export interface loginErrors {
    email?: Array<string>,
    password?: Array<string>
}
export interface registerErrors {
    name?: Array<string>
    email?: Array<string>,
    password?: Array<string>
}