/*  eslint-disable  */
// 

import { useState } from 'react';
import './App.css'

function App() {

  let post = '강남 우동 맛집';
  let [listTitle, listTitleChange] = useState(['남자코드 추천', '강남 우동맛집', '파이썬독학']);

  //a: 남자 코트 추천, b: state 변경 도와주는 함수
  //Destructuring 문법
  //state는 자동 재렌더링이 된다. 
  //변동성이 낮은 것은 굳이 state로 안써도 됨. ex: 블로그 제목...
  //즉, 자주 바뀌는 것을 state로 적어라!

  let [good, goodChange] = useState(0);
  // 아직 함수를 안쓸거다 -> 함수 부분 안적어도 됨.

  let num = [1, 2];
  // let c = [0];
  // let d = [1];
  let [c, d] = [1, 2];

  function clickGood(){
    goodChange( good + 1 );
  }
  
  function clickListTitle(){
    let copy = [...listTitle];
    // 독립적인 array 사본이 된다.
    // shallow copy or deep copy를 만들어준다 => 독립적인 사본
    // spread operator문법: 괄호를 벗겨주세요~
    copy[0] = '여자코트 추천';
    listTitleChange( copy );
  }
  // 기존 state == 신규 state의 경우 변경 X
  // array/object 특징 => reference data type이기 때문이다.
  // 1. array/object 담은 변수엔 화살표만 저장
  // -> 화살표도 변경을 해주어야 됨.

  function listTitleSort(){
    let copy = [...listTitle];
    copy.sort();
    listTitleChange(copy);
  }

    
  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>ReactBLog</h4>
      </div>
      <button onClick={ listTitleSort }>가나다순</button>
      <button onClick={ clickListTitle }>👀</button>
      <div className='list'>
        <h4>{ listTitle[0] } <span onClick={ clickGood }>👍</span> { good } </h4>
        {/* onClick = { a }, a에는 함수가 들어가야 됨. 함수 만드는 문법 바로 넣어도 가능*/}
        {/* 함수이름, function () { }, () => {} */}
        {/* state는 등호로 변경하면 안됨. */}
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ listTitle[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ listTitle[2] }</h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal/>
      
    </div>
  )
}

{/* */}

// 장점
// 1. 반복적인 html 축약할 때
// 2. 큰 페이지
// 3. 자주 변경되는 것들

// 단점
// 1. state 가져다 쓸 때 문제가 생긴다. -> A함수에 있던 변수는 B함수에서 맘대로 가져다 쓸 수 없음


// fragment 문법
// 의미없는 <div>대신 <></>사용이 가능하다.
// (
//   <>
//     <div>

//     </div>
//     <div>

//     </div>
//   </>
// )

function Modal(){
  return(
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )

}

export default App

