module.exports = {
	lintOnSave: false
}
module.exports = {
    chainWebpack: config => {
        config.module
            .rule('css')
            .test(/\.css$/)
            .oneOf('vue')
            .resourceQuery(/\?vue/)
            .use('px2rem')
            .loader('px2rem-loader')
            .options({ remUnit: 192 })
            .end()
    }
}
