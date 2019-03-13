/**
 * Created by KEWEN on 2019/3/6.
 */
// 获取日历数据
var displayDaysPerMonth = function(year, month) {
  // console.log('year: ', year);
  // console.log('month: ', month);
  // 定义每个月的天数，如果是闰年第二月改为29天
  var month_list = {};
  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    daysInMonth[1] = 29;
  }
  var targetDay = new Date(year, month - 1, 1).getDay(); // 这月1号星期数
  var total_calendar_list = []; //  一个月的列表
  var preNum = targetDay;
  var nextNum = 0;
  // 上个月多余的数据
  if (targetDay > 0) {
    for (var i = 0; i < preNum; i++) {
      var obj = {
        type: 'pre',
        content: ''
      };
      total_calendar_list.push(obj);
    }
  }
  for (var i = 0; i < daysInMonth[month - 1]; i++) {
    var obj = {
      type: 'normal',
      content: i + 1,
      status: 0,
      data: year + '-' + month + '-' + (i + 1)
    };
    total_calendar_list.push(obj);
  }
  nextNum = 6 - new Date(year, month, 0).getDay();

  // 下个月多余的数据
  for (var i = 0; i < nextNum; i++) {
    var obj = {
      type: 'next',
      content: ''
    };
    total_calendar_list.push(obj);
  }
  month_list.title = year + '年-' + month + '月';
  month_list.main = total_calendar_list;
  // console.log('month_list: ', month_list)
  return month_list;
};

var numMonthsGetCalendarList = function(n) {
  var _year = new Date().getFullYear();
  var _month = new Date().getMonth();
  var todayDate = new Date().getDate();
  var current_month = _month + 1;
  var addMonth = current_month;
  var year = _year;
  var getCalendar_list = [];
  for (var i = 0; i < n; i++) {
    if (addMonth < 13) {
      getCalendar_list.push(displayDaysPerMonth(year, addMonth));
      addMonth++;
    } else {
      addMonth = 1;
      year += 1;
      getCalendar_list.push(displayDaysPerMonth(year, addMonth));
      addMonth++;
    }
  }
  return getCalendar_list;
};

var getBetweenDateStr = function(start, end) {
  var result = [];
  var beginDay = start.split('-');
  var endDay = end.split('-');
  var diffDay = new Date();
  var dateList = new Array();
  var i = 0;
  diffDay.setDate(beginDay[2]);
  diffDay.setMonth(beginDay[1] - 1);
  diffDay.setFullYear(beginDay[0]);
  while (i == 0) {
    var countDay = diffDay.getTime() + 24 * 60 * 60 * 1000;
    diffDay.setTime(countDay);
    dateList[2] = diffDay.getDate();
    dateList[1] = diffDay.getMonth() + 1;
    dateList[0] = diffDay.getFullYear();
    if (dateList[0] == endDay[0] && dateList[1] == endDay[1] && dateList[2] == endDay[2]) {
      break;
    }
    result.push(dateList[0] + '-' + dateList[1] + '-' + dateList[2]);
  };
  // console.log(result);
  return result;
};

var dateStr2stamp = function(dateStr) {
  var dateStrArr = dateStr.split('-');
  return Date.parse(new Date(dateStrArr[0], dateStrArr[1] - 1, dateStrArr[2]));
};
var dateDiff = function(end, start) {
  var endStamp = this.dateStr2stamp(end);
  var startStamp = this.dateStr2stamp(start);
  return (endStamp - startStamp) / (1000 * 60 * 60 * 24);
};

var resetCalendar_list = function(arr, data) {
  var _year = new Date().getFullYear();
  var _month = new Date().getMonth();
  var targetDateArr = '';
  var currentMonthTotal = _year * 12 + _month + 1; // 当前时间月数量，以公元0年0月为起始
  var targetMonthTota = 0; // 目标时间月数量
  var monthsIndex = 0; // 月份索引
  var dayIndex = 0; // 日份索引
  var newTarget1Day = new Date(); // 实例化一个目标月1号date
  for (var i = 0; i < arr.length; i++) {
    targetDateArr = arr[i].split('-');
    targetMonthTota = targetDateArr[0] * 12 + targetDateArr[1] * 1;
    monthsIndex = targetMonthTota - currentMonthTotal;
    newTarget1Day.setDate(1);
    newTarget1Day.setMonth(targetDateArr[1] - 1);
    newTarget1Day.setFullYear(targetDateArr[0]);
    dayIndex = newTarget1Day.getDay() + targetDateArr[2] * 1 - 1;
    data[monthsIndex].main[dayIndex].status = 1;
  }
  return data;
};
