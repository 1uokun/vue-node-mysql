import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import {getCookie} from '../assets/js/cookie.js';
Vue.use(Vuex)

const state = {
    citys:[
        {
            "cityList":["北京","上海","广州","深圳","成都","杭州"],
            "name":"热门城市",
            "nameStr":"热门城市"
        },
        {
            "cityList":["安庆","安阳","保定","北京","包头","长春","成都","重庆","长沙","常州","郴州","沧州","东莞","大连","东营","佛山","阜阳","福州","抚州"],
            "name":"",
            "nameStr":"ABCDEF"
        },
        {
            "cityList":["桂林","贵阳","广州","赣州","邯郸","哈尔滨","合肥","呼和浩特","海口","衡水","河源","杭州","惠州","湖州","金华","九江","吉林","江门","济南","济宁","嘉兴","荆州"],
            "name":"",
            "nameStr":"GHIJ"
        },
        {
            "cityList":["昆明","聊城","廊坊","丽水","拉萨","临沂","洛阳","连云港","兰州","柳州","泸州","马鞍山","茂名","绵阳","梅州","宁波","南昌","南京","南宁","南通","南阳"],
            "name":"",
            "nameStr":"KLMN"
        },
        {
            "cityList":["平顶山","莆田","濮阳","青岛","秦皇岛","清远","泉州","衢州","日照"],
            "name":"",
            "nameStr":"OPQR"
        },
        {
            "cityList":["上海","石家庄","汕头","汕尾","绍兴","沈阳","三亚","深圳","苏州","宿州","泰安","天津","唐山","太原","台州"],
            "name":"",
            "nameStr":"STUV"
        },
        {
            "cityList":["潍坊","武汉","芜湖","威海","乌鲁木齐","无锡","温州","西安","孝感","香港特别行政区","厦门","西宁","新乡","咸阳","襄阳","徐州","宜宾","银川","盐城","宜昌","烟台","扬州","淄博","珠海","镇江","湛江","肇庆","中山","遵义","郑州","漳州","株洲"],
            "name":"",
            "nameStr":"WXYZ"
        }
    ],
    positionName:['产品经理','Java','运营','Android','PHP','UI','IOS','编辑','BD'],
    salary:['没有要求','2k以下','2k-5k','5k-10k','10k-15k','15k-25k','25k-50k','50k以上'],
    positionName_selected:getCookie('p'),
    city_selected:getCookie('c'),
    salary_selected:getCookie('s'),
    listmore:[],        //首页列表
    history:[],         //搜索历史
    search_result:[],    //搜索列表
    filterSearch:[]
}
export default new Vuex.Store({
    state,
    mutations,
    actions
});
