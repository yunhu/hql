<script>
checkImgPath.getImgData('all',3);
imgPath = checkImgPath.getCookieImgPath('all');
$(function(){
    if(channel == ''){
        indexNewData.getNewData();

        if(document.cookie.indexOf("isCheck") < 0)


        if(preSelect == "cli"){
            $("#" + preSelect).toggleClass("now");
        }else{
            $("#" + preSelect).click();
        }
    }


})

</script>
