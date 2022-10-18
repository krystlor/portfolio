import * as React from "react";
import PropTypes, { InferProps } from "prop-types";

const ExternalLinkPropTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

type ExternalLinkTypes = InferProps<typeof ExternalLinkPropTypes>;

const ExternalLink = ({ href, children, ...other }: ExternalLinkTypes) => (
  <div>
    <a
      className={"blank"}
      target="_blank"
      href={href}
      {...other}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  </div>
);

ExternalLink.propTypes = ExternalLinkPropTypes;

export default ExternalLink;
