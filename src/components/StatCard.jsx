import React from "react";
export default function StatCard({label,value,sub,trend,variant=""}){
 return <div className={"statCard "+variant}><span className="statLabel">{label}</span><strong>{value}</strong><span className={trend?"trend":"statSub"}>{trend||sub}</span></div>
}