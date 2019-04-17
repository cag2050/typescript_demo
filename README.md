* TypeScript 通过类型批注提供静态类型以在编译时启动类型检查。
* 基本批注类型是number、bool、string。而弱或动态类型是any。

### 编译 ts 文件
1. 编译单个文件：`tsc file_name.ts`，执行产生的 file_name.js 文件（tsc 命令行上指定输入文件时，tsconfig.json 文件会被忽略）
2. 编译整个项目：`tsc`（编译器根据 tsconfig.json 指定的编译选项，来编译整个项目）

### 安装 TypeScript 并运行单个 ts 文件（即：tsc 命令行上指定了输入文件；编译整个项目时，tsc命令不指定输入文件即可）：
1. 全局安装 TypeScript： `npm install -g typescript`
2. 将 TypeScript 转换为 JavaScript 代码，在当前目录下（与 file_name.ts 同一目录）生成一个 file_name.js 文件：`tsc file_name.ts`
3. 执行第2步骤产生的 file_name.js 文件

### tsconfig.json
如果一个目录下存在一个tsconfig.json文件，那么它意味着这个目录是TypeScript项目的根目录。 tsconfig.json文件中指定了用来编译这个项目的根文件和编译选项。

### 使用tsconfig.json
一个项目可以通过以下方式之一来编译（编译整个项目里的 ts 文件）：
1. 不带任何输入文件的情况下调用tsc，编译器会从当前目录开始去查找tsconfig.json文件，逐级向上搜索父目录。
2. 不带任何输入文件的情况下调用tsc，且使用命令行参数--project（或-p）指定一个包含tsconfig.json文件的目录。

* 注意：当 tsc 命令行上指定了输入文件时，tsconfig.json文件会被忽略。

语句 | 作用
--- | ---
npm install -g typescript | 全局安装
tsc -v | 查看版本
tsc file_name.ts | 将 TypeScript 转换为 JavaScript 代码，在当前目录下（与 file_name.ts 同一目录）生成一个 file_name.js 文件

