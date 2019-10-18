readerFile('../src/AreaChart');

const info = `
# Source code


~~~js
<code>AreaChart2</code>
~~~
`;

const readingPromises = [];

/**
 * Read file with promise
 * @param path
 */
function readerFile(path) {
  // Resolve package real path
  // console.log(path);

  const packagePath = require.resolve(path);
  const readerPromise = fetch(packagePath)
    .then(function(response) {
      const url = response.url;
      const name = url.substr(url.lastIndexOf('/')+1).replace(/.js/g,'');
      return response.text().then(text => `${name}-${text}`)
    });

  // Append reading promise to array
  readingPromises.push(readerPromise);
}

const processInfo = (values) => {
  return info.replace(/<code>(.+?)<\/code>/g, (match, contents) => {
    let content = 'File source not found :(';
    values.forEach(value => {
      const fileName = value.substr(0, value.indexOf('-'));
      if (fileName.toLowerCase() === contents.toLowerCase()) {
        content = value.substr(value.indexOf('-') + 1);
        return true;
      }
    });

    return content;
  });
};

/**
 * to make it easy wait until load source codes
 * @type {Promise<Response[]>}
 */
const PromiseAll = Promise.all(readingPromises)
  .then(values => {
    return processInfo(values);
  });

export default PromiseAll;
