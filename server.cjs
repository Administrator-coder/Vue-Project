const express = require('express');
const { exec } = require('child_process');
const app = express();
const cors = require('cors');
const fs = require('fs');
const path = require('path');

app.use(cors());
app.use(express.json());

app.post('/compile', (req, res) => {
    const code = req.body.code;

    // 将代码写入一个临时文件
    fs.writeFileSync('main.cpp', code);

    // 使用 g++ 编译代码
    exec('g++ -S main.cpp', (error, stdout, stderr) => {
        if (error) {
            console.error(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }

        // 读取编译生成的汇编代码
        const asm = fs.readFileSync('main.s', 'utf8');

        // 将汇编代码发送回客户端
        res.send(asm);
    });
});

// 提供 Vue 应用的静态文件
app.use(express.static(path.join(__dirname, 'dist')));

// 处理所有 GET 请求
app.get('*', (req, res) => {
    // 将请求重定向到 Vue 应用
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(5173, () => {
    console.log('Server is running on port 5173');
});
