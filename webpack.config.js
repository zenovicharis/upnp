var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var bootstrapEntryPoints = require('./webpack.bootstrap.config');

var isProd = process.env.NODE_ENV == "production";
console.log('Is Production: ', isProd); // 'local'

var pathLocal = isProd ? "/var/www/upnp.ga/dist" : path.resolve(__dirname, 'dist');

var extractPlugin = new ExtractTextPlugin({
  filename: 'assets/css/[name].css'
});
// console.log('Production: ', env.production) 



module.exports = {
  entry: {
    app: './src/js/app.js',
    'patreon': './src/pages/patreon/js/app.js',
    'about': './src/pages/about/js/app.js',
    'contact': './src/pages/contact/js/app.js',
    'volountieer-service': './src/pages/volountieer-service/js/app.js',
    'gallery': './src/pages/gallery/js/app.js',
    'news': './src/pages/news/js/app.js',
    'single-news': './src/pages/single-news/js/app.js',
    'login': './src/pages/login/js/app.js',
    'news-list': './src/pages/news-list/js/app.js',
    'news-form': './src/pages/news-form/js/app.js',
    'news-form-info': './src/pages/news-form-info/js/app.js',
    'albums-list': './src/pages/albums-list/js/app.js',
    'album-form': './src/pages/album-form/js/app.js',
    'album-form-info': './src/pages/album-form-info/js/app.js',
    bootstrap: bootstrapEntryPoints.dev
  },
  output: {
    path: pathLocal,
    filename: '[name]/[name].[hash:8].js',
    publicPath: isProd ? '/dist/': '',
    sourceMapFilename: '[name]/[name].[hash:8].map',
    chunkFilename: '[name]/[id].[hash:8].js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }]
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(jpg|png)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: isProd ? 'assets/img/': 'img/',
            publicPath: isProd ?  '/dist/assets/img/': 'img/'
          }
        }]
      },
      {
        test: /\.(woff2?|svg)$/,
        // loader: 'url-loader?limit=10000',
        use: [{
          loader: 'url-loader?limit=10000',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/',
            publicPath: 'img/'
          }
        }]
      },
      {
        test: /\.(ttf|eot)$/,
        loader: 'file-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 4202,
    host: '0.0.0.0',
    hot: false,
    quiet: false
  },
  plugins: [
    extractPlugin,
    new HtmlWebpackPlugin({
      title: 'Landing',
      chunks: ['app', 'bootstrap'],
      template: 'src/index.html', // Load a custom template
      inject: 'body', // Inject all scripts into the body
      minify: false,
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Sponsors',
      chunks: ['patreon', 'bootstrap'],
      template: 'src/pages/patreon/index.html', // Load a custom template
      inject: 'body', // Inject all scripts into the body
      minify: false,
      filename: 'patreon/patreon.html'
    }),
    new HtmlWebpackPlugin({
      title: 'O nama',
      chunks: ['about', 'bootstrap'],
      template: 'src/pages/about/index.html', // Load a custom template
      inject: 'body', // Inject all scripts into the body
      minify: false,
      filename: 'about/about.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Kontakt',
      chunks: ['contact', 'bootstrap'],
      template: 'src/pages/contact/index.html', // Load a custom template
      inject: 'body', // Inject all scripts into the body
      minify: false,
      filename: 'contact/contact.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Volonterski Servis',
      chunks: ['volountieer-service', 'bootstrap'],
      template: 'src/pages/volountieer-service/index.html', // Load a custom template
      inject: 'body', // Inject all scripts into the body
      minify: false,
      filename: 'volountieer-service/volountieer-service.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Galerija',
      chunks: ['gallery', 'bootstrap', 'carousel-gallery'],
      template: 'src/pages/gallery/index.html', // Load a custom template
      inject: 'body', // Inject all scripts into the body
      minify: false,
      filename: 'gallery/gallery.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Vest',
      chunks: ['news', 'bootstrap'],
      template: 'src/pages/news/index.html', // Load a custom template
      inject: 'body', // Inject all scripts into the body
      minify: false,
      filename: 'news/news.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Vest',
      chunks: ['single-news', 'bootstrap'],
      template: 'src/pages/single-news/index.html', // Load a custom template
      inject: 'body', // Inject all scripts into the body
      minify: false,
      filename: 'single-news/single-news.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Vest',
      chunks: ['login', 'bootstrap'],
      template: 'src/pages/login/index.html', // Load a custom template
      inject: 'body', // Inject all scripts into the body
      minify: false,
      filename: 'login/login.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Vest',
      chunks: ['news-list', 'bootstrap'],
      template: 'src/pages/news-list/index.html', // Load a custom template
      inject: 'body', // Inject all scripts into the body
      minify: false,
      filename: isProd ? 'news-list/news-list.html.twig' : 'news-list/news-list.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Vest',
      chunks: ['news-form', 'bootstrap'],
      template: 'src/pages/news-form/index.html', // Load a custom template
      inject: 'body', // Inject all scripts into the body
      minify: false,
      filename: isProd ? 'news-form/news-form.html.twig' : 'news-form/news-form.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Vest',
      chunks: ['news-form-info', 'bootstrap'],
      template: 'src/pages/news-form-info/index.html', // Load a custom template
      inject: 'body', // Inject all scripts into the body
      minify: false,
      filename:isProd ?  'news-form-info/news-form-info.html.twig' :  'news-form-info/news-form-info.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Vest',
      chunks: ['albums-list', 'bootstrap'],
      template: 'src/pages/albums-list/index.html', // Load a custom template
      inject: 'body', // Inject all scripts into the body
      minify: false,
      filename: isProd ? 'albums-list/albums-list.html.twig': 'albums-list/albums-list.html' 
    }),
    new HtmlWebpackPlugin({
      title: 'Vest',
      chunks: ['album-form', 'bootstrap'],
      template: 'src/pages/album-form/index.html', // Load a custom template
      inject: 'body', // Inject all scripts into the body
      minify: false,
      filename:  isProd ? 'album-form/album-form.html.twig' : 'album-form/album-form.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Vest',
      chunks: ['album-form-info', 'bootstrap'],
      template: 'src/pages/album-form-info/index.html', // Load a custom template
      inject: 'body', // Inject all scripts into the body
      minify: false,
      filename: isProd ? 'album-form-info/album-form-info.html.twig' : 'album-form-info/album-form-info.html'
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      Popper: 'popper.js/dist/umd/popper.js',
      Tether: 'tether',
      'window.Tether': 'tether',
      Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
      Button: 'exports-loader?Button!bootstrap/js/dist/button',
      Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
      Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
      Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
      Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
      Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
      Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
      Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
      Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
      Util: 'exports-loader?Util!bootstrap/js/dist/util'
    })
  ]
};