import htmlTemplate from "./html";

// TODO: Add types
const templateByLanguage = (language: string, stories: any) => {
  if (language === "HTML") {
    return htmlTemplate(stories);
  }
};

export default templateByLanguage;
