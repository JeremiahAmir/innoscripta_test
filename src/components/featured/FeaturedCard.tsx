import newsBanner from "../../assets/images/news.jpg";
const FeaturedCard = () => {
  return (
    <>
      <div className="card shadow-sm h-100 featured-post">
        <div className="card-image overflow-hidden">
          <div className="hover-text">
            <img src={newsBanner} className="card-img-top" alt="..." />
          </div>
          <div className="image-overlay"></div>
        </div>
        <div className="card-body">
          <p className="card-text mb-1">
            <span className="badge bg-secondary cstm-badge mb-2">
              13-04-2024
            </span>
          </p>
          <p className="card-text">Posted by: Admin</p>
          <h3 className="card-title">
            <a href="#anchor">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit Lorem
              ipsum, dolor sit amet consectetur adipisicing elit
            </a>
          </h3>
        </div>
      </div>
    </>
  );
};
export default FeaturedCard;
