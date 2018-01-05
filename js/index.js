document.addEventListener('plusready', function() {
	//console.log("所有plus api都应该在此事件发生后调用，否则会出现plus is undefined。"

});

function submitMenu() {
	var menu = new Array("冬瓜粉蒸排骨", "冬菇姜葱蒸滑鸡", "鱼香肉丝", "红烧鸡块", "青椒洋葱爆炒鳝鱼丝", "黑椒杏鲍菇牛肉粒", "腊肉炒年糕", "清蒸鲳鱼", "粉丝草鱼", "香辣手撕牛肉", "东坡肉", "牛腱子炖土豆", "山药粉蒸排骨", "土豆炖鸡翅", "糖醋排骨", "红烧排骨", "红烧牛肉", "芹菜炒肉", "虾仁豆腐", "香辣鲅鱼", "荔枝三文鱼头", "红烧排骨山药", "青椒炒虾", "糖醋里脊", "香菇珍珠肉丸子", "彩椒黄针菇", "回锅肉", "番茄土豆炖牛腩", "春节香肠", "春节腊肉", "红烧胖鱼头", "剁椒烤鱼", "蒜苗肉片", "三杯鸡", "酸汤肥牛", "蒸鳝鱼", "酸菜鱼", "红烧鲢鱼", "水煮肉片", "猪肉炖粉条", "烂肉粉条", "冬瓜粉蒸排骨", "冬菇姜葱蒸滑鸡", "鱼香肉丝", "红烧鸡块", "青椒洋葱爆炒鳝鱼丝", "香辣手撕牛肉", "东坡肉", "牛腱子炖土豆", "红烧鲅鱼", "红烧狮子头", "爆炒小鱿鱼", "黄瓜炒肉片", "蒜香板鸭", "孜然牛肉", "孜然辣炒鸡胗", "可乐鸡翅", "虾仁炒炒芹菜", "包白萝卜素炸丸子", "酱烧凤爪", "潮汕豆酱姜", "猪肉白菜炖粉条", "红酒炖牛肉", "炒田螺", "麻辣牛肉", "甜烧白", "咸烧白", "酱香秋刀鱼", "杏鲍菇牛肉粒", "炒年糕", "蒜焖五花肉", "蒜苔回锅", "剁椒鱼头", "香辣中翅", "香菇酱丁", "铁板鱿鱼", "茄子大虾");
	//				alert(menu.length);
	var sucai = new Array("醋溜白菜", "醋溜海带丝", "孜然土豆", "平菇炒鸡蛋", "塞蒜泥白肉", "番茄炒鸡蛋", "金针菇烩莲藕丸", "糖醋大拌菜", "葱油拌面", "韭黄炒鸡蛋", "土豆泥", "千页豆腐", "鱼香年糕", "炝莲白", "炒空心菜", "拍黄瓜", "凉拌木耳", "胡萝卜炒西红柿", "番茄酱豆腐", "辣白菜", "蜜汁桂菊山药", "铁板豆腐", "烩茄子", "炒茄子", "双椒花菇肉片", "酱香茄条", "烤地瓜", "白菜拌黄花菜", "爽口三丝", "洋葱炒蛋", "家常豆腐", "酱炒酸辣藕丁", "泡椒芹菜", "凉拌土豆丝", "黄瓜木耳", "干煸四季豆", "虎皮青椒", "凉拌海带丝", );
	var tang = new Array("海带炖豆腐", "黄花菜肉丸汤", "瘦肉鸡蛋汤", "酸菜粉丝汤", "山药玉米汤", "素菜汤");
	var Allsubmit = document.getElementById("Allsubmit");
	var resCont = document.getElementById("rescont").value;
	var menures = document.getElementById("menures");
	var sucaires = document.getElementById("sucaires");
	var tangres = document.getElementById("tangres");
	//			var resCont = document.getElementById("rescont");
//	if(menures.value.length>0) {
//		formReset();
//	}
	if(inputMenuNum > menu.length || inputMenuNum < 0 || inputTangNum < 0 || inputTangNum > tang.length || inputsucaiNum > sucai.length || inputsucaiNum < 0) {
		alert("对不起，您输入的数值已经超过了本系统的存储！目前共有" + menu.length + "道荤菜，" + sucai.length + "道素菜和" + tang.length + "道汤。");
	} else {
		//					if(menures.value == "" && tangres.value == "") {
		var inputMenuNum = document.getElementById("MenuNum").value;
		var inputTangNum = document.getElementById("TangNum").value;
		var inputsucaiNum = document.getElementById("sucaiNum").value;
		var num = parseInt(inputMenuNum) + parseInt(inputsucaiNum) + parseInt(inputTangNum); //获取一共产生的菜品数量，方便设定高度

		for(var i = 0; i < inputMenuNum; i++) {
			var rand = Math.floor(Math.random() * menu.length);
			if(typeof menures == null || menures == undefined) {
				menures = "";
			}
			menures.innerHTML += menures.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;" + menu[rand] + "<br>";
		}
		for(var i = 0; i < inputsucaiNum; i++) {
			var rand = Math.floor(Math.random() * sucai.length);
			if(typeof sucaires == null || sucaires == undefined) {
				sucaires = "";
			}
			sucaires.innerHTML += sucaires.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;" + sucai[rand] + "<br>";
		}
		for(var j = 0; j < inputTangNum; j++) {
			var rand = Math.floor(Math.random() * tang.length);
			if(typeof tangres == null || tangres == undefined) {
				tangres = "";
			}
			tangres.innerHTML += tangres.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;" + tang[rand] + "<br>";
		}
		document.getElementById("rescont").style.height = (num * 1.6 + 6) + "rem";
		document.getElementById("MenuNum").value = "";
		document.getElementById("sucaiNum").value = "";
		document.getElementById("TangNum").value = "";
	}
}

function formReset() { //重置内容
	document.getElementById("myForm").reset()
	document.getElementById("rescont").style.height = "6rem";
	document.getElementById("rescont").innerHTML = "<p style = 'overflow: hidden;width: 200 px;height: 20px;margin-top: 4px;'> ---------------荤菜--------------</p><span id = 'menures' > </span> <p style = 'overflow: hidden;width: 200px;height: 20px;' > ---------------素菜---------------</p> <span id = 'sucaires' > </span> <p style = 'overflow: hidden;width: 200px;height: 20px;' > ---------------汤品---------------</p> <span id = 'tangres' > </span>";
}
