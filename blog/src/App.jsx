/*  eslint-disable  */

import { useState } from 'react';
import './App.css'

function App() {

  let post = '강남 우동 맛집';
  let [listTitle, listTitleChange] = useState(['남자코드 추천', '강남 우동맛집', '파이썬독학']);
  let [good, goodChange] = useState([0,0,0]);
  let [modal, setModal] = useState(false);

  function clickListTitle(){
    let copy = [...listTitle];
    copy[0] = '여자코트 추천';
    listTitleChange( copy );
  }

  function listTitleSort(){
    let copy = [...listTitle];
    copy.sort();
    listTitleChange(copy);
  }

  function modalOnOff(){
    setModal(prev => !prev);
  }
    
  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>ReactBLog</h4>
      </div>
      <button onClick={ listTitleSort }>가나다순</button>
      <button onClick={ clickListTitle }>👀</button>

      {
        listTitle.map(function(a ,i){
          return(
            <div className='list' key={i}>
              <h4>{ listTitle[i] }
                <span onClick={ ( ) => { 
                  const newGood = [...good];
                  newGood[i] += 1;
                  goodChange(newGood);
                } }>👍</span> { good[i] }
              </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }
      {
        modal == true ? <Modal/> : null    
      }
      
      
    </div>
  )
}

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
