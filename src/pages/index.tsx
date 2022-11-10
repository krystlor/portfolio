import * as React from "react";
import "../assets/bootstrap.min.css";
import "../assets/global.scss";
import { ExternalLink } from "../components/ExternalLink";
import { ProjectsList } from "../components/ProjectsList";
import { HelmetSection } from "../components/HelmetSection";
import { TopFrames } from "../components/TopFrames";

const config = require("../data/config.json") as {
  pageTitle: string;
  subsectionTitle: string;
  subsectionSubtitle: string;
  githubLinkName: string;
  githubHref: string;
};

const IndexPage = () => (
  <>
    <HelmetSection title={config.pageTitle} />
    <ExternalLink href={config.githubHref}>
      {config.githubLinkName}
    </ExternalLink>
    <h1>{config.pageTitle}</h1>
    <TopFrames topFramesContentFile={"data/topFrames.json"} />
    <h2>{config.subsectionTitle}</h2>
    <h3>{config.subsectionSubtitle}</h3>
    <ProjectsList projectsListFile={"data/projects.json"} />
  </>
);
export default IndexPage;
