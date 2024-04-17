import { useAxios } from "../../hooks/use-axios";
import { getPreference } from "../preferences/preferences";
import { NewsType, NYTimesAPIResponseType } from "../../types/NewsTypes";
import { Preference } from "../../types/Preference";

export const useNyNews = () => {
  const baseURL = process.env.REACT_APP_NY_NEWS_API_URL as string;
  const apiKey = process.env.REACT_APP_NY_NEWS_API_KEY;
  const { get } = useAxios(baseURL);

  const getNews = async (): Promise<Array<NewsType>> => {
    const categories: [] | Preference[] = getPreference("categories");
    const queryParam = `fq=news_desk:(${categories?.map(
      (cat: Preference) => `"${cat.value}"`
    )})`;

    try {
      const data = await get<{
        response: { docs: Array<NYTimesAPIResponseType> };
      }>(`?api-key=${apiKey}&${categories?.length ? queryParam : ""}`);

      const newsData: NYTimesAPIResponseType[] = data.response.docs;
      let formattedData: NewsType[] = [];

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

      return formattedData;
    } catch (error) {
      console.error("Error: ", error);
      return [];
    } finally {
    }
  };

  return {
    getNews,
  };
};
