export interface UserState {
    auth: boolean,
    user?: User
}
export interface User {
    id: number,
    name: string,
    email: string
}