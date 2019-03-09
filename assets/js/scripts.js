route=(obj)=>{
    var page=obj.innerHTML;
    page=page.toLowerCase();
    window.location='/templates/'+page+'.html';
}