route=(obj)=>{
    var page=obj.innerHTML;
    page=page.toLowerCase();
    window.location+='templates/'+page+'.html';
}

function parallax1(el,scrollVal){
    $(el).css('margin-top',-scrollVal/70+"%");
}
var i=0,curr_scr=this.scrollLeft;
$(document).ready(function(){
    
    var i=false;
    
    var scrollPos=[]
    for(i=0; i<7; i++){
        scrollPos.push($("#section3 .iframes>section").eq(i).offset().left+10);
    }
    
    $("#section3 .iframes").mousewheel(function(e,delta){
         
        if(this.scrollLeft!=this.scrollLeft-delta*5){
            var s1=this.scrollLeft;
            this.scrollLeft-=delta*5;
            if(this.scrollLeft-s1!=0){
                e.preventDefault();
            }
            
        }
      //  curr_scr=this.scrollLeft;   
    })

    //scroll Animation
    var i=0;

    function scrollAnimate(target,speed){
        setInterval(function(){
            if(i==6){
                $(target).animate({scrollLeft:scrollPos[0]-scrollPos[i]},{
                    easing:'swing',
                    duration:speed,
                    complete:function(){
                        i=(++i)%7;
                        //console.log(i);
                    }
                });    
            }else{
            $(target).animate({scrollLeft:scrollPos[i+1]-scrollPos[0]},{
                duration:speed,
                complete:function(){
                    i=(++i)%7;
                    //console.log(i);
                }
            });
        }
            
        },speed+1500);
    }
    
    /*$("#section3 .iframes>section").animate({
        'position':'relative',
        'left':'-=100px'
    },200);*/

    scrollAnimate($("#section3 .iframes"),3000);
            
    
    
    $(window).scroll(function(e){
        var scroll=$(this).scrollTop();
        parallax1("#dots3",scroll);

        if((scroll+$(this).height())>$("#dots5").offset().top-4){
            parallax1("#dots5",((scroll+$(this).height())-$("#dots5").offset().top-20));
        }
    })
})