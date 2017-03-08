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