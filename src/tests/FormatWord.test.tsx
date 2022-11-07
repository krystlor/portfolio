import React from "react";
import { Email } from "react-obfuscate-email";
import FormatWord from "../components/FormatWord";

describe("Should format email as a proper HTML email component", () => {
  let word = "example@example.com";
  test("example@example.com is formatted correctly", () => {
    expect(FormatWord({ word })).toMatchObject(
      <Email email={word}>{word}</Email>
    );
  });
});

describe("Should format PDF file as a proper HTML link code", () => {
  let word = "example.pdf";
  test("example.pdf is formatted correctly", () => {
    expect(FormatWord({ word })).toMatchObject(
      <a href={`./files/${word}`}>{word}</a>
    );
  });
});

describe("Should return any other word (except for an email or a pdf file) as it is", () => {
  let word = "example";
  test("other words (except for an email or a pdf file) are formatted correctly", () => {
    expect(JSON.stringify(FormatWord({ word }))).toMatch(word);
  });
});
