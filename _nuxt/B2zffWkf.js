import{b as r,_ as i,w as p}from"./DNorYJEC.js";import{d as c,f as m}from"./DbqO2zOW.js";import{f as a,n as u,A as f,E as d,o as y,i as _,w as x,D as S,x as g,j as C,y as v,Q as w}from"./Bfw4zKng.js";const z=r({type:{type:String,values:["primary","success","info","warning","danger",""],default:""},size:{type:String,values:c,default:""},truncated:{type:Boolean},lineClamp:{type:[String,Number]},tag:{type:String,default:"span"}}),b=a({name:"ElText"}),E=a({...b,props:z,setup(n){const t=n,l=m(),e=u("text"),o=f(()=>[e.b(),e.m(t.type),e.m(l.value),e.is("truncated",t.truncated),e.is("line-clamp",!d(t.lineClamp))]);return(s,k)=>(y(),_(w(s.tag),{class:g(C(o)),style:v({"-webkit-line-clamp":s.lineClamp})},{default:x(()=>[S(s.$slots,"default")]),_:3},8,["class","style"]))}});var h=i(E,[["__file","text.vue"]]);const N=p(h);export{N as E};
