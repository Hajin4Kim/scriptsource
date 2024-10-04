// tab-button 클릭시 짝 맞춰서 tab-content 보여주기
//클릭 될 때마다 show 클래스 움직이기

// 이벤트 대상 찾아오기
// document.querySelector(".list li:first-child");
// document.querySelector(".list .tab-button:first-child");

const firstLi =  document.querySelector(".list li:nth-child(1)");
const secondLi =  document.querySelector(".list li:nth-child(2)");
const lastLi =  document.querySelector(".list li:nth-child(3)");

// show 클래스명을 부착할 요소 찾아오기
const firstDiv = document.querySelector(".container div:nth-child(2)");
const secondDiv = document.querySelector(".container div:nth-child(3)");
const lastDiv = document.querySelector(".container div:nth-child(4)");

// 이벤트 연결
firstLi.addEventListener("click", () => {
    // firstDiv show클래스명 부착
    firstDiv.classList.add("show");
    // 다른 secondDiv, lastDiv 에 show클래스명 부착제거
    secondDiv.classList.remove("show");
    lastDiv.classList.remove("show");

    // orange 클래스명 부착과 제거
    firstLi.classList.add("orange");
    secondLi.classList.remove("orange");
    lastLi.classList.remove("orange");
});
secondLi.addEventListener("click", () => {
    // secondDiv show클래스명 부착
    secondDiv.classList.add("show");
    // 다른 firstDiv, lastDiv 에 show클래스명 부착제거
    firstDiv.classList.remove("show");
    lastDiv.classList.remove("show");

    // orange 클래스명 부착과 제거
    secondLi.classList.add("orange");
    firstLi.classList.remove("orange");
    lastLi.classList.remove("orange");
});
lastLi.addEventListener("click", () => {
    // lastDiv show클래스명 부착
    lastDiv.classList.add("show");
    // 다른 firstDiv, secondDiv 에 show클래스명 부착제거
    firstDiv.classList.remove("show");
    secondDiv.classList.remove("show");

    // orange 클래스명 부착과 제거
    lastLi.classList.add("orange");
    firstLi.classList.remove("orange");
    secondLi.classList.remove("orange");
});