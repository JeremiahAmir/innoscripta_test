import newsBanner from "../../assets/images/news.jpg";

const LatestPostCard = () => {
  return (
    <>
      <div className="col-md-6 mb-3">
        <div className="card shadow-sm h-100">
          <div className="card-image overflow-hidden">
            <div className="hover-text">
              <img
                src={newsBanner}
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="image-overlay"></div>
          </div>
          <div className="card-body">
            <p className="card-text mb-1">
              <span className="badge rounded-pill bg-secondary cstm-badge mb-2">
                13-04-2024
              </span>
            </p>
            <h3 className="card-title">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit
            </h3>

            <p className="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer. This is a longer card with supporting text below as a
              natural lead-in to additional content. This content is a little
              bit longer.
            </p>
          </div>

          <div className="card-footer py-3">
            <div className="card-footer__info">
              <small>Posted by: Admin</small>
              <span className="read-more">
                <a className="text-uppercase read-more-1" href="#anchor">
                  Read more
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestPostCard;
