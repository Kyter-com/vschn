// TODO: Fill in types
const htmlTemplate = (stories: any) => {
  console.log("HTML Template", stories);
  let result = `<html>Header</html>\n`;

  for (let i = 0; i < stories.length; i += 1) {
    const story = `<story>${stories[i].title}</story>`;
    result += story;
  }

  return result;
};

export default htmlTemplate;
