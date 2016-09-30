// JavaScript Document
jQuery(document).ready(function(){
	
	//Add Class Js to html
	jQuery('html').addClass('js');	
								
    //=================================== MENU ===================================//
    jQuery("ul.sf-menu").supersubs({ 
    minWidth		: 12,		// requires em unit.
    maxWidth		: 12,		// requires em unit.
    extraWidth		: 3	// extra width can ensure lines don't sometimes turn over due to slight browser differences in how they round-off values
                           // due to slight rounding differences and font-family 
    }).superfish();  // call supersubs first, then superfish, so that subs are 
                     // not display:none when measuring. Call before initialising 
                     // containing tabs for same reason.
	
	//=================================== MOBILE MENU DROPDOWN ===================================//
	jQuery('#topnav').tinyNav({
		active: 'selected'
	});
	
	//=================================== TABS AND TOGGLE ===================================//
	//jQuery tab
	jQuery(".tab-content").hide(); //Hide all content
	jQuery("ul.tabs li:first").addClass("active").show(); //Activate first tab
	jQuery(".tab-content:first").show(); //Show first tab content
	//On Click Event
	jQuery("ul.tabs li").click(function() {
		jQuery("ul.tabs li").removeClass("active"); //Remove any "active" class
		jQuery(this).addClass("active"); //Add "active" class to selected tab
		jQuery(".tab-content").hide(); //Hide all tab content
		var activeTab = jQuery(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
		jQuery(activeTab).fadeIn(200); //Fade in the active content
		return false;
	});
	
	//jQuery toggle
	jQuery(".toggle_container").hide();
	jQuery("h2.trigger").click(function(){
		jQuery(this).toggleClass("active").next().slideToggle("slow");
	});
	
	// Accordion
	jQuery("ul.ts-accordion li").each(function(){
		if(jQuery(this).index() > 0){
			jQuery(this).children(".accordion-content").css('display','none');
		}else{
			jQuery(this).find(".accordion-title").addClass('active');
		}
		
				
		jQuery(this).children(".accordion-title").bind("click", function(){
			jQuery(this).addClass(function(){
				if(jQuery(this).hasClass("active")) return "";
				return "active";
			});
			jQuery(this).siblings(".accordion-content").slideDown();
			jQuery(this).parent().siblings("li").children(".accordion-content").slideUp();
			jQuery(this).parent().siblings("li").find(".active").removeClass("active");
		});
	});
	
	//=================================== FADE EFFECT ===================================//
	if (jQuery.browser.msie && jQuery.browser.version < 7) return; // Don't execute code if it's IE6 or below cause it doesn't support it.
	
	jQuery('.ts-display-pf-img').hover(
		function() {
			jQuery(this).find('.rollover').stop().fadeTo(500, 0.60);
		},
		function() {
			jQuery(this).find('.rollover').stop().fadeTo(500, 0);
		}
	)
	jQuery('#sliderNivo').nivoSlider({
	effect: 'random', // Specify sets like: 'fold,fade,sliceDown'
	animSpeed: 1000, // Slide transition speed
	pauseTime: 6000, // How long each slide will show
	controlNav: true, // 1,2,3... navigation
	directionNav: false, // Next & Prev navigation
	afterLoad: function(){
		jQuery(".nivo-caption").animate({right:"0"}, {easing:"easeOutQuad", duration: 500})
		},
		beforeChange: function(){
		jQuery(".nivo-caption").animate({right:"-300"}, {easing:"easeInQuad", duration: 500})
		},
		afterChange: function(){
		jQuery(".nivo-caption").animate({right:"0"}, {easing:"easeOutQuad", duration: 500})
		}

   });
   (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
   (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

   ga('create', 'UA-57403745-1', 'auto');
   ga('send', 'pageview');
});
//#@+livechat-zenith-content
//document.write('<script src="http://pkt.zoosnet.net/JS/LsJS.aspx?siteid=PKT56764896&float=1&lng=en"><\/script>');   
//#@-livechat-zenith-content


