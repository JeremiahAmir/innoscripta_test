export const eclipseStr = (str: string, abv: string = '...') => {
    if (str && str.length > 300) {
        return `${str.slice(0, 100)}${abv}`
    }

    return str
}