//按钮
		$(".rank_btn input").click(function(e){
			$(this).addClass('btn-success').siblings().removeClass('btn-success');
		})
//		$(".rank_t ").click(function(e){
//			$(".rank_total").addClass("showd").removeClass("shown").siblings().removeClass("showd").addClass("shown");
//		})
//		$(".rank_a ").click(function(e){
//			$(".rank_attack").addClass("showd").removeClass("shown").siblings().removeClass("showd").addClass("shown");
//		})
//		$(".rank_b_a ").click(function(e){
//			$(".rank_obj_attack").addClass("showd").removeClass("shown").siblings().removeClass("showd").addClass("shown");
//		})
		$(".change_btn input").click(function(e){
			$(this).addClass('btn-success').siblings().removeClass('btn-success');
		})
		$(".ten_teams").click(function (e) {
			$(".other").addClass("shown").removeClass("showd");
		})
		$(".all_teams").click(function(e) {
			$(".other").addClass("showd").removeClass("shown");
		})
		$(".journal_btn li").click(function(e){
			$(this).addClass('active').siblings().removeClass('active');
		})
		$(".log_j ").click(function(e){
			$("#attack_log").addClass("showd").removeClass("shown").siblings().removeClass("showd").addClass("shown");
		})
		$(".score_j ").click(function(e){
			$("#score_log").addClass("showd").removeClass("shown").siblings().removeClass("showd").addClass("shown");
		})
		$(".announce_btn input").click(function(e){
			$(this).addClass('btn-success').siblings().removeClass('btn-success');
		})
		$(".past_notice").click(function  () {
			if (nn > 0) {
				nn = nn-1;
				document.getElementById("notice_title").innerHTML = notice_array[nn].title;
				document.getElementById("notice_content").innerHTML = notice_array[nn].notice_content;
				document.getElementById("notice_time").innerHTML = notice_array[nn].create_time;				
			}
		})
		$(".next_notice").click(function  () {
			if (nn<notice_array.length-1) {
				nn = nn+1;
				document.getElementById("notice_title").innerHTML = notice_array[nn].title;
				document.getElementById("notice_content").innerHTML = notice_array[nn].notice_content;
				document.getElementById("notice_time").innerHTML = notice_array[nn].create_time;				
			}

		})
		function total_num (a,b) {
			return b.total-a.total;
		}
		function attack_num(a,b){
       		return b.get-a.get;
    	}
		function be_attack_num(a,b){  
       		return a.lost-b.lost;
    	}

//		$(".team").hover(function  () {
//			$(".team").hide();
//		},function  () {
//			$(".team").show();
//		})
		$("#left_b").click(function () {
			if ($("#table_name").val() == "3") {
				$("#table_name").val("2");	
				$("#table_name").html("进攻排行");
				$(".rank_attack").addClass("showd").removeClass("shown").siblings().removeClass("showd").addClass("shown");
			}else if ($("#table_name").val() == "2") {
				$("#table_name").val("1");
				$("#table_name").html("总分排行");
				$(".rank_total").addClass("showd").removeClass("shown").siblings().removeClass("showd").addClass("shown");				
			}else{
				$(".rank_total").addClass("showd").removeClass("shown").siblings().removeClass("showd").addClass("shown");				
			}
		});
		$("#right_b").click(function () {
			if ($("#table_name").val() == "1") {
				$("#table_name").val("2");
				$("#table_name").html("进攻排行");
				$(".rank_attack").addClass("showd").removeClass("shown").siblings().removeClass("showd").addClass("shown");
			}else if ($("#table_name").val() == "2") {
				$("#table_name").val("3") ;
				$("#table_name").html("被进攻排行");
				$(".rank_obj_attack").addClass("showd").removeClass("shown").siblings().removeClass("showd").addClass("shown");				
			}else{
				$(".rank_obj_attack").addClass("showd").removeClass("shown").siblings().removeClass("showd").addClass("shown");				
			}
		});		

//第一个接口
			var row1 = {};

			var time ;
