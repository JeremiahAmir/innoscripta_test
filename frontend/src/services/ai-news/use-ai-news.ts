import {useAxios} from "../../hooks/use-axios";
import {generateQueryString} from "../../utils/AINewsUtils";
import {NewsAIAPIResponseType, NewsAIArticleResponseType, NewsType} from "../../types/NewsTypes";
import {eclipseStr} from "../../utils/helper";
import { loader } from "../../store/loader/loader";
import { useSetRecoilState } from "recoil";

export const useAiNews = () => {
    const baseURL = process.env.REACT_APP_NEWS_AI_API_URL as string;
    const apiKey = process.env.REACT_APP_NEWS_AI_API_KEY;
    const {get} = useAxios(baseURL)
    const setLoader = useSetRecoilState(loader);


    const getAINews = async (keyword: string = '', category: string|null = null, source: string|null = null, date: string = '') => {
        try {
            setLoader(true);
            const params = generateQueryString(keyword, category, source, date)
            const response: NewsAIAPIResponseType = await get(`${baseURL}?query={"$query":{"$and":${params}}}&resultType=articles&articlesSortBy=date&apiKey=${apiKey}`)
            const articles: NewsAIArticleResponseType[] = response.articles.results

            return formatter(articles)
        } catch (error) {
            console.error('Error: ', error)
            return []
        } finally {
            setLoader(false);
        }

    }

    const formatter = (articles: NewsAIArticleResponseType[]): NewsType[] => {
        let formattedData: NewsType[] = []
        if (articles && articles.length) {
            articles.forEach( (article: NewsAIArticleResponseType) => {
                formattedData.push({
                    title: article?.title,
                    description: article.body ? eclipseStr(article.body) : '',
                    image: article?.image || undefined,
                    url: article?.url,
                    publishedAt: article?.date,
                    author: article.authors && article.authors.length ? article.authors[0]?.name : undefined
                })
            })
        }

        return formattedData
    }

    return {
        getAINews
    }
}