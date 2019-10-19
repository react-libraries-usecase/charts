// module.exports = async ({ config }) => {
//   config.module.rules.push({
//     test: /\.js?$/,
//     loaders: [
//       {
//         loader: require.resolve('@storybook/source-loader'),
//         options: { parser: 'typescript' },
//       },
//     ],
//     enforce: 'pre',
//   });
//
//   return config;
// };
//
// module.exports = (baseConfig, env, defaultConfig) => {
//   defaultConfig.module.rules[0].use[0].options.plugins = [
//     require.resolve('babel-plugin-react-docgen'),
//   ]
//
//   return defaultConfig
// }