//			var shit13 = 0;
		$.ajaxSettings.async = false;
		$.getJSON("test2.json",function  (people1) {
			shit13 = people1.teams.length;
			time = Number(people1.remainTime);	

			
			
			if (people1.teams.length<9) {
				var link = document.createElement("link");
				link.rel = "stylesheet";
				link.type = "text/css";
				link.href = "css/8_teams.css";
				document.getElementsByTagName("head")[0].appendChild(link);
				team_ridus = 150;
				team_height = 150;
			}else if(people1.teams.length>9&&people1.teams.length<17){
				var link = document.createElement("link");
				link.rel = "stylesheet";
				link.type = "text/css";
				link.href = "css/16_teams.css";
				document.getElementsByTagName("head")[0].appendChild(link);
				team_ridus = 130;
				team_height = 90;
			}else{
				var link = document.createElement("link");
				link.rel = "stylesheet";
				link.type = "text/css";
				link.href = "css/30_teams.css";
				document.getElementsByTagName("head")[0].appendChild(link);
				team_ridus = 100;
				team_height = 80;
			}
//创建星球
			for (var c =1;c<people1.teams.length+1;c++) {
				var team = document.createElement('div');
				team.id = "team"+(c-1);
				$(team).addClass('team');
				$(team).click(function () {
					alert("123");
				})
				document.body.appendChild(team);
				var castle = document.createElement('div');
				castle.id = people1.teams[c-1].team_id;
      			$(castle).addClass("castle");
      			$(castle).addClass("castle"+c);	
      			$(castle).append ( "<p id='"+people1.teams[c-1].team_id+"tname"+"'>"+people1.teams[c-1].team_name+"</p>");
      			$(castle).append ( "<img src='img/300250.jpg' />");
	      		var dadt = document.getElementById("team"+(c-1));
	      		dadt.appendChild(castle);
			}
//创建卫星
			for (var d=0;d<people1.teams.length;d++) {
		  		for (var i=1;i<11;i++) {
		  		var dad = document.getElementById("team"+d);
		  		var guard = document.createElement("div");
		  		guard.style.position = "absolute";
					$(guard).addClass("guard_c"+i );
					$(guard).addClass("guard");
		  		dad.appendChild(guard);
		  	} 
		}  	
//总分排名		  	
			var shit3 = people1.teams;
			var shit2 = shit3.sort(total_num);
			for (z=1;z<people1.teams.length+1;z++) {
				if (z<11) {
					$(".rank_total").append("<tr  class='topten showd'><td>第"+z+"名</td><td id='r_t_n_"+z+"'>"+shit2[z-1].team_name+"</td><td id='r_t_t_"+z+"'>"+shit2[z-1].total+"</td></tr>");
				} else{
					$(".rank_total").append("<tr  class='other shown'><td>第"+z+"名</td><td id='r_t_n_"+z+"'>"+shit2[z-1].team_name+"</td><td id='r_t_t_"+z+"'>"+shit2[z-1].total+"</td></tr>");					
				}
			}
//进攻次数排名
			var shit_real = shit3.sort(attack_num);
			for (s=1;s<shit_real.length+1;s++) {
				if (s<11) {
					$(".rank_attack").append("<tr  class='topten showd'><td>第"+s+"名</td><td id='r_a_n_"+s+"'>"+shit_real[s-1].team_name+"</td><td id='r_a_t_"+s+"'>"+shit_real[s-1].get+"</td></tr>");
				} else{
					$(".rank_attack").append("<tr  class='other shown'><td >第"+s+"名</td><td id='r_a_n_"+s+"'>"+shit_real[s-1].team_name+"</td><td id='r_a_t_"+s+"'>"+shit_real[s-1].get+"</td></tr>");					
				}				

			}
//被进攻次数排名
			var shit1_real = shit3.sort(be_attack_num);
			for (ss=1;ss<shit_real.length+1;ss++) {
				if (ss<11) {
					$(".rank_obj_attack").append("<tr class='topten showd'><td>第"+ss+"名</td><td id='r_o_n_"+ss+"'>"+shit1_real[ss-1].team_name+"</td><td  id='r_o_t_"+ss+"'>"+shit1_real[ss-1].lost+"</td></tr>");
				} else{
					$(".rank_obj_attack").append("<tr class='other shown'><td>第"+ss+"名</td><td id='r_o_n_"+ss+"'>"+shit1_real[ss-1].team_name+"</td><td  id='r_o_t_"+ss+"'>"+shit1_real[ss-1].lost+"</td></tr>");					
				}			
			}		  	
		  	
		  	
		  	
		  	
		  	
		
//	  		for (var dd=1;dd<people1.teams.length+1;dd++) {
//	  			var ddd = dd-1;
//	  			var dad1 = document.getElementsByClassName("castle"+dd);
//	  			var portrait = document.createElement('div');
//	  			portrait.id = "portrait"+dd;
//	  			$(portrait).addClass("portrait_img");
//	  			dad1.appendChild(portrait);
//	  			portrait.style.backgroundColor = '"'+white+'"';
//				portrait.style.backgroundImage = '"'+people1.teams[ddd].avatar_path+'"';
//	  		}


//公告
//			document.getElementById("notice_title").innerHTML = people1.notices[0].title;
//			document.getElementById("notice_time").innerHTML = people1.notices[0].create_time;
//			document.getElementById("notice_content").innerHTML = people1.notices[0].notice_content;	
			
			row1.title =  people1.notices[0].title;
			row1.create_time = people1.notices[0].create_time;
			row1.notice_content = people1.notices[0].notice_content;
//			alert(row1.title);
			
			
		});	
		
