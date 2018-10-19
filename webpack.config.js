const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js', //empieza a leer en el index.js
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'), //crea la carpeta dist y lo mete en bundle.js
        filename: 'bundle.js'
    }
};