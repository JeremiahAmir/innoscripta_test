import axios from "axios";
import { GuardianNewsAPIResponseType } from "../../types/NewsTypes";
import { getPreference } from "../preferences/preferences";

export const useGuardianNews = () => {
  const baseURL = process.env.REACT_APP_GUARDIAN_NEWS_API_URL as string;
  const apiKey = process.env.REACT_APP_GUARDIAN_NEWS_API_KEY;

  const getNews = async () => {
    try {
      const authors = getPreference("authors");
      const authorsQuery = `show-references=authors`;
      const { data } = await axios.get<{ response: { results: Array<GuardianNewsAPIResponseType> } }>(
        `${baseURL}/search?api-key=${apiKey}&${authors ? authorsQuery : ""}`
      );
      return data.response.results;
    } catch (error) {
      console.log("Error: ", error);
      return [];
    } finally {
    }
  };
};
