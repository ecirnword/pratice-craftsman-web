$(document).ready(function() {
    // 메뉴 슬라이드 효과
    $('.menu > ul > li').hover(
        function() {
            $(this).find('.submenu').slideDown(200);
        },
        function() {
            $(this).find('.submenu').slideUp(200);
        }
    );

    // 슬라이드 쇼
    let current = 0;
    const $slides = $('.slide img');
    const slideCount = $slides.length;

    function slideShow() {
        let next = (current + 1) % slideCount;
        
        $slides.eq(current).animate({left: '-100%'}, 1000, function() {
            $(this).css({left: '100%'}); // 애니메이션 후 위치 초기화
        });
        $slides.eq(next).css({left: '100%'}).animate({left: '0'}, 1000);
        
        current = next;
    }

    // 페이지 로드 시 슬라이드 자동 시작
    setInterval(slideShow, 3000);
});