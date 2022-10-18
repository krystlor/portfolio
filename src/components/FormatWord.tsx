import React from "react";
import PropTypes, { InferProps } from "prop-types";
import { Email } from "react-obfuscate-email";

const FormatWordPropTypes = {
  word: PropTypes.string.isRequired,
};

type FormatWordTypes = InferProps<typeof FormatWordPropTypes>;

const FormatWord = ({ word }: FormatWordTypes) => {
  let isEmailAddress =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let isPDFFile = /^.+\.pdf$/; // ends with ".pdf"

  if (isEmailAddress.test(word)) {
    return <Email email={word}>{word}</Email>;
  } else if (isPDFFile.test(word)) {
    return <a href={`./files/${word}`}>{word}</a>;
  } else {
    return <>{word}</>;
  }
};

FormatWord.propTypes = FormatWordPropTypes;

export default FormatWord;
