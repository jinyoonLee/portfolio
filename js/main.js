gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.to-top1').forEach(el => {
    gsap.from(el, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        delay: 0,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse',
        }
    });
});
gsap.utils.toArray('.to-top2').forEach(el => {
    gsap.from(el, {
        y: 100,
        opacity: 0,
        duration: 0.9,
        delay: 0.1,
        ease: 'back.out(1)',
        scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse',
        }
    });
});
gsap.utils.toArray('.to-top3').forEach(el => {
    gsap.from(el, {
        y: 120,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse',
        }
    });
});
gsap.utils.toArray('.to-top4').forEach(el => {
    gsap.from(el, {
        y: 140,
        opacity: 0,
        duration: 1.1,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse',
        }
    });
});

ScrollTrigger.matchMedia({
    // 모바일
    "(max-width: 767px)": function() {
        gsap.utils.toArray('.to-left').forEach(el => {
            gsap.from(el, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: 'back.out(1)',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                    toggleActions: 'play reverse play reverse',
                }
            });
        });
    },
    // 데스크탑
    "(min-width: 768px)": function() {
        gsap.utils.toArray('.to-left').forEach(el => {
            gsap.from(el, {
                x: 30,
                opacity: 0,
                duration: 1.2,
                ease: 'back.out(1)',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',
                    toggleActions: 'play reverse play reverse',
                }
            });
        });
    }
});

gsap.utils.toArray('.to-right').forEach(el => {
    gsap.from(el, {
        x: -30,
        opacity: 0,
        duration: 0.2,
        ease: 'power3.out',
        delay: 0.4,
        scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse',
        }
    });
});

gsap.utils.toArray('.work').forEach(work => {
    const media = work.querySelector('.work-media');
    const content = work.querySelector('.work-content');

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: work,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse',
        }
    });

    tl.from(media, {
        y: 120,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out'
    })
    .from(content, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1)'
    }, "-=0.55");
});

const bgColors = {
    white: "#fff",
    bg: "#ebe4d4",
};

ScrollTrigger.create({
    trigger: ".section-about",
    start: "top 50%",
    end: "bottom 80%",
    onEnter: () => gsap.to(".section-main", { backgroundColor: bgColors.white, duration: 1 }),
    onLeave: () => gsap.to(".section-main", { backgroundColor: bgColors.bg, duration: 0.5 }),
    onEnterBack: () => gsap.to(".section-main", { backgroundColor: bgColors.white, duration: 0.5 }),
    onLeaveBack: () => gsap.to(".section-main", { backgroundColor: bgColors.bg, duration: 0.5 })
});

ScrollTrigger.create({
    trigger: ".section-work",
    start: "top 60%",
    end: "bottom 80%",
    marker: true,
    onEnter: () => gsap.to(".section-work", { backgroundColor: bgColors.bg, duration: 2 }),
    onEnterBack: () => gsap.to(".section-work", { backgroundColor: bgColors.bg, duration: 0.5 }),
    onLeaveBack: () => gsap.to(".section-work", { backgroundColor: bgColors.white, duration: 0.5 })
});


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