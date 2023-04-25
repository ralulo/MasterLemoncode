const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
 

module.exports = {
    context: path.resolve(__dirname, "./src"),
    resolve: {
        extensions: [".js",".ts",".tsx"],
    },
    entry: {
        app: "./index.tsx",
    },
    output: {
        filename: "[name].[chunkhash].js",
        path: path.resolve(__dirname, "./dist"),
    },
    module: {
        rules: [ 
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./index.html",
            scriptLoading: "blocking",
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        }),
    ],
    devtool: "eval-source-map",
    devServer:{
           port:8080,
           devMiddleware: 
           {
            stats:"errors-only",
           },    
    },
};