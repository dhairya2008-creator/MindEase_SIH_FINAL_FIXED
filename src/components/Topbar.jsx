import React from "react";
import {Menu,Bell} from "lucide-react";
export default function Topbar({title,kicker,onMenu}){
 return <header className="topbar"><div className="topTitle"><button className="mobileMenu" onClick={onMenu}><Menu size={20}/></button><div><div className="kicker">{kicker}</div><h1>{title}</h1></div></div><div className="topActions"><button className="iconBtn"><Bell size={18}/><span className="dot"/></button><div className="userInfo"><b>Demo User</b><span>Participant</span></div><div className="avatar">DU</div></div></header>
}