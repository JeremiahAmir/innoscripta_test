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
      <div className="row">
        <div className="col-md-3">
          <img src={imageUrl} className="img-fluid h-100" alt="s" />
        </div>
        <div className="col-md-9">
          <span className="posted-date">{publishedAt}</span>
          <h5>
            <a href={url} target="_blank" rel="noreferrer">
              {title}
            </a>
          </h5>
        </div>
      </div>
    </div>
  );
};
