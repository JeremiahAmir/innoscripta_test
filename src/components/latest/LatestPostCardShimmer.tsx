const LatestPostCardShimmer = () => {
  return (
    <>
      <div className="col-md-6 mb-3">
        <div className="shimmer-card card shadow-sm h-100">
          <div className="card-image overflow-hidden">
            <div className="hover-text">
              <div className="shimmerBG media"></div>
            </div>
            <div className="image-overlay"></div>
          </div>
          <div className="card-body">
            <div className="shimmerBG date-line"></div>
            <div className="shimmerBG title-line"></div>

            <div className="shimmerBG content-line m-t-24"></div>
            <div className="shimmerBG content-line"></div>
            <div className="shimmerBG content-line"></div>
            <div className="shimmerBG content-line end"></div>
          </div>

          <div className="px-3 py-3">
            <div className="card-footer__info d-flex justify-content-between">
              <div className="shimmerBG admin-line"></div>
              <div className="shimmerBG admin-line"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestPostCardShimmer;
