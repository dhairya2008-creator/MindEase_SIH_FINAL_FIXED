import React from "react";
import {useEffect,useState} from "react";
import {LayoutDashboard,BookOpen,MessageCircle,Flower2,Wind,HeartHandshake,Settings,Sun,Moon,Heart,LogOut} from "lucide-react";
import Landing from "./pages/Landing";
import Login from "./pages/Login";

const encouragements=[
 "You don't have to solve everything today. One small step is enough.",
 "You made it to today. That's something worth being proud of.",
 "Take things gently today. Your feelings deserve a little space.",
 "There is no perfect way to have a difficult day. Be kind to yourself.",
 "A quiet moment can be a beginning. You can start again whenever you need.",
 "You are allowed to rest without earning it.",
 "Whatever today feels like, you don't have to carry it all at once."
];

const nav=[
 ["home","Home",LayoutDashboard],["journal","Journal",BookOpen],["chat","Talk to MindEase",MessageCircle],
 ["garden","Digital Garden",Flower2],["panic","Calm space",Wind],["safety","Safety",HeartHandshake],["settings","Settings",Settings]
];

function Garden({mood,onMood}){
 const [stage,setStage]=useState(mood||"new");
 const states={
  happy:{
    label:"Sunshine day",
    emoji:"☀️",
    sky:"sunny",
    flowers:["🌻","🌼"]
  },

  sad:{
    label:"A rainy day",
    emoji:"🌧️",
    sky:"rain",
    flowers:["🌱","🌿"]
  },

  heartbroken:{
    label:"Be gentle with your heart",
    emoji:"💗",
    sky:"broken",
    flowers:["🥀","🍃"]
  },

  anxious:{
    label:"Slow breaths, little by little",
    emoji:"🌬️",
    sky:"breeze",
    flowers:["🌿","🌱"]
  },

  new:{
    label:"Spring — a new story",
    emoji:"🌸",
    sky:"spring",
    flowers:["🌱","🌸"]
  }
};
 const s=states[stage]||states.new;
 useEffect(()=>{if(mood)setStage(mood)},[mood]);
 return <section className={"gardenCard garden-"+s.sky}>
 <div className={`gardenScene garden-${s.sky}`}>

  <div className="gardenMoon"></div>

  <div className="gardenGlow glow1"></div>
  <div className="gardenGlow glow2"></div>

  <div className="gardenHills hill1"></div>
  <div className="gardenHills hill2"></div>

  <div className="gardenPond">
    <div className="pondRipple r1"></div>
    <div className="pondRipple r2"></div>
    <div className="pondRipple r3"></div>
  </div>

  <div className="gardenLantern">🏮</div>

  <div className="firefly fly1">✦</div>
  <div className="firefly fly2">✦</div>
  <div className="firefly fly3">✦</div>
  <div className="firefly fly4">✦</div>

  <div className="gardenLeaf leaf1">🌿</div>
  <div className="gardenLeaf leaf2">🌿</div>

  {s.flowers.map((f,i)=>(
    <div key={i} className={`gardenFlower flower${i}`}>
      {f}
    </div>
  ))}

  {stage==="sad" && (
    <div className="gardenRain">
      <span>•</span><span>•</span><span>•</span>
      <span>•</span><span>•</span><span>•</span>
    </div>
  )}

</div>
  <div className="gardenScene">
   <div className="sun">☀</div><div className="cloud c1">☁</div><div className="cloud c2">☁</div>
   {stage==="sad"&&<div className="rain">⋮ ⋮ ⋮ ⋮ ⋮ ⋮ ⋮ ⋮ ⋮ ⋮</div>}
   <div className="ground"><div className="soil"></div>{s.flowers.map((f,i)=><div key={i} className={"flower f"+i}><span>{f}</span><i></i></div>)}</div>
  </div>
 </section>
}

