import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TopFrame from "../components/TopFrame";

const topFrames = require("../data/topFrames.json") as {
  title: string;
  content: string[];
}[];

const TopFrames = () => (
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

export default TopFrames;
