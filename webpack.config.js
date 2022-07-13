const path = require('path'); // подключаем path к конфигу вебпак
const HtmlWebpackPlugin = require('html-webpack-plugin'); // подключите плагин
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {main: './src/pages/index.js'},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: ''
    },

    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
        compress: true, // это ускорит загрузку в режиме разработки
        port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт

        open: true // сайт будет открываться сам при запуске npm run dev
    },
    module: {
        rules: [ // rules — это массив правил
            // добавим в него объект правил для бабеля
            {
                // регулярное выражение, которое ищет все js файлы
                test: /\.js$/,
                // исключает папку node_modules, файлы в ней обрабатывать не нужно
                exclude: '/node_modules/',
                // при обработке этих файлов нужно использовать babel-loader
                loader: 'babel-loader'
            },

            {
                test: /\.html$/,
                use: ['html-loader']
            },

            {
                // регулярное выражение, которое ищет все файлы с такими расширениями
                test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name].[hash][ext]'
                }
            },

            {
                test: /\.(woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name].[hash][ext]'
                }
            },

            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html' // путь к файлу index.html
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
    ],


}
