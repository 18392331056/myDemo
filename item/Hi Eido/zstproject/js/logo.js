	$(function(){
		$("#header").load("header.html");
		$("#footer").load("footer.html");


	})




	// 注册


	$(function(){
// 非空判断
		$("#email").blur(function(){
			
			if($("#email").val()==""){
						$(this).next().html("！用户名不能为空");
					}else {
						$(this).next().html("该账户名可以使用");
						
						}
			
		})
		$("#passworde").blur(function(){
			
			if($("#passworde").val()==""){
						$(this).next().html("!密码不能为空");
					}else {
						$(this).next().html("已输入");
						
						}
			
		})
	
})
	// 正则判断

	$(function(){
		$(".first").click(function(){
			var reg= /^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.(com|cn|net)$/i;
			if(reg.test($("#email").val())){
				$("#email").next().html("√");
				
			}else{
				$("#email").next().html("!请填写正确的电子邮箱");
			}
			var reg=/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/;
			if(reg.test($("#passworde").val())){
				$("#passworde").next().html("√");
			}else{
				$("#passworde").next().html("!密码格式不正确")
			}
			if($(".btns").val()===$("#passworde").val()){
					$(".btns").next().html("√")
				}else{
					$(".btns").next().html("密码与设置密码不符")
				}

		// 请求ajax
				let names=$("#email").next().html();
				let pass=$("#passworde").next().html();
				let pastwos=$(".btns").next().html();

		 
			if(names==="√" && pass==="√" && pastwos==="√"){

				$.ajax({

						type:"GET",
						url:"../php/checkUser.php",
						async:true,
						data:{
							userid:$("#email").val()
						},
						success:function(data){
							console.log(data);
							showUser(data);
						}

					})

			}

		})
	})

	function showUser(num){
			if(num==="0"){
				alert("该用户名已存在，请您从新换个名吧！")
			}else if(num==="1"){
				
			$.ajax({
						type:"POST",
						url:"../php/addUser01.php",
						async:true,
						data:{
							"userid":$("#email").val(),
							"userpass":$("#passworde").val()

						},
						success:function(data){
							alert("添加成功");
							window.location.href = "logo.html";
						}
		
				})
			}

		}


// 登录
$("#login").click(function(){

		$.ajax({
			type:"post",
			url:"../php/login.php",
			async:true,
			data:{
				"username":$("#username").val(),
				"passworde":$("#userpass").val()
			},
			success:function(data){
				console.log(data);
				if(data>"0"){
				alert("登录成功");
				saveCookie("username",$("#username").val(),7);
				alert(document.cookie);
				
				window.location.href = "index.html";
				}else{
				alert("用户名或密码不正确");
				}


			}

		})
		$("#username").val("");
		$("#userpass").val("");
	})


	


