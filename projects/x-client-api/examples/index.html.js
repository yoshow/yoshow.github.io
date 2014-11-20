$(document).ready(function()
{
    // 设置菜单数据
    var menudata = [

    { "id": "2", "text": "常用函数", "value": "", "showcheck": false, "isexpand": false, "checkstate": 0, "hasChildren": true, "complete": true, "classes": null, "data": null, "ChildNodes": [
        { "id": "2.1", "text": "工具函数", "value": "x.util.html", "showcheck": false, "isexpand": false, "checkstate": 0, "hasChildren": false, "complete": true, "classes": null, "data": null, "ChildNodes": [] },
        { "id": "2.2", "text": "Date 函数", "value": "x.date.html", "showcheck": false, "isexpand": false, "checkstate": 0, "hasChildren": false, "complete": true, "classes": null, "data": null, "ChildNodes": [] },
        { "id": "2.3", "text": "Cookies 函数", "value": "x.cookies.html", "showcheck": false, "isexpand": false, "checkstate": 0, "hasChildren": false, "complete": true, "classes": null, "data": null, "ChildNodes": [] },
        { "id": "2.4", "text": "Css 函数", "value": "x.css.html", "showcheck": false, "isexpand": false, "checkstate": 0, "hasChildren": false, "complete": true, "classes": null, "data": null, "ChildNodes": [] },
        { "id": "2.5", "text": "Page 函数", "value": "x.page.html", "showcheck": false, "isexpand": false, "checkstate": 0, "hasChildren": false, "complete": true, "classes": null, "data": null, "ChildNodes": [] },
        { "id": "2.1", "text": "Drag 函数", "value": "x.drag.html", "showcheck": false, "isexpand": false, "checkstate": 0, "hasChildren": false, "complete": true, "classes": null, "data": null, "ChildNodes": []}]
    },
    
     { "id": "1", "text": "常用组件", "value": "", "showcheck": false, "isexpand": true, "checkstate": 0, "hasChildren": true, "complete": true, "classes": null, "data": null, "ChildNodes": [
        { "id": "1.4", "text": "表单", "value": "x.form.html", "showcheck": false, "isexpand": false, "checkstate": 0, "hasChildren": false, "complete": true, "classes": null, "data": null, "ChildNodes": [] },
        { "id": "1.1", "text": "日历", "value": "x.calendar.html", "showcheck": false, "isexpand": false, "checkstate": 0, "hasChildren": false, "complete": true, "classes": null, "data": null, "ChildNodes": [] },
        { "id": "1.2", "text": "组合框", "value": "x.combobox.html", "showcheck": false, "isexpand": false, "checkstate": 0, "hasChildren": false, "complete": true, "classes": null, "data": null, "ChildNodes": [] },
        { "id": "1.9", "text": "普通菜单", "value": "x.menu.html", "showcheck": false, "isexpand": false, "checkstate": 0, "hasChildren": false, "complete": true, "classes": null, "data": null, "ChildNodes": [] },
        { "id": "1.3", "text": "上下文菜单", "value": "x.contextMenu.html", "showcheck": false, "isexpand": false, "checkstate": 0, "hasChildren": false, "complete": true, "classes": null, "data": null, "ChildNodes": [] },
        { "id": "1.3", "text": "工具提示", "value": "x.tooltip.html", "showcheck": false, "isexpand": false, "checkstate": 0, "hasChildren": false, "complete": true, "classes": null, "data": null, "ChildNodes": [] },
        { "id": "1.5", "text": "树形", "value": "x.tree.html", "showcheck": false, "isexpand": false, "checkstate": 0, "hasChildren": false, "complete": true, "classes": null, "data": null, "ChildNodes": [] },
        { "id": "1.6", "text": "网格", "value": "x.grid.html", "showcheck": false, "isexpand": false, "checkstate": 0, "hasChildren": false, "complete": true, "classes": null, "data": null, "ChildNodes": [] },
        { "id": "1.7", "text": "页签", "value": "x.tabs.html", "showcheck": false, "isexpand": false, "checkstate": 0, "hasChildren": false, "complete": true, "classes": null, "data": null, "ChildNodes": [] },
        { "id": "1.8", "text": "甘特图", "value": "x.gantt.html", "showcheck": false, "isexpand": false, "checkstate": 0, "hasChildren": false, "complete": true, "classes": null, "data": null, "ChildNodes": []}]
    },
    { "id": "3", "text": "对话向导", "value": "", "showcheck": false, "isexpand": false, "checkstate": 0, "hasChildren": true, "complete": true, "classes": null, "data": null, "ChildNodes": [
        { "id": "3.1", "text": "我的项目", "value": "http://xgcalendar.cloudapp.net/", "showcheck": false, "isexpand": false, "checkstate": 0, "hasChildren": false, "complete": true, "classes": null, "data": null, "ChildNodes": [] },
        { "id": "3.2", "text": "项目管理", "value": "/Home/Index2", "showcheck": false, "isexpand": false, "checkstate": 0, "hasChildren": false, "complete": true, "classes": null, "data": null, "ChildNodes": [] },
        { "id": "3.3", "text": "项目周报", "value": "/MeetRoomUseage/MeetRoomUseageList", "showcheck": false, "isexpand": false, "checkstate": 0, "hasChildren": false, "complete": true, "classes": null, "data": null, "ChildNodes": [] },
        { "id": "3.4", "text": "人员周报", "value": "/MeetRoomUseage/MeetRoomUseageList", "showcheck": false, "isexpand": false, "checkstate": 0, "hasChildren": false, "complete": true, "classes": null, "data": null, "ChildNodes": []}]
    },
    { "id": "4", "text": "系统管理", "value": "", "showcheck": false, "isexpand": false, "checkstate": 0, "hasChildren": true, "complete": true, "classes": null, "data": null, "ChildNodes": [
        { "id": "4.1", "text": "人员管理", "value": "/System/UserList", "showcheck": false, "isexpand": false, "checkstate": 0, "hasChildren": false, "complete": true, "classes": null, "data": null, "ChildNodes": [] },
        { "id": "4.2", "text": "参数管理", "value": "/SysManage/PrintTemplateList", "showcheck": false, "isexpand": false, "checkstate": 0, "hasChildren": false, "complete": true, "classes": null, "data": null, "ChildNodes": [] },
        { "id": "4.3", "text": "关于我们", "value": "/Home/About", "showcheck": false, "isexpand": false, "checkstate": 0, "hasChildren": false, "complete": true, "classes": null, "data": null, "ChildNodes": []}]
    }];

    var ieVersion = getIEVersion();

    // 获得IE版本
    function getIEVersion()
    {
        var userAgent = window.navigator.userAgent.toLowerCase();

        x.browser.msie9 = x.browser.ie && /msie 9\.0/i.test(userAgent);

        x.browser.msie8 = x.browser.ie && /msie 8\.0/i.test(userAgent);

        x.browser.msie7 = x.browser.ie && /msie 7\.0/i.test(userAgent);

        x.browser.msie6 = !x.browser.ie9 && !x.browser.msie8 && !x.browser.msie7 && x.browser.msie && /msie 6\.0/i.test(userAgent);

        var version;

        if (x.browser.msie9)
        {
            version = 9;
        }
        else if (x.browser.msie8)
        {
            version = 8;
        }
        else if (x.browser.msie7)
        {
            version = 7;
        }
        else if (x.browser.msie6)
        {
            version = 6;
        }
        else
        {
            version = -1;
        }

        return version;
    }

    if (ieVersion > 0)
    {
        $(document.body).addClass("ie ie" + ieVersion);
    }

    // 设置窗口大小
    var mainh = document.documentElement.clientHeight;
    var mainw = document.documentElement.clientWidth;

    var panelheader = $("#panel-header").outerHeight();
    var header = 38;
    var bottom = 30;

    // 设置窗口大小
    $("#treeViewPanel").treeview({ data: menudata, onnodeclick: navi });

    var tabo = {};

    tabo.items = [{ id: "home", text: "主页", classes: "icon_home", isactive: true, content: "<div style='padding:10px;'>欢迎光临!</div>"}];
    tabo.width = mainw - 180;
    tabo.height = mainh - header - bottom;

    $("#tab-container").tabpanel(tabo);

    function navi(item)
    {
        if (item.value)
        {
            $("#tab-container").opentabitem({ id: idreplace(item.id), text: item.text, url: item.value, isactive: true, closeable: true }, true);
        }
        else
        {
            item.expand();
        }
    }

    function idreplace(id)
    {
        return id.replace(/[^a-zA-Z\d_]/ig, "_")
    }

    // 设置面板大小
    setpanelsize(ieVersion);

    function setpanelsize(ieVersion)
    {
        mainh = document.documentElement.clientHeight;
        mainw = document.documentElement.clientWidth;

        var height = mainh - header - panelheader - bottom + 3;
        var width = mainw - 180;

        if (ieVersion > 0)
        {
            height = height - 1;
        }

        $("#panel-wrap").height(height);
        $("#tab-container").width(width);
    }

    // 调整大小
    $(window).resize(function window_resize()
    {
        setpanelsize();
        $("#tab-container").resizetabpanel(mainw - 180, mainh - header - bottom);
    });
});