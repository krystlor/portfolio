import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { projectInterface } from "./projectInterface";
import Project from "./Project";

const projects = require("../data/projects.json") as {
  projectLinkName: string;
  projectsImgFolderPath: string;
  projectsArray: projectInterface[];
};

const ProjectsList = () => {
  const projectsTotal = projects.projectsArray.length;
  const chunkSize = 2;

  let reducedArray = projects.projectsArray.reduce<projectInterface[]>(
    (acc, item) => {
      let group = acc.pop() as projectInterface;
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
      {reducedArray.map((doubleItem, key) => {
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

export default ProjectsList;
