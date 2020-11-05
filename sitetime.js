function sitetime(){
window.setTimeout("siteTime()", 1000);
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

/* document.getElementById("sitetime").innerHTML=" 已运行"+diffYears+" 年 "+diffDays+" 天 "+diffHours+" 小时 "+diffMinutes+" 分钟 "+diffSeconds+" 秒" */
document.getElementById("sitetime").innerHTML="已经努力存活了"+(daysToNow(2020,10,23))+" 天 "+todayHour+" 小时 "+todayMinute+" 分钟 "+todaySecond+" 秒"
console.log(daysToNow(2020,10,23),todayHour,todayMinute,todaySecond);
}
sitetime();