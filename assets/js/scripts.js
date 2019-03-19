route=(obj)=>{
    var page=obj.innerHTML;
    page=page.toLowerCase();
    window.location+='templates/'+page+'.html';
}

function parallax1(el,scrollVal){
    $(el).css('margin-top',-scrollVal/70+"%");
}
var pos=0,curr_scr=this.scrollLeft;
$(document).ready(function(){
    
    var check=false;
    
    var scrollPos=[]
    for(i=0; i<7; i++){
        scrollPos.push($("#section3 .iframes>section").eq(i).offset().left+10);
    }   
    

    $("#section3 .iframes").mousewheel(function(e,delta){
        var s1=this.scrollLeft;
                this.scrollLeft-=delta;
                
        if(this.scrollLeft-s1!=0){
            e.preventDefault();
        }
        if(!check){
            check=true;
            
                
                
                if(pos<6 && (this.scrollLeft)-s1>0){
                    (this).scrollLeft-=delta*5;
                    pos=(++pos);
                }else if(pos>0 && (this.scrollLeft)-s1<0){
                    (this).scrollLeft-=delta*5;
                    pos=(--pos);
                 }
                
                console.log(pos);
   
                $(this).animate({scrollLeft:scrollPos[pos]-scrollPos[0]},{
                    easing:'swing',
                    duration:1500,
                    complete:function(){
                        check=false;
                    }
                });
            
            
        }
        
        
        
      //  curr_scr=this.scrollLeft;   
    })

    //scroll Animation
    var i=0;

    
    /*$("#section3 .iframes>section").animate({
        'position':'relative',
        'left':'-=100px'
    },200);*/

    //scrollAnimate($("#section3 .iframes"),3000);
            
    
    
    $(window).scroll(function(e){
        var scroll=$(this).scrollTop();
        parallax1("#dots3",scroll);

        if((scroll+$(this).height())>$("#dots5").offset().top-4){
            parallax1("#dots5",((scroll+$(this).height())-$("#dots5").offset().top-20));
        }
    })
})