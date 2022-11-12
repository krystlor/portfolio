import * as React from "react";

export const GithubLink = () => (
  <div>
    <a
      className={"blank"}
      target="_blank"
      href={`${process.env.GITHUB_HREF}`}
      rel="noopener noreferrer"
    >{`${process.env.GITHUB_LINKNAME}`}</a>
  </div>
);
