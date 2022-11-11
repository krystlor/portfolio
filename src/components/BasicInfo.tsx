import * as React from "react";
import PropTypes, { InferProps } from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import { BasicInfoColumn } from "./BasicInfoColumn";

const BasicInfoPropTypes = {
  column1: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  column2: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export const BasicInfo = ({
  column1,
  column2,
}: InferProps<typeof BasicInfoPropTypes>) => (
  <div>
    <Container>
      <Row>
        <Col sm={6}>
          <BasicInfoColumn title={column1.title} content={column1.content} />
        </Col>
        <Col sm={6}>
          <BasicInfoColumn title={column2.title} content={column2.content} />
        </Col>
      </Row>
    </Container>
  </div>
);
BasicInfo.propTypes = BasicInfoPropTypes;
