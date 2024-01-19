module.exports = {
  semi: true, // 结尾使用分号
  tabWidth: 2, // tab的宽度 2个字符
  singleQuote: true, // 使用单引号，要想使用双引号，改成 false 即可
  printWidth: 120, // 每行最多显示的字符树，超过这个就换行显示
  trailingComma: "none", // 结尾是否添加逗号
  bracketSpacing: true, // 对象括号两边是否用空格隔开
  // 下面两个配置项都是关于 标签结尾>的位置，如果Prettier版本过高，第一个配置项会失效
  jsxBracketSameLine: true, // 在jsx中把'>' 是否单独放一行
  bracketSameLine: true, // 在jsx中把'>' 是否单独放一行
};
