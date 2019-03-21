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

    //scroll variables
    let iframeTop=$("#section3 .iframes").offset().top,
        scrollDown=false,scrollUp=false;
    var check=false;
    var scrollPos=[];

    for(i=0; i<7; i++){
        scrollPos.push($("#section3 .iframes>section").eq(i).offset().left+10);
    }   
    
    $(window).resize(function(){
        scrollPos=[];
        for(i=0; i<7; i++){
            scrollPos.push($("#section3 .iframes>section").eq(i).offset().left+10);
        }   
    })

    //Iframe slider animation

    $("#section3 .iframes").mousewheel(function(e,delta){
        var s1=this.scrollLeft;
        this.scrollLeft-=delta;
                
        if(this.scrollLeft-s1!=0){
            e.preventDefault();
        }

        if(pos==6){console.log(this.scrollLeft-s1);}

        if(!check){
            check=true;
                if(pos<6 && (this.scrollLeft)-s1>0){
                    (this).scrollLeft-=delta*5;
                    pos=(++pos);
                }else if(pos>0 && (this.scrollLeft)-s1<0){
                    (this).scrollLeft-=delta*5;
                    pos=(--pos);
                 }
                
                //console.log(pos);
   
                $(this).animate({scrollLeft:scrollPos[pos]-scrollPos[0]},{
                    easing:'swing',
                    duration:1500,
                    complete:function(){
                        check=false;
                    }
                });   
        } 
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
        
        
    })
    
})