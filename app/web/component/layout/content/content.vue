<template>
  <div class="main">
    <div class="page-container page-component">
      <slot name="content"></slot>
      <LayoutFoot></LayoutFoot>
    </div>
  </div>
</template>
<style>
  @import "content.css";
</style>
<script type="text/babel">
  import LayoutFoot from '../footer/footer';
  export default{
    name:'v-content',
    data(){
      return {

      }
    },
    components: { LayoutFoot },
    mounted() {

    }
  }
</script>
