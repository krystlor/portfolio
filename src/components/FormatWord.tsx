import React from "react";
import { Email } from "react-obfuscate-email";

const FormatWord = ({ word = "" }: { word: string }) => {
  let isEmailAddress =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let isPDFFile = /^.+\.pdf$/;

  if (isEmailAddress.test(word)) return <Email email={word}>{word}</Email>;
  if (isPDFFile.test(word)) return <a href={`./files/${word}`}>{word}</a>;
  return <>{word}</>;
};

export default FormatWord;
