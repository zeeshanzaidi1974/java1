(function (window, document) {

})(window, document);
var LoginBtn = document.getElementById("login-btn");
var main_page = document.getElementById("main-page");
main_page.style.display="none";
		
LoginBtn.addEventListener('click' , function(){
				 var 	Login_box = document.getElementById("login-box");
				 var 	acc_no  = document.getElementById("acc_no") .value;
				 var 	pass = document.getElementById("pass") .value;
				 
				 Login_box.style.display="none";
				  // Login_box.style.display='none;
				
				 			if(acc_no==' '){ 
										alert ( 'account number is required' ) ;
											}
											else if (pass==' ' ){
													alert ( 'password is required' ) ;
												}
												else{
															Login_box.style.display="none";
															main_page.style.display="block";
													}
				});
				