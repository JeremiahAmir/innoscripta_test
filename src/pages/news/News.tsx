import { Button, Col, Container } from "reactstrap";
import Filters from "../../components/filters/Filters";
import Card from "../../components/news/Card";
import CardShimmer from "../../components/news/CardShimmer";
import { useEffect, useState } from "react";
import { NewsType } from "../../types/NewsTypes";
import { useNewsOrg } from "../../services/org-news/use-news-org";
import { useRecoilValue } from "recoil";
import { loader } from "../../store/loader/loader";

const News = () => {
    const [news, setNews] = useState<Awaited<Array<NewsType>>>([]);
    const [date, setDate] = useState("");
    const [params, setParams] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalRecord, setTotalRecord] = useState(0);
    const { getNewsOrgs } = useNewsOrg();
    const isLoading = useRecoilValue(loader);

    useEffect(() => {
        (async () => {
            const { totalRecords, data } = await getNewsOrgs();
            setNews(data);
            setTotalRecord(totalRecords);
        })();
    }, []);

    const handleSearch = async (q: string) => {
        if (!q.length) {
            q = "q";
        }
        const { totalRecords, data } = await getNewsOrgs(q, date);
        setNews(data);
        setTotalRecord(totalRecords);
    };

    const handleLoadMore = async () => {
        const page: number = currentPage + 1;
        const q = `page=${page}&q=q`;
        const { totalRecords, data } = await getNewsOrgs(q);
        if (data && data.length) {
            setNews((oldNews) => {
                return [...oldNews, ...data];
            });
        }
    };

    return (
        <>
            <Filters
                initSearch={(q) => handleSearch(q)}
                setParentDate={(date) => setDate(date)}
            />
            <div className="latest-news trending-news posts-section">
                <Container>
                    {isLoading ? (
                        <CardShimmer />
                    ) : news && news.length ? (
                        news.map((d: NewsType, i: number) => (
                            <Card
                                key={i}
                                title={d.title}
                                description={d.description}
                                publishedAt={d.publishedAt}
                                image={d.image}
                                author={d.author}
                                url={d.url}
                            />
                        ))
                    ) : (
                        ""
                    )}
                    <br />
                    <Col lg={2} md={3} className="col-4 mt-3 mx-auto">
                        {news.length && totalRecord > news.length ? (
                            <Button
                                className="btn btn-primary cstm-btn w-100"
                                onClick={handleLoadMore}
                            >
                                Load More
                            </Button>
                        ) : (
                            <h2>No News available</h2>
                        )}
                    </Col>
                </Container>
            </div>
        </>
    );
};
export default News;
