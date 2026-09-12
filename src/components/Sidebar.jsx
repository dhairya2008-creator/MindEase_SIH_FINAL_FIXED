import React from "react";
import {LayoutDashboard,ClipboardCheck,BrainCircuit,HeartHandshake,Users,Settings,LogOut} from "lucide-react";
import Logo from "./Logo";

const items=[
 ["dashboard","Dashboard",LayoutDashboard],
 ["assessment","Assessment",ClipboardCheck],
 ["analytics","AI Analytics",BrainCircuit],
 ["support","Support",HeartHandshake],
 ["coordinator","Coordinator",Users]
];
export default function Sidebar({page,setPage,mobileOpen,setMobileOpen}){
 return <aside className={"sidebar "+(mobileOpen?"mobileOpen":"")}>
  <div className="sideTop"><Logo/><button className="closeMobile" onClick={()=>setMobileOpen(false)}>×</button></div>
  <nav>{items.map(([id,label,Icon])=><button key={id} className={page===id?"navActive":""} onClick={()=>{setPage(id);setMobileOpen(false)}}><Icon size={19}/>{label}</button>)}</nav>
  <div className="sideBottom">
   <button onClick={()=>setPage("settings")}><Settings size={18}/>Settings</button>
   <div className="privacyMini"><b>Privacy first</b><span>Demo data only. Real deployments should use consent, encryption and role-based access.</span></div>
   <button onClick={()=>setPage("login")}><LogOut size={18}/>Sign out</button>
  </div>
 </aside>
}