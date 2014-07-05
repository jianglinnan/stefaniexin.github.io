
/*author:ZhaoXinyi
  Date:2014-7-4
 */


function forecast(na,re){
	var national_c = new Array();
	var round1 = new Array();
	var round2 = new Array();
	var round3 = new Array();
	var round4 = new Array();
	var num;

	switch(re)
	{
	case 'A1': num = 0;break;
	case 'B2': num = 1;break;
	case 'C1': num = 2;break;
	case 'D2': num = 3;break;
	case 'E1': num = 4;break;
	case 'F2': num = 5;break;
	case 'G1': num = 6;break;
	case 'H2': num = 7;break;
	case 'B1': num = 8;break;
	case 'A2': num = 9;break;
	case 'D1': num = 10;break;
	case 'C2': num = 11;break;
	case 'F1': num = 12;break;
	case 'E2': num = 13;break;
	case 'H1': num = 14;break;
	case 'G2': num = 15;break;
	default:
	break;
	}

	var sum = 0;

	if(num % 2 == 0){
		num = num/2;
	}
	else{
		num = Math.floor(num/2)+8;
	}

	/*计算胜率函数*/
	function calculate_win(num1, num2){
	if(num1 == 0 && num2 == 0)
		return 0.5;
	else 
		return num1 / (num2 + num1);
	}

	/*将数据变换顺序，便于运算*/
	(function change(a, ac){
		for(var i = 0; i < 16; i++){
			if(i % 2 == 0){
				ac[i/2] = a[i];
			}
			else{
				ac[Math.floor(i/2)+8] = a[i];
			}

		}
	})(na,national_c);


	/*计算第一轮胜率*/
	(function calculate_round1(r1){
		for(var i = 0; i < 16; i++){
			if(i % 2 == 0) r1[i] = calculate_win(national_c[i],national_c[i+1]);
			else r1[i] = calculate_win(national_c[i],national_c[i-1]);
		}
	})(round1);

	/*计算第2轮胜率*/
	(function calculate_round2(r2){
		for(var i = 0; i < 16; i++){
			if(i % 4 < 2){
				r2[i] = round1[i] * (round1[Math.floor(i/4)*4+2]*
					calculate_win(national_c[i],national_c[Math.floor(i/4)*4+2])+
					round1[Math.floor(i/4)*4+3]*
					calculate_win(national_c[i],national_c[Math.floor(i/4)*4+3]));
			}
			else{
				r2[i] = round1[i] * (round1[Math.floor(i/4)*4]*
					calculate_win(national_c[i],national_c[Math.floor(i/4)*4])+
					round1[Math.floor(i/4)*4+1]*
					calculate_win(national_c[i],national_c[Math.floor(i/4)*4+1]));
			}
		}
	})(round2);

	/*计算第3轮胜率*/
	(function calculate_round3(r3){
		for(var i = 0; i < 16; i++){
			if(i % 8 < 4){
				r3[i] = round2[i] * (round2[Math.floor(i/8)*8+4]*
					calculate_win(national_c[i],national_c[Math.floor(i/8)*8+4])+
					round2[Math.floor(i/8)*8+5]*
					calculate_win(national_c[i],national_c[Math.floor(i/8)*8+5])+
					round2[Math.floor(i/8)*8+6]*
					calculate_win(national_c[i],national_c[Math.floor(i/8)*8+6])+
					round2[Math.floor(i/8)*8+7]*
					calculate_win(national_c[i],national_c[Math.floor(i/8)*8+7]));
			}
			else{
				r3[i] = round2[i] * (round2[Math.floor(i/8)*8]*
					calculate_win(national_c[i],national_c[Math.floor(i/8)*8])+
					round2[Math.floor(i/8)*8+1]*
					calculate_win(national_c[i],national_c[Math.floor(i/8)*8+1])+
					round2[Math.floor(i/8)*8+2]*
					calculate_win(national_c[i],national_c[Math.floor(i/8)*8+2])+
					round2[Math.floor(i/8)*8+3]*
					calculate_win(national_c[i],national_c[Math.floor(i/8)*8+3]));
			}
		}
	})(round3);

	/*计算第4轮胜率*/
	(function calculate_round4(r4){
		for(var i = 0; i < 16; i++){
			if(i % 16 < 8){
				r4[i] = round3[i] * (round3[Math.floor(i/16)*16+8]*
					calculate_win(national_c[i],national_c[Math.floor(i/16)*16+8])+
					round3[Math.floor(i/16)*16+9]*
					calculate_win(national_c[i],national_c[Math.floor(i/16)*16+9])+
					round3[Math.floor(i/16)*16+10]*
					calculate_win(national_c[i],national_c[Math.floor(i/16)*16+10])+
					round3[Math.floor(i/16)*16+11]*
					calculate_win(national_c[i],national_c[Math.floor(i/16)*16+11])+
					round3[Math.floor(i/16)*16+12]*
					calculate_win(national_c[i],national_c[Math.floor(i/16)*16+12])+
					round3[Math.floor(i/16)*16+13]*
					calculate_win(national_c[i],national_c[Math.floor(i/16)*16+13])+
					round3[Math.floor(i/16)*16+14]*
					calculate_win(national_c[i],national_c[Math.floor(i/16)*16+14])+
					round3[Math.floor(i/16)*16+15]*
					calculate_win(national_c[i],national_c[Math.floor(i/16)*16+15]));
			}
			else{
				r4[i] = round3[i] * (round3[Math.floor(i/16)*16]*
					calculate_win(national_c[i],national_c[Math.floor(i/16)*16])+
					round3[Math.floor(i/16)*16+1]*
					calculate_win(national_c[i],national_c[Math.floor(i/16)*16+1])+
					round3[Math.floor(i/16)*16+2]*
					calculate_win(national_c[i],national_c[Math.floor(i/16)*16+2])+
					round3[Math.floor(i/16)*16+3]*
					calculate_win(national_c[i],national_c[Math.floor(i/16)*16+3])+
					round3[Math.floor(i/16)*16+4]*
					calculate_win(national_c[i],national_c[Math.floor(i/16)*16+4])+
					round3[Math.floor(i/16)*16+5]*
					calculate_win(national_c[i],national_c[Math.floor(i/16)*16+5])+
					round3[Math.floor(i/16)*16+6]*
					calculate_win(national_c[i],national_c[Math.floor(i/16)*16+6])+
					round3[Math.floor(i/16)*16+7]*
					calculate_win(national_c[i],national_c[Math.floor(i/16)*16+7]));
			}	
		}
	})(round4);
	console.info(round4);
	/*检查概率和*/
	for(var i = 0; i < 16;i++){
		sum = sum + round4[i];
	}
	console.info(sum);
	return round4[num];
}

/**************测试函数****************/
/*运用第一组一样的数据测试，结果正确，第二组不同的数据测试结果正确，
计算16支队伍获胜概率和接近1（在forecast函数中）正确，将所有16支队伍胜率输出正确*/

var national = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
//var national = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
var result = 'A1';
//var result = 'H1';

var test = forecast(national,result);
console.info(test);



