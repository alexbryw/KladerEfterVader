export interface WeatherResponse {
    dt: number
    main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    sea_level: number
    grnd_level: number
    humidity: number
    temp_kf: number
    }
    weather: Array<{
        id: number, main: string
        description:string
        icon: string
    }>
    clouds: {all: number}
    wind: {
        speed: number
        deg: number
    }
    sys:{pod: string}
    dt_txt: string
}

export const placeholderWeatherResponse = {
    "dt":32503683661,
    "main":{
        "temp":273.15,
        "feels_like":273.15,
        "temp_min":273.15,
        "temp_max":273.15,
        "pressure":1000,
        "sea_level":1000,
        "grnd_level":1000,
        "humidity":100,
        "temp_kf":0
    },"weather":[{
        "id":800,
        "main":"Weather",
        "description":"väder",
        "icon":"load"
    }],"clouds":{
        "all":0
    },"wind":{
        "speed":0.00,
        "deg":123},
        "sys":{
        "pod":"n"
    },"dt_txt":"3000-01-01 01:01:01"
}