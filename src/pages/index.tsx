import * as React from "react";
import "../assets/bootstrap.min.css";
import "../assets/global.scss";
import { HelmetSection } from "../components/HelmetSection";
import { ExternalLink } from "../components/ExternalLink";
import { BasicInfos } from "../components/BasicInfos";
import { ProjectsList } from "../components/ProjectsList";

const IndexPage = () => (
  <>
    <HelmetSection />
    <ExternalLink href={`${process.env.GITHUB_HREF}`}>
      {`${process.env.GITHUB_LINKNAME}`}
    </ExternalLink>
    <h1>{process.env.PAGE_TITLE}</h1>
    <BasicInfos />
    <h2>{process.env.SECTION_TITLE}</h2>
    <h3>{process.env.SECTION_SUBTITLE}</h3>
    <ProjectsList />
  </>
);
export default IndexPage;
