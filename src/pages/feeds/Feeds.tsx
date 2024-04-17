import { useEffect, useState } from "react";
import FeaturedCard from "../../components/featured/FeaturedCard";
import LatestPostCard from "../../components/latest/LatestPostCard";
import { useNyNews } from "../../services/ny-news/use-ny-news";
import { useNewsOrg } from "../../services/org-news/use-news-org";
import { Headline } from "../../components/headline/Headline";

type NewsType = {
  title: string;
  description: string | undefined;
  image: string | undefined;
  publishedAt: string;
  author: string | undefined;
  url: string | undefined;
};
const Feeds = () => {
  const [news, setNews] = useState<Awaited<Array<NewsType>>>([]);
  const { getNews } = useNyNews();
  const { getNewsOrgs } = useNewsOrg();

  useEffect(() => {
    (async () => {
      const nyNews = await getNews();
      const orgNews = await getNewsOrgs();
      setNews([...nyNews, ...orgNews]);
    })();
  }, []);

  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="posts-section mb-3">
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <FeaturedCard
                      title={news[0]?.title}
                      publishedAt={news[0]?.publishedAt}
                      image={news[0]?.image}
                      author={news[0]?.author}
                      description={news[0]?.description}
                      url={news[0]?.url}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 headline-hold">
              {news && news.length
                ? news.map((d: NewsType, index: number) => {
                    if (index > 0 && index < 10) return;
                    return (
                      <Headline
                        key={index}
                        title={d?.title}
                        publishedAt={d?.publishedAt}
                        image={d?.image}
                        url={d?.url}
                      />
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
      </div>
      <div className="latest-news">
        <div className="container">
          <h2>Latest News</h2>
          <div className="row posts-section">
            {news && news.length
              ? news.map((d: NewsType, index: number) => {
                  if (index < 10) return;
                  return (
                    <LatestPostCard
                      key={index}
                      title={d?.title}
                      publishedAt={d?.publishedAt}
                      image={d?.image}
                      author={d?.author}
                      description={d?.description}
                    />
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};
export default Feeds;
