<template>
	<div id="content">

		<myhead></myhead>

		<!--搜索框-->
		<div class="linputer">
            <div class="lbutton" 
            	 @click="cityToggle"
            >
                <span class="city">
                	{{city_selected}}
                </span>
                <span class="glyphicon-city"></span>
            </div>

            <div class="rinput">
                <input 	class="inputer" 
                		type="text" 
                		placeholder="搜索职位或公司" 
                		v-model="keyWord" 
                		@keyup.enter="getListmore"
                >
                <span 	class="search" 
                		@click="getListmore"
                >
                	<!--搜索按钮图标-->
                	<em class="glyphicon-search"></em>
               	</span>

            </div>
        </div>


		<!--提示框-->
        <div class="listcon">

        	<!--搜索历史提示-->
            <ul class="history"  
            	v-if="history_show"
            >
            	<li class="activeable history-item" 
            		v-for="(h,index) in this.$store.state.history" 
            		@click="click_search(h)"
            	>
            		<span class="text">
            			{{h}}
            		</span>
					
					<!--删除搜索历史按钮-->
            		<div class="delcon">
            			<span 	class="glyphicon-delete" 
            					@click.stop="history_delete(index)"
            			>
            			</span>
            		</div>

            	</li>
            </ul>
			
			<!--用户搜索条件提示-->
            <div	class="custominfo none" 
            		v-if="custominfo"

            >
                将搜索地区和关键词设为定制条件
            
            </div>
			
			<!--无结果提示-->
            <ul class="list">
            	<li class="list-empty" 
            		v-if="empty"
            	>
            		<span class="glyphicon-face"></span>
            		<span class="text">
            			拉勾上暂时没有这样的职位
            		</span>
            	</li>
            </ul>

        </div>


		<!--搜索结果list-->
		<ul class="list" style="margin-bottom:45px;">
	      <li 	class="list-item" 
	      		v-for="(l,index) in filterSearch" 
	      		v-if="index<=num"
	      >
	        <img 	class="item-logo"
	        		v-bind:src="'http://www.lagou.com/'+l.companyLogo"
	        >
	        <div class="item-desc">
	          <h2 class="item-title">

	          		{{l.companyName}}

	          </h2>
	          <p class="item-info">
	            <span class="item-pos">

	              	{{l.positionName}}
	              	{{'['+l.city+']'}}

	            </span>
	            <span class="item-salary">

	              	{{l.salary}}

	            </span>
	          </p>
	          <p class="item-time">

	          		{{l.createTime}}

	          </p>
	        </div>
	      </li>
	      <li 	class="list-more" 
	      		@click="getMore" 
	      		v-if="filterSearch.length!==0 && num<filterSearch.length"
	      >
	  			加载更多
	  	  </li>
	    </ul>
		

		<!--城市选择city-->
		<div 	class="fdialog-rcon" 
				v-show="hide"
		>
	        <div id="header">
	        	<div class="left" v-on:click="cityToggle">
	        		<span 	class="pull-left glyphicon-corner">
	        		</span>
	        	</div>
	        	
	        	拉勾网
	        	
	        </div>

			<div class="fdialog-rcon-child">
		        <div 	id="city-table"  
		        		v-for="city in this.$store.state.citys"
		        >
		        	<div class="Acronym">
		        		<span>
		        			{{city.nameStr}}
		        		</span>
		        	</div>

		        	<ul class="city-list">
		        		<li v-for="list in city.cityList" 
		        			@click="citySelect(list)"
		        			v-bind:class="{selected:l==list}"
		        		>
		        			{{list}}

		        		</li>
		        	</ul>
		        </div>
	        </div>
        </div>

	<myfoot></myfoot>

	</div>
</template>

