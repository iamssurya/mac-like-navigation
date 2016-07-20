(function(){
	this.maclikeNav = function(id,data,arguments){
		//console.log(id+'   :   ' +arguments);



		$('#'+id).addClass('macnav');

		$('.macnav').append('<ul class="macnav-list"></ul>');

		//setting the width

		$('.macnav').css('width',data.length * 6+'%');

		$.each(data,function(index,object){
			if(object.icon === 'font-awesome'){
				$('.macnav-list').append('<li class="macnav-list-item "><span class="fa fa-'+object.icontype+'"></span></li>');
			}
		})

	}
	function extendDefaults(arguments){

	}
}());
