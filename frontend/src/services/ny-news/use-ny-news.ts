import { useAxios } from "../../hooks/use-axios";
import { getPreference } from "../preferences/preferences";
import { NewsType, NYTimesAPIResponseType } from "../../types/NewsTypes";
import { PreferenceType } from "../../types/PreferenceType";
import { loader } from "../../store/loader/loader";
import { useSetRecoilState } from "recoil";

export const useNyNews = () => {
    const baseURL = process.env.REACT_APP_NY_NEWS_API_URL as string;
    const apiKey = process.env.REACT_APP_NY_NEWS_API_KEY;
    const { get } = useAxios(baseURL);

    const setLoader = useSetRecoilState(loader);

    const getNYNews = async (): Promise<Array<NewsType>> => {
        const categories: [] | PreferenceType[] = getPreference("categories");
        const queryParam = `fq=news_desk:(${categories?.map(
            (cat: PreferenceType) => `"${cat.value}"`
        )})`;

        try {
            setLoader(true);
            const data = await get<{
                response: { docs: Array<NYTimesAPIResponseType> };
            }>(`?api-key=${apiKey}&${categories?.length ? queryParam : ""}`);

            const newsData: NYTimesAPIResponseType[] = data.response.docs;
            return formatter(newsData)
        } catch (error) {
            console.error("Error: ", error);
            return [];
        } finally {
            setLoader(false);
        }
    };

    const formatter = (newsData: NYTimesAPIResponseType[]): NewsType[] => {
        let formattedData: NewsType[] = [];
        if (newsData && newsData.length) {
            newsData.forEach((d: NYTimesAPIResponseType) => {
                formattedData.push({
                    title: d?.headline?.main,
                    description: d?.lead_paragraph,
                    image: d?.multimedia[0]?.url
                        ? `https://www.nytimes.com/${d?.multimedia[0]?.url}`
                        : undefined,
                    publishedAt: d?.pub_date.slice(0, 10),
                    author: d?.byline.original,
                    url: d?.web_url,
                });
            });
        }

        return formattedData;
    }

    return {
        getNYNews,
    };
};
