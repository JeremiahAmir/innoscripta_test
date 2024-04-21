import newsBanner from "../../assets/images/news.jpg";

type FeatureCardPropsType = {
  title: string;
  publishedAt: string;
  image: string | undefined;
  author: string | undefined;
  description: string | undefined;
  url: string | undefined;
  source?: { name: string };
};
const FeaturedCard = ({ title, publishedAt, image, author, source, url }: FeatureCardPropsType) => {
  const imageUrl = image || newsBanner;
  return (
    <>
      <div className="card shadow-sm h-100 featured-post">
        <div className="card-image overflow-hidden">
          <div className="hover-text">
            <img src={imageUrl} className="card-img-top" alt="..." />
          </div>
          <div className="image-overlay"></div>
          <span className="card-category">{source?.name ?? "General"}</span>
        </div>
        <div className="card-body">
          <p className="card-text mb-1">
            <span className="badge bg-secondary cstm-badge mb-2">{publishedAt}</span>
          </p>
          <p className="card-text">Posted by: {author || "Unknown"}</p>
          <h3 className="card-title">
            <a href={url} rel="noreferrer" target="_blank">
              {title}
            </a>
          </h3>
        </div>
      </div>
    </>
  );
};
export default FeaturedCard;
