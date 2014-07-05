


/*author:ZhaoXinyi
  Date:2014-7-4
 */

function search(information,num){
	var argumLen = arguments[0].length;
	var finalInfo = new Array();
	var info = arguments[0];
	var j = 0;
	var k = 0;

	if(typeof arguments[1] == 'number'){ //如果第二个参数为数字，查找所有年龄相同的同学
		for(var i = 0; i < argumLen; i++){
			if(info[i].age == arguments[1]){
				finalInfo[j] = {};
				finalInfo[j].name = info[i].name;
				finalInfo[j].age = info[i].age;
				finalInfo[j++].hometown = info[i].hometown;
			}
			else continue;
		}
		if(finalInfo.length == 0) return false;
		else return finalInfo;
	}

	else if(typeof arguments[1] == 'string'){ //如果第二个参数为字符串，查找第一个同名同学
		for(var i = 0; i < argumLen; i++){
			if(info[i].name == arguments[1]){
				finalInfo[j] = {};
				finalInfo[j].name = info[i].name;
				finalInfo[j].age = info[i].age;
				finalInfo[j++].hometown = info[i].hometown;
				break;
			}
		}
		if(finalInfo.length == 0) 
			return false;
		else 
			return finalInfo;
	}

	else if(typeof arguments[1] == 'object'){
		for(var i = 0; i < argumLen; i++){
			if((typeof arguments[1].name == 'undefined'||arguments[1].name == info[i].name)&&
				(typeof arguments[1].age == 'undefined'||arguments[1].age == info[i].age)&&
				(typeof arguments[1].hometown == 'undefined'||arguments[1].hometown == info[i].hometown)){
				finalInfo[k] = {};
				finalInfo[k].name = info[i].name;
				finalInfo[k].age = info[i].age;
				finalInfo[k++].hometown = info[i].hometown;
			}
			else continue;
		}
		if(finalInfo.length == 0) return false;
		else return finalInfo;
	}
}

//***************************以下为测试代码************************
var infomation = new Array();
infomation[0] = {name:"Amy",age:21,hometown:'Beijing'};
infomation[1] = {name:"Stefanie",age:20,hometown:"Beijing"};
infomation[2] = {name:"Ste",age:19,hometown:"DB"};
infomation[3] = {name:"Ste2",age:19,hometown:"DB2"};
infomation[4] = {name:"Stefanie",age:10,hometown:"NB"};
infomation[5] = {name:"Amy",age:10,hometown:"NB"};


//var checkinfo = 'Stefanie';//姓名找得到，且测试只返回第一个
//var checkinfo = 'stefanie';//姓名找不到
//var checkinfo = 18;//年龄找不到
//var checkinfo = 19;//年龄找得到，且不止一个
//var checkinfo = {hometown:'Beijing'};//综合找得到，且不止一个
var checkinfo = {age:10,hometown:'NB'};//综合的到，且不止一个，有两个参数
//var checkinfo = {age:20,hometown:'NB'};//综合找不到

var test = search(infomation,checkinfo);
if(!test){
	test = !!test;
	console.info(test);
}
else{
	for(var i in d){
		console.info(d[i]);
	}
}
/**/