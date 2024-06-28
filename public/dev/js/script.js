import $ from 'jquery';
import { gsap } from 'gsap';

$(document).ready(function(){

    let tl = gsap.timeline({repeat: -1, defaults: {ease: "none", duration: 6}});
    let tl2 = gsap.timeline({repeat: -1, defaults: {duration: 5}});

    $('.toLeft').each(function() {
        tl.fromTo($(this), {left: 120 + '%'}, {left: -20 + '%'}, "<");
    });
    $('.toRight').each(function() {
        tl.fromTo($(this), {left: -20 + '%'}, {left: 120 + '%'}, "<");
    });

    tl2.fromTo(".bubbles", {opacity: 1, top: 110 + '%'}, {opacity: 0, top: 15 + '%'});

    function fishPos() {
        $('.toLeft').each(function (){
            var randomY = Math.random() * 100;
            $(this).css('top', randomY + '%');
        });
        $('.toRight').each(function (){
            var randomY = Math.random() * 100;
            $(this).css('top', randomY + '%');
        });
    }

    fishPos();
    setInterval(fishPos, 12000);

    function bubblesPos() {
        $('.bubbles').each(function (){
            var randomX = Math.random() * 100;
            $(this).css('left', randomX + '%');
        })
    }

    bubblesPos();
    setInterval(bubblesPos, 15000);

    $('.grass').click(function(e) {
        $('.fishes-container').append(function() {
            return "<img class='bubble' src='./public/dist/gfx/bubbles.png' alt='' />";
        });
        $('.bubble').css({"left": e.clientX, "top": e.clientY});
    });

});