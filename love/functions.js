/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = siteDays(2019,12,10);
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒"; 
	$("#clock").html(result);
}

function siteDays(year,month,day){
	//window.setTimeout("siteTime()", 1000);
	var today = new Date()
	var todayYear = today.getFullYear()
	var todayMonth = today.getMonth()
	var todayDate = today.getDate()
	var todayHour = today.getHours()
	var todayMinute = today.getMinutes()
	var todaySecond = today.getSeconds()
	// 返回当前年份的天数
	function daysInYear(year){
		if((year%100 == 0 && year%400==0 ) || year % 4 == 0) return 366;
		else return 365;
	}
	// 返回当前年份2月的天数
	function daysInMonth(year){
		if((year%100 == 0 && year%400==0 ) || year % 4 == 0)return 29;
		else return 28;
	}
	/* 返回当前年份到指定年份的天数*/
	function daysDurYears(before){
		let diff = 0;
		for (let i = 0; i < (todayYear-before); i++) diff=diff+(daysInYear(before+i));
		return diff;
	}
	// 返回年初到当前月份前一月份的总天数
	function dayDurMonths(year,month){
		switch ((month-1)) {
			case 1:
				return 31;
				break;
			case 2:
				return (31+daysInMonth(year));
				break;
			case 3:
				return (31*2+daysInMonth(year));
				break;
			case 4:
				return (31*2+30+daysInMonth(year));
				break;
			case 5:
				return (31*3+30+daysInMonth(year));
				break;
			case 6:
				return (31*3+30*2+daysInMonth(year));
				break;
			case 7:
				return (31*4+30*2+daysInMonth(year));
				break;
			case 8:
				return (31*5+30*2+daysInMonth(year));
				break;
			case 9:
				return (31*5+30*3+daysInMonth(year));
				break;
			case 10:
				return (31*6+30*3+daysInMonth(year));
				break;
			case 11:
				return (31*6+30*4+daysInMonth(year));
				break;
			case 12:
				return (31*7+30*4+daysInMonth(year));
				break;
			default:
				return 0;
				break;
		}
	}
	// 从指定年份的月份到当前年份的月份的当天的天数
	function diffDays(year,month,day) {
		return daysDurYears(year)+dayDurMonths(month)+day;
	}
	// 求指定日期到现在的天数
	function daysToNow(year,month,day) {return (daysDurYears(year)-dayDurMonths(year,month)-day+todayDate+dayDurMonths(todayYear,todayMonth+1))};
	
	return daysToNow(year,month,day);
	/* document.getElementById("sitetime").innerHTML=" 已运行"+diffYears+" 年 "+diffDays+" 天 "+diffHours+" 小时 "+diffMinutes+" 分钟 "+diffSeconds+" 秒" */
	// document.getElementById("daysToNow").innerHTML="已经努力存活了"+(daysToNow(b_year,b_month,b_day))+" 天 "+todayHour+" 小时 "+todayMinute+" 分钟 "+todaySecond+" 秒"
	}
