route=(obj)=>{
    var page=obj.innerHTML;
    page=page.toLowerCase();
    window.location+='templates/'+page+'.html';
}

function parallax1(el,scrollVal){
    $(el).css('margin-top',-scrollVal/70+"%");
}

$(document).ready(function(){
    
    var i=false;
    //slide menu
    /*$("#navigation>i").click(function(){
        if(i){
            $(".mobile-menu").css({
                width:0
            })
        }
        
    })*/
    //var topPos=$("#section3 .iframes").offset().top;
    $("#section3 .iframes").mousewheel(function(e,delta){
        if(this.scrollLeft!=this.scrollLeft-delta*5){
            var s1=this.scrollLeft;
            this.scrollLeft-=delta*5;
            if(this.scrollLeft-s1!=0){
                e.preventDefault();
            }
            
        }
    })
    
    $(window).scroll(function(e){
        var scroll=$(this).scrollTop();
        parallax1("#dots3",scroll);

        if((scroll+$(this).height())>$("#dots5").offset().top-4){
            parallax1("#dots5",((scroll+$(this).height())-$("#dots5").offset().top-20));
        }
    })
})