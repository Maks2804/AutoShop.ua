let app = new Vue({
	el: '.slider',
	data:{
		slideCount: 0,
	},
	methods:{

	}
})
// Прошу прощение за говнокод
function MouseMove1() {
	document.getElementById('element-menu1').style.backgroundColor = "black";
	document.getElementById('el-text1').style.color = "#fff";
}
function MouseLeave1() {
	document.getElementById('element-menu1').style.backgroundColor = "#f0f0f0";
	document.getElementById('el-text1').style.color = "#000";
}
function MouseMove2() {
	document.getElementById('element-menu2').style.backgroundColor = "black";
	document.getElementById('el-text2').style.color = "#fff";
}
function MouseLeave2() {
	document.getElementById('element-menu2').style.backgroundColor = "#f0f0f0";
	document.getElementById('el-text2').style.color = "#000";
}
function MouseMove3() {
	document.getElementById('element-menu3').style.backgroundColor = "black";
	document.getElementById('el-text3').style.color = "#fff";
}
function MouseLeave3() {
	document.getElementById('element-menu3').style.backgroundColor = "#f0f0f0";
	document.getElementById('el-text3').style.color = "#000";
}
function MouseMove4() {
	document.getElementById('element-menu4').style.backgroundColor = "black";
	document.getElementById('el-text4').style.color = "#fff";
}
function MouseLeave4() {
	document.getElementById('element-menu4').style.backgroundColor = "#f0f0f0";
	document.getElementById('el-text4').style.color = "#000";
}
// слайдер
function nextSlide() {
		app.slideCount++	
}
function prevSlide() {
		app.slideCount--
}
// Показ вертикального меню слева
function menuShow() {
	new anime({
		targets: '.left-menu',
		translateX: 1,
		duration: 500,
		easing: 'easeInOutQuad'
	})
}
function menuClose(){
	new anime({
		targets: '.left-menu',
		translateX: -300,
		duration: 500,
		easing: 'easeInOutQuad'
	})
}
// Проверка устройства пользователя
const type = navigator.userAgent

if (type.indexOf("Android") >= 0) {
	alert("Вы зашли с устройства Android, этот сайт не оптимизирован к мобильным устройствам, пожалуйста, включите режим для ПК")
}


