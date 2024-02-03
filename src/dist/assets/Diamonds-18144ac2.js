import{r as u,j as _}from"./vendor.react-75c769c1.js";import{n as g,o as S,p as x,q as z,G as C}from"./vendor.three-979059d3.js";import{l as T}from"./vendor.lerp-21f9bfc1.js";import{useBlock as R}from"./blocks-5d8dbe74.js";import{s as m}from"./index-7844fd7f.js";import{c as E,d as j,u as G}from"./vendor.@react-three-a3d6fb4e.js";import"./vendor.react-dom-8de30d86.js";import"./vendor.scheduler-765c72db.js";import"./vendor.@react-spring-79585b38.js";import"./vendor.@babel-98964cd2.js";import"./vendor.react-use-measure-df25a75e.js";import"./vendor.debounce-043e3f34.js";import"./vendor.its-fine-de65a0c0.js";import"./vendor.react-reconciler-9434233b.js";import"./vendor.zustand-6cd441eb.js";class L extends g{constructor(){super({vertexShader:`varying vec3 worldNormal;
      void main() {
        vec4 transformedNormal = vec4(normal, 0.);
        vec4 transformedPosition = vec4(position, 1.0);
        #ifdef USE_INSTANCING
          transformedNormal = instanceMatrix * transformedNormal;
          transformedPosition = instanceMatrix * transformedPosition;
        #endif
        worldNormal = normalize(modelViewMatrix * transformedNormal).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * transformedPosition;
      }`,fragmentShader:`varying vec3 worldNormal;
      void main() {
        gl_FragColor = vec4(worldNormal, 1.0);

      }`,side:S})}}class I extends g{constructor(r){super({vertexShader:`varying vec3 worldNormal;
      varying vec3 viewDirection;
      void main() {
        vec4 transformedNormal = vec4(normal, 0.);
        vec4 transformedPosition = vec4(position, 1.0);
        #ifdef USE_INSTANCING
          transformedNormal = instanceMatrix * transformedNormal;
          transformedPosition = instanceMatrix * transformedPosition;
        #endif
        worldNormal = normalize( modelViewMatrix * transformedNormal).xyz;
        viewDirection = normalize((modelMatrix * vec4( position, 1.0)).xyz - cameraPosition);;
        gl_Position = projectionMatrix * modelViewMatrix * transformedPosition;
      }`,fragmentShader:`uniform sampler2D envMap;
      uniform sampler2D backfaceMap;
      uniform float refraction;
      uniform vec2 resolution;
      varying vec3 worldNormal;
      varying vec3 viewDirection;
      float fresnelFunc(vec3 viewDirection, vec3 worldNormal) {
        return pow(1.05 + dot(viewDirection, worldNormal), 100.0);
      }
      void main() {
        vec2 uv = gl_FragCoord.xy / resolution;
        vec3 normal = worldNormal * (1.0 - 0.7) - texture2D(backfaceMap, uv).rgb * 0.7;
        vec4 color = texture2D(envMap, uv += refract(viewDirection, normal, 1.0/refraction).xy);
        gl_FragColor = vec4(mix(color.rgb, vec3(0.4), fresnelFunc(viewDirection, normal)), 1.0);

      }`,uniforms:{envMap:{value:r.envMap},backfaceMap:{value:r.backfaceMap},resolution:{value:r.resolution},refraction:{value:1}}})}}const n=new z;function ee(){const{nodes:s}=E(C,"/diamond.glb");u.useLayoutEffect(()=>{s.pCone1_lambert1_0.geometry.center()},[]);const{size:r,gl:e,scene:c,camera:o,clock:M}=j(),{contentMaxWidth:w,sectionHeight:N,mobile:h}=R(),i=u.useRef(),a=e.getPixelRatio(),[y,b,D,k]=u.useMemo(()=>{const t=new x(r.width*a,r.height*a),l=new x(r.width*a,r.height*a),d=new L,f=new I({envMap:t.texture,backfaceMap:l.texture,resolution:[r.width*a,r.height*a]});return[t,l,d,f]},[r,a]);return G(()=>{m.diamonds.forEach((t,l)=>{const d=M.getElapsedTime()/2,{x:f,offset:P,scale:F,factor:p}=t,v=w/35*F;t.pos.set(h?0:f,T(t.pos.y,-N*P*p+m.top.current/m.zoom*p,.1),-35),i.current.position.z=400,n.position.copy(t.pos),n.rotation.set(0,d*.6,-.6),n.scale.set(v,v+11,v),n.updateMatrix(),i.current.setMatrixAt(l,n.matrix),i.current.instanceMatrix.needsUpdate=!0}),e.autoClear=!1,o.layers.set(0),e.setRenderTarget(y),e.clearColor(),e.render(c,o),e.clearDepth(),o.layers.set(1),i.current.material=D,e.setRenderTarget(b),e.clearDepth(),e.render(c,o),o.layers.set(0),e.setRenderTarget(null),e.render(c,o),e.clearDepth(),o.layers.set(1),i.current.material=k,e.render(c,o)},1),_.jsx("instancedMesh",{ref:i,layers:1,args:[s.pCone1_lambert1_0.geometry,null,m.diamonds.length],position:[0,0,50]})}export{ee as default};
//# sourceMappingURL=Diamonds-18144ac2.js.map