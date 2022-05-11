export default async function request(city, units) {
    return await fetch(`${process.env.REACT_APP_URL}?appid=${process.env.REACT_APP_KEY}&q=${encodeURI(city)}&units=${units}`)
}