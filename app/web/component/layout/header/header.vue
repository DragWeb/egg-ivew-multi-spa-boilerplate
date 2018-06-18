<template>
  <div class="header">
    <div class="header-logo">
        <img class="header-logo-1" src="~asset/images/logo.png">
        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNCA2NCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQxLjIgKDM1Mzk3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4NCiAgICA8dGl0bGU+bGluZTwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+PC9kZWZzPg0KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuNSI+DQogICAgICAgIDxnIGlkPSLlupTnlKjmpoLop4giIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjguMDAwMDAwLCAtNDAuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyBpZD0ibG9nbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCAzMC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyBpZD0ibGluZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODguMDAwMDAwLCAxMC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIsMCBMMiwyMCIgaWQ9IkxpbmUiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yLDQ0IEwyLDY0IiBpZD0iTGluZS1Db3B5IiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBmaWxsPSIjRkZGRkZGIiBjeD0iMiIgY3k9IjMyIiByPSIyIj48L2NpcmNsZT4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="
        class="header-logo-line">
        <div class="header-logo-title">
            <h3>智能平台</h3> 
             <h4>IPMS</h4>
        </div>
    </div>
    <div class="header-aside">
        <Dropdown class="header-aside-dropdown-menu" trigger="click" divided="true" placement="bottom-end">
            <a href="javascript:void(0)">
                <Icon type="person"></Icon>
                <Icon type="arrow-down-b"></Icon>
            </a>
            <Dropdown-menu slot="list">
                <Dropdown-item>dangruixiang@126.com</Dropdown-item>
                <Dropdown-item>
                    <div class="ivu-row header-aside-dropdown">
                        <button type="button" class="l ivu-btn ivu-btn-ghost">
                            <!---->
                            <!----> <span>退出登录</span>
                        </button>
                    </div>
                </Dropdown-item>
                
            </Dropdown-menu>
        </Dropdown>
    </div>
    <div class="header-aside header-aside-small">
        <Dropdown class="header-aside-dropdown-menu" trigger="click" placement="bottom-end">
            <a href="javascript:void(0)">
                <Icon type="person"></Icon>
                <Icon type="arrow-down-b"></Icon>
            </a>
            <Dropdown-menu slot="list">
                <Dropdown-item>dangruixiang@126.com</Dropdown-item>
                <Dropdown-item>
                    <div class="ivu-row header-aside-dropdown">
                        <button type="button" class="l ivu-btn ivu-btn-ghost">
                            <!---->
                            <!----> <span>退出登录</span>
                        </button>
                    </div>
                </Dropdown-item>
            </Dropdown-menu>
        </Dropdown>
    </div>
    <div class="header-items">
        <div class="header-nav-wrap clear">
            <button type="button" class="header-nav ivu-btn ivu-btn-text ivu-btn-icon-only" @click="showMenu">
                <!----> <i class="ivu-icon ivu-icon-navicon"></i> 
                <!---->
            </button>
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjRweCIgaGVpZ2h0PSI2NHB4IiB2aWV3Qm94PSIwIDAgNCA2NCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQxLjIgKDM1Mzk3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4NCiAgICA8dGl0bGU+bGluZTwvdGl0bGU+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+PC9kZWZzPg0KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuNSI+DQogICAgICAgIDxnIGlkPSLlupTnlKjmpoLop4giIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjguMDAwMDAwLCAtNDAuMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyBpZD0ibG9nbyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCAzMC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICA8ZyBpZD0ibGluZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODguMDAwMDAwLCAxMC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIsMCBMMiwyMCIgaWQ9IkxpbmUiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIyIj48L3BhdGg+DQogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yLDQ0IEwyLDY0IiBpZD0iTGluZS1Db3B5IiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGlkPSJPdmFsIiBmaWxsPSIjRkZGRkZGIiBjeD0iMiIgY3k9IjMyIiByPSIyIj48L2NpcmNsZT4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4="
            class="header-items-line">
        </div> 
        <a class="on"><Icon type="bug"></Icon> <span>Develop</span></a>
        <a class=""><Icon type="coffee"></Icon> <span>运营活动</span></a>
        <a class=""><Icon type="ios-book"></Icon> <span>知识库</span></a> 
        <a class=""><Icon type="stats-bars"></Icon> <span>数据</span></a>
        <a class=""><Icon type="android-contacts"></Icon> <span>客服</span></a>
        <a class=""><Icon type="cube"></Icon> <span>APP</span></a>
    </div>
    <!---->
</div>
</template>
<style>
  @import "./header.css";
</style>
<script type="text/babel">
  export default{
    data(){
      return {
        selectedMenu : '/app'
      }
    },
    computed:{

    },
    methods: {
        showMenu() {
            alert(123)
        }
    },
    mounted(){
      this.selectedMenu = window.location.pathname.toLowerCase().replace(/\/$/,'');
    }
  }
</script>
