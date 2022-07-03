export interface RootState {
  alerts: Alert[]
}
export interface Alert {
    type: AlertTypes,
    message: string
}
export enum AlertTypes { success, error }