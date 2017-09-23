const id = Number(process.env.NODE_APP_INSTANCE || 0);

const hexo = require('hexo-cli/lib/hexo');

hexo(__dirname, { _: ['server'], 's': true, 'p': 8000 + id });
