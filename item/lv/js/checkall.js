
jQuery.fn.extend({
	checkBind:function($subCheck,$btn){
		//this:调用checkBind()函数的对象（jQuery对象）
		let $checkedAllBtn = this;
		//1、全选(给全选复选框绑定click事件)

		this.click(function(){
			//this是事件源（DOM）
			let checked = this.checked;
			$subCheck.each(function(){
				//this是循环时当前DOM对象。
				this.checked = checked;
			});
		});

		//2、反向控制（子复选框控制父复选框）
		$subCheck.click(function(){

			//假定全部选中
			$checkedAllBtn[0].checked=getCheckAll();
		});
		

		//3、反选绑定事件
		if($btn){
			$btn.click(function(){
				$subCheck.each(function(){
					this.checked = !this.checked;
				});
				//用子控制父
				$checkedAllBtn[0].checked=getCheckAll();
			});
		}

		//判断所有的子CheckBox是不是选中状态
		function getCheckAll(){
			//假定全部选中
			let checkedAll = true;
			$subCheck.each(function(){
				if(!this.checked){
					checkedAll = false;
				}
			});
			return checkedAll;
		}
	}
});
