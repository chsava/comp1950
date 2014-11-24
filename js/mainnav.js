( function( $ ) {
$( document ).ready(function() {
$('#mainnav').prepend('<div id="indicatorContainer"><div id="pIndicator"><div id="cIndicator"></div></div></div>');
    var activeElement = $('#mainnav>ul>li:first');

    $('#mainnav>ul>li').each(function() {
        if ($(this).hasClass('active')) {
            activeElement = $(this);
        }
    });


	var posLeft = activeElement.position().left;
	var elementWidth = activeElement.width();
	posLeft = posLeft + elementWidth/2 -6;
	if (activeElement.hasClass('has-sub')) {
		posLeft -= 6;
	}

	$('#mainnav #pIndicator').css('left', posLeft);
	var element, leftPos, indicator = $('#mainnav pIndicator');
	
	$("#mainnav>ul>li").hover(function() {
        element = $(this);
        var w = element.width();
        if ($(this).hasClass('has-sub'))
        {
        	leftPos = element.position().left + w/2 - 12;
        }
        else {
        	leftPos = element.position().left + w/2 - 6;
        }

        $('#mainnav #pIndicator').css('left', leftPos);
    }
    , function() {
    	$('#mainnav #pIndicator').css('left', posLeft);
    });

	$('#mainnav>ul').prepend('<li id="menu-button"><a>Menu</a></li>');
	$( "#menu-button" ).click(function(){
    		if ($(this).parent().hasClass('open')) {
    			$(this).parent().removeClass('open');
    		}
    		else {
    			$(this).parent().addClass('open');
    		}
    	});
});
} )( jQuery );
