export interface RootState {
  alerts: Alert[]
}
export interface Alert {
    type: AlertTypes,
    messages: Array<string>
}
export enum AlertTypes { success, error }