function Home({setPage,mood,setMood}){
 const today=new Date().getDate();
 const message=encouragements[today%encouragements.length];
 const [selected,setSelected]=useState(mood||"new");
 const moods=[["happy","😊","Happy"],["okay","🙂","Okay"],["sad","😔","Sad"],["anxious","😰","Anxious"],["heartbroken","💔","Heartbroken"]];
 const pick=x=>{const m=x==="okay"?"new":x;setSelected(m);setMood(m)};
 return <div className="home">
  <section className="welcome">
   <div className="welcomeCopy"><span className="eyebrow">A LITTLE SPACE FOR YOU</span><h1>Hi, friend. <span>🌷</span></h1>
    <p>Nothing to prove here. Take a breath, check in, write something down, or simply stay for a while.</p>
    <div className="daily"><div className="dailyIcon">☀️</div><div><b>Today's little reminder</b><p>“{message}”</p></div></div>
   </div><div className="welcomeArt"><div className="blob blob1">☁️</div><div className="blob blob2">🌸</div><div className="homeHouse">⌂</div></div>
  </section>
  <section className="moodPanel"><div><span className="eyebrow">CHECK IN</span><h2>How are you feeling right now?</h2></div>
   <div className="moodRow">{moods.map(([id,e,l])=><button key={id} className={selected===id?"mood selected":"mood"} onClick={()=>pick(id)}><span>{e}</span><small>{l}</small></button>)}</div>
  </section>
  <div className="homeGrid">
   <button className="featureCard pink" onClick={()=>setPage("journal")}><BookOpen/><div><span className="eyebrow">JOURNAL</span><h3>Put it into words</h3><p>A quiet Notes-like place for thoughts that need somewhere to go.</p></div></button>
   <button className="featureCard blue" onClick={()=>setPage("chat")}><MessageCircle/><div><span className="eyebrow">TALK</span><h3>Talk it through</h3><p>Have a gentle conversation with your MindEase companion.</p></div></button>
   <button className="featureCard mint" onClick={()=>setPage("panic")}><Wind/><div><span className="eyebrow">CALM SPACE</span><h3>Feeling overwhelmed?</h3><p>Slow breathing and a comforting voice can help you pause.</p></div></button>
  </div>
  <Garden mood={selected} onMood={setMood}/>
 </div>
}

function Journal(){
 const [notes,setNotes]=useState(()=>JSON.parse(localStorage.getItem("mindease-notes")||"[]"));
 const [active,setActive]=useState(null);
 const save=(n)=>{const next=active ? notes.map(x => (x.id===n.id ? n : x)) : [...notes,n];setNotes(next);localStorage.setItem("mindease-notes",JSON.stringify(next));setActive(n)};
 const create=()=>setActive({id:Date.now(),title:"",body:"",updated:new Date().toLocaleString()});
 const remove=id=>{const next=notes.filter(n=>n.id!==id);setNotes(next);localStorage.setItem("mindease-notes",JSON.stringify(next));if(active?.id===id)setActive(null)};
 return <div className="journalPage">
  <div className="pageIntro"><div><span className="eyebrow">JOURNAL</span><h1>Your little notebook</h1><p>Private on this demo device. Write without worrying about making it perfect.</p></div><button className="softBtn" onClick={create}>＋ New note</button></div>
  <div className="notesShell"><aside className="notesList"><div className="notesSearch">⌕ <input placeholder="Search notes"/></div>{notes.length===0?<div className="emptyNotes">No notes yet.<br/>Start with whatever is on your mind.</div>:notes.map(n=><button className={"noteItem "+(active?.id===n.id?"active":"")} key={n.id} onClick={()=>setActive(n)}><b>{n.title||"Untitled note"}</b><span>{n.body?.slice(0,65)||"No text yet"}</span></button>)}</aside>
   <main className="noteEditor">{active?<><input className="noteTitle" value={active.title} onChange={e=>setActive({...active,title:e.target.value})} placeholder="Title"/><textarea className="noteBody" value={active.body} onChange={e=>setActive({...active,body:e.target.value})} placeholder="Start writing..."/><div className="noteActions"><span>{active.updated}</span><button className="dangerBtn" onClick={()=>remove(active.id)}>Delete</button><button className="softBtn" onClick={()=>save({...active,updated:new Date().toLocaleString()})}>Save note</button></div></>:<div className="noNote"><BookOpen size={38}/><h2>Your thoughts, your space.</h2><p>Choose a note or create a new one.</p></div>}</main>
  </div>
 </div>
}

