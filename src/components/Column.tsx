import React from "react";
import PropTypes, { InferProps } from "prop-types";

const ColumnPropTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
};
type ColumnTypes = InferProps<typeof ColumnPropTypes>;

const formatLine = (line: string) => {
  const isPDFFile = /([^ ]+\.pdf)/;
  const isEmailAddress = /([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)/;
  return line
    .replace(isPDFFile, "<a href='/files/$1'>$1</a>")
    .replace(isEmailAddress, '<a href="mailto:$1">$1</a>');
};

export const Column = ({ title, content }: ColumnTypes) => (
  <>
    <p className="title">{title}</p>
    <ul>
      {content.map((line) => (
        <li
          key={line}
          dangerouslySetInnerHTML={{
            __html: formatLine(line!),
          }}
        />
      ))}
    </ul>
  </>
);
Column.propTypes = ColumnPropTypes;
