import axios from "axios";
import { useSetRecoilState } from "recoil";
import { loader } from "../../store/loader/loader";
import { NewsType, NYTimesAPIResponseType } from "../../types/NewsTypes";
import { PreferenceType } from "../../types/PreferenceType";
import { getPreference } from "../preferences/preferences";

export const useNyNews = () => {
  const baseURL = process.env.REACT_APP_NY_NEWS_API_URL as string;
  const apiKey = process.env.REACT_APP_NY_NEWS_API_KEY;

  const setLoader = useSetRecoilState(loader);

  const getNYNews = async (): Promise<Array<NewsType>> => {
    const categories: [] | PreferenceType[] = getPreference("categories");
    const queryParam = `fq=news_desk:(${categories?.map((cat: PreferenceType) => `"${cat.value}"`)})`;

    try {
      setLoader(true);
      const { data } = await axios.get<{
        response: { docs: Array<NYTimesAPIResponseType> };
      }>(`${baseURL}?api-key=${apiKey}&${categories?.length ? queryParam : ""}`);

      const newsData: NYTimesAPIResponseType[] = data.response.docs;
      let formattedData: NewsType[] = [];

      newsData.forEach((d: NYTimesAPIResponseType) => {
        formattedData.push({
          title: d?.headline?.main,
          description: d?.lead_paragraph,
          image: d?.multimedia[0]?.url ? `https://www.nytimes.com/${d?.multimedia[0]?.url}` : undefined,
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
      setLoader(false);
    }
  };

  return {
    getNYNews,
  };
};
