// build time:Thu Oct 11 2018 19:22:31 GMT+0800 (中国标准时间)
$(document).ready(function(){var i=$(".sidebar-inner");var t=CONFIG.sidebar.offset?CONFIG.sidebar.offset:12;function e(){return $(".header-inner").height()+t}function r(){var i=$(".footer-inner");var t=i.outerHeight(true)-i.outerHeight();var e=i.outerHeight(true)+t;return e}function a(){var a=e();var f=r();var n=$("#sidebar").height()+NexT.utils.getSidebarb2tHeight();var o=$("#content").height();if(a+n<o){i.affix({offset:{top:a-t,bottom:f}});i.affix("checkPosition")}$("#sidebar").css({"margin-top":a,"margin-left":"initial"})}function f(){$(window).off(".affix");i.removeData("bs.affix").removeClass("affix affix-top affix-bottom");a()}function n(){var i=window.matchMedia("(min-width: 992px)");i.addListener(function(i){if(i.matches){f()}})}a();n()});
//rebuild by neat 