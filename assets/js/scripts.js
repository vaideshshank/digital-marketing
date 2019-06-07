"use strict"

function route(obj){
    var page=obj.innerHTML;
    page=page.toLowerCase();
    window.location+='templates/'+page+'.html';
}

function parallax1(el,scrollVal){
    $(el).css({
        'margin-top':-scrollVal/70+"%"
    });
}




$(document).ready(function(){

    function scrollToFrame(){
        $("body,html").animate({
            scrollTop: $(selector).offset().top
        },1000,"swing");
    }
    
    var pos=0,curr_scr=this.scrollLeft,insliderAnimation=false,scrollCount=0;
    var windowWidth=window.innerWidth,selector;
    //scroll variables
    let iframeTop=$("#section3 .iframes").offset().top;
    let iframeBottom=$("#section3 .iframes").offset().bottom;
    var check=false;
    var scrollPos=[];
    var scrolled=false;
    
    for(i=0; i<7; i++){
        scrollPos.push($("#section3 .iframes>section").eq(i).offset().left+10);
    }   
    // if(windowWidth>450){selector="#section3 .iframes";}
    // else{selector="#section3 .iframes>section>div";}    
    selector="#section3 .iframes";



    function sliderAnimation(el,e,delta){
        var s1=el.scrollLeft;
        el.scrollLeft-=delta;
        var diff=Math.floor(el.scrollLeft-s1);   
        console.log("Diff : "+diff)
        if((diff!=0 && pos!=6) || (diff!=0 && diff!=1  && pos==6)){
            e.preventDefault();
            //console.log("prevented : "+pos)
        }else{scrolled=false;insliderAnimation=false;}

        if(!check){
            check=true;
            if(pos<6 && (el.scrollLeft)-s1>0){
                (el).scrollLeft-=delta*5;
                pos=(++pos);
            }else if(pos>0 && (el.scrollLeft)-s1<0){
                (el).scrollLeft-=delta*5;
                pos=(--pos);
            }
            
            $(el).animate({scrollLeft:scrollPos[pos]-scrollPos[0]},{
                easing:'swing',
                duration:500,
                complete:function(){
                    check=false;
                }
            });   
        }
    }
    
    
    $(window).resize(function(){
        scrollPos=[];
        for(i=0; i<7; i++){
            scrollPos.push($("#section3 .iframes>section").eq(i).offset().left+10);
        }   
        windowWidth=this.innerWidth;
        // if(windowWidth>450){selector="#section3 .iframes";}
        // else{selector="#section3 .iframes>section>div:nth-child(2)";}    
    })



    //Iframe slider animation

    $(selector).mousewheel(function(e,delta){
        /*console.log(this);
        sliderAnimation(this,e,delta);*/
        //e.preventDefault();
    });
    
    var stopShift=false;
    var currIndex=0,moving=false;
    // $("html").on("mousemove",".social-media",scrollToFrame);
    $(".iframes").scroll(function(e){
        if(moving){
            return;
        }
        console.log($(this).scrollLeft()+scrollPos[0],scrollPos,currIndex)
        if($(this).scrollLeft()>scrollPos[currIndex+1]*0.95){
            currIndex++;
            $(".social-media .icons>img").removeClass("currentFrame");
            $(".social-media .icons>img").eq(currIndex).addClass("currentFrame");
        }else if($(this).scrollLeft()<scrollPos[currIndex]*0.83 && currIndex!=0){
            currIndex--;
            $(".social-media .icons>img").removeClass("currentFrame");
            $(".social-media .icons>img").eq(currIndex).addClass("currentFrame");
        }
    })
    $(".stopScroll").click(function(e){
        stopShift=true;
        $("html").off("mousemove","body .social-media");
        var shift;
        // if($(document).offset().top<iframeTop){shift=$(selector).offset().top;}
        // else{shift=$(selector).offset().top-window.height;}
        $("body, html").animate({
            scrollTop: $(selector).offset().top
        }, 1000,"swing");    
        
    })

    $(".stopScrollTop").click(function(e){
        stopShift=true;
        $("html").off("mousemove",".social-media")
        // if($(document).offset().top<iframeTop){shift=$(selector).offset().top;}
        // else{shift=$(selector).offset().top-window.height;}
        $("body, html").animate({
            scrollTop: $(selector).offset().top
        }, 1000,"swing");    
    
    })
    
    
    $(".social-media .icons>img").click((function(e){
        moving=true;
        currIndex=$(".social-media .icons>img").index(this);
        $(".social-media .icons>img").removeClass("currentFrame");
        $(this).addClass("currentFrame")
        $(selector).animate({scrollLeft:scrollPos[currIndex]-scrollPos[0]},{
            easing:'swing',
            duration:800,
            complete:function(){
                check=false;
                moving=false;
            }
        });   
    }))

    $("#section4>div:nth-child(2)>i").click(function(e){
        var index=$("#section4>div:nth-child(2)>i").index(this);
        $(selector).animate({
            scrollLeft:scrollPos[index]-scrollPos[0]
        },{
            easing:'swing',
            duration:800,
            complete:function(){
                check=false;
            }
        });
        $("body,html").animate({
            scrollTop: $(selector).offset().top
        },1000,"swing");
    })
    
    
    var i=0;
    //Parallax effect
    let  scrollDown=false,scrollUp=false;
    $(window).scroll(function(e){

        //parallax effect
        var scroll=$(this).scrollTop();
        var scrollB=iframeTop-200;
        
        //parallax1("#dots3",scroll);

        if((scroll+$(this).height())>$("#dots5").offset().top-4){
            parallax1("#dots5",((scroll+$(this).height())-$("#dots5").offset().top-20));
        }

        if((scroll+$(this).height())>$("#dots3").offset().top-4){
            parallax1("#dots3",((scroll+$(this).height())-$("#dots3").offset().top-20));
        }

        /*if(scroll>scrollB && scroll<scrollB+200 &&  !stopShift){
            $("html, body").animate({scrollTop:$(selector).offset().top},{
                easing:'swing',
                duration:1000,
                complete:function(){scrolled=true;console.log('scrolled');insliderAnimation=true;}
            });   
        }*/
        
        // else if(scrollB>iframeTop-150 && !scrollUp){
        //     $("html, body").animate({scrollTop:iframeTop},{
        //         easing:'swing',
        //         duration:1000,
        //         complete:function(){scrollUp=!scrollUp;}
        //     });  
        // }
    });

    var mouseHeld;
    $(".arrows>i").mousedown(function(){
        var scrolled,shift,type;
        if($(".arrows>i").index(this)==0){
            shift=-25;type="scrollLeft";
        }else{shift=25;type="scrollRight";}
        mouseHeld=setInterval(function(){
            scrolled=$(".flex5").scrollLeft();
            $(".flex5").animate({
                scrollLeft:scrolled+(shift)
            },10)
        },20)
    }).mouseup(function(){
        clearInterval(mouseHeld);
    })

    var hidden=true;
    $("#navigation>i").click(function(){
        var mobMenu=$(".mobile-menu");
        if(hidden){
            mobMenu.css({display:'block'});
            mobMenu.animate({
                left:'0vw',
            },500);

            $(this).attr("class","fa fa-close");
            
            hidden=!hidden;
        }else{
            mobMenu.animate({
                left:'-90vw',
            },500,function(){
                mobMenu.css("display","none");
            });
            
            $(this).attr("class","fa fa-bars");
            hidden=!hidden;
        }
    })

    
    
})