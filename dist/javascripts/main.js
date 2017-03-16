window.onload = function() {

    // 组件-一定要在vue前面
    Vue.component('zy', {
        template: '<h2>我是首页</h2>' //用什么模板来渲染他
    });

    Vue.component('rz', {
        template: '<h2>我是日志</h2>' //用什么模板来渲染他
    });
    Vue.component('xc', {
        template: '<h2>我是相册</h2>' //用什么模板来渲染他
    });
    Vue.component('lyb', {
        template: '<h2>我是留言吧</h2>' //用什么模板来渲染他
    });
    Vue.component('ss', {
        template: '<h2>我是说说</h2>' //用什么模板来渲染他
    });
    Vue.component('grd', {
        template: '<h2>我是个人的</h2>' //用什么模板来渲染他
    });
    Vue.component('bzd', {
        template: '<h2>bzd</h2>' //用什么模板来渲染他
    });

    var agumon = new Vue({
        el: '.container', //id 在这个盒子里面才能操作下面的东西
        data: { //数据
            types: [
                { "title": "主页", "link": "zy" },
                { "title": "日志", "link": "rz" },
                { "title": "相册", "link": "xc" },
                { "title": "留言吧", "link": "lyb" },
                { "title": "说说", "link": "ss" },
                { "title": "个人的", "link": "grd" },
                { "title": "bzd", "link": "bzd" },
            ],
            show: 'rz'
        },
        computed: { //页面展示数据直接处理数据放出来

        },
        methods: { //事件操作

        }
    });


    function fouter() {
        var str = location.hash;
        str = str.slice(1);
        str = str.replace(/^\//, '');
        var map = {
            zy: true,
            rz: true,
            xc: true,
            lyb: true,
            ss: true,
            grd: true,
            bzd: true
        }
        if (map[str]) {
            agumon.show = str
        } else {
            agumon.show = 'zy'
        }
        console.log(str)
    }

    // window.addEventListener('hashChange', callback: EventListener, capture ? : boolean)
    window.addEventListener('hashchange', fouter)


};
/*二部分下-无敌轮播图*/
//生成点点
/*var BanLength=$("ul.bannerL li");
var _html="";
for (var i=0;i<BanLength.length;i++){
	_html+="<li></li>"
}
$("ul.anNiu").html(_html);
*/
//第一个轮播图
var obj = $("#louCeng1 ul.anNiu li"); //按钮的li
var objScroll = $("#louCeng1 .leftBanner .bannerL"); //图片的ul
var rightbot = $("#louCeng1 .leftBanner .banpred"); //右边按钮
var leftbot = $("#louCeng1 .leftBanner .banNext"); //左边按钮
//第二个轮播图
var obj2 = $("#louCeng2 ul.anNiu li") //按钮的li
var objScroll2 = $("#louCeng2 .leftBanner .bannerL"); //图片的ul
var rightbot2 = $("#louCeng2 .leftBanner .banpred"); //右边按钮
var leftbot2 = $("#louCeng2 .leftBanner .banNext"); //左边按钮
//封装好轮播图层
function comScroll(obj, objScroll, rightbot, leftbot) {

    var timeStop = null;
    var _index = 0;
    obj.hover(function() {
        clearInterval(timeStop);
        _index = $(this).index();
        allPlay()
    }, function() { autoPlay() });

    //按钮切换
    rightbot.click(function() {
        _index++;
        if (_index == obj.length) { _index = 0; }
        allPlay()
    });
    rightbot.hover(function() {
        clearInterval(timeStop)
    }, function() {
        autoPlay();
    });

    //按钮切换
    leftbot.click(function() {
        _index--;
        if (_index < 0) { _index = obj.length - 1; }
        allPlay()
    });
    leftbot.hover(function() {
        clearInterval(timeStop)
    }, function() {
        autoPlay();
    });

    //定时器
    function autoPlay() {
        timeStop = setInterval(function() {
            _index++;
            if (_index == obj.length) { _index = 0; }
            allPlay()
        }, 2000);
    }
    autoPlay();

    //all
    function allPlay() {
        obj.eq(_index).addClass("hover").siblings().removeClass("hover");
        objScroll.animate({ left: _index * -450 }, 200)
    }
}
comScroll(obj, objScroll, rightbot, leftbot);
comScroll(obj2, objScroll2, rightbot2, leftbot2);


