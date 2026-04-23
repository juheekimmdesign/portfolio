/**
 * GitHub Repository Phishing Alert Appeal & Project Verification
이 페이지는 깃허브에서 발생한 피싱 경고 오탐지(False Positive)를 해명하고, 해당 코드가 순수한 학습 및 포트폴리오용임을 증명하기 위해 작성되었습니다.
 * PROJECT: Portfolio Prototype
 * WARNING: This script does not process real transactions or user credentials.
 * All functions are for demonstration purposes only.
 */


// index.js


// 1. 그래픽 영역 부모안 a(1)를 클릭 시(href#처리)
// 2. 클릭한 a안에 이미지 경로를 인식(저장)
// 3. 숨긴 팝업(2)을 보이게 하면서
// 4. 팝업안에 이미지 경로에 클릭한 a의 경로를 대입
// 5. 팝업 영역 또는 팝업 안 X버튼(3) 클릭시
// 6. 팝업 숨기기
const graphic_project_a = document.querySelectorAll('.graphic_container a');
const graphic_popup = document.querySelector('.graphic_popup_bg');
const graphic_popup_close = graphic_popup.querySelector('#close');
console.log(graphic_project_a, graphic_popup, graphic_popup_close);

// children:자식, prentNode:부모
console.log(graphic_project_a[0].children[0].src);
console.log(graphic_project_a[1].children[0].src);
console.log(graphic_popup.children[0].children[1].src);
console.log(graphic_popup_close.parentNode.parentNode.parentNode);

graphic_project_a[0].addEventListener('click', function(e){graphic_func(e, 0, 40, 65)});
graphic_project_a[1].addEventListener('click', function(e){graphic_func(e, 1, 25)});
graphic_project_a[2].addEventListener('click', function(e){graphic_func(e, 2, 25, 95)});
graphic_project_a[3].addEventListener('click', function(e){graphic_func(e, 3, 25, 95)});
graphic_project_a[4].addEventListener('click', function(e){graphic_func(e, 4, 25, 95)});
graphic_project_a[5].addEventListener('click', function(e){graphic_func(e, 5)});
graphic_project_a[6].addEventListener('click', function(e){graphic_func(e, 6)});
graphic_project_a[7].addEventListener('click', function(e){graphic_func(e, 7)});
graphic_project_a[8].addEventListener('click', function(e){graphic_func(e, 8)});
graphic_project_a[9].addEventListener('click', function(e){graphic_func(e, 9)});

function graphic_func(event, index, w=28, h=60){
    event.preventDefault();//a태그의 href 기본기능 막기함수
    // console.log('클릭테스트');
    let aSrc = graphic_project_a[index].children[0].src;//2
    graphic_popup.style.display = 'block';//3
    graphic_popup.children[0].children[1].src = aSrc;//4
    // 실행 그래픽이미지에 맞는 비율로 팝업 비율 조정하기
    graphic_popup.children[0].style.width = w +'%';
    graphic_popup.children[0].style.height = h +'vh';
    //팝업이 실행됐을 때 뒤쪽 바디의 전체 스크롤을 막기
    document.body.style.overflow = 'hidden';
}


// graphic_project_a[0].addEventListener('click', function(e){//1
//     e.preventDefault();//a태그의 href 기본기능 막기함수
//     // console.log('클릭테스트');
//     let aSrc = graphic_project_a[0].children[0].src;//2
//     graphic_popup.style.display = 'block';//3
//     graphic_popup.children[0].children[1].src = aSrc;//4
//     // 실행 그래픽이미지에 맞는 비율로 팝업 비율 조정하기
//     graphic_popup.children[0].style.width = '40%'
//     graphic_popup.children[0].style.height = '65vh'
//     //팝업이 실행됐을 때 뒤쪽 바디의 전체 스크롤을 막기
//     document.body.style.overflow = 'hidden';
// })