const botReplies={
 sad:"That sounds like a heavy moment. You don't have to explain it perfectly. What feels hardest about today?",
 anxious:"Let's slow things down together. You can take your time here. Is your mind racing, or does your body feel tense too?",
 heartbroken:"Heartbreak can make ordinary moments feel surprisingly difficult. You don't need to rush past it. What happened?",
 happy:"I love hearing a little light in your day. What was one small thing that made you smile?",
 new:"A fresh start doesn't need to be dramatic. Sometimes it's just choosing to be here. What's on your mind?"
};
function Chat({mood,setPage}){
 const [messages,setMessages]=useState([{from:"bot",text:"Hey. I'm MindEase 🌷. You can talk to me about what's on your mind — no perfect words needed."}]);
 const [input,setInput]=useState("");
 const send=()=>{const text=input.trim();if(!text)return;const lower=text.toLowerCase();const alert=/\b(self[- ]?harm|hurt myself|kill myself)\b/.test(lower);setMessages(m=>[...m,{from:"you",text},{from:"bot",text:alert?"I'm really glad you told me. Your safety matters more than finishing this chat. Let's move to the Safety space so you can get real human support.":botReplies[mood]||botReplies.new}]);setInput("");if(alert)setTimeout(()=>setPage("safety"),300)};
 return <div className="chatPage"><div className="pageIntro"><div><span className="eyebrow">TALK TO MINDEASE</span><h1>A conversation without pressure</h1><p>MindEase is an AI companion, not a therapist or emergency service.</p></div></div>
  <div className="chatWindow"><div className="chatMessages">{messages.map((m,i)=><div key={i} className={"bubbleRow "+m.from}><div className="chatAvatar">{m.from==="bot"?"M":"You"}</div><div className="bubble">{m.text}</div></div>)}</div>
   <div className="chatSuggestions">{["I feel anxious today","I'm having a hard day","Something good happened"].map(x=><button key={x} onClick={()=>setInput(x)}>{x}</button>)}</div>
   <div className="chatInput"><textarea value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send()}}} placeholder="Write what's on your mind..."/><button onClick={send}>Send ↑</button></div>
  </div>
 </div>
}

function Panic(){
 const [running,setRunning]=useState(false);const [phase,setPhase]=useState("Ready");const [seconds,setSeconds]=useState(0);
 useEffect(()=>{if(!running)return;const t=setInterval(()=>setSeconds(s=>s+1),1000);return()=>clearInterval(t)},[running]);
 useEffect(()=>{if(!running)return;const phases=[["Inhale",4],["Hold",2],["Exhale",6]];let total=0;const id=setInterval(()=>{total=(total+1)%12;const p=total<4?0:total<6?1:2;setPhase(phases[p][0])},1000);return()=>clearInterval(id)},[running]);
 const [voices,setVoices]=useState([]);
 const addVoice=e=>{const f=e.target.files?.[0];if(f)setVoices(v=>[...v,{name:f.name,url:URL.createObjectURL(f)}])};
 return <div className="panicPage"><div className="pageIntro"><div><span className="eyebrow">CALM SPACE</span><h1>Let's make this moment smaller.</h1><p>Use the breathing circle and a familiar voice if you've saved one on this device.</p></div></div>
  <div className="calmGrid"><section className="breathCard"><div className={"breathCircle "+(running?"breathing":"")}><span>{running?phase:"Breathe"}</span></div><h2>{running?"Follow the circle":"A little breathing space"}</h2><p>Inhale gently for 4 seconds, hold for 2, then exhale for 6.</p><button className="softBtn" onClick={()=>{setRunning(!running);if(running)setPhase("Ready")}}>{running?"Pause exercise":"Start breathing"}</button><span className="timer">{String(Math.floor(seconds/60)).padStart(2,"0")}:{String(seconds%60).padStart(2,"0")}</span></section>
   <section className="voiceCard"><div className="voiceIcon">🎧</div><h2>Familiar voices</h2><p>Save a short voice message from someone you trust for moments when hearing a familiar voice feels comforting.</p><label className="uploadBtn">＋ Add a voice note<input type="file" accept="audio/*" onChange={addVoice} hidden/></label>{voices.map(v=><div className="voiceRow" key={v.name}><span>💗 {v.name}</span><audio controls src={v.url}/></div>)}</section>
  </div>
 </div>
}

