import { useAxios } from "../../hooks/use-axios";
import { SourceType, SourceAPIResponseType } from "../../types/SourceType";
import { getPreference } from "../preferences/preferences";
import { NewsOrgAPIResponseType, NewsType } from "../../types/NewsTypes";
import { Preference } from "../../types/Preference";

export const useNewsOrg = () => {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    const baseURL: string = process.env.REACT_APP_NEWS_API_URL as string;
    const { get } = useAxios(baseURL);

    const getNewsOrgs = async (
        queryParam: string = "q",
        date: string | null = null
    ): Promise<{ totalRecords: number; data: NewsType[] }> => {
        let url = `${baseURL}?apiKey=${apiKey}`;
        if (queryParam !== "q") {
            url += `&${queryParam}`;
        } else {
            url += `&q=${queryParam}`; // As API always required a parameter
        }

        const data: any = await get<{ article: Array<NewsOrgAPIResponseType> }>(
            url
        );
        const newsData = data.articles;

        const formattedData: NewsType[] = [];
        if (newsData && newsData.length) {
            newsData.forEach((d: NewsOrgAPIResponseType) => {
                const slicedDate = d.publishedAt.slice(0, 10);
                if (date) {
                    if (date === slicedDate) {
                        formattedData.push({
                            title: d.title,
                            description: d.description || undefined,
                            author: d.author,
                            publishedAt: slicedDate,
                            image: d.urlToImage || undefined,
                            url: d.url,
                        });
                    }
                } else {
                    formattedData.push({
                        title: d.title,
                        description: d.description || undefined,
                        author: d.author,
                        publishedAt: slicedDate,
                        image: d.urlToImage || undefined,
                        url: d.url,
                    });
                }
            });
        }

        return { totalRecords: data.totalResults, data: formattedData };
    };

    const getSources = async () => {
        try {
            const { sources } = await get<{
                sources: Array<SourceAPIResponseType>;
            }>(`${baseURL}/sources?apiKey=${apiKey}`);
            const formattedSources: SourceType[] = [];
            if (sources && sources.length) {
                sources.forEach((source: SourceAPIResponseType) =>
                    formattedSources.push({
                        value: source.id,
                        label: source.name,
                    })
                );
            }

            return formattedSources;
        } catch (error) {
            console.error(error);
        } finally {
        }
    };

    return {
        getSources,
        getNewsOrgs,
    };
};
