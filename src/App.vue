<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {getCookie} from './assets/js/cookie.js';

export default {
  name: 'app',
  created(){
    // 在首页时就加载search页面的数据，练习vuex
    let state = this.$store.state
    let city_selected = state.city_selected
    let salary_selected = state.salary_selected
    let positionName_selected = state.positionName_selected
    let search_data = state.search_data
    this.$http.get('../static/listmore.json').then((response)=>{
      let b = response.data.content.data.page.result
      //search页面数据
      state.search_result = b
      //判断用户是否登录
      if(getCookie('username')=='') {
        state.search_data = b
      }else {
        //mine.html页面 精准搜索设置
        b.forEach(item => {
          if(
            (
              city_selected == '全国' ||
              item.city == city_selected
            ) &&
            item.salary == salary_selected &&
            item.positionName.indexOf(positionName_selected) >= 0
          )
          {
            search_data.push(item)
          }
        })
      }
    })
    // 加载历史搜索
    return this.$store.dispatch('history_read')
  },
}
</script>


<style>
/*自定义normal.css*/
div {
  display: block;
}
html {
  font-family: Helvetica;
  font-size: 65.5%;
  color: #333;
}
input, textarea, button, select, div, footer, header, a {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -moz-tap-highlight-color: rgba(0,0,0,0);
    tap-highlight-color: rgba(0,0,0,0);
}
h2, h3, p {
    margin: 0;
}
ul{
  margin: 0;
  list-style: none;
  -webkit-padding-start: 0;
  -moz-padding-start: 0;
  padding-start: 0;
}
li{
  list-style: none;
}
a{
  outline: none;
  text-decoration: none;
}
img, input {
    border: none;
    outline: none;
    padding: 0;
}
</style>
