import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Project } from "./Project";
import PropTypes, { InferProps } from "prop-types";

interface ProjectInterface extends Array<any> {
  projectName?: string;
  projectImgFilename?: string;
  projectURL?: string;
}
type yyy = {
  projectLinkName: string;
  projectsImgFolderPath: string;
  projectsArray: ProjectInterface[];
};

const xxx = (projects: yyy) => {
  const chunkSize = 2;

  return projects.projectsArray.reduce<ProjectInterface[]>(
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
};

export const ProjectsList = () => {
  const projects = require(process.env.PROJECTS_LIST_FILEPATH as string) as yyy;
  const chunkedArray = xxx(projects);

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
                      projectsTotal={projects.projectsArray.length}
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
