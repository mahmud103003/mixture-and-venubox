
    $('#menu .menu-item ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass("active");
    });
    var mixer = mixitup('.mixtur');


    // new VenoBox();
    new VenoBox({
        selector: ".venobox",
        spinner:"swing",
        spinColor:"gold",
    });

    new VenoBox({
        selector: ".video-pop-up"
    });


    new VenoBox({
        selector: ".map"
    });