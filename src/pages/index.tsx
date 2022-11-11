import * as React from "react";
import "../assets/bootstrap.min.css";
import "../assets/global.scss";
import { ExternalLink } from "../components/ExternalLink";
import { ProjectsList } from "../components/ProjectsList";
import { HelmetSection } from "../components/HelmetSection";
import { BasicInfos } from "../components/BasicInfos";

const IndexPage = () => {
  console.log(process.env.PAGE_TITLE);
  return (
    <>
      <HelmetSection title={process.env.PAGE_TITLE} />
      <ExternalLink href={process.env.GITHUB_HREF as string}>
        {process.env.GITHUB_LINKNAME as string}
      </ExternalLink>
      <h1>{process.env.PAGE_TITLE}</h1>
      <BasicInfos />
      <h2>{process.env.SECTION_TITLE}</h2>
      <h3>{process.env.SECTION_SUBTITLE}</h3>
      <ProjectsList />
    </>
  );
};
export default IndexPage;
