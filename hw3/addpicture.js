var website;
website = new Array();
website[0]='http://image.zcool.com.cn/g/19/9/b_1243703356706.jpg';
website[1] = 'http://h.hiphotos.baidu.com/image/pic/item/7a899e510fb30f245d631fbfca95d143ac4b0394.jpg';
website[2]='http://pic30.nipic.com/20130623/12484269_110307434000_2.jpg';
website[3] = 'http://shopimg.kongfz.com.cn/20130816/1947283/1947283fYAFA0_n.jpg';
website[4] = 'http://zj.sinaimg.cn/2012/0927/S72753T1348727491484.jpg';
website[5] = 'http://www.zuojing.com/upload/2014/0606/1402024736352.jpg';

img = $('img.courseImg');
for(var i = 1; i < img.length;i++){
	img[i].src = website[i%6];
}