<template>
  <div id="content">

    <myhead></myhead>

    <!--未登录-->
    <div class="custom-info" v-if="nologin">
        <span class="info">
          10秒钟定制职位
        </span>
        <a  href="/login" 
            class="go" 
            @click="jump(s='/user')"
        >
          去登录
        </a>
    </div>

    <!--已登录-->
    <div class="custom-info" v-if="haslogin">
      <span class="info">
        {{this.$store.state.positionName_selected + '/'}}
        {{this.$store.state.city_selected + '/'}}
        {{this.$store.state.salary_selected}}
      </span>
      <a href="/mine" class="go">
        <em class="glyphicon-edit" ></em>
        编辑
      </a>
    </div>

    <!--公司列表-->
    <ul class="list">
      <li class="list-item" 
          v-for="(l,index) in this.$store.state.listmore" 
          v-if="index<=num"
      >
        <img v-bind:src="'http://www.lagou.com/'+l.companyLogo" class="item-logo">

        <div class="item-desc">
          <h2 class="item-title">{{l.companyName}}</h2>
          <p class="item-info">
            <span class="item-pos">
              {{l.positionName}}{{'['+l.city+']'}}
            </span>
            <span class="item-salary">
              {{l.salary}}
            </span>
          </p>
          <p class="item-time">{{l.createTime}}</p>
        </div>
      </li>
      <li class="list-more" v-on:click="getMore">加载更多</li>
    </ul>


    <div id="copyright"><p>©2015 lagou.com, all right reserved </p><div class="copyright-item"><span class="phone active">移动版&nbsp;·&nbsp;</span><span class="computer">电脑版&nbsp;·&nbsp;</span><a href="#header">回顶部</a></div></div>
  
  <myfoot></myfoot>

  </div>
</template>

<script>
import myhead from './head'
import myfoot from './foot'
import {getCookie} from '../assets/js/cookie.js';
export default {
  name: 'hello',
  components: {
    myhead,
    myfoot
  },
  data(){
    return {
      num:15,
      nologin:true,
      haslogin:false,
    }
  },
  mounted(){
    if(getCookie('username')){
      this.nologin = false
      this.haslogin = true
    }
  },
  methods:{
    getMore(){
      this.num+=15
    },
  }
}
</script>



<style lang="scss">
@import "static/theme.scss";
.custom-info {
  border-bottom: 1px solid $border_color;
  height: 43px;
  line-height: 43px;
  padding: 0 15px;
  color: #555;
  font-size: 1.4rem;
  position: relative;
  .info {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    margin-right: 100px;
    height: 100%;
    position: relative;
  }
  a.go {
    position: absolute;
    right: 15px;
    top: 0;
    display: block;
    float: right;
    padding: 0 20px;
    height: 30px;
    line-height: 30px;
    margin-top: 6px;
    border-radius: 15px;
    background-color: $dim_bg_color;
    color:$base_color;
  }
}

.glyphicon-edit{
  width: 10px;
  height: 20px;
  @include foot_icon(-88px,7px);
  display: inline-block;
}

//-------copyright-------
#copyright {
  text-align: center;
  font-size: 1rem;
  margin-top: 30px;
  padding-bottom: 40px;
  color: #333;
  .copyright-item {
    height: 32px;
    line-height: 32px;
    span.active {color: #999;}
    a {color: #333;&:visited{color: #333;}}
  }
}

</style>