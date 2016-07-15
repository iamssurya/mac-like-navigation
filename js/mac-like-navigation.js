(function(){
	this.maclikeNav = function(id,data,arguments){
		//console.log(id+'   :   ' +arguments);
		$('#'+id).addClass('macnav');

		$('.macnav').append('<ul class="macnav-list"></ul>');

		$.each(data,function(index,object){
			if(object.icon === 'font-awesome'){
				$('.macnav-list').append('<li class="macnav-list-item fa fa-'+object.icontype+'"></li>');
			}
		})

	}
	function extendDefaults(arguments){

	}
}());
