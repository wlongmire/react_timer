var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],

  externals: {
      jquery: 'jQuery'
  },

  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jQuery'
    })
  ],

  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },

  resolve: {
    root: __dirname,
    alias: {
      //api:
      openWeatherMap: 'app/api/openWeatherMap.jsx',

      //main page components
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',

      //Countdown components
      Clock: 'app/components/Clock.jsx',
      CountdownForm: 'app/components/CountdownForm.jsx',

      //subpages
      PageTemplate: 'app/components/pages/PageTemplate.jsx',
      TimerPage: 'app/components/pages/TimerPage.jsx',
      CountdownPage: 'app/components/pages/CountdownPage.jsx',

      //css
      applicationStyles: 'public/styles/app.scss'
    },

    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
        {
          loader:'babel-loader',
          query: {
            presets: ['react', 'es2015', 'stage-0']
          },
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/
        }
    ]
  },

  devtool: 'cheap-module-eval-source-map'
}
