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
    <center>
`;

  for (let i = 0; i < stories.length; i += 1) {
    const story = `      <span class="titleline">
        <a href="${stories[i].url}" rel="noreferrer">
          ${stories[i].title}
        </a>
      </span>\n`;
    result += story;
  }

  result += `    </center>
  </body>
</html>`;

  return result;
};

export default htmlTemplate;
