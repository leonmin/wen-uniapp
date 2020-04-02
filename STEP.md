1. 安装vue cli

```bash
$ npm install -g @vue/cli
```

2. 创建项目

```bash
$ vue create -p dcloudio/uni-preset-vue wen-uniapp
```

3. 添加sass, vuex, lint依赖包

```bash
$ npm install --save node-sass sass-loader vuex-class tslint-config-standard
```

4. 配置tslint

```bash
$ npm install -g tslint
$ tslint --init
```

修改tslint.json文件配置如下:

```json
{
  "defaultSeverity": "error",
  "extends": [
    "tslint:recommended",
    "tslint-config-standard"
  ],
  "jsRules": {},
  "rules": {
    "no-console": false,
    "ordered-imports": false,
    "object-literal-sort-keys": false,
    "no-empty": false
  },
  "rulesDirectory": []
}
```

5. vscode vue snippets

```json
{
  "uniapp with typescript": {
		"prefix": "uwt",
		"body": [
			"<template>",
			"  $2",
			"</template>",
			"",
			"<script lang='ts'>",
			"import { Vue, Component } from 'vue-property-decorator'",
			"@Component$3",
			"export default class ${1:Comp} extends Vue {",
			"$0",
			"}",
			"</script>",
			""
		],
		"description": "uniapp with typescript"
	}
}
```