//		alert(time);

			
		function new_cartoon (n) {
//			var num_team = $("body").find(".team").length;
//			var real_num_team = num_team - 1;

			function getNumb(num,val){
		        var num = new Array();
		        for(var i = 0; i < 2; i++){
		            var val =  Math.ceil(Math.random() * (shit13-1));
		            var isEqu = false;
		            for(var idx in num){
		                if(num[idx] == val){isEqu = true; break;}
		            }
		            if(isEqu)
		                i--;
		            else
		                num[num.length] = val;
		        }
		        return num;
		    }
			var real_num = getNumb();
						
			var start_position = document.getElementById("team"+real_num[0]);
			var start_left = start_position.getBoundingClientRect().left;
			var start_top = start_position.getBoundingClientRect().top;
			
			var end_position = document.getElementById("team"+real_num[1]);
			var end_left_a = end_position.getBoundingClientRect().left;
			var end_left = end_left_a + team_ridus;
			var end_top_a = end_position.getBoundingClientRect().top;
			var end_top = end_top_a +　team_height;
			if (document.getElementById('attack'+n))
				document.body.removeChild(document.getElementById('attack'+n));
					var arrow = document.createElement('div');
						arrow.style.left = start_left+team_ridus+"px";
						arrow.style.top = start_top+team_height+"px";
						arrow.id = "attack"+n;
						arrow.className = "attack";
						document.getElementsByTagName("body").item(0).appendChild(arrow);
						var oDiv = document.getElementById("attack"+n);
						
							(function(d,timerw,end_left){
								if (!timerw)
								timerw = setInterval(function () {
	//横向移动		                
									
									
									var speedl = (end_left - d.offsetLeft) / 40;        //根据终点和offsetLeft取出运动的速度
									speedl = speedl > 0 ? Math.ceil(speedl) : Math.floor(speedl);       //进位取整，小数位变为整位，
									if (Math.abs(end_left - d.offsetLeft) <= speedl) { //由于在停止的时候最后会出现小的缝隙，或者说没有完全的到达指定地点，所以要小于它的速度
										clearInterval(timerw);                       //当距离小于速度时，让计时器停止
										d.style.left = end_left + 'px';           //在停止后填充缝隙。
									}
									else {
										d.style.left = d.offsetLeft + speedl +  'px';       //移动DIV
									}
	//消失动画
										if (d.getBoundingClientRect().left == end_left) {
											document.body.removeChild(d);				
										}
										
									
								}, 5)
								
							})(oDiv,null,end_left);
	//竖向移动            
						//var timerh = null;
							(function(d,timerh,end_top){
									
									timerh = setInterval(function () {
										var speedr = (end_top - d.offsetTop) / 40;        //根据终点和offsetLeft取出运动的速度
										speedr = speedr > 0 ? Math.ceil(speedr) : Math.floor(speedr);       //进位取整，小数位变为整位，
										if (Math.abs(end_top - d.offsetTop) <= speedr) { //由于在停止的时候最后会出现小的缝隙，或者说没有完全的到达指定地点，所以要小于它的速度
											clearInterval(timerh);                       //当距离小于速度时，让计时器停止
											d.style.top = end_top +  'px';           //在停止后填充缝隙。
										}
										else {
											d.style.top = d.offsetTop + speedr + 'px';       //移动DIV
										}
										
									}, 5)
							})(oDiv,null,end_top);					
		}
		
		//setInterval(new_cartoon,1500);
	var ww =3;
	
	setInterval(function(){
		for(var i=0;i<ww;i++){			
			(function(n){setTimeout(function(){new_cartoon(n)},Math.ceil(Math.random()*1500));})(i);
		}		
	},1500);
		
//按键触发动画	
 	function jumpPage() { 

		if (event.keyCode==38)//上
	 	fun_b();

		if (event.keyCode==40)//下 
		fun_d();
 	}

		function fun_b(){ 
			ww = 1;
		}

		function fun_d(){
		 	ww = 5;
		} 
	document.onkeydown=jumpPage;


