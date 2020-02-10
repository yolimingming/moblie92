<template>
  <div class='container'>
    <!-- 骨架屏  内容准备好,骨架屏则小时,显示具体内容
    内容占位标签
    title:第一行内容
    row:设置显示行数
    acatar: 小圆圈   -->
    <van-skeleton title avatar :row="3" />
    <van-skeleton title avatar :row="3" />
    <van-skeleton title avatar :row="3" />
  </div>
</template>

<script>
export default {
  name: 'video-index'
}
</script>

<style scoped lang='less'>
.van-skeleton{
  margin-top: 10px;
}
</style>
