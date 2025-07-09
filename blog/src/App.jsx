/*  eslint-disable  */

import { useState } from 'react';
import './App.css'

function App() {
  let [listTitle, setListTitle] = useState(['HTML/CSS', 'JavaScript', 'React']);
  let [good, setGood] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [inputVal, setInputVal] = useState('');
    
  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>Tech BLog</h4>
      </div>
      {
        listTitle.map(function(a ,i){
          return(
            <div className='list' key={i}>
              <h4 onClick={ () => {setModal(true); setTitle(i)} }>{ listTitle[i] }
                <span onClick={ (e) => { e.stopPropagation(); 
                  const newGood = [...good];
                  newGood[i] += 1;
                  setGood(newGood);
                } }>👍</span> { good[i] } <button onClick={ (e) => {
                  e.stopPropagation();
                  const newList = listTitle.filter((_, idx) => idx !== i);
                  setListTitle(newList);
                  } }>삭제</button>
              </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

      <input value={inputVal} onChange={ (e) => {setInputVal(e.target.value)} }/>
      <button onClick={ () => {
        const newList = [inputVal, ...listTitle];
        setListTitle(newList);
        const newInput = '';
        setInputVal(newInput);
      }}>글추가</button>

      {
        modal == true ? <Modal listTitle={listTitle} title={title}/> : null    
      }
      
    </div>
  )
}

function Modal(props){
  return(
    <div className='modal'>
      <h4>{props.listTitle[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}

export default App