//倒计时
var Countdown = {
	flag : true,
	data : [0,0,0,0,0,0],
	//初始化数据
	init : function(){
		var that = this;
		$('.ending').hide();
		if(that.flag){
			$('.begin').html('重置');
			that.flag = false;
//			var time = 72000000;
//			var time1 = new Date(time);
			var hour = Math.floor(time/(1000*60*60));
			var minute = Math.floor(time/(1000*60))%60;
			var second = Math.floor(time/(1000))%60;
//			var hour = time1.getHours();
//			var minute = time1.getMinutes();
//			var second = time1.getSeconds();
			if(that.varliNum(hour) && that.varliNum(minute) && that.varliNum(second)){
				if(hour<=0 && minute<=0 && second<=0){
					that.reset();
					$('.ending').show();
					alert('时间到')
					return;
				}
				if(minute>59){minute = 59;$('.minute').val('59')}
				if(second>59){second = 59;$('.second').val('59')}
				$('.input').each(function(){
					if($(this).val()>0 && $(this).val()<10){
						$(this).val('0'+$(this).val());
					}
				})
				that.data[0] = parseInt(hour/10);
				that.data[1] = hour%10;
				that.data[2] = parseInt(minute/10);
				that.data[3] = minute%10;
				that.data[4] = parseInt(second/10);
				that.data[5] = second%10;

				$('.time').find("span.static:eq(0)").html(that.data[0]);
				$('.time').find("span.static:eq(1)").html(that.data[1]);
				$('.time').find("span.static:eq(2)").html(that.data[2]);
				$('.time').find("span.static:eq(3)").html(that.data[3]);
				$('.time').find("span.static:eq(4)").html(that.data[4]);
				$('.time').find("span.static:eq(5)").html(that.data[5]);

				that.begin();
			}else{
				alert('只能输入数字')
			}
		}else{
			that.reset();
		}		
	},
	//重置
	reset : function(){
		var that = this;
		$('.begin').html('开始');
		that.flag = true;
		$('.time').find("li.num").find('span').html('0');
		$('.input').val('00');
		$('.ending').hide();
		that.data = [0,0,0,0,0,0];
	},
	//数字校验
	varliNum : function(value){
		return /^\d+$/.test(value)
	},
	//开始
	begin : function(){
		var that = this;
		setTimeout(function() {
			//判断是否为0
			if(!that.flag){
				if(that.getData()){
					that.reset();
					$('.ending').show();
					alert('时间到了。。。。')
				}else{
					that.begin();
				}
			}
		}, 1000)
	},
	//获取数据状态
	getData : function(){
		var that = this;
		var data = that.data;
		if(data[5]>0){
			data = [data[0],data[1],data[2],data[3],data[4],data[5]-1];
			that.changeNum(5,data[5]);
		}else if(data[4]>0){
			data = [data[0],data[1],data[2],data[3],data[4]-1,9];
			that.changeNum(4,data[4]);
			that.changeNum(5,9);
		}else if(data[3]>0){
			data = [data[0],data[1],data[2],data[3]-1,5,9];
			that.changeNum(3,data[3]);
			that.changeNum(4,5);
			that.changeNum(5,9);
		}else if(data[2]>0){
			data = [data[0],data[1],data[2]-1,9,5,9];
			that.changeNum(2,data[2]);
			that.changeNum(3,9);
			that.changeNum(4,5);
			that.changeNum(5,9);
		}else if(data[1]>0){
			data = [data[0],data[1]-1,5,9,5,9];
			that.changeNum(1,data[1]);
			that.changeNum(2,5);
			that.changeNum(3,9);
			that.changeNum(4,5);
			that.changeNum(5,9);
		}else if(data[0]>0){
			data = [data[0]-1,9,5,9,5,9];
			that.changeNum(0,data[0]);
			that.changeNum(1,9);
			that.changeNum(2,5);
			that.changeNum(3,9);
			that.changeNum(4,5);
			that.changeNum(5,9);
		}else{
			return true;
		}
		that.data = data;
		return false;
	},
	//修改样式
	changeNum : function(i,num){
		var that = this;
		$('.time').find("span.old:eq("+i+")").before('<span class="static new">'+num+'</span>')
		$(".old:eq("+i+")").remove();
		$(".new").removeClass('new').addClass('old');
	}
}


setTimeout("Countdown.init()",1000);
		
//全局数组
		window.notice_array = [];
		notice_array.push(row1);
		console.log(notice_array);
		
		var nn=0;
			

		
		
		
