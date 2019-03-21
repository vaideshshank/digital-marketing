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


var pos=0,curr_scr=this.scrollLeft;

$(document).ready(function(){
    var windowWidth=window.innerWidth,selector;
    //scroll variables
    let iframeTop=$("#section3 .iframes").offset().top,
        scrollDown=false,scrollUp=false;
    var check=false;
    var scrollPos=[];

    for(i=0; i<7; i++){
        scrollPos.push($("#section3 .iframes>section").eq(i).offset().left+10);
    }   
    // if(windowWidth>450){selector="#section3 .iframes";}
    // else{selector="#section3 .iframes>section>div";}    
    selector="#section3 .iframes";



    function sliderAnimation(el,e,delta){
        var s1=el.scrollLeft;
        el.scrollLeft-=delta;
                
        if((el.scrollLeft-s1!=0 && pos!=6) || (el.scrollLeft-s1!=0 && el.scrollLeft-s1!=1 && el.scrollLeft-s1!=2 && pos==6)){
            e.preventDefault();
        }    

        if(pos==6){console.log(el.scrollLeft-s1)}
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
                duration:1500,
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
        sliderAnimation(this,e,delta);
    })
    
    var i=0;
    //Parallax effect

    $(window).scroll(function(e){

        //parallax effect
        var scroll=$(this).scrollTop();
        //parallax1("#dots3",scroll);

        if((scroll+$(this).height())>$("#dots5").offset().top-4){
            parallax1("#dots5",((scroll+$(this).height())-$("#dots5").offset().top-20));
        }

        if((scroll+$(this).height())>$("#dots3").offset().top-4){
            parallax1("#dots3",((scroll+$(this).height())-$("#dots3").offset().top-20));
        }

        /*if(scroll>iframeTop-150 && !scrollDown){
            $("html, body").animate({scrollTop:iframeTop},{
                easing:'swing',
                duration:1000,
                complete:function(){scrollDown=!scrollDown;}
            });   
        }else if(scroll>iframeTop-150 && !scrollUp){
            $("html, body").animate({scrollTop:iframeTop},{
                easing:'swing',
                duration:1000,
                complete:function(){scrollUp=!scrollUp;}
            });  
        }*/  
    });


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