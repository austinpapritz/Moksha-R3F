import{r as l,j as i}from"./vendor.react-75c769c1.js";import{m as T,h as w,F as B}from"./vendor.three-979059d3.js";import{l as E}from"./vendor.lerp-21f9bfc1.js";import{s as c}from"./index-7844fd7f.js";import{c as F,u as M}from"./vendor.@react-three-a3d6fb4e.js";import"./vendor.react-dom-8de30d86.js";import"./vendor.scheduler-765c72db.js";import"./vendor.@react-spring-79585b38.js";import"./vendor.@babel-98964cd2.js";import"./vendor.react-use-measure-df25a75e.js";import"./vendor.debounce-043e3f34.js";import"./vendor.its-fine-de65a0c0.js";import"./vendor.react-reconciler-9434233b.js";import"./vendor.zustand-6cd441eb.js";function v({children:p,size:e=1,left:o,right:t,top:s,bottom:m,color:n="white",opacity:d=1,height:f=.01,layers:C=0,font:y="/MOONGET_Heavy.blob",...g}){const h=F(B,y),j=new T(p,{font:h,size:1,height:f,curveSegments:32}),b=l.useCallback(a=>{const r=new w;a.geometry.computeBoundingBox(),a.geometry.boundingBox.getSize(r),a.position.x=o?0:t?-r.x:-r.x/2,a.position.y=s?0:m?-r.y:-r.y/2},[o,t,s,m]),u=l.useRef();let x=c.top.current;return M(()=>{u.current.shift=E(u.current.shift,(c.top.current-x)/100,.1),x=c.top.current}),i.jsx("group",{...g,scale:[e,e,.1],children:i.jsx("mesh",{geometry:j,onUpdate:b,frustumCulled:!1,children:i.jsx("customMaterial",{ref:u,color:n,transparent:!0,opacity:d})})})}const D=({text:p,size:e=1,lineHeight:o=1,position:t=[0,0,0],...s})=>p.split(`
`).map((m,n)=>i.jsx(v,{size:e,...s,position:[t[0],t[1]-n*o,t[2]],children:m},n));export{D as MultilineText,v as Text};
//# sourceMappingURL=Text-8a0bcaad.js.map