//		function new_cartoon (n) {
//		
//			function getNumb (num,val) {
//				var num = new Array();
//				for (ii=0;ii<shit13;ii++) {
//					num[ii]=ii;
//				}
//				num.sort(
//					function () {
//						return 0.5-Math.random();
//					}
//				);
//				return num;
//			}
//			
//
////			function getNumb(num,val){
////		        var num = new Array();
////		        for(var i = 0; i < 2; i++){
////		            var val =  Math.ceil(Math.random() * (shit13-1));
////		            var isEqu = false;
////		            for(var idx in num){
////		                if(num[idx] == val){isEqu = true; break;}
////		            }
////		            if(isEqu)
////		                i--;
////		            else
////		                num[num.length] = val;
////		        }
////		        return num;
////		    }
//			var real_num = getNumb();
//						
//			var start_position = document.getElementById("team"+real_num[0]);
//			var start_left = start_position.getBoundingClientRect().left;
//			var start_top = start_position.getBoundingClientRect().top;
//			
//			var end_position = document.getElementById("team"+real_num[1]);
//			var end_left_a = end_position.getBoundingClientRect().left;
//			var end_left = end_left_a + team_ridus;
//			var end_top_a = end_position.getBoundingClientRect().top;
//			var end_top = end_top_a +　team_height;
//			if (document.getElementById('attack'+n))
//				document.body.removeChild(document.getElementById('attack'+n));
//					var arrow = document.createElement('div');
//						arrow.style.left = start_left+team_ridus+"px";
//						arrow.style.top = start_top+team_height+"px";
//						arrow.id = "attack"+n;
//						arrow.className = "attack";
//						document.getElementsByTagName("body").item(0).appendChild(arrow);
//						var oDiv = document.getElementById("attack"+n);
//						
//							(function(d,timerw,end_left){
//								if (!timerw)
//								timerw = setInterval(function () {
//	//横向移动		                
//									
//									
//									var speedl = (end_left - d.offsetLeft) / 40;        //根据终点和offsetLeft取出运动的速度
//									speedl = speedl > 0 ? Math.ceil(speedl) : Math.floor(speedl);       //进位取整，小数位变为整位，
//									if (Math.abs(end_left - d.offsetLeft) <= speedl) { //由于在停止的时候最后会出现小的缝隙，或者说没有完全的到达指定地点，所以要小于它的速度
//										clearInterval(timerw);                       //当距离小于速度时，让计时器停止
//										d.style.left = end_left + 'px';           //在停止后填充缝隙。
//									}
//									else {
//										d.style.left = d.offsetLeft + speedl +  'px';       //移动DIV
//									}
//	//消失动画
//										if (d.getBoundingClientRect().left == end_left) {
//											document.body.removeChild(d);				
//										}
//										
//									
//								}, 5)
//								
//							})(oDiv,null,end_left);
//	//竖向移动            
//						//var timerh = null;
//							(function(d,timerh,end_top){
//									
//									timerh = setInterval(function () {
//										var speedr = (end_top - d.offsetTop) / 40;        //根据终点和offsetLeft取出运动的速度
//										speedr = speedr > 0 ? Math.ceil(speedr) : Math.floor(speedr);       //进位取整，小数位变为整位，
//										if (Math.abs(end_top - d.offsetTop) <= speedr) { //由于在停止的时候最后会出现小的缝隙，或者说没有完全的到达指定地点，所以要小于它的速度
//											clearInterval(timerh);                       //当距离小于速度时，让计时器停止
//											d.style.top = end_top +  'px';           //在停止后填充缝隙。
//										}
//										else {
//											d.style.top = d.offsetTop + speedr + 'px';       //移动DIV
//										}
//										
//									}, 5)
//							})(oDiv,null,end_top);					
//		}
//		
//
//	var ww =3;
//	
//	setInterval(function(){
//		for(var i=0;i<ww;i++){			
//			(function(n){setTimeout(function(){new_cartoon(n)},Math.ceil(Math.random()*1500));})(i);
//		}		
//	},1500);
//		
////按键触发动画
// 	function jumpPage() { 
//		if (event.keyCode==37)//左
//	 	fun_a();
//
//		if (event.keyCode==38)//上
//	 	fun_b();
//
//		if (event.keyCode==39)//右
//	 	fun_c();
//	 	
//		if (event.keyCode==40)//下 
//		fun_d();
// 	}
//		function fun_a(){
//			ww = 0;
//		}
//
//		function fun_b(){ 
//			ww = 1;
//		}
//
//		function fun_d(){
//		 	ww = 3;
//		}
//		
//		function fun_c(){
//			ww = 5;
//		}
//	document.onkeydown=jumpPage;


