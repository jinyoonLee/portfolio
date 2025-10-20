//! section-main
gsap.to(".clouds.left img", {
    scale: 2.1,         // 살짝 커졌다가
    duration: 3,        // 3초에 한 번씩
    ease: "sine.inOut", // 자연스러운 리듬
    repeat: -1,         // 무한 반복
    yoyo: true          // 다시 줄어듦
})

gsap.to(".clouds.right img", {
    scale: 2.1,
    duration: 3,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    delay: 1.5          // 왼쪽 구름보다 1.5초 늦게 시작 → 번갈아 움직이는 효과
})

gsap.registerPlugin(ScrollTrigger);

//! 진행바
if (window.innerWidth >= 768) {
    const progressEl = document.querySelector(".parallax__progress progress")
    let current = 0;
    
    function getScrollProgress() {
        const scrollTop = window.scrollY || window.pageYOffset;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        return scrollTop / scrollHeight;
    }
    
    function animateProgress() {
        const target = getScrollProgress() * 100;
        current += (target - current) * 0.1; // lerp (0.1~0.2 사이로 조절 가능)
        progressEl.value = current;
        requestAnimationFrame(animateProgress);
    }
    
    animateProgress();
}

// pin, absolute 영역이 많은 경우엔 반드시 refresh
window.addEventListener("load", () => ScrollTrigger.refresh())
window.addEventListener("resize", () => ScrollTrigger.refresh())

//! 배경색 전환
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-main",
        start: "top top",
        end: "+=3000",
        scrub: 2,
        pin: true,
    }
})

// 구름사라지며 배경색 화이트
tl.to(".clouds.right", {
    autoAlpha : 0,
    right: "-500"
}, "a")

tl.to(".section-main", {
    autoAlpha : 1
}, "a")

tl.to(".clouds.left", {
    autoAlpha : 0,
    left: "-500"
}, "a")

tl.to(".section-main", {
    backgroundColor: "#fff",
    ease: "power2.out"
}, "a")

// div 축소
tl.to(".section-main div", {
    scale: 0.9,
    ease: "power2.out"
}, "b")

// body 배경색 & p 컬러
tl.to(".section-main", {
    backgroundColor: "#000",
    ease: "power2.out"
}, "b")

tl.to(".section-main p", {
    color: "#fff",
    ease: "power2.out"
}, "b")

//! section-about-wrap
if (window.innerWidth >= 768) {
    const secAbout = gsap.timeline({
        scrollTrigger: {
            trigger: ".about-wrap",
            start: "top top",
            end: "+=2000",
            scrub: true,
            pin: true
        }
    })


    secAbout.fromTo(".about-intro",
        { y: 100, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 1 }
    )
    .to(".about-intro",
        { y: -100, autoAlpha: 0, duration: 1 },
        "+=2"
    )
    .fromTo(".about-work",
        { yPercent: 100, autoAlpha: 0 },
        { yPercent: 0, autoAlpha: 1, duration: 1 }
    )
    .to(".about-work",
        { yPercent: 0, autoAlpha: 1, duration: 1 },
        "+=2"
    )
}

//! section-work h2
if (window.innerWidth >= 450) {
    gsap.from(".section-work h2", {
        scale: 4.5,
        duration: 2,
        x: 0,
        y: 0,
        transformOrigin: "left center",
        scrollTrigger: {
            trigger: ".section-work h2",
            start: "top 40%",
            end: "bottom top",
            scrub: true,
            onEnter: () => {
                gsap.to("body", { backgroundColor: "#f3f2f6", duration: 0.5, ease: "power2.out" })
                gsap.to(".section-work h2", { color: "#000000", duration: 0.5, ease: "power2.out" })
            },
            onLeaveBack: () => {
                gsap.to("body", { backgroundColor: "#000000", duration: 0.5, ease: "power2.out" })
                gsap.to(".section-work h2", { color: "#f3f2f6", duration: 0.5, ease: "power2.out" })
            },
        },
    })
}

