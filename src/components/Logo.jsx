import React from "react";
export default function Logo({compact=false}){
 return <div className="logoWrap"><div className="logoMark">M</div>{!compact&&<div><div className="logoText">MindEase</div><div className="logoSub">AI CARE PLATFORM</div></div>}</div>
}