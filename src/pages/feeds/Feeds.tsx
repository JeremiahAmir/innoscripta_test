import FeaturedCard from "../../components/featured/FeaturedCard";
import LatestPostCard from "../../components/latest/LatestPostCard";
import newsBanner from "../../assets/images/news.jpg";

const Feeds = () => {
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="posts-section mb-3">
                <div className="row">
                  <div className="col-md-12 mb-3">
                    <FeaturedCard />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="banner-post-card mb-2">
                <div className="row">
                  <div className="col-md-3">
                    <img src={newsBanner} className="img-fluid h-100" alt="s" />
                  </div>
                  <div className="col-md-9">
                    <span className="posted-date">13-04-2024</span>
                    <h5>
                      <a href="#anchor">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit
                      </a>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="banner-post-card shimmer-card mb-2">
                <div className="row">
                  <div className="col-md-3">
                    <div className="shimmerBG media"></div>
                  </div>
                  <div className="col-md-9">
                    <div className="shimmerBG date-line"></div>
                    <div className="shimmerBG title-line"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="latest-news">
        <div className="container">
          <h2>Latest News</h2>
          <div className="row posts-section">
            <LatestPostCard />
            <LatestPostCard />
            <LatestPostCard />
            <LatestPostCard />
          </div>
        </div>
      </div>
    </>
  );
};
export default Feeds;
