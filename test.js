const fs = require('fs');
const handlebars = require('handlebars');

// 读取JSON文件
const jsonData = require('./your_config.json'); // 替换为你的JSON文件路径

// 定义Handlebars模板
const template = handlebars.compile(`
// 自动生成的JavaScript代码

import axios from 'axios';

const API = {
  {{jsonData.name}}: () => axions.{{jsonData.month}}('{{jsonData.path}}')
}

export default API;
`);

// 使用模板生成JavaScript代码
const generatedCode = template({ jsonData: jsonData });


// 将生成的JavaScript代码写入文件
fs.writeFileSync('./dist/output.js', generatedCode);

console.log('生成成功！');
