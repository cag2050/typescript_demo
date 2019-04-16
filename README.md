* TypeScript 通过类型批注提供静态类型以在编译时启动类型检查。
* 基本批注类型是number、bool、string。而弱或动态类型是any。

* 安装 TypeScript 并运行 ts 文件：
1. 全局安装 TypeScript： `npm install -g typescript`
2. 将 TypeScript 转换为 JavaScript 代码，在当前目录下（与 file_name.ts 同一目录）生成一个 file_name.js 文件：`tsc file_name.ts`
3. 执行第2步骤产生的 file_name.js 文件

语句 | 作用
--- | ---
npm install -g typescript | 全局安装
tsc -v | 查看版本
tsc file_name.ts | 将 TypeScript 转换为 JavaScript 代码，在当前目录下（与 file_name.ts 同一目录）生成一个 file_name.js 文件

