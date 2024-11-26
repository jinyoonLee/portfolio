const textList = document.querySelectorAll('.move');
const currentContent = document.getElementById('currentContent');
const mainImage = document.getElementById('mainImage');

// Update image source
function getImageSrc(step) {
  mainImage.src = `/back_${step}.png`
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

let prevStep = 1; // 이전 step 값을 저장할 변수

function onScroll() {
  const elements = document.querySelectorAll('.move');
  elements.forEach((element) => {
    if (isElementInViewport(element)) {
      const currentStep = parseInt(element.id); 

      if (currentStep !== prevStep) { // step 값이 변경되었을 때만 실행
        getImageSrc(currentStep);
        prevStep = currentStep; // 이전 step 값 업데이트
      }
    }
  });
}

// 스크롤 이벤트 등록
window.addEventListener('scroll', onScroll);

