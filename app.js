const express = require('express');
const path = require('path');
const compression = require('compression');
// 压缩代码
const app = express();
app.use(compression())
app.use(express.static(path.join(__dirname,'/dist')))
app.listen(80);
console.log('服务器运行成功')