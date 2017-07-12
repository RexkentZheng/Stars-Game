//排名函数
		function total_num1 (a,b) {
			return b.total-a.total;
		}
		function attack_num(a,b){
       		return a.get-b.get;
    	}
		function be_attack_num(a,b){  
       		return a.lost-b.lost;
    	}
		var notice_array = [];
//第二个接口
		$.getJSON("test_true.json",function  (people2) {
			
//				for (z2=0;z2<people2.real.length;z2++) {
//					var start_position = document.getElementById(people2.real[z2].team_id);
//					var start_left = start_position.getBoundingClientRect().left;
//					var start_top = start_position.getBoundingClientRect().top;
//					
//					var end_position = document.getElementById(people2.real[z2].obj_team_id);
//					console.log(people2.real[z2].obj_team_id);
//					var end_left_a = end_position.getBoundingClientRect().left;
//					var end_left = end_left_a + 100;
//					var end_top_a = end_position.getBoundingClientRect().top;
//					var end_top = end_top_a +　100;
//
//							var arrow = document.createElement('div');
//								arrow.style.left = start_left+110+"px";
//								arrow.style.top = start_top+110+"px";
//								arrow.id = "attack";
//								arrow.className = "attack";
//								document.getElementsByTagName("body").item(0).appendChild(arrow);
//								var oDiv = document.getElementById("attack");
//								
//									(function(d,timerw,end_left){
//										if (!timerw)
//										timerw = setInterval(function () {
//			//横向移动		                
//											
//											
//											var speedl = (end_left - d.offsetLeft) / 30;        //根据终点和offsetLeft取出运动的速度
//											speedl = speedl > 0 ? Math.ceil(speedl) : Math.floor(speedl);       //进位取整，小数位变为整位，
//											if (Math.abs(end_left - d.offsetLeft) <= speedl) { //由于在停止的时候最后会出现小的缝隙，或者说没有完全的到达指定地点，所以要小于它的速度
//												clearInterval(timerw);                       //当距离小于速度时，让计时器停止
//												d.style.left = end_left + 'px';           //在停止后填充缝隙。
//											}
//											else {
//												d.style.left = d.offsetLeft + speedl +  'px';       //移动DIV
//											}
//			//消失动画
//												if (d.getBoundingClientRect().left == end_left) {
//													document.body.removeChild(d);				
//												}
//												
//											
//										}, 5)
//										
//									})(oDiv,null,end_left);
//			//竖向移动            
//								//var timerh = null;
//									(function(d,timerh,end_top){
//											
//											timerh = setInterval(function () {
//												var speedr = (end_top - d.offsetTop) / 30;        //根据终点和offsetLeft取出运动的速度
//												speedr = speedr > 0 ? Math.ceil(speedr) : Math.floor(speedr);       //进位取整，小数位变为整位，
//												if (Math.abs(end_top - d.offsetTop) <= speedr) { //由于在停止的时候最后会出现小的缝隙，或者说没有完全的到达指定地点，所以要小于它的速度
//													clearInterval(timerh);                       //当距离小于速度时，让计时器停止
//													d.style.top = end_top +  'px';           //在停止后填充缝隙。
//												}
//												else {
//													d.style.top = d.offsetTop + speedr + 'px';       //移动DIV
//												}
//												
//											}, 5)
//									})(oDiv,null,end_top);					
//			}	
			
//总分排名
//			var shit1 = people2.teams;
//			var shit2 = shit1.sort(total_num1);
//			console.log(shit1);
//			console.log(shit2);
//			for (z=1;z<people2.teams.length+1;z++) {
//				document.getElementById("r_t_n_"+z).innerHTML = shit2[z-1].team_name;
//				document.getElementById("r_t_t_"+z).innerHTML = shit2[z-1].total;
//			}	
////进攻次数排名
//			var shit3 = shit1.reverse(attack_num);
//			for (s=1;s<shit3.length+1;s++) {
//				document.getElementById("r_a_n_"+s).innerHTML = shit3[s-1].team_name;
//				document.getElementById("r_a_t_"+s).innerHTML = shit3[s-1].attack_num;
//			}
//			var shit4 = shit1.sort(be_attack_num);
//			for (ss=1;ss<shit3.length+1;ss++) {
//				document.getElementById("r_o_n_"+ss).innerHTML = shit4[ss-1].team_name;
//				document.getElementById("r_o_t_"+ss).innerHTML = shit4[ss-1].be_attack_num;
//			}
//总分排名
//			var shit3 = people2.teams;
//			for (z=1;z<people2.teams.length+1;z++) {
//				if (z<11) {
//					$(".rank_total").append("<tr class='topten showd'><td>第"+z+"名</td><td>"+shit3[z-1].team_name+"</td><td>"+shit3[z-1].total+"</td></tr>");
//				} else{
//					$(".rank_total").append("<tr class='other shown'><td>第"+z+"名</td><td>"+shit3[z-1].team_name+"</td><td>"+shit3[z-1].total+"</td></tr>");					
//				}
//			}
////进攻次数排名
//			var shit = people2.teams;
//			var shit_real = shit.reverse(attack_num);
//			for (s=1;s<shit_real.length+1;s++) {
//				if (s<11) {
//					$(".rank_attack").append("<tr class='topten showd'><td>第"+s+"名</td><td>"+shit_real[s-1].team_name+"</td><td>"+shit_real[s-1].attack_num+"</td></tr>");
//				} else{
//					$(".rank_attack").append("<tr class='other shown'><td>第"+s+"名</td><td>"+shit_real[s-1].team_name+"</td><td>"+shit_real[s-1].attack_num+"</td></tr>");					
//				}				
//
//			}
////被进攻次数排名
//			var shit1 = people2.teams;
//			var shit1_real = shit.reverse(be_attack_num);
//			for (ss=1;ss<shit_real.length+1;ss++) {
//				if (ss<11) {
//					$(".rank_obj_attack").append("<tr class='topten showd'><td>第"+ss+"名</td><td>"+shit1_real[ss-1].team_name+"</td><td>"+shit1_real[ss-1].be_attack_num+"</td></tr>");
//				} else{
//					$(".rank_obj_attack").append("<tr class='other shown'><td>第"+ss+"名</td><td>"+shit1_real[ss-1].team_name+"</td><td>"+shit1_real[ss-1].be_attack_num+"</td></tr>");					
//				}			
//			}
//进攻日志&得分日志
			for (z1=0;z1<people2.real.length;z1++) {
				if (people2.real[z1].attach == false) {
					var f_a_team = document.getElementById(people2.real[z1].team_id+"tname").innerText;
					var f_b_team = document.getElementById(people2.real[z1].obj_team_id+"tname").innerText;					
					$("#attack_log").prepend(people2.real[z1].attach_time+'\r\n'+f_a_team+"进攻"+f_b_team+"失败!"+'\r\n'+people2.real[z1].attach_log+'\r\n');				
				}else{
					var t_a_team = document.getElementById(people2.real[z1].team_id+"tname").innerText;
					var t_b_team = document.getElementById(people2.real[z1].obj_team_id+"tname").innerText;
					$("#attack_log").prepend(people2.real[z1].attach_time+'\r\n'+t_a_team+"进攻"+t_b_team+"成功!"+'\r\n');									
					$("#score_log").prepend(people2.real[z1].attach_time+'\r\n'+people2.real[z1].attach_log+'得分：'+people2.real[z1].score+'\r\n');
//闪烁动画     
					var oBox=document.getElementById(people2.real[z1].team_id);
					var timer = null;   //定义时间器  
					var i = 0;   
					clearInterval(timer); //先清空时间器  
					HTMLBodyElement.onmouseover = function(){ //当鼠标移入div时 清空时间器  
					    clearInterval(timer);  
					};  
					timer = setInterval(function () {  
					  oBox.style.display = i++ % 2 ? "none" : "block";  // 有规律的控制div的展示与隐藏  
					  i > 20 && (clearInterval(timer))  //控制闪烁次数  
					}, 50 );  						
				}								
				}
			if (people2.notices) {					
					row = {};
					row.title =  people2.notices[0].title;
					row.create_time = people2.notices[0].create_time;
					row.notice_content = people2.notices[0].notice_content;
					notice_array.push(row);
					nn = notice_array.length-1;


					if (notice_array.length>0) {
						document.getElementById("notice_title").innerHTML = notice_array[nn].title;
			        	document.getElementById("notice_content").innerHTML = notice_array[nn].notice_content;
					}								
			}

		
		
			
	});
		