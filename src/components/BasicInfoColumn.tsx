import React from "react";
import PropTypes, { InferProps } from "prop-types";

const BasicInfoColumnPropTypes = {
  header: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const formatLine = (line: string) => {
  const isPDFFile = /([^ ]+\.pdf)/;
  const isEmailAddress = /([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)/;
  return line
    .replace(isPDFFile, "<a href='/files/$1'>$1</a>")
    .replace(isEmailAddress, '<a href="mailto:$1">$1</a>');
};

export const BasicInfoColumn = ({
  header,
  list,
}: InferProps<typeof BasicInfoColumnPropTypes>) => (
  <>
    <p className="header">{header}</p>
    <ul>
      {list.map((line) => (
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
