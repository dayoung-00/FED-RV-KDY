// JS1.기본사용법 JS ////////////

console.log("JS1.기본사용법 시작~!");

//함수는 코드를 저장하는 구역임
//함수명은 코드저장소의 주소다!
//함수의 호출은 함수명()

/*************************************  
    함수명 : 김비서나와라
    기능 : 김비서박스에 각종변경하기

*************************************/
function 김비서나와라() {
  //1. 함수호출확인!
  console.log("김비서 나왔다~!");

  //2. HTML넣기 : 이벤트 속성에서 인라인 코드로
  // 이미 실행함(이미지 넣기)

  //3. CSS변경하기//////
  //대상선졍: .pbox
  //클래스는 여러개 사용할 수 있으므로
  //HTML컬랙션 집합에 수집되어 사용됨!
  //getElementsByClassName(클래스명)
  //0,1,2,...이런 순서로 수집함
  //하나뿐이어도  0번째라고 해야함!

  "클래스선택 HTML컬랙션 객체",
  console.log(document.getElementsByClassName("pbox"),
  "요소선택 HTML 컬랙션 객체",
  document.getElementsByClassName("span"),
  "아이디선택 HTML 요소 객체",
  document.getElementsByClassName("name")
);

  //변수의 대상 할당하기!
  var 나변수 = document.getElementsByClassName("pbox").item(0);

  //변수는 특정메모리 공간이다!
  //선언과 동시에 할당하여 값을 저장함
  //변수는 여기를 "봐!" var로 선언
  //var 변수명 = 값;

  //변수를 사용하는 이유?
  //- 변수는 재사용
  //- 변수는 저장 메모리공간 주소
  //- 변수는 따옴표안쓴 문자
  //- 변수는 띄어쓰기 없음
  //- 변수는 호출시 값 출력
  //- 변수는 재할당시 다른값 덮어씀
  //- 변수는 한 번만 선언 var(let/const)
  //- var는 variable(변수)라는 단어에서 나온말!
  //-

  /////////변경내용/////////////////////
  //3-1. 배경이미지 넣기
  나변수.style.background = "url(./images/kimbs.jpg) no-repeat top/cover";

  //.pbox중 첫번째(0)를 선택함!
  //item(순번)

  //3-2. 글자색 변경하기
  나변수.style.color = "lime";

  //3-3. 글자크기 변경하기
  나변수.style.fontSize = "40px";

  //3-4. 글자그림자
  나변수.style.textShadow = "2px 2px 2px #000";

  //3-5. 트랜지션
  //백틱은 줄바꿈 자유로움!
  나변수.style.transition = `
  2s,
   top 4s 2s,
   left 2s 2s,
   rotate 3s 2s,
   translate 1s 2s,
   scale 2s 6s
   `;

  //3-6. 크기변경
  나변수.style.width = "600px";
  나변수.style.height = "600px";

  //3-7. 줄간격
  나변수.style.lineHeight = "100px";

  //3-8. 원만들기
  나변수.style.borderRadius = "50%";

  //3-9. 중앙이동을 위한 top, left값 변경
  나변수.style.top = "50%";
  나변수.style.left = "50%";

  //3-10. 트랜스폼 변경 : 중앙이동,360도 회전,스케일 변경
  나변수.style.translate = "-50% -50%";
  나변수.style.rotate = "360deg";
  나변수.style.scale = "1.3";
  //트랜스폼 속성 한번에 쓰기
  // 나변수.style.transform = "translate(-50%, -50%) rotate(360deg) scale(1.3)";
  
  
  //3-11. 전체 배경색 바꾸기
  //대상 : body
  //js에서 body는 특별히 취급하여
  //docyment.body로 선택
  var 나바디=document.body;
  나바디.style.backgroundColor = "lightblue";
//   나바디.style.backgroundColor="linear-gradient(45deg,lightgreen,hotpink,lightblue";
  나바디.style.transition = "3s 5s";

/*********
 [JS DOM의 요소 선택 메서드]
 1. id 선택 메서드:
 -> getElementById("아이디명")
 document.getElementById("id명");

 2. class 선택 메서드:
 -> getELEMEBTSbyClassName("클래스명")
document.getElementByclassName("클래스명");
((하위속성))
length -클래스개수
((순번선택 하위 메서드))
item(순번) - 구체적인 순번요소 선택(0부터 서식)


3. tag 선택 메서드:
 -> getELEMEBTSbyClassName("태그명")
document.getElementByclassName("tag명");
((하위속성))
length -요소개수
((순번선택 하위 메서드))
item(순번) - 구체적인 순번요소 선택(0부터 서식)
 

[ HTML 컬렉션은 무엇인가? ]
            - DOM을 통하여 선택된 다중선택요소인
            class/tag 를 메모리상 수집하는 공간
            - 상세 선택시 순번선택 메서드인 item()을
            사용하여 선택한다
            - 배열처럼 순서대로 메모리를 사용하기 때문에
            '유사배열'이라고 불리우며 배열처럼 대괄호순번
            을 사용하여 선택할 수 있다!
            - document
            .getElementsByClassName(클래스명).item(0)
            -> 아래처럼 점안찍고 대괄호 순번사용가능!
            .getElementsByClassName(클래스명)[0]

            - 컬렉션 전체 개수정보는 length 속성으로 
            알 수 있다!

            참고) 
            https://www.w3schools.com/js/js_htmldom_collections.asp

*********/


} ///////////김비서나와라 함수 /////////////



