import React from "react";
import PropTypes, { InferProps } from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import { ExternalLink } from "./ExternalLink";
import { ProjectImage } from "./ProjectImage";

const ProjectPropTypes = {
  singleItem: PropTypes.shape({
    projectName: PropTypes.string.isRequired,
    projectImgFilename: PropTypes.string.isRequired,
    projectURL: PropTypes.string,
  }).isRequired,
  projectActualNumber: PropTypes.number.isRequired,
  projectsTotal: PropTypes.number.isRequired,
  projectLinkName: PropTypes.string.isRequired,
  projectsImgFolderPath: PropTypes.string.isRequired,
};

export const Project = ({
  singleItem: { projectName, projectImgFilename, projectURL },
  projectActualNumber,
  projectsTotal,
  projectLinkName,
  projectsImgFolderPath,
}: InferProps<typeof ProjectPropTypes>) => (
  <div data-visible={`project_${projectActualNumber}`} className={"project"}>
    <div>
      <Container>
        <Row>
          <Col xs="9">
            <h4>
              {projectName} ({projectsTotal - projectActualNumber})
            </h4>
          </Col>
          <Col xs="3">
            <ExternalLink
              href={
                typeof projectURL != "undefined"
                  ? projectURL!
                  : `${projectsImgFolderPath}/${projectImgFilename}/`
              }
            >
              {projectLinkName}
            </ExternalLink>
          </Col>
        </Row>
      </Container>
    </div>
    <div className={"projectImgFrame"}>
      <div>
        <ProjectImage
          projectImgFilename={projectImgFilename}
          projectActualNumber={projectActualNumber}
        />
      </div>
    </div>
  </div>
);
Project.propTypes = ProjectPropTypes;
