let config: AppConfig;


const mockConfig = {
    /** api域名 */
    // ApiDomain : 'https://www.hzjio.com'

    /** mock api domain */
    ApiDomain: 'http://mock.eolinker.com/betP9Ab5500fe5e2f88721c31b19e9898cac277e32e6866?uri='
};

const devConfig = {
    ApiDomain: 'http://localhost:3000'
};

const prodConfig = {
    ApiDomain: 'http://api.hzjio.com'
};

if (process.env.NODE_ENV === 'development') {
    config = devConfig;
} else if (process.env.NODE_ENV === 'mock') {
    config = mockConfig;
} else {
    config = prodConfig;
}

export default config;

interface AppConfig {
    ApiDomain: string;
}
