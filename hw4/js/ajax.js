var xmlHttp;

function processData(data){
    var newsList = $('a');
    for(var i in newsList){
        $(newsList[i]).attr('title',data.newsInfo[i]['title']);
        $(newsList[i]).attr('rel',data.newsInfo[i]['pictureLink']);
        $(newsList[i]).attr('href',data.newsInfo[i]['newsLink']);
    }
}

function createXMLHttpRequest(){
    if(window.ActiveXObject)
    {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if(window.XMLHttpRequest)
    {
        xmlHttp = new XMLHttpRequest();
    }
}
function startRequest(){
    createXMLHttpRequest();
    try
    {
        xmlHttp.onreadystatechange = handleStateChange;
        xmlHttp.open("GET", "news.json", false);
        xmlHttp.send(null);
    }
    catch(exception)
    {
        alert("xmlHttp Fail");
    }
}
function handleStateChange(){   
    if(xmlHttp.readyState == 4)
    {       
        if (xmlHttp.status == 200)
        {
            var result = xmlHttp.responseText;
            json = eval("(" + result + ")");
            processData(json);
        }
    }
}


$(document).ready(function(){
    startRequest();
});