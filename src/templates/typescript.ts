import type { Story } from "../types";

const typeScriptTemplate = (stories: Story[]) => {
  let result = `type Story = {
  by?: string;
  descendants: number;
  id?: number;
  kids?: number[];
  score?: number;
  time?: number;
  title: string;
  type?: string;
  url: string;

  linkToStory: string; // constructed link using the id
};

const stories: Story[] = [];

stories.push(
`;

  for (let i = 0; i < stories.length; i += 1) {
    const story = `  {
    title: "${stories[i].title}",
    url: "${stories[i].url}",
    descendants: ${stories[i].descendants || 0}, // # of comments
    linkToStory: "https://news.ycombinator.com/item?id=${stories[i].id}",
    author: "${stories[i].by}",
  },\n`;
    result += story;
  }

  result += `);`;

  return result;
};

export default typeScriptTemplate;
