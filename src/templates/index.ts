import htmlTemplate from "./html";
import typeScriptTemplate from "./typescript";

import type { Story } from "../types";

const templateByLanguage = (language: string, stories: Story[]) => {
  if (language === "HTML") {
    return htmlTemplate(stories);
  } else if (language === "TypeScript") {
    return typeScriptTemplate(stories);
  }
};

const getFileExtensionFromLanguage = (language: string) => {
  if (language === "HTML") {
    return "html";
  } else if (language === "TypeScript") {
    return "ts";
  }
};

export { templateByLanguage, getFileExtensionFromLanguage };
