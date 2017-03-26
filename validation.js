
var validation = function(){
	
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	var a = "test";
	var b = "123";

	if(username == '' && password == ''){
		alert("blank");
	}
	else{
		if(username == a && password == b){
			window.open("http://www.budzogan.com");
		}
		else{
			alert("Sorry, we can't find that account. Perhaps your username or password is wrong?");
		}
	}
}

var forgot = function(){
	alert("If your email address exists in our database, you will receive a password recovery link at your email address in a few minutes.");
}

