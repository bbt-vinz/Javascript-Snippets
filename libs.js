/* global javascript library 2012
	1.  image check
	2.  ellipsis
	3.  URL Vars
	4.  scroll top 
	5.  hover intent 
	6.  bold highlight header
	7.  background image
	8.  even/odd menu
	9.  tabs
	10. placeholder for ie
--------------------------------------------------------- */


/* 1. image check
--------------------------------------------------------- */

$(function() {
    $(".img").each(function() {
		var src = $(this).attr("src");
		var img = { jpg  : src.match(/jpg/gi),jpeg : src.match(/jpeg/gi),png  : src.match(/png/gi),gif  : src.match(/gif/gi),bmp  : src.match(/bmp/gi) };
		
		(img.jpg||img.png||img.gif||img.jpeg||img.bmp)?false:$(this).hide();
	});
});

/* 2. ellipsis
--------------------------------------------------------- */

$(function() {
  $("*[ellipsis]").each(function() {
       var count = $(this).attr("count");
       if($(this).text().length > count) {
          $(this).html($(this).text().substring(0,count) + $(this).attr("ellipsis"));
       }
    });
});

/* 3. URL vars
   ie. var bio = $.getUrlVar('bio');
       (bio != undefined)?true:false;
--------------------------------------------------------- */

jQuery.extend({
  getUrlVars: function(){
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  },
  getUrlVar: function(name){
    return jQuery.getUrlVars()[name];
  }
});

/* 4. scroll top
--------------------------------------------------------- */

$(function() {
   $("#scroll-top").click(function() {
       $('html,body').animate({scrollTop:0},700);
   });
   
   $(window).scroll(function() {
     ($('html,body').offset().top!=0)?$("#scroll-top").fadeIn():$("#scroll-top").fadeOut();   
   });
});

/* 5. hover intent
   ie:
   $('.menu-item').hoverIntent({
            timeout: 180,
            interval: 180,
            over: function () {
                $('.level-2').fadeOut(500);
                $('.level-2',this).slideDown(500);
            },
            out: function () {
                $('.level-2s',this).slideUp(200);

            }
   });

--------------------------------------------------------- */

 /**
* hoverIntent r5 // 2007.03.27 // jQuery 1.1.2+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne <brian@cherne.net>
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(p&&p!=this){try{p=p.parentNode;}catch(e){p=this;}}if(p==this){return false;}var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}if(e.type=="mouseover"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.mouseover(handleHover).mouseout(handleHover);};})(jQuery);


/* 6. bold highlight header
---------------------------------------------------------- */

$(function() {
   if($(".quote").length){
           var text = $(".quote").html().replace(/{/g,'<strong>').replace(/}/g,'</strong>');
           $(".quote").html(text);
   }
});


/* 7. background-image
----------------------------------------------------------- */

$(function() {
    if($(".banner").length) {
        $(".banner").css("cssText","background:url("+$(this).attr('src').replace(/ /g,"%20").replace(/'/g,"%27").replace("(","%28").replace(")","%29")+") repeat 50% 50%");
    }
});


/* 8. even/odd menu
----------------------------------------------------------- */

$(function() {
   if($(".even-odd").length) {
     $(".even-odd").find(".item:even").css("background","#FFF");
     $(".even-odd").find(".item:odd").css("background","#F2F2F2");
   }
});

/* 9. tabs
----------------------------------------------------------- */

$(document).ready(function() {
  if($(".tabs").length) {
    $(".tabs").each(function() {
      var tabbody =  $(this).find(".tab-body");
      var self = $(this);
      
      self.find(".tab a.tab-link").click(function(e) {
          e.preventDefault();
          var index = self.find("a.tab-link").index(this);
          self.find(".tab").removeClass("active");
          self.find(".tab-content").animate({opacity:0},0).removeClass("active");
          $(this).parent(".tab").addClass("active");
          self.find(".tab-content:eq("+index+")").addClass("active");
          self.find(".tab-content.active").animate({opacity:1});
      });

      // init
      self.find(".tab:first").addClass("active");
      self.find(".tab-content:first").addClass("active");
      $(".tab-content").animate({opacity:0},0);
      $(".tabs").each(function() {
        $(this).find(".tab-content:first").animate({opacity:1}).addClass("active");
     });
      
    });
    
  }
});

/* 10. placeholder for ie
------------------------------------------------------------ */

$(function() {
     if($.browser.msie) {
         $("input[placeholder]").each(function() {
            $(this).val($(this).attr("placeholder"));
            $(this).focus(function() {
                 $(this).val("");           
            });
         });
     }
});