<script>
import myhead from './head'
import myfoot from './foot'
export default {
	name:'search',
	components: {
		myhead,
		myfoot
	},
	data(){
		return {
			city_selected:'全国',
			num:15,
			filterSearch:[],
			keyWord:'',
			hide:false,
			custominfo:false,
			empty:false,
			history_show:true,
			l:'',
		} 
	},
	methods:{
		cityToggle() {
			return this.hide = this.hide == false ? true : false;
		},
		citySelect(list) {
			this.l = list
			this.city_selected = list
			if(this.keyWord!='')this.getListmore()
			this.hide = false;
		},
		history_delete(index) {
			this.$store.dispatch('history_delete',index)
		},
		click_search(h) {
			this.keyWord = h
			return this.getListmore()
		},
		getMore(){
	      this.num+=15
	    },
	    getListmore: function() {
	    	  this.num = 15
	          let keyWord = this.keyWord
	          let search_result = this.$store.state.search_result
	          let city_selected = this.city_selected
	          let filterSearch = this.filterSearch = []
	          
	          search_result.forEach(function(item){
	          		if((city_selected == '全国' || item.city == city_selected) &&item.positionName.indexOf(keyWord)>=0){

	          			filterSearch.push(item)
	          		}
	          })
	          if(filterSearch==0) {
	          	this.empty=true
	          }else {
	          	this.empty=false
	          }
	          this.custominfo=true
			  this.history_show = false
			  //记录搜索历史，localstrong
	          this.$store.dispatch('history_record',keyWord)
	      },
	}
}
</script>


<style lang="scss">
@import "static/theme.scss";
.linputer {
	position: relative;
	border-bottom: 1px solid $border_color;
	height: 45px;
	&:after {
		content: ".";
		display: block;
		height: 0;
		clear: both;
		visibility: hidden;
	}
}
.lbutton {
    float: left;
    height: 45px;
    line-height: 45px;
    font-size: 1.5rem;
    text-align: center;
    width: 88px;
    border-right: 1px solid $border_color;
    span {
    	display: inline-block;
	}
	.glyphicon-city {
	    width: 8.5px;
	    height: 7px;
	    @include foot_icon(-1px,-2.5px);
	}
}


.rinput {
    height: 45px;
    margin-left: 89px;
    position: relative;
    .inputer {
	    display: block;
	    border: none;
	    padding: 10px 0;
	    height: 25px;
	    line-height: 25px;
	    color: #333;
	    width: 75%;
	    margin: 0 0 0 5%;
	    font-size: 1.5rem;
	    float: left;
	}
	.search {
	    display: inline-block;
	    width: 20%;
	    height: 45px;
	    line-height: 45px;
	    float: right;
	    position: relative;
	    .glyphicon-search {
		    display: block;
		    margin: 14px auto 0 auto;
		    width: 17px;
		    height: 17px;
		    @include foot_icon(-14px,-2.5px);
		}
	}
	&:after{
    	@extend %after_clearfix;
    }
}


.history {
    background-color: $dim_bg_color;
    color: #666;
    .history-item {
	    height: 45px;
	    line-height: 45px;
	    font-size: 1.4rem;
	    border-bottom: 1px solid $border_color;
	    padding: 0 0 0 23px;
	}
	.delcon {
	    float: right;
	    width: 40px;
	    height: 45px;
	    text-align: center;
	    width: 14%;
	    .glyphicon-delete {
		    display: inline-block;
		    height: 10px;
		    width: 12px;
		    @include foot_icon(-71.5px,-4px);
		}
	}
}

.custominfo {
    height: 35px;
    line-height: 35px;
    font-size: 1.4rem;
    color: $base_color;
    background-color: $btn_bg_color;
    text-align: center;
    margin-top: 16px;
    margin-bottom: 14px;
}
.list .list-empty {
    text-align: center;
    font-size: 1.5rem;
    margin-top: 30px;
    color: $dim_font_color;
    %list-empty {
	    display: inline-block;
	    vertical-align: middle;
	}
    .glyphicon-face {
	    width: 20px;
	    height: 20px;
	    @include foot_icon(-70px,-18.5px);
	    @extend %list-empty;
	}
	.text {
		@extend %list-empty;
	}
}

//city-list头尾固定，中间滚动样式
.fdialog-rcon{
	width:100%;
	height:100%;
	background: #fff;
	top:0;
	left:0;
	z-index:999;
	position: fixed;
}
.fdialog-rcon-child {
	height: 100%;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    -moz-overflow-scrolling: touch;
    overflow-scrolling: touch;
}
</style>