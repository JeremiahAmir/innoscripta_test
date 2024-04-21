import React, { useEffect, useState } from "react";
import Select, { SingleValue } from "react-select";
import { toast } from "react-toastify";
import { Button, Col, Container, Form, Input } from "reactstrap";
import { useRecoilValue } from "recoil";
import Card from "../../components/news/Card";
import CardShimmer from "../../components/news/CardShimmer";
import { categories } from "../../data/categories";
import { newsAISources } from "../../data/sources";
import { useAiNews } from "../../hooks/ai-news/use-ai-news";
import { useNewsOrg } from "../../hooks/org-news/use-news-org";
import { loader } from "../../store/loader/loader";
import { NewsType } from "../../types/NewsTypes";
import { SourceType } from "../../types/SourceType";

const News = () => {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState<SingleValue<{ label: string; value: string }>>(null);
  const [source, setSource] = useState<SingleValue<{ label: string; value: string }>>(null);
  const [date, setDate] = useState("");

  const [sources, setSources] = useState<Array<SourceType>>(newsAISources);

  const [news, setNews] = useState<Awaited<Array<NewsType>>>([]);
  const [displayedNews, setDisplayedNews] = useState<Awaited<Array<NewsType>>>([]);

  const [showMoreBtn, setShowMoreBtn] = useState(true);

  const isLoading = useRecoilValue(loader);
  const { getAINews } = useAiNews();
  const { getSources } = useNewsOrg();

  useEffect(() => {
    (async () => {
      const news = await getAINews();
      setNews(news);
      setDisplayedNews(news.slice(0, 10));
    })();
  }, []);

  const handleLoadMore = async () => {
    const currentlyDisplayed = displayedNews.length;
    const newDisplayedNews = news.slice(0, currentlyDisplayed + 10);
    setDisplayedNews(newDisplayedNews);
    if (newDisplayedNews.length >= news.length) {
      setShowMoreBtn(false);
    }
  };

  const validate = () => {
    return !!(keyword.length || date.length || category || source);
  };

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please select any field to search.");
      return;
    }
    const selectedCategory = category ? category.label : null;
    const selectedSource = source ? source.value : null;
    const newsData = await getAINews(keyword, selectedCategory, selectedSource, date);
    setNews(newsData);
    setDisplayedNews(newsData.slice(0, 10));
  };

  const customSelectStyles = {
    control: (provided: any) => ({
      ...provided,
      minHeight: "46px",
      height: "46px",
    }),

    option: (styles: any) => {
      return {
        ...styles,
        color: "#000",
      };
    },
  };

  return (
    <>
      <div className="banner-area">
        <Container>
          <Form className="row g-3" onSubmit={(e) => handleSearch(e)}>
            <Col md={12}>
              <Input
                type="text"
                className="form-control"
                placeholder="Search Keyword"
                onChange={(e) => setKeyword(e.target.value)}
              />
            </Col>
            <Col md={4}>
              <Select
                placeholder={"Select Category"}
                styles={customSelectStyles}
                closeMenuOnSelect={false}
                options={categories}
                onChange={setCategory}
                value={category}
              />
            </Col>
            <Col md={4}>
              <Select
                placeholder={"Select Source"}
                styles={customSelectStyles}
                closeMenuOnSelect={false}
                options={sources}
                onChange={setSource}
                value={source}
              />
            </Col>
            <Col md={4}>
              <Input type="date" className="form-control" onChange={(e) => setDate(e.target.value)} />
            </Col>
            <Col md={4} className="col-12 mx-auto">
              <Button type="submit" className="btn btn-primary cstm-btn py-2 w-100">
                Search
              </Button>
            </Col>
          </Form>
        </Container>
      </div>
      <div className="latest-news trending-news posts-section">
        <Container>
          {isLoading ? (
            <CardShimmer />
          ) : displayedNews && displayedNews.length ? (
            displayedNews.map((d: NewsType, i: number) => (
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
            {displayedNews && displayedNews.length && showMoreBtn ? (
              <Button className="btn btn-primary cstm-btn w-100" onClick={handleLoadMore}>
                Load More
              </Button>
            ) : (
              <p className="not-available">No News Available</p>
            )}
          </Col>
        </Container>
      </div>
    </>
  );
};
export default News;
