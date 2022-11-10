import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Project } from "./Project";
import PropTypes, { InferProps } from "prop-types";

interface ProjectInterface extends Array<any> {
  projectName?: string;
  projectImgFilename?: string;
  projectURL?: string;
}
const ProjectsListPropTypes = {
  projectsListFile: PropTypes.string.isRequired,
};
type ProjectsListTypes = InferProps<typeof ProjectsListPropTypes>;

export const ProjectsList = ({ projectsListFile }: ProjectsListTypes) => {
  const projects = require("../" + projectsListFile) as {
    projectLinkName: string;
    projectsImgFolderPath: string;
    projectsArray: ProjectInterface[];
  };
  const projectsTotal = projects.projectsArray.length;
  const chunkSize = 2;

  let chunkedArray = projects.projectsArray.reduce<ProjectInterface[]>(
    (acc, item) => {
      let group = acc.pop() as ProjectInterface;
      if (group.length === chunkSize) {
        acc.push(group);
        group = [];
      }
      group.push(item);
      acc.push(group);
      return acc;
    },
    [[]]
  );

  let projectActualNumber = 0;
  return (
    <>
      {chunkedArray.map((doubleItem, key) => {
        return (
          <Container key={key}>
            <Row>
              {doubleItem.map(
                (
                  singleItem: {
                    projectName: string;
                    projectImgFilename: string;
                    projectURL: string;
                  },
                  key
                ) => (
                  <Col xl={6} key={key}>
                    <Project
                      singleItem={singleItem}
                      projectActualNumber={projectActualNumber++}
                      projectsTotal={projectsTotal}
                      projectLinkName={projects.projectLinkName}
                      projectsImgFolderPath={projects.projectsImgFolderPath}
                    />
                  </Col>
                )
              )}
            </Row>
          </Container>
        );
      })}
    </>
  );
};
ProjectsList.propTypes = ProjectsListPropTypes;