//! section-work article
if (window.innerWidth >= 768) {
    const panels = gsap.utils.toArray(".work")
    
    panels.forEach((panel, i) => {
        const media = panel.querySelector(".work-media")
        const content = panel.querySelector(".work-content")
    
        gsap.timeline({
            scrollTrigger: {
                trigger: panel,
                start: "top top",
                end: () => i === panels.length - 1
                    ? panel.offsetTop + panel.offsetHeight + window.innerHeight
                    : panel.offsetTop + panel.offsetHeight,
                scrub: 1,
                pin: true,
                pinSpacing: false,
                onEnter: () => panel.classList.add("active"),
                onLeave: () => panel.classList.remove("active"),
                onEnterBack: () => panel.classList.add("active"),
                onLeaveBack: () => panel.classList.remove("active")
            }
        })
        // work-media: 왼쪽 -> 중앙
        .fromTo(media,
            { x: "-100vw", autoAlpha: 0 },
            { x: "0", autoAlpha: 1, duration: 1, ease: "power2.out" }, "a"
        )
        // 중앙에서 잠시 머무르기
        .to(media, 
            { x: "0", autoAlpha: 1, duration: 1 }, "c")
        // 중앙 -> 오른쪽
        .to(media,
            { x: "100vw", autoAlpha: 0, duration: 1, ease: "power2.in" }, "b"
        )
    
        // work-content: 오른쪽 -> 중앙
        .fromTo(content,
            { x: "100vw", autoAlpha: 0 },
            { x: "0", autoAlpha: 1, duration: 1, ease: "power2.out" }, "a")
         // 중앙에서 머무름
            .to(content,
            { x: "0", autoAlpha: 1, duration: 1 }, "c")
        // 중앙 -> 왼쪽
        .to(content,
            { x: "-100vw", autoAlpha: 0, duration: 1, ease: "power2.in" }, "b")
    })
}

//! project h2 x값
if (window.innerWidth >= 768) {
    // h2 위치 계산
    const h2 = document.querySelector(".section-work h2");
    const rect = h2.getBoundingClientRect();
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    const h2X = rect.left + scrollLeft;

    // emptyBox 모두 선택
    const emptyBoxes = document.querySelectorAll(".emptyBox");

    // 초기 적용
    emptyBoxes.forEach(box => {
        box.style.width = `${h2X}px`;
    })

    // 함수: resize/scroll 시 갱신
    function updateEmptyBoxWidth() {
        const rect = h2.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const newWidth = rect.left + scrollLeft + 32; // +32 유지

        emptyBoxes.forEach(box => {
            box.style.width = `${newWidth}px`;
        })
    }

    // 이벤트
    window.addEventListener("resize", updateEmptyBoxWidth);
    window.addEventListener("scroll", updateEmptyBoxWidth);

    // 초기 계산
    updateEmptyBoxWidth()
}

//! project slide 가로스크롤
if (window.innerWidth >= 768) {
    const slideInner = document.querySelector('.projects')
    
    gsap.to(slideInner, {
      x: () => -(slideInner.scrollWidth - window.innerWidth) - 80, // 끝까지 이동
        ease: "none",
        scrollTrigger: {
            trigger: ".section-project",
            start: "top top",
            end: () => "+=" + (slideInner.scrollWidth - window.innerWidth + 200),
            scrub: 1.5,
            pin: true,
            invalidateOnRefresh: true,
        }
    })
    
    window.addEventListener("resize", () => ScrollTrigger.refresh())
}

//! section-contact
const targets = gsap.utils.toArray(".split");

targets.forEach((target) => {
    let SplitClient = new SplitType(target, { type: "chars" });
    let chars = SplitClient.chars;

    gsap.from(chars, {
        yPercent: -100,
        autoAlpha: 0,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: {
            amount: 1,
            from: "random"
        },
        scrollTrigger: {
            trigger: ".section-contact",
            start: "top center",
            end: "bottom bottom",
        }
    })
})

//! 모바일용
if (window.innerWidth < 768) {
    const targets = [
        ".work-content",
        ".work-media",
        ".about-intro",
        ".about-work"
    ]

    targets.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add("reveal", "reveal-BTT");
        })
    })
}

if (window.innerWidth < 480) {
    //! 배경색 전환
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".section-project",
            start: "top top",
            end: "bottom bottom",
        }
    })
    tl.to("body", {
        backgroundColor: "#fff",
        ease: "power2.out"
    })
}