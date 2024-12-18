const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // Point d'entrée de votre application
  entry: './src/fichier.js', // Remplacer index.js par fichier.js

  // Sortie des fichiers après la compilation
  output: {
    path: path.resolve(__dirname, 'dist'), // Le dossier où le bundle sera créé
    filename: 'bundle.js', // Le fichier de sortie
  },

  // Serveur de développement pour un rafraîchissement automatique pendant le développement
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // Dossier contenant les fichiers à servir
    open: true, // Ouvre automatiquement le navigateur
  },

  // Configurations des loaders et des règles
  module: {
    rules: [
      {
        test: /\.js$/, // Tous les fichiers avec l'extension .js
        exclude: /node_modules/, // Ignore les fichiers dans node_modules
        use: 'babel-loader', // Utilise Babel pour transpiler le code JavaScript
      },
    ],
  },

  // Plugins pour améliorer la configuration Webpack
  plugins: [
    new CleanWebpackPlugin(), // Nettoie le dossier dist avant chaque build
    new HtmlWebpackPlugin({
      template: './src/fichier.html', // Remplacer index.html par fichier.html
    }),
  ],

  // Mode de compilation
  mode: 'development', // Peut être 'production' ou 'development'
};
