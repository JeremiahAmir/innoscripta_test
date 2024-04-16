const CardShimmer = () => {
  return (
    <>
      <div className="shimmer-card mb-3 col-md-12">
        <div className="row g-0">
          <div className="col-md-3 overflow-hidden">
            <div className="shimmerBG media"></div>
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <div className="shimmerBG date-line"></div>
              <div className="shimmerBG admin-line"></div>
              <div className="shimmerBG title-line"></div>
              <div className="shimmerBG content-line m-t-24"></div>
              <div className="shimmerBG content-line end"></div>
              <div className="read-more-btn">
                <div className="shimmerBG btn-line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardShimmer;
