import { Col, Row } from "reactstrap";

const HeadlineShimmer = () => {
    return (
        <>
            <div className="banner-post-card shimmer-card mb-2">
                <Row>
                    <Col md={3}>
                        <div className="shimmerBG media"></div>
                    </Col>
                    <Col md={9}>
                        <div className="shimmerBG date-line"></div>
                        <div className="shimmerBG title-line"></div>
                    </Col>
                </Row>
            </div>
            <div className="banner-post-card shimmer-card mb-2">
                <Row>
                    <Col md={3}>
                        <div className="shimmerBG media"></div>
                    </Col>
                    <Col md={9}>
                        <div className="shimmerBG date-line"></div>
                        <div className="shimmerBG title-line"></div>
                    </Col>
                </Row>
            </div>
            <div className="banner-post-card shimmer-card mb-2">
                <Row>
                    <Col md={3}>
                        <div className="shimmerBG media"></div>
                    </Col>
                    <Col md={9}>
                        <div className="shimmerBG date-line"></div>
                        <div className="shimmerBG title-line"></div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default HeadlineShimmer;
