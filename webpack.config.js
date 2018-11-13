// import webpack from "webpack";
const webpack = require("webpack");
// import HtmlWebpackPlugin from 'html-webpack-plugin';
const HtmlWebpackPlugin = require("html-webpack-plugin");
// import path from 'path';
// import fs from 'fs';
// import os from 'os';
const path = require("path");

const basePath = path.resolve(__dirname,'src');
const output = path.join(__dirname,'react');

module.exports = {
    mode: process.env.NODE_ENV == 'dev' ? 'development' : 'production',
    context: basePath,  // 引导找寻html页面
    entry: {
        index: 'js/index.js'
    },
    output: {
        path: output,        // 输出目录的配置，模版、央视、脚本、图片等资源的路径配置都相对于它
        // publickPaht: '',  // 模版、样式、脚本、图片等资源对应的server上的路径，
        filename: 'js/[name].[hash].js', // 每个页面对应的主js的生成配置
        chunkFilename: 'js/[name].map',
        // sourceMappFilename: 'js/[name].map'
    },
    resolve: {
        modules: [basePath,'node_modules'], // 引导找寻js文件
    },
    plugins: [
        new HtmlWebpackPlugin({
            //根据模板插入css/js等生成最终HTML
            // favicon: './src/img/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
            filename: 'index.html', //生成的html存放路径，相对于path
            cache: false,
            template: 'index.html', //html模板路径
            inject: 'true', //js插入的位置，true/'head'/'body'/false
            // hash: true, //为静态资源生成hash值
            chunks: ['runtime','common', 'index'], //需要引入的chunk，不配置就会引入所有页面的资源
            // minify: {
            //     removeComments: true, //移除HTML中的注释
            //     collapseWhitespace: true
            // }
        }),
        new webpack.HashedModuleIdsPlugin(),
        
    ],
    module: {
        rules:[
            {
                test: /\.html$/,
                include: basePath,
                use: ['html-loader']
            },
            {
                test: /\.js$/,
                include: basePath,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015','react']
                    }
                }
            }
        ]
    }
}