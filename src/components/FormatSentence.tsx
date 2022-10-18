import React from "react";
import PropTypes, { InferProps } from "prop-types";
import FormatWord from "./FormatWord";

const FormatSentencePropTypes = {
  sentence: PropTypes.string.isRequired,
};

type FormatSentenceTypes = InferProps<typeof FormatSentencePropTypes>;

const FormatSentence = ({ sentence }: FormatSentenceTypes) => (
  <>
    {sentence.split(" ").map((word, index) => (
      <React.Fragment key={index}>
        {" "}
        <FormatWord word={word} />
      </React.Fragment>
    ))}
  </>
);

FormatSentence.propTypes = FormatSentencePropTypes;

export default FormatSentence;
