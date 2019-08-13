<template>
  <div class="home">
    slot用法
    <HelloWorld>
      <div slot='aaa'>我是aaa</div>
      <div slot='bbb'>我是bbb</div>
    </HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
