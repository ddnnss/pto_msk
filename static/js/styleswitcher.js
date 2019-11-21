jQuery(function () {
	'use strict';
	
	jQuery(".ptss__toggle-btn").click(function () {	
		jQuery('.js-ptss-frame').toggleClass('is-opened');
	});
	
	jQuery('.ptss__layout-wrapper > div').click(function(){
		
		jQuery(this).closest('.ptss__setting-control').find('.ptss__layout-wrapper').removeClass('is-selected');
		
		jQuery(this).parent().addClass('is-selected');
		
		if( jQuery(this).hasClass('ptss__layout-box--wide') ) {
			
			jQuery('body').removeClass('boxed');
			jQuery('#ptss__boxed-bg').hide();
			
			jQuery('body').removeClass('bg1').removeClass('bg2').removeClass('bg3').removeClass('bg4');
			
			jQuery('#ptss__boxed-backgrounds span').removeClass('is-selected');
			
		} else {
			
			jQuery('body').addClass('boxed');
			jQuery('#ptss__boxed-bg').show();
			
		}
		
	});
	
	jQuery('#ptss__color-skin > span').click(function(){
		
		jQuery(this).parent().find('span').removeClass('is-selected');
		
		jQuery(this).addClass('is-selected');
		
		var $cssLink = jQuery("<link/>", {
			rel: "stylesheet",
		   	type: "text/css"
		})
		
		
		
		if( jQuery(this).hasClass('option0') ) {
			
			$cssLink.attr('href', '/css/style-alt0.css');
			
		} else if( jQuery(this).hasClass('option1') ) {
						
			$cssLink.attr('href', '/css/style-alt1.css');
			
		} else if( jQuery(this).hasClass('option2') ) {
			
			$cssLink.attr('href', '/css/style-alt2.css');
			
		} else if( jQuery(this).hasClass('option3') ) {
			
			$cssLink.attr('href', '/css/style-alt3.css');
			
		} else if( jQuery(this).hasClass('option4') ) {
			
			$cssLink.attr('href', '/css/style-alt4.css');
			
		}
		
		$cssLink.appendTo("head");
		
	});
	
	jQuery('#ptss__boxed-backgrounds > span').click(function(){
		
		jQuery(this).parent().find('span').removeClass('is-selected');
		
		jQuery(this).addClass('is-selected');
		
		if( jQuery(this).hasClass('option0') ) {
			
			jQuery('body').removeClass('bg2').removeClass('bg3').removeClass('bg4').addClass('bg1');
				
		} else if( jQuery(this).hasClass('option1') ) {
			
			jQuery('body').removeClass('bg1').removeClass('bg3').removeClass('bg4').addClass('bg2');
			
		} else if( jQuery(this).hasClass('option2') ) {
			
			jQuery('body').removeClass('bg1').removeClass('bg2').removeClass('bg4').addClass('bg3');
			
		} else if( jQuery(this).hasClass('option3') ) {
			
			jQuery('body').removeClass('bg1').removeClass('bg2').removeClass('bg3').addClass('bg4');
			
		}
		
	});
	
})