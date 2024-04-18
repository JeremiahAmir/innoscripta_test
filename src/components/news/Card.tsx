import newsBanner from "../../assets/images/news.jpg";
import {NewsType} from "../../types/NewsTypes";

const Card = ({title, description, image, publishedAt, author, url}: NewsType) => {
  const imageUrl = image || newsBanner;

  return (
    <>
      <div className="card card-horitonzal mb-3 col-md-12">
        <div className="row g-0">
          <div className="col-md-3 overflow-hidden">
            <img
              src={imageUrl}
              className="img-fluid rounded-start h-100"
              alt="..."
            />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <p className="card-text mb-2">
                <span className="badge bg-secondary cstm-badge">
                  {publishedAt}
                </span>
              </p>
              <p className="card-text mb-2">
                <small className="text-muted">Posted by: { author || 'Unknown' }</small>
              </p>
              <h5 className="card-title">
                {title}
              </h5>
              <p className="card-text">
                {description}
              </p>
              <div className="read-more-btn">
                <a href="#anchor" className="btn btn-primary cstm-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
