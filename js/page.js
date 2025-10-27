//! 배경색 미리 설정
document.body.style.backgroundColor = "#f3f2f6";

//! 리스트 열기
$(document).ready(function(){
    listControl(".work-list .list-title")
})

function listControl(listBtn) {
    $(document).on("click", listBtn, function () {
        $(this).toggleClass("active")
    })
}

//! Splide 슬라이드
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide('.splide', {
        perPage: 3,
        focus  : 0,
        omitEnd: true,
        padding: '5rem',
        pagination: false,

        // --- 반응형 설정을 위한 Breakpoints ---
        breakpoints: {
            // 768px 이하 (태블릿 가로 또는 세로)
            768: {
                perPage: 2, 
                padding: '30px', 
            },
            // 480px 이하 (모바일)
            480: {
                perPage: 1, 
                padding: '1rem', 
                // perPage가 1일 때는 focus, omitEnd, padding 설정을 제거하거나 변경하는 것이 좋습니다.
                omitEnd: false,
            }
        }
    }).mount()
})
