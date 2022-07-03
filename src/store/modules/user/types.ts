export interface UserState {
    auth: boolean,
    user?: User,
    loginErrors: loginErrors
}
export interface User {
    id: number,
    name: string,
    email: string
}
export interface loginErrors {
    email?: Array<String>,
    password?: Array<String>
}