$(document).ready(function(){
	var divWidth = $('#slideBoard').width();
	var imgCount = $('#content li').length;
//	alert(imgCount);

	$('#content').width(divWidth * imgCount);
	$('#content li').width(divWidth);
	$('#contentButton').width(divWidth);
	
	for(var i=0; i<imgCount; i++){
		$('#contentButton').append('<li></li>');
	}	
	
	$('#contentButton li:nth-child(1)').addClass('activeImg');
	
	var index = 0;
	$('#contentButton li').click(function(){
		index = $(this).index();
		
		$('#content').animate({
			left: divWidth * index * -1,
			color: 'red'
		});
		
		$(this).addClass('activeImg').siblings('.activeImg').removeClass('activeImg');
	});
});