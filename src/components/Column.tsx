import React from "react";
import PropTypes, { InferProps } from "prop-types";

const ListPropTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
};

type ListTypes = InferProps<typeof ListPropTypes>;

const formatLine = (line: string) => {
  const isPDFFile = /([^ ]+\.pdf)/;
  const isEmailAddress = /([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)/;

  return line
    .replace(isPDFFile, "<a href='/files/$1'>$1</a>")
    .replace(isEmailAddress, '<a href="mailto:$1">$1</a>');
};

const Column = ({ title, content }: ListTypes) => (
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

Column.propTypes = ListPropTypes;

export default Column;
