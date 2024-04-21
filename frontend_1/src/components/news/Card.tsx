import { CardBody, CardText, CardTitle, Col, Row } from "reactstrap";
import newsBanner from "../../assets/images/news.jpg";
import { NewsType } from "../../types/NewsTypes";

const Card = ({
    title,
    description,
    image,
    publishedAt,
    author,
    url,
}: NewsType) => {
    const imageUrl = image || newsBanner;

    return (
        <>
            <div className="card card-horitonzal mb-3 col-md-12">
                <Row className="g-0">
                    <Col md={3} className="overflow-hidden">
                        <img
                            src={imageUrl}
                            className="img-fluid rounded-start h-100"
                            alt={title}
                        />
                    </Col>
                    <Col md={9}>
                        <CardBody className="card-body">
                            <CardText className="mb-2">
                                <span className="badge bg-secondary cstm-badge">
                                    {publishedAt}
                                </span>
                            </CardText>
                            <CardText className="mb-2">
                                <small className="text-muted">
                                    Posted by: {author || "Unknown"}
                                </small>
                            </CardText>
                            <CardTitle tag="h5">
                                <a href={url} target="_blank" rel="noreferrer">
                                    {title}
                                </a>
                            </CardTitle>
                            <CardText>{description}</CardText>
                            <div className="read-more-btn">
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-primary cstm-btn"
                                >
                                    Read More
                                </a>
                            </div>
                        </CardBody>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Card;
