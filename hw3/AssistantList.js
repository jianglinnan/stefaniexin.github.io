function rendertable1(courseListMap,courseType){
	$("#listCourseBox").empty();
	$(".teacher").hide();
	$(".student").hide();
	if(courseType!=1){
		$(".student").show();
	}else{
		$(".teacher").show();
	}
	var courseList = courseListMap[RESULTLIST];
	$.each(courseList, function(i, n) {
		var row;
		if(currentModule == 'gridModule'){
			row = $("#courseList .template").clone().removeClass("template hidden");
			row.find('.course-num').text(i+1);
			row.find('.courseImg').attr("src",baseUrl+'/b/mycourse/courseExtension/downloadFile/'+n.course_id+'/thumbnail');
			row.find('.dwmc').text(n.codeDepartmentInfo.dwmc);
			row.find('.courseName').text(n.course_name+'（'+courseList[i].course_seq+'）');
		}else{
			row = $("#file_list .template").clone().removeClass("template hidden");	
			row.find('.courseNameList').text(n.course_name+'（'+courseList[i].course_seq+'）');
		}
		if(courseType!=1){
			_getNewFileHint(courseList[i].course_id);//新文件提醒
			_getNewNoticeHint(courseList[i].course_id);//新公告提醒
			_getweijiaohomeWorkHint(courseList[i].course_id);//未交作业提醒
			row.find('.courseNameList').attr("href","/f/student/coursehome/"+courseList[i].course_id);
			row.find('.courseHref').attr("href","/f/student/coursehome/"+courseList[i].course_id);
			row.find('.newFile').text(newFileNum).attr('href',"/f/student/courseware/"+courseList[i].course_id);
			row.find('.newNotice').text(newNoticeNum).attr('href',"/f/student/courseinfo/"+courseList[i].course_id);
			row.find('.unhandHw').text(weijiaohomeWorkNum).attr('href',"/f/student/homework/"+courseList[i].course_id);
		}else{
			_getNoReviewHw(courseList[i].course_id);
			row.find('.courseNameList').attr("href","/f/teacher/coursehome/"+courseList[i].course_id);
			row.find('.courseHref').attr("href","/f/teacher/coursehome/"+courseList[i].course_id);
			row.find('.no_Review').text(noReviewHw).attr("href","/f/teacher/homework/"+courseList[i].course_id);
			row.find('.tBrowseNum').text(n.tBrowseNum);
			row.find('.sBrowseNum').text(n.sBrowseNum);
		}
		row.appendTo("#listCourseBox");
		//$('#listCourseBox').fadeIn("slow");
	});
} 




a = document.getElementsByClassName("other");
a[0].onclick = function(){
	$("#listCourseBox").empty();
	$("#message").text("");
	$('.self').removeClass("active");
	$('.other').addClass("active");
	currentCourse = 1;
	//$("div.course-list-wrap").fadeIn("slow");
	$('div.course-list-wrap:first').hide();
	$('#courseList-loading').show();
	//$('#courseList-loading').fadeIn("slow");
	courseListMap = {"message":"success","resultList":[{"course_id":"2013-2014-3-44100343-0","course_no":"44100343","course_seq":"0","course_name":"Web前端技术实训课程","teacherInfo":{"id":"1988990077","name":"刘强","email":"liuqiang@mail.tsinghua.edu.cn","phone":"010-62795395","address":null,"zipCode":null,"gender":"女","position":null,"title":"副教授","status":"在职","note":"1980-1985          清华大学计算机系计算机科学与技术专业本科\r\n1985-1988          清华大学计算机系计算机应用专业研究生\r\n1988-1994          清华大学电子工程系讲师\r\n1995-2001          清华大学计算机系副教授\r\n2001-现在          清华大学软件学院副教授\r\n\r\n在软件需求工程、分布式开发、项目管理等方面从事教学和研究工作，参加过多项国家攻关任务和863项目，负责研制了具有我国自主知识产权的计算机辅助绘图与设计系统，曾获得国家科技进步二等奖（排名第5）。在开发大型软件产品方面积累了丰富的经验，在国际会议和国内外期刊上发表论文40余篇。担任计算机学会软件工程专业委员会委员，教育部软件工程专业教学指导分委员会秘书长。\r\n承担本科生《软件工程》课程和研究生《软件项目管理》课程的教学工作，其中《软件工程》被评为2007年清华大学精品课程和国家精品课程，编写教材“软件工程——理论、方法与实践”，由高等教育出版社出版。负责并承担了教育部“软件工程课程体系研究”项目，所编写的《中国软件工程学科教程》由清华大学出版社出版。2005年，参加教育部和高等教育出版社的软件工程专业规范制定工作，该规范已由高等教育出版社出版，目前正在组织新一版软件工程专业规范的修订工作。","departmentId":"410"},"codeDepartmentInfo":{"dwnm":"410","dwmc":"软件学院","dwjc":"软件学院"},"semesterInfo":{"id":"2013-2014-3","semesterName":"2013-2014-夏季学期","startDate":"2014-06-30","endDate":"2014-09-21"},"detail_c":"本课程由百度企业有经验的前端开发工程师主讲，结合当前流行的Web前端技术以及企业产品开发实践，针对目前Web前端富交互领域和Web前端展现领域的研究热点和关键技术，课程从多个方面对Web前端技术和架构进行讲解和分析，主要内容包括web交互技术发展趋势、浏览器渲染技术、CSS样式之美，HTML5&CSS3技术，JS关键技术、JS架构设计以及地图API开发等，使学生掌握Web前端技术以及前端工程性的开发方法。","detail_e":null,"credit":3,"course_time":48,"exam_type":null,"course_type":"本科专业课","teaching_type":null,"ref_book_c":null,"ref_book_e":null,"text_book":null,"courseoverview":"1988990077_2013-2014-3-44100343-0_INFO_1403896113","teachingoutline":null,"teachingteam":null,"teachingcalendar":null,"thumbnail":null,"tBrowseNum":627,"sBrowseNum":3191,"courseSource":"0","examinationCritique":null,"teacherName":"刘强"}]}
	//courseList.rendertable(courseListMap,currentCourse);
	var d=rendertable1(courseListMap,currentCourse);
	$('#courseList-loading').hide();
	//$('div.course-list-wrap:first').slideDown("slow");
	$($('div.course-list-wrap')[0]).slideDown("slow");
}