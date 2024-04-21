import { useEffect, useState } from "react";
import FeaturedCard from "../../components/featured/FeaturedCard";
import LatestPostCard from "../../components/latest/LatestPostCard";
import { useNyNews } from "../../services/ny-news/use-ny-news";
import { useNewsOrg } from "../../services/org-news/use-news-org";
import { Headline } from "../../components/headline/Headline";
import { Col, Container, Row } from "reactstrap";
import { loader } from "../../store/loader/loader";
import { useRecoilValue } from "recoil";
import FeaturedShimmer from "../../components/featured/FeaturedShimmer";
import HeadlineShimmer from "../../components/headline/HeadlineShimmer";
import LatestPostCardShimmer from "../../components/latest/LatestPostCardShimmer";

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
    const { getNYNews } = useNyNews();
    const { getNewsOrgs } = useNewsOrg();
    const isLoading = useRecoilValue(loader);

    useEffect(() => {
        (async () => {
            const nyNews = await getNYNews();
            const data = await getNewsOrgs();
            setNews([...nyNews, ...data]);
        })();
    }, []);

    return (
        <>
            <div className="banner">
                <Container>
                    <Row>
                        <Col md={8}>
                            <div className="posts-section mb-3">
                                <Row>
                                    <Col md={12} className="mb-3">
                                        {isLoading ? (
                                            <FeaturedShimmer />
                                        ) : (
                                            <FeaturedCard
                                                title={news[0]?.title}
                                                publishedAt={
                                                    news[0]?.publishedAt
                                                }
                                                image={news[0]?.image}
                                                author={news[0]?.author}
                                                description={
                                                    news[0]?.description
                                                }
                                                url={news[0]?.url}
                                            />
                                        )}
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md={4} className="headline-hold">
                            {isLoading ? (
                                <HeadlineShimmer />
                            ) : news && news.length ? (
                                news.map((d: NewsType, index: number) => {
                                    if (index > 0 && index < 11) {
                                        return (
                                            <Headline
                                                key={index}
                                                title={d?.title}
                                                publishedAt={d?.publishedAt}
                                                image={d?.image}
                                                url={d?.url}
                                            />
                                        );
                                    }
                                    return null;
                                })
                            ) : (
                                ""
                            )}
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="latest-news">
                <Container>
                    <h2>Latest News</h2>
                    <Row className="posts-section">
                        {isLoading ? (
                            <LatestPostCardShimmer />
                        ) : news && news.length ? (
                            news.map((d: NewsType, index: number) => {
                                if (index < 10) return null;
                                return (
                                    <LatestPostCard
                                        key={index}
                                        title={d?.title}
                                        publishedAt={d?.publishedAt}
                                        image={d?.image}
                                        author={d?.author}
                                        description={d?.description}
                                        url={d?.url}
                                    />
                                );
                            })
                        ) : (
                            ""
                        )}
                    </Row>
                </Container>
            </div>
        </>
    );
};
export default Feeds;
