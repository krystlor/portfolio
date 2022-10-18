import * as React from "react";
import PropTypes, { InferProps } from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import List from "./List";

const TopFramePropTypes = {
  column1: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  column2: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

type TopFrameTypes = InferProps<typeof TopFramePropTypes>;

const TopFrame = ({ column1, column2 }: TopFrameTypes) => (
  <div>
    <Container>
      <Row>
        <Col sm={6}>
          <List title={column1.title} content={column1.content} />
        </Col>
        <Col sm={6}>
          <List title={column2.title} content={column2.content} />
        </Col>
      </Row>
    </Container>
  </div>
);

TopFrame.propTypes = TopFramePropTypes;

export default TopFrame;
