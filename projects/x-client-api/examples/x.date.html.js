// 配置请求路径
require.config({
    paths: {
        'jquery': '/resources/javascript/jquery-2.0.3.min',
        'x': '/resources/javascript/core/x',
        'x.debug': '/resources/javascript/core/x.debug',
        'x.date': '/resources/javascript/core/x.date'
    }
});

require([
    'jquery',
    'x',
    'x.debug',
    'x.date'
],
function($, x)
{
    $(document).ready(function()
    {
        var outString = '';

        outString += '<ul>';

        outString += '<li>测试 x.date 模块开始.</li>';

        outString += '<li>初始化</li>';
        outString += '<li>运行 x.date.create(new Date()). 结果:[' + x.date.create(new Date()) + '].</li>';
        outString += '<li>运行 x.date.create([2000,1,1]). 结果:[' + x.date.create([2000, 1, 1]) + '].</li>';
        outString += '<li>运行 x.date.create(\'2000-01-01\'). 结果:[' + x.date.create('2000-01-01') + '].</li>';
        outString += '<li>运行 x.date.create(\'2013/11/7 15:14:40\'). 结果:[' + x.date.create('2013/11/7 15:14:40') + '].</li>';

        outString += '<li>运算</li>';
        outString += '<li>运行 x.date.add(\'2013-01-18 10:53:54\',\'minute\',5).toString(\'yyyy-MM-dd HH:mm:ss\'). 结果:[' + x.date.add('2013-01-18 10:53:54', 'minute', 5).toString('yyyy-MM-dd HH:mm:ss') + '].</li>';
        outString += '<li>运行 x.date.add(\'2013-01-18 10:53:54\',\'minute\',-5).toString(\'yyyy-MM-dd HH:mm:ss\'). 结果:[' + x.date.add('2013-01-18 10:53:54', 'minute', -5).toString('yyyy-MM-dd HH:mm:ss') + '].</li>';
        outString += '<li>运行 x.date.add(\'2000-01-01\',\'year\',5).toString(\'yyyy-MM-dd HH:mm:ss\'). 结果:[' + x.date.add('2000-01-01', 'year', 5).toString('yyyy-MM-dd HH:mm:ss') + '].</li>';
        outString += '<li>运行 x.date.add(\'2000-02-29\',\'quarter\',3).toString(\'yyyy-MM-dd HH:mm:ss\'). 结果:[' + x.date.add('2000-02-29', 'quarter', 3).toString('yyyy-MM-dd HH:mm:ss') + '].</li>';
        outString += '<li>运行 x.date.add(\'2000-02-29\',\'year\',3).toString(\'yyyy-MM-dd HH:mm:ss\'). 结果:[' + x.date.add('2000-02-29', 'year', 3).toString('yyyy-MM-dd HH:mm:ss') + '].</li>';
        outString += '<li>运行 x.date.add(\'2000-02-29\',\'year\',4).toString(\'yyyy-MM-dd HH:mm:ss\'). 结果:[' + x.date.add('2000-02-29', 'year', 4).toString('yyyy-MM-dd HH:mm:ss') + '].</li>';
        outString += '<li>运行 x.date.add(\'2000-01-01\',\'quarter\',2).toString(\'yyyy-MM-dd HH:mm:ss\'). 结果:[' + x.date.add('2000-01-01', 'quarter', 2).toString('yyyy-MM-dd HH:mm:ss') + '].</li>';
        outString += '<li>运行 x.date.add(\'2000-01-01\',\'month\',5).toString(\'yyyy-MM-dd HH:mm:ss\'). 结果:[' + x.date.add('2000-01-01', 'month', 5).toString('yyyy-MM-dd HH:mm:ss') + '].</li>';
        outString += '<li>运行 x.date.add(\'2014-01-31\',\'month\',1).toString(\'yyyy-MM-dd HH:mm:ss\'). 结果:[' + x.date.add('2014-01-31', 'month', 1).toString('yyyy-MM-dd HH:mm:ss') + '].</li>';
        outString += '<li>运行 x.date.add(\'2014-02-28\',\'month\',1).toString(\'yyyy-MM-dd HH:mm:ss\'). 结果:[' + x.date.add('2014-02-28', 'month', 1).toString('yyyy-MM-dd HH:mm:ss') + '].</li>';
        outString += '<li>运行 x.date.add(\'2014-02-28\',\'month\',11).toString(\'yyyy-MM-dd HH:mm:ss\'). 结果:[' + x.date.add('2014-02-28', 'month', 11).toString('yyyy-MM-dd HH:mm:ss') + '].</li>';
        outString += '<li>运行 x.date.add(\'2012-02-29\',\'month\',12).toString(\'yyyy-MM-dd HH:mm:ss\'). 结果:[' + x.date.add('2012-02-29', 'month', 12).toString('yyyy-MM-dd HH:mm:ss') + '].</li>';
        outString += '<li>运行 x.date.add(\'2014-03-31\',\'month\',1).toString(\'yyyy-MM-dd HH:mm:ss\'). 结果:[' + x.date.add('2014-03-31', 'month', 1).toString('yyyy-MM-dd HH:mm:ss') + '].</li>';
        outString += '<li>运行 x.date.add(\'2014-09-30\',\'month\',1).toString(\'yyyy-MM-dd HH:mm:ss\'). 结果:[' + x.date.add('2014-09-30', 'month', 1).toString('yyyy-MM-dd HH:mm:ss') + '].</li>';
        outString += '<li>运行 x.date.add(\'2014-10-31\',\'month\',1).toString(\'yyyy-MM-dd HH:mm:ss\'). 结果:[' + x.date.add('2014-10-31', 'month', 1).toString('yyyy-MM-dd HH:mm:ss') + '].</li>';
        outString += '<li>运行 x.date.add(\'2014-12-31\',\'month\',1).toString(\'yyyy-MM-dd HH:mm:ss\'). 结果:[' + x.date.add('2014-12-31', 'month', 1).toString('yyyy-MM-dd HH:mm:ss') + '].</li>';
        outString += '<li>运行 x.date.add(\'2000-01-01\',\'day\',60).toString(\'yyyy-MM-dd HH:mm:ss\'). 结果:[' + x.date.add('2000-01-01', 'day', 60).toString('yyyy-MM-dd HH:mm:ss') + '].</li>';
        outString += '<li>运行 x.date.add(\'2000-01-01\',\'day\',-60).toString(\'yyyy-MM-dd HH:mm:ss\'). 结果:[' + x.date.add('2000-01-01', 'day', -60).toString('yyyy-MM-dd HH:mm:ss') + '].</li>';
        outString += '<li>运行 x.date.add(\'2000-01-01\',\'hour\',60).toString(\'yyyy-MM-dd HH:mm:ss\'). 结果:[' + x.date.add('2000-01-01', 'hour', 60).toString('yyyy-MM-dd HH:mm:ss') + '].</li>';
        outString += '<li>运行 x.date.add(\'2000-01-01\',\'hour\',-60).toString(\'yyyy-MM-dd HH:mm:ss\'). 结果:[' + x.date.add('2000-01-01', 'hour', -60).toString('yyyy-MM-dd HH:mm:ss') + '].</li>';
        outString += '<li>运行 x.date.add(\'2000-01-01\',\'minute\',5).toString(\'yyyy-MM-dd HH:mm:ss\'). 结果:[' + x.date.add('2000-01-01', 'minute', 5).toString('yyyy-MM-dd HH:mm:ss') + '].</li>';
        outString += '<li>运行 x.date.add(\'2013-01-18 10:53:54\',\'minute\',5).toString(\'yyyy-MM-dd HH:mm:ss\'). 结果:[' + x.date.add('2013-01-18 10:53:54', 'minute', 5).toString('yyyy-MM-dd HH:mm:ss') + '].</li>';
        outString += '<li>运行 x.date.add(\'2013-01-18 10:53:54\',\'minute\',-5).toString(\'yyyy-MM-dd HH:mm:ss\'). 结果:[' + x.date.add('2013-01-18 10:53:54', 'minute', -5).toString('yyyy-MM-dd HH:mm:ss') + '].</li>';

        outString += '<li>一年中的第几周</li>';
        outString += '<li>运行 x.date.create(new Date()).getWeekOfYear(). 结果:[' + x.date.create(new Date()).getWeekOfYear() + '].</li>';
        outString += '<li>运行 x.date.create(\'2000-01-01\').getDayOfYear(). 结果:[' + x.date.create('2000-01-01').getDayOfYear() + '].</li>';
        outString += '<li>运行 x.date.create(\'2000-01-01\').getWeekOfYear(). 结果:[' + x.date.create('2000-01-01').getWeekOfYear() + '].</li>';
        outString += '<li>运行 x.date.create(\'2000-01-02\').getWeekOfYear(). 结果:[' + x.date.create('2000-01-02').getWeekOfYear() + '].</li>';
        outString += '<li>运行 x.date.create(\'2000-01-03\').getWeekOfYear(). 结果:[' + x.date.create('2000-01-03').getWeekOfYear() + '].</li>';
        outString += '<li>运行 x.date.create(\'2000-01-04\').getWeekOfYear(). 结果:[' + x.date.create('2000-01-04').getWeekOfYear() + '].</li>';
        outString += '<li>运行 x.date.create(\'2000-01-05\').getWeekOfYear(). 结果:[' + x.date.create('2000-01-05').getWeekOfYear() + '].</li>';
        outString += '<li>运行 x.date.create(\'2000-01-06\').getWeekOfYear(). 结果:[' + x.date.create('2000-01-06').getWeekOfYear() + '].</li>';
        outString += '<li>运行 x.date.create(\'2000-01-07\').getWeekOfYear(). 结果:[' + x.date.create('2000-01-07').getWeekOfYear() + '].</li>';
        outString += '<li>运行 x.date.create(\'2000-02-01\').getDayOfYear(). 结果:[' + x.date.create('2000-02-01').getDayOfYear() + '].</li>';
        outString += '<li>运行 x.date.create(\'2000-02-01\').getWeekOfYear(). 结果:[' + x.date.create('2000-02-01').getWeekOfYear() + '].</li>';
        outString += '<li>运行 x.date.create(\'2000-12-31\').getDayOfYear(). 结果:[' + x.date.create('2000-12-31').getDayOfYear() + '].</li>';
        outString += '<li>运行 x.date.create(\'2000-12-31\').getWeekOfYear(). 结果:[' + x.date.create('2000-12-31').getWeekOfYear() + '].</li>';

        outString += '<li>本月最大的天数</li>';
        outString += '<li>运行 x.date.create(new Date()).getMaxDayOfMonth(). 结果:[' + x.date.create(new Date()).getMaxDayOfMonth() + '].</li>';
        outString += '<li>运行 x.date.create(\'1900-02-01\').getMaxDayOfMonth(). 结果:[' + x.date.create('1900-02-01').getMaxDayOfMonth() + '].</li>';
        outString += '<li>运行 x.date.create(\'2000-02-01\').getMaxDayOfMonth(). 结果:[' + x.date.create('2000-02-01').getMaxDayOfMonth() + '].</li>';
        outString += '<li>运行 x.date.create(\'2002-02-01\').getMaxDayOfMonth(). 结果:[' + x.date.create('2002-02-01').getMaxDayOfMonth() + '].</li>';
        outString += '<li>运行 x.date.create(\'2004-02-01\').getMaxDayOfMonth(). 结果:[' + x.date.create('2004-02-01').getMaxDayOfMonth() + '].</li>';
        outString += '<li>运行 x.date.create(\'2006-02-01\').getMaxDayOfMonth(). 结果:[' + x.date.create('2006-02-01').getMaxDayOfMonth() + '].</li>';
        outString += '<li>运行 x.date.create(\'2008-02-01\').getMaxDayOfMonth(). 结果:[' + x.date.create('2008-02-01').getMaxDayOfMonth() + '].</li>';
        outString += '<li>运行 x.date.create(\'2010-02-01\').getMaxDayOfMonth(). 结果:[' + x.date.create('2010-02-01').getMaxDayOfMonth() + '].</li>';
        outString += '<li>闰年判断</li>';
        outString += '<li>运行 x.date.create(new Date()).isLeapYear(). 结果:[' + x.date.create(new Date()).isLeapYear() + '].</li>';
        outString += '<li>运行 x.date.create(\'1900\').isLeapYear(). 结果:[' + x.date.create('1900').isLeapYear() + '].</li>';
        outString += '<li>运行 x.date.create(\'2000\').isLeapYear(). 结果:[' + x.date.create('2000').isLeapYear() + '].</li>';
        outString += '<li>运行 x.date.create(\'2002\').isLeapYear(). 结果:[' + x.date.create('2002').isLeapYear() + '].</li>';
        outString += '<li>运行 x.date.create(\'2004\').isLeapYear(). 结果:[' + x.date.create('2004').isLeapYear() + '].</li>';
        outString += '<li>运行 x.date.create(\'2006\').isLeapYear(). 结果:[' + x.date.create('2006').isLeapYear() + '].</li>';
        outString += '<li>运行 x.date.create(\'2008\').isLeapYear(). 结果:[' + x.date.create('2008').isLeapYear() + '].</li>';
        outString += '<li>运行 x.date.create(\'2010\').isLeapYear(). 结果:[' + x.date.create('2010').isLeapYear() + '].</li>';
        outString += '<li>格式化</li>';
        outString += '<li>运行 x.date.create(new Date()).toString(\'yyyy\MM\dd\'). 结果:[' + x.date.create(new Date()).toString('yyyy\MM\dd') + '].</li>';
        outString += '<li>运行 x.date.create(new Date()).toString(\'yy\MM\dd\'). 结果:[' + x.date.create(new Date()).toString('yy\MM\dd') + '].</li>';
        outString += '<li>运行 x.date.create(new Date()).toString(\'yy-MM-dd HH:mm:ss\'). 结果:[' + x.date.create(new Date()).toString('yy-MM-dd HH:mm:ss') + '].</li>';

        outString += '<li>测试 x.date 模块结束.</li>';

        outString += '</ul>';

        $('div#windowContainer').html(outString);
    });
});