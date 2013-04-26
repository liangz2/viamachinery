/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function loadPage(page) {
    $("#content").fadeTo("400", 0, function() {
        $(this).load(page, function() {
            $(this).fadeTo("400", 1);
        });
    });
    /*
    $("#content").fadeOut(800, function() {
        $(this).load(page, function() {
            $(this).fadeIn(800);
        });
    });*/
}

function openPDFWin(pdf) {
    var url = "docs/" + pdf + ".pdf";
    window.open(url, pdf, "width=600, height=800, location=no");
    return false;
}
var isOnMenu = false;
var isOnTab = false;
var timeout;
$(function(){
    var pdd = $("#product.dropdown");
    pdd.css({display: "none", opacity: "0"});
    /*
    $("#productTab").mouseenter(function() {
        pdd.stop();
        pdd.css("display", "").animate({"opacity": "1"});
    });
    
    $("#productTab").mouseleave(function() {
       pdd.stop();
       pdd.animate({opacity: 0});
    });*/
    
    $("#productTab").mouseenter(function(){
        clearTimeout(timeout);
        isOnTab = true;
        pdd.stop(true, false).css("display", "").animate({"opacity": 1});
    }).mouseleave(function(){
        isOnTab = false;
        timeout = setTimeout(function() {
            if (!isOnMenu) {
                pdd.stop(true, false).animate({"opacity": 0}, function(){
                    pdd.css("display", "none");
                });
            }
        }, 300);
    });
    pdd.mouseenter(function() {
        clearTimeout(timeout);
        isOnMenu = true;
        pdd.stop(true, false).css("display", "").animate({"opacity": 1});
    }).mouseleave(function() {
        isOnMenu = false;
        timeout = setTimeout(function() {
            if (!isOnTab) {
                pdd.stop(true, false).animate({"opacity": 0}, function(){
                    pdd.css("display", "none");
                });
            }
        }, 300);
        
    });
    $(".tabrow li").click(function(e) {
        e.preventDefault();
        $(".tabrow li").removeClass("selected");
        $(this).addClass("selected");
    });
    // loads the home page
    loadPage("home.html");
});
