var startX=0,startY=0,pageNum=0,x,y;
var i=0;
function G_touchStart(event){
    var touch=event.touches[0];
     x=Number(touch.pageX);
     y=Number(touch.pageY);
    startX=x;
    startY=y;
}

function G_touchMove(event){
   event.preventDefault();
    var touch=event.touches[0];
    x=Number(touch.pageX);
    y=Number(touch.pageY);
}
  
function G_touchEnd(event) {
  if(startX>x&&startY>385){ move();}      
   if(startX<x&&startY>385){ move2(); }      
}

function opengift(){
   $(this).attr("src","images/giftopen.png").width("311px").height("331px").css({'left':'10px'});  
   $(".awardCon").fadeIn(500);
   document.removeEventListener('touchstart', G_touchStart, false);
   document.removeEventListener('touchmove', G_touchMove, false);
   document.removeEventListener('touchend', G_touchEnd, false);
}
        
function move(){
   
     if (i >5||i<0) i = 0;
     if (i == 0) {
             $("#pic3").animate({left:0,width:103,height:73},500).addClass("blur ").removeClass("index99 bottom");
            $("#pic4").animate({left:50,width:217,height:147},500).removeClass("blur ").addClass("index99 bottom");
            $("#pic5").fadeOut(100).animate({left:200},100).fadeIn(200);
            $("#pic2").animate({left:-100},500);
        }
        else if (i == 1) {
          $("#pic4").animate({left:0,width:103,height:73},500).addClass("blur ").removeClass("index99 bottom");
            $("#pic5").animate({left:50,width:217,height:147},500).removeClass("blur ").addClass("index99 bottom");
            $("#pic1").fadeOut(100).animate({left:200},100).fadeIn(200);
            $("#pic3").animate({left:-100},500);
        }
        else if (i == 2) {
           $("#pic5").animate({left:0,width:103,height:73},500).addClass("blur ").removeClass("index99 bottom");;
            $("#pic1").animate({left:50,width:217,height:147},500).removeClass("blur ").addClass("index99 bottom");
            $("#pic2").fadeOut(100).animate({left:200},100).fadeIn(200);
            $("#pic4").animate({left:-100},500);
        }
          else if (i == 3) {
           $("#pic1").animate({left:0,width:103,height:73},500).addClass("blur ").removeClass("index99 bottom");;
            $("#pic2").animate({left:50,width:217,height:147},500).removeClass("blur ").addClass("index99 bottom");
            $("#pic3").fadeOut(100).animate({left:200},100).fadeIn(200);
            $("#pic5").animate({left:-100},500);
        }
          else if (i == 4) {
           $("#pic2").animate({left:0,width:103,height:73},500).addClass("blur ").removeClass("index99 bottom");;
            $("#pic3").animate({left:50,width:217,height:147},500).removeClass("blur ").addClass("index99 bottom");
            $("#pic4").fadeOut(100).animate({left:200},100).fadeIn(200);
            $("#pic1").animate({left:-100},500);
        }
        i++;
     
}

function move2(){
     if (i <0||i>5) i =4;
     if (i == 0) {
             $("#pic1").fadeOut(100).animate({left:0,width:103,height:73},100).fadeIn(200).addClass("blur ").removeClass("index99 bottom");
            $("#pic2").animate({left:50,width:217,height:147},500).removeClass("blur ").addClass("index99 bottom");
            $("#pic3").animate({left:200,width:103,height:73},500).removeClass("index99 bottom");
            $("#pic5").animate({left:-100},500);
        }
        else if (i == 1) {
           $("#pic2").fadeOut(100).animate({left:0,width:103,height:73},500).addClass("blur ").fadeIn(200).removeClass("index99 bottom");;
            $("#pic3").animate({left:50,width:217,height:147},500).removeClass("blur ").addClass("index99 bottom");
             $("#pic4").animate({left:200,width:103,height:73},500).removeClass("index99 bottom");
            $("#pic5").animate({left:-100},500);
        }
        else if (i == 2) {
           $("#pic3").animate({left:0,width:103,height:73},500).addClass("blur ").removeClass("index99 bottom");;
            $("#pic4").animate({left:50,width:217,height:147},500).removeClass("blur ").addClass("index99 bottom");
             $("#pic5").animate({left:200,width:103,height:73},500).removeClass("index99 bottom");
            $("#pic1").animate({left:-100},500);
        }
          else if (i == 3) {
           $("#pic4").animate({left:0,width:103,height:73},500).addClass("blur ").removeClass("index99 bottom");;
            $("#pic5").animate({left:50,width:217,height:147},500).removeClass("blur ").addClass("index99 bottom");
             $("#pic1").animate({left:200,width:103,height:73},500).removeClass("index99 bottom");
            $("#pic2").animate({left:-100},500);
        }
          else if (i == 4) {
           $("#pic5").animate({left:0,width:103,height:73},500).addClass("blur ").removeClass("index99 bottom");;
            $("#pic1").animate({left:50,width:217,height:147},500).removeClass("blur ").addClass("index99 bottom");
             $("#pic2").animate({left:200,width:103,height:73},500).removeClass("index99 bottom");
            $("#pic3").animate({left:-100},500);
        }
        i--;
}
