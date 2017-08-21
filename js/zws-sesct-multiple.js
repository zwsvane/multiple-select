
//数据截取
function sortArr(arr){
	arr = arr.split("、");
	return arr;
};

function selectOptionAll(obj){
	_this = $(obj);
	_thisDiv  = $(obj).find(".allSelect");
	_thisLi  = _thisDiv.find("li");
	
	//显示下来容器
	_this.find("p").on("click",function(){
		$(obj).find(".allSelect").show();
	
	});
	
	//选择框模拟
	var searchCont = new Array();
	
	var len = 0;
	var info ='';
	var info1='';
	var infoArr = new Array();
	
	function arrElement(temp){
		info = temp;

	};
	
	//收起模拟下拉框
	var timer = '';
	$(obj).find(".allSelect").mouseout(function(){
		
		timer = window.setTimeout(function(){
			
			$(obj).find(".allSelect").hide();
		},300)

	});
	$(obj).find(".allSelect").mouseover(function(){
		window.clearTimeout(timer);
		
		$(obj).find(".allSelect").show();

	});
	
}	
			

//点击获取当前
//点击获取当前
function textShow(obj,text,child){
	var temp = $(obj).find("input").val();

		
	
	//特殊化处理、点击全选
	if(text=="全部" &&$(obj).siblings("div").find("em").eq(child.index()).hasClass('bgcheck')){
		
		$(obj).siblings("div").find("em").removeClass('bgcheck');
		temp="请选择";
		 $(obj).find("input").val(temp);
		
		 
		return;
		
	}else if(text=="全部"){
		$(obj).siblings("div").find("em").addClass('bgcheck');
		temp="全部";
		 $(obj).find("input").val(temp);
		  
		return;
	};
	
	//全选状态下，去掉一个选项处理
	if($(obj).siblings("div").find("em").eq(0).hasClass('bgcheck')){
		temp = '';
		for(var i = 1;i<$(obj).siblings("div").find("li").length;i++){
			temp =temp+ $(obj).siblings("div").find("li").eq(i).attr('title')+'、';
		}
		temp=temp.substr(0,temp.length-1);
	};
	
	
	//非全选的单选
	$(obj).siblings("div").find("em").eq(0).removeClass('bgcheck');
	if($(obj).siblings("div").find("em").eq(child.index()).hasClass('bgcheck')){
		
		if(temp.indexOf(text)==-1){
			
		}else{
			var tempList = temp.split("、");
			temp = '';
			for(var i =0;i<tempList.length;i++){
				if(text!=tempList[i]){
					temp = temp+tempList[i]+'、';
				}
				
			}
			
			temp = temp.substr(0,temp.length-1);
			temp = temp==""?"请选择":temp;
			
		};
		
		$(obj).siblings("div").find("em").eq(child.index()).removeClass("bgcheck");
	}
	else{
		
		$(obj).siblings("div").find("em").eq(child.index()).addClass("bgcheck");
		
		//选中状态上传
		if (temp=="请选择"||temp=="全部") {
			temp = text;
			}
		else{
			if(temp.indexOf(text)==-1){
				
				temp = temp+'、'+text;
			}
			else{temp = temp;}
			
		};
		
		
	};
	
	 $(obj).find("input").val(temp);
};

$(function(){
	
	//模拟下拉框多选
	selectOptionAll(".selectOptionAll2");
	selectOptionAll(".selectOptionAll");

})