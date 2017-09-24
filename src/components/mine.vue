<template>
	<div id="content">
        <div id="header" class="set">
        	<div class="left" @click="goBack">
        		<span class="pull-left glyphicon-corner"></span>
        	</div>
        	设置定制信息
        </div>


		<div v-if="url==location">
			<ul class="setCustomInfo">
		        <li class="item">
		            <span class="header">
		                职位类型
		            </span>
		            <a href="/mine?f=1" class="desc">
		                
		                   {{this.$store.state.positionName_selected}}
		                
		            </a>
		        </li>
		    
		        <li class="item">
		            <span class="header">
		                工作地点
		            </span>
		            <a href="/mine?f=2" class="desc" >
		                
		                    {{this.$store.state.city_selected}}
		                
		            </a>
		        </li>
		    
		        <li class="item">
		            <span class="header">
		                期望薪水
		            </span>
		            <a href="/mine?f=3" class="desc">
		                
		                    {{this.$store.state.salary_selected}}
		                
		            </a>
		        </li>
		    
		        <li class="item">
		            <span class="header">
		                公司规模
		            </span>
		            <a href="javascript:;" class="desc">
		                
		                    没有要求
		                
		            </a>
		        </li>
		        <div class="search" v-if="url==location" @click="goBack">
		            开始搜索
		        </div>
    		</ul>
		</div>







		<!--职位选择-->
		<div class="dialog" v-if="url=='f=1'">
			<div class="info">
	            <span class="text">
	                <em class="left"></em>
	                    想找什么职位？
	                <em class="right"></em>
	            </span>
        	</div>
        	<div class="rinputer">
        		<input 	class="inputer" 
        				placeholder="输入你想定制的职位"
        				v-model="inputer"
        				@keyup.enter="input"
        		>
        		<span class="button" @click="input">OK</span>
        	</div>
        	<ul class="predata">
        		<li class="item" 
        			v-for="p in this.$store.state.positionName"
        			@click="positionNameSelect(p)"
        		>
        			{{p}}
        		</li>
        	</ul>
		</div>






    	<!--城市选择city-->
		<div class="dialog" v-if="url=='f=2'">
			<div class="info">
	            <span class="text">
	                <em class="left"></em>
	                    告诉我你期望的工作地点
	                <em class="right"></em>
	            </span>
        	</div>
			<div>
		        <div 	id="city-table"  
		        		v-for="city in this.$store.state.citys"
		        >
		        	<div class="Acronym">
		        		<span>
		        			{{city.nameStr}}
		        		</span>
		        	</div>

		        	<ul class="city-list">
		        		<li v-for="c in city.cityList" 
		        			@click="citySelect(c)"
		        		>
		        			{{c}}

		        		</li>
		        	</ul>
		        </div>
	        </div>
        </div>




		<!--薪水区间-->
		<div class="dialog" v-if="url=='f=3'">
			<div class="info">
	            <span class="text up">
	                <em class="left"></em>
	                你值得更好的生活，
	            </span>
	            <br>
	            <span class="text down">
	            	告诉我你期望的薪水。
	                <em class="right"></em>
	            </span>
        	</div>
        	<ul class="predata">
        		<li class="item" 
        			v-for="s in this.$store.state.salary"
        			@click="salarySelect(s)"
        		>
        			{{s}}
        		</li>
        	</ul>
		</div>





    </div>
</template>

<script>
import {setCookie} from '../assets/js/cookie.js';
export default {
	name:'mine',
	data(){
		return {
			location:location.href,
			inputer:'',
			//获取当前浏览器地址?后面的参数
			url:location.href.substring(location.href.indexOf('?')+1),
			
		}
	},
	methods:{
		goBack(){
			window.history.back()
		},
		positionNameSelect(p){
			setCookie('p',p,1000*60)
			this.goBack()
		},
		citySelect(c){
			setCookie('c',c,1000*60)
			this.goBack()
		},
		salarySelect(s){
			setCookie('s',s,1000*60)
			this.goBack()
		},
		input(){
			setCookie('p',this.inputer,1000*60)
			this.goBack()
		}
	}
}
</script>

<style lang="scss">
@import "static/theme.scss";
ul.setCustomInfo{
	padding:20px;
	li.item {
		.header{
			display: block;
		    color: #ccc;
		    font-size: 1.2rem;
		}
		.desc{
			display: block;
		    margin: 10px 0 20px 0;
		    text-align: center;
		    height: 62.5px;
		    line-height: 62.5px;
		    color: #333;
		    font-size: 1.5rem;
		    background-color: $dim_bg_color;
		    border-radius: 2px;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		    padding: 0 10px;
		}
	}
	.search{
		height: 45px;
	    line-height: 45px;
	    color: #fff;
	    background-color: $base_color;
	    font-size: 1.6rem;
	    text-align: center;
	    position: fixed;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	}
}

%quotes{
	display: inline-block;
    width: 13px;
    height: 10.5px;
    position: absolute;
}



//职位选择
.dialog{
	width:100%;
	height:100%;
	background: #fff;
	.info{
		background: url(/static/back-info.jpg) repeat;
	    background-size: 320px 125px;
	    height: 125px;
	    color: #00b38a;
	    font-size: 1.9rem;
	    text-align: center;
	    border-bottom: 1px solid $border_color;
	    .text{
	    	display: inline-block;
		    position: relative;
		    height: 25px;
		    top: 50px;

		    .left{
	    	    left: -20px;
			    top: -2px;
			    @include foot_icon(-102.5px,-4px);
			    @extend %quotes;
		    }
		    .right{
		    	right: -14px;
			    top: 15px;
			    @include foot_icon(-119.5px,-4px);
			    @extend %quotes;
		    }
	    }
	    .up{
	    	top: 35px;
			left: -22px;
	    }
	    .down{
	    	top: 40px;
			left: 23px;
	    }
	}
	.rinputer{
	    height: 50px;
		line-height: 50px;
		border: 1px solid $border_color;
		position: relative;
		margin-right: 60px;
		padding-right: 45px;
		.inputer{
			display: block;
		    margin-left: 23px;
		    font-size: 1.5rem;
		    width: 100%;
		    display: block;
    		height: 100%;
		}
		.button{
			position: absolute;
		    top: 0;
		    right: -61px;
		    width: 60px;
		    height: 100%;
		    border-left: 1px solid $border_color;
		    border-bottom: 1px solid $border_color;
		    text-align: center;
		    font-size: 1.5rem;
		    color: #c2cfcc;
		    display: block;
		}
	}
	.predata{
		margin-left: 15px;
		.item{
			height: 44px;
		    line-height: 44px;
		    color: #666;
		    font-size: 1.4rem;
		    border-bottom: 1px solid $border_color;
		    padding: 0 15px 0 10px;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		}
	}
}
</style>