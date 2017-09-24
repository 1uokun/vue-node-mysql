<template>
	<footer id="footer">
		<div class="footer-tab-custom" v-bind:class="{selected:$route.path=='/'}" v-on:click="jump(s='/')">
			<span class="icon" v-bind:class="{selected:$route.path=='/'}"></span>
			<span class="text">职位</span>
		</div>
		<div class="footer-tab-search" v-bind:class="{selected:$route.path=='/search'}" v-on:click="jump(s='/search'),clear()">
			<span class="icon" v-bind:class="{selected:$route.path=='/search'}"></span>
			<span class="text">搜索</span>
		</div>
		<div class="footer-tab-mine" v-bind:class="{selected:$route.path=='/user'}" v-on:click="jump(s='/user')">
			<span class="icon" v-bind:class="{selected:$route.path=='/user'}"></span>
			<span class="text">我的</span>
		</div>
	</footer>
</template>

<script>
	export default {
		name:'foot',
		methods:{
			jump(s) {
				this.$router.push({path:s})
				this.isSelected = s
			},
			clear(){
				this.$store.state.search = []
			}
		}
	}
</script>

<style lang="scss" scoped>
@import 'static/theme.scss';
#footer {
	@extend %nav;
	position: fixed;
	bottom: 0px;
	border-top: 1px solid $border_color;
	font-size: 1.6rem;
	div{
		float:left;
		width:(100%/3);
		height:100%;
		@extend %btn;
	}
	div.selected{
			@extend %btn_selected;
		}
	.icon {
	    display: inline-block;
	    width: 18px;
	    height: 17px;
	    margin-bottom: -2px;
	}
}
#footer .footer-tab-custom .icon {@include foot_icon(-32px,-2.5px);}
#footer .footer-tab-custom .selected{@include foot_icon(-32px,-20.5px);}

#footer .footer-tab-search .icon {@include foot_icon(-14px,-2.5px);}
#footer .footer-tab-search .selected {@include foot_icon(-14px,-20.5px);}

#footer .footer-tab-mine .icon {@include foot_icon(-52.5px,-2px);}
#footer .footer-tab-mine .selected {@include foot_icon(-52.5px,-19.5px);}

</style>