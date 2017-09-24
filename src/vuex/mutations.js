import * as types from './mutation-types'

export default {
	//搜索历史记录
	[types.HISTORY_RECORD] (state,search) {
		state.history.push(search)
		//提示：在history中删除重复数据
		 Array.prototype.del = function() {
		   var a = {}, c = [], l = this.length;
		   for (var i = 0; i < l; i++) {
		     var b = this[i];
		     var d = (typeof b) + b;
		     if (a[d] === undefined) {
		       c.push(b);
		       a[d] = 1;
		     }
		    }
		    return c;
		 }
		state.history = state.history.del()
		window.localStorage.setItem('HISTORY_RECORD',JSON.stringify(state.history));
	},
	//读取搜索历史记录
	[types.HISTORY_READ](state) {
		if (window.localStorage.getItem("HISTORY_RECORD")) {
          state.history=JSON.parse(window.localStorage.getItem('HISTORY_RECORD'));
        }else state.history=[]
	},
	//删除搜索历史记录
	[types.HISTORY_DELETE](state,index) {
		state.history.splice(index,1)
		window.localStorage.setItem('HISTORY_RECORD',JSON.stringify(state.history));
	},
}