const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),  // para conseguir abrir o arquivo principal // __dirname = diretório da aplicação 
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'), // aonde que contém os arquivos da aplicação 
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // para pegar todos os arquivos de JS. a string tem que terminar com JS
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader'},
        ] 
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader',
        }
      }

    ]
  }
                             
};