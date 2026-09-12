import React from "react";
import {ShieldCheck,Lock,Eye,ChevronRight} from "lucide-react";
export default function Settings(){
 return <><div className="pageIntro"><div><span className="kicker">ACCOUNT</span><h2>Settings</h2><p>Prototype preferences and privacy information.</p></div></div>
 <div className="settingsGrid"><div className="panel"><h3>Profile</h3><label>Display name<input defaultValue="Demo User"/></label><label>Role<select defaultValue="participant"><option value="participant">Participant</option><option value="coordinator">Coordinator</option></select></label><button className="btn btnPrimary">Save changes</button></div>
 <div className="panel"><h3>Privacy & safety</h3>{[[ShieldCheck,"Consent-first design","Users should understand what data is collected and why."],[Lock,"Secure storage","Sensitive data should be encrypted in transit and at rest."],[Eye,"Data minimization","Collect only the signals necessary for the validated use case."]].map(([I,t,d])=><div className="settingRow" key={t}><I/><div><b>{t}</b><span>{d}</span></div><ChevronRight/></div>)}</div></div>
 </> }