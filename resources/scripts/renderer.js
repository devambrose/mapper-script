var menu=0;
$(document).ready(function(){
	
	$("#bounce").mouseover(function(){

		testAnim("bounce",this,'');
		
  });
  $(".r3-req").click(function(){


     testAnim("pulse",this,$(this).attr('class'));
  });
  setTimeout(function(){  typeWriter();  },1000);sliderLoad();
   
  $(window).scroll(function(){
    if($(this).scrollTop() > 255){
       $("#menu").css({"opacity":"1"});
    }else{
      $("#menu").css({"opacity":".5"});
    }
  
  });
 const str="<div class='phone-menu'> <nav class='ph-menu'><a href='/'>Home</a></nav> <nav class='ph-menu'><a href='/about'>About Me</a></nav> <nav class='ph-menu'><a href='/contact'>Contact Me</a></nav> <nav class='ph-menu'><a href='/blog'>My Blo</a></nav> </div>";

  if(getPhoneAttr() <516){
   //  $(".face").append(str);
     $("body").append(str);
     var let_intances_run=0;
     $(".phone-menu a").click(function(e){
         if(let_intances_run==0){
            e.preventDefault();
          let doc= $("body section *").toArray();
         for(let i=0;i<doc.length;i++){
          
            $(doc[i]).addClass("flipOutX");
           
            let_intances_run=1;
         }
         window.location = $(this).attr('href');
        }
         
     });
    }
});
function testAnim(x,elem,cls='') {
  let btn="r3-right r3-white r3-padding-right r3-round-big";
    $(elem).addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      
      if( cls !='')
           btn=cls;
           
            $(this).removeClass('animated '+x).addClass(btn);
    });
};var ui=0;
  var txt='I am a Website,Mobile app and System developer. Take a look at my blog and my previous works.Also my direct contacts are included';
  var speed=50;
function typeWriter(){
   
   if (ui < txt.length) {
    document.getElementById("tag").innerHTML += txt.charAt(ui);
    ui++;
    setTimeout(typeWriter, speed);
  }
 }
  
  var si=0;
  var cMargin=0;
  function sliderLoad(){
    let wd=$(".r3-slider-container .r3-left").width()+20;
   
    if(si< $(".r3-slider-container div").length){
         
       $(".r3-slider-container").animate({"marginLeft":"-"+(wd)+"px"},1000,function(){

        let  item=$(".r3-slider-container div").toArray();

        let temItem= $(item[si]);

        console.log(si);
       // $(item[si]).remove();

        $(".r3-slider-container").append(temItem).animate({"marginLeft":"0"});
       });
       si++;
       cMargin=wd;
       setTimeout(sliderLoad,2000)
    }
  }
  function getPhoneAttr(){
    "use strict";
    var w = window.innerWidth|| document.documentElement.clientWidth || document.body.clientWidth;
    console.log(w);
    return w;
  }