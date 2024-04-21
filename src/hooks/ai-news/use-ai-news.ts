import axios from "axios";
import { useSetRecoilState } from "recoil";
import { loader } from "../../store/loader/loader";
import { NewsAIAPIResponseType, NewsAIArticleResponseType, NewsType } from "../../types/NewsTypes";

import { generateQueryString } from "../../utils/AINewsUtils";
import { eclipseStr } from "../../utils/helper";

export const useAiNews = () => {
  const baseURL = process.env.REACT_APP_NEWS_AI_API_URL as string;
  const apiKey = process.env.REACT_APP_NEWS_AI_API_KEY;
  const setLoader = useSetRecoilState(loader);

  const getAINews = async (
    keyword: string = "",
    category: string | null = null,
    source: string | null = null,
    date: string = ""
  ) => {
    try {
      setLoader(true);
      const params = generateQueryString(keyword, category, source, date);
      const { data: response } = await axios.get<NewsAIAPIResponseType>(
        `${baseURL}?query={"$query":{"$and":${params}}}&resultType=articles&articlesSortBy=date&apiKey=${apiKey}`
      );
      let formattedData: NewsType[] = [];
      const articles: NewsAIArticleResponseType[] = response.articles.results;
      if (articles && articles.length) {
        articles.forEach((article: NewsAIArticleResponseType) => {
          formattedData.push({
            title: article?.title,
            description: article.body ? eclipseStr(article.body) : "",
            image: article?.image || undefined,
            url: article?.url,
            publishedAt: article?.date,
            author: article.authors && article.authors.length ? article.authors[0]?.name : undefined,
          });
        });
      }

      return formattedData;
    } catch (error) {
      console.error("Error: ", error);
      return [];
    } finally {
      setLoader(false);
    }
  };

  return {
    getAINews,
  };
};
