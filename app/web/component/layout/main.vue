<template>
   <div class="wapper">
     <LayoutHeader></LayoutHeader>
     <LayoutNav></LayoutNav>
     <LayoutContent>
       <div slot="content"><slot name="main"></slot></div>
     </LayoutContent>
   </div>
</template>
<style>
  body{
    margin: 0 0px;
  }
  a{
    text-decoration: none;
  }
  .wapper {
    width: 100%;
    height: 100%;
    position: relative;
  }
  @import "~asset/css/global.css";
</style>
<script type="text/babel">
  import LayoutHeader from './header/header';
  import LayoutContent from './content/content';
  import LayoutNav from './nav/nav';
  export default{
    components: {
      LayoutHeader,
      LayoutContent,
      LayoutNav
    }
  }
</script>
