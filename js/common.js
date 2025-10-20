gsap.registerPlugin(ScrollTrigger);

//! about-track
const hide = (item) => {
    gsap.set(item, {autoAlpha: 0})
}

const animate = (item) => {
    let x = 0;
    let y = 0;
    let delay = item.dataset.delay;

    if(item.classList.contains("reveal-LTR")){
        x = -200;
        y = 0;
    } else if(item.classList.contains("reveal-BTT")){
        x = 0;
        y = 200;
    } else if(item.classList.contains("reveal-TTB")){
        x = 0;
        y = -200;
    } else {
        x = 200;
        y = 0;
    }

    gsap.fromTo(item, 
        {autoAlpha: 0, x: x, y: y}, 
        {autoAlpha: 1, x: 0, y: 0, duration: 2, delay: delay, overwrite: "auto", ease: "expo"}
    )
}

gsap.utils.toArray(".reveal").forEach((item) => {
    hide(item)

    ScrollTrigger.create({
        trigger: item,
        onEnter: () => {animate(item)}, 
    })
})

//! 탑버튼
$(document).ready(function(){
    scrollEvent(".btnTop");
    scrollEvent(".btnHome");
})
function scrollEvent(target){
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top>80){
            $(target).addClass("scroll");
        }else {
            $(target).removeClass("scroll");
        }
    })
}