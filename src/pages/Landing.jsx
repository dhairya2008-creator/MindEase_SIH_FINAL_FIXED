import React from "react";
import {ArrowRight,ShieldCheck,Sparkles,Activity,LockKeyhole} from "lucide-react";
import Logo from "../components/Logo";
export default function Landing({goLogin}){
 return <div className="landing">
  <nav className="landingNav"><Logo/><div className="landingLinks"><a href="#features">Features</a><a href="#how">How it works</a><button className="btn btnLight" onClick={goLogin}>Demo login</button></div></nav>
  <section className="landingHero"><div className="heroCopy"><div className="badge"><Sparkles size={14}/> SIH26094 • AI-powered care</div><h1>Understand distress <span>earlier.</span><br/>Support people <span>sooner.</span></h1><p>MindEase is a privacy-first prototype for dynamic mental health monitoring and distress prediction, designed to help route people toward timely human support.</p><div className="heroBtns"><button className="btn btnPrimary" onClick={goLogin}>Explore demo <ArrowRight size={17}/></button><a className="textLink" href="#how">See how it works ↓</a></div><div className="trustRow"><span><ShieldCheck size={16}/> Privacy-aware</span><span><LockKeyhole size={16}/> Human review</span><span><Activity size={16}/> Trend monitoring</span></div></div>
  <div className="heroVisual"><div className="glowOrb"/><div className="floatingCard cardA"><small>Current distress</small><b>62%</b><span>Moderate</span></div><div className="floatingCard cardB"><small>AI confidence</small><b>87%</b><div className="miniProgress"><i/></div></div><div className="brainCircle">M<span>✦</span></div></div></section>
  <section id="features" className="featureSection"><div className="sectionHead"><span className="kicker">Built for meaningful intervention</span><h2>From signals to support</h2></div><div className="featureGrid">{[
   ["01","Dynamic monitoring","Track changes over time instead of relying on a single check-in."],
   ["02","Explainable insights","Show the factors contributing to a prediction so decisions stay understandable."],
   ["03","Human-first support","Elevated patterns can be routed toward trained human review."]
  ].map(x=><div className="featureCard" key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div></section>
  <section id="how" className="howSection"><div><span className="kicker">How it works</span><h2>A simple monitoring loop.</h2></div><div className="steps">{["Consent & check-in","Signal analysis","Distress prediction","Human support"].map((x,i)=><div className="step" key={x}><b>0{i+1}</b><strong>{x}</strong>{i<3&&<ArrowRight/>}</div>)}</div></section>
  <footer>MindEase • SIH prototype <span>Not a medical diagnosis</span></footer>
 </div>
}