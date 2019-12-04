<template>
  <div>
    <div class="header_top">
      <div>
        <span>欢迎光临</span><span class="logout" @click="logout" v-if="userState.user">退出</span>
        <ul>
          <li>
            <a v-if="!userState.user">请登录</a>
            <a v-if="!userState.user">快速注册</a><i></i>
          </li>
          <li @click="queryPriceList()"><a >询价</a><i></i></li>
          <li  v-bind:class="{ active:classenable}">
						<a class="logincolor top-a" v-if="userState.user">会员中心</a> <span style="margin-left:0px;"></span><i></i>
            <ol v-show="classenable">
              <li class="active"><a  >我的订单</a></li>
              <li><a >我的收藏</a></li>
              <li><a  >我的卡包</a></li>
              <li><a >送货地址</a></li>
            </ol>
          </li>
          <li><a >信息公告</a><i></i>
            <ol v-show="classenable">
              <li class="active"><a  >我的订单</a></li>
              <li><a >我的收藏</a></li>
              <li><a  >我的卡包</a></li>
              <li><a >送货地址</a></li>
            </ol>
          </li>
          
        </ul>
        <div class="clr"></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as test from '../scripts'
export default {
  name: 'p-top',
  data(){
    return{
      userState:{
        user:'xujianlu'
      },
      classenable: true,
    }
  },
  props: {
    msg: String
  },
  methods:{
    addClassload(obj) {
      this.classenable = true
    },
    removeClassload(obj) {
      this.classenable = false
    },
    logout(){
      this.$store.dispatch("logout")
			this.$router.push({ path: '/pages/login' })
    },    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.p-top{
  background: #ffffff;
}
.header_top{
  width:100%;
  height: auto;
  background-color: #ebebeb;
  box-shadow: 0 1px 0 0 #e6e6e6;
  font-size: 12px;

}
  .header_top{
    div{
      width:1190px;
      margin: 0 auto;
      height: 30px;
      position: relative;
      span{
        margin-left: 210px;
        color: #666666;
        line-height: 30px;
      }
      span.logout{
        margin-left: 20px;
        cursor: pointer;
      }
      ul{
        float: right;
        li{
          float: left;
          color: #666666;
          height: 30px;
          padding: 0 10px;
          line-height: 30px;
          position: relative;
          cursor: pointer;
          a{
            margin-right: 10px;
            color: #666666;
          }
          a.top-a{
             margin-right: 0px;
          }
          a.logincolor{
            color: #f13a3a;
          }
          b{
            font-weight: normal;
            color: #f13a3a;
          }
          span{
            display: inline-block;
            width:12px;
            height: 12px;
            margin-left:5px;
            background: url('../assets/drop.png') no-repeat center center;
            background-size: cover;
            vertical-align: middle;
          }
          i{
            display:inline-block;
            height: 12px;
            width: 1px;
            background-color: #d8d8d8;
            vertical-align: middle;
            position: absolute;
            top:9px;
            right: 0px;
          }
        }
        li.active{
          background-color: #ffffff;
          i{
            width: 0px;
          }
        }
        ol{
          position: absolute;
          top:29px;
          left: 0px;
          background-color: #ffffff;
          padding: 7px 0 6px;
          border: solid 1px #e6e6e6;
          border-top:0px;
          z-index: 9999;
          li{
            padding: 0px;
            height: 28px;
            line-height: 28px;
            width: 100%;
            text-indent: 10px;
          }
          li:hover a{
            color: #f13a3a;
          }
        }
      }

    }
  }
</style>
