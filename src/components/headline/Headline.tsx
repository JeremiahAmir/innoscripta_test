import { Col, Row } from "reactstrap";
import newsBanner from "../../assets/images/news.jpg";

type HeadlinePropType = {
  title: string;
  publishedAt: string;
  image: string | undefined;
  url: string | undefined;
};
export const Headline = ({
  title,
  publishedAt,
  image,
  url,
}: HeadlinePropType) => {
  const imageUrl = image || newsBanner;
  return (
    <div className="banner-post-card mb-2">
      <Row>
        <Col lg={4} md={12} sm={4} className="col-4 mb-2 mb-md-0">
          <img src={imageUrl} className="img-fluid h-100" alt="s" />
        </Col>
        <Col lg={8} md={12} sm={8} className="col-8">
          <span className="posted-date">{publishedAt}</span>
          <h5>
            <a href={url} target="_blank" rel="noreferrer">
              {title}
            </a>
          </h5>
        </Col>
      </Row>
    </div>
  );
};
