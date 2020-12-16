const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {minimize: true}
                    }
                ]
            },
            {
                test: /\.css$/, 
                use: [
                    MiniCssExtractPlugin.loader, 
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },                
                    {
                        loader: 'postcss-loader'
                    }]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: ["url-loader"]
            }
        ]
    },
    // Good for debug! Tell you things from which file
    devtool: 'source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin()
    ],
    watch: true
}