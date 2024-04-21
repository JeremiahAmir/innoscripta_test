import { useAxios } from "../../hooks/use-axios";
import { SourceType, SourceAPIResponseType } from "../../types/SourceType";
import { getPreference } from "../preferences/preferences";
import { NewsOrgAPIResponseType, NewsType } from "../../types/NewsTypes";
import {PreferenceType} from "../../types/PreferenceType";

export const useNewsOrg = () => {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    const baseURL: string = process.env.REACT_APP_NEWS_API_URL as string;
    const { get } = useAxios(baseURL);

    const getNewsOrgs = async (): Promise<NewsType[]> => {
        let url = `${baseURL}?apiKey=${apiKey}`;
        const sources: PreferenceType[] = getPreference('sources')
        if (sources && sources.length) {
            url += `&sources=${sources.map(source => source.value).join(',')}`
        } else {
            url += `&q=q`
        }
        const data = await get<{ articles: Array<NewsOrgAPIResponseType> }>(url);
        return formatter(data.articles)
    };

    const formatter = (newsData: NewsOrgAPIResponseType[]) => {
        const formattedData: NewsType[] = [];
        if (newsData && newsData.length) {
            newsData.forEach((d: NewsOrgAPIResponseType) => {
                formattedData.push({
                    title: d.title,
                    description: d.description || undefined,
                    author: d.author,
                    publishedAt: d.publishedAt.slice(0, 10),
                    image: d.urlToImage || undefined,
                    url: d.url,
                });
            });
        }

        return formattedData;
    }
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
