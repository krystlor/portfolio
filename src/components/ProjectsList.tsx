import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Project } from "./Project";
import PropTypes, { InferProps } from "prop-types";

interface ProjectInterface extends Array<any> {
  projectName?: string;
  projectImgFilename?: string;
  projectURL?: string;
}
type ProjectsListFileStructure = {
  projectLinkName: string;
  projectsImgFolderPath: string;
  projectsArray: ProjectInterface[];
};

const transformIntoTwoColumnArray = (projects: ProjectsListFileStructure) => {
  return projects.projectsArray.reduce<ProjectInterface[]>(
    (acc, item) => {
      let group = acc.pop() as ProjectInterface;
      if (group.length === 2) {
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
  const projects =
    require("../data/projects_list.json") as ProjectsListFileStructure;
  console.log(projects);
  const chunkedArray = transformIntoTwoColumnArray(projects);
  console.log(chunkedArray);
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
