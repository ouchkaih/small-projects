import React, { Component, useState } from "react";
import "./items.css"
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import question_Json from "./data/Json_Data.json"

function Questions  (){
  
  let [index, setIndex] = useState(0)
  const [valide, setValide]=useState([])
  const [score, setScore] = useState(0)
  console.log(question_Json);
  const questions = question_Json;
 const checkAnswer = (userAns)=>{
    if (userAns === questions[index].corect) {
      let obj = { 
        Q: questions[index].question, 
        userAnswer: userAns , 
        answer: questions[index].corect
      };
      setValide([...valide, obj]);
      setIndex(index+1)
      setScore(score+1)
    }else{
        let obj = {
          Q: questions[index].question,
          userAnswer: userAns,
          answer: questions[index].corect
        };
        setValide([...valide, obj]);
        setIndex(index+1)
    }
 }
  
    return (
      <div>
        <div className="d-flex justify-content-center p-5">
          <div className="bg-dark text-light p-5 rounded-4 ">
            {
              index < 4 ? (
                <div className="row">
                  <div className="col-7 ">
                    <h4>
                      Question : {index+ 1}/<span className="question_number">{questions.length}</span>
                    </h4>
                    <div>{questions[index].question}</div>
                  </div>
                  <div className="col-5">
                    <button className="p-2 text-light border border-2 rounded-5 border-light w-100 btn" onClick={()=>checkAnswer(questions[index].answer1)}>
                      {questions[index].answer1}
                    </button>
                    <button className="p-2 border text-light border-2 rounded-5 border-light w-100 btn mt-3" onClick={()=>checkAnswer(questions[index].answer2)}>
                      {questions[index].answer2}
                    </button>
                    <button className="p-2 border text-light border-2 rounded-5 border-light w-100 btn mt-3" onClick={()=>checkAnswer(questions[index].answer3)}>
                      {questions[index].answer3}
                    </button>
                    <button className="p-2 border text-light border-2 rounded-5 border-light w-100 btn mt-3" onClick={()=>checkAnswer(questions[index].answer4)}>
                      {questions[index].answer4}
                    </button>
                    
                  </div>
                </div>
              ):(
                <div>
                
                  <table className="table border  text-light ">
                    <tr>
                      <th className="p-2">Question</th>
                      <th className="p-2">Your Answer</th>
                      <th className="p-2">Corect Answer</th>
                    </tr>
                  {
                    valide.map(item =>(
                      <tr>
                        <td  className="p-2">
                          {item.Q}
                        </td>
                        <td  className="p-2">
                          {item.userAnswer}
                        </td>
                        <td  className="p-2">
                          {item.answer}
                        </td>
                        
                      </tr>
                    ))
                  }
                  </table>
                  <div className="">
                    Score: {score}
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    );
}


export default Questions