# 一个纯前端的简历

## 创建自己的简历

1. https://mp.weixin.qq.com 申请自己的简历小程序

2. 找到自己的小程序appId

3. 将 appinfo.js 中的 currentAppId 修改为自己的appId
   
4. 将 ext.json 中的 extAppid 修改为自己的appId

5. 在 resumes 中新建自己的简历数据

6. 将简历数据引入到 resumes/index 文件中 如例子如 刘斌

7. 在微信开发工具中上传代码 并在 第一步 中发布小程序

9. 第一步 中 右上角工具 生成小程序码 路径填写 pages/about/index