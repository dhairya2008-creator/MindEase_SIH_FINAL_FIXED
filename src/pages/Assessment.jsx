import React from "react";
import {useState} from "react"; import {Check,Info,ArrowRight} from "lucide-react"; import {predictAssessment} from "../lib/predictor";
const qs=[
 ["How have you been feeling emotionally?",["Very low","Low","Okay","Good"]],
 ["How often have you felt overwhelmed recently?",["Never","Sometimes","Often","Very often"]],
 ["How well have you been sleeping?",["Very poorly","Poorly","Okay","Well"]],
 ["How connected do you feel to supportive people?",["Not at all","A little","Somewhat","Very connected"]]
];
export default function Assessment({onResult}){
 const [answers,setAnswers]=useState({}); const [text,setText]=useState("");
 const choose=(qi,oi)=>setAnswers(a=>({...a,[qi]:oi}));
 return <div className="assessmentPage"><div className="assessmentHead"><div><span className="kicker">PRIVATE CHECK-IN</span><h2>How are things feeling lately?</h2><p>Answer honestly. There are no right or wrong answers.</p></div><span className="pill pillPurple">2–3 min</span></div>
 <div className="consent"><Info size={18}/><span><b>Before you begin:</b> This prototype uses demo processing. In a real system, consent and data-minimization controls would appear here.</span></div>
 <div className="questionList">{qs.map(([q,opts],qi)=><div className="questionCard" key={q}><div className="qNum">0{qi+1}</div><div className="qBody"><b>{q}</b><div className="options">{opts.map((o,oi)=><button className={answers[qi]===oi?"selected":""} key={o} onClick={()=>choose(qi,oi)}>{answers[qi]===oi&&<Check size={14}/>} {o}</button>)}</div></div></div>)}</div>
 <div className="textQuestion"><label>Anything else you want the system to know? <span>(optional)</span></label><textarea value={text} onChange={e=>setText(e.target.value)} placeholder="A few words about how you've been feeling..."/></div>
 <div className="assessmentFooter"><span>{Object.keys(answers).length}/4 answered</span><button className="btn btnPrimary" disabled={Object.keys(answers).length<4} onClick={()=>onResult(predictAssessment(answers))}>Analyze wellbeing <ArrowRight size={16}/></button></div>
 </div>
}