// graphic_project_a[1].addEventListener('click', function(e){
//     e.preventDefault();
//     let aSrc = graphic_project_a[1].children[0].src;
//     graphic_popup.style.display = 'block';
//     graphic_popup.children[0].children[1].src = aSrc;
//     graphic_popup.children[0].style.width = '25%';
//     graphic_popup.children[0].style.height = '90vh';
//     document.body.style.overflow = 'hidden';
// })
// graphic_project_a[2].addEventListener('click', function(e){
//     e.preventDefault();
//     let aSrc = graphic_project_a[2].children[0].src;
//     graphic_popup.style.display = 'block';
//     graphic_popup.children[0].children[1].src = aSrc;
//     graphic_popup.children[0].style.width = '25%';
//     graphic_popup.children[0].style.height = '90vh';
//     document.body.style.overflow = 'hidden';
// })
// graphic_project_a[3].addEventListener('click', function(e){
//     e.preventDefault();
//     let aSrc = graphic_project_a[3].children[0].src;
//     graphic_popup.style.display = 'block';
//     graphic_popup.children[0].children[1].src = aSrc;
//     graphic_popup.children[0].style.width = '25%';
//     graphic_popup.children[0].style.height = '90vh';
//     document.body.style.overflow = 'hidden';
// })
// graphic_project_a[4].addEventListener('click', function(e){
//     e.preventDefault();
//     let aSrc = graphic_project_a[4].children[0].src;
//     graphic_popup.style.display = 'block';
//     graphic_popup.children[0].children[1].src = aSrc;
//     graphic_popup.children[0].style.width = '25%';
//     graphic_popup.children[0].style.height = '90vh';
//     document.body.style.overflow = 'hidden';
// })
// graphic_project_a[5].addEventListener('click', function(e){
//     e.preventDefault();
//     let aSrc = graphic_project_a[5].children[0].src;
//     graphic_popup.style.display = 'block';
//     graphic_popup.children[0].children[1].src = aSrc;
//     graphic_popup.children[0].style.width = '25%';
//     graphic_popup.children[0].style.height = '90vh';
//     document.body.style.overflow = 'hidden';
// })
// graphic_project_a[6].addEventListener('click', function(e){
//     e.preventDefault();
//     let aSrc = graphic_project_a[6].children[0].src;
//     graphic_popup.style.display = 'block';
//     graphic_popup.children[0].children[1].src = aSrc;
//     graphic_popup.children[0].style.width = '25%';
//     graphic_popup.children[0].style.height = '90vh';
//     document.body.style.overflow = 'hidden';
// })
// graphic_project_a[7].addEventListener('click', function(e){
//     e.preventDefault();
//     let aSrc = graphic_project_a[7].children[0].src;
//     graphic_popup.style.display = 'block';
//     graphic_popup.children[0].children[1].src = aSrc;
//     graphic_popup.children[0].style.width = '25%';
//     graphic_popup.children[0].style.height = '90vh';
//     document.body.style.overflow = 'hidden';
// })
// graphic_project_a[8].addEventListener('click', function(e){
//     e.preventDefault();
//     let aSrc = graphic_project_a[8].children[0].src;
//     graphic_popup.style.display = 'block';
//     graphic_popup.children[0].children[1].src = aSrc;
//     graphic_popup.children[0].style.width = '25%';
//     graphic_popup.children[0].style.height = '90vh';
//     document.body.style.overflow = 'hidden';
// })
// graphic_project_a[9].addEventListener('click', function(e){
//     e.preventDefault();
//     let aSrc = graphic_project_a[9].children[0].src;
//     graphic_popup.style.display = 'block';
//     graphic_popup.children[0].children[1].src = aSrc;
//     graphic_popup.children[0].style.width = '25%';
//     graphic_popup.children[0].style.height = '90vh';
//     document.body.style.overflow = 'hidden';
// })

graphic_popup_close.addEventListener('click', function(){//5
    graphic_popup_close.parentNode.parentNode.parentNode.style.display = 'none';//6
    document.body.style.overflow = 'auto';
})
