<template>
  <div class="hello">
    <slot name='bbb'></slot>
    我是slot的子组件
  </div>
</template>

<script>
// 这里是slot验证
export default {
  name: 'HelloWorld',
}
</script>

<style scoped>

</style>
