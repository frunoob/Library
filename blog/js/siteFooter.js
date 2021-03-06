var b_year = 2020;
var b_month = 10;
var b_day = 23; 

function setDay() {
    if(arguments.length === 0){
        siteTime();
    }else if (arguments.length === 3){
        b_year = arguments[0];
        b_month = arguments[1];
        b_day = arguments[2];
        siteTime();
        }
    
}
function siteTime() {
    window.setTimeout("siteTime()", 1000);
    var today = new Date();
    var todayYear = today.getFullYear();
    var todayMonth = today.getMonth();
    var todayDate = today.getDate();
    var todayHour = today.getHours();
    var todayMinute = today.getMinutes();
    var todaySecond = today.getSeconds();
    var todayWeek = today.getDay();
    // 返回当前年份的天数
    function daysInYear(year) {
        if ((year % 100 == 0 && year % 400 == 0) || year % 4 == 0) return 366;
        else return 365;
    }
    // 返回当前年份2月的天数
    function daysInMonth(year) {
        if ((year % 100 == 0 && year % 400 == 0) || year % 4 == 0) return 29;
        else return 28;
    }
    /* 返回当前年份到指定年份的天数*/
    function daysDurYears(before) {
        let diff = 0;
        for (let i = 0; i < (todayYear - before); i++) diff = diff + (daysInYear(before + i));
        return diff;
    }
    // 返回年初到当前月份前一月份的总天数
    function dayDurMonths(year, month) {
        switch ((month - 1)) {
            case 1:
                return 31;
                break;
            case 2:
                return (31 + daysInMonth(year));
                break;
            case 3:
                return (31 * 2 + daysInMonth(year));
                break;
            case 4:
                return (31 * 2 + 30 + daysInMonth(year));
                break;
            case 5:
                return (31 * 3 + 30 + daysInMonth(year));
                break;
            case 6:
                return (31 * 3 + 30 * 2 + daysInMonth(year));
                break;
            case 7:
                return (31 * 4 + 30 * 2 + daysInMonth(year));
                break;
            case 8:
                return (31 * 5 + 30 * 2 + daysInMonth(year));
                break;
            case 9:
                return (31 * 5 + 30 * 3 + daysInMonth(year));
                break;
            case 10:
                return (31 * 6 + 30 * 3 + daysInMonth(year));
                break;
            case 11:
                return (31 * 6 + 30 * 4 + daysInMonth(year));
                break;
            case 12:
                return (31 * 7 + 30 * 4 + daysInMonth(year));
                break;
            default:
                return 0;
                break;
        }
    }
    // 从指定年份的月份到当前年份的月份的当天的天数
    function diffDays(year, month, day) {
        return daysDurYears(year) + dayDurMonths(month) + day;
    }
    // 求指定日期到现在的天数
    function daysToNow(year, month, day) { return (daysDurYears(year) - dayDurMonths(year, month) - day + todayDate + dayDurMonths(todayYear, todayMonth + 1)) };
    // 返回©2020后面对应的年份
    function toYear() {
        if (todayYear - b_year == 0) {
            return b_year;
        } else {
            return b_year + "-" + todayYear;
        }
    }
    /* document.getElementById("sitetime").innerHTML=" 已运行"+diffYears+" 年 "+diffDays+" 天 "+diffHours+" 小时 "+diffMinutes+" 分钟 "+diffSeconds+" 秒" */
    document.getElementById("yearsToNow").innerHTML = toYear()+ ' <i style="color:#FF6A6A;animation: announ_animation 0.8s linear infinite;" class="fa fa-heartbeat"></i>';
    document.getElementById("daysToNow").innerHTML=(daysToNow(b_year, b_month, b_day)) + " 天 " + todayHour + " 小时 " + todayMinute + " 分钟 " + todaySecond + " 秒"
}
// 页脚内边距设为0
// footer=document.getElementById("footer-wrap");
// footer.style.padding = 0;
// // 移除页脚样式
// /* var app = document.getElementById('footer-wrap');
// app.removeAttribute('id'); */
// var app = document.getElementsByTagName("footer")[0];
// app.removeAttribute('id');

// 页眉颜色透明

// 会影响其他的post页面
/* var app3 = footer=document.getElementById("page-header");
// app3.removeAttribute('style');
app3.style.opacity=0. */

// 方法二
// var app = document.querySelector("header.full_page");
// if(app==null) {}else{app.style.backgroundColor="rgba(0,0,0,0)";}

//添加动图在返回顶部按钮旁边
/*添加图片top*/
// var top_up = "<img id='upj' class='upj' style='max-width: 1000%; transform: translate(-70px,-70px);' src='https://cdn.jsdelivr.net/gh/lete114/CDN/Use/up.gif' title='回到顶部' >";
/*添加到返回顶部按钮下*/
// document.getElementById("go-up").innerHTML += top_up;

// var full_page = document.getElementsByClassName("full_page");
// if (full_page.length != 0) {
//   full_page[0].style.background = "transparent";
// }

/* 主页 love fontaseme */
// var app = document.querySelector("i.fa-fw.fas.fa-heart.fa-lg");
// app.style="color:#FF6A6A;animation: announ_animation 0.8s linear infinite;";