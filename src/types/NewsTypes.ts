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

type Source = {
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

export type NewsType = {
  title: string;
  description: string | undefined;
  image: string | undefined;
  publishedAt: string;
  author: string | undefined;
  url: string | undefined;
};
