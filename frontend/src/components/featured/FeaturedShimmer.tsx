const FeaturedShimmer = () => {
  return (
    <>
        <div className="shimmer-card card shadow-sm h-100 featured-post">
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
        </div>
    </>
  );
};

export default FeaturedShimmer;
