import * as React from "react";
import PropTypes, { InferProps } from "prop-types";
import { Helmet } from "react-helmet";

const HelmetSectionPropTypes = {
  lang: PropTypes.string,
  charset: PropTypes.string,
  robots: PropTypes.string,
};

export const HelmetSection = ({
  lang,
  charset,
  robots,
}: InferProps<typeof HelmetSectionPropTypes>) => (
  <Helmet>
    <meta name="robots" content={robots!} />
    <meta charSet={charset!} />
    <meta lang={lang!} />
    <title>{`${process.env.PAGE_TITLE}`}</title>
  </Helmet>
);

HelmetSection.defaultProps = {
  lang: "en",
  charset: "utf-8",
  robots: "noindex,nofollow",
};
HelmetSection.propTypes = HelmetSectionPropTypes;
