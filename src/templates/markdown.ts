import type { Story } from "../types";

const markdownTemplate = (stories: Story[]) => {
  let result = `# Hacker News Stories\n\n`;

  for (let i = 0; i < stories.length; i += 1) {
    result += `## ${stories[i].title}\n\n`;
    result += `- [link](https://news.ycombinator.com/item?id=${stories[i].id})\n`;
    result += `\n`;
  }

  return result;
};

export default markdownTemplate;
