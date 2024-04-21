export type NYTimesAPIResponseType = {
  _id: string;
  headline: { main: string };
  lead_paragraph: string;
  byline: { original: string };
  pub_date: string;
  section_name: string;
  source: string;
  news_desk: string;
  multimedia: Array<{ url: string }>;
  web_url: string;
};

export type GuardianNewsAPIResponseType = {
  pillarName: string;
  sectionName: string;
  webTitle: string;
  webPublicationDate: string;
  webUrl: string;
};

export type Source = {
  id: string;
  name: string;
};

export type NewsOrgAPIResponseType = {
  author?: string;
  content?: string;
  description?: string;
  publishedAt: string;
  source?: Source;
  title: string;
  url?: string;
  urlToImage?: string;
};
export type NewsAIArticleResponseType = {
  authors: { isAgency: false; name: string; type: string; uri: string }[];
  body: string;
  dataType: string;
  date: string;
  dateTime: string;
  dateTimePub: string;
  eventUri: string | null;
  image: string | null;
  isDuplicate: boolean;
  lang: string;
  relevance: number;
  sentiment: number;
  sim: boolean;
  source: { uri: string; dateaType: string; title: string };
  time: string;
  title: string;
  uri: string;
  url: string;
  wgt: number;
};

export type NewsAIAPIResponseType = {
  articles: {
    results: NewsAIArticleResponseType[];
    totalResults: number;
    page: number;
    count: number;
    pages: number;
  };
};

export type NewsType = {
  title: string;
  description: string | undefined;
  image: string | undefined;
  publishedAt: string;
  author: string | undefined;
  url: string | undefined;
  source?: Source;
};
