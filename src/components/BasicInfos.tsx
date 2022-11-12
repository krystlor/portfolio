import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BasicInfo } from "./BasicInfo";

export const BasicInfos = () => {
  const BasicInfos = require("../data/basic_infos.json") as {
    title: string;
    content: string[];
  }[];
  return (
    <Container>
      <Row>
        <Col xl={6} className={"top-frame"}>
          <BasicInfo column1={BasicInfos[0]} column2={BasicInfos[1]} />
        </Col>
        <Col xl={6} className={"top-frame"}>
          <BasicInfo column1={BasicInfos[2]} column2={BasicInfos[3]} />
        </Col>
      </Row>
    </Container>
  );
};
