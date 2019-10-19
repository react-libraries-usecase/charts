const pattern = /<code>(.+?)<\/code>/g;
const urlsPrefix = 'src';


/**
 * Wrap data with promise
 * @param text
 * @param path
 * @returns {Promise<[unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]>}
 */
const withPromise = (text, path) => {
  // will holds reading promises
  const readingPromises = [];

  /**
   * Will process out response stream
   * @param response
   * @returns {*}
   */
  const processResponse = function(response) {
    const url = response.url;
    const name = url.substr(url.lastIndexOf('/') + 1).replace(/.js/g, '');
    return response.text().then(text => `${name}-${text}`);
  };

  /**
   * Generate files reading promises
   * @returns {*}
   */
  const getFilesPromises = () => {
    text.replace(pattern, (match, contents) => {
      path = path.replace(/\/index.js/g, '');

      console.log({
        path,
        contents,
        full: `${path}/${urlsPrefix}/${contents}.js`
      });
      const filePromise = fetch(`${path}/${urlsPrefix}/${contents}.js`).then(processResponse);
      readingPromises.push(filePromise)
    });
  };

  /**
   * Process text with variables
   * @param values
   * @returns {*}
   */
  const processText = values => {
    return text.replace(pattern, (match, contents) => {
      let content = 'File source not found :(';
      const normalizedContents = contents.substr(contents.lastIndexOf('/') + 1);
      values.forEach(value => {
        const fileName = value.substr(0, value.indexOf('-'));
        if (fileName.toLowerCase() === normalizedContents.toLowerCase()) {
          content = value.substr(value.indexOf('-') + 1);
          return true;
        }
      });
      return content;
    });
  };


  // make promises
  getFilesPromises();


  /**
   * to make it easy wait until load source codes
   * @type {Promise<Response[]>}
   */
  return Promise
    .all(readingPromises)
    .then(variables => {
      return processText(variables);
    });
};

export {
  withPromise
};
