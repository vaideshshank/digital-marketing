route=(obj)=>{
    var page=obj.innerHTML;
    page=page.toLowerCase();
    window.location+='templates/'+page+'.html';
}

function parallax1(el,scrollVal){
    $(el).css('margin-top',-scrollVal/70+"%");
    console.log("crenj,");
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
    $(window).scroll(function(e){
        var scroll=$(this).scrollTop();
        parallax1("#dots3",scroll);

        if((scroll+$(this).height())>$("#dots5").offset().top-4){
            parallax1("#dots5",((scroll+$(this).height())-$("#dots5").offset().top-20));
        }

        
    })
})