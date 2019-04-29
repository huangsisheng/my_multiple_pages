// 配置文件
const path = require('path')
const glob = require('glob')

//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

function resolve (dir) {
    return path.join(__dirname, dir)
}
function getEntry(globPath) {
    let entries = {};
    let basename;
    let tmp;
    let pathname;
    glob.sync(globPath).forEach((entry) => {
        basename = path.basename(entry, path.extname(entry));
        tmp = entry.split('/').splice(-3);
        pathname = basename; // 正确输出js和html的路径
        entries[pathname] = {
            entry: 'src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[1] + '.js',
            template: 'src/' + tmp[0] + '/' + tmp[1] + '/' + tmp[2],
            title: tmp[2],
            filename: tmp[2],
        };
    });
    return entries;
}

let pages = getEntry('./src/pages/**?/*.html');
console.log(pages);

module.exports = {
    pages,
    /* pages: {
        home: {
            entry: 'src/pages/home/main.js',
            template: 'src/pages/home.html',
            filename: 'home.html'
        },
        detail: {
            entry: 'src/pages/detail/main.js',
            template: 'src/pages/detail.html',
            filename: 'detail.html'
        }
    }, */
    publicPath: '/',
    // baseUrl: process.env.baseUrl,
    outputDir: process.env.outputDir,
    assetsDir: process.env.assetsDir,
    lintOnSave: true,

    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
        } else {
            // 为开发环境修改配置...
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('vue$', 'vue/dist/vue.esm.js')
            .set('@', resolve('src'))
            .set('components', resolve('components'))

        config.resolve.extensions
            .add('.js')
            .add('.vue')
            .add('.styl')
            .add('.css')

        config.module.rule('svg').uses.clear()
        config.module
            .rule('svg')
            .use('raw-loader')
            .loader('raw-loader')
        // config.module.rule('url')
        //   .test(/\.(eot|svg|ttf|woff|woff2?)(\?.*)?$/)
        //   .use('url')
        //     .loader('url-loader')
        //     .end()

        //config.when(process.env.NODE_ENV === 'production', config =>
        //  config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin)
        //)
    },

    productionSourceMap: true,
    css: {
        sourceMap: false
    },
    
    devServer: {
        // 启动服务默认页面
        index: 'home.html',
        open: process.platform === 'darwin',
        // host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            '/admin': {//用户 中心
                target: 'xxxxxxx',//测试服务器
                changeOrigin: true,
                pathRewrite: {
                    '^/admin': 'admin'
                }
            }
        },
    },
}