/*************************************** 
함수명: 맘대로해라
기능:선택요소와 style과 html을 변경함

***************************************/

function 맘대로해라(헐,헉스) {
  //헐-.원이야 순번 /헉스 - 그림제목
  //1. 함수호출확인
  console.log("니맘대로하세요!",헐,헉스);

  //2. 대상선정 : .박스야 .원이야
  //해당요소의 순번은 헐 변수에 들어있음!
  
  var 아파트 = document.querySelectorAll('.박스야 .원이야')[헐];
  //->아래와 같이 써도 같은것임!
//  document.querySelectorAll('.박스야 .원이야').item[헐];

  /**********************************  
[JSDOM의 특별한 선택 매서드 2가지] 
1. queryselector(css선택지)-하나만선택
2. querySelectorAll(css선택지)-여러개 선택
-> 2번방식은 htmlcollection을 변환한다!
-> 따라서 length와 item(순번)/[순번]을 사용함!
  
  **********************************/
  // document.getElementsByClassName("박스야").item(0)
  // .getElementsByClassName("원이야").item(헐);

  console.log("대상요소",아파트);


  //3. 변경내용 : 트랜지션으로 화면 왼쪽하단으로 이동하며
  // 박스에 유튜브 비디오가 나오도록 한다!


//3-1. 트랜지션 설정
아파트.style.transition = "1s ease-in-out,right .5s 1s";

//3-2. 위치이동
아파트.style.top="calc(100% - 200px)";
아파트.style.right="calc(100% - 200px*"+(헐+1)+")";
//순번에 11을 더해서 곱한이유는 right위치를 순서대로 잡기위함!

//3-3. 유튜브 동영상 넣기
아파트.innerHTML= `<iframe id= "my-apt"
src="https://www.youtube.com/embed/8Ebqe2Dbzls?autoplay=1"
allow="autoplay;"></iframe>`;

//3-4. 아이프레임 디자인 넣기: 선택된 아파트 하위 iframe
var 뮤비 = 아파트.querySelector('iframe');
//csstext 속성: 한꺼번에 문자열로 css를 넣을때 사용
//주의: 따로 속성 셋팅할때와 달리 다른 인라인속성을
//덮어써서 지워버리니가 조심하라!
 뮤비.style.cssText = `
    position: absolute;
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  `; 뮤비.style.cssText = `
  position: absolute;
  border: none;
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;


//3-5. class 추가/제거// 
//-> 현재 class "on"때문에 회전애니가 적용됨!
  // 그래서 클릭된 요소는 "on"을 제거한다!
아파트.classList.remove("on");

//자바스크립트를 쉽게 스는 한가지 방법!!
//바로 클래스 넣기/빼기!!!
//클래스 제어 객체: classList
//(1)add(클래스명) : 클래스 추가
//(1)remove(클래스명) : 클래스 제거
//(1)toggle(클래스명) : 클래스 초가/제거




}//////////맘대로해라 함수 ////////////