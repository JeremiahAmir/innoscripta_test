import newsBanner from "../../assets/images/news.jpg";
const Card = () => {
  return (
    <>
      <div className="card card-horitonzal mb-3 col-md-12">
        <div className="row g-0">
          <div className="col-md-3 overflow-hidden">
            <img
              src={newsBanner}
              className="img-fluid rounded-start h-100"
              alt="..."
            />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <p className="card-text mb-2">
                <span className="badge bg-secondary cstm-badge">
                  13-04-2024
                </span>
              </p>
              <p className="card-text mb-2">
                <small className="text-muted">Posted by: Admin</small>
              </p>
              <h5 className="card-title">
                Lorem Ipsum is simply dummy text of the printing
              </h5>
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
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
