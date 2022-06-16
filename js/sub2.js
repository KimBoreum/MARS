$(document).ready(function () {
    $(".tab_content").hide(); 
    $("ul.tabs li:first").addClass("active").show();
    $(".tab_content:first").show(); 

    $("ul.tabs li").click(function () {

        $("ul.tabs li").removeClass("active"); 
        $(this).addClass("active"); 
        $(".tab_content").hide(); 

        var activeTab = $(this).find("a").attr("href"); 
        $(activeTab).fadeIn(); 
        return false;
    });
});

$(document).ready(function () {
    $(".tab_content").hide(); 
    $("ul.array li:first").addClass("active").show();
    $(".tab_content:first").show(); 

    $("ul.array li").click(function () {

        $("ul.array li").removeClass("active"); 
        $(this).addClass("active"); 
        $(".tab_content").hide(); 

        var activeTab = $(this).find("a").attr("href"); 
        $(activeTab).fadeIn(); 
        return false;
    });
});