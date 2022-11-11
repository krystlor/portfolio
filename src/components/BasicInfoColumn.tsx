import React from "react";
import PropTypes, { InferProps } from "prop-types";

const BasicInfoColumnPropTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const formatLine = (line: string) => {
  const isPDFFile = /([^ ]+\.pdf)/;
  const isEmailAddress = /([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)/;
  return line
    .replace(isPDFFile, "<a href='/files/$1'>$1</a>")
    .replace(isEmailAddress, '<a href="mailto:$1">$1</a>');
};

export const BasicInfoColumn = ({
  title,
  content,
}: InferProps<typeof BasicInfoColumnPropTypes>) => (
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
BasicInfoColumn.propTypes = BasicInfoColumnPropTypes;
