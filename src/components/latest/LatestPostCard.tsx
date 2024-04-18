import { Col } from "reactstrap";
import newsBanner from "../../assets/images/news.jpg";

type LatestPostCardPropsType = {
  title: string;
  publishedAt: string;
  image: string | undefined;
  author: string | undefined;
  description: string | undefined;
  url: string | undefined;
};
const LatestPostCard = ({
  title,
  publishedAt,
  image,
  author,
  description,
  url,
}: LatestPostCardPropsType) => {
  const imageUrl = image || newsBanner;

  return (
    <>
      <Col lg={4} md={6} className=" mb-4">
        <div className="card shadow-sm h-100">
          <div className="card-image overflow-hidden">
            <div className="hover-text">
              <img src={imageUrl} className="card-img-top" alt="..." />
            </div>
            <div className="image-overlay"></div>
            <span className="card-category">General</span>
          </div>
          <div className="card-body">
            <p className="card-text mb-1">
              <span className="badge rounded-pill bg-secondary cstm-badge mb-2">
                {publishedAt}
              </span>
            </p>
            <h3 className="card-title">
              <a href={url} target="_blank" rel="noreferrer">
                {title}
              </a>
            </h3>

            <p className="card-text">{description}</p>
          </div>

          <div className="card-footer py-3">
            <div className="card-footer__info">
              <small>Posted by: {author || "unknown"}</small>
              <span className="read-more">
                <a
                  className="text-uppercase read-more-1"
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read more
                </a>
              </span>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default LatestPostCard;
