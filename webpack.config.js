
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",

    entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        assetModuleFilename: "assets/[name][ext]",
        clean: true
    },

    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                type: "javascript/auto",
                use: {
                    loader: "babel-loader",
                    options: {
                        sourceType: "module",
                        presets: [
                            ["@babel/preset-env", {
                                modules: false
                            }],
                            "@babel/preset-react"
                        ]
                    }
                }
            },

            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },

            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                type: "asset/resource"
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],

    devServer: {
        static: {
            directory: path.resolve(__dirname, "public")
        },
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: true
    }
};
