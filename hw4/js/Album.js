var xmlHttp;

function getNextAlbum(){
    startRequestA2();
}

function processDataA2(data){
    var newsList = $('a');
    for(var i in newsList){
        $(newsList[i]).attr('title',data.newsInfo[i]['title']);
        $(newsList[i]).attr('rel',data.newsInfo[i]['pictureLink']);
        $(newsList[i]).attr('href',data.newsInfo[i]['newsLink']);
    }
    /* ---- create images ---- */
        var img   = getElementsByClass(this.oc, 'div', 'bank').getElementsByTagName('a');
        this.NF = img.length;
        for (var i = 0, o; o = img[i]; i++) {
            this.diapos[i] = new Diapo(this, i,
                                        o.rel,
                                        o.title || '- ' + i + ' -',
                                        o.innerHTML || o.rel,
                                        o.href || '',
                                        o.target || '_self'
            );
        }
}

function createXMLHttpRequestA2(){
    if(window.ActiveXObject)
    {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if(window.XMLHttpRequest)
    {
        xmlHttp = new XMLHttpRequest();
    }
}
function startRequestA2(){
    createXMLHttpRequestA2();
    try
    {
        xmlHttp.onreadystatechange = handleStateChangeA2;
        xmlHttp.open("GET", "nextNews.json", false);
        xmlHttp.send(null);
    }
    catch(exception)
    {
        alert("xmlHttp Fail");
    }
}
function handleStateChangeA2(){   
    if(xmlHttp.readyState == 4)
    {       
        if (xmlHttp.status == 200)
        {
            var result = xmlHttp.responseText;
            json = eval("(" + result + ")");
            processDataA2(json);
        }
    }
}