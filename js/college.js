$(function(){
    $('#SouSuo').focus(function () {
        this.value = (this.value==' ')?'': this.value;
    });
});

$(function(){
    //每个固定的时间移动图片
    var timer = setInterval(picLoop,3000);
    var index = 0;
    function picLoop(){
        index++;
        if (index==7) {index=0;}
        $(".content").animate({"left":-1000*index},300);
        $(".la").eq(index).css("background-color","red")
               .siblings().css("background-color","rgba(100,100,100,0.3)");
    }

    //定时器的控制
    $(".pic").hover(function(){
        clearInterval(timer);
        $(".left").show();
        $(".right").show();
    },function(){
        timer = setInterval(picLoop,2000);
        $(".left").hide();
        $(".right").hide();
    })

    $(".la").mouseover(function(){
        $(this).css("background-color","red")
               .siblings().css("background-color","rgba(100,100,100,0.3)");
        index = $(this).index();
        $(".content").animate({"left":-1000*index},300);

    })

    $(".left").click(function(){
        index--;
        if (index==-1) {index=6;}
        $(".content").animate({"left":-1000*index},300);
        $(".la").eq(index).css("background-color","red")
               .siblings().css("background-color","rgba(100,100,100,0.3)");
    })
    $(".right").click(function(){
        index++;
        if (index==7) {index=0}
        $(".content").animate({"left":-1000*index},300);
        $(".la").eq(index).css("background-color","red")
               .siblings().css("background-color","rgba(100,100,100,0.3)"); 
    })
})
$(function(){
    //每个固定的时间移动图片
    var timer = setInterval(picLoop,2000);
    var index = 0;
    function picLoop(){
        index++;
        if (index==5) {index=0;}
        $(".row").animate({"left":-330*index},300);
        // $(".news-content").animate({"left":-330*index},300);
        if(index==0){
            $(".newspaper1").css("display","inline")
            $(".newspaper2").css("display","none")
            $(".newspaper3").css("display","none")
            $(".newspaper4").css("display","none")
            $(".newspaper5").css("display","none")
        };
        if(index==1){
            $(".newspaper1").css("display","none")
            $(".newspaper2").css("display","inline")
            $(".newspaper3").css("display","none")
            $(".newspaper4").css("display","none")
            $(".newspaper5").css("display","none")
        }
        if(index==2){
            $(".newspaper1").css("display","none")
            $(".newspaper3").css("display","inline")
            $(".newspaper2").css("display","none")
            $(".newspaper4").css("display","none")
            $(".newspaper5").css("display","none")
        }
        if(index==3){
            $(".newspaper1").css("display","none")
            $(".newspaper4").css("display","inline")
            $(".newspaper3").css("display","none")
            $(".newspaper2").css("display","none")
            $(".newspaper5").css("display","none")
        }
        if(index==4){
            $(".newspaper1").css("display","none")
            $(".newspaper5").css("display","inline")
            $(".newspaper3").css("display","none")
            $(".newspaper4").css("display","none")
            $(".newspaper2").css("display","none")
        }

        $(".lala").eq(index).css("background-color","red")
               .siblings().css("background-color","rgba(100,100,100,0.3)");
    }

    //定时器的控制

    $(".lala").mouseover(function(){
        $(this).css("background-color","red")
               .siblings().css("background-color","rgba(100,100,100,0.3)");
        index = $(this).index();
        $(".row").animate({"left":-330*index},300);
        // $(".news-content").animate({"left":-330*index},300);
    })



    $(".tm2").mouseover(function () { 
        $(this).css("background","#fff");
        $(".tm2>a").css("color","#5e9ef3");
        
        $(".tm1").css("background","#5e9ef3");
        $(".tm1>a").css("color","#fff");
        $(".tm3").css("background","#5e9ef3");
        $(".tm3>a").css("color","#fff");

        $(".new2-content2").css("display","block");
        $(".new2-content").css("display","none");
        $(".new2-content3").css("display","none");

    });



    $(".tm3").mouseover(function () { 
        $(this).css("background","#fff");
        $(".tm3>a").css("color","#5e9ef3");
  
        $(".tm1").css("background","#5e9ef3");
        $(".tm1>a").css("color","#fff");
        $(".tm2").css("background","#5e9ef3");
        $(".tm2>a").css("color","#fff");

        $(".new2-content3").css("display","block");
        $(".new2-content2").css("display","none");
        $(".new2-content").css("display","none");
    });

    $(".tm1").mouseover(function () { 
        $(".tm1").css("background","#fff");
        $(".tm1>a").css("color","#5e9ef3");
        
        $(".tm2").css("background","#5e9ef3");
        $(".tm2>a").css("color","#fff");
        $(".tm3").css("background","#5e9ef3");
        $(".tm3>a").css("color","#fff");

        $(".new2-content").css("display","block");
        $(".new2-content2").css("display","none");
        $(".new2-content3").css("display","none");
        // $(".tm1>a").removeClass();

    });

    $(".tma").mouseover(function () { 
        $(this).css("background","#fff");
        $(".tma>a").css("color","#02c0a0");
        
        $(".tmb").css("background","#02c0a0");
        $(".tmb>a").css("color","#fff");

        $(".new3-content").css("display","block");
        $(".new3-content2").css("display","none");

    });
    $(".tmb").mouseover(function () { 
        $(this).css("background","#fff");
        $(".tmb>a").css("color","#02c0a0");
        
        $(".tma").css("background","#02c0a0");
        $(".tma>a").css("color","#fff");

        $(".new3-content2").css("display","block");
        $(".new3-content").css("display","none");

    });



})
