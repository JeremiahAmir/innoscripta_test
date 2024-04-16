import { Container } from "reactstrap";
import Filters from "../../components/filters/Filters";
import Card from "../../components/news/Card";
import CardShimmer from "../../components/news/CardShimmer";

const News = () => {
  return (
    <>
      <Filters />
      <div className="latest-news trending-news posts-section">
        <Container>
          <Card />
          <Card />
          <Card />
          <br />
          <div className="col-lg-2 col-md-3 col-4 mt-3 mx-auto">
            <button className="btn btn-primary cstm-btn w-100">
              Load More
            </button>
          </div>
        </Container>
      </div>
    </>
  );
};
export default News;
