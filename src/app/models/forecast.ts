export interface Forecast {
    name: string,
    location: string,
    readonly date: Date,
    rainfall?: number
}
