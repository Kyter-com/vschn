import type { Story } from "../types";

const htmlTemplate = (stories: Story[]) => {
  let result = `<html lang="en" op="news">
  <head>
    <meta name="referrer" content="origin">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="news.css?sOwA2w4A8zIV2E0prLby">
    <link rel="shortcut icon" href="favicon.ico">
    <link rel="alternate" type="application/rss+xml" title="RSS" href="rss">
    <title>Hacker News</title>
  </head>
  <body>
`;

  for (let i = 0; i < stories.length; i += 1) {
    const story = `    <span class="titleline">
      <a href="${stories[i].url}" rel="noreferrer">
        ${stories[i].title}
      </a>
      <a href="https://news.ycombinator.com/item?id=${stories[i].id}">
        ${stories[i].descendants || 0} comments
      </a>
      <a href="https://news.ycombinator.com/user?id=${
        stories[i].by
      }" class="hnuser">
        By ${stories[i].by}
      </a>
    </span>\n\n`;
    result += story;
  }

  result += `  </body>
</html>`;

  return result;
};

export default htmlTemplate;
