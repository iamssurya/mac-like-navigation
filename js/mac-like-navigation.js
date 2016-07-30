(function(){
	this.maclikeNav = function(id,data,arguments){
		//console.log(id+'   :   ' +arguments);



		$('#'+id).addClass('macnav');

		$('.macnav').append('<ul class="macnav-list"></ul>');

		//setting the width
		//$('.macnav').css('min-width',data.length * 6+'%');
		//$('.macnav').css('max-width',data.length * 6.5+'%');

		$.each(data,function(index,object){
			if(object.icon === 'font-awesome'){
				$('.macnav-list').append('<li class="macnav-list-item "><span class="icon_'+index+' fa fa-'+object.icontype+'"></span></li>');
				if(object.color){
					$('.icon_'+index).css('color',object.color);
				}
			}

		})

	}
	function extendDefaults(arguments){

	}
}());
