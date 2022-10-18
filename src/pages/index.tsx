import * as React from "react";
import "../assets/bootstrap.min.css";
import "../assets/global.scss";
import ExternalLink from "../components/ExternalLink";
import TopFrames from "../components/TopFrames";
import ProjectsList from "../components/ProjectsList";
import HelmetSection from "../components/HelmetSection";

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
    <TopFrames />
    <h1>{config.subsectionTitle}</h1>
    <h2>{config.subsectionSubtitle}</h2>
    <ProjectsList />
  </>
);

export default IndexPage;
