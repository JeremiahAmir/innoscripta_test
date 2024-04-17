import { useAxios } from "../../hooks/use-axios";
import { SourceType, SourceModel } from "../../types/NewsOrg/NewsOrg";

export const useNewsOrg = () => {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const baseURL: string = process.env.REACT_APP_NEWS_API_URL as string;
  const { get } = useAxios(baseURL);

  const getSources = async () => {
    try {
      const { sources } = await get<{ sources: Array<SourceType> }>(
        `${baseURL}/sources?apiKey=${apiKey}`
      );
      const formattedSources: SourceModel[] = [];
      if (sources && sources.length) {
        sources.forEach((source) =>
          formattedSources.push({ value: source.id, label: source.name })
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
  };
};
