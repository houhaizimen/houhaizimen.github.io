<template>
  <div class="about">
    <!-- <render :level=level>
      <div>我在渲染</div>
    </render> -->
     <render :level='3'>
        <div slot="childheader">childheader</div>
        <div slot="childbody">childbody</div>
        <div slot="childfooter">childfooter</div>
      </render>
  </div>
</template>
<script>
import render from '@/components/render.vue'
export default {
  data () {
    return {
      level: '1'
    }
  },
  components: { render }
}
</script>