function Safety(){
 const [status,setStatus]=useState("");
 const [trusted,setTrusted]=useState(()=>localStorage.getItem("mindease-trusted")||"");
 const save=()=>{localStorage.setItem("mindease-trusted",trusted);setStatus("Trusted contact saved on this device.")};
 return <div className="safetyPage"><div className="pageIntro"><div><span className="eyebrow">SAFETY FIRST</span><h1>You deserve real support.</h1><p>MindEase can notice concerning language, but it should never pretend to replace a person.</p></div></div>
  <section className="safetyBanner"><HeartHandshake size={34}/><div><h2>If you mention self-harm</h2><p>MindEase moves the conversation toward safety and encourages reaching a trusted person. A real deployment should use explicit consent and a verified escalation workflow rather than silently contacting people.</p></div></section>
  <div className="safetyGrid"><div className="panel"><h3>Trusted person</h3><p>For this prototype, save the name/role of someone you would want involved in a difficult moment.</p><input value={trusted} onChange={e=>setTrusted(e.target.value)} placeholder="e.g. Parent, sibling, counselor"/><button className="softBtn" onClick={save}>Save trusted contact</button>{status&&<small className="success">{status}</small>}</div>
   <div className="panel urgent"><h3>Need immediate help?</h3><p>If you may be in immediate danger or cannot keep yourself safe, seek help from a trusted adult/person nearby or your local emergency service now.</p><button className="softBtn" onClick={()=>alert("Demo safety action: please contact a trusted person or local emergency service if you are in immediate danger.")}>I need help now</button></div>
  </div>
 </div>
}

function SettingsPage({theme,setTheme}){
 return <div className="settingsPage"><div className="pageIntro"><div><span className="eyebrow">YOUR SPACE</span><h1>Settings</h1><p>Make MindEase feel comfortable for you.</p></div></div>
 <div className="settingsCards"><div className="panel"><h3>Appearance</h3><div className="themePicker"><button className={theme==="light"?"selected":""} onClick={()=>setTheme("light")}><Sun/>Light</button><button className={theme==="dark"?"selected":""} onClick={()=>setTheme("dark")}><Moon/>Dark</button></div></div>
 <div className="panel"><h3>About MindEase</h3><p>MindEase is a hackathon prototype designed around early reflection, supportive conversations, calming tools and human-first escalation.</p><div className="privacyLine">🔒 Demo data stays in this browser. A real deployment would require consent, secure storage and careful safety validation.</div></div></div>
 </div>
}

export default function App(){
 const [page,setPage]=useState("landing"),[theme,setTheme]=useState(()=>localStorage.getItem("mindease-theme")||"light"),[mood,setMood]=useState(()=>localStorage.getItem("mindease-mood")||"new");
 useEffect(()=>{document.documentElement.dataset.theme=theme;localStorage.setItem("mindease-theme",theme)},[theme]);
 useEffect(()=>{localStorage.setItem("mindease-mood",mood)},[mood]);
 const go=p=>setPage(p);
 if(page==="landing")return <Landing goLogin={()=>setPage("login")}/>;
 if(page==="login")return <Login onLogin={()=>setPage("home")} back={()=>setPage("landing")}/>;
 const current=nav.find(n=>n[0]===page)?.[1]||"Home";
 return <div className="appShell">
  <aside className="sidebar"><div className="brand"><div className="brandMark">M</div><div><b>MindEase</b><small>a little space for you</small></div></div>
   <nav>{nav.map(([id,label,I])=><button key={id} className={page===id?"active":""} onClick={()=>go(id)}><I size={18}/>{label}</button>)}</nav>
   <div className="sideQuote">“Be where your feet are.”<small>— a gentle reminder</small></div>
   <button className="signout" onClick={()=>go("landing")}><LogOut size={17}/>Leave space</button>
  </aside>
  <main className="main"><header className="topbar"><div><span className="eyebrow">MINDEASE</span><h2>{current}</h2></div><div className="topRight"><button className="themeQuick" onClick={()=>setTheme(theme==="light"?"dark":"light")}>{theme==="light"?<Moon size={18}/>:<Sun size={18}/>}</button><div className="tinyAvatar">🌷</div></div></header>
   <div className="content">{page==="home"&&<Home setPage={go} mood={mood} setMood={setMood}/>} {page==="journal"&&<Journal/>} {page==="chat"&&<Chat mood={mood} setPage={go}/>} {page==="garden"&&<Garden mood={mood} onMood={setMood}/>} {page==="panic"&&<Panic/>} {page==="safety"&&<Safety/>} {page==="settings"&&<SettingsPage theme={theme} setTheme={setTheme}/>}</div>
  </main>
 </div>
}
