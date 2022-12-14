import * as React from "react";
import PropTypes, { InferProps } from "prop-types";
import { Helmet } from "react-helmet";

const HelmetSectionPropTypes = {
  title: PropTypes.string,
  lang: PropTypes.string,
  charset: PropTypes.string,
  robots: PropTypes.string,
};

export const HelmetSection = ({
  title,
  lang,
  charset,
  robots,
}: InferProps<typeof HelmetSectionPropTypes>) => (
  <Helmet>
    <meta name="robots" content={robots!} />
    <meta charSet={charset!} />
    <meta lang={lang!} />
    <title>{title}</title>
  </Helmet>
);

HelmetSection.defaultProps = {
  title: "Portfolio",
  lang: "en",
  charset: "utf-8",
  robots: "noindex,nofollow",
};
HelmetSection.propTypes = HelmetSectionPropTypes;
