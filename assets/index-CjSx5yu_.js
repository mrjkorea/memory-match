(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Js="165",vl=0,va=1,xl=2,fc=1,Ml=2,ln=3,bn=0,Pt=1,Zt=2,En=0,pi=1,xa=2,Ma=3,Sa=4,Sl=5,kn=100,yl=101,El=102,wl=103,bl=104,Tl=200,Al=201,Cl=202,Rl=203,Is=204,Us=205,Pl=206,Ll=207,Dl=208,Il=209,Ul=210,Nl=211,Fl=212,Ol=213,Bl=214,zl=0,kl=1,Hl=2,Cr=3,Gl=4,Vl=5,Wl=6,Xl=7,pc=0,ql=1,Yl=2,wn=0,$l=1,Kl=2,Jl=3,mc=4,Zl=5,jl=6,Ql=7,gc=300,_i=301,vi=302,Ns=303,Fs=304,Nr=306,Os=1e3,Gn=1001,Bs=1002,Dt=1003,eu=1004,ji=1005,Wt=1006,qr=1007,Vn=1008,Tn=1009,tu=1010,nu=1011,Rr=1012,_c=1013,xi=1014,un=1015,Fr=1016,vc=1017,xc=1018,Mi=1020,iu=35902,ru=1021,su=1022,Qt=1023,au=1024,ou=1025,mi=1026,Si=1027,Mc=1028,Sc=1029,cu=1030,yc=1031,Ec=1033,Yr=33776,$r=33777,Kr=33778,Jr=33779,ya=35840,Ea=35841,wa=35842,ba=35843,Ta=36196,Aa=37492,Ca=37496,Ra=37808,Pa=37809,La=37810,Da=37811,Ia=37812,Ua=37813,Na=37814,Fa=37815,Oa=37816,Ba=37817,za=37818,ka=37819,Ha=37820,Ga=37821,Zr=36492,Va=36494,Wa=36495,lu=36283,Xa=36284,qa=36285,Ya=36286,uu=3200,hu=3201,wc=0,du=1,yn="",Ot="srgb",Rn="srgb-linear",Zs="display-p3",Or="display-p3-linear",Pr="linear",at="srgb",Lr="rec709",Dr="p3",$n=7680,$a=519,fu=512,pu=513,mu=514,bc=515,gu=516,_u=517,vu=518,xu=519,Ka=35044,Ja="300 es",hn=2e3,Ir=2001;class bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jr=Math.PI/180,zs=180/Math.PI;function Ti(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function wt(i,e,t){return Math.max(e,Math.min(t,i))}function Mu(i,e){return(i%e+e)%e}function Qr(i,e,t){return(1-t)*i+t*e}function Li(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class de{constructor(e=0,t=0){de.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,t,n,r,s,a,o,c,l){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],p=n[2],g=n[5],_=n[8],f=r[0],m=r[3],u=r[6],S=r[1],x=r[4],y=r[7],N=r[2],C=r[5],R=r[8];return s[0]=a*f+o*S+c*N,s[3]=a*m+o*x+c*C,s[6]=a*u+o*y+c*R,s[1]=l*f+h*S+d*N,s[4]=l*m+h*x+d*C,s[7]=l*u+h*y+d*R,s[2]=p*f+g*S+_*N,s[5]=p*m+g*x+_*C,s[8]=p*u+g*y+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,p=o*c-h*s,g=l*s-a*c,_=t*d+n*p+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/_;return e[0]=d*f,e[1]=(r*l-h*n)*f,e[2]=(o*n-r*a)*f,e[3]=p*f,e[4]=(h*t-r*c)*f,e[5]=(r*s-o*t)*f,e[6]=g*f,e[7]=(n*c-l*t)*f,e[8]=(a*t-n*s)*f,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(es.makeScale(e,t)),this}rotate(e){return this.premultiply(es.makeRotation(-e)),this}translate(e,t){return this.premultiply(es.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const es=new He;function Tc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Su(){const i=Ur("canvas");return i.style.display="block",i}const Za={};function Ac(i){i in Za||(Za[i]=!0,console.warn(i))}function yu(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const ja=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Qa=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qi={[Rn]:{transfer:Pr,primaries:Lr,toReference:i=>i,fromReference:i=>i},[Ot]:{transfer:at,primaries:Lr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Or]:{transfer:Pr,primaries:Dr,toReference:i=>i.applyMatrix3(Qa),fromReference:i=>i.applyMatrix3(ja)},[Zs]:{transfer:at,primaries:Dr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Qa),fromReference:i=>i.applyMatrix3(ja).convertLinearToSRGB()}},Eu=new Set([Rn,Or]),tt={enabled:!0,_workingColorSpace:Rn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Eu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Qi[e].toReference,r=Qi[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Qi[i].primaries},getTransfer:function(i){return i===yn?Pr:Qi[i].transfer}};function gi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ts(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Kn;class wu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Kn===void 0&&(Kn=Ur("canvas")),Kn.width=e.width,Kn.height=e.height;const n=Kn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Kn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=gi(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(gi(t[n]/255)*255):t[n]=gi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bu=0;class Cc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=Ti(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ns(r[a].image)):s.push(ns(r[a]))}else s=ns(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ns(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tu=0;class At extends bi{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=Gn,r=Gn,s=Wt,a=Vn,o=Qt,c=Tn,l=At.DEFAULT_ANISOTROPY,h=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=Ti(),this.name="",this.source=new Cc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Os:e.x=e.x-Math.floor(e.x);break;case Gn:e.x=e.x<0?0:1;break;case Bs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Os:e.y=e.y-Math.floor(e.y);break;case Gn:e.y=e.y<0?0:1;break;case Bs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=gc;At.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],h=c[4],d=c[8],p=c[1],g=c[5],_=c[9],f=c[2],m=c[6],u=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-f)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+f)<.1&&Math.abs(_+m)<.1&&Math.abs(l+g+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,y=(g+1)/2,N=(u+1)/2,C=(h+p)/4,R=(d+f)/4,U=(_+m)/4;return x>y&&x>N?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=C/n,s=R/n):y>N?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=C/r,s=U/r):N<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),n=R/s,r=U/s),this.set(n,r,s,t),this}let S=Math.sqrt((m-_)*(m-_)+(d-f)*(d-f)+(p-h)*(p-h));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(d-f)/S,this.z=(p-h)/S,this.w=Math.acos((l+g+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Au extends bi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new At(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Cc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends Au{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Rc extends At{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Cu extends At{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],d=n[r+3];const p=s[a+0],g=s[a+1],_=s[a+2],f=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=p,e[t+1]=g,e[t+2]=_,e[t+3]=f;return}if(d!==f||c!==p||l!==g||h!==_){let m=1-o;const u=c*p+l*g+h*_+d*f,S=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const N=Math.sqrt(x),C=Math.atan2(N,u*S);m=Math.sin(m*C)/N,o=Math.sin(o*C)/N}const y=o*S;if(c=c*m+p*y,l=l*m+g*y,h=h*m+_*y,d=d*m+f*y,m===1-o){const N=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=N,l*=N,h*=N,d*=N}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],d=s[a],p=s[a+1],g=s[a+2],_=s[a+3];return e[t]=o*_+h*d+c*g-l*p,e[t+1]=c*_+h*p+l*d-o*g,e[t+2]=l*_+h*g+o*p-c*d,e[t+3]=h*_-o*d-c*p-l*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),d=o(s/2),p=c(n/2),g=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=p*h*d+l*g*_,this._y=l*g*d-p*h*_,this._z=l*h*_+p*g*d,this._w=l*h*d-p*g*_;break;case"YXZ":this._x=p*h*d+l*g*_,this._y=l*g*d-p*h*_,this._z=l*h*_-p*g*d,this._w=l*h*d+p*g*_;break;case"ZXY":this._x=p*h*d-l*g*_,this._y=l*g*d+p*h*_,this._z=l*h*_+p*g*d,this._w=l*h*d-p*g*_;break;case"ZYX":this._x=p*h*d-l*g*_,this._y=l*g*d+p*h*_,this._z=l*h*_-p*g*d,this._w=l*h*d+p*g*_;break;case"YZX":this._x=p*h*d+l*g*_,this._y=l*g*d+p*h*_,this._z=l*h*_-p*g*d,this._w=l*h*d-p*g*_;break;case"XZY":this._x=p*h*d-l*g*_,this._y=l*g*d-p*h*_,this._z=l*h*_+p*g*d,this._w=l*h*d+p*g*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],d=t[10],p=n+o+d;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(h-c)*g,this._y=(s-l)*g,this._z=(a-r)*g}else if(n>o&&n>d){const g=2*Math.sqrt(1+n-o-d);this._w=(h-c)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+l)/g}else if(o>d){const g=2*Math.sqrt(1+o-n-d);this._w=(s-l)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+d-n-o);this._w=(a-r)/g,this._x=(s+l)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=r*d+this._y*p,this._z=s*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),h=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+c*l+a*d-o*h,this.y=n+c*h+o*l-s*d,this.z=r+c*d+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return is.copy(this).projectOnVector(e),this.sub(is)}reflect(e){return this.sub(is.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const is=new L,eo=new qi;class Yn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ht.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ht.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ht.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ht):Ht.fromBufferAttribute(s,a),Ht.applyMatrix4(e.matrixWorld),this.expandByPoint(Ht);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),er.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),er.copy(n.boundingBox)),er.applyMatrix4(e.matrixWorld),this.union(er)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ht),Ht.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Di),tr.subVectors(this.max,Di),Jn.subVectors(e.a,Di),Zn.subVectors(e.b,Di),jn.subVectors(e.c,Di),pn.subVectors(Zn,Jn),mn.subVectors(jn,Zn),Dn.subVectors(Jn,jn);let t=[0,-pn.z,pn.y,0,-mn.z,mn.y,0,-Dn.z,Dn.y,pn.z,0,-pn.x,mn.z,0,-mn.x,Dn.z,0,-Dn.x,-pn.y,pn.x,0,-mn.y,mn.x,0,-Dn.y,Dn.x,0];return!rs(t,Jn,Zn,jn,tr)||(t=[1,0,0,0,1,0,0,0,1],!rs(t,Jn,Zn,jn,tr))?!1:(nr.crossVectors(pn,mn),t=[nr.x,nr.y,nr.z],rs(t,Jn,Zn,jn,tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ht).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ht).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const rn=[new L,new L,new L,new L,new L,new L,new L,new L],Ht=new L,er=new Yn,Jn=new L,Zn=new L,jn=new L,pn=new L,mn=new L,Dn=new L,Di=new L,tr=new L,nr=new L,In=new L;function rs(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){In.fromArray(i,s);const o=r.x*Math.abs(In.x)+r.y*Math.abs(In.y)+r.z*Math.abs(In.z),c=e.dot(In),l=t.dot(In),h=n.dot(In);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Ru=new Yn,Ii=new L,ss=new L;class Yi{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ru.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ii.subVectors(e,this.center);const t=Ii.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ii,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ss.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ii.copy(e.center).add(ss)),this.expandByPoint(Ii.copy(e.center).sub(ss))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sn=new L,as=new L,ir=new L,gn=new L,os=new L,rr=new L,cs=new L;class Pc{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sn.copy(this.origin).addScaledVector(this.direction,t),sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){as.copy(e).add(t).multiplyScalar(.5),ir.copy(t).sub(e).normalize(),gn.copy(this.origin).sub(as);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ir),o=gn.dot(this.direction),c=-gn.dot(ir),l=gn.lengthSq(),h=Math.abs(1-a*a);let d,p,g,_;if(h>0)if(d=a*c-o,p=a*o-c,_=s*h,d>=0)if(p>=-_)if(p<=_){const f=1/h;d*=f,p*=f,g=d*(d+a*p+2*o)+p*(a*d+p+2*c)+l}else p=s,d=Math.max(0,-(a*p+o)),g=-d*d+p*(p+2*c)+l;else p=-s,d=Math.max(0,-(a*p+o)),g=-d*d+p*(p+2*c)+l;else p<=-_?(d=Math.max(0,-(-a*s+o)),p=d>0?-s:Math.min(Math.max(-s,-c),s),g=-d*d+p*(p+2*c)+l):p<=_?(d=0,p=Math.min(Math.max(-s,-c),s),g=p*(p+2*c)+l):(d=Math.max(0,-(a*s+o)),p=d>0?s:Math.min(Math.max(-s,-c),s),g=-d*d+p*(p+2*c)+l);else p=a>0?-s:s,d=Math.max(0,-(a*p+o)),g=-d*d+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(as).addScaledVector(ir,p),g}intersectSphere(e,t){sn.subVectors(e.center,this.origin);const n=sn.dot(this.direction),r=sn.dot(sn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),h>=0?(s=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-p.z)*d,c=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,c=(e.min.z-p.z)*d),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,sn)!==null}intersectTriangle(e,t,n,r,s){os.subVectors(t,e),rr.subVectors(n,e),cs.crossVectors(os,rr);let a=this.direction.dot(cs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;gn.subVectors(this.origin,e);const c=o*this.direction.dot(rr.crossVectors(gn,rr));if(c<0)return null;const l=o*this.direction.dot(os.cross(gn));if(l<0||c+l>a)return null;const h=-o*gn.dot(cs);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,r,s,a,o,c,l,h,d,p,g,_,f,m){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,h,d,p,g,_,f,m)}set(e,t,n,r,s,a,o,c,l,h,d,p,g,_,f,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=p,u[3]=g,u[7]=_,u[11]=f,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Qn.setFromMatrixColumn(e,0).length(),s=1/Qn.setFromMatrixColumn(e,1).length(),a=1/Qn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const p=a*h,g=a*d,_=o*h,f=o*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=g+_*l,t[5]=p-f*l,t[9]=-o*c,t[2]=f-p*l,t[6]=_+g*l,t[10]=a*c}else if(e.order==="YXZ"){const p=c*h,g=c*d,_=l*h,f=l*d;t[0]=p+f*o,t[4]=_*o-g,t[8]=a*l,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=g*o-_,t[6]=f+p*o,t[10]=a*c}else if(e.order==="ZXY"){const p=c*h,g=c*d,_=l*h,f=l*d;t[0]=p-f*o,t[4]=-a*d,t[8]=_+g*o,t[1]=g+_*o,t[5]=a*h,t[9]=f-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const p=a*h,g=a*d,_=o*h,f=o*d;t[0]=c*h,t[4]=_*l-g,t[8]=p*l+f,t[1]=c*d,t[5]=f*l+p,t[9]=g*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const p=a*c,g=a*l,_=o*c,f=o*l;t[0]=c*h,t[4]=f-p*d,t[8]=_*d+g,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=g*d+_,t[10]=p-f*d}else if(e.order==="XZY"){const p=a*c,g=a*l,_=o*c,f=o*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=p*d+f,t[5]=a*h,t[9]=g*d-_,t[2]=_*d-g,t[6]=o*h,t[10]=f*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pu,e,Lu)}lookAt(e,t,n){const r=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),_n.crossVectors(n,Nt),_n.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),_n.crossVectors(n,Nt)),_n.normalize(),sr.crossVectors(Nt,_n),r[0]=_n.x,r[4]=sr.x,r[8]=Nt.x,r[1]=_n.y,r[5]=sr.y,r[9]=Nt.y,r[2]=_n.z,r[6]=sr.z,r[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],p=n[9],g=n[13],_=n[2],f=n[6],m=n[10],u=n[14],S=n[3],x=n[7],y=n[11],N=n[15],C=r[0],R=r[4],U=r[8],w=r[12],M=r[1],P=r[5],X=r[9],k=r[13],$=r[2],j=r[6],Y=r[10],te=r[14],K=r[3],ve=r[7],xe=r[11],_e=r[15];return s[0]=a*C+o*M+c*$+l*K,s[4]=a*R+o*P+c*j+l*ve,s[8]=a*U+o*X+c*Y+l*xe,s[12]=a*w+o*k+c*te+l*_e,s[1]=h*C+d*M+p*$+g*K,s[5]=h*R+d*P+p*j+g*ve,s[9]=h*U+d*X+p*Y+g*xe,s[13]=h*w+d*k+p*te+g*_e,s[2]=_*C+f*M+m*$+u*K,s[6]=_*R+f*P+m*j+u*ve,s[10]=_*U+f*X+m*Y+u*xe,s[14]=_*w+f*k+m*te+u*_e,s[3]=S*C+x*M+y*$+N*K,s[7]=S*R+x*P+y*j+N*ve,s[11]=S*U+x*X+y*Y+N*xe,s[15]=S*w+x*k+y*te+N*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],p=e[10],g=e[14],_=e[3],f=e[7],m=e[11],u=e[15];return _*(+s*c*d-r*l*d-s*o*p+n*l*p+r*o*g-n*c*g)+f*(+t*c*g-t*l*p+s*a*p-r*a*g+r*l*h-s*c*h)+m*(+t*l*d-t*o*g-s*a*d+n*a*g+s*o*h-n*l*h)+u*(-r*o*h-t*c*d+t*o*p+r*a*d-n*a*p+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],p=e[10],g=e[11],_=e[12],f=e[13],m=e[14],u=e[15],S=d*m*l-f*p*l+f*c*g-o*m*g-d*c*u+o*p*u,x=_*p*l-h*m*l-_*c*g+a*m*g+h*c*u-a*p*u,y=h*f*l-_*d*l+_*o*g-a*f*g-h*o*u+a*d*u,N=_*d*c-h*f*c-_*o*p+a*f*p+h*o*m-a*d*m,C=t*S+n*x+r*y+s*N;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=S*R,e[1]=(f*p*s-d*m*s-f*r*g+n*m*g+d*r*u-n*p*u)*R,e[2]=(o*m*s-f*c*s+f*r*l-n*m*l-o*r*u+n*c*u)*R,e[3]=(d*c*s-o*p*s-d*r*l+n*p*l+o*r*g-n*c*g)*R,e[4]=x*R,e[5]=(h*m*s-_*p*s+_*r*g-t*m*g-h*r*u+t*p*u)*R,e[6]=(_*c*s-a*m*s-_*r*l+t*m*l+a*r*u-t*c*u)*R,e[7]=(a*p*s-h*c*s+h*r*l-t*p*l-a*r*g+t*c*g)*R,e[8]=y*R,e[9]=(_*d*s-h*f*s-_*n*g+t*f*g+h*n*u-t*d*u)*R,e[10]=(a*f*s-_*o*s+_*n*l-t*f*l-a*n*u+t*o*u)*R,e[11]=(h*o*s-a*d*s-h*n*l+t*d*l+a*n*g-t*o*g)*R,e[12]=N*R,e[13]=(h*f*r-_*d*r+_*n*p-t*f*p-h*n*m+t*d*m)*R,e[14]=(_*o*r-a*f*r-_*n*c+t*f*c+a*n*m-t*o*m)*R,e[15]=(a*d*r-h*o*r+h*n*c-t*d*c-a*n*p+t*o*p)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,d=o+o,p=s*l,g=s*h,_=s*d,f=a*h,m=a*d,u=o*d,S=c*l,x=c*h,y=c*d,N=n.x,C=n.y,R=n.z;return r[0]=(1-(f+u))*N,r[1]=(g+y)*N,r[2]=(_-x)*N,r[3]=0,r[4]=(g-y)*C,r[5]=(1-(p+u))*C,r[6]=(m+S)*C,r[7]=0,r[8]=(_+x)*R,r[9]=(m-S)*R,r[10]=(1-(p+f))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Qn.set(r[0],r[1],r[2]).length();const a=Qn.set(r[4],r[5],r[6]).length(),o=Qn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gt.copy(this);const l=1/s,h=1/a,d=1/o;return Gt.elements[0]*=l,Gt.elements[1]*=l,Gt.elements[2]*=l,Gt.elements[4]*=h,Gt.elements[5]*=h,Gt.elements[6]*=h,Gt.elements[8]*=d,Gt.elements[9]*=d,Gt.elements[10]*=d,t.setFromRotationMatrix(Gt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=hn){const c=this.elements,l=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),p=(n+r)/(n-r);let g,_;if(o===hn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ir)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=hn){const c=this.elements,l=1/(t-e),h=1/(n-r),d=1/(a-s),p=(t+e)*l,g=(n+r)*h;let _,f;if(o===hn)_=(a+s)*d,f=-2*d;else if(o===Ir)_=s*d,f=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-g,c[2]=0,c[6]=0,c[10]=f,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qn=new L,Gt=new rt,Pu=new L(0,0,0),Lu=new L(1,1,1),_n=new L,sr=new L,Nt=new L,to=new rt,no=new qi;class en{constructor(e=0,t=0,n=0,r=en.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],d=r[2],p=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(wt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return to.makeRotationFromQuaternion(e),this.setFromRotationMatrix(to,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return no.setFromEuler(this),this.setFromQuaternion(no,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}en.DEFAULT_ORDER="XYZ";class js{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Du=0;const io=new L,ei=new qi,an=new rt,ar=new L,Ui=new L,Iu=new L,Uu=new qi,ro=new L(1,0,0),so=new L(0,1,0),ao=new L(0,0,1),oo={type:"added"},Nu={type:"removed"},ti={type:"childadded",child:null},ls={type:"childremoved",child:null};class ht extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new L,t=new en,n=new qi,r=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new rt},normalMatrix:{value:new He}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ei.setFromAxisAngle(e,t),this.quaternion.multiply(ei),this}rotateOnWorldAxis(e,t){return ei.setFromAxisAngle(e,t),this.quaternion.premultiply(ei),this}rotateX(e){return this.rotateOnAxis(ro,e)}rotateY(e){return this.rotateOnAxis(so,e)}rotateZ(e){return this.rotateOnAxis(ao,e)}translateOnAxis(e,t){return io.copy(e).applyQuaternion(this.quaternion),this.position.add(io.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ro,e)}translateY(e){return this.translateOnAxis(so,e)}translateZ(e){return this.translateOnAxis(ao,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ar.copy(e):ar.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ui.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(Ui,ar,this.up):an.lookAt(ar,Ui,this.up),this.quaternion.setFromRotationMatrix(an),r&&(an.extractRotation(r.matrixWorld),ei.setFromRotationMatrix(an),this.quaternion.premultiply(ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(oo),ti.child=e,this.dispatchEvent(ti),ti.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nu),ls.child=e,this.dispatchEvent(ls),ls.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),an.multiply(e.parent.matrixWorld)),e.applyMatrix4(an),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(oo),ti.child=e,this.dispatchEvent(ti),ti.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,e,Iu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,Uu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),p=a(e.skeletons),g=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),g.length>0&&(n.animations=g),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ht.DEFAULT_UP=new L(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vt=new L,on=new L,us=new L,cn=new L,ni=new L,ii=new L,co=new L,hs=new L,ds=new L,fs=new L;class jt{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Vt.subVectors(e,t),r.cross(Vt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Vt.subVectors(r,t),on.subVectors(n,t),us.subVectors(e,t);const a=Vt.dot(Vt),o=Vt.dot(on),c=Vt.dot(us),l=on.dot(on),h=on.dot(us),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const p=1/d,g=(l*c-o*h)*p,_=(a*h-o*c)*p;return s.set(1-g-_,_,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,cn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,cn.x),c.addScaledVector(a,cn.y),c.addScaledVector(o,cn.z),c)}static isFrontFacing(e,t,n,r){return Vt.subVectors(n,t),on.subVectors(e,t),Vt.cross(on).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Vt.cross(on).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return jt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return jt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;ni.subVectors(r,n),ii.subVectors(s,n),hs.subVectors(e,n);const c=ni.dot(hs),l=ii.dot(hs);if(c<=0&&l<=0)return t.copy(n);ds.subVectors(e,r);const h=ni.dot(ds),d=ii.dot(ds);if(h>=0&&d<=h)return t.copy(r);const p=c*d-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(ni,a);fs.subVectors(e,s);const g=ni.dot(fs),_=ii.dot(fs);if(_>=0&&g<=_)return t.copy(s);const f=g*l-c*_;if(f<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(ii,o);const m=h*_-g*d;if(m<=0&&d-h>=0&&g-_>=0)return co.subVectors(s,r),o=(d-h)/(d-h+(g-_)),t.copy(r).addScaledVector(co,o);const u=1/(m+f+p);return a=f*u,o=p*u,t.copy(n).addScaledVector(ni,a).addScaledVector(ii,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},or={h:0,s:0,l:0};function ps(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=tt.workingColorSpace){if(e=Mu(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ps(a,s,e+1/3),this.g=ps(a,s,e),this.b=ps(a,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ot){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=Lc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}copyLinearToSRGB(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return tt.fromWorkingColorSpace(Tt.copy(this),e),Math.round(wt(Tt.r*255,0,255))*65536+Math.round(wt(Tt.g*255,0,255))*256+Math.round(wt(Tt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Tt.copy(this),t);const n=Tt.r,r=Tt.g,s=Tt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=Ot){tt.fromWorkingColorSpace(Tt.copy(this),e);const t=Tt.r,n=Tt.g,r=Tt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(vn),this.setHSL(vn.h+e,vn.s+t,vn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vn),e.getHSL(or);const n=Qr(vn.h,or.h,t),r=Qr(vn.s,or.s,t),s=Qr(vn.l,or.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new Ye;Ye.NAMES=Lc;let Fu=0;class $i extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=Ti(),this.name="",this.type="Material",this.blending=pi,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Is,this.blendDst=Us,this.blendEquation=kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$a,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$n,this.stencilZFail=$n,this.stencilZPass=$n,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Is&&(n.blendSrc=this.blendSrc),this.blendDst!==Us&&(n.blendDst=this.blendDst),this.blendEquation!==kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Cr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$a&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$n&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$n&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$n&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xt extends $i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new L,cr=new de;class qt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ka,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ac("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cr.fromBufferAttribute(this,t),cr.applyMatrix3(e),this.setXY(t,cr.x,cr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Li(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Li(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Li(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),r=Lt(r,this.array),s=Lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ka&&(e.usage=this.usage),e}}class Dc extends qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ic extends qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class st extends qt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ou=0;const kt=new rt,ms=new ht,ri=new L,Ft=new Yn,Ni=new Yn,Et=new L;class It extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tc(e)?Ic:Dc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new He().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,n){return kt.makeTranslation(e,t,n),this.applyMatrix4(kt),this}scale(e,t,n){return kt.makeScale(e,t,n),this.applyMatrix4(kt),this}lookAt(e){return ms.lookAt(e),ms.updateMatrix(),this.applyMatrix4(ms.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ri).negate(),this.translate(ri.x,ri.y,ri.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new st(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ft.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ni.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Ft.min,Ni.min),Ft.expandByPoint(Et),Et.addVectors(Ft.max,Ni.max),Ft.expandByPoint(Et)):(Ft.expandByPoint(Ni.min),Ft.expandByPoint(Ni.max))}Ft.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Et));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Et.fromBufferAttribute(o,l),c&&(ri.fromBufferAttribute(e,l),Et.add(ri)),r=Math.max(r,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<n.count;U++)o[U]=new L,c[U]=new L;const l=new L,h=new L,d=new L,p=new de,g=new de,_=new de,f=new L,m=new L;function u(U,w,M){l.fromBufferAttribute(n,U),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,M),p.fromBufferAttribute(s,U),g.fromBufferAttribute(s,w),_.fromBufferAttribute(s,M),h.sub(l),d.sub(l),g.sub(p),_.sub(p);const P=1/(g.x*_.y-_.x*g.y);isFinite(P)&&(f.copy(h).multiplyScalar(_.y).addScaledVector(d,-g.y).multiplyScalar(P),m.copy(d).multiplyScalar(g.x).addScaledVector(h,-_.x).multiplyScalar(P),o[U].add(f),o[w].add(f),o[M].add(f),c[U].add(m),c[w].add(m),c[M].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let U=0,w=S.length;U<w;++U){const M=S[U],P=M.start,X=M.count;for(let k=P,$=P+X;k<$;k+=3)u(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const x=new L,y=new L,N=new L,C=new L;function R(U){N.fromBufferAttribute(r,U),C.copy(N);const w=o[U];x.copy(w),x.sub(N.multiplyScalar(N.dot(w))).normalize(),y.crossVectors(C,w);const P=y.dot(c[U])<0?-1:1;a.setXYZW(U,x.x,x.y,x.z,P)}for(let U=0,w=S.length;U<w;++U){const M=S[U],P=M.start,X=M.count;for(let k=P,$=P+X;k<$;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,g=n.count;p<g;p++)n.setXYZ(p,0,0,0);const r=new L,s=new L,a=new L,o=new L,c=new L,l=new L,h=new L,d=new L;if(e)for(let p=0,g=e.count;p<g;p+=3){const _=e.getX(p+0),f=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,f),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,f),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(f,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,g=t.count;p<g;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,d=o.normalized,p=new l.constructor(c.length*h);let g=0,_=0;for(let f=0,m=c.length;f<m;f++){o.isInterleavedBufferAttribute?g=c[f]*o.data.stride+o.offset:g=c[f]*h;for(let u=0;u<h;u++)p[_++]=l[g++]}return new qt(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new It,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,d=l.length;h<d;h++){const p=l[h],g=e(p,n);c.push(g)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,p=l.length;d<p;d++){const g=l[d];h.push(g.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let p=0,g=d.length;p<g;p++)h.push(d[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lo=new rt,Un=new Pc,lr=new Yi,uo=new L,si=new L,ai=new L,oi=new L,gs=new L,ur=new L,hr=new de,dr=new de,fr=new de,ho=new L,fo=new L,po=new L,pr=new L,mr=new L;class Ke extends ht{constructor(e=new It,t=new Xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ur.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],d=s[c];h!==0&&(gs.fromBufferAttribute(d,e),a?ur.addScaledVector(gs,h):ur.addScaledVector(gs.sub(t),h))}t.add(ur)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(s),Un.copy(e.ray).recast(e.near),!(lr.containsPoint(Un.origin)===!1&&(Un.intersectSphere(lr,uo)===null||Un.origin.distanceToSquared(uo)>(e.far-e.near)**2))&&(lo.copy(s).invert(),Un.copy(e.ray).applyMatrix4(lo),!(n.boundingBox!==null&&Un.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Un)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,p=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,f=p.length;_<f;_++){const m=p[_],u=a[m.materialIndex],S=Math.max(m.start,g.start),x=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let y=S,N=x;y<N;y+=3){const C=o.getX(y),R=o.getX(y+1),U=o.getX(y+2);r=gr(this,u,e,n,l,h,d,C,R,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,g.start),f=Math.min(o.count,g.start+g.count);for(let m=_,u=f;m<u;m+=3){const S=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);r=gr(this,a,e,n,l,h,d,S,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,f=p.length;_<f;_++){const m=p[_],u=a[m.materialIndex],S=Math.max(m.start,g.start),x=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let y=S,N=x;y<N;y+=3){const C=y,R=y+1,U=y+2;r=gr(this,u,e,n,l,h,d,C,R,U),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,g.start),f=Math.min(c.count,g.start+g.count);for(let m=_,u=f;m<u;m+=3){const S=m,x=m+1,y=m+2;r=gr(this,a,e,n,l,h,d,S,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Bu(i,e,t,n,r,s,a,o){let c;if(e.side===Pt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===bn,o),c===null)return null;mr.copy(o),mr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(mr);return l<t.near||l>t.far?null:{distance:l,point:mr.clone(),object:i}}function gr(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,si),i.getVertexPosition(c,ai),i.getVertexPosition(l,oi);const h=Bu(i,e,t,n,si,ai,oi,pr);if(h){r&&(hr.fromBufferAttribute(r,o),dr.fromBufferAttribute(r,c),fr.fromBufferAttribute(r,l),h.uv=jt.getInterpolation(pr,si,ai,oi,hr,dr,fr,new de)),s&&(hr.fromBufferAttribute(s,o),dr.fromBufferAttribute(s,c),fr.fromBufferAttribute(s,l),h.uv1=jt.getInterpolation(pr,si,ai,oi,hr,dr,fr,new de)),a&&(ho.fromBufferAttribute(a,o),fo.fromBufferAttribute(a,c),po.fromBufferAttribute(a,l),h.normal=jt.getInterpolation(pr,si,ai,oi,ho,fo,po,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new L,materialIndex:0};jt.getNormal(si,ai,oi,d.normal),h.face=d}return h}class ze extends It{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],d=[];let p=0,g=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,r,a,2),_("x","z","y",1,-1,e,n,-t,r,a,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(d,2));function _(f,m,u,S,x,y,N,C,R,U,w){const M=y/R,P=N/U,X=y/2,k=N/2,$=C/2,j=R+1,Y=U+1;let te=0,K=0;const ve=new L;for(let xe=0;xe<Y;xe++){const _e=xe*P-k;for(let Oe=0;Oe<j;Oe++){const We=Oe*M-X;ve[f]=We*S,ve[m]=_e*x,ve[u]=$,l.push(ve.x,ve.y,ve.z),ve[f]=0,ve[m]=0,ve[u]=C>0?1:-1,h.push(ve.x,ve.y,ve.z),d.push(Oe/R),d.push(1-xe/U),te+=1}}for(let xe=0;xe<U;xe++)for(let _e=0;_e<R;_e++){const Oe=p+_e+j*xe,We=p+_e+j*(xe+1),J=p+(_e+1)+j*(xe+1),ae=p+(_e+1)+j*xe;c.push(Oe,We,ae),c.push(We,J,ae),K+=6}o.addGroup(g,K,w),g+=K,p+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ze(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Rt(i){const e={};for(let t=0;t<i.length;t++){const n=yi(i[t]);for(const r in n)e[r]=n[r]}return e}function zu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Uc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const ku={clone:yi,merge:Rt};var Hu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends $i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hu,this.fragmentShader=Gu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yi(e.uniforms),this.uniformsGroups=zu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Nc extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=hn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xn=new L,mo=new de,go=new de;class Bt extends Nc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xn.x,xn.y).multiplyScalar(-e/xn.z),xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xn.x,xn.y).multiplyScalar(-e/xn.z)}getViewSize(e,t){return this.getViewBounds(e,mo,go),t.subVectors(go,mo)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ci=-90,li=1;class Vu extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bt(ci,li,e,t);r.layers=this.layers,this.add(r);const s=new Bt(ci,li,e,t);s.layers=this.layers,this.add(s);const a=new Bt(ci,li,e,t);a.layers=this.layers,this.add(a);const o=new Bt(ci,li,e,t);o.layers=this.layers,this.add(o);const c=new Bt(ci,li,e,t);c.layers=this.layers,this.add(c);const l=new Bt(ci,li,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===hn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(d,p,g),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Fc extends At{constructor(e,t,n,r,s,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:_i,super(e,t,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wu extends Xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Fc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ze(5,5,5),s=new An({name:"CubemapFromEquirect",uniforms:yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:En});s.uniforms.tEquirect.value=t;const a=new Ke(r,s),o=t.minFilter;return t.minFilter===Vn&&(t.minFilter=Wt),new Vu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const _s=new L,Xu=new L,qu=new He;class Bn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=_s.subVectors(n,t).cross(Xu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_s),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||qu.getNormalMatrix(e),r=this.coplanarPoint(_s).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new Yi,_r=new L;class Qs{constructor(e=new Bn,t=new Bn,n=new Bn,r=new Bn,s=new Bn,a=new Bn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hn){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],h=r[5],d=r[6],p=r[7],g=r[8],_=r[9],f=r[10],m=r[11],u=r[12],S=r[13],x=r[14],y=r[15];if(n[0].setComponents(c-s,p-l,m-g,y-u).normalize(),n[1].setComponents(c+s,p+l,m+g,y+u).normalize(),n[2].setComponents(c+a,p+h,m+_,y+S).normalize(),n[3].setComponents(c-a,p-h,m-_,y-S).normalize(),n[4].setComponents(c-o,p-d,m-f,y-x).normalize(),t===hn)n[5].setComponents(c+o,p+d,m+f,y+x).normalize();else if(t===Ir)n[5].setComponents(o,d,f,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(e){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(_r.x=r.normal.x>0?e.max.x:e.min.x,_r.y=r.normal.y>0?e.max.y:e.min.y,_r.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(_r)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Oc(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Yu(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,d=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),o.onUploadCallback();let g;if(l instanceof Float32Array)g=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=i.SHORT;else if(l instanceof Uint32Array)g=i.UNSIGNED_INT;else if(l instanceof Int32Array)g=i.INT;else if(l instanceof Int8Array)g=i.BYTE;else if(l instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const h=c.array,d=c._updateRange,p=c.updateRanges;if(i.bindBuffer(l,o),d.count===-1&&p.length===0&&i.bufferSubData(l,0,h),p.length!==0){for(let g=0,_=p.length;g<_;g++){const f=p[g];i.bufferSubData(l,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count)}c.clearUpdateRanges()}d.count!==-1&&(i.bufferSubData(l,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count),d.count=-1),c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class Cn extends It{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,d=e/o,p=t/c,g=[],_=[],f=[],m=[];for(let u=0;u<h;u++){const S=u*p-a;for(let x=0;x<l;x++){const y=x*d-s;_.push(y,-S,0),f.push(0,0,1),m.push(x/o),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let S=0;S<o;S++){const x=S+l*u,y=S+l*(u+1),N=S+1+l*(u+1),C=S+1+l*u;g.push(x,y,C),g.push(y,N,C)}this.setIndex(g),this.setAttribute("position",new st(_,3)),this.setAttribute("normal",new st(f,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cn(e.width,e.height,e.widthSegments,e.heightSegments)}}var $u=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ku=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ju=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ju=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,th=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ih=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,rh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ah=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,oh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ch=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,uh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ph=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,_h=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Mh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Eh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wh="gl_FragColor = linearToOutputTexel( gl_FragColor );",bh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Th=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ah=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ch=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ph=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ih=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Oh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$h=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ed=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,td=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,id=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ad=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,od=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ld=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ud=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,md=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_d=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Md=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ed=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Td=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ad=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Pd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ld=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Id=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ud=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Od=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$d=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ef=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,tf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,nf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,af=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,of=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,lf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,df=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ff=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_f=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ef=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Af=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:$u,alphahash_pars_fragment:Ku,alphamap_fragment:Ju,alphamap_pars_fragment:Zu,alphatest_fragment:ju,alphatest_pars_fragment:Qu,aomap_fragment:eh,aomap_pars_fragment:th,batching_pars_vertex:nh,batching_vertex:ih,begin_vertex:rh,beginnormal_vertex:sh,bsdfs:ah,iridescence_fragment:oh,bumpmap_pars_fragment:ch,clipping_planes_fragment:lh,clipping_planes_pars_fragment:uh,clipping_planes_pars_vertex:hh,clipping_planes_vertex:dh,color_fragment:fh,color_pars_fragment:ph,color_pars_vertex:mh,color_vertex:gh,common:_h,cube_uv_reflection_fragment:vh,defaultnormal_vertex:xh,displacementmap_pars_vertex:Mh,displacementmap_vertex:Sh,emissivemap_fragment:yh,emissivemap_pars_fragment:Eh,colorspace_fragment:wh,colorspace_pars_fragment:bh,envmap_fragment:Th,envmap_common_pars_fragment:Ah,envmap_pars_fragment:Ch,envmap_pars_vertex:Rh,envmap_physical_pars_fragment:kh,envmap_vertex:Ph,fog_vertex:Lh,fog_pars_vertex:Dh,fog_fragment:Ih,fog_pars_fragment:Uh,gradientmap_pars_fragment:Nh,lightmap_pars_fragment:Fh,lights_lambert_fragment:Oh,lights_lambert_pars_fragment:Bh,lights_pars_begin:zh,lights_toon_fragment:Hh,lights_toon_pars_fragment:Gh,lights_phong_fragment:Vh,lights_phong_pars_fragment:Wh,lights_physical_fragment:Xh,lights_physical_pars_fragment:qh,lights_fragment_begin:Yh,lights_fragment_maps:$h,lights_fragment_end:Kh,logdepthbuf_fragment:Jh,logdepthbuf_pars_fragment:Zh,logdepthbuf_pars_vertex:jh,logdepthbuf_vertex:Qh,map_fragment:ed,map_pars_fragment:td,map_particle_fragment:nd,map_particle_pars_fragment:id,metalnessmap_fragment:rd,metalnessmap_pars_fragment:sd,morphinstance_vertex:ad,morphcolor_vertex:od,morphnormal_vertex:cd,morphtarget_pars_vertex:ld,morphtarget_vertex:ud,normal_fragment_begin:hd,normal_fragment_maps:dd,normal_pars_fragment:fd,normal_pars_vertex:pd,normal_vertex:md,normalmap_pars_fragment:gd,clearcoat_normal_fragment_begin:_d,clearcoat_normal_fragment_maps:vd,clearcoat_pars_fragment:xd,iridescence_pars_fragment:Md,opaque_fragment:Sd,packing:yd,premultiplied_alpha_fragment:Ed,project_vertex:wd,dithering_fragment:bd,dithering_pars_fragment:Td,roughnessmap_fragment:Ad,roughnessmap_pars_fragment:Cd,shadowmap_pars_fragment:Rd,shadowmap_pars_vertex:Pd,shadowmap_vertex:Ld,shadowmask_pars_fragment:Dd,skinbase_vertex:Id,skinning_pars_vertex:Ud,skinning_vertex:Nd,skinnormal_vertex:Fd,specularmap_fragment:Od,specularmap_pars_fragment:Bd,tonemapping_fragment:zd,tonemapping_pars_fragment:kd,transmission_fragment:Hd,transmission_pars_fragment:Gd,uv_pars_fragment:Vd,uv_pars_vertex:Wd,uv_vertex:Xd,worldpos_vertex:qd,background_vert:Yd,background_frag:$d,backgroundCube_vert:Kd,backgroundCube_frag:Jd,cube_vert:Zd,cube_frag:jd,depth_vert:Qd,depth_frag:ef,distanceRGBA_vert:tf,distanceRGBA_frag:nf,equirect_vert:rf,equirect_frag:sf,linedashed_vert:af,linedashed_frag:of,meshbasic_vert:cf,meshbasic_frag:lf,meshlambert_vert:uf,meshlambert_frag:hf,meshmatcap_vert:df,meshmatcap_frag:ff,meshnormal_vert:pf,meshnormal_frag:mf,meshphong_vert:gf,meshphong_frag:_f,meshphysical_vert:vf,meshphysical_frag:xf,meshtoon_vert:Mf,meshtoon_frag:Sf,points_vert:yf,points_frag:Ef,shadow_vert:wf,shadow_frag:bf,sprite_vert:Tf,sprite_frag:Af},me={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Jt={basic:{uniforms:Rt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Rt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Rt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Rt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Rt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Rt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Rt([me.points,me.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Rt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Rt([me.common,me.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Rt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Rt([me.sprite,me.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Rt([me.common,me.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Rt([me.lights,me.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Jt.physical={uniforms:Rt([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const vr={r:0,b:0,g:0},Fn=new en,Cf=new rt;function Rf(i,e,t,n,r,s,a){const o=new Ye(0);let c=s===!0?0:1,l,h,d=null,p=0,g=null;function _(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function f(S){let x=!1;const y=_(S);y===null?u(o,c):y&&y.isColor&&(u(y,1),x=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,x){const y=_(x);y&&(y.isCubeTexture||y.mapping===Nr)?(h===void 0&&(h=new Ke(new ze(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:yi(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,C,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Fn.copy(x.backgroundRotation),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Cf.makeRotationFromEuler(Fn)),h.material.toneMapped=tt.getTransfer(y.colorSpace)!==at,(d!==y||p!==y.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,d=y,p=y.version,g=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ke(new Cn(2,2),new An({name:"BackgroundMaterial",uniforms:yi(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=tt.getTransfer(y.colorSpace)!==at,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||p!==y.version||g!==i.toneMapping)&&(l.material.needsUpdate=!0,d=y,p=y.version,g=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function u(S,x){S.getRGB(vr,Uc(i)),n.buffers.color.setClear(vr.r,vr.g,vr.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(S,x=1){o.set(S),c=x,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,u(o,c)},render:f,addToRenderList:m}}function Pf(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,a=!1;function o(M,P,X,k,$){let j=!1;const Y=d(k,X,P);s!==Y&&(s=Y,l(s.object)),j=g(M,k,X,$),j&&_(M,k,X,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,y(M,P,X,k),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function d(M,P,X){const k=X.wireframe===!0;let $=n[M.id];$===void 0&&($={},n[M.id]=$);let j=$[P.id];j===void 0&&(j={},$[P.id]=j);let Y=j[k];return Y===void 0&&(Y=p(c()),j[k]=Y),Y}function p(M){const P=[],X=[],k=[];for(let $=0;$<t;$++)P[$]=0,X[$]=0,k[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:X,attributeDivisors:k,object:M,attributes:{},index:null}}function g(M,P,X,k){const $=s.attributes,j=P.attributes;let Y=0;const te=X.getAttributes();for(const K in te)if(te[K].location>=0){const xe=$[K];let _e=j[K];if(_e===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor)),xe===void 0||xe.attribute!==_e||_e&&xe.data!==_e.data)return!0;Y++}return s.attributesNum!==Y||s.index!==k}function _(M,P,X,k){const $={},j=P.attributes;let Y=0;const te=X.getAttributes();for(const K in te)if(te[K].location>=0){let xe=j[K];xe===void 0&&(K==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),K==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor));const _e={};_e.attribute=xe,xe&&xe.data&&(_e.data=xe.data),$[K]=_e,Y++}s.attributes=$,s.attributesNum=Y,s.index=k}function f(){const M=s.newAttributes;for(let P=0,X=M.length;P<X;P++)M[P]=0}function m(M){u(M,0)}function u(M,P){const X=s.newAttributes,k=s.enabledAttributes,$=s.attributeDivisors;X[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),$[M]!==P&&(i.vertexAttribDivisor(M,P),$[M]=P)}function S(){const M=s.newAttributes,P=s.enabledAttributes;for(let X=0,k=P.length;X<k;X++)P[X]!==M[X]&&(i.disableVertexAttribArray(X),P[X]=0)}function x(M,P,X,k,$,j,Y){Y===!0?i.vertexAttribIPointer(M,P,X,$,j):i.vertexAttribPointer(M,P,X,k,$,j)}function y(M,P,X,k){f();const $=k.attributes,j=X.getAttributes(),Y=P.defaultAttributeValues;for(const te in j){const K=j[te];if(K.location>=0){let ve=$[te];if(ve===void 0&&(te==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),te==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor)),ve!==void 0){const xe=ve.normalized,_e=ve.itemSize,Oe=e.get(ve);if(Oe===void 0)continue;const We=Oe.buffer,J=Oe.type,ae=Oe.bytesPerElement,Me=J===i.INT||J===i.UNSIGNED_INT||ve.gpuType===_c;if(ve.isInterleavedBufferAttribute){const ce=ve.data,q=ce.stride,H=ve.offset;if(ce.isInstancedInterleavedBuffer){for(let Q=0;Q<K.locationSize;Q++)u(K.location+Q,ce.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Q=0;Q<K.locationSize;Q++)m(K.location+Q);i.bindBuffer(i.ARRAY_BUFFER,We);for(let Q=0;Q<K.locationSize;Q++)x(K.location+Q,_e/K.locationSize,J,xe,q*ae,(H+_e/K.locationSize*Q)*ae,Me)}else{if(ve.isInstancedBufferAttribute){for(let ce=0;ce<K.locationSize;ce++)u(K.location+ce,ve.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ce=0;ce<K.locationSize;ce++)m(K.location+ce);i.bindBuffer(i.ARRAY_BUFFER,We);for(let ce=0;ce<K.locationSize;ce++)x(K.location+ce,_e/K.locationSize,J,xe,_e*ae,_e/K.locationSize*ce*ae,Me)}}else if(Y!==void 0){const xe=Y[te];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(K.location,xe);break;case 3:i.vertexAttrib3fv(K.location,xe);break;case 4:i.vertexAttrib4fv(K.location,xe);break;default:i.vertexAttrib1fv(K.location,xe)}}}}S()}function N(){U();for(const M in n){const P=n[M];for(const X in P){const k=P[X];for(const $ in k)h(k[$].object),delete k[$];delete P[X]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const X in P){const k=P[X];for(const $ in k)h(k[$].object),delete k[$];delete P[X]}delete n[M.id]}function R(M){for(const P in n){const X=n[P];if(X[M.id]===void 0)continue;const k=X[M.id];for(const $ in k)h(k[$].object),delete k[$];delete X[M.id]}}function U(){w(),a=!0,s!==r&&(s=r,l(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:w,dispose:N,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:f,enableAttribute:m,disableUnusedAttributes:S}}function Lf(i,e,t){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),t.update(h,n,d))}function o(l,h,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d;g++)this.render(l[g],h[g]);else{p.multiDrawArraysWEBGL(n,l,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];t.update(g,n,1)}}function c(l,h,d,p){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<l.length;_++)a(l[_],h[_],p[_]);else{g.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,d);let _=0;for(let f=0;f<d;f++)_+=h[f];for(let f=0;f<p.length;f++)t.update(_,n,p[f])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Df(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Qt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const R=C===Fr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Tn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==un&&!R)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=t.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),u=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=g>0,N=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:u,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:y,maxSamples:N}}function If(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Bn,o=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const g=d.length!==0||p||n!==0||r;return r=p,n=d.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,p){t=h(d,p,0)},this.setState=function(d,p,g){const _=d.clippingPlanes,f=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!r||_===null||_.length===0||s&&!m)s?h(null):l();else{const S=s?0:n,x=S*4;let y=u.clippingState||null;c.value=y,y=h(_,p,x,g);for(let N=0;N!==x;++N)y[N]=t[N];u.clippingState=y,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,p,g,_){const f=d!==null?d.length:0;let m=null;if(f!==0){if(m=c.value,_!==!0||m===null){const u=g+f*4,S=p.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,y=g;x!==f;++x,y+=4)a.copy(d[x]).applyMatrix4(S,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,m}}function Uf(i){let e=new WeakMap;function t(a,o){return o===Ns?a.mapping=_i:o===Fs&&(a.mapping=vi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ns||o===Fs)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Wu(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Bc extends Nc{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const di=4,_o=[.125,.215,.35,.446,.526,.582],Hn=20,vs=new Bc,vo=new Ye;let xs=null,Ms=0,Ss=0,ys=!1;const zn=(1+Math.sqrt(5))/2,ui=1/zn,xo=[new L(-zn,ui,0),new L(zn,ui,0),new L(-ui,0,zn),new L(ui,0,zn),new L(0,zn,-ui),new L(0,zn,ui),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Mo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){xs=this._renderer.getRenderTarget(),Ms=this._renderer.getActiveCubeFace(),Ss=this._renderer.getActiveMipmapLevel(),ys=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Eo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xs,Ms,Ss),this._renderer.xr.enabled=ys,e.scissorTest=!1,xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_i||e.mapping===vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xs=this._renderer.getRenderTarget(),Ms=this._renderer.getActiveCubeFace(),Ss=this._renderer.getActiveMipmapLevel(),ys=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:Fr,format:Qt,colorSpace:Rn,depthBuffer:!1},r=So(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=So(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nf(s)),this._blurMaterial=Ff(s,e,t)}return r}_compileMaterial(e){const t=new Ke(this._lodPlanes[0],e);this._renderer.compile(t,vs)}_sceneToCubeUV(e,t,n,r){const o=new Bt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(vo),h.toneMapping=wn,h.autoClear=!1;const g=new Xt({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),_=new Ke(new ze,g);let f=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,f=!0):(g.color.copy(vo),f=!0);for(let u=0;u<6;u++){const S=u%3;S===0?(o.up.set(0,c[u],0),o.lookAt(l[u],0,0)):S===1?(o.up.set(0,0,c[u]),o.lookAt(0,l[u],0)):(o.up.set(0,c[u],0),o.lookAt(0,0,l[u]));const x=this._cubeSize;xr(r,S*x,u>2?x:0,x,x),h.setRenderTarget(r),f&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===_i||e.mapping===vi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Eo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ke(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;xr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,vs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=xo[(r-s-1)%xo.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Ke(this._lodPlanes[r],l),p=l.uniforms,g=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Hn-1),f=s/_,m=isFinite(s)?1+Math.floor(h*f):Hn;m>Hn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hn}`);const u=[];let S=0;for(let R=0;R<Hn;++R){const U=R/f,w=Math.exp(-U*U/2);u.push(w),R===0?S+=w:R<m&&(S+=2*w)}for(let R=0;R<u.length;R++)u[R]=u[R]/S;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:x}=this;p.dTheta.value=_,p.mipInt.value=x-n;const y=this._sizeLods[r],N=3*y*(r>x-di?r-x+di:0),C=4*(this._cubeSize-y);xr(t,N,C,3*y,2*y),c.setRenderTarget(t),c.render(d,vs)}}function Nf(i){const e=[],t=[],n=[];let r=i;const s=i-di+1+_o.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-di?c=_o[a-i+di-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,p=[h,h,d,h,d,d,h,h,d,d,h,d],g=6,_=6,f=3,m=2,u=1,S=new Float32Array(f*_*g),x=new Float32Array(m*_*g),y=new Float32Array(u*_*g);for(let C=0;C<g;C++){const R=C%3*2/3-1,U=C>2?0:-1,w=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];S.set(w,f*_*C),x.set(p,m*_*C);const M=[C,C,C,C,C,C];y.set(M,u*_*C)}const N=new It;N.setAttribute("position",new qt(S,f)),N.setAttribute("uv",new qt(x,m)),N.setAttribute("faceIndex",new qt(y,u)),e.push(N),r>di&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function So(i,e,t){const n=new Xn(i,e,t);return n.texture.mapping=Nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Ff(i,e,t){const n=new Float32Array(Hn),r=new L(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:Hn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function yo(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Eo(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function ea(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Of(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ns||c===Fs,h=c===_i||c===vi;if(l||h){let d=e.get(o);const p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new Mo(i)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const g=o.image;return l&&g&&g.height>0||h&&g&&r(g)?(t===null&&(t=new Mo(i)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Bf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ac("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function zf(i,e,t,n){const r={},s=new WeakMap;function a(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);for(const _ in p.morphAttributes){const f=p.morphAttributes[_];for(let m=0,u=f.length;m<u;m++)e.remove(f[m])}p.removeEventListener("dispose",a),delete r[p.id];const g=s.get(p);g&&(e.remove(g),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,t.memory.geometries++),p}function c(d){const p=d.attributes;for(const _ in p)e.update(p[_],i.ARRAY_BUFFER);const g=d.morphAttributes;for(const _ in g){const f=g[_];for(let m=0,u=f.length;m<u;m++)e.update(f[m],i.ARRAY_BUFFER)}}function l(d){const p=[],g=d.index,_=d.attributes.position;let f=0;if(g!==null){const S=g.array;f=g.version;for(let x=0,y=S.length;x<y;x+=3){const N=S[x+0],C=S[x+1],R=S[x+2];p.push(N,C,C,R,R,N)}}else if(_!==void 0){const S=_.array;f=_.version;for(let x=0,y=S.length/3-1;x<y;x+=3){const N=x+0,C=x+1,R=x+2;p.push(N,C,C,R,R,N)}}else return;const m=new(Tc(p)?Ic:Dc)(p,1);m.version=f;const u=s.get(d);u&&e.remove(u),s.set(d,m)}function h(d){const p=s.get(d);if(p){const g=d.index;g!==null&&p.version<g.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function kf(i,e,t){let n;function r(p){n=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function c(p,g){i.drawElements(n,g,s,p*a),t.update(g,n,1)}function l(p,g,_){_!==0&&(i.drawElementsInstanced(n,g,s,p*a,_),t.update(g,n,_))}function h(p,g,_){if(_===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<_;m++)this.render(p[m]/a,g[m]);else{f.multiDrawElementsWEBGL(n,g,0,s,p,0,_);let m=0;for(let u=0;u<_;u++)m+=g[u];t.update(m,n,1)}}function d(p,g,_,f){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)l(p[u]/a,g[u],f[u]);else{m.multiDrawElementsInstancedWEBGL(n,g,0,s,p,0,f,0,_);let u=0;for(let S=0;S<_;S++)u+=g[S];for(let S=0;S<f.length;S++)t.update(u,n,f[S])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Hf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Gf(i,e,t){const n=new WeakMap,r=new lt;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let p=n.get(o);if(p===void 0||p.count!==d){let M=function(){U.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var g=M;p!==void 0&&p.texture.dispose();const _=o.morphAttributes.position!==void 0,f=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),f===!0&&(y=2),m===!0&&(y=3);let N=o.attributes.position.count*y,C=1;N>e.maxTextureSize&&(C=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const R=new Float32Array(N*C*4*d),U=new Rc(R,N,C,d);U.type=un,U.needsUpdate=!0;const w=y*4;for(let P=0;P<d;P++){const X=u[P],k=S[P],$=x[P],j=N*C*4*P;for(let Y=0;Y<X.count;Y++){const te=Y*w;_===!0&&(r.fromBufferAttribute(X,Y),R[j+te+0]=r.x,R[j+te+1]=r.y,R[j+te+2]=r.z,R[j+te+3]=0),f===!0&&(r.fromBufferAttribute(k,Y),R[j+te+4]=r.x,R[j+te+5]=r.y,R[j+te+6]=r.z,R[j+te+7]=0),m===!0&&(r.fromBufferAttribute($,Y),R[j+te+8]=r.x,R[j+te+9]=r.y,R[j+te+10]=r.z,R[j+te+11]=$.itemSize===4?r.w:1)}}p={count:d,texture:U,size:new de(N,C)},n.set(o,p),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const f=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",f),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function Vf(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return d}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class zc extends At{constructor(e,t,n,r,s,a,o,c,l,h=mi){if(h!==mi&&h!==Si)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===mi&&(n=xi),n===void 0&&h===Si&&(n=Mi),super(null,r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Dt,this.minFilter=c!==void 0?c:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const kc=new At,Hc=new zc(1,1);Hc.compareFunction=bc;const Gc=new Rc,Vc=new Cu,Wc=new Fc,wo=[],bo=[],To=new Float32Array(16),Ao=new Float32Array(9),Co=new Float32Array(4);function Ai(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=wo[r];if(s===void 0&&(s=new Float32Array(r),wo[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Br(i,e){let t=bo[e];t===void 0&&(t=new Int32Array(e),bo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Wf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Xf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function qf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function Yf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function $f(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;Co.set(n),i.uniformMatrix2fv(this.addr,!1,Co),Mt(t,n)}}function Kf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;Ao.set(n),i.uniformMatrix3fv(this.addr,!1,Ao),Mt(t,n)}}function Jf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(xt(t,n))return;To.set(n),i.uniformMatrix4fv(this.addr,!1,To),Mt(t,n)}}function Zf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function jf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function Qf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function ep(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function tp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function np(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function rp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function sp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Hc:kc;t.setTexture2D(e||s,r)}function ap(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Vc,r)}function op(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Wc,r)}function cp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Gc,r)}function lp(i){switch(i){case 5126:return Wf;case 35664:return Xf;case 35665:return qf;case 35666:return Yf;case 35674:return $f;case 35675:return Kf;case 35676:return Jf;case 5124:case 35670:return Zf;case 35667:case 35671:return jf;case 35668:case 35672:return Qf;case 35669:case 35673:return ep;case 5125:return tp;case 36294:return np;case 36295:return ip;case 36296:return rp;case 35678:case 36198:case 36298:case 36306:case 35682:return sp;case 35679:case 36299:case 36307:return ap;case 35680:case 36300:case 36308:case 36293:return op;case 36289:case 36303:case 36311:case 36292:return cp}}function up(i,e){i.uniform1fv(this.addr,e)}function hp(i,e){const t=Ai(e,this.size,2);i.uniform2fv(this.addr,t)}function dp(i,e){const t=Ai(e,this.size,3);i.uniform3fv(this.addr,t)}function fp(i,e){const t=Ai(e,this.size,4);i.uniform4fv(this.addr,t)}function pp(i,e){const t=Ai(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function mp(i,e){const t=Ai(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function gp(i,e){const t=Ai(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function _p(i,e){i.uniform1iv(this.addr,e)}function vp(i,e){i.uniform2iv(this.addr,e)}function xp(i,e){i.uniform3iv(this.addr,e)}function Mp(i,e){i.uniform4iv(this.addr,e)}function Sp(i,e){i.uniform1uiv(this.addr,e)}function yp(i,e){i.uniform2uiv(this.addr,e)}function Ep(i,e){i.uniform3uiv(this.addr,e)}function wp(i,e){i.uniform4uiv(this.addr,e)}function bp(i,e,t){const n=this.cache,r=e.length,s=Br(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||kc,s[a])}function Tp(i,e,t){const n=this.cache,r=e.length,s=Br(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Vc,s[a])}function Ap(i,e,t){const n=this.cache,r=e.length,s=Br(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Wc,s[a])}function Cp(i,e,t){const n=this.cache,r=e.length,s=Br(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Gc,s[a])}function Rp(i){switch(i){case 5126:return up;case 35664:return hp;case 35665:return dp;case 35666:return fp;case 35674:return pp;case 35675:return mp;case 35676:return gp;case 5124:case 35670:return _p;case 35667:case 35671:return vp;case 35668:case 35672:return xp;case 35669:case 35673:return Mp;case 5125:return Sp;case 36294:return yp;case 36295:return Ep;case 36296:return wp;case 35678:case 36198:case 36298:case 36306:case 35682:return bp;case 35679:case 36299:case 36307:return Tp;case 35680:case 36300:case 36308:case 36293:return Ap;case 36289:case 36303:case 36311:case 36292:return Cp}}class Pp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=lp(t.type)}}class Lp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Rp(t.type)}}class Dp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Es=/(\w+)(\])?(\[|\.)?/g;function Ro(i,e){i.seq.push(e),i.map[e.id]=e}function Ip(i,e,t){const n=i.name,r=n.length;for(Es.lastIndex=0;;){const s=Es.exec(n),a=Es.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Ro(t,l===void 0?new Pp(o,i,e):new Lp(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Dp(o),Ro(t,d)),t=d}}}class Tr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Ip(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Po(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Up=37297;let Np=0;function Fp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Op(i){const e=tt.getPrimaries(tt.workingColorSpace),t=tt.getPrimaries(i);let n;switch(e===t?n="":e===Dr&&t===Lr?n="LinearDisplayP3ToLinearSRGB":e===Lr&&t===Dr&&(n="LinearSRGBToLinearDisplayP3"),i){case Rn:case Or:return[n,"LinearTransferOETF"];case Ot:case Zs:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Lo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Fp(i.getShaderSource(e),a)}else return r}function Bp(i,e){const t=Op(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function zp(i,e){let t;switch(e){case $l:t="Linear";break;case Kl:t="Reinhard";break;case Jl:t="OptimizedCineon";break;case mc:t="ACESFilmic";break;case jl:t="AgX";break;case Ql:t="Neutral";break;case Zl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function kp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zi).join(`
`)}function Hp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Gp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function zi(i){return i!==""}function Do(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Io(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vp=/^[ \t]*#include +<([\w\d./]+)>/gm;function ks(i){return i.replace(Vp,Xp)}const Wp=new Map;function Xp(i,e){let t=ke[e];if(t===void 0){const n=Wp.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ks(t)}const qp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uo(i){return i.replace(qp,Yp)}function Yp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function No(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $p(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ml?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ln&&(e="SHADOWMAP_TYPE_VSM"),e}function Kp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _i:case vi:e="ENVMAP_TYPE_CUBE";break;case Nr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vi:e="ENVMAP_MODE_REFRACTION";break}return e}function Zp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case pc:e="ENVMAP_BLENDING_MULTIPLY";break;case ql:e="ENVMAP_BLENDING_MIX";break;case Yl:e="ENVMAP_BLENDING_ADD";break}return e}function jp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Qp(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=$p(t),l=Kp(t),h=Jp(t),d=Zp(t),p=jp(t),g=kp(t),_=Hp(s),f=r.createProgram();let m,u,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(zi).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(zi).join(`
`),u.length>0&&(u+=`
`)):(m=[No(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zi).join(`
`),u=[No(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?ke.tonemapping_pars_fragment:"",t.toneMapping!==wn?zp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Bp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zi).join(`
`)),a=ks(a),a=Do(a,t),a=Io(a,t),o=ks(o),o=Do(o,t),o=Io(o,t),a=Uo(a),o=Uo(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===Ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=S+m+a,y=S+u+o,N=Po(r,r.VERTEX_SHADER,x),C=Po(r,r.FRAGMENT_SHADER,y);r.attachShader(f,N),r.attachShader(f,C),t.index0AttributeName!==void 0?r.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f);function R(P){if(i.debug.checkShaderErrors){const X=r.getProgramInfoLog(f).trim(),k=r.getShaderInfoLog(N).trim(),$=r.getShaderInfoLog(C).trim();let j=!0,Y=!0;if(r.getProgramParameter(f,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,f,N,C);else{const te=Lo(r,N,"vertex"),K=Lo(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+X+`
`+te+`
`+K)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(k===""||$==="")&&(Y=!1);Y&&(P.diagnostics={runnable:j,programLog:X,vertexShader:{log:k,prefix:m},fragmentShader:{log:$,prefix:u}})}r.deleteShader(N),r.deleteShader(C),U=new Tr(r,f),w=Gp(r,f)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(f,Up)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Np++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=N,this.fragmentShader=C,this}let em=0;class tm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new nm(e),t.set(e,n)),n}}class nm{constructor(e){this.id=em++,this.code=e,this.usedTimes=0}}function im(i,e,t,n,r,s,a){const o=new js,c=new tm,l=new Set,h=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,M,P,X,k){const $=X.fog,j=k.geometry,Y=w.isMeshStandardMaterial?X.environment:null,te=(w.isMeshStandardMaterial?t:e).get(w.envMap||Y),K=te&&te.mapping===Nr?te.image.height:null,ve=_[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const xe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,_e=xe!==void 0?xe.length:0;let Oe=0;j.morphAttributes.position!==void 0&&(Oe=1),j.morphAttributes.normal!==void 0&&(Oe=2),j.morphAttributes.color!==void 0&&(Oe=3);let We,J,ae,Me;if(ve){const nt=Jt[ve];We=nt.vertexShader,J=nt.fragmentShader}else We=w.vertexShader,J=w.fragmentShader,c.update(w),ae=c.getVertexShaderID(w),Me=c.getFragmentShaderID(w);const ce=i.getRenderTarget(),q=k.isInstancedMesh===!0,H=k.isBatchedMesh===!0,Q=!!w.map,T=!!w.matcap,b=!!te,D=!!w.aoMap,O=!!w.lightMap,V=!!w.bumpMap,Z=!!w.normalMap,ue=!!w.displacementMap,le=!!w.emissiveMap,Te=!!w.metalnessMap,A=!!w.roughnessMap,v=w.anisotropy>0,z=w.clearcoat>0,ne=w.dispersion>0,ie=w.iridescence>0,se=w.sheen>0,Re=w.transmission>0,pe=v&&!!w.anisotropyMap,ge=z&&!!w.clearcoatMap,Be=z&&!!w.clearcoatNormalMap,oe=z&&!!w.clearcoatRoughnessMap,Ae=ie&&!!w.iridescenceMap,Xe=ie&&!!w.iridescenceThicknessMap,Ne=se&&!!w.sheenColorMap,Se=se&&!!w.sheenRoughnessMap,Ge=!!w.specularMap,qe=!!w.specularColorMap,mt=!!w.specularIntensityMap,I=Re&&!!w.transmissionMap,ye=Re&&!!w.thicknessMap,ee=!!w.gradientMap,re=!!w.alphaMap,fe=w.alphaTest>0,Fe=!!w.alphaHash,Je=!!w.extensions;let gt=wn;w.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(gt=i.toneMapping);const St={shaderID:ve,shaderType:w.type,shaderName:w.name,vertexShader:We,fragmentShader:J,defines:w.defines,customVertexShaderID:ae,customFragmentShaderID:Me,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:H,batchingColor:H&&k._colorsTexture!==null,instancing:q,instancingColor:q&&k.instanceColor!==null,instancingMorph:q&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Rn,alphaToCoverage:!!w.alphaToCoverage,map:Q,matcap:T,envMap:b,envMapMode:b&&te.mapping,envMapCubeUVHeight:K,aoMap:D,lightMap:O,bumpMap:V,normalMap:Z,displacementMap:p&&ue,emissiveMap:le,normalMapObjectSpace:Z&&w.normalMapType===du,normalMapTangentSpace:Z&&w.normalMapType===wc,metalnessMap:Te,roughnessMap:A,anisotropy:v,anisotropyMap:pe,clearcoat:z,clearcoatMap:ge,clearcoatNormalMap:Be,clearcoatRoughnessMap:oe,dispersion:ne,iridescence:ie,iridescenceMap:Ae,iridescenceThicknessMap:Xe,sheen:se,sheenColorMap:Ne,sheenRoughnessMap:Se,specularMap:Ge,specularColorMap:qe,specularIntensityMap:mt,transmission:Re,transmissionMap:I,thicknessMap:ye,gradientMap:ee,opaque:w.transparent===!1&&w.blending===pi&&w.alphaToCoverage===!1,alphaMap:re,alphaTest:fe,alphaHash:Fe,combine:w.combine,mapUv:Q&&f(w.map.channel),aoMapUv:D&&f(w.aoMap.channel),lightMapUv:O&&f(w.lightMap.channel),bumpMapUv:V&&f(w.bumpMap.channel),normalMapUv:Z&&f(w.normalMap.channel),displacementMapUv:ue&&f(w.displacementMap.channel),emissiveMapUv:le&&f(w.emissiveMap.channel),metalnessMapUv:Te&&f(w.metalnessMap.channel),roughnessMapUv:A&&f(w.roughnessMap.channel),anisotropyMapUv:pe&&f(w.anisotropyMap.channel),clearcoatMapUv:ge&&f(w.clearcoatMap.channel),clearcoatNormalMapUv:Be&&f(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&f(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&f(w.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&f(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&f(w.sheenColorMap.channel),sheenRoughnessMapUv:Se&&f(w.sheenRoughnessMap.channel),specularMapUv:Ge&&f(w.specularMap.channel),specularColorMapUv:qe&&f(w.specularColorMap.channel),specularIntensityMapUv:mt&&f(w.specularIntensityMap.channel),transmissionMapUv:I&&f(w.transmissionMap.channel),thicknessMapUv:ye&&f(w.thicknessMap.channel),alphaMapUv:re&&f(w.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Z||v),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!j.attributes.uv&&(Q||re),fog:!!$,useFog:w.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Oe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,decodeVideoTexture:Q&&w.map.isVideoTexture===!0&&tt.getTransfer(w.map.colorSpace)===at,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Zt,flipSided:w.side===Pt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Je&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Je&&w.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function u(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)M.push(P),M.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(S(M,w),x(M,w),M.push(i.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function S(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function x(w,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.doubleSided&&o.enable(10),M.flipSided&&o.enable(11),M.useDepthPacking&&o.enable(12),M.dithering&&o.enable(13),M.transmission&&o.enable(14),M.sheen&&o.enable(15),M.opaque&&o.enable(16),M.pointsUvs&&o.enable(17),M.decodeVideoTexture&&o.enable(18),M.alphaToCoverage&&o.enable(19),w.push(o.mask)}function y(w){const M=_[w.type];let P;if(M){const X=Jt[M];P=ku.clone(X.uniforms)}else P=w.uniforms;return P}function N(w,M){let P;for(let X=0,k=h.length;X<k;X++){const $=h[X];if($.cacheKey===M){P=$,++P.usedTimes;break}}return P===void 0&&(P=new Qp(i,M,w,s),h.push(P)),P}function C(w){if(--w.usedTimes===0){const M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function R(w){c.remove(w)}function U(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:N,releaseProgram:C,releaseShaderCache:R,programs:h,dispose:U}}function rm(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function sm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Fo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Oo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d,p,g,_,f,m){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:p,material:g,groupOrder:_,renderOrder:d.renderOrder,z:f,group:m},i[e]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=g,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=f,u.group=m),e++,u}function o(d,p,g,_,f,m){const u=a(d,p,g,_,f,m);g.transmission>0?n.push(u):g.transparent===!0?r.push(u):t.push(u)}function c(d,p,g,_,f,m){const u=a(d,p,g,_,f,m);g.transmission>0?n.unshift(u):g.transparent===!0?r.unshift(u):t.unshift(u)}function l(d,p){t.length>1&&t.sort(d||sm),n.length>1&&n.sort(p||Fo),r.length>1&&r.sort(p||Fo)}function h(){for(let d=e,p=i.length;d<p;d++){const g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function am(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Oo,i.set(n,[a])):r>=s.length?(a=new Oo,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function om(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ye};break;case"SpotLight":t={position:new L,direction:new L,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function cm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let lm=0;function um(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function hm(i){const e=new om,t=cm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const r=new L,s=new rt,a=new rt;function o(l){let h=0,d=0,p=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let g=0,_=0,f=0,m=0,u=0,S=0,x=0,y=0,N=0,C=0,R=0;l.sort(um);for(let w=0,M=l.length;w<M;w++){const P=l[w],X=P.color,k=P.intensity,$=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=X.r*k,d+=X.g*k,p+=X.b*k;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(P.sh.coefficients[Y],k);R++}else if(P.isDirectionalLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const te=P.shadow,K=t.get(P);K.shadowBias=te.bias,K.shadowNormalBias=te.normalBias,K.shadowRadius=te.radius,K.shadowMapSize=te.mapSize,n.directionalShadow[g]=K,n.directionalShadowMap[g]=j,n.directionalShadowMatrix[g]=P.shadow.matrix,S++}n.directional[g]=Y,g++}else if(P.isSpotLight){const Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(X).multiplyScalar(k),Y.distance=$,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,n.spot[f]=Y;const te=P.shadow;if(P.map&&(n.spotLightMap[N]=P.map,N++,te.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[f]=te.matrix,P.castShadow){const K=t.get(P);K.shadowBias=te.bias,K.shadowNormalBias=te.normalBias,K.shadowRadius=te.radius,K.shadowMapSize=te.mapSize,n.spotShadow[f]=K,n.spotShadowMap[f]=j,y++}f++}else if(P.isRectAreaLight){const Y=e.get(P);Y.color.copy(X).multiplyScalar(k),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=Y,m++}else if(P.isPointLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const te=P.shadow,K=t.get(P);K.shadowBias=te.bias,K.shadowNormalBias=te.normalBias,K.shadowRadius=te.radius,K.shadowMapSize=te.mapSize,K.shadowCameraNear=te.camera.near,K.shadowCameraFar=te.camera.far,n.pointShadow[_]=K,n.pointShadowMap[_]=j,n.pointShadowMatrix[_]=P.shadow.matrix,x++}n.point[_]=Y,_++}else if(P.isHemisphereLight){const Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar(k),Y.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[u]=Y,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=p;const U=n.hash;(U.directionalLength!==g||U.pointLength!==_||U.spotLength!==f||U.rectAreaLength!==m||U.hemiLength!==u||U.numDirectionalShadows!==S||U.numPointShadows!==x||U.numSpotShadows!==y||U.numSpotMaps!==N||U.numLightProbes!==R)&&(n.directional.length=g,n.spot.length=f,n.rectArea.length=m,n.point.length=_,n.hemi.length=u,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+N-C,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,U.directionalLength=g,U.pointLength=_,U.spotLength=f,U.rectAreaLength=m,U.hemiLength=u,U.numDirectionalShadows=S,U.numPointShadows=x,U.numSpotShadows=y,U.numSpotMaps=N,U.numLightProbes=R,n.version=lm++)}function c(l,h){let d=0,p=0,g=0,_=0,f=0;const m=h.matrixWorldInverse;for(let u=0,S=l.length;u<S;u++){const x=l[u];if(x.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(x.isSpotLight){const y=n.spot[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),g++}else if(x.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const y=n.point[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),p++}else if(x.isHemisphereLight){const y=n.hemi[f];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),f++}}}return{setup:o,setupView:c,state:n}}function Bo(i){const e=new hm(i),t=[],n=[];function r(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function dm(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Bo(i),e.set(r,[o])):s>=a.length?(o=new Bo(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class fm extends $i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pm extends $i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _m(i,e,t){let n=new Qs;const r=new de,s=new de,a=new lt,o=new fm({depthPacking:hu}),c=new pm,l={},h=t.maxTextureSize,d={[bn]:Pt,[Pt]:bn,[Zt]:Zt},p=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:mm,fragmentShader:gm}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const _=new It;_.setAttribute("position",new qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new Ke(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fc;let u=this.type;this.render=function(C,R,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const w=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),X=i.state;X.setBlending(En),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const k=u!==ln&&this.type===ln,$=u===ln&&this.type!==ln;for(let j=0,Y=C.length;j<Y;j++){const te=C[j],K=te.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const ve=K.getFrameExtents();if(r.multiply(ve),s.copy(K.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ve.x),r.x=s.x*ve.x,K.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ve.y),r.y=s.y*ve.y,K.mapSize.y=s.y)),K.map===null||k===!0||$===!0){const _e=this.type!==ln?{minFilter:Dt,magFilter:Dt}:{};K.map!==null&&K.map.dispose(),K.map=new Xn(r.x,r.y,_e),K.map.texture.name=te.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const xe=K.getViewportCount();for(let _e=0;_e<xe;_e++){const Oe=K.getViewport(_e);a.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),X.viewport(a),K.updateMatrices(te,_e),n=K.getFrustum(),y(R,U,K.camera,te,this.type)}K.isPointLightShadow!==!0&&this.type===ln&&S(K,U),K.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(w,M,P)};function S(C,R){const U=e.update(f);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Xn(r.x,r.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(R,null,U,p,f,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(R,null,U,g,f,null)}function x(C,R,U,w){let M=null;const P=U.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)M=P;else if(M=U.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const X=M.uuid,k=R.uuid;let $=l[X];$===void 0&&($={},l[X]=$);let j=$[k];j===void 0&&(j=M.clone(),$[k]=j,R.addEventListener("dispose",N)),M=j}if(M.visible=R.visible,M.wireframe=R.wireframe,w===ln?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:d[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const X=i.properties.get(M);X.light=U}return M}function y(C,R,U,w,M){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===ln)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,C.matrixWorld);const k=e.update(C),$=C.material;if(Array.isArray($)){const j=k.groups;for(let Y=0,te=j.length;Y<te;Y++){const K=j[Y],ve=$[K.materialIndex];if(ve&&ve.visible){const xe=x(C,ve,w,M);C.onBeforeShadow(i,C,R,U,k,xe,K),i.renderBufferDirect(U,null,k,xe,C,K),C.onAfterShadow(i,C,R,U,k,xe,K)}}}else if($.visible){const j=x(C,$,w,M);C.onBeforeShadow(i,C,R,U,k,j,null),i.renderBufferDirect(U,null,k,j,C,null),C.onAfterShadow(i,C,R,U,k,j,null)}}const X=C.children;for(let k=0,$=X.length;k<$;k++)y(X[k],R,U,w,M)}function N(C){C.target.removeEventListener("dispose",N);for(const U in l){const w=l[U],M=C.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}function vm(i){function e(){let I=!1;const ye=new lt;let ee=null;const re=new lt(0,0,0,0);return{setMask:function(fe){ee!==fe&&!I&&(i.colorMask(fe,fe,fe,fe),ee=fe)},setLocked:function(fe){I=fe},setClear:function(fe,Fe,Je,gt,St){St===!0&&(fe*=gt,Fe*=gt,Je*=gt),ye.set(fe,Fe,Je,gt),re.equals(ye)===!1&&(i.clearColor(fe,Fe,Je,gt),re.copy(ye))},reset:function(){I=!1,ee=null,re.set(-1,0,0,0)}}}function t(){let I=!1,ye=null,ee=null,re=null;return{setTest:function(fe){fe?Me(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(fe){ye!==fe&&!I&&(i.depthMask(fe),ye=fe)},setFunc:function(fe){if(ee!==fe){switch(fe){case zl:i.depthFunc(i.NEVER);break;case kl:i.depthFunc(i.ALWAYS);break;case Hl:i.depthFunc(i.LESS);break;case Cr:i.depthFunc(i.LEQUAL);break;case Gl:i.depthFunc(i.EQUAL);break;case Vl:i.depthFunc(i.GEQUAL);break;case Wl:i.depthFunc(i.GREATER);break;case Xl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ee=fe}},setLocked:function(fe){I=fe},setClear:function(fe){re!==fe&&(i.clearDepth(fe),re=fe)},reset:function(){I=!1,ye=null,ee=null,re=null}}}function n(){let I=!1,ye=null,ee=null,re=null,fe=null,Fe=null,Je=null,gt=null,St=null;return{setTest:function(nt){I||(nt?Me(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(nt){ye!==nt&&!I&&(i.stencilMask(nt),ye=nt)},setFunc:function(nt,Yt,$t){(ee!==nt||re!==Yt||fe!==$t)&&(i.stencilFunc(nt,Yt,$t),ee=nt,re=Yt,fe=$t)},setOp:function(nt,Yt,$t){(Fe!==nt||Je!==Yt||gt!==$t)&&(i.stencilOp(nt,Yt,$t),Fe=nt,Je=Yt,gt=$t)},setLocked:function(nt){I=nt},setClear:function(nt){St!==nt&&(i.clearStencil(nt),St=nt)},reset:function(){I=!1,ye=null,ee=null,re=null,fe=null,Fe=null,Je=null,gt=null,St=null}}}const r=new e,s=new t,a=new n,o=new WeakMap,c=new WeakMap;let l={},h={},d=new WeakMap,p=[],g=null,_=!1,f=null,m=null,u=null,S=null,x=null,y=null,N=null,C=new Ye(0,0,0),R=0,U=!1,w=null,M=null,P=null,X=null,k=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,Y=0;const te=i.getParameter(i.VERSION);te.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(te)[1]),j=Y>=1):te.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),j=Y>=2);let K=null,ve={};const xe=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),Oe=new lt().fromArray(xe),We=new lt().fromArray(_e);function J(I,ye,ee,re){const fe=new Uint8Array(4),Fe=i.createTexture();i.bindTexture(I,Fe),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Je=0;Je<ee;Je++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,re,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(ye+Je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return Fe}const ae={};ae[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Me(i.DEPTH_TEST),s.setFunc(Cr),V(!1),Z(va),Me(i.CULL_FACE),D(En);function Me(I){l[I]!==!0&&(i.enable(I),l[I]=!0)}function ce(I){l[I]!==!1&&(i.disable(I),l[I]=!1)}function q(I,ye){return h[I]!==ye?(i.bindFramebuffer(I,ye),h[I]=ye,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ye),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function H(I,ye){let ee=p,re=!1;if(I){ee=d.get(ye),ee===void 0&&(ee=[],d.set(ye,ee));const fe=I.textures;if(ee.length!==fe.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let Fe=0,Je=fe.length;Fe<Je;Fe++)ee[Fe]=i.COLOR_ATTACHMENT0+Fe;ee.length=fe.length,re=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,re=!0);re&&i.drawBuffers(ee)}function Q(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const T={[kn]:i.FUNC_ADD,[yl]:i.FUNC_SUBTRACT,[El]:i.FUNC_REVERSE_SUBTRACT};T[wl]=i.MIN,T[bl]=i.MAX;const b={[Tl]:i.ZERO,[Al]:i.ONE,[Cl]:i.SRC_COLOR,[Is]:i.SRC_ALPHA,[Ul]:i.SRC_ALPHA_SATURATE,[Dl]:i.DST_COLOR,[Pl]:i.DST_ALPHA,[Rl]:i.ONE_MINUS_SRC_COLOR,[Us]:i.ONE_MINUS_SRC_ALPHA,[Il]:i.ONE_MINUS_DST_COLOR,[Ll]:i.ONE_MINUS_DST_ALPHA,[Nl]:i.CONSTANT_COLOR,[Fl]:i.ONE_MINUS_CONSTANT_COLOR,[Ol]:i.CONSTANT_ALPHA,[Bl]:i.ONE_MINUS_CONSTANT_ALPHA};function D(I,ye,ee,re,fe,Fe,Je,gt,St,nt){if(I===En){_===!0&&(ce(i.BLEND),_=!1);return}if(_===!1&&(Me(i.BLEND),_=!0),I!==Sl){if(I!==f||nt!==U){if((m!==kn||x!==kn)&&(i.blendEquation(i.FUNC_ADD),m=kn,x=kn),nt)switch(I){case pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xa:i.blendFunc(i.ONE,i.ONE);break;case Ma:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ma:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}u=null,S=null,y=null,N=null,C.set(0,0,0),R=0,f=I,U=nt}return}fe=fe||ye,Fe=Fe||ee,Je=Je||re,(ye!==m||fe!==x)&&(i.blendEquationSeparate(T[ye],T[fe]),m=ye,x=fe),(ee!==u||re!==S||Fe!==y||Je!==N)&&(i.blendFuncSeparate(b[ee],b[re],b[Fe],b[Je]),u=ee,S=re,y=Fe,N=Je),(gt.equals(C)===!1||St!==R)&&(i.blendColor(gt.r,gt.g,gt.b,St),C.copy(gt),R=St),f=I,U=!1}function O(I,ye){I.side===Zt?ce(i.CULL_FACE):Me(i.CULL_FACE);let ee=I.side===Pt;ye&&(ee=!ee),V(ee),I.blending===pi&&I.transparent===!1?D(En):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const re=I.stencilWrite;a.setTest(re),re&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),le(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Me(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function V(I){w!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),w=I)}function Z(I){I!==vl?(Me(i.CULL_FACE),I!==M&&(I===va?i.cullFace(i.BACK):I===xl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),M=I}function ue(I){I!==P&&(j&&i.lineWidth(I),P=I)}function le(I,ye,ee){I?(Me(i.POLYGON_OFFSET_FILL),(X!==ye||k!==ee)&&(i.polygonOffset(ye,ee),X=ye,k=ee)):ce(i.POLYGON_OFFSET_FILL)}function Te(I){I?Me(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function A(I){I===void 0&&(I=i.TEXTURE0+$-1),K!==I&&(i.activeTexture(I),K=I)}function v(I,ye,ee){ee===void 0&&(K===null?ee=i.TEXTURE0+$-1:ee=K);let re=ve[ee];re===void 0&&(re={type:void 0,texture:void 0},ve[ee]=re),(re.type!==I||re.texture!==ye)&&(K!==ee&&(i.activeTexture(ee),K=ee),i.bindTexture(I,ye||ae[I]),re.type=I,re.texture=ye)}function z(){const I=ve[K];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ne(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Be(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Xe(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ne(I){Oe.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Oe.copy(I))}function Se(I){We.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),We.copy(I))}function Ge(I,ye){let ee=c.get(ye);ee===void 0&&(ee=new WeakMap,c.set(ye,ee));let re=ee.get(I);re===void 0&&(re=i.getUniformBlockIndex(ye,I.name),ee.set(I,re))}function qe(I,ye){const re=c.get(ye).get(I);o.get(ye)!==re&&(i.uniformBlockBinding(ye,re,I.__bindingPointIndex),o.set(ye,re))}function mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},K=null,ve={},h={},d=new WeakMap,p=[],g=null,_=!1,f=null,m=null,u=null,S=null,x=null,y=null,N=null,C=new Ye(0,0,0),R=0,U=!1,w=null,M=null,P=null,X=null,k=null,Oe.set(0,0,i.canvas.width,i.canvas.height),We.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:Me,disable:ce,bindFramebuffer:q,drawBuffers:H,useProgram:Q,setBlending:D,setMaterial:O,setFlipSided:V,setCullFace:Z,setLineWidth:ue,setPolygonOffset:le,setScissorTest:Te,activeTexture:A,bindTexture:v,unbindTexture:z,compressedTexImage2D:ne,compressedTexImage3D:ie,texImage2D:Ae,texImage3D:Xe,updateUBOMapping:Ge,uniformBlockBinding:qe,texStorage2D:Be,texStorage3D:oe,texSubImage2D:se,texSubImage3D:Re,compressedTexSubImage2D:pe,compressedTexSubImage3D:ge,scissor:Ne,viewport:Se,reset:mt}}function xm(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new de,h=new WeakMap;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,v){return g?new OffscreenCanvas(A,v):Ur("canvas")}function f(A,v,z){let ne=1;const ie=Te(A);if((ie.width>z||ie.height>z)&&(ne=z/Math.max(ie.width,ie.height)),ne<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const se=Math.floor(ne*ie.width),Re=Math.floor(ne*ie.height);d===void 0&&(d=_(se,Re));const pe=v?_(se,Re):d;return pe.width=se,pe.height=Re,pe.getContext("2d").drawImage(A,0,0,se,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+se+"x"+Re+")."),pe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==Dt&&A.minFilter!==Wt}function u(A){i.generateMipmap(A)}function S(A,v,z,ne,ie=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let se=v;if(v===i.RED&&(z===i.FLOAT&&(se=i.R32F),z===i.HALF_FLOAT&&(se=i.R16F),z===i.UNSIGNED_BYTE&&(se=i.R8)),v===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(se=i.R8UI),z===i.UNSIGNED_SHORT&&(se=i.R16UI),z===i.UNSIGNED_INT&&(se=i.R32UI),z===i.BYTE&&(se=i.R8I),z===i.SHORT&&(se=i.R16I),z===i.INT&&(se=i.R32I)),v===i.RG&&(z===i.FLOAT&&(se=i.RG32F),z===i.HALF_FLOAT&&(se=i.RG16F),z===i.UNSIGNED_BYTE&&(se=i.RG8)),v===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(se=i.RG8UI),z===i.UNSIGNED_SHORT&&(se=i.RG16UI),z===i.UNSIGNED_INT&&(se=i.RG32UI),z===i.BYTE&&(se=i.RG8I),z===i.SHORT&&(se=i.RG16I),z===i.INT&&(se=i.RG32I)),v===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(se=i.RGB9_E5),v===i.RGBA){const Re=ie?Pr:tt.getTransfer(ne);z===i.FLOAT&&(se=i.RGBA32F),z===i.HALF_FLOAT&&(se=i.RGBA16F),z===i.UNSIGNED_BYTE&&(se=Re===at?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function x(A,v){let z;return A?v===null||v===xi||v===Mi?z=i.DEPTH24_STENCIL8:v===un?z=i.DEPTH32F_STENCIL8:v===Rr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===xi||v===Mi?z=i.DEPTH_COMPONENT24:v===un?z=i.DEPTH_COMPONENT32F:v===Rr&&(z=i.DEPTH_COMPONENT16),z}function y(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Dt&&A.minFilter!==Wt?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function N(A){const v=A.target;v.removeEventListener("dispose",N),R(v),v.isVideoTexture&&h.delete(v)}function C(A){const v=A.target;v.removeEventListener("dispose",C),w(v)}function R(A){const v=n.get(A);if(v.__webglInit===void 0)return;const z=A.source,ne=p.get(z);if(ne){const ie=ne[v.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&U(A),Object.keys(ne).length===0&&p.delete(z)}n.remove(A)}function U(A){const v=n.get(A);i.deleteTexture(v.__webglTexture);const z=A.source,ne=p.get(z);delete ne[v.__cacheKey],a.memory.textures--}function w(A){const v=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(v.__webglFramebuffer[ne]))for(let ie=0;ie<v.__webglFramebuffer[ne].length;ie++)i.deleteFramebuffer(v.__webglFramebuffer[ne][ie]);else i.deleteFramebuffer(v.__webglFramebuffer[ne]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[ne])}else{if(Array.isArray(v.__webglFramebuffer))for(let ne=0;ne<v.__webglFramebuffer.length;ne++)i.deleteFramebuffer(v.__webglFramebuffer[ne]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ne=0;ne<v.__webglColorRenderbuffer.length;ne++)v.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[ne]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const z=A.textures;for(let ne=0,ie=z.length;ne<ie;ne++){const se=n.get(z[ne]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),a.memory.textures--),n.remove(z[ne])}n.remove(A)}let M=0;function P(){M=0}function X(){const A=M;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),M+=1,A}function k(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function $(A,v){const z=n.get(A);if(A.isVideoTexture&&ue(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const ne=A.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{We(z,A,v);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+v)}function j(A,v){const z=n.get(A);if(A.version>0&&z.__version!==A.version){We(z,A,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+v)}function Y(A,v){const z=n.get(A);if(A.version>0&&z.__version!==A.version){We(z,A,v);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+v)}function te(A,v){const z=n.get(A);if(A.version>0&&z.__version!==A.version){J(z,A,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+v)}const K={[Os]:i.REPEAT,[Gn]:i.CLAMP_TO_EDGE,[Bs]:i.MIRRORED_REPEAT},ve={[Dt]:i.NEAREST,[eu]:i.NEAREST_MIPMAP_NEAREST,[ji]:i.NEAREST_MIPMAP_LINEAR,[Wt]:i.LINEAR,[qr]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},xe={[fu]:i.NEVER,[xu]:i.ALWAYS,[pu]:i.LESS,[bc]:i.LEQUAL,[mu]:i.EQUAL,[vu]:i.GEQUAL,[gu]:i.GREATER,[_u]:i.NOTEQUAL};function _e(A,v){if(v.type===un&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Wt||v.magFilter===qr||v.magFilter===ji||v.magFilter===Vn||v.minFilter===Wt||v.minFilter===qr||v.minFilter===ji||v.minFilter===Vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,K[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,K[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,K[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ve[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ve[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,xe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Dt||v.minFilter!==ji&&v.minFilter!==Vn||v.type===un&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Oe(A,v){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",N));const ne=v.source;let ie=p.get(ne);ie===void 0&&(ie={},p.set(ne,ie));const se=k(v);if(se!==A.__cacheKey){ie[se]===void 0&&(ie[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ie[se].usedTimes++;const Re=ie[A.__cacheKey];Re!==void 0&&(ie[A.__cacheKey].usedTimes--,Re.usedTimes===0&&U(v)),A.__cacheKey=se,A.__webglTexture=ie[se].texture}return z}function We(A,v,z){let ne=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ne=i.TEXTURE_3D);const ie=Oe(A,v),se=v.source;t.bindTexture(ne,A.__webglTexture,i.TEXTURE0+z);const Re=n.get(se);if(se.version!==Re.__version||ie===!0){t.activeTexture(i.TEXTURE0+z);const pe=tt.getPrimaries(tt.workingColorSpace),ge=v.colorSpace===yn?null:tt.getPrimaries(v.colorSpace),Be=v.colorSpace===yn||pe===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let oe=f(v.image,!1,r.maxTextureSize);oe=le(v,oe);const Ae=s.convert(v.format,v.colorSpace),Xe=s.convert(v.type);let Ne=S(v.internalFormat,Ae,Xe,v.colorSpace,v.isVideoTexture);_e(ne,v);let Se;const Ge=v.mipmaps,qe=v.isVideoTexture!==!0,mt=Re.__version===void 0||ie===!0,I=se.dataReady,ye=y(v,oe);if(v.isDepthTexture)Ne=x(v.format===Si,v.type),mt&&(qe?t.texStorage2D(i.TEXTURE_2D,1,Ne,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,Ne,oe.width,oe.height,0,Ae,Xe,null));else if(v.isDataTexture)if(Ge.length>0){qe&&mt&&t.texStorage2D(i.TEXTURE_2D,ye,Ne,Ge[0].width,Ge[0].height);for(let ee=0,re=Ge.length;ee<re;ee++)Se=Ge[ee],qe?I&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,Se.width,Se.height,Ae,Xe,Se.data):t.texImage2D(i.TEXTURE_2D,ee,Ne,Se.width,Se.height,0,Ae,Xe,Se.data);v.generateMipmaps=!1}else qe?(mt&&t.texStorage2D(i.TEXTURE_2D,ye,Ne,oe.width,oe.height),I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe.width,oe.height,Ae,Xe,oe.data)):t.texImage2D(i.TEXTURE_2D,0,Ne,oe.width,oe.height,0,Ae,Xe,oe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){qe&&mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Ne,Ge[0].width,Ge[0].height,oe.depth);for(let ee=0,re=Ge.length;ee<re;ee++)if(Se=Ge[ee],v.format!==Qt)if(Ae!==null)if(qe){if(I)if(v.layerUpdates.size>0){for(const fe of v.layerUpdates){const Fe=Se.width*Se.height;t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,fe,Se.width,Se.height,1,Ae,Se.data.slice(Fe*fe,Fe*(fe+1)),0,0)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,Se.width,Se.height,oe.depth,Ae,Se.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,Ne,Se.width,Se.height,oe.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,Se.width,Se.height,oe.depth,Ae,Xe,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,Ne,Se.width,Se.height,oe.depth,0,Ae,Xe,Se.data)}else{qe&&mt&&t.texStorage2D(i.TEXTURE_2D,ye,Ne,Ge[0].width,Ge[0].height);for(let ee=0,re=Ge.length;ee<re;ee++)Se=Ge[ee],v.format!==Qt?Ae!==null?qe?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,Se.width,Se.height,Ae,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,Ne,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?I&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,Se.width,Se.height,Ae,Xe,Se.data):t.texImage2D(i.TEXTURE_2D,ee,Ne,Se.width,Se.height,0,Ae,Xe,Se.data)}else if(v.isDataArrayTexture)if(qe){if(mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Ne,oe.width,oe.height,oe.depth),I)if(v.layerUpdates.size>0){let ee;switch(Xe){case i.UNSIGNED_BYTE:switch(Ae){case i.ALPHA:ee=1;break;case i.LUMINANCE:ee=1;break;case i.LUMINANCE_ALPHA:ee=2;break;case i.RGB:ee=3;break;case i.RGBA:ee=4;break;default:throw new Error(`Unknown texel size for format ${Ae}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:ee=1;break;default:throw new Error(`Unknown texel size for type ${Xe}.`)}const re=oe.width*oe.height*ee;for(const fe of v.layerUpdates)t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,fe,oe.width,oe.height,1,Ae,Xe,oe.data.slice(re*fe,re*(fe+1)));v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Ae,Xe,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,oe.width,oe.height,oe.depth,0,Ae,Xe,oe.data);else if(v.isData3DTexture)qe?(mt&&t.texStorage3D(i.TEXTURE_3D,ye,Ne,oe.width,oe.height,oe.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Ae,Xe,oe.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,oe.width,oe.height,oe.depth,0,Ae,Xe,oe.data);else if(v.isFramebufferTexture){if(mt)if(qe)t.texStorage2D(i.TEXTURE_2D,ye,Ne,oe.width,oe.height);else{let ee=oe.width,re=oe.height;for(let fe=0;fe<ye;fe++)t.texImage2D(i.TEXTURE_2D,fe,Ne,ee,re,0,Ae,Xe,null),ee>>=1,re>>=1}}else if(Ge.length>0){if(qe&&mt){const ee=Te(Ge[0]);t.texStorage2D(i.TEXTURE_2D,ye,Ne,ee.width,ee.height)}for(let ee=0,re=Ge.length;ee<re;ee++)Se=Ge[ee],qe?I&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,Ae,Xe,Se):t.texImage2D(i.TEXTURE_2D,ee,Ne,Ae,Xe,Se);v.generateMipmaps=!1}else if(qe){if(mt){const ee=Te(oe);t.texStorage2D(i.TEXTURE_2D,ye,Ne,ee.width,ee.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,Xe,oe)}else t.texImage2D(i.TEXTURE_2D,0,Ne,Ae,Xe,oe);m(v)&&u(ne),Re.__version=se.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function J(A,v,z){if(v.image.length!==6)return;const ne=Oe(A,v),ie=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);const se=n.get(ie);if(ie.version!==se.__version||ne===!0){t.activeTexture(i.TEXTURE0+z);const Re=tt.getPrimaries(tt.workingColorSpace),pe=v.colorSpace===yn?null:tt.getPrimaries(v.colorSpace),ge=v.colorSpace===yn||Re===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Be=v.isCompressedTexture||v.image[0].isCompressedTexture,oe=v.image[0]&&v.image[0].isDataTexture,Ae=[];for(let re=0;re<6;re++)!Be&&!oe?Ae[re]=f(v.image[re],!0,r.maxCubemapSize):Ae[re]=oe?v.image[re].image:v.image[re],Ae[re]=le(v,Ae[re]);const Xe=Ae[0],Ne=s.convert(v.format,v.colorSpace),Se=s.convert(v.type),Ge=S(v.internalFormat,Ne,Se,v.colorSpace),qe=v.isVideoTexture!==!0,mt=se.__version===void 0||ne===!0,I=ie.dataReady;let ye=y(v,Xe);_e(i.TEXTURE_CUBE_MAP,v);let ee;if(Be){qe&&mt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Ge,Xe.width,Xe.height);for(let re=0;re<6;re++){ee=Ae[re].mipmaps;for(let fe=0;fe<ee.length;fe++){const Fe=ee[fe];v.format!==Qt?Ne!==null?qe?I&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,fe,0,0,Fe.width,Fe.height,Ne,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,fe,Ge,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,fe,0,0,Fe.width,Fe.height,Ne,Se,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,fe,Ge,Fe.width,Fe.height,0,Ne,Se,Fe.data)}}}else{if(ee=v.mipmaps,qe&&mt){ee.length>0&&ye++;const re=Te(Ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Ge,re.width,re.height)}for(let re=0;re<6;re++)if(oe){qe?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ae[re].width,Ae[re].height,Ne,Se,Ae[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ge,Ae[re].width,Ae[re].height,0,Ne,Se,Ae[re].data);for(let fe=0;fe<ee.length;fe++){const Je=ee[fe].image[re].image;qe?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,fe+1,0,0,Je.width,Je.height,Ne,Se,Je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,fe+1,Ge,Je.width,Je.height,0,Ne,Se,Je.data)}}else{qe?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ne,Se,Ae[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,Ge,Ne,Se,Ae[re]);for(let fe=0;fe<ee.length;fe++){const Fe=ee[fe];qe?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,fe+1,0,0,Ne,Se,Fe.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,fe+1,Ge,Ne,Se,Fe.image[re])}}}m(v)&&u(i.TEXTURE_CUBE_MAP),se.__version=ie.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function ae(A,v,z,ne,ie,se){const Re=s.convert(z.format,z.colorSpace),pe=s.convert(z.type),ge=S(z.internalFormat,Re,pe,z.colorSpace);if(!n.get(v).__hasExternalTextures){const oe=Math.max(1,v.width>>se),Ae=Math.max(1,v.height>>se);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,se,ge,oe,Ae,v.depth,0,Re,pe,null):t.texImage2D(ie,se,ge,oe,Ae,0,Re,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Z(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,ie,n.get(z).__webglTexture,0,V(v)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,ie,n.get(z).__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(A,v,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){const ne=v.depthTexture,ie=ne&&ne.isDepthTexture?ne.type:null,se=x(v.stencilBuffer,ie),Re=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=V(v);Z(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,se,v.width,v.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,se,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,se,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,A)}else{const ne=v.textures;for(let ie=0;ie<ne.length;ie++){const se=ne[ie],Re=s.convert(se.format,se.colorSpace),pe=s.convert(se.type),ge=S(se.internalFormat,Re,pe,se.colorSpace),Be=V(v);z&&Z(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,ge,v.width,v.height):Z(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Be,ge,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ge,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ce(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$(v.depthTexture,0);const ne=n.get(v.depthTexture).__webglTexture,ie=V(v);if(v.depthTexture.format===mi)Z(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(v.depthTexture.format===Si)Z(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function q(A){const v=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ce(v.__webglFramebuffer,A)}else if(z){v.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ne]),v.__webglDepthbuffer[ne]=i.createRenderbuffer(),Me(v.__webglDepthbuffer[ne],A,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),Me(v.__webglDepthbuffer,A,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function H(A,v,z){const ne=n.get(A);v!==void 0&&ae(ne.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&q(A)}function Q(A){const v=A.texture,z=n.get(A),ne=n.get(v);A.addEventListener("dispose",C);const ie=A.textures,se=A.isWebGLCubeRenderTarget===!0,Re=ie.length>1;if(Re||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=v.version,a.memory.textures++),se){z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[pe]=[];for(let ge=0;ge<v.mipmaps.length;ge++)z.__webglFramebuffer[pe][ge]=i.createFramebuffer()}else z.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let pe=0;pe<v.mipmaps.length;pe++)z.__webglFramebuffer[pe]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Re)for(let pe=0,ge=ie.length;pe<ge;pe++){const Be=n.get(ie[pe]);Be.__webglTexture===void 0&&(Be.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Z(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let pe=0;pe<ie.length;pe++){const ge=ie[pe];z.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[pe]);const Be=s.convert(ge.format,ge.colorSpace),oe=s.convert(ge.type),Ae=S(ge.internalFormat,Be,oe,ge.colorSpace,A.isXRRenderTarget===!0),Xe=V(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,Ae,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,z.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),_e(i.TEXTURE_CUBE_MAP,v);for(let pe=0;pe<6;pe++)if(v.mipmaps&&v.mipmaps.length>0)for(let ge=0;ge<v.mipmaps.length;ge++)ae(z.__webglFramebuffer[pe][ge],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ge);else ae(z.__webglFramebuffer[pe],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(v)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let pe=0,ge=ie.length;pe<ge;pe++){const Be=ie[pe],oe=n.get(Be);t.bindTexture(i.TEXTURE_2D,oe.__webglTexture),_e(i.TEXTURE_2D,Be),ae(z.__webglFramebuffer,A,Be,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,0),m(Be)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(pe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,ne.__webglTexture),_e(pe,v),v.mipmaps&&v.mipmaps.length>0)for(let ge=0;ge<v.mipmaps.length;ge++)ae(z.__webglFramebuffer[ge],A,v,i.COLOR_ATTACHMENT0,pe,ge);else ae(z.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,pe,0);m(v)&&u(pe),t.unbindTexture()}A.depthBuffer&&q(A)}function T(A){const v=A.textures;for(let z=0,ne=v.length;z<ne;z++){const ie=v[z];if(m(ie)){const se=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Re=n.get(ie).__webglTexture;t.bindTexture(se,Re),u(se),t.unbindTexture()}}}const b=[],D=[];function O(A){if(A.samples>0){if(Z(A)===!1){const v=A.textures,z=A.width,ne=A.height;let ie=i.COLOR_BUFFER_BIT;const se=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(A),pe=v.length>1;if(pe)for(let ge=0;ge<v.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let ge=0;ge<v.length;ge++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[ge]);const Be=n.get(v[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Be,0)}i.blitFramebuffer(0,0,z,ne,0,0,z,ne,ie,i.NEAREST),c===!0&&(b.length=0,D.length=0,b.push(i.COLOR_ATTACHMENT0+ge),A.depthBuffer&&A.resolveDepthBuffer===!1&&(b.push(se),D.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,b))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let ge=0;ge<v.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,Re.__webglColorRenderbuffer[ge]);const Be=n.get(v[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,Be,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function V(A){return Math.min(r.maxSamples,A.samples)}function Z(A){const v=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ue(A){const v=a.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function le(A,v){const z=A.colorSpace,ne=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Rn&&z!==yn&&(tt.getTransfer(z)===at?(ne!==Qt||ie!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),v}function Te(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=P,this.setTexture2D=$,this.setTexture2DArray=j,this.setTexture3D=Y,this.setTextureCube=te,this.rebindTextures=H,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=T,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=q,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Z}function Mm(i,e){function t(n,r=yn){let s;const a=tt.getTransfer(r);if(n===Tn)return i.UNSIGNED_BYTE;if(n===vc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===iu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tu)return i.BYTE;if(n===nu)return i.SHORT;if(n===Rr)return i.UNSIGNED_SHORT;if(n===_c)return i.INT;if(n===xi)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===Fr)return i.HALF_FLOAT;if(n===ru)return i.ALPHA;if(n===su)return i.RGB;if(n===Qt)return i.RGBA;if(n===au)return i.LUMINANCE;if(n===ou)return i.LUMINANCE_ALPHA;if(n===mi)return i.DEPTH_COMPONENT;if(n===Si)return i.DEPTH_STENCIL;if(n===Mc)return i.RED;if(n===Sc)return i.RED_INTEGER;if(n===cu)return i.RG;if(n===yc)return i.RG_INTEGER;if(n===Ec)return i.RGBA_INTEGER;if(n===Yr||n===$r||n===Kr||n===Jr)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Yr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Yr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$r)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Kr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ya||n===Ea||n===wa||n===ba)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ya)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ea)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ba)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ta||n===Aa||n===Ca)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ta||n===Aa)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ca)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ra||n===Pa||n===La||n===Da||n===Ia||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===ka||n===Ha||n===Ga)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ra)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===La)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Da)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ia)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ua)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Na)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ba)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===za)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ka)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ha)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ga)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zr||n===Va||n===Wa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Zr)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Va)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Wa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lu||n===Xa||n===qa||n===Ya)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Zr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Xa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===qa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ya)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Mi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Sm extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qe extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ym={type:"move"};class ws{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const f of e.hand.values()){const m=t.getJointPose(f,n),u=this._getHandJoint(l,f);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=h.position.distanceTo(d.position),g=.02,_=.005;l.inputState.pinching&&p>g+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=g-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ym)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Qe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Em=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class bm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new At,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new An({vertexShader:Em,fragmentShader:wm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ke(new Cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class Tm extends bi{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,p=null,g=null,_=null;const f=new bm,m=t.getContextAttributes();let u=null,S=null;const x=[],y=[],N=new de;let C=null;const R=new Bt;R.layers.enable(1),R.viewport=new lt;const U=new Bt;U.layers.enable(2),U.viewport=new lt;const w=[R,U],M=new Sm;M.layers.enable(1),M.layers.enable(2);let P=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ae=x[J];return ae===void 0&&(ae=new ws,x[J]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(J){let ae=x[J];return ae===void 0&&(ae=new ws,x[J]=ae),ae.getGripSpace()},this.getHand=function(J){let ae=x[J];return ae===void 0&&(ae=new ws,x[J]=ae),ae.getHandSpace()};function k(J){const ae=y.indexOf(J.inputSource);if(ae===-1)return;const Me=x[ae];Me!==void 0&&(Me.update(J.inputSource,J.frame,l||a),Me.dispatchEvent({type:J.type,data:J.inputSource}))}function $(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",j);for(let J=0;J<x.length;J++){const ae=y[J];ae!==null&&(y[J]=null,x[J].disconnect(ae))}P=null,X=null,f.reset(),e.setRenderTarget(u),g=null,p=null,d=null,r=null,S=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",$),r.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(N),r.renderState.layers===void 0){const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),S=new Xn(g.framebufferWidth,g.framebufferHeight,{format:Qt,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,Me=null,ce=null;m.depth&&(ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?Si:mi,Me=m.stencil?Mi:xi);const q={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:s};d=new XRWebGLBinding(r,t),p=d.createProjectionLayer(q),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),S=new Xn(p.textureWidth,p.textureHeight,{format:Qt,type:Tn,depthTexture:new zc(p.textureWidth,p.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),We.setContext(r),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function j(J){for(let ae=0;ae<J.removed.length;ae++){const Me=J.removed[ae],ce=y.indexOf(Me);ce>=0&&(y[ce]=null,x[ce].disconnect(Me))}for(let ae=0;ae<J.added.length;ae++){const Me=J.added[ae];let ce=y.indexOf(Me);if(ce===-1){for(let H=0;H<x.length;H++)if(H>=y.length){y.push(Me),ce=H;break}else if(y[H]===null){y[H]=Me,ce=H;break}if(ce===-1)break}const q=x[ce];q&&q.connect(Me)}}const Y=new L,te=new L;function K(J,ae,Me){Y.setFromMatrixPosition(ae.matrixWorld),te.setFromMatrixPosition(Me.matrixWorld);const ce=Y.distanceTo(te),q=ae.projectionMatrix.elements,H=Me.projectionMatrix.elements,Q=q[14]/(q[10]-1),T=q[14]/(q[10]+1),b=(q[9]+1)/q[5],D=(q[9]-1)/q[5],O=(q[8]-1)/q[0],V=(H[8]+1)/H[0],Z=Q*O,ue=Q*V,le=ce/(-O+V),Te=le*-O;ae.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Te),J.translateZ(le),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const A=Q+le,v=T+le,z=Z-Te,ne=ue+(ce-Te),ie=b*T/v*A,se=D*T/v*A;J.projectionMatrix.makePerspective(z,ne,ie,se,A,v),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function ve(J,ae){ae===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ae.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;f.texture!==null&&(J.near=f.depthNear,J.far=f.depthFar),M.near=U.near=R.near=J.near,M.far=U.far=R.far=J.far,(P!==M.near||X!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,X=M.far,R.near=P,R.far=X,U.near=P,U.far=X,R.updateProjectionMatrix(),U.updateProjectionMatrix(),J.updateProjectionMatrix());const ae=J.parent,Me=M.cameras;ve(M,ae);for(let ce=0;ce<Me.length;ce++)ve(Me[ce],ae);Me.length===2?K(M,R,U):M.projectionMatrix.copy(R.projectionMatrix),xe(J,M,ae)};function xe(J,ae,Me){Me===null?J.matrix.copy(ae.matrixWorld):(J.matrix.copy(Me.matrixWorld),J.matrix.invert(),J.matrix.multiply(ae.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=zs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&g===null))return c},this.setFoveation=function(J){c=J,p!==null&&(p.fixedFoveation=J),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=J)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(M)};let _e=null;function Oe(J,ae){if(h=ae.getViewerPose(l||a),_=ae,h!==null){const Me=h.views;g!==null&&(e.setRenderTargetFramebuffer(S,g.framebuffer),e.setRenderTarget(S));let ce=!1;Me.length!==M.cameras.length&&(M.cameras.length=0,ce=!0);for(let H=0;H<Me.length;H++){const Q=Me[H];let T=null;if(g!==null)T=g.getViewport(Q);else{const D=d.getViewSubImage(p,Q);T=D.viewport,H===0&&(e.setRenderTargetTextures(S,D.colorTexture,p.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(S))}let b=w[H];b===void 0&&(b=new Bt,b.layers.enable(H),b.viewport=new lt,w[H]=b),b.matrix.fromArray(Q.transform.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale),b.projectionMatrix.fromArray(Q.projectionMatrix),b.projectionMatrixInverse.copy(b.projectionMatrix).invert(),b.viewport.set(T.x,T.y,T.width,T.height),H===0&&(M.matrix.copy(b.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ce===!0&&M.cameras.push(b)}const q=r.enabledFeatures;if(q&&q.includes("depth-sensing")){const H=d.getDepthInformation(Me[0]);H&&H.isValid&&H.texture&&f.init(e,H,r.renderState)}}for(let Me=0;Me<x.length;Me++){const ce=y[Me],q=x[Me];ce!==null&&q!==void 0&&q.update(ce,ae,l||a)}_e&&_e(J,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),_=null}const We=new Oc;We.setAnimationLoop(Oe),this.setAnimationLoop=function(J){_e=J},this.dispose=function(){}}}const On=new en,Am=new rt;function Cm(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Uc(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,S,x,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),p(m,u),u.isMeshPhysicalMaterial&&g(m,u,y)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),f(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?c(m,u,S,x):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Pt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Pt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const S=e.get(u),x=S.envMap,y=S.envMapRotation;x&&(m.envMap.value=x,On.copy(y),On.x*=-1,On.y*=-1,On.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),m.envMapRotation.value.setFromMatrix4(Am.makeRotationFromEuler(On)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,S,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*S,m.scale.value=x*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function g(m,u,S){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Pt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function f(m,u){const S=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Rm(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,x){const y=x.program;n.uniformBlockBinding(S,y)}function l(S,x){let y=r[S.id];y===void 0&&(_(S),y=h(S),r[S.id]=y,S.addEventListener("dispose",m));const N=x.program;n.updateUBOMapping(S,N);const C=e.render.frame;s[S.id]!==C&&(p(S),s[S.id]=C)}function h(S){const x=d();S.__bindingPointIndex=x;const y=i.createBuffer(),N=S.__size,C=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,N,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,y),y}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){const x=r[S.id],y=S.uniforms,N=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let C=0,R=y.length;C<R;C++){const U=Array.isArray(y[C])?y[C]:[y[C]];for(let w=0,M=U.length;w<M;w++){const P=U[w];if(g(P,C,w,N)===!0){const X=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let $=0;for(let j=0;j<k.length;j++){const Y=k[j],te=f(Y);typeof Y=="number"||typeof Y=="boolean"?(P.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,X+$,P.__data)):Y.isMatrix3?(P.__data[0]=Y.elements[0],P.__data[1]=Y.elements[1],P.__data[2]=Y.elements[2],P.__data[3]=0,P.__data[4]=Y.elements[3],P.__data[5]=Y.elements[4],P.__data[6]=Y.elements[5],P.__data[7]=0,P.__data[8]=Y.elements[6],P.__data[9]=Y.elements[7],P.__data[10]=Y.elements[8],P.__data[11]=0):(Y.toArray(P.__data,$),$+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(S,x,y,N){const C=S.value,R=x+"_"+y;if(N[R]===void 0)return typeof C=="number"||typeof C=="boolean"?N[R]=C:N[R]=C.clone(),!0;{const U=N[R];if(typeof C=="number"||typeof C=="boolean"){if(U!==C)return N[R]=C,!0}else if(U.equals(C)===!1)return U.copy(C),!0}return!1}function _(S){const x=S.uniforms;let y=0;const N=16;for(let R=0,U=x.length;R<U;R++){const w=Array.isArray(x[R])?x[R]:[x[R]];for(let M=0,P=w.length;M<P;M++){const X=w[M],k=Array.isArray(X.value)?X.value:[X.value];for(let $=0,j=k.length;$<j;$++){const Y=k[$],te=f(Y),K=y%N;K!==0&&N-K<te.boundary&&(y+=N-K),X.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=y,y+=te.storage}}}const C=y%N;return C>0&&(y+=N-C),S.__size=y,S.__cache={},this}function f(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const S in r)i.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:c,update:l,dispose:u}}class Pm{constructor(e={}){const{canvas:t=Su(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let f=null,m=null;const u=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this.toneMapping=wn,this.toneMappingExposure=1;const x=this;let y=!1,N=0,C=0,R=null,U=-1,w=null;const M=new lt,P=new lt;let X=null;const k=new Ye(0);let $=0,j=t.width,Y=t.height,te=1,K=null,ve=null;const xe=new lt(0,0,j,Y),_e=new lt(0,0,j,Y);let Oe=!1;const We=new Qs;let J=!1,ae=!1;const Me=new rt,ce=new L,q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let H=!1;function Q(){return R===null?te:1}let T=n;function b(E,F){return t.getContext(E,F)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Js}`),t.addEventListener("webglcontextlost",ye,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",re,!1),T===null){const F="webgl2";if(T=b(F,E),T===null)throw b(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let D,O,V,Z,ue,le,Te,A,v,z,ne,ie,se,Re,pe,ge,Be,oe,Ae,Xe,Ne,Se,Ge,qe;function mt(){D=new Bf(T),D.init(),Se=new Mm(T,D),O=new Df(T,D,e,Se),V=new vm(T),Z=new Hf(T),ue=new rm,le=new xm(T,D,V,ue,O,Se,Z),Te=new Uf(x),A=new Of(x),v=new Yu(T),Ge=new Pf(T,v),z=new zf(T,v,Z,Ge),ne=new Vf(T,z,v,Z),Ae=new Gf(T,O,le),ge=new If(ue),ie=new im(x,Te,A,D,O,Ge,ge),se=new Cm(x,ue),Re=new am,pe=new dm(D),oe=new Rf(x,Te,A,V,ne,p,c),Be=new _m(x,ne,O),qe=new Rm(T,Z,O,V),Xe=new Lf(T,D,Z),Ne=new kf(T,D,Z),Z.programs=ie.programs,x.capabilities=O,x.extensions=D,x.properties=ue,x.renderLists=Re,x.shadowMap=Be,x.state=V,x.info=Z}mt();const I=new Tm(x,T);this.xr=I,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){const E=D.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=D.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(E){E!==void 0&&(te=E,this.setSize(j,Y,!1))},this.getSize=function(E){return E.set(j,Y)},this.setSize=function(E,F,G=!0){if(I.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=E,Y=F,t.width=Math.floor(E*te),t.height=Math.floor(F*te),G===!0&&(t.style.width=E+"px",t.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(j*te,Y*te).floor()},this.setDrawingBufferSize=function(E,F,G){j=E,Y=F,te=G,t.width=Math.floor(E*G),t.height=Math.floor(F*G),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(M)},this.getViewport=function(E){return E.copy(xe)},this.setViewport=function(E,F,G,W){E.isVector4?xe.set(E.x,E.y,E.z,E.w):xe.set(E,F,G,W),V.viewport(M.copy(xe).multiplyScalar(te).round())},this.getScissor=function(E){return E.copy(_e)},this.setScissor=function(E,F,G,W){E.isVector4?_e.set(E.x,E.y,E.z,E.w):_e.set(E,F,G,W),V.scissor(P.copy(_e).multiplyScalar(te).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(E){V.setScissorTest(Oe=E)},this.setOpaqueSort=function(E){K=E},this.setTransparentSort=function(E){ve=E},this.getClearColor=function(E){return E.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(E=!0,F=!0,G=!0){let W=0;if(E){let B=!1;if(R!==null){const he=R.texture.format;B=he===Ec||he===yc||he===Sc}if(B){const he=R.texture.type,Ee=he===Tn||he===xi||he===Rr||he===Mi||he===vc||he===xc,be=oe.getClearColor(),Ce=oe.getClearAlpha(),Ie=be.r,Ue=be.g,De=be.b;Ee?(g[0]=Ie,g[1]=Ue,g[2]=De,g[3]=Ce,T.clearBufferuiv(T.COLOR,0,g)):(_[0]=Ie,_[1]=Ue,_[2]=De,_[3]=Ce,T.clearBufferiv(T.COLOR,0,_))}else W|=T.COLOR_BUFFER_BIT}F&&(W|=T.DEPTH_BUFFER_BIT),G&&(W|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ye,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",re,!1),Re.dispose(),pe.dispose(),ue.dispose(),Te.dispose(),A.dispose(),ne.dispose(),Ge.dispose(),qe.dispose(),ie.dispose(),I.dispose(),I.removeEventListener("sessionstart",Yt),I.removeEventListener("sessionend",$t),Pn.stop()};function ye(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=Z.autoReset,F=Be.enabled,G=Be.autoUpdate,W=Be.needsUpdate,B=Be.type;mt(),Z.autoReset=E,Be.enabled=F,Be.autoUpdate=G,Be.needsUpdate=W,Be.type=B}function re(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function fe(E){const F=E.target;F.removeEventListener("dispose",fe),Fe(F)}function Fe(E){Je(E),ue.remove(E)}function Je(E){const F=ue.get(E).programs;F!==void 0&&(F.forEach(function(G){ie.releaseProgram(G)}),E.isShaderMaterial&&ie.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,G,W,B,he){F===null&&(F=q);const Ee=B.isMesh&&B.matrixWorld.determinant()<0,be=pl(E,F,G,W,B);V.setMaterial(W,Ee);let Ce=G.index,Ie=1;if(W.wireframe===!0){if(Ce=z.getWireframeAttribute(G),Ce===void 0)return;Ie=2}const Ue=G.drawRange,De=G.attributes.position;let je=Ue.start*Ie,dt=(Ue.start+Ue.count)*Ie;he!==null&&(je=Math.max(je,he.start*Ie),dt=Math.min(dt,(he.start+he.count)*Ie)),Ce!==null?(je=Math.max(je,0),dt=Math.min(dt,Ce.count)):De!=null&&(je=Math.max(je,0),dt=Math.min(dt,De.count));const ft=dt-je;if(ft<0||ft===1/0)return;Ge.setup(B,W,be,G,Ce);let Ut,et=Xe;if(Ce!==null&&(Ut=v.get(Ce),et=Ne,et.setIndex(Ut)),B.isMesh)W.wireframe===!0?(V.setLineWidth(W.wireframeLinewidth*Q()),et.setMode(T.LINES)):et.setMode(T.TRIANGLES);else if(B.isLine){let Pe=W.linewidth;Pe===void 0&&(Pe=1),V.setLineWidth(Pe*Q()),B.isLineSegments?et.setMode(T.LINES):B.isLineLoop?et.setMode(T.LINE_LOOP):et.setMode(T.LINE_STRIP)}else B.isPoints?et.setMode(T.POINTS):B.isSprite&&et.setMode(T.TRIANGLES);if(B.isBatchedMesh)B._multiDrawInstances!==null?et.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances):et.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)et.renderInstances(je,ft,B.count);else if(G.isInstancedBufferGeometry){const Pe=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ct=Math.min(G.instanceCount,Pe);et.renderInstances(je,ft,Ct)}else et.render(je,ft)};function gt(E,F,G){E.transparent===!0&&E.side===Zt&&E.forceSinglePass===!1?(E.side=Pt,E.needsUpdate=!0,Ji(E,F,G),E.side=bn,E.needsUpdate=!0,Ji(E,F,G),E.side=Zt):Ji(E,F,G)}this.compile=function(E,F,G=null){G===null&&(G=E),m=pe.get(G),m.init(F),S.push(m),G.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),E!==G&&E.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const W=new Set;return E.traverse(function(B){const he=B.material;if(he)if(Array.isArray(he))for(let Ee=0;Ee<he.length;Ee++){const be=he[Ee];gt(be,G,B),W.add(be)}else gt(he,G,B),W.add(he)}),S.pop(),m=null,W},this.compileAsync=function(E,F,G=null){const W=this.compile(E,F,G);return new Promise(B=>{function he(){if(W.forEach(function(Ee){ue.get(Ee).currentProgram.isReady()&&W.delete(Ee)}),W.size===0){B(E);return}setTimeout(he,10)}D.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let St=null;function nt(E){St&&St(E)}function Yt(){Pn.stop()}function $t(){Pn.start()}const Pn=new Oc;Pn.setAnimationLoop(nt),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(E){St=E,I.setAnimationLoop(E),E===null?Pn.stop():Pn.start()},I.addEventListener("sessionstart",Yt),I.addEventListener("sessionend",$t),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),I.enabled===!0&&I.isPresenting===!0&&(I.cameraAutoUpdate===!0&&I.updateCamera(F),F=I.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,F,R),m=pe.get(E,S.length),m.init(F),S.push(m),Me.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),We.setFromProjectionMatrix(Me),ae=this.localClippingEnabled,J=ge.init(this.clippingPlanes,ae),f=Re.get(E,u.length),f.init(),u.push(f),I.enabled===!0&&I.isPresenting===!0){const he=x.xr.getDepthSensingMesh();he!==null&&Gr(he,F,-1/0,x.sortObjects)}Gr(E,F,0,x.sortObjects),f.finish(),x.sortObjects===!0&&f.sort(K,ve),H=I.enabled===!1||I.isPresenting===!1||I.hasDepthSensing()===!1,H&&oe.addToRenderList(f,E),this.info.render.frame++,J===!0&&ge.beginShadows();const G=m.state.shadowsArray;Be.render(G,E,F),J===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=f.opaque,B=f.transmissive;if(m.setupLights(),F.isArrayCamera){const he=F.cameras;if(B.length>0)for(let Ee=0,be=he.length;Ee<be;Ee++){const Ce=he[Ee];fa(W,B,E,Ce)}H&&oe.render(E);for(let Ee=0,be=he.length;Ee<be;Ee++){const Ce=he[Ee];da(f,E,Ce,Ce.viewport)}}else B.length>0&&fa(W,B,E,F),H&&oe.render(E),da(f,E,F);R!==null&&(le.updateMultisampleRenderTarget(R),le.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(x,E,F),Ge.resetDefaultState(),U=-1,w=null,S.pop(),S.length>0?(m=S[S.length-1],J===!0&&ge.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?f=u[u.length-1]:f=null};function Gr(E,F,G,W){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||We.intersectsSprite(E)){W&&ce.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Me);const Ee=ne.update(E),be=E.material;be.visible&&f.push(E,Ee,be,G,ce.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||We.intersectsObject(E))){const Ee=ne.update(E),be=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ce.copy(E.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),ce.copy(Ee.boundingSphere.center)),ce.applyMatrix4(E.matrixWorld).applyMatrix4(Me)),Array.isArray(be)){const Ce=Ee.groups;for(let Ie=0,Ue=Ce.length;Ie<Ue;Ie++){const De=Ce[Ie],je=be[De.materialIndex];je&&je.visible&&f.push(E,Ee,je,G,ce.z,De)}}else be.visible&&f.push(E,Ee,be,G,ce.z,null)}}const he=E.children;for(let Ee=0,be=he.length;Ee<be;Ee++)Gr(he[Ee],F,G,W)}function da(E,F,G,W){const B=E.opaque,he=E.transmissive,Ee=E.transparent;m.setupLightsView(G),J===!0&&ge.setGlobalState(x.clippingPlanes,G),W&&V.viewport(M.copy(W)),B.length>0&&Ki(B,F,G),he.length>0&&Ki(he,F,G),Ee.length>0&&Ki(Ee,F,G),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function fa(E,F,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new Xn(1,1,{generateMipmaps:!0,type:D.has("EXT_color_buffer_half_float")||D.has("EXT_color_buffer_float")?Fr:Tn,minFilter:Vn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const he=m.state.transmissionRenderTarget[W.id],Ee=W.viewport||M;he.setSize(Ee.z,Ee.w);const be=x.getRenderTarget();x.setRenderTarget(he),x.getClearColor(k),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),H?oe.render(G):x.clear();const Ce=x.toneMapping;x.toneMapping=wn;const Ie=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),J===!0&&ge.setGlobalState(x.clippingPlanes,W),Ki(E,G,W),le.updateMultisampleRenderTarget(he),le.updateRenderTargetMipmap(he),D.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let De=0,je=F.length;De<je;De++){const dt=F[De],ft=dt.object,Ut=dt.geometry,et=dt.material,Pe=dt.group;if(et.side===Zt&&ft.layers.test(W.layers)){const Ct=et.side;et.side=Pt,et.needsUpdate=!0,pa(ft,G,W,Ut,et,Pe),et.side=Ct,et.needsUpdate=!0,Ue=!0}}Ue===!0&&(le.updateMultisampleRenderTarget(he),le.updateRenderTargetMipmap(he))}x.setRenderTarget(be),x.setClearColor(k,$),Ie!==void 0&&(W.viewport=Ie),x.toneMapping=Ce}function Ki(E,F,G){const W=F.isScene===!0?F.overrideMaterial:null;for(let B=0,he=E.length;B<he;B++){const Ee=E[B],be=Ee.object,Ce=Ee.geometry,Ie=W===null?Ee.material:W,Ue=Ee.group;be.layers.test(G.layers)&&pa(be,F,G,Ce,Ie,Ue)}}function pa(E,F,G,W,B,he){E.onBeforeRender(x,F,G,W,B,he),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(x,F,G,W,E,he),B.transparent===!0&&B.side===Zt&&B.forceSinglePass===!1?(B.side=Pt,B.needsUpdate=!0,x.renderBufferDirect(G,F,W,B,E,he),B.side=bn,B.needsUpdate=!0,x.renderBufferDirect(G,F,W,B,E,he),B.side=Zt):x.renderBufferDirect(G,F,W,B,E,he),E.onAfterRender(x,F,G,W,B,he)}function Ji(E,F,G){F.isScene!==!0&&(F=q);const W=ue.get(E),B=m.state.lights,he=m.state.shadowsArray,Ee=B.state.version,be=ie.getParameters(E,B.state,he,F,G),Ce=ie.getProgramCacheKey(be);let Ie=W.programs;W.environment=E.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(E.isMeshStandardMaterial?A:Te).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Ie===void 0&&(E.addEventListener("dispose",fe),Ie=new Map,W.programs=Ie);let Ue=Ie.get(Ce);if(Ue!==void 0){if(W.currentProgram===Ue&&W.lightsStateVersion===Ee)return ga(E,be),Ue}else be.uniforms=ie.getUniforms(E),E.onBuild(G,be,x),E.onBeforeCompile(be,x),Ue=ie.acquireProgram(be,Ce),Ie.set(Ce,Ue),W.uniforms=be.uniforms;const De=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(De.clippingPlanes=ge.uniform),ga(E,be),W.needsLights=gl(E),W.lightsStateVersion=Ee,W.needsLights&&(De.ambientLightColor.value=B.state.ambient,De.lightProbe.value=B.state.probe,De.directionalLights.value=B.state.directional,De.directionalLightShadows.value=B.state.directionalShadow,De.spotLights.value=B.state.spot,De.spotLightShadows.value=B.state.spotShadow,De.rectAreaLights.value=B.state.rectArea,De.ltc_1.value=B.state.rectAreaLTC1,De.ltc_2.value=B.state.rectAreaLTC2,De.pointLights.value=B.state.point,De.pointLightShadows.value=B.state.pointShadow,De.hemisphereLights.value=B.state.hemi,De.directionalShadowMap.value=B.state.directionalShadowMap,De.directionalShadowMatrix.value=B.state.directionalShadowMatrix,De.spotShadowMap.value=B.state.spotShadowMap,De.spotLightMatrix.value=B.state.spotLightMatrix,De.spotLightMap.value=B.state.spotLightMap,De.pointShadowMap.value=B.state.pointShadowMap,De.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=Ue,W.uniformsList=null,Ue}function ma(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Tr.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function ga(E,F){const G=ue.get(E);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function pl(E,F,G,W,B){F.isScene!==!0&&(F=q),le.resetTextureUnits();const he=F.fog,Ee=W.isMeshStandardMaterial?F.environment:null,be=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Rn,Ce=(W.isMeshStandardMaterial?A:Te).get(W.envMap||Ee),Ie=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ue=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),De=!!G.morphAttributes.position,je=!!G.morphAttributes.normal,dt=!!G.morphAttributes.color;let ft=wn;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ft=x.toneMapping);const Ut=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,et=Ut!==void 0?Ut.length:0,Pe=ue.get(W),Ct=m.state.lights;if(J===!0&&(ae===!0||E!==w)){const zt=E===w&&W.id===U;ge.setState(W,E,zt)}let it=!1;W.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==Ct.state.version||Pe.outputColorSpace!==be||B.isBatchedMesh&&Pe.batching===!1||!B.isBatchedMesh&&Pe.batching===!0||B.isBatchedMesh&&Pe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Pe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Pe.instancing===!1||!B.isInstancedMesh&&Pe.instancing===!0||B.isSkinnedMesh&&Pe.skinning===!1||!B.isSkinnedMesh&&Pe.skinning===!0||B.isInstancedMesh&&Pe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Pe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Pe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Pe.instancingMorph===!1&&B.morphTexture!==null||Pe.envMap!==Ce||W.fog===!0&&Pe.fog!==he||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ge.numPlanes||Pe.numIntersection!==ge.numIntersection)||Pe.vertexAlphas!==Ie||Pe.vertexTangents!==Ue||Pe.morphTargets!==De||Pe.morphNormals!==je||Pe.morphColors!==dt||Pe.toneMapping!==ft||Pe.morphTargetsCount!==et)&&(it=!0):(it=!0,Pe.__version=W.version);let nn=Pe.currentProgram;it===!0&&(nn=Ji(W,F,B));let Zi=!1,Ln=!1,Vr=!1;const yt=nn.getUniforms(),fn=Pe.uniforms;if(V.useProgram(nn.program)&&(Zi=!0,Ln=!0,Vr=!0),W.id!==U&&(U=W.id,Ln=!0),Zi||w!==E){yt.setValue(T,"projectionMatrix",E.projectionMatrix),yt.setValue(T,"viewMatrix",E.matrixWorldInverse);const zt=yt.map.cameraPosition;zt!==void 0&&zt.setValue(T,ce.setFromMatrixPosition(E.matrixWorld)),O.logarithmicDepthBuffer&&yt.setValue(T,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&yt.setValue(T,"isOrthographic",E.isOrthographicCamera===!0),w!==E&&(w=E,Ln=!0,Vr=!0)}if(B.isSkinnedMesh){yt.setOptional(T,B,"bindMatrix"),yt.setOptional(T,B,"bindMatrixInverse");const zt=B.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),yt.setValue(T,"boneTexture",zt.boneTexture,le))}B.isBatchedMesh&&(yt.setOptional(T,B,"batchingTexture"),yt.setValue(T,"batchingTexture",B._matricesTexture,le),yt.setOptional(T,B,"batchingColorTexture"),B._colorsTexture!==null&&yt.setValue(T,"batchingColorTexture",B._colorsTexture,le));const Wr=G.morphAttributes;if((Wr.position!==void 0||Wr.normal!==void 0||Wr.color!==void 0)&&Ae.update(B,G,nn),(Ln||Pe.receiveShadow!==B.receiveShadow)&&(Pe.receiveShadow=B.receiveShadow,yt.setValue(T,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(fn.envMap.value=Ce,fn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(fn.envMapIntensity.value=F.environmentIntensity),Ln&&(yt.setValue(T,"toneMappingExposure",x.toneMappingExposure),Pe.needsLights&&ml(fn,Vr),he&&W.fog===!0&&se.refreshFogUniforms(fn,he),se.refreshMaterialUniforms(fn,W,te,Y,m.state.transmissionRenderTarget[E.id]),Tr.upload(T,ma(Pe),fn,le)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Tr.upload(T,ma(Pe),fn,le),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&yt.setValue(T,"center",B.center),yt.setValue(T,"modelViewMatrix",B.modelViewMatrix),yt.setValue(T,"normalMatrix",B.normalMatrix),yt.setValue(T,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const zt=W.uniformsGroups;for(let Xr=0,_l=zt.length;Xr<_l;Xr++){const _a=zt[Xr];qe.update(_a,nn),qe.bind(_a,nn)}}return nn}function ml(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function gl(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,F,G){ue.get(E.texture).__webglTexture=F,ue.get(E.depthTexture).__webglTexture=G;const W=ue.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||D.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const G=ue.get(E);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,G=0){R=E,N=F,C=G;let W=!0,B=null,he=!1,Ee=!1;if(E){const Ce=ue.get(E);Ce.__useDefaultFramebuffer!==void 0?(V.bindFramebuffer(T.FRAMEBUFFER,null),W=!1):Ce.__webglFramebuffer===void 0?le.setupRenderTarget(E):Ce.__hasExternalTextures&&le.rebindTextures(E,ue.get(E.texture).__webglTexture,ue.get(E.depthTexture).__webglTexture);const Ie=E.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Ee=!0);const Ue=ue.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ue[F])?B=Ue[F][G]:B=Ue[F],he=!0):E.samples>0&&le.useMultisampledRTT(E)===!1?B=ue.get(E).__webglMultisampledFramebuffer:Array.isArray(Ue)?B=Ue[G]:B=Ue,M.copy(E.viewport),P.copy(E.scissor),X=E.scissorTest}else M.copy(xe).multiplyScalar(te).floor(),P.copy(_e).multiplyScalar(te).floor(),X=Oe;if(V.bindFramebuffer(T.FRAMEBUFFER,B)&&W&&V.drawBuffers(E,B),V.viewport(M),V.scissor(P),V.setScissorTest(X),he){const Ce=ue.get(E.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ce.__webglTexture,G)}else if(Ee){const Ce=ue.get(E.texture),Ie=F||0;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,Ce.__webglTexture,G||0,Ie)}U=-1},this.readRenderTargetPixels=function(E,F,G,W,B,he,Ee){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(be=be[Ee]),be){V.bindFramebuffer(T.FRAMEBUFFER,be);try{const Ce=E.texture,Ie=Ce.format,Ue=Ce.type;if(!O.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!O.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-W&&G>=0&&G<=E.height-B&&T.readPixels(F,G,W,B,Se.convert(Ie),Se.convert(Ue),he)}finally{const Ce=R!==null?ue.get(R).__webglFramebuffer:null;V.bindFramebuffer(T.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(E,F,G,W,B,he,Ee){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=ue.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(be=be[Ee]),be){V.bindFramebuffer(T.FRAMEBUFFER,be);try{const Ce=E.texture,Ie=Ce.format,Ue=Ce.type;if(!O.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-W&&G>=0&&G<=E.height-B){const De=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,De),T.bufferData(T.PIXEL_PACK_BUFFER,he.byteLength,T.STREAM_READ),T.readPixels(F,G,W,B,Se.convert(Ie),Se.convert(Ue),0),T.flush();const je=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);await yu(T,je,4);try{T.bindBuffer(T.PIXEL_PACK_BUFFER,De),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,he)}finally{T.deleteBuffer(De),T.deleteSync(je)}return he}}finally{const Ce=R!==null?ue.get(R).__webglFramebuffer:null;V.bindFramebuffer(T.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(E,F=null,G=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const W=Math.pow(2,-G),B=Math.floor(E.image.width*W),he=Math.floor(E.image.height*W),Ee=F!==null?F.x:0,be=F!==null?F.y:0;le.setTexture2D(E,0),T.copyTexSubImage2D(T.TEXTURE_2D,G,0,0,Ee,be,B,he),V.unbindTexture()},this.copyTextureToTexture=function(E,F,G=null,W=null,B=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],F=arguments[2],B=arguments[3]||0,G=null);let he,Ee,be,Ce,Ie,Ue;G!==null?(he=G.max.x-G.min.x,Ee=G.max.y-G.min.y,be=G.min.x,Ce=G.min.y):(he=E.image.width,Ee=E.image.height,be=0,Ce=0),W!==null?(Ie=W.x,Ue=W.y):(Ie=0,Ue=0);const De=Se.convert(F.format),je=Se.convert(F.type);le.setTexture2D(F,0),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,F.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,F.unpackAlignment);const dt=T.getParameter(T.UNPACK_ROW_LENGTH),ft=T.getParameter(T.UNPACK_IMAGE_HEIGHT),Ut=T.getParameter(T.UNPACK_SKIP_PIXELS),et=T.getParameter(T.UNPACK_SKIP_ROWS),Pe=T.getParameter(T.UNPACK_SKIP_IMAGES),Ct=E.isCompressedTexture?E.mipmaps[B]:E.image;T.pixelStorei(T.UNPACK_ROW_LENGTH,Ct.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,Ct.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,be),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ce),E.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,B,Ie,Ue,he,Ee,De,je,Ct.data):E.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,B,Ie,Ue,Ct.width,Ct.height,De,Ct.data):T.texSubImage2D(T.TEXTURE_2D,B,Ie,Ue,De,je,Ct),T.pixelStorei(T.UNPACK_ROW_LENGTH,dt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ft),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ut),T.pixelStorei(T.UNPACK_SKIP_ROWS,et),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Pe),B===0&&F.generateMipmaps&&T.generateMipmap(T.TEXTURE_2D),V.unbindTexture()},this.copyTextureToTexture3D=function(E,F,G=null,W=null,B=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,E=arguments[2],F=arguments[3],B=arguments[4]||0);let he,Ee,be,Ce,Ie,Ue,De,je,dt;const ft=E.isCompressedTexture?E.mipmaps[B]:E.image;G!==null?(he=G.max.x-G.min.x,Ee=G.max.y-G.min.y,be=G.max.z-G.min.z,Ce=G.min.x,Ie=G.min.y,Ue=G.min.z):(he=ft.width,Ee=ft.height,be=ft.depth,Ce=0,Ie=0,Ue=0),W!==null?(De=W.x,je=W.y,dt=W.z):(De=0,je=0,dt=0);const Ut=Se.convert(F.format),et=Se.convert(F.type);let Pe;if(F.isData3DTexture)le.setTexture3D(F,0),Pe=T.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)le.setTexture2DArray(F,0),Pe=T.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,F.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,F.unpackAlignment);const Ct=T.getParameter(T.UNPACK_ROW_LENGTH),it=T.getParameter(T.UNPACK_IMAGE_HEIGHT),nn=T.getParameter(T.UNPACK_SKIP_PIXELS),Zi=T.getParameter(T.UNPACK_SKIP_ROWS),Ln=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ft.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ft.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ce),T.pixelStorei(T.UNPACK_SKIP_ROWS,Ie),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ue),E.isDataTexture||E.isData3DTexture?T.texSubImage3D(Pe,B,De,je,dt,he,Ee,be,Ut,et,ft.data):F.isCompressedArrayTexture?T.compressedTexSubImage3D(Pe,B,De,je,dt,he,Ee,be,Ut,ft.data):T.texSubImage3D(Pe,B,De,je,dt,he,Ee,be,Ut,et,ft),T.pixelStorei(T.UNPACK_ROW_LENGTH,Ct),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,it),T.pixelStorei(T.UNPACK_SKIP_PIXELS,nn),T.pixelStorei(T.UNPACK_SKIP_ROWS,Zi),T.pixelStorei(T.UNPACK_SKIP_IMAGES,Ln),B===0&&F.generateMipmaps&&T.generateMipmap(Pe),V.unbindTexture()},this.initRenderTarget=function(E){ue.get(E).__webglFramebuffer===void 0&&le.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?le.setTextureCube(E,0):E.isData3DTexture?le.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?le.setTexture2DArray(E,0):le.setTexture2D(E,0),V.unbindTexture()},this.resetState=function(){N=0,C=0,R=null,V.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Zs?"display-p3":"srgb",t.unpackColorSpace=tt.workingColorSpace===Or?"display-p3":"srgb"}}class ta{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ye(e),this.near=t,this.far=n}clone(){return new ta(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Lm extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Dm extends At{constructor(e=null,t=1,n=1,r,s,a,o,c,l=Dt,h=Dt,d,p){super(null,a,o,c,l,h,r,s,d,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hs extends qt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const hi=new rt,zo=new rt,Mr=[],ko=new Yn,Im=new rt,Fi=new Ke,Oi=new Yi;class Um extends Ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Im)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hi),ko.copy(e.boundingBox).applyMatrix4(hi),this.boundingBox.union(ko)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hi),Oi.copy(e.boundingSphere).applyMatrix4(hi),this.boundingSphere.union(Oi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Fi.geometry=this.geometry,Fi.material=this.material,Fi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oi.copy(this.boundingSphere),Oi.applyMatrix4(n),e.ray.intersectsSphere(Oi)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,hi),zo.multiplyMatrices(n,hi),Fi.matrixWorld=zo,Fi.raycast(e,Mr);for(let a=0,o=Mr.length;a<o;a++){const c=Mr[a];c.instanceId=s,c.object=this,t.push(c)}Mr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Hs(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Dm(new Float32Array(r*this.count),r,this.count,Mc,un));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Xc extends At{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,c=s-1,l;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),l=n[r]-a,l<0)o=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const h=n[r],p=n[r+1]-h,g=(a-h)/p;return(r+g)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=t||(a.isVector2?new de:new L);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new L,r=[],s=[],a=[],o=new L,c=new rt;for(let g=0;g<=e;g++){const _=g/e;r[g]=this.getTangentAt(_,new L)}s[0]=new L,a[0]=new L;let l=Number.MAX_VALUE;const h=Math.abs(r[0].x),d=Math.abs(r[0].y),p=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),p<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let g=1;g<=e;g++){if(s[g]=s[g-1].clone(),a[g]=a[g-1].clone(),o.crossVectors(r[g-1],r[g]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(wt(r[g-1].dot(r[g]),-1,1));s[g].applyMatrix4(c.makeRotationAxis(o,_))}a[g].crossVectors(r[g],s[g])}if(t===!0){let g=Math.acos(wt(s[0].dot(s[e]),-1,1));g/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(g=-g);for(let _=1;_<=e;_++)s[_].applyMatrix4(c.makeRotationAxis(r[_],g*_)),a[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class na extends tn{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new de){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=c-this.aX,g=l-this.aY;c=p*h-g*d+this.aX,l=p*d+g*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Nm extends na{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ia(){let i=0,e=0,t=0,n=0;function r(s,a,o,c){i=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,d){let p=(a-s)/l-(o-s)/(l+h)+(o-a)/h,g=(o-a)/h-(c-a)/(h+d)+(c-o)/d;p*=h,g*=h,r(a,o,p,g)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const Sr=new L,bs=new ia,Ts=new ia,As=new ia;class Fm extends tn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new L){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let l,h;this.closed||o>0?l=r[(o-1)%s]:(Sr.subVectors(r[0],r[1]).add(r[0]),l=Sr);const d=r[o%s],p=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(Sr.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Sr),this.curveType==="centripetal"||this.curveType==="chordal"){const g=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(d),g),f=Math.pow(d.distanceToSquared(p),g),m=Math.pow(p.distanceToSquared(h),g);f<1e-4&&(f=1),_<1e-4&&(_=f),m<1e-4&&(m=f),bs.initNonuniformCatmullRom(l.x,d.x,p.x,h.x,_,f,m),Ts.initNonuniformCatmullRom(l.y,d.y,p.y,h.y,_,f,m),As.initNonuniformCatmullRom(l.z,d.z,p.z,h.z,_,f,m)}else this.curveType==="catmullrom"&&(bs.initCatmullRom(l.x,d.x,p.x,h.x,this.tension),Ts.initCatmullRom(l.y,d.y,p.y,h.y,this.tension),As.initCatmullRom(l.z,d.z,p.z,h.z,this.tension));return n.set(bs.calc(c),Ts.calc(c),As.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ho(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,c=i*o;return(2*t-2*n+s+a)*c+(-3*t+3*n-2*s-a)*o+s*i+t}function Om(i,e){const t=1-i;return t*t*e}function Bm(i,e){return 2*(1-i)*i*e}function zm(i,e){return i*i*e}function ki(i,e,t,n){return Om(i,e)+Bm(i,t)+zm(i,n)}function km(i,e){const t=1-i;return t*t*t*e}function Hm(i,e){const t=1-i;return 3*t*t*i*e}function Gm(i,e){return 3*(1-i)*i*i*e}function Vm(i,e){return i*i*i*e}function Hi(i,e,t,n,r){return km(i,e)+Hm(i,t)+Gm(i,n)+Vm(i,r)}class qc extends tn{constructor(e=new de,t=new de,n=new de,r=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new de){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Hi(e,r.x,s.x,a.x,o.x),Hi(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Wm extends tn{constructor(e=new L,t=new L,n=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new L){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Hi(e,r.x,s.x,a.x,o.x),Hi(e,r.y,s.y,a.y,o.y),Hi(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Yc extends tn{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xm extends tn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $c extends tn{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(ki(e,r.x,s.x,a.x),ki(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qm extends tn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(ki(e,r.x,s.x,a.x),ki(e,r.y,s.y,a.y),ki(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kc extends tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],h=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return n.set(Ho(o,c.x,l.x,h.x,d.x),Ho(o,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new de().fromArray(r))}return this}}var Gs=Object.freeze({__proto__:null,ArcCurve:Nm,CatmullRomCurve3:Fm,CubicBezierCurve:qc,CubicBezierCurve3:Wm,EllipseCurve:na,LineCurve:Yc,LineCurve3:Xm,QuadraticBezierCurve:$c,QuadraticBezierCurve3:qm,SplineCurve:Kc});class Ym extends tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gs[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Gs[r.type]().fromJSON(r))}return this}}class Vs extends Ym{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Yc(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new $c(this.currentPoint.clone(),new de(e,t),new de(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new qc(this.currentPoint.clone(),new de(e,t),new de(n,r),new de(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Kc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,r,s,a,o,c),this}absellipse(e,t,n,r,s,a,o,c){const l=new na(e,t,n,r,s,a,o,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ra extends It{constructor(e=[new de(0,-.5),new de(.5,0),new de(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=wt(r,0,Math.PI*2);const s=[],a=[],o=[],c=[],l=[],h=1/t,d=new L,p=new de,g=new L,_=new L,f=new L;let m=0,u=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,u=e[S+1].y-e[S].y,g.x=u*1,g.y=-m,g.z=u*0,f.copy(g),g.normalize(),c.push(g.x,g.y,g.z);break;case e.length-1:c.push(f.x,f.y,f.z);break;default:m=e[S+1].x-e[S].x,u=e[S+1].y-e[S].y,g.x=u*1,g.y=-m,g.z=u*0,_.copy(g),g.x+=f.x,g.y+=f.y,g.z+=f.z,g.normalize(),c.push(g.x,g.y,g.z),f.copy(_)}for(let S=0;S<=t;S++){const x=n+S*h*r,y=Math.sin(x),N=Math.cos(x);for(let C=0;C<=e.length-1;C++){d.x=e[C].x*y,d.y=e[C].y,d.z=e[C].x*N,a.push(d.x,d.y,d.z),p.x=S/t,p.y=C/(e.length-1),o.push(p.x,p.y);const R=c[3*C+0]*y,U=c[3*C+1],w=c[3*C+0]*N;l.push(R,U,w)}}for(let S=0;S<t;S++)for(let x=0;x<e.length-1;x++){const y=x+S*e.length,N=y,C=y+e.length,R=y+e.length+1,U=y+1;s.push(N,C,U),s.push(R,U,C)}this.setIndex(s),this.setAttribute("position",new st(a,3)),this.setAttribute("uv",new st(o,2)),this.setAttribute("normal",new st(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.points,e.segments,e.phiStart,e.phiLength)}}class dn extends ra{constructor(e=1,t=1,n=4,r=8){const s=new Vs;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new dn(e.radius,e.length,e.capSegments,e.radialSegments)}}class zr extends It{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new L,h=new de;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,p=3;d<=t;d++,p+=3){const g=n+d/t*r;l.x=e*Math.cos(g),l.y=e*Math.sin(g),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[p]/e+1)/2,h.y=(a[p+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(o,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class $e extends It{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],p=[],g=[];let _=0;const f=[],m=n/2;let u=0;S(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new st(d,3)),this.setAttribute("normal",new st(p,3)),this.setAttribute("uv",new st(g,2));function S(){const y=new L,N=new L;let C=0;const R=(t-e)/n;for(let U=0;U<=s;U++){const w=[],M=U/s,P=M*(t-e)+e;for(let X=0;X<=r;X++){const k=X/r,$=k*c+o,j=Math.sin($),Y=Math.cos($);N.x=P*j,N.y=-M*n+m,N.z=P*Y,d.push(N.x,N.y,N.z),y.set(j,R,Y).normalize(),p.push(y.x,y.y,y.z),g.push(k,1-M),w.push(_++)}f.push(w)}for(let U=0;U<r;U++)for(let w=0;w<s;w++){const M=f[w][U],P=f[w+1][U],X=f[w+1][U+1],k=f[w][U+1];h.push(M,P,k),h.push(P,X,k),C+=6}l.addGroup(u,C,0),u+=C}function x(y){const N=_,C=new de,R=new L;let U=0;const w=y===!0?e:t,M=y===!0?1:-1;for(let X=1;X<=r;X++)d.push(0,m*M,0),p.push(0,M,0),g.push(.5,.5),_++;const P=_;for(let X=0;X<=r;X++){const $=X/r*c+o,j=Math.cos($),Y=Math.sin($);R.x=w*Y,R.y=m*M,R.z=w*j,d.push(R.x,R.y,R.z),p.push(0,M,0),C.x=j*.5+.5,C.y=Y*.5*M+.5,g.push(C.x,C.y),_++}for(let X=0;X<r;X++){const k=N+X,$=P+X;y===!0?h.push($,$+1,k):h.push($+1,$,k),U+=3}l.addGroup(u,U,y===!0?1:2),u+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $e(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ci extends $e{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ci(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jc extends Vs{constructor(e){super(e),this.uuid=Ti(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Vs().fromJSON(r))}return this}}const $m={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Zc(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,c,l,h,d,p,g;if(n&&(s=Qm(i,e,s,t)),i.length>80*t){o=l=i[0],c=h=i[1];for(let _=t;_<r;_+=t)d=i[_],p=i[_+1],d<o&&(o=d),p<c&&(c=p),d>l&&(l=d),p>h&&(h=p);g=Math.max(l-o,h-c),g=g!==0?32767/g:0}return Vi(s,a,t,o,c,g,0),a}};function Zc(i,e,t,n,r){let s,a;if(r===u0(i,e,t,n)>0)for(s=e;s<t;s+=n)a=Go(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=Go(s,i[s],i[s+1],a);return a&&kr(a,a.next)&&(Xi(a),a=a.next),a}function qn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(kr(t,t.next)||ut(t.prev,t,t.next)===0)){if(Xi(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Vi(i,e,t,n,r,s,a){if(!i)return;!a&&s&&r0(i,n,r,s);let o=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?Jm(i,n,r,s):Km(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Xi(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Zm(qn(i),e,t),Vi(i,e,t,n,r,s,2)):a===2&&jm(i,e,t,n,r,s):Vi(qn(i),e,t,n,r,s,1);break}}}function Km(i){const e=i.prev,t=i,n=i.next;if(ut(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=r<s?r<a?r:a:s<a?s:a,d=o<c?o<l?o:l:c<l?c:l,p=r>s?r>a?r:a:s>a?s:a,g=o>c?o>l?o:l:c>l?c:l;let _=n.next;for(;_!==e;){if(_.x>=h&&_.x<=p&&_.y>=d&&_.y<=g&&fi(r,o,s,c,a,l,_.x,_.y)&&ut(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Jm(i,e,t,n){const r=i.prev,s=i,a=i.next;if(ut(r,s,a)>=0)return!1;const o=r.x,c=s.x,l=a.x,h=r.y,d=s.y,p=a.y,g=o<c?o<l?o:l:c<l?c:l,_=h<d?h<p?h:p:d<p?d:p,f=o>c?o>l?o:l:c>l?c:l,m=h>d?h>p?h:p:d>p?d:p,u=Ws(g,_,e,t,n),S=Ws(f,m,e,t,n);let x=i.prevZ,y=i.nextZ;for(;x&&x.z>=u&&y&&y.z<=S;){if(x.x>=g&&x.x<=f&&x.y>=_&&x.y<=m&&x!==r&&x!==a&&fi(o,h,c,d,l,p,x.x,x.y)&&ut(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=g&&y.x<=f&&y.y>=_&&y.y<=m&&y!==r&&y!==a&&fi(o,h,c,d,l,p,y.x,y.y)&&ut(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=u;){if(x.x>=g&&x.x<=f&&x.y>=_&&x.y<=m&&x!==r&&x!==a&&fi(o,h,c,d,l,p,x.x,x.y)&&ut(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=S;){if(y.x>=g&&y.x<=f&&y.y>=_&&y.y<=m&&y!==r&&y!==a&&fi(o,h,c,d,l,p,y.x,y.y)&&ut(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Zm(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!kr(r,s)&&jc(r,n,n.next,s)&&Wi(r,s)&&Wi(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Xi(n),Xi(n.next),n=i=s),n=n.next}while(n!==i);return qn(n)}function jm(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&o0(a,o)){let c=Qc(a,o);a=qn(a,a.next),c=qn(c,c.next),Vi(a,e,t,n,r,s,0),Vi(c,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function Qm(i,e,t,n){const r=[];let s,a,o,c,l;for(s=0,a=e.length;s<a;s++)o=e[s]*n,c=s<a-1?e[s+1]*n:i.length,l=Zc(i,o,c,n,!1),l===l.next&&(l.steiner=!0),r.push(a0(l));for(r.sort(e0),s=0;s<r.length;s++)t=t0(r[s],t);return t}function e0(i,e){return i.x-e.x}function t0(i,e){const t=n0(i,e);if(!t)return e;const n=Qc(t,i);return qn(n,n.next),qn(t,t.next)}function n0(i,e){let t=e,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const p=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=s&&p>n&&(n=p,r=t.x<t.next.x?t:t.next,p===s))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,c=r.x,l=r.y;let h=1/0,d;t=r;do s>=t.x&&t.x>=c&&s!==t.x&&fi(a<l?s:n,a,c,l,a<l?n:s,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(s-t.x),Wi(t,i)&&(d<h||d===h&&(t.x>r.x||t.x===r.x&&i0(r,t)))&&(r=t,h=d)),t=t.next;while(t!==o);return r}function i0(i,e){return ut(i.prev,i,e.prev)<0&&ut(e.next,i,i.next)<0}function r0(i,e,t,n){let r=i;do r.z===0&&(r.z=Ws(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,s0(r)}function s0(i){let e,t,n,r,s,a,o,c,l=1;do{for(t=i,i=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<l&&(o++,n=n.nextZ,!!n);e++);for(c=l;o>0||c>0&&n;)o!==0&&(c===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,o--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,l*=2}while(a>1);return i}function Ws(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function a0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function fi(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function o0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!c0(i,e)&&(Wi(i,e)&&Wi(e,i)&&l0(i,e)&&(ut(i.prev,i,e.prev)||ut(i,e.prev,e))||kr(i,e)&&ut(i.prev,i,i.next)>0&&ut(e.prev,e,e.next)>0)}function ut(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function kr(i,e){return i.x===e.x&&i.y===e.y}function jc(i,e,t,n){const r=Er(ut(i,e,t)),s=Er(ut(i,e,n)),a=Er(ut(t,n,i)),o=Er(ut(t,n,e));return!!(r!==s&&a!==o||r===0&&yr(i,t,e)||s===0&&yr(i,n,e)||a===0&&yr(t,i,n)||o===0&&yr(t,e,n))}function yr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Er(i){return i>0?1:i<0?-1:0}function c0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&jc(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Wi(i,e){return ut(i.prev,i,i.next)<0?ut(i,e,i.next)>=0&&ut(i,i.prev,e)>=0:ut(i,e,i.prev)<0||ut(i,i.next,e)<0}function l0(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Qc(i,e){const t=new Xs(i.i,i.x,i.y),n=new Xs(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Go(i,e,t,n){const r=new Xs(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Xi(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Xs(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function u0(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class Gi{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Gi.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Vo(e),Wo(n,e);let a=e.length;t.forEach(Vo);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,Wo(n,t[c]);const o=$m.triangulate(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}}function Vo(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Wo(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class sa extends It{constructor(e=new Jc([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let o=0,c=e.length;o<c;o++){const l=e[o];a(l)}this.setAttribute("position",new st(r,3)),this.setAttribute("uv",new st(s,2)),this.computeVertexNormals();function a(o){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,g=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:g-.1,f=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const u=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:h0;let x,y=!1,N,C,R,U;u&&(x=u.getSpacedPoints(h),y=!0,p=!1,N=u.computeFrenetFrames(h,!1),C=new L,R=new L,U=new L),p||(m=0,g=0,_=0,f=0);const w=o.extractPoints(l);let M=w.shape;const P=w.holes;if(!Gi.isClockWise(M)){M=M.reverse();for(let b=0,D=P.length;b<D;b++){const O=P[b];Gi.isClockWise(O)&&(P[b]=O.reverse())}}const k=Gi.triangulateShape(M,P),$=M;for(let b=0,D=P.length;b<D;b++){const O=P[b];M=M.concat(O)}function j(b,D,O){return D||console.error("THREE.ExtrudeGeometry: vec does not exist"),b.clone().addScaledVector(D,O)}const Y=M.length,te=k.length;function K(b,D,O){let V,Z,ue;const le=b.x-D.x,Te=b.y-D.y,A=O.x-b.x,v=O.y-b.y,z=le*le+Te*Te,ne=le*v-Te*A;if(Math.abs(ne)>Number.EPSILON){const ie=Math.sqrt(z),se=Math.sqrt(A*A+v*v),Re=D.x-Te/ie,pe=D.y+le/ie,ge=O.x-v/se,Be=O.y+A/se,oe=((ge-Re)*v-(Be-pe)*A)/(le*v-Te*A);V=Re+le*oe-b.x,Z=pe+Te*oe-b.y;const Ae=V*V+Z*Z;if(Ae<=2)return new de(V,Z);ue=Math.sqrt(Ae/2)}else{let ie=!1;le>Number.EPSILON?A>Number.EPSILON&&(ie=!0):le<-Number.EPSILON?A<-Number.EPSILON&&(ie=!0):Math.sign(Te)===Math.sign(v)&&(ie=!0),ie?(V=-Te,Z=le,ue=Math.sqrt(z)):(V=le,Z=Te,ue=Math.sqrt(z/2))}return new de(V/ue,Z/ue)}const ve=[];for(let b=0,D=$.length,O=D-1,V=b+1;b<D;b++,O++,V++)O===D&&(O=0),V===D&&(V=0),ve[b]=K($[b],$[O],$[V]);const xe=[];let _e,Oe=ve.concat();for(let b=0,D=P.length;b<D;b++){const O=P[b];_e=[];for(let V=0,Z=O.length,ue=Z-1,le=V+1;V<Z;V++,ue++,le++)ue===Z&&(ue=0),le===Z&&(le=0),_e[V]=K(O[V],O[ue],O[le]);xe.push(_e),Oe=Oe.concat(_e)}for(let b=0;b<m;b++){const D=b/m,O=g*Math.cos(D*Math.PI/2),V=_*Math.sin(D*Math.PI/2)+f;for(let Z=0,ue=$.length;Z<ue;Z++){const le=j($[Z],ve[Z],V);ce(le.x,le.y,-O)}for(let Z=0,ue=P.length;Z<ue;Z++){const le=P[Z];_e=xe[Z];for(let Te=0,A=le.length;Te<A;Te++){const v=j(le[Te],_e[Te],V);ce(v.x,v.y,-O)}}}const We=_+f;for(let b=0;b<Y;b++){const D=p?j(M[b],Oe[b],We):M[b];y?(R.copy(N.normals[0]).multiplyScalar(D.x),C.copy(N.binormals[0]).multiplyScalar(D.y),U.copy(x[0]).add(R).add(C),ce(U.x,U.y,U.z)):ce(D.x,D.y,0)}for(let b=1;b<=h;b++)for(let D=0;D<Y;D++){const O=p?j(M[D],Oe[D],We):M[D];y?(R.copy(N.normals[b]).multiplyScalar(O.x),C.copy(N.binormals[b]).multiplyScalar(O.y),U.copy(x[b]).add(R).add(C),ce(U.x,U.y,U.z)):ce(O.x,O.y,d/h*b)}for(let b=m-1;b>=0;b--){const D=b/m,O=g*Math.cos(D*Math.PI/2),V=_*Math.sin(D*Math.PI/2)+f;for(let Z=0,ue=$.length;Z<ue;Z++){const le=j($[Z],ve[Z],V);ce(le.x,le.y,d+O)}for(let Z=0,ue=P.length;Z<ue;Z++){const le=P[Z];_e=xe[Z];for(let Te=0,A=le.length;Te<A;Te++){const v=j(le[Te],_e[Te],V);y?ce(v.x,v.y+x[h-1].y,x[h-1].x+O):ce(v.x,v.y,d+O)}}}J(),ae();function J(){const b=r.length/3;if(p){let D=0,O=Y*D;for(let V=0;V<te;V++){const Z=k[V];q(Z[2]+O,Z[1]+O,Z[0]+O)}D=h+m*2,O=Y*D;for(let V=0;V<te;V++){const Z=k[V];q(Z[0]+O,Z[1]+O,Z[2]+O)}}else{for(let D=0;D<te;D++){const O=k[D];q(O[2],O[1],O[0])}for(let D=0;D<te;D++){const O=k[D];q(O[0]+Y*h,O[1]+Y*h,O[2]+Y*h)}}n.addGroup(b,r.length/3-b,0)}function ae(){const b=r.length/3;let D=0;Me($,D),D+=$.length;for(let O=0,V=P.length;O<V;O++){const Z=P[O];Me(Z,D),D+=Z.length}n.addGroup(b,r.length/3-b,1)}function Me(b,D){let O=b.length;for(;--O>=0;){const V=O;let Z=O-1;Z<0&&(Z=b.length-1);for(let ue=0,le=h+m*2;ue<le;ue++){const Te=Y*ue,A=Y*(ue+1),v=D+V+Te,z=D+Z+Te,ne=D+Z+A,ie=D+V+A;H(v,z,ne,ie)}}}function ce(b,D,O){c.push(b),c.push(D),c.push(O)}function q(b,D,O){Q(b),Q(D),Q(O);const V=r.length/3,Z=S.generateTopUV(n,r,V-3,V-2,V-1);T(Z[0]),T(Z[1]),T(Z[2])}function H(b,D,O,V){Q(b),Q(D),Q(V),Q(D),Q(O),Q(V);const Z=r.length/3,ue=S.generateSideWallUV(n,r,Z-6,Z-3,Z-2,Z-1);T(ue[0]),T(ue[1]),T(ue[3]),T(ue[1]),T(ue[2]),T(ue[3])}function Q(b){r.push(c[b*3+0]),r.push(c[b*3+1]),r.push(c[b*3+2])}function T(b){s.push(b.x),s.push(b.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return d0(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Gs[r.type]().fromJSON(r)),new sa(n,e.options)}}const h0={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[r*3],h=e[r*3+1];return[new de(s,a),new de(o,c),new de(l,h)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],d=e[n*3+2],p=e[r*3],g=e[r*3+1],_=e[r*3+2],f=e[s*3],m=e[s*3+1],u=e[s*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new de(a,1-c),new de(l,1-d),new de(p,1-_),new de(f,1-u)]:[new de(o,1-c),new de(h,1-d),new de(g,1-_),new de(m,1-u)]}};function d0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class aa extends It{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],c=[],l=[],h=[];let d=e;const p=(t-e)/r,g=new L,_=new de;for(let f=0;f<=r;f++){for(let m=0;m<=n;m++){const u=s+m/n*a;g.x=d*Math.cos(u),g.y=d*Math.sin(u),c.push(g.x,g.y,g.z),l.push(0,0,1),_.x=(g.x/t+1)/2,_.y=(g.y/t+1)/2,h.push(_.x,_.y)}d+=p}for(let f=0;f<r;f++){const m=f*(n+1);for(let u=0;u<n;u++){const S=u+m,x=S,y=S+n+1,N=S+n+2,C=S+1;o.push(x,y,C),o.push(y,N,C)}}this.setIndex(o),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new aa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ve extends It{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new L,p=new L,g=[],_=[],f=[],m=[];for(let u=0;u<=n;u++){const S=[],x=u/n;let y=0;u===0&&a===0?y=.5/t:u===n&&c===Math.PI&&(y=-.5/t);for(let N=0;N<=t;N++){const C=N/t;d.x=-e*Math.cos(r+C*s)*Math.sin(a+x*o),d.y=e*Math.cos(a+x*o),d.z=e*Math.sin(r+C*s)*Math.sin(a+x*o),_.push(d.x,d.y,d.z),p.copy(d).normalize(),f.push(p.x,p.y,p.z),m.push(C+y,1-x),S.push(l++)}h.push(S)}for(let u=0;u<n;u++)for(let S=0;S<t;S++){const x=h[u][S+1],y=h[u][S],N=h[u+1][S],C=h[u+1][S+1];(u!==0||a>0)&&g.push(x,y,C),(u!==n-1||c<Math.PI)&&g.push(y,N,C)}this.setIndex(g),this.setAttribute("position",new st(_,3)),this.setAttribute("normal",new st(f,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ve(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ri extends It{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],c=[],l=[],h=new L,d=new L,p=new L;for(let g=0;g<=n;g++)for(let _=0;_<=r;_++){const f=_/r*s,m=g/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(f),d.y=(e+t*Math.cos(m))*Math.sin(f),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(f),h.y=e*Math.sin(f),p.subVectors(d,h).normalize(),c.push(p.x,p.y,p.z),l.push(_/r),l.push(g/n)}for(let g=1;g<=n;g++)for(let _=1;_<=r;_++){const f=(r+1)*g+_-1,m=(r+1)*(g-1)+_-1,u=(r+1)*(g-1)+_,S=(r+1)*g+_;a.push(f,m,S),a.push(m,u,S)}this.setIndex(a),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ri(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ei extends $i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wc,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class oa extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class el extends oa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Cs=new rt,Xo=new L,qo=new L;class tl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qs,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Xo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xo),qo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qo),t.updateMatrixWorld(),Cs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Yo=new rt,Bi=new L,Rs=new L;class f0 extends tl{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new de(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Bi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Bi),Rs.copy(n.position),Rs.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Rs),n.updateMatrixWorld(),r.makeTranslation(-Bi.x,-Bi.y,-Bi.z),Yo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yo)}}class ca extends oa{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new f0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class p0 extends tl{constructor(){super(new Bc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class m0 extends oa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new p0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const $o=new rt;class g0{constructor(e,t,n=0,r=1/0){this.ray=new Pc(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $o.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($o),this}intersectObject(e,t=!0,n=[]){return qs(e,this,n,t),n.sort(Ko),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)qs(e[r],this,n,t);return n.sort(Ko),n}}function Ko(i,e){return i.distance-e.distance}function qs(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)qs(s[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Js}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Js);function Mn(i){if(!i)return 0;const e=new Set,t=new Set,n=new Set;i.traverse(s=>{s.geometry&&!e.has(s.geometry)&&(e.add(s.geometry),s.geometry.dispose());const a=s.material?Array.isArray(s.material)?s.material:[s.material]:[];for(const o of a)if(!(!o||t.has(o))){t.add(o);for(const c of Object.values(o))c&&c.isTexture&&!n.has(c)&&(n.add(c),c.dispose());o.dispose()}s.isLight&&typeof s.dispose=="function"&&s.dispose()}),i.parent&&i.parent.remove(i);for(const s of i.children.slice())i.remove(s);let r=0;return i.traverse(s=>{s.isMesh&&(r+=1)}),r}function ot(i,e={}){return new Ei({color:i,roughness:.55,metalness:.08,...e})}function Ze(i,e,t=0,n=0,r=0,s,a,o){const c=new Ke(i,e);return c.position.set(t,n,r),s!=null&&c.scale.set(s,a,o),c.castShadow=!0,c}function _0(){const i=new Qe,e=ot(14018287,{roughness:.22,metalness:.1,transparent:!1});return i.add(Ze(new $e(.075,.095,.32,16),e,0,.18,0)),i.add(Ze(new $e(.032,.055,.12,12),e,0,.38,0)),i.add(Ze(new $e(.038,.038,.03,12),ot(12653087,{roughness:.4}),0,.45,0)),i.add(Ze(new $e(.07,.07,.04,16),ot(16050369,{roughness:.3}),0,.08,0)),i.userData.kind="bottle",i}function v0(){const i=new Qe,e=ot(7027226,{roughness:.74});i.add(Ze(new $e(.028,.038,.2,8),e,0,.1,-.08)),i.add(Ze(new ze(.18,.035,.07),e,0,.015,-.08));const t=new Qe;t.position.set(0,.34,0);const n=new Ke(new aa(.16,.185,40),ot(9067051,{roughness:.6}));return n.position.z=-.012,t.add(n),[[.16,1118481],[.131,16053492],[.102,13636124],[.073,16250871],[.045,1477170],[.022,14747158]].forEach(([s,a],o)=>{const c=new Ke(new zr(s,48),new Xt({color:a}));c.position.z=o*.003,t.add(c)}),i.add(t),i.userData.kind="bullseye",i}function x0(){const i=new Qe;i.add(Ze(new Ve(.15,16,14),ot(4114175,{roughness:.22,transparent:!0,opacity:.92}),0,.22,0)),i.add(Ze(new Ve(.03,8,6),ot(4006415),0,.08,0));const t=Ze(new Ri(.025,.008,6,10),ot(4006415),0,.08,0);return t.rotation.x=Math.PI/2,i.add(t),i.userData.kind="balloon",i}function M0(){const i=new Qe;return i.add(Ze(new $e(.15,.16,.26,12),ot(6962716,{roughness:.85}),0,.16,0)),i.add(Ze(new $e(.14,.14,.03,12),ot(15259048,{roughness:.7}),0,.29,0)),i.add(Ze(new $e(.05,.05,.02,10),ot(4006415),0,.305,0)),i.add(Ze(new ze(.04,.08,.03),ot(6042391),.12,.18,.04)),i.userData.kind="wood",i}function S0(){const i=new Qe,e=ot(16765514,{metalness:.92,roughness:.18,emissive:9071120,emissiveIntensity:.35}),t=(n,r,s,a=0)=>{const o=Ze(new $e(.055,.055,.012,16),e,n,r,s);o.rotation.z=a,i.add(o)};return t(0,.08,0,.2),t(.07,.09,.04,-.4),t(-.06,.09,.03,.5),t(.02,.14,-.02,.1),i.add(Ze(new ze(.12,.05,.05),e,-.04,.06,-.05)),i.add(Ze(new ze(.1,.04,.04),e,.06,.055,.06)),i.userData.kind="gold",i}function y0(){const i=new Qe,e=ot(16758472,{roughness:.86}),t=new Ve(1,14,10);return i.add(Ze(t,e,0,.16,0,.16,.15,.14)),i.add(Ze(t,e,0,.32,.04,.11,.1,.11)),i.add(Ze(t,e,-.09,.4,.02,.045,.045,.04)),i.add(Ze(t,e,.09,.4,.02,.045,.045,.04)),i.add(Ze(t,ot(16747720),0,.14,.12,.08,.07,.04)),i.add(Ze(t,ot(1708040),-.035,.34,.13,.016,.02,.016)),i.add(Ze(t,ot(1708040),.035,.34,.13,.016,.02,.016)),i.add(Ze(t,ot(16731533),0,.28,.14,.02,.015,.02)),i.userData.kind="plush",i}function Jo(i){return i==="fair"?_0():i==="boardwalk"?y0():i==="field"?v0():i==="western"?x0():i==="forest"?M0():S0()}function la(){const i=new Qe,e=new Ve(1,12,10);i.add(Ze(e,ot(12653087),0,0,0,.138,.112,.2)),i.add(Ze(e,ot(2001125),0,.088,.1,.08,.075,.08));const t=Ze(e,ot(16044894),-.12,.02,0,.12,.032,.15);t.rotation.z=.45,i.add(t);const n=Ze(e,ot(16044894),.12,.02,0,.12,.032,.15);n.rotation.z=-.45,i.add(n);const r=Ze(new Ci(.038,.11,8),ot(15228164),0,.08,.21);return r.rotation.x=Math.PI/2,i.add(r),i.add(Ze(e,ot(1708040),-.028,.11,.16,.016,.018,.016)),i.add(Ze(e,ot(1708040),.028,.11,.16,.016,.018,.016)),i}function Le(i,e={}){return new Ei({color:i,roughness:.62,metalness:.05,...e})}function we(i,e,t=0,n=0,r=0){const s=new Ke(i,e);return s.position.set(t,n,r),s.castShadow=!1,s.receiveShadow=!0,s}function E0(i,e,t){const n=document.createElement("canvas");n.width=8,n.height=256;const r=n.getContext("2d"),s=r.createLinearGradient(0,0,0,256);s.addColorStop(0,i),s.addColorStop(.52,e),s.addColorStop(1,t),r.fillStyle=s,r.fillRect(0,0,8,256);const a=new Xc(n);return a.colorSpace=Ot,a}const Zo={fair:{background:9357550,fog:15782576,fogNear:7,fogFar:22,sky:["#1d6eb8","#f7c98a","#f3a56a"],ground:12886362,hemiSky:16769720,hemiGround:9067058,sun:16773580,sunI:1.25,accent:16757082},boardwalk:{background:3842264,fog:12051704,fogNear:8,fogFar:26,sky:["#1565c0","#7ec8f0","#e8f7ff"],ground:14140578,hemiSky:13955583,hemiGround:9267781,sun:16777215,sunI:1.3,accent:5951743},field:{background:9425151,fog:14151876,fogNear:8,fogFar:24,sky:["#3d9ae0","#c6ecff","#e7ffc8"],ground:6795850,hemiSky:15990760,hemiGround:4025138,sun:16774864,sunI:1.2,accent:16747184},western:{background:14916184,fog:15778970,fogNear:6,fogFar:20,sky:["#c4622a","#f0a15a","#ffe0b0"],ground:12880202,hemiSky:16766894,hemiGround:8014370,sun:16769200,sunI:1.4,accent:16757082},forest:{background:2182708,fog:2906686,fogNear:5,fogFar:16,sky:["#0e3324","#3d7a52","#b7d7a4"],ground:4021300,hemiSky:14019780,hemiGround:2372636,sun:16773828,sunI:.72,accent:13035658},seaside:{background:5162708,fog:13168874,fogNear:8,fogFar:26,sky:["#0277bd","#7fd4e4","#fff1c2"],ground:15783844,hemiSky:15202559,hemiGround:12887412,sun:16777215,sunI:1.28,accent:16766314}};function nl(i){return Zo[i]||Zo.fair}function w0(i){const e=E0(i.sky[0],i.sky[1],i.sky[2]),t=new Ke(new Ve(26,18,12),new Xt({map:e,side:Pt,depthWrite:!1}));return t.frustumCulled=!1,t}function b0(i){const e=we(new zr(16,28),Le(i,{roughness:.95}),0,0,0);return e.rotation.x=-Math.PI/2,e}function wi(i,e,t,n,r=16777215){const s=new Qe,a=Le(r,{roughness:1,metalness:0});return s.add(we(new Ve(.38,8,6),a,0,0,0)),s.add(we(new Ve(.28,8,6),a,.34,.06,0)),s.add(we(new Ve(.24,8,6),a,-.3,.02,0)),s.position.set(i,e,t),s.scale.setScalar(n),s}function T0(i,e){if(e==="cowboy")i.add(we(new $e(.2,.2,.025,12),Le(6042384),0,1.08,0)),i.add(we(new $e(.11,.12,.11,12),Le(4860430),0,1.15,0));else if(e==="visor"){const t=we(new ze(.22,.02,.12),Le(1710626),0,.98,.1);t.rotation.x=-.45,i.add(t)}else if(e==="straw")i.add(we(new $e(.18,.18,.02,12),Le(15123306),0,1.06,0)),i.add(we(new $e(.1,.11,.08,10),Le(13214286),0,1.12,0));else if(e==="cap")i.add(we(new Ve(.14,12,8,0,Math.PI*2,0,Math.PI/2),Le(12653087),0,1.02,0)),i.add(we(new ze(.16,.018,.1),Le(12653087),0,1,.12));else if(e==="bun"){i.add(we(new Ve(.07,8,6),Le(16050369),0,1.14,-.02));const t=we(new Ri(.045,.012,6,10),Le(16731533),0,1.08,.05);t.rotation.x=Math.PI/2,i.add(t)}else e==="bandana"&&i.add(we(new Ve(.145,10,8,0,Math.PI*2,0,Math.PI/2),Le(10361642),0,1.02,0))}const jo={fair:{skin:5911320,shirt:16044894,pants:2902638,hair:1708040,hat:"cap"},boardwalk:{skin:7027228,shirt:8146431,pants:1710626,hair:1708040,hat:"visor"},field:{skin:15255968,shirt:6045066,pants:4084520,hair:14274756,hat:"straw"},western:{skin:13935988,shirt:9255706,pants:4016682,hair:3875348,hat:"cowboy"},forest:{skin:15978680,shirt:16747720,pants:6961802,hair:16050369,hat:"bun"},seaside:{skin:13935988,shirt:2060123,pants:1710626,hair:1708040,hat:"bandana"}};function A0(i){const e=new Qe,t=Le(i.skin,{roughness:.58}),n=Le(i.shirt,{roughness:.72}),r=Le(i.pants,{roughness:.78}),s=Le(i.hair,{roughness:.8}),a=Le(1708040,{roughness:.3});e.add(we(new dn(.16,.26,4,8),n,0,.62,0)),e.add(we(new dn(.07,.2,3,6),r,-.08,.28,0)),e.add(we(new dn(.07,.2,3,6),r,.08,.28,0));const o=we(new Ve(.14,16,12),t,0,.98,0);e.add(o),e.add(we(new Ve(.145,14,10),s,0,1.04,-.02)),e.add(we(new Ve(.018,8,6),a,-.05,1,.12)),e.add(we(new Ve(.018,8,6),a,.05,1,.12));const c=new Qe;return c.position.set(.18,.78,.02),c.add(we(new dn(.05,.2,3,6),n,.08,-.12,.08)),e.add(c),T0(e,i.hat),e.userData.arm=c,e.userData.head=o,e}function C0(i){const e=Le(10365482,{roughness:.78}),t=Le(16050369,{roughness:.7}),n=we(new ze(3.4,1.7,.16),e,0,1.15,-1.15);i.add(n);const r=we(new ze(1.9,.1,1.3),e,-.7,2.15,-1.15);r.rotation.z=.45;const s=we(new ze(1.9,.1,1.3),e,.7,2.15,-1.15);s.rotation.z=-.45,i.add(r,s),i.add(we(new ze(.7,.9,.08),t,0,.7,-1.04));const a=Le(14070106,{roughness:.95}),o=we(new $e(.28,.28,.42,10),a,-2.15,.22,-.4);o.rotation.z=Math.PI/2;const c=we(new $e(.26,.26,.4,10),a,2.2,.2,-.55);c.rotation.z=Math.PI/2,i.add(o,c),i.add(wi(-3.2,3.4,-4,1.1,16774890)),i.add(wi(2.6,3.7,-5,.85,16774890));const l=we(new Ve(.42,12,10),new Xt({color:16769162}),3.2,3.1,-6);i.add(l)}function R0(i){const e=we(new Cn(18,8),Le(2068164,{roughness:.18,metalness:.25,transparent:!0,opacity:.92}),0,.03,-3.2);e.rotation.x=-Math.PI/2,i.add(e),i.userData.water=e;const t=Le(15194040,{roughness:.8});for(let r=0;r<7;r+=1){const s=we(new ze(3.2,.05,.28),t,0,.06,.8-r*.42);i.add(s)}const n=Le(13206858,{roughness:.84});i.add(we(new $e(.06,.07,1.1,8),n,-1.55,.5,-.2)),i.add(we(new $e(.06,.07,1.1,8),n,1.55,.5,-.2)),i.add(we(new ze(3.3,.08,.08),Le(16777215),0,.95,-.2)),i.add(wi(-2.4,3.2,-6,.9,16777215)),i.add(wi(2.8,3.5,-7,1.15,16777215))}function P0(i){const e=new Ve(.07,6,5),t=Le(16735631,{roughness:.45}),n=new Um(e,t,42),r=new ht,s=new Ye,a=[16735631,16765503,16777215,12938239,16747066];n.instanceColor=new Hs(new Float32Array(126),3);for(let l=0;l<42;l+=1){const h=l%2===0?-1:1;r.position.set(h*(1.5+l%5*.28),.06,-.6-l%7*.45),r.scale.setScalar(.7+l%4*.15),r.updateMatrix(),n.setMatrixAt(l,r.matrix),s.setHex(a[l%a.length]),n.setColorAt(l,s)}n.instanceColor&&(n.instanceColor.needsUpdate=!0),i.add(n);const o=we(new Ve(2.2,14,10),Le(9360234,{roughness:.9}),-3.5,-.6,-6),c=we(new Ve(1.7,14,10),Le(7980124,{roughness:.9}),3.8,-.7,-6.5);i.add(o,c),i.add(wi(0,3.6,-6,1.2)),i.add(we(new Ve(.38,12,10),new Xt({color:16774340}),-2.8,3.3,-7))}function L0(i){const e=Le(9063970,{roughness:.78}),t=we(new ze(3.3,1.8,.14),e,0,1.15,-1.2);i.add(t),i.add(we(new ze(3.5,.28,.2),Le(6042384),0,2.15,-1.15)),i.add(we(new ze(1.2,.22,.16),Le(13214282),0,1.85,-1.08));const n=Le(4099909,{roughness:.7});i.add(we(new dn(.08,.55,3,6),n,-2.05,.45,-.3)),i.add(we(new dn(.07,.4,3,6),n,2.15,.38,-.45));const r=we(new Ve(.55,14,10),new Xt({color:16762218}),2.4,3.2,-6);i.add(r)}function D0(i){const e=Le(5913122,{roughness:.9}),t=Le(3107642,{roughness:.85}),n=Le(4164168,{roughness:.85});[-1.85,1.9].forEach((a,o)=>{i.add(we(new $e(.12,.16,1.5,8),e,a,.75,-1.3)),i.add(we(new Ve(.55,10,8),o?n:t,a,1.7,-1.3))});const r=we(new Ve(3.2,14,10),Le(1919532,{roughness:.9}),0,3.4,-.4);r.scale.set(1.4,.45,1),i.add(r);const s=new ca(16773826,.6,6);s.position.set(.4,2.4,.6),i.add(s)}function I0(i){const e=we(new Cn(18,7),Le(1745080,{roughness:.15,metalness:.3,transparent:!0,opacity:.9}),0,.02,-3.4);e.rotation.x=-Math.PI/2,i.add(e),i.userData.water=e;const t=we(new ze(.9,.22,.4),Le(16052196),2.1,.16,-1.4);t.rotation.z=.08,i.add(t),i.add(we(new $e(.03,.03,.7,6),Le(6962716),2.1,.5,-1.4)),i.add(wi(-2.5,3.3,-6,1)),i.add(we(new Ve(.36,12,10),new Xt({color:16774864}),3.1,3.15,-7))}function U0(i){const e=nl(i),t=new Qe;t.name="round-root",t.userData.theme=i,t.add(w0(e)),t.add(b0(e.ground));const n=new el(e.hemiSky,e.hemiGround,.95),r=new m0(e.sun,e.sunI);r.position.set(-2.5,6.5,3.5);const s=new ca(e.accent,.55,8);s.position.set(.4,1.8,1.4),t.add(n,r,s),i==="fair"?C0(t):i==="boardwalk"?R0(t):i==="field"?P0(t):i==="western"?L0(t):i==="forest"?D0(t):I0(t);const a=A0(jo[i]||jo.fair);if(t.add(a),t.userData.announcer=a,i==="seaside"){const o=la();o.scale.setScalar(.42),o.position.set(-.18,1.08,.04),a.add(o)}return t.userData.tick=o=>{const c=t.userData.water;c&&(c.position.y=.02+Math.sin(o*1.4)*.015)},t}function N0(i=.18){const e=new Jc,t=5;for(let n=0;n<t*2;n+=1){const r=n%2===0?i:i*.42,s=n/(t*2)*Math.PI*2-Math.PI/2,a=Math.cos(s)*r,o=Math.sin(s)*r;n===0?e.moveTo(a,o):e.lineTo(a,o)}return e.closePath(),e}function F0(i){const e=new Qe;if(e.userData.kind="prize",i==="fair"){const n=Le(12653087,{roughness:.42}),r=we(new ze(.32,.1,.025),n,0,0,0);r.rotation.z=.55;const s=we(new ze(.32,.1,.025),n,0,0,0);s.rotation.z=-.55,e.add(r,s);const a=we(new ze(.08,.24,.02),n,0,-.18,0);return e.add(a),e.add(we(new Ve(.05,10,8),Le(16044894,{metalness:.35,roughness:.3}),0,0,.02)),e}if(i==="boardwalk"){const n=we(new Ve(.16,16,12),Le(12053759,{transparent:!0,opacity:.42,roughness:.08}));n.scale.set(.86,1.08,.7),e.add(n);const r=we(new Ve(.07,12,8),Le(16742938,{roughness:.35}),0,-.01,0);r.scale.set(1.45,.65,.5),e.add(r);const s=we(new Ci(.04,.07,6),Le(16742938),.1,-.01,0);return s.rotation.z=-Math.PI/2,e.add(s),e.add(we(new Ve(.035,8,6),Le(16181968),0,.18,0)),e}if(i==="field"){e.add(we(new $e(.012,.014,.28,6),Le(4033074),0,-.02,0));const n=Le(16735631,{roughness:.4});for(let r=0;r<6;r+=1){const s=r/6*Math.PI*2;e.add(we(new Ve(.045,8,6),n,Math.cos(s)*.07,.16,Math.sin(s)*.07))}return e.add(we(new Ve(.04,8,6),Le(16765503),0,.16,0)),e}if(i==="western"){const n=new sa(N0(.2),{depth:.035,bevelEnabled:!1}),r=new Ke(n,Le(14015974,{metalness:.88,roughness:.22}));return e.add(r),e}if(i==="forest"){e.add(we(new $e(.11,.11,.035,16),Le(13213802,{roughness:.55}),0,0,0)),e.add(we(new $e(.07,.07,.02,12),Le(16050369,{roughness:.5}),0,.02,0));const n=we(new ze(.05,.16,.015),Le(9255706),0,-.1,0);return e.add(n),e}const t=we(new $e(.12,.12,.028,20),Le(16765514,{metalness:.92,roughness:.18,emissive:9071120,emissiveIntensity:.35}));return t.rotation.x=Math.PI/2,e.add(t),e}function O0(i,e,t,n,r){i.save(),i.translate(t,n),i.fillStyle={cat:"#f4a261",dog:"#8d6e4c",bird:"#f4d35e",fish:"#2ea8d8",horse:"#5c3317",cow:"#f7f3e8",pig:"#ffb3c1",duck:"#f5d142",frog:"#4caf50",bear:"#6d4c41"}[e]||"#f4d35e",i.strokeStyle="#140c08",i.lineWidth=Math.max(10,r*.06),i.beginPath(),e==="fish"?(i.ellipse(0,0,r*.42,r*.22,0,0,Math.PI*2),i.fill(),i.stroke(),i.beginPath(),i.moveTo(r*.4,0),i.lineTo(r*.62,-r*.18),i.lineTo(r*.62,r*.18),i.closePath(),i.fill(),i.stroke()):e==="bird"||e==="duck"?(i.ellipse(0,r*.06,r*.32,r*.22,0,0,Math.PI*2),i.fill(),i.stroke(),i.beginPath(),i.arc(r*.18,-r*.12,r*.16,0,Math.PI*2),i.fill(),i.stroke()):(i.ellipse(0,r*.06,r*.36,r*.3,0,0,Math.PI*2),i.fill(),i.stroke(),i.beginPath(),i.arc(0,-r*.16,r*.2,0,Math.PI*2),i.fill(),i.stroke()),i.fillStyle="#140c08",i.beginPath(),i.arc(r*.08,-r*.18,r*.035,0,Math.PI*2),i.fill(),i.restore()}const il={cat:"./pics/cat.jpg",dog:"./pics/dog.jpg",bird:"./pics/bird.jpg",fish:"./pics/fish.jpg",horse:"./pics/horse.jpg",cow:"./pics/cow.jpg",pig:"./pics/pig.jpg",duck:"./pics/duck.jpg",frog:"./pics/frog.jpg",bear:"./pics/bear.jpg"},rl=new Map;function B0(){return Promise.all(Object.entries(il).map(([i,e])=>new Promise(t=>{const n=new Image;n.onload=()=>{rl.set(i,n),t()},n.onerror=()=>t(),n.src=e})))}function z0(i){return rl.get(String(i||"").toLowerCase())||null}function k0(i){return il[String(i||"").toLowerCase()]||null}const Ys='"Nunito", "Noto Sans", "Noto Sans KR", "Noto Sans JP", "Noto Sans SC", "Noto Sans Arabic", "Noto Sans Thai", "Noto Sans Devanagari", sans-serif';function H0(i,e,t){i.fillStyle="#fff8ec",i.fillRect(0,0,e,t),i.fillStyle="rgba(90, 50, 20, 0.05)";for(let n=0;n<50;n+=1)i.fillRect(n*97%e,n*53%t,2,14);i.strokeStyle="#2a160c",i.lineWidth=26,i.strokeRect(16,16,e-32,t-32)}function G0(i,e){const t=Math.max(1,Math.min(10,Math.round(Number(e)||1))),n=t<=3?t:t<=6?3:t<=8?4:5,r=Math.ceil(t/n),s=["#c1121f","#2ec4b6","#e2a322","#ff4d8d","#3d6bff","#e85d04","#7c4dff","#2e9e4f"],a=640/n,o=560/r;for(let c=0;c<t;c+=1){const l=c%n,h=Math.floor(c/n),d=64+l*a+a/2,p=90+h*o+o/2,g=Math.min(a,o)*.32;i.fillStyle=s[c%s.length],i.strokeStyle="#140c08",i.lineWidth=Math.max(8,g*.12),i.beginPath(),i.ellipse(d,p,g,g*1.05,0,0,Math.PI*2),i.fill(),i.stroke(),i.fillStyle="rgba(255,255,255,0.35)",i.beginPath(),i.ellipse(d-g*.28,p-g*.32,g*.2,g*.12,-.4,0,Math.PI*2),i.fill()}}function V0(i,e){const t=z0(e.animal);if(t){i.save(),i.beginPath(),i.rect(48,48,672,672),i.clip();const n=Math.min(t.width,t.height),r=(t.width-n)/2,s=(t.height-n)/2;i.drawImage(t,r,s,n,n,48,48,672,672),i.restore();return}if(e.n){G0(i,e.n);return}O0(i,e.animal||"cat",384,400,460)}function W0(i){i.fillStyle="#24160f",i.beginPath(),i.moveTo(230,300),i.lineTo(330,300),i.lineTo(470,190),i.lineTo(470,578),i.lineTo(330,468),i.lineTo(230,468),i.closePath(),i.fill(),i.strokeStyle="#24160f",i.lineWidth=18,i.lineCap="round",i.beginPath(),i.arc(500,384,70,-.8,.8),i.stroke(),i.beginPath(),i.arc(500,384,120,-.7,.7),i.stroke()}function X0(i,e){const t=String(e||"").trim()||"·";i.fillStyle="#1a1008",i.textAlign="center",i.textBaseline="middle";let n=t.length>12?72:t.length>6?96:120;i.font=`900 ${n}px ${Ys}`;const r=640;for(;n>36&&i.measureText(t).width>r;)n-=6,i.font=`900 ${n}px ${Ys}`;const s=t.split(/\s+/),a=[];let o="";for(const h of s){const d=o?`${o} ${h}`:h;i.measureText(d).width<=r?o=d:(o&&a.push(o),o=h)}o&&a.push(o);const c=n*1.15,l=384-(a.length-1)*c/2;a.forEach((h,d)=>{i.fillText(h,384,l+d*c,r)})}function q0(i,e){i.fillStyle="#1a1008",i.textAlign="center",i.textBaseline="middle",i.font=`900 280px ${Ys}`,i.fillText(String(e||""),384,400)}function Y0(i){const e=document.createElement("canvas");e.width=768,e.height=768;const t=e.getContext("2d");H0(t,768,768);const n=i&&i.face;n==="picture"?V0(t,i):n==="audio"?W0(t):n==="digit"?q0(t,i.text||i.n||""):X0(t,i.text||"");const r=new Xc(e);return r.colorSpace=Ot,r.anisotropy=4,r.needsUpdate=!0,r}function Qo(i,e={}){return new Ei({color:i,roughness:.55,metalness:.06,...e})}function wr(i,e,t=0,n=0,r=0,s,a,o){const c=new Ke(i,e);return c.position.set(t,n,r),c.castShadow=!0,c}const ec={ray:{skin:5911320,skinDark:4006416,nail:2758672,sleeve:16044894,cuff:12653087,ring:16044894,age:0},nia:{skin:7027228,skinDark:4006416,nail:16731533,sleeve:8146431,cuff:1710626,ring:8188159,age:0},walt:{skin:15255968,skinDark:13215098,nail:13939850,sleeve:6040977,cuff:15722184,ring:13214247,age:1},lumber:{skin:13010498,skinDark:9065768,nail:6962716,sleeve:11028498,cuff:2758704,ring:9067054,age:.4},pirate:{skin:13935988,skinDark:11041354,nail:1708040,sleeve:2060123,cuff:12653087,ring:13214247,age:.3},cowboy:{skin:13935988,skinDark:11041354,nail:6962716,sleeve:11028498,cuff:15784352,ring:13214247,age:.2},june:{skin:15978680,skinDark:14725264,nail:16747720,sleeve:16747720,cuff:8146431,ring:16044894,age:1}};function $0(i){return ec[i]||ec.ray}function br(i,e){const t=$0(i),n=new Qe,r=Qo(t.skin),s=Qo(t.sleeve),a=wr(new $e(.032,.04,.28,10),s,-.02,-.06,.1);a.rotation.z=.35,a.rotation.x=.35,n.add(a),n.add(wr(new Ve(.05,12,10),r,.02,.04,-.02)),n.add(wr(new ze(.1,.055,.12),r,.02,.05,-.1));for(let c=0;c<4;c+=1)n.add(wr(new dn(.012,.05,3,6),r,-.03+c*.018,.07,-.17));e&&(e.position.set(.02,.06,-.2),n.add(e));const o=new ht;return o.position.set(.02,.06,-.26),n.add(o),n.userData.nozzle=o,n}function ct(i,e={}){return new Ei({color:i,roughness:.5,metalness:.1,...e})}function _t(i,e,t=0,n=0,r=0,s,a,o){const c=new Ke(i,e);return c.position.set(t,n,r),c.castShadow=!0,c}function tc(){const i=new Qe;return i.add(_t(new ze(.08,.045,.07),ct(12653087,{roughness:.9}))),i.add(_t(new ze(.07,.02,.06),ct(16050369,{roughness:.9}),0,.018,0)),i}function sl(){const i=new Qe,e=_t(new $e(.012,.016,.28,8),ct(6962716));e.rotation.x=.2,i.add(e);const t=_t(new ze(.14,.08,.03),ct(9082012,{metalness:.75,roughness:.28}),.02,.12,0);return i.add(t),i.add(_t(new ze(.04,.09,.025),ct(11581632,{metalness:.7,roughness:.25}),-.05,.12,0)),i}function K0(){const i=new Qe,e=ct(16765503,{roughness:.35}),t=ct(3057880,{roughness:.3,metalness:.15});i.add(_t(new ze(.09,.08,.18),e,0,0,.02));const n=_t(new $e(.02,.028,.34,12),t,0,.02,-.22);n.rotation.x=Math.PI/2,i.add(n),i.add(_t(new Ve(.07,14,12),ct(6087142,{transparent:!0,opacity:.7,roughness:.15}),.01,.1,.04));const r=_t(new ze(.055,.15,.06),ct(15228164),0,-.11,.04);r.rotation.x=.32,i.add(r);const s=_t(new Ri(.022,.006,6,10),ct(1708040),0,-.03,0);s.rotation.y=Math.PI/2,i.add(s);const a=new ht;return a.position.set(0,.02,-.4),i.add(a),i.userData.nozzle=a,i}function J0(){const i=new Qe,e=ct(6962716,{roughness:.5}),t=_t(new Ri(.13,.01,7,22,Math.PI*1.05),e,.05,.02,-.02);t.rotation.set(.15,1.2,.35),i.add(t),i.add(_t(new $e(.012,.014,.055,8),ct(4006415),.02,.01,0));const n=_t(new $e(.004,.004,.26,6),ct(6042391),.03,.03,-.12);n.rotation.x=Math.PI/2,i.add(n);const r=_t(new Ci(.009,.028,8),ct(12634320,{metalness:.75}),.03,.03,-.26);r.rotation.x=-Math.PI/2,i.add(r),i.add(_t(new ze(.028,.007,.03),ct(12653087),.03,.04,-.02));const s=new ht;return s.position.set(.03,.03,-.28),i.add(s),i.userData.nozzle=s,i}function Z0(){const i=new Qe,e=ct(1842210,{metalness:.82,roughness:.22}),t=ct(6962716,{roughness:.65});i.add(_t(new ze(.07,.085,.16),e,0,.03,.02));const n=_t(new $e(.02,.022,.38,12),e,0,.04,-.24);n.rotation.x=Math.PI/2,i.add(n),i.add(_t(new $e(.055,.055,.055,12),e,0,.03,.04)),i.add(_t(new ze(.02,.04,.03),e,0,.09,.08));const r=_t(new ze(.055,.16,.07),t,0,-.1,.07);r.rotation.x=.42,i.add(r),i.add(_t(new ze(.06,.02,.08),ct(13214247,{metalness:.6}),0,-.02,.08));const s=new ht;return s.position.set(0,.04,-.44),i.add(s),i.userData.nozzle=s,i.userData.muzzle=s,i}function j0(i,e,t="ray"){for(;i.children.length;)i.remove(i.children[0]);i.userData.ammo=e,i.userData.carny=t;let n;for(e==="beanbags"?n=br(t,tc()):e==="parrot"?n=br(t,la()):e==="axe"?n=br(t,sl()):e==="water"?n=K0():e==="bow"?n=J0():e==="gun"?n=Z0():n=br(t,tc());n.children.length;)i.add(n.children[0]);if(i.userData.nozzle=n.userData.nozzle,!i.userData.nozzle){const r=new ht;r.position.set(0,.02,-.3),i.add(r),i.userData.nozzle=r}}function Q0(i){return i==="water"?10:1}function eg(i){if(i==="beanbags"){const e=new Qe;return e.add(new Ke(new ze(.09,.05,.08),ct(12653087,{roughness:.9}))),e.add(new Ke(new ze(.08,.02,.07),ct(16050369,{roughness:.9}))),e.children[1].position.y=.02,e}if(i==="parrot")return la();if(i==="axe"){const e=sl();return e.scale.setScalar(1.35),e}if(i==="bow"){const e=new Qe,t=new Ke(new $e(.018,.02,.5,8),ct(4860946,{roughness:.42}));t.rotation.x=-Math.PI/2,e.add(t);const n=new Ke(new Ci(.036,.1,8),ct(15199990,{metalness:.86,roughness:.16}));n.rotation.x=-Math.PI/2,n.position.z=-.28,e.add(n);const r=ct(12653087,{roughness:.4}),s=new Ke(new ze(.09,.012,.07),r);s.position.z=.16,e.add(s);const a=new Ke(new ze(.012,.09,.07),r);return a.position.z=.16,e.add(a),e}return i==="gun"?new Ke(new Ve(.012,8,6),ct(16769162,{emissive:16761933,emissiveIntensity:1.6,metalness:.4})):new Ke(new Ve(.016,8,6),ct(8050687,{transparent:!0,opacity:.85,roughness:.15,emissive:3842303,emissiveIntensity:.55}))}function nc(i){return i==="water"?8050687:i==="gun"?16761933:i==="bow"?16050369:i==="axe"?13214247:i==="parrot"?16757575:12653087}function tg(i){return i==="beanbags"||i==="parrot"||i==="axe"?.2:i==="water"?.12:i==="bow"?.1:i==="gun"?.07:.2}const ic={beanbags:[.15,-.34,-.85,.55,-.2,.35,.46],water:[.16,-.33,-.9,.35,-.25,0,.36],bow:[.15,-.32,-.88,.4,-.35,-.2,.5],gun:[.16,-.33,-.9,.28,-.22,0,.32],axe:[.15,-.32,-.86,.5,-.15,.4,.4],parrot:[.14,-.3,-.85,.2,-.1,.1,.3]};function rc(i){return 1-(1-i)**3}function ng(i){const e=new Pm({antialias:!0,alpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1}),t=Math.min(window.innerWidth||390,window.innerHeight||844)<520;e.setPixelRatio(Math.min(t?1.5:1.75,window.devicePixelRatio||1)),e.setClearColor(9357550,1),e.outputColorSpace=Ot,e.toneMapping=mc,e.toneMappingExposure=1.05,e.shadowMap.enabled=!1,i.appendChild(e.domElement);const n=document.createElement("div");n.className="curtain",i.appendChild(n);const r=new Lm;r.fog=new ta(15782576,7,22),r.add(new el(14150911,8413248,.35));const s=new Bt(50,1,.05,60);r.add(s);const a=new g0,o=new de,c=new L,l=new L,h=new L;let d=null,p=null,g=[],_=[],f=null,m=null,u=null,S=null,x=null,y=!1,N=!1,C=0,R=0,U=0,w={kind:"idle",t:0};const M=[];function P(){const q=i.clientWidth||window.innerWidth,H=i.clientHeight||window.innerHeight;e.setSize(q,H,!1),s.aspect=q/Math.max(1,H);const Q=s.aspect<.85;s.fov=Q?50:40,s.position.set(0,Q?1.18:1.32,Q?4.45:5.15),s.lookAt(0,1.02,0),s.updateProjectionMatrix(),X(),k(!1)}function X(){const q=s.aspect<.85,H=5,Q=Math.max(1,Math.ceil(g.length/H)),T=q?.4:.52;g.forEach((b,D)=>{const O=D%H,V=Math.floor(D/H);let Z,ue;Q<=2?(Z=V===0?q?1.28:1.42:q?.68:.76,ue=V===0?-.08:.1):(Z=(q?1.55:1.7)-V*(q?1.15:1.25)/(Q-1),ue=-.05+V*.05),b.anchor.position.set((O-2)*T,Z,ue)})}function k(q){const H=p&&p.userData.announcer;if(!H||q)return;s.aspect<.85?(H.position.set(.05,0,-1.25),H.scale.setScalar(.72),H.rotation.y=.05):(H.position.set(-1.95,0,.05),H.scale.setScalar(1.05),H.rotation.y=.5),H.userData.baseY=H.position.y}function $(){if(!f||!d)return;const q=ic[d.ammo]||ic.beanbags;f.position.set(q[0],q[1],q[2]+R*.07),f.rotation.set(q[3],q[4],q[5]),f.scale.setScalar(q[6])}function j(q,H){f&&(s.remove(f),Mn(f),f=null),f=new Qe,j0(f,q,H),f.visible=!0,s.add(f),$()}function Y(){u=null,m&&(Mn(m),m=null)}function te(){y=!1,Y(),S&&(r.remove(S),typeof S.dispose=="function"&&S.dispose(),S=null),x&&(Mn(x),x=null),p&&(Mn(p),p=null),g=[],_=[],M.length=0}function K(q){const H={fair:6962716,boardwalk:16052196,field:4025138,western:6042391,forest:4863012,seaside:14140578},Q=new Ke(new $e(.045,.055,.08,8),new Ei({color:H[q]||6962716,roughness:.86}));return Q.position.y=.03,Q}function ve(q){const H=new Qe;H.userData.kind="face";const Q=Y0(q),T=q.face==="picture",b=T?.56:.5,D=T?.56:.4,O=new Ke(new Cn(b,D),new Xt({map:Q}));return O.position.set(0,.32,.02),H.add(O),H}function xe(q,H){q.body&&(Mn(q.body),q.body=null),q.body=H,H&&q.anchor.add(H)}function _e(q){return q==="field"?1.15:q==="seaside"?1.7:1.42}function Oe(q,H){const Q=_e(H);(q||[]).slice(0,10).forEach(T=>{const b=new Qe;b.add(K(H));const D=new Ke(new Ve(H==="field"?.22:.2,8,6),new Xt({transparent:!0,opacity:0,depthWrite:!1}));D.position.set(0,H==="field"?.34*Q:.3,.04),D.userData.uid=T.uid,b.add(D);const O=Jo(H);O.scale.setScalar(Q),b.add(O),p.add(b),_.push(D),g.push({uid:T.uid,spec:T,anchor:b,body:O,hit:D,down:!1})}),X()}function We(q){C+=1;const H=d&&d.theme||"fair";te(),p=U0(H),r.add(p);const Q=nl(H);r.background=new Ye(Q.background),r.fog.color.setHex(Q.fog),r.fog.near=Q.fogNear,r.fog.far=Q.fogFar,e.setClearColor(Q.background,1),typeof document<"u"&&document.documentElement.setAttribute("data-arena",H),Oe(q,H),k(!1),f&&(f.visible=!0)}function J(q){return g.find(H=>H.uid===q)||null}function ae(q,H){if(!p)return;const Q=[];for(let T=0;T<7;T+=1){const b=new Ke(new Ve(.028,6,5),new Ei({color:H,roughness:.4}));b.position.copy(q),p.add(b),Q.push({m:b,v:new L((Math.random()-.5)*1.5,.8+Math.random()*.8,(Math.random()-.5)*1.2)})}M.push({t:0,dur:.38,step(T,b){for(const D of Q)D.m.parent&&(D.v.y-=3.2*b,D.m.position.addScaledVector(D.v,b))},done(){for(const T of Q)Mn(T.m)}})}function Me(q){const H=M.splice(0,M.length);for(const Q of H){Q.t+=q;const T=Math.min(1,Q.t/Q.dur);Q.step(T,q),T<1?M.push(Q):Q.done&&Q.done()}}return P(),{renderer:e,scene:r,camera:s,dom:e.domElement,epoch(){return C},setSign(){},setVoice(){},setRound(q){d=q||d;const H=d&&d.ammo||"beanbags",Q=d&&d.look||d&&d.carny||"ray";j(H,Q)},setCards(q){We(q||[])},clearRound:te,pick(q,H){if(y||N)return null;const Q=e.domElement.getBoundingClientRect();o.x=(q-Q.left)/Q.width*2-1,o.y=-((H-Q.top)/Q.height)*2+1,a.setFromCamera(o,s);const T=a.intersectObjects(_,!1);for(const b of T)if(b.object.userData.uid)return b.object.userData.uid;return null},sprayTo(q,H){const Q=J(q);if(!Q||y){H&&H();return}const T=C,b=new L;Q.hit.getWorldPosition(b);const D=new L;f&&f.userData.nozzle?f.userData.nozzle.getWorldPosition(D):f?f.getWorldPosition(D):D.set(.4,.4,3),Y();const O=d&&d.ammo||"beanbags";m=new Qe;const V=Math.max(1,Q0(O));for(let Z=0;Z<V;Z+=1)m.add(eg(O));r.add(m),O==="gun"&&(S=new ca(16765562,5,2.4),S.position.copy(D),r.add(S)),R=1,u={t:0,dur:tg(O),from:D,to:b,ammo:O,epochAt:T,done:!1,onHit:H}},spinOff(q){const H=J(q);if(!H||H.down)return;H.down=!0;const Q=new L;H.anchor.getWorldPosition(Q);const T=d&&d.ammo||"beanbags";ae(Q,nc(T)),xe(H,ve(H.spec))},restoreHidden(q){const H=d&&d.theme||"fair";for(const Q of q||[]){const T=J(Q);if(!T)continue;const b=Jo(H);b.scale.setScalar(_e(H)),xe(T,b),T.down=!1}},removeMatched(q){for(const H of q||[]){const Q=g.findIndex(D=>D.uid===H);if(Q<0)continue;const T=g[Q],b=new L;T.anchor.getWorldPosition(b),ae(b,16769162),Mn(T.anchor),g.splice(Q,1),_=_.filter(D=>D.userData.uid!==H)}},handReturn(q){for(const H of q||[]){const Q=J(H);if(!Q)continue;const T=Q.anchor.rotation.z;M.push({t:0,dur:.45,step(b){Q.anchor.parent&&(Q.anchor.rotation.z=T+Math.sin(b*Math.PI*3)*.12)},done(){Q.anchor.parent&&(Q.anchor.rotation.z=0)}})}},sparkle(q){for(const H of q||[]){const Q=J(H);if(!Q)continue;const T=new L;Q.anchor.getWorldPosition(T),ae(T,16769162)}},carnyHit(){w={kind:"hit",t:0}},carnyMiss(){w={kind:"miss",t:0}},celebrate(){w={kind:"win",t:0}},presentPrize(q,H={}){return new Promise(Q=>{y=!0,f&&(f.visible=!1);const T=p&&p.userData.announcer,b=s.aspect<.85,D=b?new L(-.15,0,1.55):new L(-.7,0,1.25),O=T?T.position.clone():new L,V=F0(q);if(V.scale.setScalar(H.big?1.85:1.45),x=new Qe,x.add(V),r.add(x),H.big)for(let le=0;le<18;le+=1){const Te=new Ke(new Cn(.06,.1),new Xt({color:[12653087,16044894,3065014,16775404,16731533][le%5],side:Zt}));Te.position.set((Math.random()-.5)*1.4,2.2+Math.random(),1.4),Te.userData.v=new L((Math.random()-.5)*.4,.4+Math.random()*.5,0),x.add(Te)}const Z=new L,ue=new L(.05,b?1.45:1.55,b?2.15:2.35);M.push({t:0,dur:H.big?1.25:.95,step(le,Te){const A=rc(Math.min(1,le/.45));T&&(T.position.lerpVectors(O,D,A),T.userData.arm&&(T.userData.arm.rotation.x=-1.15*A),T.userData.arm?T.userData.arm.getWorldPosition(Z):Z.copy(T.position));const v=Math.max(0,(le-.28)/.72);V.position.lerpVectors(Z,ue,rc(v)),V.rotation.y=le*Math.PI*2,H.big&&x.children.forEach(z=>{z.userData.v&&(z.userData.v.y-=Te*.7,z.position.addScaledVector(z.userData.v,Te),z.rotation.z+=Te*3)})},done(){Q()}})})},cover(q=820){return N=!0,n.style.transitionDuration=`${q}ms`,n.classList.add("on"),new Promise(H=>setTimeout(H,q))},uncover(q=820){return n.style.transitionDuration=`${q}ms`,n.classList.remove("on"),new Promise(H=>{setTimeout(()=>{N=!1,H()},q)})},resize:P,render(q){U+=q,R=Math.max(0,R-q*3.2),$(),p&&p.userData.tick&&p.userData.tick(U);const H=p&&p.userData.announcer;if(H&&!y){const Q=H.userData.baseY||0;H.position.y=Q+Math.sin(U*2.1)*.015,H.userData.head&&(H.userData.head.rotation.z=Math.sin(U*1.3)*.05),w.t+=q,w.kind==="hit"?(H.userData.arm&&(H.userData.arm.rotation.z=-.6),w.t>.6&&(w.kind="idle")):w.kind==="miss"?(H.userData.head&&(H.userData.head.rotation.x=Math.sin(w.t*16)*.08),w.t>.7&&(w.kind="idle",H.userData.head&&(H.userData.head.rotation.x=0))):H.userData.arm&&(H.userData.arm.rotation.z=Math.sin(U*1.6)*.08,H.userData.arm.rotation.x=0)}if(Me(q),S&&(S.intensity=Math.max(0,S.intensity-q*18),S.intensity<=0&&(r.remove(S),S=null)),u&&m){u.t+=q;const Q=Math.min(1,u.t/u.dur),T=u.ammo==="bow"||u.ammo==="gun"?.03:u.ammo==="water"?.1:.32;h.set((u.from.x+u.to.x)/2,Math.max(u.from.y,u.to.y)+T,(u.from.z+u.to.z)/2),m.children.forEach((b,D)=>{const O=m.children.length===1?Q:Math.max(0,Math.min(1,Q*1.15-D*.07));b.visible=O>0&&O<1.001;const V=1-O;l.set(V*V*u.from.x+2*V*O*h.x+O*O*u.to.x,V*V*u.from.y+2*V*O*h.y+O*O*u.to.y,V*V*u.from.z+2*V*O*h.z+O*O*u.to.z),b.position.copy(l),u.ammo==="bow"?b.lookAt(u.to):u.ammo==="axe"?b.rotation.z+=q*14:(u.ammo==="beanbags"||u.ammo==="parrot")&&(b.rotation.x+=q*9)}),Q>=1&&!u.done&&(u.done=!0,ae(u.to,nc(u.ammo)),u.epochAt===C&&u.onHit&&u.onHit()),u&&u.t>u.dur+.12&&Y()}e.render(r,s)},debugUids(){return g.map(q=>q.uid)},debugHits(){const q=e.domElement.getBoundingClientRect();return g.map(H=>(H.hit.getWorldPosition(c),c.project(s),{uid:H.uid,face:H.spec.face,animal:H.spec.animal||"",kind:H.body&&H.body.userData.kind||"",x:(c.x*.5+.5)*q.width+q.left,y:(-c.y*.5+.5)*q.height+q.top}))},census(){const q={};return r.traverse(H=>{const Q=H.userData&&H.userData.kind;Q&&(q[Q]=(q[Q]||0)+1)}),{theme:p&&p.userData.theme,kinds:q,meshes:ig(r)}},dispose(){te(),f&&Mn(f),e.dispose(),e.domElement.parentNode&&e.domElement.parentNode.removeChild(e.domElement),n.parentNode&&n.parentNode.removeChild(n)}}}function ig(i){let e=0;return i.traverse(t=>{t.isMesh&&(e+=1)}),e}const sc="4.1.0",Wn="memory-match",$s="memory-game",Sn=6,rg=780,sg="mrj.play_mode",al="mrj.leaderboard.v1",ol="mrj.student.queue.v1",cl="mrj.ui_locale",ll="mrj.teacher_skip",ul="mrj.player_name",ag="./packs/animals-1-10.json",og="./packs/ui-l1.json",ac=[{index:1,ammo:"beanbags",carny:"ray",look:"ray",label:"Bean bags",carnyName:"Coach Ray",theme:"fair"},{index:2,ammo:"water",carny:"nia",look:"nia",label:"Water gun",carnyName:"Nia",theme:"boardwalk"},{index:3,ammo:"bow",carny:"walt",look:"walt",label:"Longbow",carnyName:"Grandpa Walt",theme:"field"},{index:4,ammo:"gun",carny:"cowboy",look:"cowboy",label:"Gallery gun",carnyName:"Cowboy Dusty",theme:"western"},{index:5,ammo:"axe",carny:"june",look:"june",label:"Spinning axe",carnyName:"Grandma June",theme:"forest"},{index:6,ammo:"parrot",carny:"pirate",look:"pirate",label:"Parrot toss",carnyName:"Captain Pop",theme:"seaside"}],cg=[{index:1,a:"picture",b:"audio"},{index:2,a:"picture",b:"word"},{index:3,a:"audio",b:"word"},{index:4,a:"audio",b:"meaning"},{index:5,a:"meaning",b:"word"},{index:6,a:"meaning",b:"audio"}];function Pi(){try{if(typeof localStorage<"u")return localStorage}catch{}return null}function lg(i=typeof location<"u"?location.search:""){const t=new URLSearchParams(i).get("pack");return t&&t.trim()?t.trim():ag}function ug(i=typeof location<"u"?location.search:""){const e=new URLSearchParams(i||"");return e.get("embed")==="1"||e.get("student")==="1"}function hg(i="",e=[]){const t=Array.isArray(e)?e:e&&e.locales||[],n=new Set(t.map(s=>s&&s.code||"").filter(Boolean)),r=new URLSearchParams(i||"");for(const s of["locale","lang","ui_locale"]){const a=r.get(s);if(!a)continue;const o=String(a).trim();if(o&&n.has(o))return o}return""}function dg(i=typeof location<"u"?location.search:""){const e=new URLSearchParams(i);return e.get("student")||e.get("student_id")||"local-student"}async function Ps(i){const e=await fetch(i,{cache:"no-store"});if(!e.ok)throw new Error(`Load failed (${e.status}): ${i}`);return e.json()}function fg(i){if(!i||typeof i!="object")throw new Error("Invalid pack");if(!Array.isArray(i.items)||i.items.length===0)throw new Error("Invalid pack: items[] required");for(const e of i.items){if(!e||!e.id)throw new Error("Invalid pack item: id required");if(!e.en)throw new Error(`Invalid pack item ${e.id}: en required`)}return!0}function hl(i,e=Math.random){const t=i.slice();for(let n=t.length-1;n>0;n-=1){const r=Math.floor(e()*(n+1));[t[n],t[r]]=[t[r],t[n]]}return t}function oc(i="id"){return typeof crypto<"u"&&crypto.randomUUID?`${i}_${crypto.randomUUID()}`:`${i}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,10)}`}function pt(i){return String(i??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Ar(i){const e=Math.max(0,Math.floor(Number(i)||0)),t=Math.floor(e/6e4),n=Math.floor(e%6e4/1e3),r=Math.floor(e%1e3/10);return`${t}:${String(n).padStart(2,"0")}.${String(r).padStart(2,"0")}`}function dl(i){return i&&i.n!=null&&i.n!==""?String(i.n):""}function ua(i,e){const t=i&&i.l1||{};return e&&t[e]?String(t[e]):""}function pg(i,e){if(e&&e!=="en"){const t=ua(i,e);if(t)return{kind:"l1",text:t}}return{kind:"digit",text:dl(i)}}function mg(i,e,t){const n=i&&i.n!=null?Number(i.n):0,r=i&&i.audio_id||"",s=i&&(i.animal||i.id)||"";if(e==="meaning"){const a=pg(i,t);return{kind:a.kind,text:a.text,n,audioId:r,animal:s}}return e==="word"?{kind:"word",text:i.en?String(i.en):"",n,audioId:r,animal:s}:e==="audio"?{kind:"audio",text:"",n,audioId:r,animal:s}:e==="picture"?{kind:"picture",text:"",n,audioId:r,animal:s}:e==="digit"?{kind:"digit",text:dl(i),n,audioId:r}:e==="l1"?{kind:"l1",text:ua(i,t),n,audioId:r}:{kind:e||"word",text:"",n,audioId:r}}function Kt(i){const e=cg[i-1];if(!e)throw new Error(`Round ${i} out of range (1–${Sn})`);const t=ac[i-1]||ac[0];return{...e,...t}}function gg(i){const e=Kt(i);return`lesson_${e.a}_${e.b}`}function _g(i,e){const t=Array.isArray(i&&i.skill_tags)?i.skill_tags:[],n=Array.isArray(e&&e.skill_tags)?e.skill_tags:[];return[...t,...n]}function cc(i,e=Math.random){const n=hl(i.items||[],e);if(n.length<1)throw new Error("Pack needs at least 1 item");const r=n.length>=10?n.slice(0,10):n.slice();return r.length<=5?{heatA:r,heatB:[],heatPairs:r.length,heatCount:1}:{heatA:r.slice(0,5),heatB:r.slice(5,10),heatPairs:5,heatCount:2}}function Ls(i,e,t,n,r=Math.random){const s=[];for(const a of i)for(const o of[e.a,e.b]){const c=mg(a,o,t);s.push({uid:`${a.id}::${o}::${c.kind}`,itemId:a.id,role:o,face:c.kind,text:c.text,n:c.n,audioId:c.audioId,animal:c.animal||a.animal||a.id,l1:ua(a,t),skill_tags:_g(n,a),down:!1})}return hl(s,r).map((a,o)=>({...a,slot:o}))}function lc(i,e){return!i||!e||i.uid===e.uid||i.itemId!==e.itemId?!1:i.role!==e.role}function Ds(i){if(i==null)return null;const e=String(i).trim();return!e||e.toLowerCase()==="null"?null:/^(https?:)?\/\//i.test(e)||e.startsWith("data:")||e.startsWith("blob:")||e.startsWith("./")||e.startsWith("/")?e:/\.[a-z0-9]{2,4}$/i.test(e)?`./audio/${e}`:`./audio/${e}.mp3`}function vg(i,e,t){const n=i&&i.strings||{},r=n[e]||{};return r[t]!=null?String(r[t]):n.en&&n.en[t]!=null?String(n.en[t]):t}function xg(i,e){return(i&&i.locales||[]).find(n=>n&&n.code===e)||{code:e,label:e,rtl:!1}}function Hr(i,e){const t=Pi();if(t)try{t.setItem(i,e)}catch{}}function ha(i,e=""){const t=Pi();if(!t)return e;try{const n=t.getItem(i);return n??e}catch{return e}}function Mg(i="en"){return ha(cl,i)||i}function Sg(i){Hr(cl,i)}function yg(i=!0){const e=ha(ll,"");return e==="0"||e==="false"?!1:e==="1"||e==="true"?!0:i}function Eg(i){Hr(ll,i?"1":"0")}function wg(i="Player"){return ha(ul,i)||i}function uc(i){Hr(ul,i)}function bg(){try{if(typeof location<"u"&&(new URLSearchParams(location.search).get("mode")||"").toLowerCase()==="maker")return"maker"}catch{}return"student"}function hc(i){Hr(sg,i==="maker"?"maker":"student")}function fl(){const i=Pi();if(!i)return[];try{const e=JSON.parse(i.getItem(al)||"[]");return Array.isArray(e)?e:[]}catch{return[]}}function Tg({module_id:i,name:e,total_ms:t,rounds:n,at:r}={}){const s={module_id:i||Wn,name:e&&String(e).trim()||"Player",total_ms:Math.max(0,Math.round(Number(t)||0)),rounds:Number(n)||Sn,at:r||new Date().toISOString()},a=fl();a.push(s);const o=Pi();if(o)try{o.setItem(al,JSON.stringify(a))}catch{}return s}function Ag(i=Wn){return fl().filter(e=>e&&e.module_id===i).slice().sort((e,t)=>e.total_ms-t.total_ms||String(e.at).localeCompare(String(t.at))).slice(0,10)}function Cg(){const i=Pi();if(!i)return[];try{const e=JSON.parse(i.getItem(ol)||"[]");return Array.isArray(e)?e:[]}catch{return[]}}function Rg(i){const e=Pi();if(e)try{e.setItem(ol,JSON.stringify(i.slice(-2e3)))}catch{}}function Pg({studentId:i="local-student",sessionId:e,uiLocale:t="en"}={}){const n=Cg();function r(s={}){const a={student_id:i,session_id:e,module_id:Wn,activity_id:$s,item_id:"",skill_tags:[],response:"",correct:!1,latency_ms:0,accuracy:0,points:0,errors:0,started_at:new Date().toISOString(),ended_at:new Date().toISOString(),ui_locale:t,round_index:0,total_ms:0,...s};return n.push(a),Rg(n),console.log("[memory-match record]",a),typeof window<"u"&&window.dispatchEvent(new CustomEvent("mrj-memory-match-record",{detail:a})),a}return{emit:r,queue:n,setLocale(s){t=s},setSession(s){e=s}}}function Lg(){let i=null,e=null,t=null,n=!1,r="cowboy";const s=new Map,a=new Map;let o=null;function c(){if(i)return i.state==="suspended"&&i.resume().catch(()=>{}),i;const u=window.AudioContext||window.webkitAudioContext;if(!u)return null;i=new u,e=i.createGain(),e.gain.value=.78,e.connect(i.destination),t=i.createGain(),t.gain.value=1,t.connect(e);const S=i.createBuffer(1,i.sampleRate,i.sampleRate),x=S.getChannelData(0);for(let y=0;y<x.length;y+=1)x[y]=Math.random()*2-1;return o=S,i}async function l(u){const S=Ds(u);if(!S)return null;if(s.has(u))return s.get(u);if(a.has(u))return a.get(u);const x=(async()=>{const y=c();if(!y)return null;try{const N=await fetch(S);if(!N.ok)return s.set(u,!1),!1;const C=await N.arrayBuffer(),R=await y.decodeAudioData(C.slice(0));return s.set(u,R),R}catch{return null}})();return a.set(u,x),x}function h(u,S=1,x=1){if(n||!u)return!1;const y=c();if(!y||!t)return!1;const N=y.createBufferSource(),C=y.createGain();return N.buffer=u,N.playbackRate.value=x,C.gain.value=S,N.connect(C),C.connect(t),N.start(),!0}async function d(u,S=1){if(n||!u)return!1;const x=c();if(x)try{const y=await fetch(u);if(!y.ok)return!1;const N=await x.decodeAudioData((await y.arrayBuffer()).slice(0));if(h(N,S))return!0}catch{}try{const y=new Audio(u);return y.volume=Math.min(1,S),await y.play(),!0}catch{return!1}}async function p(u,S=1){if(n||!u)return!1;const x=await l(u);if(x===!1)return!1;if(x&&h(x,S))return!0;const y=Ds(u);if(!y)return!1;try{const N=new Audio(y);return N.volume=Math.min(1,S),await N.play(),!0}catch{return!1}}function g(u){const S=u?8:4;for(let x=0;x<S;x+=1)m(.05,u?.28:.18,x*.08,700,2800)}async function _(u,S=.95){const x=Math.random()<.5?"1":"2";if(u==="win")return d("./audio/prize/applause.mp3",S);const y=u==="round"?`carnies/${r}-round`:`carnies/${r}-${u}-${x}`;return p(y,S)}function f(u,S,x,y,N=0,C=0){if(n)return;const R=c();if(!R||!t)return;const U=R.currentTime+N,w=R.createOscillator(),M=R.createGain();w.type=x,w.frequency.setValueAtTime(u,U),C&&w.frequency.exponentialRampToValueAtTime(Math.max(40,u+C),U+S),M.gain.setValueAtTime(1e-4,U),M.gain.exponentialRampToValueAtTime(y,U+.012),M.gain.exponentialRampToValueAtTime(1e-4,U+S),w.connect(M),M.connect(t),w.start(U),w.stop(U+S+.02)}function m(u,S,x=0,y=400,N=2400){if(n)return;const C=c();if(!C||!t||!o)return;const R=C.currentTime+x,U=C.createBufferSource();U.buffer=o,U.loop=!0;const w=C.createBiquadFilter();w.type="bandpass",w.frequency.setValueAtTime(N,R),w.frequency.exponentialRampToValueAtTime(y,R+u),w.Q.value=.7;const M=C.createGain();M.gain.setValueAtTime(S,R),M.gain.exponentialRampToValueAtTime(1e-4,R+u),U.connect(w),w.connect(M),M.connect(t),U.start(R),U.stop(R+u+.02)}return{unlock(){c()},setCarny(u){r=u||"cowboy"},preload(u){return Promise.all((u||[]).map(S=>l(S)))},playFile:p,word(u){const S=String(u||"").replace(/\.mp3$/i,""),x=Ds(S);return x?d(x,1).then(y=>({ok:y,fallback:!1})):Promise.resolve({ok:!1,fallback:!1})},carnyHit(){return _("hit",.95)},carnyMiss(){return _("miss",.95)},carnyRound(){return _("round",.92)},carnyWin(){return d("./audio/prize/applause.mp3",1).then(u=>(u||g(!0),u))},applause(u=!1){return d("./audio/prize/applause.mp3",u?1:.88).then(S=>(S||g(!!u),S))},prizeLine(u){const S={ray:"ray",nia:"nia",walt:"walt",cowboy:"cowboy",june:"june",pirate:"pirate"}[u];return S?d(`./audio/prize/${S}-prize.mp3`,1):Promise.resolve(!1)},spray(){m(.32,.22,0,1800,6400),m(.2,.14,.05,2600,7200),f(520,.1,"sine",.08,0,-180)},suction(){f(220,.12,"sine",.07,0,80),m(.1,.12,0,400,1200)},pellet(){f(520,.05,"square",.04,0,-60),f(140,.08,"triangle",.05,.02)},bubbles(){f(640,.08,"sine",.04,0,120),f(880,.1,"sine",.03,.05,80)},beanbag(){m(.11,.22,0,280,1700),f(96,.1,"triangle",.18,.09,-36)},petals(){f(740,.1,"sine",.035,0),f(980,.12,"triangle",.03,.04)},axe(){m(.09,.2,0,320,1900),f(74,.11,"triangle",.22,.07,-28),m(.05,.16,.08,80,380)},gunshot(){m(.04,.26,0,520,4e3),f(260,.035,"square",.14,0,-140),f(120,.06,"triangle",.1,.012,-50)},glass(){m(.22,.45,0,800,5200),m(.16,.3,.04,400,2800),f(1800,.08,"square",.06,0,-800),f(900,.12,"triangle",.05,.03,-400)},squeak(){f(2400,.07,"sine",.08,0,-600),f(1800,.09,"sine",.06,.05,-400)},balloonPop(){m(.18,.4,0,600,3600),f(140,.1,"sine",.08,0,-60),this.splash()},bow(){f(120,.07,"triangle",.22,0,280),f(240,.05,"sawtooth",.1,.03,160),m(.06,.18,.05,700,2500)},flap(){m(.1,.2,0,360,1800),m(.08,.15,.06,520,2100),f(920,.05,"sine",.16,.06,480)},fire(u){return u==="beanbags"?this.beanbag():u==="water"?this.spray():u==="parrot"?this.flap():u==="axe"?this.axe():u==="bow"?this.bow():u==="gun"?this.gunshot():this.beanbag()},splash(){m(.16,.24,0,500,2800),f(220,.09,"sine",.05,0,-80)},thump(){f(72,.12,"sine",.12,0,-30),f(140,.08,"triangle",.05,.01)},pop(){f(320,.07,"square",.04,0,80),f(190,.1,"sine",.05,.02)},sparkle(){f(880,.08,"sine",.04,0),f(1320,.1,"triangle",.035,.04),f(1760,.12,"sine",.03,.08)},haptic(u=14){try{navigator.vibrate&&navigator.vibrate(u)}catch{}},setMuted(u){n=!!u}}}const Ks=document.getElementById("app");function Dg(i){const e=document.createElement("div");return e.innerHTML=i.trim(),e.firstElementChild}async function Ig(){try{document.fonts&&document.fonts.ready&&await Promise.race([document.fonts.ready,new Promise(i=>setTimeout(i,1400))])}catch{}}function dc(){const i=Ag(Wn);return i.length?`<ol>${i.map(e=>`<li><span>${pt(e.name)}</span><span>${pt(Ar(e.total_ms))}</span></li>`).join("")}</ol>`:'<p class="empty">—</p>'}async function Ug(){const i=lg(),e=og,[t,n,r]=await Promise.all([Ps(i),Ps(e),Ps("./packs/index.json").catch(()=>({packs:[]}))]);fg(t),await Promise.all([Ig(),B0()]);const s=ng(Ks);typeof window<"u"&&(window.__booth=s);const a=Lg();s.setSign(t.title||"");const o=dg(),c=ug(),l=hg(location.search,n.locales||[]);let h;c?h=l||"en":l?h=l:(h=Mg(t.default_ui_locale||"en"),(n.locales||[]).some(b=>b.code===h)||(h="en"));let d=wg("Player"),p=bg(),g=yg(!0);const _=Dg(`<div class="hud">
    <div class="play-bar hidden" id="play-bar">
      <div class="strip">
        <b class="game-name">Memory Game</b>
        <span id="hud-round">1/6</span>
        <span id="hud-ammo">Bean bags</span>
        <span id="hud-rtime">0:00</span>
      </div>
      <p class="lesson" id="hud-lesson"></p>
      <div class="skip-bar hidden" id="skip-bar">
        <button type="button" id="skip-heat">Skip heat</button>
        <button type="button" id="skip-round">Next round</button>
        <span class="skip-rounds" id="skip-rounds"></span>
      </div>
    </div>
    <div class="reveals" id="reveals"></div>
    <div class="toast" id="toast"></div>
    <div class="overlay" id="start"></div>
    <div class="overlay hidden" id="end"></div>
  </div>`);Ks.appendChild(_);const f={view:"start",pack:t,ui:n,locale:h,embedded:c,teacherSkip:g,playerName:d,playMode:p,sessionId:oc("session"),telemetry:null,round:1,heat:0,heats:null,cards:[],open:[],locked:!1,matched:0,flyingUid:null,queuedUid:null,usedSkip:!1,roundStartedAt:0,completedMs:[],firstTapAt:0,heatStartedAt:0,pairStartedAt:0};function m(b){return vg(f.ui,f.locale,b)}function u(){const b=xg(f.ui,f.locale);document.documentElement.lang=f.locale,document.documentElement.setAttribute("dir",b.rtl?"rtl":"ltr")}function S(){return f.embedded?!1:f.playMode==="maker"?!0:!!f.teacherSkip}function x(b){return b?b.heatCount?b.heatCount:b.heatB&&b.heatB.length?2:1:1}function y(){return(f.ui.locales||[]).map(b=>`<button type="button" class="lang-chip${b.code===f.locale?" on":""}" data-code="${pt(b.code)}">${pt(b.label)}</button>`).join("")}function N(){return(r.packs||[]).map(b=>`<button type="button" class="lang-chip${b.file===i?" on":""}" data-pack="${pt(b.file)}">${pt(b.title||b.file)}</button>`).join("")}function C(){u(),_.querySelector("#start").classList.remove("hidden"),_.querySelector("#end").classList.add("hidden"),_.querySelector("#play-bar").classList.add("hidden");const D=f.playMode==="maker"?`<div class="mode-row">
          <button type="button" class="mode-btn" id="mode-student">Student</button>
          <button type="button" class="mode-btn on" id="mode-maker">Maker</button>
        </div>
        <p class="hint">Maker: skip heats and rounds while you test.</p>`:"",O=f.embedded?"":`<div class="mode-row one">
          <button type="button" class="mode-btn${S()?" on":""}" id="teacher-skip">Teacher</button>
        </div>`,V=f.embedded?"":`<p class="lang-label">${pt(m("language"))}</p>
          <div class="lang-grid" id="lang-grid">${y()}</div>
          <p class="hint">${f.locale==="en"?pt(m("l1_off")):""}</p>`;_.querySelector("#start").innerHTML=`
      <aside class="board-dock">
        <h2>${pt(m("leaderboard"))}</h2>
        ${dc()}
      </aside>
      <div class="card">
        <div class="card-scroll">
          <p class="kicker">MRJ ENGLISH · v${sc}</p>
          <h1>Memory Game</h1>
          <p class="sub">${pt(t.title||"")}</p>
          <p class="lang-label">${pt(m("pack"))}</p>
          <div class="lang-grid" id="pack-grid">${N()}</div>
          <p class="how">${pt(m("how"))}</p>
          ${D}
          ${O}
          <div class="row solo">
            <label>Name
              <input id="name" type="text" maxlength="24" autocomplete="nickname" value="${pt(f.playerName)}" />
            </label>
          </div>
          ${V}
        </div>
        <button class="btn" id="btn-play" type="button">${pt(m("play"))}</button>
      </div>`,_.querySelector("#name").addEventListener("change",v=>{f.playerName=v.target.value.trim()||"Player",uc(f.playerName)});const Z=_.querySelector("#mode-student"),ue=_.querySelector("#mode-maker");Z&&Z.addEventListener("click",()=>{f.playMode="student",hc("student"),C()}),ue&&ue.addEventListener("click",()=>{f.playMode="maker",hc("maker"),C()});const le=_.querySelector("#teacher-skip");le&&le.addEventListener("click",()=>{f.teacherSkip=!f.teacherSkip,Eg(f.teacherSkip),C()});const Te=_.querySelector("#lang-grid");Te&&Te.addEventListener("click",v=>{const z=v.target.closest("[data-code]");z&&(f.locale=z.getAttribute("data-code"),Sg(f.locale),C())});const A=_.querySelector("#pack-grid");A&&A.addEventListener("click",v=>{const z=v.target.closest("[data-pack]");if(!z)return;const ne=z.getAttribute("data-pack");if(!ne||ne===i)return;const ie=new URL(location.href);ie.searchParams.set("pack",ne),location.assign(ie.toString())}),_.querySelector("#btn-play").addEventListener("click",()=>k()),R()}function R(){try{const b=cc(t);s.setRound(Kt(1)),s.setCards(Ls(b.heatA,Kt(1),f.locale,t))}catch{}}function U(){_.querySelector("#play-bar").classList.add("hidden"),_.querySelector("#end").classList.remove("hidden");const b=f.completedMs.reduce((D,O)=>D+O,0);_.querySelector("#end").innerHTML=`
      <aside class="board-dock">
        <h2>${pt(m("leaderboard"))}</h2>
        ${dc()}
      </aside>
      <div class="card">
        <p class="kicker">MRJ ENGLISH</p>
        <h1>Memory Game</h1>
        <p class="sub">${pt(m("total"))}</p>
        <p class="win-time">${pt(Ar(b))}</p>
        <button class="btn" id="btn-again" type="button">${pt(m("again"))}</button>
      </div>`,_.querySelector("#btn-again").addEventListener("click",()=>{f.view="start",C()})}function w(b=performance.now()){const D=f.completedMs.reduce((O,V)=>O+V,0);return f.view!=="play"||!f.roundStartedAt?D:D+(b-f.roundStartedAt)}function M(b=performance.now()){_.querySelector("#hud-round").textContent=`${f.round}/${Sn}`;const D=Kt(f.round);_.querySelector("#hud-ammo").textContent=D.label||"",_.querySelector("#hud-rtime").textContent=Ar(w(b)),_.querySelector("#hud-lesson").textContent=m(gg(f.round));const O=_.querySelector("#skip-bar");S()&&f.view==="play"?O.classList.remove("hidden"):O.classList.add("hidden")}function P(){const b=_.querySelector("#skip-rounds");b.innerHTML=[1,2,3,4,5,6].map(D=>`<button type="button" class="round-jump${D===f.round?" on":""}" data-round="${D}">${D}</button>`).join("")}function X(){const b=["prize/applause","prize/ray-prize","prize/nia-prize","prize/walt-prize","prize/cowboy-prize","prize/june-prize","prize/pirate-prize"],D=["cowboy","pirate","ray","june","nia","walt"],O=["hit-1","hit-2","miss-1","miss-2","round"];for(const V of D)for(const Z of O)b.push(`carnies/${V}-${Z}`);for(const V of t.items||[])V.audio_id&&b.push(V.audio_id);return a.preload(b)}function k(){const b=_.querySelector("#name");b&&(f.playerName=b.value.trim()||"Player",uc(f.playerName)),a.unlock(),X(),f.sessionId=oc("session"),f.telemetry=Pg({studentId:o,sessionId:f.sessionId,uiLocale:f.locale}),f.completedMs=[],f.usedSkip=!1,f.flyingUid=null,f.queuedUid=null,f.round=1,f.view="play",_.querySelector("#start").classList.add("hidden"),_.querySelector("#end").classList.add("hidden"),_.querySelector("#play-bar").classList.remove("hidden"),u(),P(),$(1)}function $(b){f.view="play",f.round=b,f.heat=0,f.heats=cc(t),f.roundStartedAt=performance.now();const D=Kt(b);a.setCarny(D.carny),s.setRound(D),a.carnyRound(),P(),j()}function j(){const b=Kt(f.round),D=f.heat===0?f.heats.heatA:f.heats.heatB;f.cards=Ls(D,b,f.locale,t),f.open=[],f.flyingUid=null,f.queuedUid=null,f.locked=!1,f.matched=0,f.heatStartedAt=performance.now(),_e(),s.setCards(f.cards),M()}function Y(b){return f.cards.find(D=>D.uid===b)}function te(b,D,O,V,Z){const ue=[...new Set([...b.skill_tags||[],...D.skill_tags||[]])];f.telemetry.emit({student_id:o,session_id:f.sessionId,module_id:Wn,activity_id:$s,item_id:O?b.itemId:`${b.itemId},${D.itemId}`,skill_tags:ue,response:`${b.uid}|${D.uid}`,correct:O,latency_ms:Math.max(0,Math.round(Z-V)),accuracy:O?1:0,points:0,errors:O?0:1,started_at:new Date(Date.now()-(Z-V)).toISOString(),ended_at:new Date().toISOString(),ui_locale:f.locale,round_index:f.round,total_ms:Math.round(w(Z))})}function K(b){b&&b.audioId&&b.face==="audio"&&a.word(b.audioId)}function ve(b){const D=_.querySelector("#reveals");if(!D||!b)return;let O=D.querySelector(`[data-uid="${CSS.escape(b.uid)}"]`);if(!O){for(;D.children.length>=2;)D.firstElementChild?.remove();O=document.createElement("div"),O.className="reveal-card",O.dataset.uid=b.uid,D.appendChild(O)}const V=b.animal||"",Z=k0(V);if(b.face==="picture"&&Z)O.innerHTML=`<img src="${Z}" alt="">`;else if(b.face==="picture"&&b.n)O.innerHTML=`<b class="bigword">${pt(String(b.n))}</b>`;else if(b.face==="picture")O.innerHTML='<div class="speaker">🃏</div>';else if(b.face==="audio")O.innerHTML='<div class="speaker">🔊</div>';else if(b.face==="word"){const ue=f.locale!=="en"&&b.l1&&b.l1!==b.text?`<b class="l1help">${pt(b.l1)}</b>`:"";O.innerHTML=`<b class="bigword">${pt(b.text||"")}</b>${ue}`}else O.innerHTML=`<b class="bigword">${pt(b.text||"")}</b>`;O.classList.remove("hidden")}function xe(b){const D=_.querySelector(`#reveals [data-uid="${CSS.escape(b)}"]`);D&&D.remove()}function _e(){const b=_.querySelector("#reveals");b&&(b.innerHTML="")}async function Oe(){if(f.finishing)return;_e(),f.finishing=!0,f.view="ceremony",f.locked=!0;const b=Kt(f.round),D=f.round>=Sn;try{await Promise.all([s.presentPrize(b.theme,{big:D}),a.applause(D),a.prizeLine(b.carny)]),await s.cover(420)}catch(O){console.error(O),await s.cover(420)}s.clearRound(),D?J():$(f.round+1),await s.uncover(420),f.finishing=!1}function We(){if(f.heat+1<x(f.heats)){f.heat+=1,j();return}const b=performance.now();f.completedMs.push(b-f.roundStartedAt),Oe()}function J(){f.view="end",f.locked=!0;const b=f.completedMs.reduce((D,O)=>D+O,0);!S()&&!f.usedSkip&&Tg({module_id:Wn,name:f.playerName||"Player",total_ms:b,rounds:Sn,at:new Date().toISOString()}),f.telemetry.emit({item_id:"session",skill_tags:t.skill_tags||[],response:"win",correct:!0,latency_ms:Math.round(b),accuracy:1,points:0,errors:0,started_at:new Date(Date.now()-b).toISOString(),ended_at:new Date().toISOString(),ui_locale:f.locale,round_index:Sn,total_ms:Math.round(b)}),U()}function ae(){return f.open.length+(f.flyingUid?1:0)+(f.queuedUid?1:0)}function Me(b){if(f.view!=="play")return;const D=Y(b);if(D){if(D.down){K(D);return}if(!f.open.find(O=>O.uid===b)&&!(f.flyingUid===b||f.queuedUid===b)){if(f.locked){ae()===1&&!f.queuedUid&&(f.queuedUid=b);return}f.open.length>=1&&ae()>=2||ce(b)}}}function ce(b){const D=Y(b);!D||D.down||f.open.find(O=>O.uid===b)||(f.locked=!0,f.flyingUid=b,f.open.length===0&&(f.pairStartedAt=performance.now(),_e()),a.fire(Kt(f.round).ammo),a.haptic(12),s.sprayTo(b,()=>{f.flyingUid=null;const O=Kt(f.round).ammo;if(O==="beanbags"?a.glass():O==="water"?a.squeak():O==="gun"?a.balloonPop():a.thump(),s.spinOff(b),D.down=!0,K(D),ve(D),f.open.push(D),f.open.length<2){f.locked=!1;const Te=f.queuedUid;f.queuedUid=null,Te&&f.view==="play"&&ce(Te);return}f.queuedUid=null;const[V,Z]=f.open,ue=lc(V,Z),le=performance.now();if(te(V,Z,ue,f.pairStartedAt||le,le),ue)a.sparkle(),s.sparkle([V.uid,Z.uid]),s.carnyHit(),s.removeMatched([V.uid,Z.uid]),f.matched+=1,f.open=[],f.locked=!1,setTimeout(()=>{xe(V.uid),xe(Z.uid)},700),f.matched>=Math.floor(f.cards.length/2)&&setTimeout(We,450);else{s.carnyMiss(),s.handReturn([V.uid,Z.uid]);const Te=s.epoch();setTimeout(()=>{s.epoch()===Te&&(a.pop(),xe(V.uid),xe(Z.uid),s.restoreHidden([V.uid,Z.uid]),V.down=!1,Z.down=!1,f.open=[],f.locked=!1)},rg)}}))}function q(b){if(b.type==="pointerdown")try{b.target.setPointerCapture(b.pointerId)}catch{}const D=s.pick(b.clientX,b.clientY);D&&(b.preventDefault(),Me(D))}s.dom.addEventListener("pointerdown",q,{passive:!1}),window.addEventListener("resize",()=>s.resize()),window.addEventListener("orientationchange",()=>setTimeout(()=>s.resize(),120)),_.querySelector("#skip-heat").addEventListener("click",()=>{!S()||f.view!=="play"||(f.usedSkip=!0,We())}),_.querySelector("#skip-round").addEventListener("click",()=>{!S()||f.view!=="play"||(f.usedSkip=!0,f.completedMs.push(Math.max(0,performance.now()-(f.roundStartedAt||performance.now()))),Oe())}),_.querySelector("#skip-rounds").addEventListener("click",b=>{if(!S()||f.view!=="play")return;const D=b.target.closest("[data-round]");if(!D)return;f.usedSkip=!0;const O=Number(D.getAttribute("data-round"));O>=1&&O<=Sn&&$(O)});let H=performance.now();function Q(b){const D=Math.min(.05,(b-H)/1e3);H=b,s.render(D),f.view==="play"&&M(b),requestAnimationFrame(Q)}requestAnimationFrame(Q),C();const T=new URLSearchParams(location.search);if(T.get("autostart")==="1"){k();const b=Number(T.get("round")||1);b>=2&&b<=Sn&&$(b)}T.get("tap")==="1"&&setTimeout(()=>{const D=f.cards[0];if(!D)return;Me(D.uid);const O=f.cards.find(V=>V.itemId===D.itemId&&V.uid!==D.uid);setTimeout(()=>{O&&Me(O.uid)},420)},700),window.MRJMemoryMatch={version:sc,module_id:Wn,activity_id:$s,pack:t,ui:f.ui,booth:s,engine:{roundDef:Kt,dealHeat:Ls,isComplementaryPair:lc,formatMs:Ar}}}Ug().catch(i=>{Ks.textContent="Memory Game failed to load: "+i.message,console.error(i)});
