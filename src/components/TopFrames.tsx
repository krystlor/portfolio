import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TopFrame } from "../components/TopFrame";
import PropTypes, { InferProps } from "prop-types";

const TopFramesPropTypes = {
  topFramesContentFile: PropTypes.string.isRequired,
};
type TopFrameTypes = InferProps<typeof TopFramesPropTypes>;

export const TopFrames = ({ topFramesContentFile }: TopFrameTypes) => {
  const topFrames = require("../" + topFramesContentFile) as {
    title: string;
    content: string[];
  }[];
  return (
    <Container>
      <Row>
        <Col xl={6} className={"topFrame"}>
          <TopFrame column1={topFrames[0]} column2={topFrames[1]} />
        </Col>
        <Col xl={6} className={"topFrame"}>
          <TopFrame column1={topFrames[2]} column2={topFrames[3]} />
        </Col>
      </Row>
    </Container>
  );
};
TopFrames.propTypes = TopFramesPropTypes;
