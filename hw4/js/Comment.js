var xmlHttp;

function getSecondData(){
    localStorage.page = 2;
	startRequest2();
}

function processData2(data){
    var head = $('.headimg img');
    var name = $('.headtext a');
    var comment = $('.m-text p');
    for(var i=0;i < 5;i++){
        $(head[i]).attr('src',data.comments1[i]['head']);
        $(name[i]).html(data.comments1[i]['name']);
        $(comment[i]).html(data.comments1[i]['comments']);
    }
}

function createXMLHttpRequest2(){
    if(window.ActiveXObject)
    {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if(window.XMLHttpRequest)
    {
        xmlHttp = new XMLHttpRequest();
    }
}
function startRequest2(){
    createXMLHttpRequest2();
    try
    {
        xmlHttp.onreadystatechange = handleStateChange2;
        xmlHttp.open("GET", "comments.json", false);
        xmlHttp.send(null);
    }
    catch(exception)
    {
        alert("xmlHttp Fail");
    }
}
function handleStateChange2(){   
    if(xmlHttp.readyState == 4)
    {       
        if (xmlHttp.status == 200)
        {
            var result = xmlHttp.responseText;
            json = eval("(" + result + ")");
            processData2(json);
        }
    }
}



function getFirstData(){
    localStorage.page=1;
	startRequest1();
}

function processData1(data){
    var head = $('.headimg img');
    var name = $('.headtext a');
    var comment = $('.m-text p');
    for(var i=0;i < 5;i++){
        $(head[i]).attr('src',data.comments0[i]['head']);
        $(name[i]).html(data.comments0[i]['name']);
        $(comment[i]).html(data.comments0[i]['comments']);
    }
}

function createXMLHttpRequest1(){
    if(window.ActiveXObject)
    {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if(window.XMLHttpRequest)
    {
        xmlHttp = new XMLHttpRequest();
    }
}
function startRequest1(){
    createXMLHttpRequest1();
    try
    {
        xmlHttp.onreadystatechange = handleStateChange1;
        xmlHttp.open("GET", "comments.json", false);
        xmlHttp.send(null);
    }
    catch(exception)
    {
        alert("xmlHttp Fail");
    }
}
function handleStateChange1(){   
    if(xmlHttp.readyState == 4)
    {       
        if (xmlHttp.status == 200)
        {
            var result = xmlHttp.responseText;
            json = eval("(" + result + ")");
            processData1(json);
        }
    }
}

