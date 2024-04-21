export const generateQueryString = (keyword: string, category: string|null, source: string|null, date: string) => {
    let params = '['

    if (keyword && keyword !== '') {
        params += `{"keyword": "${keyword}"}`
    }

    if (category) {
        params += `{"categoryUri": "dmoz/${category}"}`
    }

    if (source) {
        params += `{"sourceUri": "${source}"}`
    }

    if (date && date !== '') {
        params += `{"dateStart": "${date}","dateEnd": "${date}","lang": "eng"}`
    }

    if (keyword === '' && source === null && category === null && date === '') {
        params += `{"lang": "eng"}`
    }

    params += "]"

    return params
}

export const generateQueryStringNew = (keyword: string, category: string|null, source: string|null, date: string): string => {
    let params: string[] = []

    if (keyword && keyword !== '') {
        params.push(`{"keyword": "${keyword}"}`)
    }

    if (category) {
        params.push(`{"categoryUri": "dmoz/${category}"}`)
    }

    if (source) {
        params.push(`{"sourceUri": "${source}"}`)
    }

    if (date && date !== '') {
        params.push(`{"dateStart": "${date}","dateEnd": "${date}","lang": "eng"}`)
    }

    if (keyword === '' && source === null && category === null && date === '') {
        params.push(`{"lang": "eng"}`)
    }

    return `[${params.join(',')}]`
}