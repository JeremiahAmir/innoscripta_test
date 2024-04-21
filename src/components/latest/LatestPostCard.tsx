import { Card, CardBody, CardFooter, CardText, CardTitle, Col } from "reactstrap";
import newsBanner from "../../assets/images/news.jpg";
import { Source } from "../../types/NewsTypes";

type LatestPostCardPropsType = {
  title: string;
  publishedAt: string;
  image: string | undefined;
  author: string | undefined;
  description: string | undefined;
  url: string | undefined;
  source?: Source;
};
const LatestPostCard = ({ title, publishedAt, image, author, description, url, source }: LatestPostCardPropsType) => {
  const imageUrl = image || newsBanner;

  return (
    <>
      <Col lg={4} md={6} className=" mb-4">
        <Card className="shadow-sm h-100">
          <div className="card-image overflow-hidden">
            <div className="hover-text">
              <img src={imageUrl} className="card-img-top" alt={title} />
            </div>
            <div className="image-overlay"></div>
            <span className="card-category">{source?.name ?? "General"}</span>
          </div>
          <CardBody>
            <CardText className="mb-1">
              <span className="badge rounded-pill bg-secondary cstm-badge mb-2">{publishedAt}</span>
            </CardText>

            <CardTitle tag="h5">
              <a href={url} target="_blank" rel="noreferrer">
                {title}
              </a>
            </CardTitle>
            <CardText>{description}</CardText>
          </CardBody>

          <CardFooter className="py-3">
            <div className="card-footer__info">
              <p>Posted by: {author || "unknown"}</p>
              <span className="read-more">
                <a className="text-uppercase read-more-1" href={url} target="_blank" rel="noreferrer">
                  Read more
                </a>
              </span>
            </div>
          </CardFooter>
        </Card>
      </Col>
    </>
  );
};

export default LatestPostCard;
