const config = {
    address: {
        http: {
            port: 7070,
            host() {
                return `http://localhost:${this.port}`
            }
        },
        https: {
            port: 8080,
            host() {
                return `https://localhost:${this.port}`
            }
        }
    },
    db: {
        host: 'localhost',
        user: 'root',
        password: '759260',
        database: 'blog'
    },
    tag_icon_dir: 'tag-icon',
    static_dir: 'assets',
    root_dir: __dirname,
    token: {
        // 秘钥
        // require('./utils/random-id')(50)
        secret: require('./utils/random-id')(50),
        // 周期
        expiresIn: '10h'
    }
};
module.exports = config;