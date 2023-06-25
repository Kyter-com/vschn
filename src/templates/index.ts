import htmlTemplate from "./html";

import type { Story } from "../types";

const templateByLanguage = (language: string, stories: Story[]) => {
  if (language === "HTML") {
    return htmlTemplate(stories);
  }
};

export default templateByLanguage;
