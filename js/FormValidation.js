setInterval(function(){
	let pass1 = document.getElementById('passw1').value;
	let pass2 = document.getElementById('passw2').value;
	let errText = document.getElementById('errText');
	let errBlock = document.getElementById('errBlock');

	if (pass1 == pass2) {
		errBlock.style.backgroundColor = "#191919";
		errText.innerHTML = " ";
	}
	else{
		errText.innerHTML = "Пароли должны совпадать!"
		errBlock.style.backgroundColor = "red";
	}
},1000)
function passwCheck(){
	let check = document.getElementById('passw_check');
	let label = document.getElementById('passCheckLabel');
	let pass1 = document.getElementById('passw1');
	let pass2 = document.getElementById('passw2');
	if (check.checked) {
		label.innerHTML = "Скрыть пароль";
		pass1.setAttribute("type","text");
		pass2.setAttribute("type","text")

	}
	else{
		label.innerHTML = "Показать пароль";
		pass1.setAttribute("type","password");
		pass2.setAttribute("type","password")

	}
}