export function predictAssessment(answers){
  const values=Object.values(answers);
  const selected=values.reduce((sum,v)=>sum+(v||0),0);
  const score=Math.min(92,Math.max(18,Math.round(35+selected*3.2)));
  const risk=score>=72?"High":score>=48?"Moderate":"Low";
  const confidence=Math.min(96,78+Math.round(selected%12));
  return {score,risk,confidence};
}