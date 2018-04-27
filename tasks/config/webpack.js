const path = require('path')

module.exports = function(grunt) {
  grunt.config.set('webpack', {
    options: {
      context: path.resolve('assets/js/src/'),
      entry: './index.js',
      output: {
        path: path.resolve('.tmp/public/js'),
        filename: 'bundle.js'
      },
      target: 'web',
      devtool: 'source-map',
      externals: {
        jquery: 'jQuery',
        // request: 'request'
      },
      module: {
        loaders: [
          // rules for modules (configure loaders, parser options, etc.)
          {
            test: /\.jsx?$/,
            exclude: [/node_modules/, /\.test.js$/],
            enforce: "pre",
            loader: "babel-loader",
            options: {
              presets: ["env", "react"]
            }
          },
          {
            test: /\.css$/,
            enforce: 'pre',
            use: [
              {
                loader: "style-loader"
              },
              {
                loader: "css-loader",
                options: {
                  importLoaders: 1
                }
              }
            ]
          },
          { test: /\.json/, loader: 'json-loader'}
        ]
      },
      resolve: {
        extensions: ['.js', '.json', '.jsx', '.css']
      },
      resolveLoader: {
        modules: ['node_modules']
      },
      node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
      }
    },
    dev: {
      // devtool: 'source-map',
      // watch: true
    }
  })

  grunt.loadNpmTasks('grunt-webpack')
}
