const { PATHS } = require('./webpack.consts');

module.exports.loaders = [
  {
    test: /\.(jsx|js)?$/,
    enforce: 'pre',
    loader: 'eslint-loader',
    include: PATHS.root,
    exclude: [/node_modules/],
  },
  {
    test: /\.(jsx|js)?$/,
    loader: 'babel-loader',
    include: PATHS.root,
    exclude: [/node_modules/],
  },
  {
    test: /\.(css|scss|sass)$/,
    loader: ['style', 'css', 'sass'],
  },
  {
    test: /\.(ico|eot|otf|ttf|woff|woff2)(\?.*)?$/,
    loader: 'file',
    query: {
      name: 'assets/[name].[ext]',
    },
  },
];
