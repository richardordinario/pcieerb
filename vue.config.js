module.exports = {
    transpileDependencies: [
        'vuetify',
    ],
    publicPath: process.env.NODE_ENV === 'production'
    ? 'https:/eerd.com.ph'
    : '/',
    pages: {
        index: {
            entry: 'src/landing/main.js',
            template: 'public/index.html',
            title: 'Home Page',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        'teacher-login': {
            entry: 'src/teacher/auth/login.js',
            template: 'public/index.html',
            title: 'Teacher Login',
            chunks: ['chunk-vendors', 'chunk-common', 'teacher-login']
        }
    }
}