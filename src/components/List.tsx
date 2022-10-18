import React from "react";
import PropTypes, { InferProps } from "prop-types";
import FormatSentence from "./FormatSentence";

const ListPropTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
};

type ListTypes = InferProps<typeof ListPropTypes>;

const List = ({ title, content }: ListTypes) => (
  <>
    <p className="title">{title}</p>
    <ul>
      {content.map((sentence) => (
        <li key={sentence}>{<FormatSentence sentence={sentence!} />}</li>
      ))}
    </ul>
  </>
);

List.propTypes = ListPropTypes;

export default List;
