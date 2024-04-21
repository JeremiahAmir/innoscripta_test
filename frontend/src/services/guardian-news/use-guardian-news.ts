import {useAxios} from "../../hooks/use-axios";
import {GuardianNewsAPIResponseType} from "../../types/NewsTypes";
import {getPreference} from "../preferences/preferences";

export const useGuardianNews = () => {
    const baseURL = process.env.REACT_APP_GUARDIAN_NEWS_API_URL as string
    const apiKey = process.env.REACT_APP_GUARDIAN_NEWS_API_KEY

    const { get } = useAxios(baseURL)

    const getNews = async () => {
        try {
            const authors = getPreference('authors')
            const authorsQuery = `show-references=authors`
            const data = await get<{response: { results: Array<GuardianNewsAPIResponseType>}}>(`/search?api-key=${apiKey}&${authors ? authorsQuery : ''}`);
            return data.response.results;
        } catch (error) {
            console.log('Error: ', error)
            return []
        } finally {

        }
    }
}