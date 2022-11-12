import * as React from "react";
import PropTypes, { InferProps } from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import { BasicInfoColumn } from "./BasicInfoColumn";

const BasicInfoPropTypes = {
  column1: PropTypes.shape({
    header: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  column2: PropTypes.shape({
    header: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
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
          <BasicInfoColumn header={column1.header} list={column1.list} />
        </Col>
        <Col sm={6}>
          <BasicInfoColumn header={column2.header} list={column2.list} />
        </Col>
      </Row>
    </Container>
  </div>
);
BasicInfo.propTypes = BasicInfoPropTypes;
