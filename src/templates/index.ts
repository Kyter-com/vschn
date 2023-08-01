import htmlTemplate from "./html";
import typeScriptTemplate from "./typescript";
import markdownTemplate from "./markdown";

import type { Story } from "../types";

const templateByLanguage = (language: string, stories: Story[]) => {
  if (language === "HTML") {
    return htmlTemplate(stories);
  } else if (language === "TypeScript") {
    return typeScriptTemplate(stories);
  } else if (language === "Markdown") {
    return markdownTemplate(stories);
  }
};

const getFileExtensionFromLanguage = (language: string) => {
  if (language === "HTML") {
    return "html";
  } else if (language === "TypeScript") {
    return "ts";
  } else if (language === "Markdown") {
    return "md";
  }
};

export { templateByLanguage, getFileExtensionFromLanguage };
