/* 바닐라 자바를 사용하여 */
/* 
    1. HTML문서를 선택한다.
        document
    2. HTML문서에서 특정요소를 선택한다
        .querySelctor("CSS선택자 방식");
                        - div:nth-child(2) 이런거 다 됨.
                        - 단 id속성으로만 특정 태그를 선택한다면 .getElementById("id속성값") 으로도 가능하나 #기호는 사용하지 않도록하자!
    3. 출력방식 지정
        1) 요소의 내용에 택스트만 입력하여 출력함
            - .innerText = "출력할 내용";
        2) 요소의 내용에 html태그와 텍스트를 함께 출력함
            - .innerHTML = "<태그>내용</태그>"
*/
document.querySelector("#test").innerText = "ok";
document.querySelector("#divTag").innerHTML = "<h1>innerHTML을 사용한 제목</h1>";