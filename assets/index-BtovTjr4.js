(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ks="165",il=0,ga=1,rl=2,oc=1,cc=2,pn=3,Pn=0,ze=1,en=2,Rn=0,vi=1,_a=2,va=3,xa=4,sl=5,Wn=100,al=101,ol=102,cl=103,ll=104,ul=200,hl=201,dl=202,fl=203,Os=204,Bs=205,pl=206,ml=207,gl=208,_l=209,vl=210,xl=211,Ml=212,Sl=213,yl=214,El=0,wl=1,bl=2,wr=3,Tl=4,Al=5,Rl=6,Cl=7,lc=0,Pl=1,Ll=2,Cn=0,Dl=1,Il=2,Ul=3,uc=4,Nl=5,Fl=6,Ol=7,hc=300,Si=301,yi=302,zs=303,ks=304,Dr=306,Vi=1e3,qn=1001,Hs=1002,qe=1003,Bl=1004,Ji=1005,Je=1006,Wr=1007,Yn=1008,Ln=1009,zl=1010,kl=1011,br=1012,dc=1013,Ei=1014,An=1015,Ir=1016,fc=1017,pc=1018,wi=1020,Hl=35902,Gl=1021,Vl=1022,rn=1023,Wl=1024,Xl=1025,xi=1026,bi=1027,ql=1028,mc=1029,Yl=1030,gc=1031,_c=1033,Xr=33776,qr=33777,Yr=33778,$r=33779,Ma=35840,Sa=35841,ya=35842,Ea=35843,wa=36196,ba=37492,Ta=37496,Aa=37808,Ra=37809,Ca=37810,Pa=37811,La=37812,Da=37813,Ia=37814,Ua=37815,Na=37816,Fa=37817,Oa=37818,Ba=37819,za=37820,ka=37821,Kr=36492,Ha=36494,Ga=36495,$l=36283,Va=36284,Wa=36285,Xa=36286,Kl=3200,Jl=3201,vc=0,jl=1,Tn="",Oe="srgb",Un="srgb-linear",Js="display-p3",Ur="display-p3-linear",Tr="linear",de="srgb",Ar="rec709",Rr="p3",jn=7680,qa=519,Zl=512,Ql=513,tu=514,xc=515,eu=516,nu=517,iu=518,ru=519,Ya=35044,$a="300 es",_n=2e3,Cr=2001;class Ai{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jr=Math.PI/180,Pr=180/Math.PI;function Wi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function Re(i,t,e){return Math.max(t,Math.min(e,i))}function su(i,t){return(i%t+t)%t}function jr(i,t,e){return(1-e)*i+e*t}function Ii(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class xt{constructor(t=0,e=0){xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,r,s,a,o,c,u){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,u)}set(t,e,n,r,s,a,o,c,u){const d=this.elements;return d[0]=t,d[1]=r,d[2]=o,d[3]=e,d[4]=s,d[5]=c,d[6]=n,d[7]=a,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],u=n[1],d=n[4],m=n[7],h=n[2],l=n[5],g=n[8],v=r[0],f=r[3],p=r[6],S=r[1],_=r[4],w=r[7],U=r[2],b=r[5],A=r[8];return s[0]=a*v+o*S+c*U,s[3]=a*f+o*_+c*b,s[6]=a*p+o*w+c*A,s[1]=u*v+d*S+m*U,s[4]=u*f+d*_+m*b,s[7]=u*p+d*w+m*A,s[2]=h*v+l*S+g*U,s[5]=h*f+l*_+g*b,s[8]=h*p+l*w+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],u=t[7],d=t[8];return e*a*d-e*o*u-n*s*d+n*o*c+r*s*u-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],u=t[7],d=t[8],m=d*a-o*u,h=o*c-d*s,l=u*s-a*c,g=e*m+n*h+r*l;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=m*v,t[1]=(r*u-d*n)*v,t[2]=(o*n-r*a)*v,t[3]=h*v,t[4]=(d*e-r*c)*v,t[5]=(r*s-o*e)*v,t[6]=l*v,t[7]=(n*c-u*e)*v,t[8]=(a*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(n*c,n*u,-n*(c*a+u*o)+a+t,-r*u,r*c,-r*(-u*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Zr.makeScale(t,e)),this}rotate(t){return this.premultiply(Zr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Zr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zr=new qt;function Mc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function au(){const i=Lr("canvas");return i.style.display="block",i}const Ka={};function Sc(i){i in Ka||(Ka[i]=!0,console.warn(i))}function ou(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Ja=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ja=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ji={[Un]:{transfer:Tr,primaries:Ar,toReference:i=>i,fromReference:i=>i},[Oe]:{transfer:de,primaries:Ar,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ur]:{transfer:Tr,primaries:Rr,toReference:i=>i.applyMatrix3(ja),fromReference:i=>i.applyMatrix3(Ja)},[Js]:{transfer:de,primaries:Rr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ja),fromReference:i=>i.applyMatrix3(Ja).convertLinearToSRGB()}},cu=new Set([Un,Ur]),oe={enabled:!0,_workingColorSpace:Un,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!cu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=ji[t].toReference,r=ji[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return ji[i].primaries},getTransfer:function(i){return i===Tn?Tr:ji[i].transfer}};function Mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Zn;class lu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zn===void 0&&(Zn=Lr("canvas")),Zn.width=t.width,Zn.height=t.height;const n=Zn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Zn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Lr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Mi(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mi(e[n]/255)*255):e[n]=Mi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let uu=0;class yc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=Wi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ts(r[a].image)):s.push(ts(r[a]))}else s=ts(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function ts(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hu=0;class Ie extends Ai{constructor(t=Ie.DEFAULT_IMAGE,e=Ie.DEFAULT_MAPPING,n=qn,r=qn,s=Je,a=Yn,o=rn,c=Ln,u=Ie.DEFAULT_ANISOTROPY,d=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=Wi(),this.name="",this.source=new yc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==hc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vi:t.x=t.x-Math.floor(t.x);break;case qn:t.x=t.x<0?0:1;break;case Hs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vi:t.y=t.y-Math.floor(t.y);break;case qn:t.y=t.y<0?0:1;break;case Hs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ie.DEFAULT_IMAGE=null;Ie.DEFAULT_MAPPING=hc;Ie.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,r=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,u=c[0],d=c[4],m=c[8],h=c[1],l=c[5],g=c[9],v=c[2],f=c[6],p=c[10];if(Math.abs(d-h)<.01&&Math.abs(m-v)<.01&&Math.abs(g-f)<.01){if(Math.abs(d+h)<.1&&Math.abs(m+v)<.1&&Math.abs(g+f)<.1&&Math.abs(u+l+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(u+1)/2,w=(l+1)/2,U=(p+1)/2,b=(d+h)/4,A=(m+v)/4,I=(g+f)/4;return _>w&&_>U?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=b/n,s=A/n):w>U?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=b/r,s=I/r):U<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),n=A/s,r=I/s),this.set(n,r,s,e),this}let S=Math.sqrt((f-g)*(f-g)+(m-v)*(m-v)+(h-d)*(h-d));return Math.abs(S)<.001&&(S=1),this.x=(f-g)/S,this.y=(m-v)/S,this.z=(h-d)/S,this.w=Math.acos((u+l+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class du extends Ai{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ie(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new yc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends du{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ec extends Ie{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=qe,this.minFilter=qe,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class fu extends Ie{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=qe,this.minFilter=qe,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ri{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],u=n[r+1],d=n[r+2],m=n[r+3];const h=s[a+0],l=s[a+1],g=s[a+2],v=s[a+3];if(o===0){t[e+0]=c,t[e+1]=u,t[e+2]=d,t[e+3]=m;return}if(o===1){t[e+0]=h,t[e+1]=l,t[e+2]=g,t[e+3]=v;return}if(m!==v||c!==h||u!==l||d!==g){let f=1-o;const p=c*h+u*l+d*g+m*v,S=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const U=Math.sqrt(_),b=Math.atan2(U,p*S);f=Math.sin(f*b)/U,o=Math.sin(o*b)/U}const w=o*S;if(c=c*f+h*w,u=u*f+l*w,d=d*f+g*w,m=m*f+v*w,f===1-o){const U=1/Math.sqrt(c*c+u*u+d*d+m*m);c*=U,u*=U,d*=U,m*=U}}t[e]=c,t[e+1]=u,t[e+2]=d,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],c=n[r+1],u=n[r+2],d=n[r+3],m=s[a],h=s[a+1],l=s[a+2],g=s[a+3];return t[e]=o*g+d*m+c*l-u*h,t[e+1]=c*g+d*h+u*m-o*l,t[e+2]=u*g+d*l+o*h-c*m,t[e+3]=d*g-o*m-c*h-u*l,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,u=o(n/2),d=o(r/2),m=o(s/2),h=c(n/2),l=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=h*d*m+u*l*g,this._y=u*l*m-h*d*g,this._z=u*d*g+h*l*m,this._w=u*d*m-h*l*g;break;case"YXZ":this._x=h*d*m+u*l*g,this._y=u*l*m-h*d*g,this._z=u*d*g-h*l*m,this._w=u*d*m+h*l*g;break;case"ZXY":this._x=h*d*m-u*l*g,this._y=u*l*m+h*d*g,this._z=u*d*g+h*l*m,this._w=u*d*m-h*l*g;break;case"ZYX":this._x=h*d*m-u*l*g,this._y=u*l*m+h*d*g,this._z=u*d*g-h*l*m,this._w=u*d*m+h*l*g;break;case"YZX":this._x=h*d*m+u*l*g,this._y=u*l*m+h*d*g,this._z=u*d*g-h*l*m,this._w=u*d*m-h*l*g;break;case"XZY":this._x=h*d*m-u*l*g,this._y=u*l*m-h*d*g,this._z=u*d*g+h*l*m,this._w=u*d*m+h*l*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],u=e[2],d=e[6],m=e[10],h=n+o+m;if(h>0){const l=.5/Math.sqrt(h+1);this._w=.25/l,this._x=(d-c)*l,this._y=(s-u)*l,this._z=(a-r)*l}else if(n>o&&n>m){const l=2*Math.sqrt(1+n-o-m);this._w=(d-c)/l,this._x=.25*l,this._y=(r+a)/l,this._z=(s+u)/l}else if(o>m){const l=2*Math.sqrt(1+o-n-m);this._w=(s-u)/l,this._x=(r+a)/l,this._y=.25*l,this._z=(c+d)/l}else{const l=2*Math.sqrt(1+m-n-o);this._w=(a-r)/l,this._x=(s+u)/l,this._y=(c+d)/l,this._z=.25*l}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,u=e._z,d=e._w;return this._x=n*d+a*o+r*u-s*c,this._y=r*d+a*c+s*o-n*u,this._z=s*d+a*u+n*c-r*o,this._w=a*d-n*o-r*c-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const l=1-e;return this._w=l*a+e*this._w,this._x=l*n+e*this._x,this._y=l*r+e*this._y,this._z=l*s+e*this._z,this.normalize(),this}const u=Math.sqrt(c),d=Math.atan2(u,o),m=Math.sin((1-e)*d)/u,h=Math.sin(e*d)/u;return this._w=a*m+this._w*h,this._x=n*m+this._x*h,this._y=r*m+this._y*h,this._z=s*m+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Za.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Za.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,u=2*(a*r-o*n),d=2*(o*e-s*r),m=2*(s*n-a*e);return this.x=e+c*u+a*m-o*d,this.y=n+c*d+o*u-s*m,this.z=r+c*m+s*d-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return es.copy(this).projectOnVector(t),this.sub(es)}reflect(t){return this.sub(es.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const es=new P,Za=new Ri;class Xi{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ye.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ye.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ye.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ye):Ye.fromBufferAttribute(s,a),Ye.applyMatrix4(t.matrixWorld),this.expandByPoint(Ye);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Zi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zi.copy(n.boundingBox)),Zi.applyMatrix4(t.matrixWorld),this.union(Zi)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ye),Ye.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ui),Qi.subVectors(this.max,Ui),Qn.subVectors(t.a,Ui),ti.subVectors(t.b,Ui),ei.subVectors(t.c,Ui),xn.subVectors(ti,Qn),Mn.subVectors(ei,ti),Fn.subVectors(Qn,ei);let e=[0,-xn.z,xn.y,0,-Mn.z,Mn.y,0,-Fn.z,Fn.y,xn.z,0,-xn.x,Mn.z,0,-Mn.x,Fn.z,0,-Fn.x,-xn.y,xn.x,0,-Mn.y,Mn.x,0,-Fn.y,Fn.x,0];return!ns(e,Qn,ti,ei,Qi)||(e=[1,0,0,0,1,0,0,0,1],!ns(e,Qn,ti,ei,Qi))?!1:(tr.crossVectors(xn,Mn),e=[tr.x,tr.y,tr.z],ns(e,Qn,ti,ei,Qi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ye).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ye).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ln=[new P,new P,new P,new P,new P,new P,new P,new P],Ye=new P,Zi=new Xi,Qn=new P,ti=new P,ei=new P,xn=new P,Mn=new P,Fn=new P,Ui=new P,Qi=new P,tr=new P,On=new P;function ns(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){On.fromArray(i,s);const o=r.x*Math.abs(On.x)+r.y*Math.abs(On.y)+r.z*Math.abs(On.z),c=t.dot(On),u=e.dot(On),d=n.dot(On);if(Math.max(-Math.max(c,u,d),Math.min(c,u,d))>o)return!1}return!0}const pu=new Xi,Ni=new P,is=new P;class Nr{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):pu.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ni.subVectors(t,this.center);const e=Ni.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Ni,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(is.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ni.copy(t.center).add(is)),this.expandByPoint(Ni.copy(t.center).sub(is))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new P,rs=new P,er=new P,Sn=new P,ss=new P,nr=new P,as=new P;class js{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(un.copy(this.origin).addScaledVector(this.direction,e),un.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){rs.copy(t).add(e).multiplyScalar(.5),er.copy(e).sub(t).normalize(),Sn.copy(this.origin).sub(rs);const s=t.distanceTo(e)*.5,a=-this.direction.dot(er),o=Sn.dot(this.direction),c=-Sn.dot(er),u=Sn.lengthSq(),d=Math.abs(1-a*a);let m,h,l,g;if(d>0)if(m=a*c-o,h=a*o-c,g=s*d,m>=0)if(h>=-g)if(h<=g){const v=1/d;m*=v,h*=v,l=m*(m+a*h+2*o)+h*(a*m+h+2*c)+u}else h=s,m=Math.max(0,-(a*h+o)),l=-m*m+h*(h+2*c)+u;else h=-s,m=Math.max(0,-(a*h+o)),l=-m*m+h*(h+2*c)+u;else h<=-g?(m=Math.max(0,-(-a*s+o)),h=m>0?-s:Math.min(Math.max(-s,-c),s),l=-m*m+h*(h+2*c)+u):h<=g?(m=0,h=Math.min(Math.max(-s,-c),s),l=h*(h+2*c)+u):(m=Math.max(0,-(a*s+o)),h=m>0?s:Math.min(Math.max(-s,-c),s),l=-m*m+h*(h+2*c)+u);else h=a>0?-s:s,m=Math.max(0,-(a*h+o)),l=-m*m+h*(h+2*c)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(rs).addScaledVector(er,h),l}intersectSphere(t,e){un.subVectors(t.center,this.origin);const n=un.dot(this.direction),r=un.dot(un)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c;const u=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,h=this.origin;return u>=0?(n=(t.min.x-h.x)*u,r=(t.max.x-h.x)*u):(n=(t.max.x-h.x)*u,r=(t.min.x-h.x)*u),d>=0?(s=(t.min.y-h.y)*d,a=(t.max.y-h.y)*d):(s=(t.max.y-h.y)*d,a=(t.min.y-h.y)*d),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),m>=0?(o=(t.min.z-h.z)*m,c=(t.max.z-h.z)*m):(o=(t.max.z-h.z)*m,c=(t.min.z-h.z)*m),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,un)!==null}intersectTriangle(t,e,n,r,s){ss.subVectors(e,t),nr.subVectors(n,t),as.crossVectors(ss,nr);let a=this.direction.dot(as),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Sn.subVectors(this.origin,t);const c=o*this.direction.dot(nr.crossVectors(Sn,nr));if(c<0)return null;const u=o*this.direction.dot(ss.cross(Sn));if(u<0||c+u>a)return null;const d=-o*Sn.dot(as);return d<0?null:this.at(d/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,n,r,s,a,o,c,u,d,m,h,l,g,v,f){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,u,d,m,h,l,g,v,f)}set(t,e,n,r,s,a,o,c,u,d,m,h,l,g,v,f){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=u,p[6]=d,p[10]=m,p[14]=h,p[3]=l,p[7]=g,p[11]=v,p[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/ni.setFromMatrixColumn(t,0).length(),s=1/ni.setFromMatrixColumn(t,1).length(),a=1/ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),u=Math.sin(r),d=Math.cos(s),m=Math.sin(s);if(t.order==="XYZ"){const h=a*d,l=a*m,g=o*d,v=o*m;e[0]=c*d,e[4]=-c*m,e[8]=u,e[1]=l+g*u,e[5]=h-v*u,e[9]=-o*c,e[2]=v-h*u,e[6]=g+l*u,e[10]=a*c}else if(t.order==="YXZ"){const h=c*d,l=c*m,g=u*d,v=u*m;e[0]=h+v*o,e[4]=g*o-l,e[8]=a*u,e[1]=a*m,e[5]=a*d,e[9]=-o,e[2]=l*o-g,e[6]=v+h*o,e[10]=a*c}else if(t.order==="ZXY"){const h=c*d,l=c*m,g=u*d,v=u*m;e[0]=h-v*o,e[4]=-a*m,e[8]=g+l*o,e[1]=l+g*o,e[5]=a*d,e[9]=v-h*o,e[2]=-a*u,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const h=a*d,l=a*m,g=o*d,v=o*m;e[0]=c*d,e[4]=g*u-l,e[8]=h*u+v,e[1]=c*m,e[5]=v*u+h,e[9]=l*u-g,e[2]=-u,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const h=a*c,l=a*u,g=o*c,v=o*u;e[0]=c*d,e[4]=v-h*m,e[8]=g*m+l,e[1]=m,e[5]=a*d,e[9]=-o*d,e[2]=-u*d,e[6]=l*m+g,e[10]=h-v*m}else if(t.order==="XZY"){const h=a*c,l=a*u,g=o*c,v=o*u;e[0]=c*d,e[4]=-m,e[8]=u*d,e[1]=h*m+v,e[5]=a*d,e[9]=l*m-g,e[2]=g*m-l,e[6]=o*d,e[10]=v*m+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mu,t,gu)}lookAt(t,e,n){const r=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),yn.crossVectors(n,He),yn.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),yn.crossVectors(n,He)),yn.normalize(),ir.crossVectors(He,yn),r[0]=yn.x,r[4]=ir.x,r[8]=He.x,r[1]=yn.y,r[5]=ir.y,r[9]=He.y,r[2]=yn.z,r[6]=ir.z,r[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],u=n[12],d=n[1],m=n[5],h=n[9],l=n[13],g=n[2],v=n[6],f=n[10],p=n[14],S=n[3],_=n[7],w=n[11],U=n[15],b=r[0],A=r[4],I=r[8],y=r[12],x=r[1],L=r[5],G=r[9],z=r[13],Z=r[2],Q=r[6],Y=r[10],tt=r[14],$=r[3],st=r[7],Mt=r[11],ut=r[15];return s[0]=a*b+o*x+c*Z+u*$,s[4]=a*A+o*L+c*Q+u*st,s[8]=a*I+o*G+c*Y+u*Mt,s[12]=a*y+o*z+c*tt+u*ut,s[1]=d*b+m*x+h*Z+l*$,s[5]=d*A+m*L+h*Q+l*st,s[9]=d*I+m*G+h*Y+l*Mt,s[13]=d*y+m*z+h*tt+l*ut,s[2]=g*b+v*x+f*Z+p*$,s[6]=g*A+v*L+f*Q+p*st,s[10]=g*I+v*G+f*Y+p*Mt,s[14]=g*y+v*z+f*tt+p*ut,s[3]=S*b+_*x+w*Z+U*$,s[7]=S*A+_*L+w*Q+U*st,s[11]=S*I+_*G+w*Y+U*Mt,s[15]=S*y+_*z+w*tt+U*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],u=t[13],d=t[2],m=t[6],h=t[10],l=t[14],g=t[3],v=t[7],f=t[11],p=t[15];return g*(+s*c*m-r*u*m-s*o*h+n*u*h+r*o*l-n*c*l)+v*(+e*c*l-e*u*h+s*a*h-r*a*l+r*u*d-s*c*d)+f*(+e*u*m-e*o*l-s*a*m+n*a*l+s*o*d-n*u*d)+p*(-r*o*d-e*c*m+e*o*h+r*a*m-n*a*h+n*c*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],u=t[7],d=t[8],m=t[9],h=t[10],l=t[11],g=t[12],v=t[13],f=t[14],p=t[15],S=m*f*u-v*h*u+v*c*l-o*f*l-m*c*p+o*h*p,_=g*h*u-d*f*u-g*c*l+a*f*l+d*c*p-a*h*p,w=d*v*u-g*m*u+g*o*l-a*v*l-d*o*p+a*m*p,U=g*m*c-d*v*c-g*o*h+a*v*h+d*o*f-a*m*f,b=e*S+n*_+r*w+s*U;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=S*A,t[1]=(v*h*s-m*f*s-v*r*l+n*f*l+m*r*p-n*h*p)*A,t[2]=(o*f*s-v*c*s+v*r*u-n*f*u-o*r*p+n*c*p)*A,t[3]=(m*c*s-o*h*s-m*r*u+n*h*u+o*r*l-n*c*l)*A,t[4]=_*A,t[5]=(d*f*s-g*h*s+g*r*l-e*f*l-d*r*p+e*h*p)*A,t[6]=(g*c*s-a*f*s-g*r*u+e*f*u+a*r*p-e*c*p)*A,t[7]=(a*h*s-d*c*s+d*r*u-e*h*u-a*r*l+e*c*l)*A,t[8]=w*A,t[9]=(g*m*s-d*v*s-g*n*l+e*v*l+d*n*p-e*m*p)*A,t[10]=(a*v*s-g*o*s+g*n*u-e*v*u-a*n*p+e*o*p)*A,t[11]=(d*o*s-a*m*s-d*n*u+e*m*u+a*n*l-e*o*l)*A,t[12]=U*A,t[13]=(d*v*r-g*m*r+g*n*h-e*v*h-d*n*f+e*m*f)*A,t[14]=(g*o*r-a*v*r-g*n*c+e*v*c+a*n*f-e*o*f)*A,t[15]=(a*m*r-d*o*r+d*n*c-e*m*c-a*n*h+e*o*h)*A,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,u=s*a,d=s*o;return this.set(u*a+n,u*o-r*c,u*c+r*o,0,u*o+r*c,d*o+n,d*c-r*a,0,u*c-r*o,d*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,u=s+s,d=a+a,m=o+o,h=s*u,l=s*d,g=s*m,v=a*d,f=a*m,p=o*m,S=c*u,_=c*d,w=c*m,U=n.x,b=n.y,A=n.z;return r[0]=(1-(v+p))*U,r[1]=(l+w)*U,r[2]=(g-_)*U,r[3]=0,r[4]=(l-w)*b,r[5]=(1-(h+p))*b,r[6]=(f+S)*b,r[7]=0,r[8]=(g+_)*A,r[9]=(f-S)*A,r[10]=(1-(h+v))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=ni.set(r[0],r[1],r[2]).length();const a=ni.set(r[4],r[5],r[6]).length(),o=ni.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],$e.copy(this);const u=1/s,d=1/a,m=1/o;return $e.elements[0]*=u,$e.elements[1]*=u,$e.elements[2]*=u,$e.elements[4]*=d,$e.elements[5]*=d,$e.elements[6]*=d,$e.elements[8]*=m,$e.elements[9]*=m,$e.elements[10]*=m,e.setFromRotationMatrix($e),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=_n){const c=this.elements,u=2*s/(e-t),d=2*s/(n-r),m=(e+t)/(e-t),h=(n+r)/(n-r);let l,g;if(o===_n)l=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Cr)l=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=m,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=l,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=_n){const c=this.elements,u=1/(e-t),d=1/(n-r),m=1/(a-s),h=(e+t)*u,l=(n+r)*d;let g,v;if(o===_n)g=(a+s)*m,v=-2*m;else if(o===Cr)g=s*m,v=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-l,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ni=new P,$e=new fe,mu=new P(0,0,0),gu=new P(1,1,1),yn=new P,ir=new P,He=new P,Qa=new fe,to=new Ri;class sn{constructor(t=0,e=0,n=0,r=sn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],d=r[9],m=r[2],h=r[6],l=r[10];switch(e){case"XYZ":this._y=Math.asin(Re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,l),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,l),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(Re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-m,l),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Re(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(h,l),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Re(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(o,l));break;case"XZY":this._z=Math.asin(-Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,l),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return to.setFromEuler(this),this.setFromQuaternion(to,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sn.DEFAULT_ORDER="XYZ";class Zs{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _u=0;const eo=new P,ii=new Ri,hn=new fe,rr=new P,Fi=new P,vu=new P,xu=new Ri,no=new P(1,0,0),io=new P(0,1,0),ro=new P(0,0,1),so={type:"added"},Mu={type:"removed"},ri={type:"childadded",child:null},os={type:"childremoved",child:null};class pe extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DEFAULT_UP.clone();const t=new P,e=new sn,n=new Ri,r=new P(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new fe},normalMatrix:{value:new qt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ii.setFromAxisAngle(t,e),this.quaternion.multiply(ii),this}rotateOnWorldAxis(t,e){return ii.setFromAxisAngle(t,e),this.quaternion.premultiply(ii),this}rotateX(t){return this.rotateOnAxis(no,t)}rotateY(t){return this.rotateOnAxis(io,t)}rotateZ(t){return this.rotateOnAxis(ro,t)}translateOnAxis(t,e){return eo.copy(t).applyQuaternion(this.quaternion),this.position.add(eo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(no,t)}translateY(t){return this.translateOnAxis(io,t)}translateZ(t){return this.translateOnAxis(ro,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?rr.copy(t):rr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Fi,rr,this.up):hn.lookAt(rr,Fi,this.up),this.quaternion.setFromRotationMatrix(hn),r&&(hn.extractRotation(r.matrixWorld),ii.setFromRotationMatrix(hn),this.quaternion.premultiply(ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(so),ri.child=t,this.dispatchEvent(ri),ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Mu),os.child=t,this.dispatchEvent(os),os.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(so),ri.child=t,this.dispatchEvent(ri),ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,t,vu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,xu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,d=c.length;u<d;u++){const m=c[u];s(t.shapes,m)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),u=a(t.textures),d=a(t.images),m=a(t.shapes),h=a(t.skeletons),l=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),m.length>0&&(n.shapes=m),h.length>0&&(n.skeletons=h),l.length>0&&(n.animations=l),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const c=[];for(const u in o){const d=o[u];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}pe.DEFAULT_UP=new P(0,1,0);pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ke=new P,dn=new P,cs=new P,fn=new P,si=new P,ai=new P,ao=new P,ls=new P,us=new P,hs=new P;class nn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Ke.subVectors(t,e),r.cross(Ke);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Ke.subVectors(r,e),dn.subVectors(n,e),cs.subVectors(t,e);const a=Ke.dot(Ke),o=Ke.dot(dn),c=Ke.dot(cs),u=dn.dot(dn),d=dn.dot(cs),m=a*u-o*o;if(m===0)return s.set(0,0,0),null;const h=1/m,l=(u*c-o*d)*h,g=(a*d-o*c)*h;return s.set(1-l-g,g,l)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,fn.x),c.addScaledVector(a,fn.y),c.addScaledVector(o,fn.z),c)}static isFrontFacing(t,e,n,r){return Ke.subVectors(n,e),dn.subVectors(t,e),Ke.cross(dn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Ke.cross(dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return nn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;si.subVectors(r,n),ai.subVectors(s,n),ls.subVectors(t,n);const c=si.dot(ls),u=ai.dot(ls);if(c<=0&&u<=0)return e.copy(n);us.subVectors(t,r);const d=si.dot(us),m=ai.dot(us);if(d>=0&&m<=d)return e.copy(r);const h=c*m-d*u;if(h<=0&&c>=0&&d<=0)return a=c/(c-d),e.copy(n).addScaledVector(si,a);hs.subVectors(t,s);const l=si.dot(hs),g=ai.dot(hs);if(g>=0&&l<=g)return e.copy(s);const v=l*u-c*g;if(v<=0&&u>=0&&g<=0)return o=u/(u-g),e.copy(n).addScaledVector(ai,o);const f=d*g-l*m;if(f<=0&&m-d>=0&&l-g>=0)return ao.subVectors(s,r),o=(m-d)/(m-d+(l-g)),e.copy(r).addScaledVector(ao,o);const p=1/(f+v+h);return a=v*p,o=h*p,e.copy(n).addScaledVector(si,a).addScaledVector(ai,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},sr={h:0,s:0,l:0};function ds(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Oe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=oe.workingColorSpace){if(t=su(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=ds(a,s,t+1/3),this.g=ds(a,s,t),this.b=ds(a,s,t-1/3)}return oe.toWorkingColorSpace(this,r),this}setStyle(t,e=Oe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Oe){const n=wc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}copyLinearToSRGB(t){return this.r=Qr(t.r),this.g=Qr(t.g),this.b=Qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Oe){return oe.fromWorkingColorSpace(Pe.copy(this),t),Math.round(Re(Pe.r*255,0,255))*65536+Math.round(Re(Pe.g*255,0,255))*256+Math.round(Re(Pe.b*255,0,255))}getHexString(t=Oe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Pe.copy(this),e);const n=Pe.r,r=Pe.g,s=Pe.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,u;const d=(o+a)/2;if(o===a)c=0,u=0;else{const m=a-o;switch(u=d<=.5?m/(a+o):m/(2-a-o),a){case n:c=(r-s)/m+(r<s?6:0);break;case r:c=(s-n)/m+2;break;case s:c=(n-r)/m+4;break}c/=6}return t.h=c,t.s=u,t.l=d,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=Oe){oe.fromWorkingColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,r=Pe.b;return t!==Oe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(En),this.setHSL(En.h+t,En.s+e,En.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(En),t.getHSL(sr);const n=jr(En.h,sr.h,e),r=jr(En.s,sr.s,e),s=jr(En.l,sr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new Qt;Qt.NAMES=wc;let Su=0;class Ci extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=vi,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Os,this.blendDst=Bs,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jn,this.stencilZFail=jn,this.stencilZPass=jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vi&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Os&&(n.blendSrc=this.blendSrc),this.blendDst!==Bs&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class mi extends Ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ee=new P,ar=new xt;class Ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ya,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Sc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ar.fromBufferAttribute(this,e),ar.applyMatrix3(t),this.setXY(e,ar.x,ar.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),r=Ne(r,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ya&&(t.usage=this.usage),t}}class bc extends Ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Tc extends Ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends Ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let yu=0;const Xe=new fe,fs=new pe,oi=new P,Ge=new Xi,Oi=new Xi,Ae=new P;class Ue extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mc(t)?Tc:bc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return fs.lookAt(t),fs.updateMatrix(),this.applyMatrix4(fs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oi).negate(),this.translate(oi.x,oi.y,oi.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new me(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ge.setFromBufferAttribute(s),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,Ge.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,Ge.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(Ge.min),this.boundingBox.expandByPoint(Ge.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Ge.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Oi.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(Ge.min,Oi.min),Ge.expandByPoint(Ae),Ae.addVectors(Ge.max,Oi.max),Ge.expandByPoint(Ae)):(Ge.expandByPoint(Oi.min),Ge.expandByPoint(Oi.max))}Ge.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Ae.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ae));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)Ae.fromBufferAttribute(o,u),c&&(oi.fromBufferAttribute(t,u),Ae.add(oi)),r=Math.max(r,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new P,c[I]=new P;const u=new P,d=new P,m=new P,h=new xt,l=new xt,g=new xt,v=new P,f=new P;function p(I,y,x){u.fromBufferAttribute(n,I),d.fromBufferAttribute(n,y),m.fromBufferAttribute(n,x),h.fromBufferAttribute(s,I),l.fromBufferAttribute(s,y),g.fromBufferAttribute(s,x),d.sub(u),m.sub(u),l.sub(h),g.sub(h);const L=1/(l.x*g.y-g.x*l.y);isFinite(L)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(m,-l.y).multiplyScalar(L),f.copy(m).multiplyScalar(l.x).addScaledVector(d,-g.x).multiplyScalar(L),o[I].add(v),o[y].add(v),o[x].add(v),c[I].add(f),c[y].add(f),c[x].add(f))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let I=0,y=S.length;I<y;++I){const x=S[I],L=x.start,G=x.count;for(let z=L,Z=L+G;z<Z;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const _=new P,w=new P,U=new P,b=new P;function A(I){U.fromBufferAttribute(r,I),b.copy(U);const y=o[I];_.copy(y),_.sub(U.multiplyScalar(U.dot(y))).normalize(),w.crossVectors(b,y);const L=w.dot(c[I])<0?-1:1;a.setXYZW(I,_.x,_.y,_.z,L)}for(let I=0,y=S.length;I<y;++I){const x=S[I],L=x.start,G=x.count;for(let z=L,Z=L+G;z<Z;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,l=n.count;h<l;h++)n.setXYZ(h,0,0,0);const r=new P,s=new P,a=new P,o=new P,c=new P,u=new P,d=new P,m=new P;if(t)for(let h=0,l=t.count;h<l;h+=3){const g=t.getX(h+0),v=t.getX(h+1),f=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),a.fromBufferAttribute(e,f),d.subVectors(a,s),m.subVectors(r,s),d.cross(m),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),u.fromBufferAttribute(n,f),o.add(d),c.add(d),u.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(f,u.x,u.y,u.z)}else for(let h=0,l=e.count;h<l;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),d.subVectors(a,s),m.subVectors(r,s),d.cross(m),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(o,c){const u=o.array,d=o.itemSize,m=o.normalized,h=new u.constructor(c.length*d);let l=0,g=0;for(let v=0,f=c.length;v<f;v++){o.isInterleavedBufferAttribute?l=c[v]*o.data.stride+o.offset:l=c[v]*d;for(let p=0;p<d;p++)h[g++]=u[l++]}return new Ze(h,d,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ue,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=t(c,n);e.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let d=0,m=u.length;d<m;d++){const h=u[d],l=t(h,n);c.push(l)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(t[u]=c[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const u=n[c];t.data.attributes[c]=u.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],d=[];for(let m=0,h=u.length;m<h;m++){const l=u[m];d.push(l.toJSON(t.data))}d.length>0&&(r[c]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(e))}const s=t.morphAttributes;for(const u in s){const d=[],m=s[u];for(let h=0,l=m.length;h<l;h++)d.push(m[h].clone(e));this.morphAttributes[u]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,d=a.length;u<d;u++){const m=a[u];this.addGroup(m.start,m.count,m.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oo=new fe,Bn=new js,or=new Nr,co=new P,ci=new P,li=new P,ui=new P,ps=new P,cr=new P,lr=new xt,ur=new xt,hr=new xt,lo=new P,uo=new P,ho=new P,dr=new P,fr=new P;class ue extends pe{constructor(t=new Ue,e=new mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){cr.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const d=o[c],m=s[c];d!==0&&(ps.fromBufferAttribute(m,t),a?cr.addScaledVector(ps,d):cr.addScaledVector(ps.sub(e),d))}e.add(cr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(s),Bn.copy(t.ray).recast(t.near),!(or.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(or,co)===null||Bn.origin.distanceToSquared(co)>(t.far-t.near)**2))&&(oo.copy(s).invert(),Bn.copy(t.ray).applyMatrix4(oo),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,m=s.attributes.normal,h=s.groups,l=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const f=h[g],p=a[f.materialIndex],S=Math.max(f.start,l.start),_=Math.min(o.count,Math.min(f.start+f.count,l.start+l.count));for(let w=S,U=_;w<U;w+=3){const b=o.getX(w),A=o.getX(w+1),I=o.getX(w+2);r=pr(this,p,t,n,u,d,m,b,A,I),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const g=Math.max(0,l.start),v=Math.min(o.count,l.start+l.count);for(let f=g,p=v;f<p;f+=3){const S=o.getX(f),_=o.getX(f+1),w=o.getX(f+2);r=pr(this,a,t,n,u,d,m,S,_,w),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const f=h[g],p=a[f.materialIndex],S=Math.max(f.start,l.start),_=Math.min(c.count,Math.min(f.start+f.count,l.start+l.count));for(let w=S,U=_;w<U;w+=3){const b=w,A=w+1,I=w+2;r=pr(this,p,t,n,u,d,m,b,A,I),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=f.materialIndex,e.push(r))}}else{const g=Math.max(0,l.start),v=Math.min(c.count,l.start+l.count);for(let f=g,p=v;f<p;f+=3){const S=f,_=f+1,w=f+2;r=pr(this,a,t,n,u,d,m,S,_,w),r&&(r.faceIndex=Math.floor(f/3),e.push(r))}}}}function Eu(i,t,e,n,r,s,a,o){let c;if(t.side===ze?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===Pn,o),c===null)return null;fr.copy(o),fr.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(fr);return u<e.near||u>e.far?null:{distance:u,point:fr.clone(),object:i}}function pr(i,t,e,n,r,s,a,o,c,u){i.getVertexPosition(o,ci),i.getVertexPosition(c,li),i.getVertexPosition(u,ui);const d=Eu(i,t,e,n,ci,li,ui,dr);if(d){r&&(lr.fromBufferAttribute(r,o),ur.fromBufferAttribute(r,c),hr.fromBufferAttribute(r,u),d.uv=nn.getInterpolation(dr,ci,li,ui,lr,ur,hr,new xt)),s&&(lr.fromBufferAttribute(s,o),ur.fromBufferAttribute(s,c),hr.fromBufferAttribute(s,u),d.uv1=nn.getInterpolation(dr,ci,li,ui,lr,ur,hr,new xt)),a&&(lo.fromBufferAttribute(a,o),uo.fromBufferAttribute(a,c),ho.fromBufferAttribute(a,u),d.normal=nn.getInterpolation(dr,ci,li,ui,lo,uo,ho,new P),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const m={a:o,b:c,c:u,normal:new P,materialIndex:0};nn.getNormal(ci,li,ui,m.normal),d.face=m}return d}class vt extends Ue{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],d=[],m=[];let h=0,l=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(m,2));function g(v,f,p,S,_,w,U,b,A,I,y){const x=w/A,L=U/I,G=w/2,z=U/2,Z=b/2,Q=A+1,Y=I+1;let tt=0,$=0;const st=new P;for(let Mt=0;Mt<Y;Mt++){const ut=Mt*L-z;for(let Ct=0;Ct<Q;Ct++){const zt=Ct*x-G;st[v]=zt*S,st[f]=ut*_,st[p]=Z,u.push(st.x,st.y,st.z),st[v]=0,st[f]=0,st[p]=b>0?1:-1,d.push(st.x,st.y,st.z),m.push(Ct/A),m.push(1-Mt/I),tt+=1}}for(let Mt=0;Mt<I;Mt++)for(let ut=0;ut<A;ut++){const Ct=h+ut+Q*Mt,zt=h+ut+Q*(Mt+1),J=h+(ut+1)+Q*(Mt+1),it=h+(ut+1)+Q*Mt;c.push(Ct,zt,it),c.push(zt,J,it),$+=6}o.addGroup(l,$,y),l+=$,h+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ti(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function De(i){const t={};for(let e=0;e<i.length;e++){const n=Ti(i[e]);for(const r in n)t[r]=n[r]}return t}function wu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ac(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const bu={clone:Ti,merge:De};var Tu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Au=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dn extends Ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tu,this.fragmentShader=Au,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ti(t.uniforms),this.uniformsGroups=wu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Rc extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=_n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wn=new P,fo=new xt,po=new xt;class Be extends Rc{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Pr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wn.x,wn.y).multiplyScalar(-t/wn.z),wn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wn.x,wn.y).multiplyScalar(-t/wn.z)}getViewSize(t,e){return this.getViewBounds(t,fo,po),e.subVectors(po,fo)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Jr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/u,r*=a.width/c,n*=a.height/u}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const hi=-90,di=1;class Ru extends pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Be(hi,di,t,e);r.layers=this.layers,this.add(r);const s=new Be(hi,di,t,e);s.layers=this.layers,this.add(s);const a=new Be(hi,di,t,e);a.layers=this.layers,this.add(a);const o=new Be(hi,di,t,e);o.layers=this.layers,this.add(o);const c=new Be(hi,di,t,e);c.layers=this.layers,this.add(c);const u=new Be(hi,di,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(const u of e)this.remove(u);if(t===_n)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,d]=this.children,m=t.getRenderTarget(),h=t.getActiveCubeFace(),l=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,u),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,r),t.render(e,d),t.setRenderTarget(m,h,l),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Cc extends Ie{constructor(t,e,n,r,s,a,o,c,u,d){t=t!==void 0?t:[],e=e!==void 0?e:Si,super(t,e,n,r,s,a,o,c,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Cu extends Jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Cc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new vt(5,5,5),s=new Dn({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:Rn});s.uniforms.tEquirect.value=e;const a=new ue(r,s),o=e.minFilter;return e.minFilter===Yn&&(e.minFilter=Je),new Ru(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}const ms=new P,Pu=new P,Lu=new qt;class Gn{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=ms.subVectors(n,e).cross(Pu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ms),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Lu.getNormalMatrix(t),r=this.coplanarPoint(ms).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zn=new Nr,mr=new P;class Qs{constructor(t=new Gn,e=new Gn,n=new Gn,r=new Gn,s=new Gn,a=new Gn){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=_n){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],c=r[3],u=r[4],d=r[5],m=r[6],h=r[7],l=r[8],g=r[9],v=r[10],f=r[11],p=r[12],S=r[13],_=r[14],w=r[15];if(n[0].setComponents(c-s,h-u,f-l,w-p).normalize(),n[1].setComponents(c+s,h+u,f+l,w+p).normalize(),n[2].setComponents(c+a,h+d,f+g,w+S).normalize(),n[3].setComponents(c-a,h-d,f-g,w-S).normalize(),n[4].setComponents(c-o,h-m,f-v,w-_).normalize(),e===_n)n[5].setComponents(c+o,h+m,f+v,w+_).normalize();else if(e===Cr)n[5].setComponents(o,m,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(t){return zn.center.set(0,0,0),zn.radius=.7071067811865476,zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(mr.x=r.normal.x>0?t.max.x:t.min.x,mr.y=r.normal.y>0?t.max.y:t.min.y,mr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(mr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pc(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Du(i){const t=new WeakMap;function e(o,c){const u=o.array,d=o.usage,m=u.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,u,d),o.onUploadCallback();let l;if(u instanceof Float32Array)l=i.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?l=i.HALF_FLOAT:l=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)l=i.SHORT;else if(u instanceof Uint32Array)l=i.UNSIGNED_INT;else if(u instanceof Int32Array)l=i.INT;else if(u instanceof Int8Array)l=i.BYTE;else if(u instanceof Uint8Array)l=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)l=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:l,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,c,u){const d=c.array,m=c._updateRange,h=c.updateRanges;if(i.bindBuffer(u,o),m.count===-1&&h.length===0&&i.bufferSubData(u,0,d),h.length!==0){for(let l=0,g=h.length;l<g;l++){const v=h[l];i.bufferSubData(u,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}c.clearUpdateRanges()}m.count!==-1&&(i.bufferSubData(u,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count),m.count=-1),c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isGLBufferAttribute){const d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const u=t.get(o);if(u===void 0)t.set(o,e(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}class $n extends Ue{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),u=o+1,d=c+1,m=t/o,h=e/c,l=[],g=[],v=[],f=[];for(let p=0;p<d;p++){const S=p*h-a;for(let _=0;_<u;_++){const w=_*m-s;g.push(w,-S,0),v.push(0,0,1),f.push(_/o),f.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<o;S++){const _=S+u*p,w=S+u*(p+1),U=S+1+u*(p+1),b=S+1+u*p;l.push(_,w,b),l.push(w,U,b)}this.setIndex(l),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(v,3)),this.setAttribute("uv",new me(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $n(t.width,t.height,t.widthSegments,t.heightSegments)}}var Iu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uu=`#ifdef USE_ALPHAHASH
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
#endif`,Nu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ou=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zu=`#ifdef USE_AOMAP
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
#endif`,ku=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hu=`#ifdef USE_BATCHING
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
#endif`,Gu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Vu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qu=`#ifdef USE_IRIDESCENCE
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
#endif`,Yu=`#ifdef USE_BUMPMAP
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
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,th=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nh=`#define PI 3.141592653589793
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
} // validated`,ih=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rh=`vec3 transformedNormal = objectNormal;
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
#endif`,sh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ah=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ch=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lh="gl_FragColor = linearToOutputTexel( gl_FragColor );",uh=`
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
}`,hh=`#ifdef USE_ENVMAP
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
#endif`,dh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fh=`#ifdef USE_ENVMAP
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
#endif`,ph=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mh=`#ifdef USE_ENVMAP
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
#endif`,gh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_h=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mh=`#ifdef USE_GRADIENTMAP
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
}`,Sh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wh=`uniform bool receiveShadow;
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
#endif`,bh=`#ifdef USE_ENVMAP
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
#endif`,Th=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ah=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ch=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ph=`PhysicalMaterial material;
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
#endif`,Lh=`struct PhysicalMaterial {
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
}`,Dh=`
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
#endif`,Ih=`#if defined( RE_IndirectDiffuse )
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
#endif`,Uh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Oh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gh=`#if defined( USE_POINTS_UV )
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
#endif`,Vh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$h=`#ifdef USE_MORPHTARGETS
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
#endif`,Kh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,td=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ed=`#ifdef USE_NORMALMAP
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
#endif`,nd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,id=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ad=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,od=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ld=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ud=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,md=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_d=`float getShadowMask() {
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
}`,vd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xd=`#ifdef USE_SKINNING
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
#endif`,Md=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sd=`#ifdef USE_SKINNING
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
#endif`,yd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ed=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Td=`#ifdef USE_TRANSMISSION
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
#endif`,Ad=`#ifdef USE_TRANSMISSION
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
#endif`,Rd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ld=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Id=`uniform sampler2D t2D;
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
}`,Ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Od=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bd=`#include <common>
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
}`,zd=`#if DEPTH_PACKING == 3200
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
}`,kd=`#define DISTANCE
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
}`,Hd=`#define DISTANCE
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
}`,Gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wd=`uniform float scale;
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
}`,Xd=`uniform vec3 diffuse;
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
}`,qd=`#include <common>
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
}`,Yd=`uniform vec3 diffuse;
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
}`,$d=`#define LAMBERT
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
}`,Kd=`#define LAMBERT
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
}`,Jd=`#define MATCAP
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
}`,jd=`#define MATCAP
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
}`,Zd=`#define NORMAL
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
}`,Qd=`#define NORMAL
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
}`,tf=`#define PHONG
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
}`,ef=`#define PHONG
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
}`,nf=`#define STANDARD
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
}`,rf=`#define STANDARD
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
}`,sf=`#define TOON
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
}`,af=`#define TOON
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
}`,of=`uniform float size;
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
}`,cf=`uniform vec3 diffuse;
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
}`,lf=`#include <common>
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
}`,uf=`uniform vec3 color;
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
}`,hf=`uniform float rotation;
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
}`,df=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:Iu,alphahash_pars_fragment:Uu,alphamap_fragment:Nu,alphamap_pars_fragment:Fu,alphatest_fragment:Ou,alphatest_pars_fragment:Bu,aomap_fragment:zu,aomap_pars_fragment:ku,batching_pars_vertex:Hu,batching_vertex:Gu,begin_vertex:Vu,beginnormal_vertex:Wu,bsdfs:Xu,iridescence_fragment:qu,bumpmap_pars_fragment:Yu,clipping_planes_fragment:$u,clipping_planes_pars_fragment:Ku,clipping_planes_pars_vertex:Ju,clipping_planes_vertex:ju,color_fragment:Zu,color_pars_fragment:Qu,color_pars_vertex:th,color_vertex:eh,common:nh,cube_uv_reflection_fragment:ih,defaultnormal_vertex:rh,displacementmap_pars_vertex:sh,displacementmap_vertex:ah,emissivemap_fragment:oh,emissivemap_pars_fragment:ch,colorspace_fragment:lh,colorspace_pars_fragment:uh,envmap_fragment:hh,envmap_common_pars_fragment:dh,envmap_pars_fragment:fh,envmap_pars_vertex:ph,envmap_physical_pars_fragment:bh,envmap_vertex:mh,fog_vertex:gh,fog_pars_vertex:_h,fog_fragment:vh,fog_pars_fragment:xh,gradientmap_pars_fragment:Mh,lightmap_pars_fragment:Sh,lights_lambert_fragment:yh,lights_lambert_pars_fragment:Eh,lights_pars_begin:wh,lights_toon_fragment:Th,lights_toon_pars_fragment:Ah,lights_phong_fragment:Rh,lights_phong_pars_fragment:Ch,lights_physical_fragment:Ph,lights_physical_pars_fragment:Lh,lights_fragment_begin:Dh,lights_fragment_maps:Ih,lights_fragment_end:Uh,logdepthbuf_fragment:Nh,logdepthbuf_pars_fragment:Fh,logdepthbuf_pars_vertex:Oh,logdepthbuf_vertex:Bh,map_fragment:zh,map_pars_fragment:kh,map_particle_fragment:Hh,map_particle_pars_fragment:Gh,metalnessmap_fragment:Vh,metalnessmap_pars_fragment:Wh,morphinstance_vertex:Xh,morphcolor_vertex:qh,morphnormal_vertex:Yh,morphtarget_pars_vertex:$h,morphtarget_vertex:Kh,normal_fragment_begin:Jh,normal_fragment_maps:jh,normal_pars_fragment:Zh,normal_pars_vertex:Qh,normal_vertex:td,normalmap_pars_fragment:ed,clearcoat_normal_fragment_begin:nd,clearcoat_normal_fragment_maps:id,clearcoat_pars_fragment:rd,iridescence_pars_fragment:sd,opaque_fragment:ad,packing:od,premultiplied_alpha_fragment:cd,project_vertex:ld,dithering_fragment:ud,dithering_pars_fragment:hd,roughnessmap_fragment:dd,roughnessmap_pars_fragment:fd,shadowmap_pars_fragment:pd,shadowmap_pars_vertex:md,shadowmap_vertex:gd,shadowmask_pars_fragment:_d,skinbase_vertex:vd,skinning_pars_vertex:xd,skinning_vertex:Md,skinnormal_vertex:Sd,specularmap_fragment:yd,specularmap_pars_fragment:Ed,tonemapping_fragment:wd,tonemapping_pars_fragment:bd,transmission_fragment:Td,transmission_pars_fragment:Ad,uv_pars_fragment:Rd,uv_pars_vertex:Cd,uv_vertex:Pd,worldpos_vertex:Ld,background_vert:Dd,background_frag:Id,backgroundCube_vert:Ud,backgroundCube_frag:Nd,cube_vert:Fd,cube_frag:Od,depth_vert:Bd,depth_frag:zd,distanceRGBA_vert:kd,distanceRGBA_frag:Hd,equirect_vert:Gd,equirect_frag:Vd,linedashed_vert:Wd,linedashed_frag:Xd,meshbasic_vert:qd,meshbasic_frag:Yd,meshlambert_vert:$d,meshlambert_frag:Kd,meshmatcap_vert:Jd,meshmatcap_frag:jd,meshnormal_vert:Zd,meshnormal_frag:Qd,meshphong_vert:tf,meshphong_frag:ef,meshphysical_vert:nf,meshphysical_frag:rf,meshtoon_vert:sf,meshtoon_frag:af,points_vert:of,points_frag:cf,shadow_vert:lf,shadow_frag:uf,sprite_vert:hf,sprite_frag:df},ft={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},tn={basic:{uniforms:De([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:De([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:De([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:De([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:De([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:De([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:De([ft.points,ft.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:De([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:De([ft.common,ft.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:De([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:De([ft.sprite,ft.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:De([ft.common,ft.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:De([ft.lights,ft.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};tn.physical={uniforms:De([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const gr={r:0,b:0,g:0},kn=new sn,ff=new fe;function pf(i,t,e,n,r,s,a){const o=new Qt(0);let c=s===!0?0:1,u,d,m=null,h=0,l=null;function g(S){let _=S.isScene===!0?S.background:null;return _&&_.isTexture&&(_=(S.backgroundBlurriness>0?e:t).get(_)),_}function v(S){let _=!1;const w=g(S);w===null?p(o,c):w&&w.isColor&&(p(w,1),_=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(S,_){const w=g(_);w&&(w.isCubeTexture||w.mapping===Dr)?(d===void 0&&(d=new ue(new vt(1,1,1),new Dn({name:"BackgroundCubeMaterial",uniforms:Ti(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(U,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),kn.copy(_.backgroundRotation),kn.x*=-1,kn.y*=-1,kn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),d.material.uniforms.envMap.value=w,d.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(ff.makeRotationFromEuler(kn)),d.material.toneMapped=oe.getTransfer(w.colorSpace)!==de,(m!==w||h!==w.version||l!==i.toneMapping)&&(d.material.needsUpdate=!0,m=w,h=w.version,l=i.toneMapping),d.layers.enableAll(),S.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(u===void 0&&(u=new ue(new $n(2,2),new Dn({name:"BackgroundMaterial",uniforms:Ti(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=w,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=oe.getTransfer(w.colorSpace)!==de,w.matrixAutoUpdate===!0&&w.updateMatrix(),u.material.uniforms.uvTransform.value.copy(w.matrix),(m!==w||h!==w.version||l!==i.toneMapping)&&(u.material.needsUpdate=!0,m=w,h=w.version,l=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null))}function p(S,_){S.getRGB(gr,Ac(i)),n.buffers.color.setClear(gr.r,gr.g,gr.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(S,_=1){o.set(S),c=_,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(o,c)},render:v,addToRenderList:f}}function mf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(x,L,G,z,Z){let Q=!1;const Y=m(z,G,L);s!==Y&&(s=Y,u(s.object)),Q=l(x,z,G,Z),Q&&g(x,z,G,Z),Z!==null&&t.update(Z,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,w(x,L,G,z),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function c(){return i.createVertexArray()}function u(x){return i.bindVertexArray(x)}function d(x){return i.deleteVertexArray(x)}function m(x,L,G){const z=G.wireframe===!0;let Z=n[x.id];Z===void 0&&(Z={},n[x.id]=Z);let Q=Z[L.id];Q===void 0&&(Q={},Z[L.id]=Q);let Y=Q[z];return Y===void 0&&(Y=h(c()),Q[z]=Y),Y}function h(x){const L=[],G=[],z=[];for(let Z=0;Z<e;Z++)L[Z]=0,G[Z]=0,z[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:G,attributeDivisors:z,object:x,attributes:{},index:null}}function l(x,L,G,z){const Z=s.attributes,Q=L.attributes;let Y=0;const tt=G.getAttributes();for(const $ in tt)if(tt[$].location>=0){const Mt=Z[$];let ut=Q[$];if(ut===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(ut=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(ut=x.instanceColor)),Mt===void 0||Mt.attribute!==ut||ut&&Mt.data!==ut.data)return!0;Y++}return s.attributesNum!==Y||s.index!==z}function g(x,L,G,z){const Z={},Q=L.attributes;let Y=0;const tt=G.getAttributes();for(const $ in tt)if(tt[$].location>=0){let Mt=Q[$];Mt===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(Mt=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(Mt=x.instanceColor));const ut={};ut.attribute=Mt,Mt&&Mt.data&&(ut.data=Mt.data),Z[$]=ut,Y++}s.attributes=Z,s.attributesNum=Y,s.index=z}function v(){const x=s.newAttributes;for(let L=0,G=x.length;L<G;L++)x[L]=0}function f(x){p(x,0)}function p(x,L){const G=s.newAttributes,z=s.enabledAttributes,Z=s.attributeDivisors;G[x]=1,z[x]===0&&(i.enableVertexAttribArray(x),z[x]=1),Z[x]!==L&&(i.vertexAttribDivisor(x,L),Z[x]=L)}function S(){const x=s.newAttributes,L=s.enabledAttributes;for(let G=0,z=L.length;G<z;G++)L[G]!==x[G]&&(i.disableVertexAttribArray(G),L[G]=0)}function _(x,L,G,z,Z,Q,Y){Y===!0?i.vertexAttribIPointer(x,L,G,Z,Q):i.vertexAttribPointer(x,L,G,z,Z,Q)}function w(x,L,G,z){v();const Z=z.attributes,Q=G.getAttributes(),Y=L.defaultAttributeValues;for(const tt in Q){const $=Q[tt];if($.location>=0){let st=Z[tt];if(st===void 0&&(tt==="instanceMatrix"&&x.instanceMatrix&&(st=x.instanceMatrix),tt==="instanceColor"&&x.instanceColor&&(st=x.instanceColor)),st!==void 0){const Mt=st.normalized,ut=st.itemSize,Ct=t.get(st);if(Ct===void 0)continue;const zt=Ct.buffer,J=Ct.type,it=Ct.bytesPerElement,O=J===i.INT||J===i.UNSIGNED_INT||st.gpuType===dc;if(st.isInterleavedBufferAttribute){const V=st.data,ot=V.stride,pt=st.offset;if(V.isInstancedInterleavedBuffer){for(let bt=0;bt<$.locationSize;bt++)p($.location+bt,V.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let bt=0;bt<$.locationSize;bt++)f($.location+bt);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let bt=0;bt<$.locationSize;bt++)_($.location+bt,ut/$.locationSize,J,Mt,ot*it,(pt+ut/$.locationSize*bt)*it,O)}else{if(st.isInstancedBufferAttribute){for(let V=0;V<$.locationSize;V++)p($.location+V,st.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let V=0;V<$.locationSize;V++)f($.location+V);i.bindBuffer(i.ARRAY_BUFFER,zt);for(let V=0;V<$.locationSize;V++)_($.location+V,ut/$.locationSize,J,Mt,ut*it,ut/$.locationSize*V*it,O)}}else if(Y!==void 0){const Mt=Y[tt];if(Mt!==void 0)switch(Mt.length){case 2:i.vertexAttrib2fv($.location,Mt);break;case 3:i.vertexAttrib3fv($.location,Mt);break;case 4:i.vertexAttrib4fv($.location,Mt);break;default:i.vertexAttrib1fv($.location,Mt)}}}}S()}function U(){I();for(const x in n){const L=n[x];for(const G in L){const z=L[G];for(const Z in z)d(z[Z].object),delete z[Z];delete L[G]}delete n[x]}}function b(x){if(n[x.id]===void 0)return;const L=n[x.id];for(const G in L){const z=L[G];for(const Z in z)d(z[Z].object),delete z[Z];delete L[G]}delete n[x.id]}function A(x){for(const L in n){const G=n[L];if(G[x.id]===void 0)continue;const z=G[x.id];for(const Z in z)d(z[Z].object),delete z[Z];delete G[x.id]}}function I(){y(),a=!0,s!==r&&(s=r,u(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:y,dispose:U,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:f,disableUnusedAttributes:S}}function gf(i,t,e){let n;function r(u){n=u}function s(u,d){i.drawArrays(n,u,d),e.update(d,n,1)}function a(u,d,m){m!==0&&(i.drawArraysInstanced(n,u,d,m),e.update(d,n,m))}function o(u,d,m){if(m===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let l=0;l<m;l++)this.render(u[l],d[l]);else{h.multiDrawArraysWEBGL(n,u,0,d,0,m);let l=0;for(let g=0;g<m;g++)l+=d[g];e.update(l,n,1)}}function c(u,d,m,h){if(m===0)return;const l=t.get("WEBGL_multi_draw");if(l===null)for(let g=0;g<u.length;g++)a(u[g],d[g],h[g]);else{l.multiDrawArraysInstancedWEBGL(n,u,0,d,0,h,0,m);let g=0;for(let v=0;v<m;v++)g+=d[v];for(let v=0;v<h.length;v++)e.update(g,n,h[v])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function _f(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==rn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const A=b===Ir&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Ln&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==An&&!A)}function c(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const d=c(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const m=e.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),l=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=l>0,U=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:m,maxTextures:h,maxVertexTextures:l,maxTextureSize:g,maxCubemapSize:v,maxAttributes:f,maxVertexUniforms:p,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:w,maxSamples:U}}function vf(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new Gn,o=new qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,h){const l=m.length!==0||h||n!==0||r;return r=h,n=m.length,l},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,h){e=d(m,h,0)},this.setState=function(m,h,l){const g=m.clippingPlanes,v=m.clipIntersection,f=m.clipShadows,p=i.get(m);if(!r||g===null||g.length===0||s&&!f)s?d(null):u();else{const S=s?0:n,_=S*4;let w=p.clippingState||null;c.value=w,w=d(g,h,_,l);for(let U=0;U!==_;++U)w[U]=e[U];p.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function u(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(m,h,l,g){const v=m!==null?m.length:0;let f=null;if(v!==0){if(f=c.value,g!==!0||f===null){const p=l+v*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(f===null||f.length<p)&&(f=new Float32Array(p));for(let _=0,w=l;_!==v;++_,w+=4)a.copy(m[_]).applyMatrix4(S,o),a.normal.toArray(f,w),f[w+3]=a.constant}c.value=f,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,f}}function xf(i){let t=new WeakMap;function e(a,o){return o===zs?a.mapping=Si:o===ks&&(a.mapping=yi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===zs||o===ks)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new Cu(c.height);return u.fromEquirectangularTexture(i,a),t.set(a,u),a.addEventListener("dispose",r),e(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Lc extends Rc{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const gi=4,mo=[.125,.215,.35,.446,.526,.582],Xn=20,gs=new Lc,go=new Qt;let _s=null,vs=0,xs=0,Ms=!1;const Vn=(1+Math.sqrt(5))/2,fi=1/Vn,_o=[new P(-Vn,fi,0),new P(Vn,fi,0),new P(-fi,0,Vn),new P(fi,0,Vn),new P(0,Vn,-fi),new P(0,Vn,fi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class vo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){_s=this._renderer.getRenderTarget(),vs=this._renderer.getActiveCubeFace(),xs=this._renderer.getActiveMipmapLevel(),Ms=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=So(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_s,vs,xs),this._renderer.xr.enabled=Ms,t.scissorTest=!1,_r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Si||t.mapping===yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_s=this._renderer.getRenderTarget(),vs=this._renderer.getActiveCubeFace(),xs=this._renderer.getActiveMipmapLevel(),Ms=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:Ir,format:rn,colorSpace:Un,depthBuffer:!1},r=xo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xo(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mf(s)),this._blurMaterial=Sf(s,t,e)}return r}_compileMaterial(t){const e=new ue(this._lodPlanes[0],t);this._renderer.compile(e,gs)}_sceneToCubeUV(t,e,n,r){const o=new Be(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,m=d.autoClear,h=d.toneMapping;d.getClearColor(go),d.toneMapping=Cn,d.autoClear=!1;const l=new mi({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),g=new ue(new vt,l);let v=!1;const f=t.background;f?f.isColor&&(l.color.copy(f),t.background=null,v=!0):(l.color.copy(go),v=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,c[p],0),o.lookAt(u[p],0,0)):S===1?(o.up.set(0,0,c[p]),o.lookAt(0,u[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,u[p]));const _=this._cubeSize;_r(r,S*_,p>2?_:0,_,_),d.setRenderTarget(r),v&&d.render(g,o),d.render(t,o)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=m,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Si||t.mapping===yi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=So()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ue(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;_r(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,gs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=_o[(r-s-1)%_o.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,m=new ue(this._lodPlanes[r],u),h=u.uniforms,l=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*l):2*Math.PI/(2*Xn-1),v=s/g,f=isFinite(s)?1+Math.floor(d*v):Xn;f>Xn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Xn}`);const p=[];let S=0;for(let A=0;A<Xn;++A){const I=A/v,y=Math.exp(-I*I/2);p.push(y),A===0?S+=y:A<f&&(S+=2*y)}for(let A=0;A<p.length;A++)p[A]=p[A]/S;h.envMap.value=t.texture,h.samples.value=f,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-n;const w=this._sizeLods[r],U=3*w*(r>_-gi?r-_+gi:0),b=4*(this._cubeSize-w);_r(e,U,b,3*w,2*w),c.setRenderTarget(e),c.render(m,gs)}}function Mf(i){const t=[],e=[],n=[];let r=i;const s=i-gi+1+mo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-gi?c=mo[a-i+gi-1]:a===0&&(c=0),n.push(c);const u=1/(o-2),d=-u,m=1+u,h=[d,d,m,d,m,m,d,d,m,m,d,m],l=6,g=6,v=3,f=2,p=1,S=new Float32Array(v*g*l),_=new Float32Array(f*g*l),w=new Float32Array(p*g*l);for(let b=0;b<l;b++){const A=b%3*2/3-1,I=b>2?0:-1,y=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];S.set(y,v*g*b),_.set(h,f*g*b);const x=[b,b,b,b,b,b];w.set(x,p*g*b)}const U=new Ue;U.setAttribute("position",new Ze(S,v)),U.setAttribute("uv",new Ze(_,f)),U.setAttribute("faceIndex",new Ze(w,p)),t.push(U),r>gi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xo(i,t,e){const n=new Jn(i,t,e);return n.texture.mapping=Dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _r(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Sf(i,t,e){const n=new Float32Array(Xn),r=new P(0,1,0);return new Dn({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ta(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Mo(){return new Dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ta(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function So(){return new Dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function ta(){return`

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
	`}function yf(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,u=c===zs||c===ks,d=c===Si||c===yi;if(u||d){let m=t.get(o);const h=m!==void 0?m.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return e===null&&(e=new vo(i)),m=u?e.fromEquirectangular(o,m):e.fromCubemap(o,m),m.texture.pmremVersion=o.pmremVersion,t.set(o,m),m.texture;if(m!==void 0)return m.texture;{const l=o.image;return u&&l&&l.height>0||d&&l&&r(l)?(e===null&&(e=new vo(i)),m=u?e.fromEquirectangular(o):e.fromCubemap(o),m.texture.pmremVersion=o.pmremVersion,t.set(o,m),o.addEventListener("dispose",s),m.texture):null}}}return o}function r(o){let c=0;const u=6;for(let d=0;d<u;d++)o[d]!==void 0&&c++;return c===u}function s(o){const c=o.target;c.removeEventListener("dispose",s);const u=t.get(c);u!==void 0&&(t.delete(c),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ef(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Sc("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function wf(i,t,e,n){const r={},s=new WeakMap;function a(m){const h=m.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let f=0,p=v.length;f<p;f++)t.remove(v[f])}h.removeEventListener("dispose",a),delete r[h.id];const l=s.get(h);l&&(t.remove(l),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(m,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,e.memory.geometries++),h}function c(m){const h=m.attributes;for(const g in h)t.update(h[g],i.ARRAY_BUFFER);const l=m.morphAttributes;for(const g in l){const v=l[g];for(let f=0,p=v.length;f<p;f++)t.update(v[f],i.ARRAY_BUFFER)}}function u(m){const h=[],l=m.index,g=m.attributes.position;let v=0;if(l!==null){const S=l.array;v=l.version;for(let _=0,w=S.length;_<w;_+=3){const U=S[_+0],b=S[_+1],A=S[_+2];h.push(U,b,b,A,A,U)}}else if(g!==void 0){const S=g.array;v=g.version;for(let _=0,w=S.length/3-1;_<w;_+=3){const U=_+0,b=_+1,A=_+2;h.push(U,b,b,A,A,U)}}else return;const f=new(Mc(h)?Tc:bc)(h,1);f.version=v;const p=s.get(m);p&&t.remove(p),s.set(m,f)}function d(m){const h=s.get(m);if(h){const l=m.index;l!==null&&h.version<l.version&&u(m)}else u(m);return s.get(m)}return{get:o,update:c,getWireframeAttribute:d}}function bf(i,t,e){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,l){i.drawElements(n,l,s,h*a),e.update(l,n,1)}function u(h,l,g){g!==0&&(i.drawElementsInstanced(n,l,s,h*a,g),e.update(l,n,g))}function d(h,l,g){if(g===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let f=0;f<g;f++)this.render(h[f]/a,l[f]);else{v.multiDrawElementsWEBGL(n,l,0,s,h,0,g);let f=0;for(let p=0;p<g;p++)f+=l[p];e.update(f,n,1)}}function m(h,l,g,v){if(g===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<h.length;p++)u(h[p]/a,l[p],v[p]);else{f.multiDrawElementsInstancedWEBGL(n,l,0,s,h,0,v,0,g);let p=0;for(let S=0;S<g;S++)p+=l[S];for(let S=0;S<v.length;S++)e.update(p,n,v[S])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function Tf(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Af(i,t,e){const n=new WeakMap,r=new _e;function s(a,o,c){const u=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=d!==void 0?d.length:0;let h=n.get(o);if(h===void 0||h.count!==m){let x=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var l=x;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,f=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let w=0;g===!0&&(w=1),v===!0&&(w=2),f===!0&&(w=3);let U=o.attributes.position.count*w,b=1;U>t.maxTextureSize&&(b=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const A=new Float32Array(U*b*4*m),I=new Ec(A,U,b,m);I.type=An,I.needsUpdate=!0;const y=w*4;for(let L=0;L<m;L++){const G=p[L],z=S[L],Z=_[L],Q=U*b*4*L;for(let Y=0;Y<G.count;Y++){const tt=Y*y;g===!0&&(r.fromBufferAttribute(G,Y),A[Q+tt+0]=r.x,A[Q+tt+1]=r.y,A[Q+tt+2]=r.z,A[Q+tt+3]=0),v===!0&&(r.fromBufferAttribute(z,Y),A[Q+tt+4]=r.x,A[Q+tt+5]=r.y,A[Q+tt+6]=r.z,A[Q+tt+7]=0),f===!0&&(r.fromBufferAttribute(Z,Y),A[Q+tt+8]=r.x,A[Q+tt+9]=r.y,A[Q+tt+10]=r.z,A[Q+tt+11]=Z.itemSize===4?r.w:1)}}h={count:m,texture:I,size:new xt(U,b)},n.set(o,h),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let f=0;f<u.length;f++)g+=u[f];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",u)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Rf(i,t,e,n){let r=new WeakMap;function s(c){const u=n.render.frame,d=c.geometry,m=t.get(c,d);if(r.get(m)!==u&&(t.update(m),r.set(m,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return m}function a(){r=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:a}}class Dc extends Ie{constructor(t,e,n,r,s,a,o,c,u,d=xi){if(d!==xi&&d!==bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===xi&&(n=Ei),n===void 0&&d===bi&&(n=wi),super(null,r,s,a,o,c,d,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:qe,this.minFilter=c!==void 0?c:qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ic=new Ie,Uc=new Dc(1,1);Uc.compareFunction=xc;const Nc=new Ec,Fc=new fu,Oc=new Cc,yo=[],Eo=[],wo=new Float32Array(16),bo=new Float32Array(9),To=new Float32Array(4);function Pi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=yo[r];if(s===void 0&&(s=new Float32Array(r),yo[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function we(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Fr(i,t){let e=Eo[t];e===void 0&&(e=new Int32Array(t),Eo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Cf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Pf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2fv(this.addr,t),be(e,t)}}function Lf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;i.uniform3fv(this.addr,t),be(e,t)}}function Df(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4fv(this.addr,t),be(e,t)}}function If(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(we(e,n))return;To.set(n),i.uniformMatrix2fv(this.addr,!1,To),be(e,n)}}function Uf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(we(e,n))return;bo.set(n),i.uniformMatrix3fv(this.addr,!1,bo),be(e,n)}}function Nf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(we(e,n))return;wo.set(n),i.uniformMatrix4fv(this.addr,!1,wo),be(e,n)}}function Ff(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Of(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2iv(this.addr,t),be(e,t)}}function Bf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3iv(this.addr,t),be(e,t)}}function zf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4iv(this.addr,t),be(e,t)}}function kf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Hf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2uiv(this.addr,t),be(e,t)}}function Gf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3uiv(this.addr,t),be(e,t)}}function Vf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4uiv(this.addr,t),be(e,t)}}function Wf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Uc:Ic;e.setTexture2D(t||s,r)}function Xf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Fc,r)}function qf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Oc,r)}function Yf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Nc,r)}function $f(i){switch(i){case 5126:return Cf;case 35664:return Pf;case 35665:return Lf;case 35666:return Df;case 35674:return If;case 35675:return Uf;case 35676:return Nf;case 5124:case 35670:return Ff;case 35667:case 35671:return Of;case 35668:case 35672:return Bf;case 35669:case 35673:return zf;case 5125:return kf;case 36294:return Hf;case 36295:return Gf;case 36296:return Vf;case 35678:case 36198:case 36298:case 36306:case 35682:return Wf;case 35679:case 36299:case 36307:return Xf;case 35680:case 36300:case 36308:case 36293:return qf;case 36289:case 36303:case 36311:case 36292:return Yf}}function Kf(i,t){i.uniform1fv(this.addr,t)}function Jf(i,t){const e=Pi(t,this.size,2);i.uniform2fv(this.addr,e)}function jf(i,t){const e=Pi(t,this.size,3);i.uniform3fv(this.addr,e)}function Zf(i,t){const e=Pi(t,this.size,4);i.uniform4fv(this.addr,e)}function Qf(i,t){const e=Pi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function tp(i,t){const e=Pi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ep(i,t){const e=Pi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function np(i,t){i.uniform1iv(this.addr,t)}function ip(i,t){i.uniform2iv(this.addr,t)}function rp(i,t){i.uniform3iv(this.addr,t)}function sp(i,t){i.uniform4iv(this.addr,t)}function ap(i,t){i.uniform1uiv(this.addr,t)}function op(i,t){i.uniform2uiv(this.addr,t)}function cp(i,t){i.uniform3uiv(this.addr,t)}function lp(i,t){i.uniform4uiv(this.addr,t)}function up(i,t,e){const n=this.cache,r=t.length,s=Fr(e,r);we(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Ic,s[a])}function hp(i,t,e){const n=this.cache,r=t.length,s=Fr(e,r);we(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Fc,s[a])}function dp(i,t,e){const n=this.cache,r=t.length,s=Fr(e,r);we(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Oc,s[a])}function fp(i,t,e){const n=this.cache,r=t.length,s=Fr(e,r);we(n,s)||(i.uniform1iv(this.addr,s),be(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Nc,s[a])}function pp(i){switch(i){case 5126:return Kf;case 35664:return Jf;case 35665:return jf;case 35666:return Zf;case 35674:return Qf;case 35675:return tp;case 35676:return ep;case 5124:case 35670:return np;case 35667:case 35671:return ip;case 35668:case 35672:return rp;case 35669:case 35673:return sp;case 5125:return ap;case 36294:return op;case 36295:return cp;case 36296:return lp;case 35678:case 36198:case 36298:case 36306:case 35682:return up;case 35679:case 36299:case 36307:return hp;case 35680:case 36300:case 36308:case 36293:return dp;case 36289:case 36303:case 36311:case 36292:return fp}}class mp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=$f(e.type)}}class gp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pp(e.type)}}class _p{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Ss=/(\w+)(\])?(\[|\.)?/g;function Ao(i,t){i.seq.push(t),i.map[t.id]=t}function vp(i,t,e){const n=i.name,r=n.length;for(Ss.lastIndex=0;;){const s=Ss.exec(n),a=Ss.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){Ao(e,u===void 0?new mp(o,i,t):new gp(o,i,t));break}else{let m=e.map[o];m===void 0&&(m=new _p(o),Ao(e,m)),e=m}}}class Er{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);vp(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Ro(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const xp=37297;let Mp=0;function Sp(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function yp(i){const t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(i);let n;switch(t===e?n="":t===Rr&&e===Ar?n="LinearDisplayP3ToLinearSRGB":t===Ar&&e===Rr&&(n="LinearSRGBToLinearDisplayP3"),i){case Un:case Ur:return[n,"LinearTransferOETF"];case Oe:case Js:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Co(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Sp(i.getShaderSource(t),a)}else return r}function Ep(i,t){const e=yp(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function wp(i,t){let e;switch(t){case Dl:e="Linear";break;case Il:e="Reinhard";break;case Ul:e="OptimizedCineon";break;case uc:e="ACESFilmic";break;case Fl:e="AgX";break;case Ol:e="Neutral";break;case Nl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function bp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zi).join(`
`)}function Tp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ap(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function zi(i){return i!==""}function Po(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Rp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gs(i){return i.replace(Rp,Pp)}const Cp=new Map;function Pp(i,t){let e=Xt[t];if(e===void 0){const n=Cp.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Gs(e)}const Lp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Do(i){return i.replace(Lp,Dp)}function Dp(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Io(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ip(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===oc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===cc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pn&&(t="SHADOWMAP_TYPE_VSM"),t}function Up(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Si:case yi:t="ENVMAP_TYPE_CUBE";break;case Dr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Np(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case yi:t="ENVMAP_MODE_REFRACTION";break}return t}function Fp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lc:t="ENVMAP_BLENDING_MULTIPLY";break;case Pl:t="ENVMAP_BLENDING_MIX";break;case Ll:t="ENVMAP_BLENDING_ADD";break}return t}function Op(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Bp(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Ip(e),u=Up(e),d=Np(e),m=Fp(e),h=Op(e),l=bp(e),g=Tp(s),v=r.createProgram();let f,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zi).join(`
`),f.length>0&&(f+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zi).join(`
`),p.length>0&&(p+=`
`)):(f=[Io(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zi).join(`
`),p=[Io(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",e.envMap?"#define "+m:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Cn?wp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Ep("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zi).join(`
`)),a=Gs(a),a=Po(a,e),a=Lo(a,e),o=Gs(o),o=Po(o,e),o=Lo(o,e),a=Do(a),o=Do(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,f=[l,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,p=["#define varying in",e.glslVersion===$a?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$a?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=S+f+a,w=S+p+o,U=Ro(r,r.VERTEX_SHADER,_),b=Ro(r,r.FRAGMENT_SHADER,w);r.attachShader(v,U),r.attachShader(v,b),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(L){if(i.debug.checkShaderErrors){const G=r.getProgramInfoLog(v).trim(),z=r.getShaderInfoLog(U).trim(),Z=r.getShaderInfoLog(b).trim();let Q=!0,Y=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,U,b);else{const tt=Co(r,U,"vertex"),$=Co(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+tt+`
`+$)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||Z==="")&&(Y=!1);Y&&(L.diagnostics={runnable:Q,programLog:G,vertexShader:{log:z,prefix:f},fragmentShader:{log:Z,prefix:p}})}r.deleteShader(U),r.deleteShader(b),I=new Er(r,v),y=Ap(r,v)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(v,xp)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Mp++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=b,this}let zp=0;class kp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Hp(t),e.set(t,n)),n}}class Hp{constructor(t){this.id=zp++,this.code=t,this.usedTimes=0}}function Gp(i,t,e,n,r,s,a){const o=new Zs,c=new kp,u=new Set,d=[],m=r.logarithmicDepthBuffer,h=r.vertexTextures;let l=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return u.add(y),y===0?"uv":`uv${y}`}function f(y,x,L,G,z){const Z=G.fog,Q=z.geometry,Y=y.isMeshStandardMaterial?G.environment:null,tt=(y.isMeshStandardMaterial?e:t).get(y.envMap||Y),$=tt&&tt.mapping===Dr?tt.image.height:null,st=g[y.type];y.precision!==null&&(l=r.getMaxPrecision(y.precision),l!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",l,"instead."));const Mt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ut=Mt!==void 0?Mt.length:0;let Ct=0;Q.morphAttributes.position!==void 0&&(Ct=1),Q.morphAttributes.normal!==void 0&&(Ct=2),Q.morphAttributes.color!==void 0&&(Ct=3);let zt,J,it,O;if(st){const Et=tn[st];zt=Et.vertexShader,J=Et.fragmentShader}else zt=y.vertexShader,J=y.fragmentShader,c.update(y),it=c.getVertexShaderID(y),O=c.getFragmentShaderID(y);const V=i.getRenderTarget(),ot=z.isInstancedMesh===!0,pt=z.isBatchedMesh===!0,bt=!!y.map,C=!!y.matcap,It=!!tt,Tt=!!y.aoMap,jt=!!y.lightMap,Pt=!!y.bumpMap,Zt=!!y.normalMap,Yt=!!y.displacementMap,Wt=!!y.emissiveMap,xe=!!y.metalnessMap,R=!!y.roughnessMap,M=y.anisotropy>0,W=y.clearcoat>0,et=y.dispersion>0,rt=y.iridescence>0,q=y.sheen>0,Rt=y.transmission>0,dt=M&&!!y.anisotropyMap,ct=W&&!!y.clearcoatMap,Vt=W&&!!y.clearcoatNormalMap,at=W&&!!y.clearcoatRoughnessMap,yt=rt&&!!y.iridescenceMap,Kt=rt&&!!y.iridescenceThicknessMap,Nt=q&&!!y.sheenColorMap,mt=q&&!!y.sheenRoughnessMap,kt=!!y.specularMap,Jt=!!y.specularColorMap,ge=!!y.specularIntensityMap,N=Rt&&!!y.transmissionMap,gt=Rt&&!!y.thicknessMap,j=!!y.gradientMap,T=!!y.alphaMap,D=y.alphaTest>0,k=!!y.alphaHash,nt=!!y.extensions;let K=Cn;y.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(K=i.toneMapping);const ht={shaderID:st,shaderType:y.type,shaderName:y.name,vertexShader:zt,fragmentShader:J,defines:y.defines,customVertexShaderID:it,customFragmentShaderID:O,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:l,batching:pt,batchingColor:pt&&z._colorsTexture!==null,instancing:ot,instancingColor:ot&&z.instanceColor!==null,instancingMorph:ot&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:V===null?i.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Un,alphaToCoverage:!!y.alphaToCoverage,map:bt,matcap:C,envMap:It,envMapMode:It&&tt.mapping,envMapCubeUVHeight:$,aoMap:Tt,lightMap:jt,bumpMap:Pt,normalMap:Zt,displacementMap:h&&Yt,emissiveMap:Wt,normalMapObjectSpace:Zt&&y.normalMapType===jl,normalMapTangentSpace:Zt&&y.normalMapType===vc,metalnessMap:xe,roughnessMap:R,anisotropy:M,anisotropyMap:dt,clearcoat:W,clearcoatMap:ct,clearcoatNormalMap:Vt,clearcoatRoughnessMap:at,dispersion:et,iridescence:rt,iridescenceMap:yt,iridescenceThicknessMap:Kt,sheen:q,sheenColorMap:Nt,sheenRoughnessMap:mt,specularMap:kt,specularColorMap:Jt,specularIntensityMap:ge,transmission:Rt,transmissionMap:N,thicknessMap:gt,gradientMap:j,opaque:y.transparent===!1&&y.blending===vi&&y.alphaToCoverage===!1,alphaMap:T,alphaTest:D,alphaHash:k,combine:y.combine,mapUv:bt&&v(y.map.channel),aoMapUv:Tt&&v(y.aoMap.channel),lightMapUv:jt&&v(y.lightMap.channel),bumpMapUv:Pt&&v(y.bumpMap.channel),normalMapUv:Zt&&v(y.normalMap.channel),displacementMapUv:Yt&&v(y.displacementMap.channel),emissiveMapUv:Wt&&v(y.emissiveMap.channel),metalnessMapUv:xe&&v(y.metalnessMap.channel),roughnessMapUv:R&&v(y.roughnessMap.channel),anisotropyMapUv:dt&&v(y.anisotropyMap.channel),clearcoatMapUv:ct&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:mt&&v(y.sheenRoughnessMap.channel),specularMapUv:kt&&v(y.specularMap.channel),specularColorMapUv:Jt&&v(y.specularColorMap.channel),specularIntensityMapUv:ge&&v(y.specularIntensityMap.channel),transmissionMapUv:N&&v(y.transmissionMap.channel),thicknessMapUv:gt&&v(y.thicknessMap.channel),alphaMapUv:T&&v(y.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Zt||M),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Q.attributes.uv&&(bt||T),fog:!!Z,useFog:y.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:z.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:Ct,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:K,decodeVideoTexture:bt&&y.map.isVideoTexture===!0&&oe.getTransfer(y.map.colorSpace)===de,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===en,flipSided:y.side===ze,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:nt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:nt&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ht.vertexUv1s=u.has(1),ht.vertexUv2s=u.has(2),ht.vertexUv3s=u.has(3),u.clear(),ht}function p(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)x.push(L),x.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(S(x,y),_(x,y),x.push(i.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function S(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function _(y,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.doubleSided&&o.enable(10),x.flipSided&&o.enable(11),x.useDepthPacking&&o.enable(12),x.dithering&&o.enable(13),x.transmission&&o.enable(14),x.sheen&&o.enable(15),x.opaque&&o.enable(16),x.pointsUvs&&o.enable(17),x.decodeVideoTexture&&o.enable(18),x.alphaToCoverage&&o.enable(19),y.push(o.mask)}function w(y){const x=g[y.type];let L;if(x){const G=tn[x];L=bu.clone(G.uniforms)}else L=y.uniforms;return L}function U(y,x){let L;for(let G=0,z=d.length;G<z;G++){const Z=d[G];if(Z.cacheKey===x){L=Z,++L.usedTimes;break}}return L===void 0&&(L=new Bp(i,x,y,s),d.push(L)),L}function b(y){if(--y.usedTimes===0){const x=d.indexOf(y);d[x]=d[d.length-1],d.pop(),y.destroy()}}function A(y){c.remove(y)}function I(){c.dispose()}return{getParameters:f,getProgramCacheKey:p,getUniforms:w,acquireProgram:U,releaseProgram:b,releaseShaderCache:A,programs:d,dispose:I}}function Vp(){let i=new WeakMap;function t(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function e(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function Wp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Uo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function No(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(m,h,l,g,v,f){let p=i[t];return p===void 0?(p={id:m.id,object:m,geometry:h,material:l,groupOrder:g,renderOrder:m.renderOrder,z:v,group:f},i[t]=p):(p.id=m.id,p.object=m,p.geometry=h,p.material=l,p.groupOrder=g,p.renderOrder=m.renderOrder,p.z=v,p.group=f),t++,p}function o(m,h,l,g,v,f){const p=a(m,h,l,g,v,f);l.transmission>0?n.push(p):l.transparent===!0?r.push(p):e.push(p)}function c(m,h,l,g,v,f){const p=a(m,h,l,g,v,f);l.transmission>0?n.unshift(p):l.transparent===!0?r.unshift(p):e.unshift(p)}function u(m,h){e.length>1&&e.sort(m||Wp),n.length>1&&n.sort(h||Uo),r.length>1&&r.sort(h||Uo)}function d(){for(let m=t,h=i.length;m<h;m++){const l=i[m];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:d,sort:u}}function Xp(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new No,i.set(n,[a])):r>=s.length?(a=new No,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function qp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Qt};break;case"SpotLight":e={position:new P,direction:new P,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function Yp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let $p=0;function Kp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Jp(i){const t=new qp,e=Yp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new P);const r=new P,s=new fe,a=new fe;function o(u){let d=0,m=0,h=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let l=0,g=0,v=0,f=0,p=0,S=0,_=0,w=0,U=0,b=0,A=0;u.sort(Kp);for(let y=0,x=u.length;y<x;y++){const L=u[y],G=L.color,z=L.intensity,Z=L.distance,Q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=G.r*z,m+=G.g*z,h+=G.b*z;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(L.sh.coefficients[Y],z);A++}else if(L.isDirectionalLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const tt=L.shadow,$=e.get(L);$.shadowBias=tt.bias,$.shadowNormalBias=tt.normalBias,$.shadowRadius=tt.radius,$.shadowMapSize=tt.mapSize,n.directionalShadow[l]=$,n.directionalShadowMap[l]=Q,n.directionalShadowMatrix[l]=L.shadow.matrix,S++}n.directional[l]=Y,l++}else if(L.isSpotLight){const Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(G).multiplyScalar(z),Y.distance=Z,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,n.spot[v]=Y;const tt=L.shadow;if(L.map&&(n.spotLightMap[U]=L.map,U++,tt.updateMatrices(L),L.castShadow&&b++),n.spotLightMatrix[v]=tt.matrix,L.castShadow){const $=e.get(L);$.shadowBias=tt.bias,$.shadowNormalBias=tt.normalBias,$.shadowRadius=tt.radius,$.shadowMapSize=tt.mapSize,n.spotShadow[v]=$,n.spotShadowMap[v]=Q,w++}v++}else if(L.isRectAreaLight){const Y=t.get(L);Y.color.copy(G).multiplyScalar(z),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),n.rectArea[f]=Y,f++}else if(L.isPointLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const tt=L.shadow,$=e.get(L);$.shadowBias=tt.bias,$.shadowNormalBias=tt.normalBias,$.shadowRadius=tt.radius,$.shadowMapSize=tt.mapSize,$.shadowCameraNear=tt.camera.near,$.shadowCameraFar=tt.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=L.shadow.matrix,_++}n.point[g]=Y,g++}else if(L.isHemisphereLight){const Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(z),Y.groundColor.copy(L.groundColor).multiplyScalar(z),n.hemi[p]=Y,p++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ft.LTC_FLOAT_1,n.rectAreaLTC2=ft.LTC_FLOAT_2):(n.rectAreaLTC1=ft.LTC_HALF_1,n.rectAreaLTC2=ft.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=h;const I=n.hash;(I.directionalLength!==l||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==f||I.hemiLength!==p||I.numDirectionalShadows!==S||I.numPointShadows!==_||I.numSpotShadows!==w||I.numSpotMaps!==U||I.numLightProbes!==A)&&(n.directional.length=l,n.spot.length=v,n.rectArea.length=f,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=w+U-b,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=A,I.directionalLength=l,I.pointLength=g,I.spotLength=v,I.rectAreaLength=f,I.hemiLength=p,I.numDirectionalShadows=S,I.numPointShadows=_,I.numSpotShadows=w,I.numSpotMaps=U,I.numLightProbes=A,n.version=$p++)}function c(u,d){let m=0,h=0,l=0,g=0,v=0;const f=d.matrixWorldInverse;for(let p=0,S=u.length;p<S;p++){const _=u[p];if(_.isDirectionalLight){const w=n.directional[m];w.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(f),m++}else if(_.isSpotLight){const w=n.spot[l];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(f),l++}else if(_.isRectAreaLight){const w=n.rectArea[g];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(f),a.identity(),s.copy(_.matrixWorld),s.premultiply(f),a.extractRotation(s),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const w=n.point[h];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(f),h++}else if(_.isHemisphereLight){const w=n.hemi[v];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(f),v++}}}return{setup:o,setupView:c,state:n}}function Fo(i){const t=new Jp(i),e=[],n=[];function r(d){u.camera=d,e.length=0,n.length=0}function s(d){e.push(d)}function a(d){n.push(d)}function o(){t.setup(e)}function c(d){t.setupView(e,d)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function jp(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Fo(i),t.set(r,[o])):s>=a.length?(o=new Fo(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Zp extends Ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Qp extends Ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const tm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,em=`uniform sampler2D shadow_pass;
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
}`;function nm(i,t,e){let n=new Qs;const r=new xt,s=new xt,a=new _e,o=new Zp({depthPacking:Jl}),c=new Qp,u={},d=e.maxTextureSize,m={[Pn]:ze,[ze]:Pn,[en]:en},h=new Dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:tm,fragmentShader:em}),l=h.clone();l.defines.HORIZONTAL_PASS=1;const g=new Ue;g.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ue(g,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oc;let p=this.type;this.render=function(b,A,I){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;const y=i.getRenderTarget(),x=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Rn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const z=p!==pn&&this.type===pn,Z=p===pn&&this.type!==pn;for(let Q=0,Y=b.length;Q<Y;Q++){const tt=b[Q],$=tt.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const st=$.getFrameExtents();if(r.multiply(st),s.copy($.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/st.x),r.x=s.x*st.x,$.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/st.y),r.y=s.y*st.y,$.mapSize.y=s.y)),$.map===null||z===!0||Z===!0){const ut=this.type!==pn?{minFilter:qe,magFilter:qe}:{};$.map!==null&&$.map.dispose(),$.map=new Jn(r.x,r.y,ut),$.map.texture.name=tt.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const Mt=$.getViewportCount();for(let ut=0;ut<Mt;ut++){const Ct=$.getViewport(ut);a.set(s.x*Ct.x,s.y*Ct.y,s.x*Ct.z,s.y*Ct.w),G.viewport(a),$.updateMatrices(tt,ut),n=$.getFrustum(),w(A,I,$.camera,tt,this.type)}$.isPointLightShadow!==!0&&this.type===pn&&S($,I),$.needsUpdate=!1}p=this.type,f.needsUpdate=!1,i.setRenderTarget(y,x,L)};function S(b,A){const I=t.update(v);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,l.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,l.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Jn(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(A,null,I,h,v,null),l.uniforms.shadow_pass.value=b.mapPass.texture,l.uniforms.resolution.value=b.mapSize,l.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(A,null,I,l,v,null)}function _(b,A,I,y){let x=null;const L=I.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)x=L;else if(x=I.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=x.uuid,z=A.uuid;let Z=u[G];Z===void 0&&(Z={},u[G]=Z);let Q=Z[z];Q===void 0&&(Q=x.clone(),Z[z]=Q,A.addEventListener("dispose",U)),x=Q}if(x.visible=A.visible,x.wireframe=A.wireframe,y===pn?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:m[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const G=i.properties.get(x);G.light=I}return x}function w(b,A,I,y,x){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===pn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,b.matrixWorld);const z=t.update(b),Z=b.material;if(Array.isArray(Z)){const Q=z.groups;for(let Y=0,tt=Q.length;Y<tt;Y++){const $=Q[Y],st=Z[$.materialIndex];if(st&&st.visible){const Mt=_(b,st,y,x);b.onBeforeShadow(i,b,A,I,z,Mt,$),i.renderBufferDirect(I,null,z,Mt,b,$),b.onAfterShadow(i,b,A,I,z,Mt,$)}}}else if(Z.visible){const Q=_(b,Z,y,x);b.onBeforeShadow(i,b,A,I,z,Q,null),i.renderBufferDirect(I,null,z,Q,b,null),b.onAfterShadow(i,b,A,I,z,Q,null)}}const G=b.children;for(let z=0,Z=G.length;z<Z;z++)w(G[z],A,I,y,x)}function U(b){b.target.removeEventListener("dispose",U);for(const I in u){const y=u[I],x=b.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}function im(i){function t(){let N=!1;const gt=new _e;let j=null;const T=new _e(0,0,0,0);return{setMask:function(D){j!==D&&!N&&(i.colorMask(D,D,D,D),j=D)},setLocked:function(D){N=D},setClear:function(D,k,nt,K,ht){ht===!0&&(D*=K,k*=K,nt*=K),gt.set(D,k,nt,K),T.equals(gt)===!1&&(i.clearColor(D,k,nt,K),T.copy(gt))},reset:function(){N=!1,j=null,T.set(-1,0,0,0)}}}function e(){let N=!1,gt=null,j=null,T=null;return{setTest:function(D){D?O(i.DEPTH_TEST):V(i.DEPTH_TEST)},setMask:function(D){gt!==D&&!N&&(i.depthMask(D),gt=D)},setFunc:function(D){if(j!==D){switch(D){case El:i.depthFunc(i.NEVER);break;case wl:i.depthFunc(i.ALWAYS);break;case bl:i.depthFunc(i.LESS);break;case wr:i.depthFunc(i.LEQUAL);break;case Tl:i.depthFunc(i.EQUAL);break;case Al:i.depthFunc(i.GEQUAL);break;case Rl:i.depthFunc(i.GREATER);break;case Cl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=D}},setLocked:function(D){N=D},setClear:function(D){T!==D&&(i.clearDepth(D),T=D)},reset:function(){N=!1,gt=null,j=null,T=null}}}function n(){let N=!1,gt=null,j=null,T=null,D=null,k=null,nt=null,K=null,ht=null;return{setTest:function(Et){N||(Et?O(i.STENCIL_TEST):V(i.STENCIL_TEST))},setMask:function(Et){gt!==Et&&!N&&(i.stencilMask(Et),gt=Et)},setFunc:function(Et,ne,ee){(j!==Et||T!==ne||D!==ee)&&(i.stencilFunc(Et,ne,ee),j=Et,T=ne,D=ee)},setOp:function(Et,ne,ee){(k!==Et||nt!==ne||K!==ee)&&(i.stencilOp(Et,ne,ee),k=Et,nt=ne,K=ee)},setLocked:function(Et){N=Et},setClear:function(Et){ht!==Et&&(i.clearStencil(Et),ht=Et)},reset:function(){N=!1,gt=null,j=null,T=null,D=null,k=null,nt=null,K=null,ht=null}}}const r=new t,s=new e,a=new n,o=new WeakMap,c=new WeakMap;let u={},d={},m=new WeakMap,h=[],l=null,g=!1,v=null,f=null,p=null,S=null,_=null,w=null,U=null,b=new Qt(0,0,0),A=0,I=!1,y=null,x=null,L=null,G=null,z=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,Y=0;const tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(tt)[1]),Q=Y>=1):tt.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),Q=Y>=2);let $=null,st={};const Mt=i.getParameter(i.SCISSOR_BOX),ut=i.getParameter(i.VIEWPORT),Ct=new _e().fromArray(Mt),zt=new _e().fromArray(ut);function J(N,gt,j,T){const D=new Uint8Array(4),k=i.createTexture();i.bindTexture(N,k),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let nt=0;nt<j;nt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(gt,0,i.RGBA,1,1,T,0,i.RGBA,i.UNSIGNED_BYTE,D):i.texImage2D(gt+nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,D);return k}const it={};it[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),it[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),it[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),O(i.DEPTH_TEST),s.setFunc(wr),Pt(!1),Zt(ga),O(i.CULL_FACE),Tt(Rn);function O(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function V(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function ot(N,gt){return d[N]!==gt?(i.bindFramebuffer(N,gt),d[N]=gt,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=gt),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=gt),!0):!1}function pt(N,gt){let j=h,T=!1;if(N){j=m.get(gt),j===void 0&&(j=[],m.set(gt,j));const D=N.textures;if(j.length!==D.length||j[0]!==i.COLOR_ATTACHMENT0){for(let k=0,nt=D.length;k<nt;k++)j[k]=i.COLOR_ATTACHMENT0+k;j.length=D.length,T=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,T=!0);T&&i.drawBuffers(j)}function bt(N){return l!==N?(i.useProgram(N),l=N,!0):!1}const C={[Wn]:i.FUNC_ADD,[al]:i.FUNC_SUBTRACT,[ol]:i.FUNC_REVERSE_SUBTRACT};C[cl]=i.MIN,C[ll]=i.MAX;const It={[ul]:i.ZERO,[hl]:i.ONE,[dl]:i.SRC_COLOR,[Os]:i.SRC_ALPHA,[vl]:i.SRC_ALPHA_SATURATE,[gl]:i.DST_COLOR,[pl]:i.DST_ALPHA,[fl]:i.ONE_MINUS_SRC_COLOR,[Bs]:i.ONE_MINUS_SRC_ALPHA,[_l]:i.ONE_MINUS_DST_COLOR,[ml]:i.ONE_MINUS_DST_ALPHA,[xl]:i.CONSTANT_COLOR,[Ml]:i.ONE_MINUS_CONSTANT_COLOR,[Sl]:i.CONSTANT_ALPHA,[yl]:i.ONE_MINUS_CONSTANT_ALPHA};function Tt(N,gt,j,T,D,k,nt,K,ht,Et){if(N===Rn){g===!0&&(V(i.BLEND),g=!1);return}if(g===!1&&(O(i.BLEND),g=!0),N!==sl){if(N!==v||Et!==I){if((f!==Wn||_!==Wn)&&(i.blendEquation(i.FUNC_ADD),f=Wn,_=Wn),Et)switch(N){case vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _a:i.blendFunc(i.ONE,i.ONE);break;case va:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _a:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case va:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}p=null,S=null,w=null,U=null,b.set(0,0,0),A=0,v=N,I=Et}return}D=D||gt,k=k||j,nt=nt||T,(gt!==f||D!==_)&&(i.blendEquationSeparate(C[gt],C[D]),f=gt,_=D),(j!==p||T!==S||k!==w||nt!==U)&&(i.blendFuncSeparate(It[j],It[T],It[k],It[nt]),p=j,S=T,w=k,U=nt),(K.equals(b)===!1||ht!==A)&&(i.blendColor(K.r,K.g,K.b,ht),b.copy(K),A=ht),v=N,I=!1}function jt(N,gt){N.side===en?V(i.CULL_FACE):O(i.CULL_FACE);let j=N.side===ze;gt&&(j=!j),Pt(j),N.blending===vi&&N.transparent===!1?Tt(Rn):Tt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const T=N.stencilWrite;a.setTest(T),T&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Wt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?O(i.SAMPLE_ALPHA_TO_COVERAGE):V(i.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(N){y!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),y=N)}function Zt(N){N!==il?(O(i.CULL_FACE),N!==x&&(N===ga?i.cullFace(i.BACK):N===rl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):V(i.CULL_FACE),x=N}function Yt(N){N!==L&&(Q&&i.lineWidth(N),L=N)}function Wt(N,gt,j){N?(O(i.POLYGON_OFFSET_FILL),(G!==gt||z!==j)&&(i.polygonOffset(gt,j),G=gt,z=j)):V(i.POLYGON_OFFSET_FILL)}function xe(N){N?O(i.SCISSOR_TEST):V(i.SCISSOR_TEST)}function R(N){N===void 0&&(N=i.TEXTURE0+Z-1),$!==N&&(i.activeTexture(N),$=N)}function M(N,gt,j){j===void 0&&($===null?j=i.TEXTURE0+Z-1:j=$);let T=st[j];T===void 0&&(T={type:void 0,texture:void 0},st[j]=T),(T.type!==N||T.texture!==gt)&&($!==j&&(i.activeTexture(j),$=j),i.bindTexture(N,gt||it[N]),T.type=N,T.texture=gt)}function W(){const N=st[$];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function et(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ct(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Vt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Kt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Nt(N){Ct.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Ct.copy(N))}function mt(N){zt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),zt.copy(N))}function kt(N,gt){let j=c.get(gt);j===void 0&&(j=new WeakMap,c.set(gt,j));let T=j.get(N);T===void 0&&(T=i.getUniformBlockIndex(gt,N.name),j.set(N,T))}function Jt(N,gt){const T=c.get(gt).get(N);o.get(gt)!==T&&(i.uniformBlockBinding(gt,T,N.__bindingPointIndex),o.set(gt,T))}function ge(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},$=null,st={},d={},m=new WeakMap,h=[],l=null,g=!1,v=null,f=null,p=null,S=null,_=null,w=null,U=null,b=new Qt(0,0,0),A=0,I=!1,y=null,x=null,L=null,G=null,z=null,Ct.set(0,0,i.canvas.width,i.canvas.height),zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:O,disable:V,bindFramebuffer:ot,drawBuffers:pt,useProgram:bt,setBlending:Tt,setMaterial:jt,setFlipSided:Pt,setCullFace:Zt,setLineWidth:Yt,setPolygonOffset:Wt,setScissorTest:xe,activeTexture:R,bindTexture:M,unbindTexture:W,compressedTexImage2D:et,compressedTexImage3D:rt,texImage2D:yt,texImage3D:Kt,updateUBOMapping:kt,uniformBlockBinding:Jt,texStorage2D:Vt,texStorage3D:at,texSubImage2D:q,texSubImage3D:Rt,compressedTexSubImage2D:dt,compressedTexSubImage3D:ct,scissor:Nt,viewport:mt,reset:ge}}function rm(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new xt,d=new WeakMap;let m;const h=new WeakMap;let l=!1;try{l=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return l?new OffscreenCanvas(R,M):Lr("canvas")}function v(R,M,W){let et=1;const rt=xe(R);if((rt.width>W||rt.height>W)&&(et=W/Math.max(rt.width,rt.height)),et<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const q=Math.floor(et*rt.width),Rt=Math.floor(et*rt.height);m===void 0&&(m=g(q,Rt));const dt=M?g(q,Rt):m;return dt.width=q,dt.height=Rt,dt.getContext("2d").drawImage(R,0,0,q,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+q+"x"+Rt+")."),dt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),R;return R}function f(R){return R.generateMipmaps&&R.minFilter!==qe&&R.minFilter!==Je}function p(R){i.generateMipmap(R)}function S(R,M,W,et,rt=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let q=M;if(M===i.RED&&(W===i.FLOAT&&(q=i.R32F),W===i.HALF_FLOAT&&(q=i.R16F),W===i.UNSIGNED_BYTE&&(q=i.R8)),M===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(q=i.R8UI),W===i.UNSIGNED_SHORT&&(q=i.R16UI),W===i.UNSIGNED_INT&&(q=i.R32UI),W===i.BYTE&&(q=i.R8I),W===i.SHORT&&(q=i.R16I),W===i.INT&&(q=i.R32I)),M===i.RG&&(W===i.FLOAT&&(q=i.RG32F),W===i.HALF_FLOAT&&(q=i.RG16F),W===i.UNSIGNED_BYTE&&(q=i.RG8)),M===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(q=i.RG8UI),W===i.UNSIGNED_SHORT&&(q=i.RG16UI),W===i.UNSIGNED_INT&&(q=i.RG32UI),W===i.BYTE&&(q=i.RG8I),W===i.SHORT&&(q=i.RG16I),W===i.INT&&(q=i.RG32I)),M===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),M===i.RGBA){const Rt=rt?Tr:oe.getTransfer(et);W===i.FLOAT&&(q=i.RGBA32F),W===i.HALF_FLOAT&&(q=i.RGBA16F),W===i.UNSIGNED_BYTE&&(q=Rt===de?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function _(R,M){let W;return R?M===null||M===Ei||M===wi?W=i.DEPTH24_STENCIL8:M===An?W=i.DEPTH32F_STENCIL8:M===br&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ei||M===wi?W=i.DEPTH_COMPONENT24:M===An?W=i.DEPTH_COMPONENT32F:M===br&&(W=i.DEPTH_COMPONENT16),W}function w(R,M){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==qe&&R.minFilter!==Je?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function U(R){const M=R.target;M.removeEventListener("dispose",U),A(M),M.isVideoTexture&&d.delete(M)}function b(R){const M=R.target;M.removeEventListener("dispose",b),y(M)}function A(R){const M=n.get(R);if(M.__webglInit===void 0)return;const W=R.source,et=h.get(W);if(et){const rt=et[M.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&I(R),Object.keys(et).length===0&&h.delete(W)}n.remove(R)}function I(R){const M=n.get(R);i.deleteTexture(M.__webglTexture);const W=R.source,et=h.get(W);delete et[M.__cacheKey],a.memory.textures--}function y(R){const M=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(M.__webglFramebuffer[et]))for(let rt=0;rt<M.__webglFramebuffer[et].length;rt++)i.deleteFramebuffer(M.__webglFramebuffer[et][rt]);else i.deleteFramebuffer(M.__webglFramebuffer[et]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[et])}else{if(Array.isArray(M.__webglFramebuffer))for(let et=0;et<M.__webglFramebuffer.length;et++)i.deleteFramebuffer(M.__webglFramebuffer[et]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let et=0;et<M.__webglColorRenderbuffer.length;et++)M.__webglColorRenderbuffer[et]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[et]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=R.textures;for(let et=0,rt=W.length;et<rt;et++){const q=n.get(W[et]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(W[et])}n.remove(R)}let x=0;function L(){x=0}function G(){const R=x;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),x+=1,R}function z(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function Z(R,M){const W=n.get(R);if(R.isVideoTexture&&Yt(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){const et=R.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{zt(W,R,M);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+M)}function Q(R,M){const W=n.get(R);if(R.version>0&&W.__version!==R.version){zt(W,R,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+M)}function Y(R,M){const W=n.get(R);if(R.version>0&&W.__version!==R.version){zt(W,R,M);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+M)}function tt(R,M){const W=n.get(R);if(R.version>0&&W.__version!==R.version){J(W,R,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+M)}const $={[Vi]:i.REPEAT,[qn]:i.CLAMP_TO_EDGE,[Hs]:i.MIRRORED_REPEAT},st={[qe]:i.NEAREST,[Bl]:i.NEAREST_MIPMAP_NEAREST,[Ji]:i.NEAREST_MIPMAP_LINEAR,[Je]:i.LINEAR,[Wr]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},Mt={[Zl]:i.NEVER,[ru]:i.ALWAYS,[Ql]:i.LESS,[xc]:i.LEQUAL,[tu]:i.EQUAL,[iu]:i.GEQUAL,[eu]:i.GREATER,[nu]:i.NOTEQUAL};function ut(R,M){if(M.type===An&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Je||M.magFilter===Wr||M.magFilter===Ji||M.magFilter===Yn||M.minFilter===Je||M.minFilter===Wr||M.minFilter===Ji||M.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,$[M.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,$[M.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,$[M.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,st[M.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,st[M.minFilter]),M.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Mt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===qe||M.minFilter!==Ji&&M.minFilter!==Yn||M.type===An&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ct(R,M){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",U));const et=M.source;let rt=h.get(et);rt===void 0&&(rt={},h.set(et,rt));const q=z(M);if(q!==R.__cacheKey){rt[q]===void 0&&(rt[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),rt[q].usedTimes++;const Rt=rt[R.__cacheKey];Rt!==void 0&&(rt[R.__cacheKey].usedTimes--,Rt.usedTimes===0&&I(M)),R.__cacheKey=q,R.__webglTexture=rt[q].texture}return W}function zt(R,M,W){let et=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(et=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(et=i.TEXTURE_3D);const rt=Ct(R,M),q=M.source;e.bindTexture(et,R.__webglTexture,i.TEXTURE0+W);const Rt=n.get(q);if(q.version!==Rt.__version||rt===!0){e.activeTexture(i.TEXTURE0+W);const dt=oe.getPrimaries(oe.workingColorSpace),ct=M.colorSpace===Tn?null:oe.getPrimaries(M.colorSpace),Vt=M.colorSpace===Tn||dt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let at=v(M.image,!1,r.maxTextureSize);at=Wt(M,at);const yt=s.convert(M.format,M.colorSpace),Kt=s.convert(M.type);let Nt=S(M.internalFormat,yt,Kt,M.colorSpace,M.isVideoTexture);ut(et,M);let mt;const kt=M.mipmaps,Jt=M.isVideoTexture!==!0,ge=Rt.__version===void 0||rt===!0,N=q.dataReady,gt=w(M,at);if(M.isDepthTexture)Nt=_(M.format===bi,M.type),ge&&(Jt?e.texStorage2D(i.TEXTURE_2D,1,Nt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Nt,at.width,at.height,0,yt,Kt,null));else if(M.isDataTexture)if(kt.length>0){Jt&&ge&&e.texStorage2D(i.TEXTURE_2D,gt,Nt,kt[0].width,kt[0].height);for(let j=0,T=kt.length;j<T;j++)mt=kt[j],Jt?N&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,mt.width,mt.height,yt,Kt,mt.data):e.texImage2D(i.TEXTURE_2D,j,Nt,mt.width,mt.height,0,yt,Kt,mt.data);M.generateMipmaps=!1}else Jt?(ge&&e.texStorage2D(i.TEXTURE_2D,gt,Nt,at.width,at.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,yt,Kt,at.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,at.width,at.height,0,yt,Kt,at.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Jt&&ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Nt,kt[0].width,kt[0].height,at.depth);for(let j=0,T=kt.length;j<T;j++)if(mt=kt[j],M.format!==rn)if(yt!==null)if(Jt){if(N)if(M.layerUpdates.size>0){for(const D of M.layerUpdates){const k=mt.width*mt.height;e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,D,mt.width,mt.height,1,yt,mt.data.slice(k*D,k*(D+1)),0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,mt.width,mt.height,at.depth,yt,mt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,Nt,mt.width,mt.height,at.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,mt.width,mt.height,at.depth,yt,Kt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,j,Nt,mt.width,mt.height,at.depth,0,yt,Kt,mt.data)}else{Jt&&ge&&e.texStorage2D(i.TEXTURE_2D,gt,Nt,kt[0].width,kt[0].height);for(let j=0,T=kt.length;j<T;j++)mt=kt[j],M.format!==rn?yt!==null?Jt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,mt.width,mt.height,yt,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,j,Nt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?N&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,mt.width,mt.height,yt,Kt,mt.data):e.texImage2D(i.TEXTURE_2D,j,Nt,mt.width,mt.height,0,yt,Kt,mt.data)}else if(M.isDataArrayTexture)if(Jt){if(ge&&e.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Nt,at.width,at.height,at.depth),N)if(M.layerUpdates.size>0){let j;switch(Kt){case i.UNSIGNED_BYTE:switch(yt){case i.ALPHA:j=1;break;case i.LUMINANCE:j=1;break;case i.LUMINANCE_ALPHA:j=2;break;case i.RGB:j=3;break;case i.RGBA:j=4;break;default:throw new Error(`Unknown texel size for format ${yt}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:j=1;break;default:throw new Error(`Unknown texel size for type ${Kt}.`)}const T=at.width*at.height*j;for(const D of M.layerUpdates)e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,D,at.width,at.height,1,yt,Kt,at.data.slice(T*D,T*(D+1)));M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,yt,Kt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,at.width,at.height,at.depth,0,yt,Kt,at.data);else if(M.isData3DTexture)Jt?(ge&&e.texStorage3D(i.TEXTURE_3D,gt,Nt,at.width,at.height,at.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,yt,Kt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,at.width,at.height,at.depth,0,yt,Kt,at.data);else if(M.isFramebufferTexture){if(ge)if(Jt)e.texStorage2D(i.TEXTURE_2D,gt,Nt,at.width,at.height);else{let j=at.width,T=at.height;for(let D=0;D<gt;D++)e.texImage2D(i.TEXTURE_2D,D,Nt,j,T,0,yt,Kt,null),j>>=1,T>>=1}}else if(kt.length>0){if(Jt&&ge){const j=xe(kt[0]);e.texStorage2D(i.TEXTURE_2D,gt,Nt,j.width,j.height)}for(let j=0,T=kt.length;j<T;j++)mt=kt[j],Jt?N&&e.texSubImage2D(i.TEXTURE_2D,j,0,0,yt,Kt,mt):e.texImage2D(i.TEXTURE_2D,j,Nt,yt,Kt,mt);M.generateMipmaps=!1}else if(Jt){if(ge){const j=xe(at);e.texStorage2D(i.TEXTURE_2D,gt,Nt,j.width,j.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Kt,at)}else e.texImage2D(i.TEXTURE_2D,0,Nt,yt,Kt,at);f(M)&&p(et),Rt.__version=q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function J(R,M,W){if(M.image.length!==6)return;const et=Ct(R,M),rt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+W);const q=n.get(rt);if(rt.version!==q.__version||et===!0){e.activeTexture(i.TEXTURE0+W);const Rt=oe.getPrimaries(oe.workingColorSpace),dt=M.colorSpace===Tn?null:oe.getPrimaries(M.colorSpace),ct=M.colorSpace===Tn||Rt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const Vt=M.isCompressedTexture||M.image[0].isCompressedTexture,at=M.image[0]&&M.image[0].isDataTexture,yt=[];for(let T=0;T<6;T++)!Vt&&!at?yt[T]=v(M.image[T],!0,r.maxCubemapSize):yt[T]=at?M.image[T].image:M.image[T],yt[T]=Wt(M,yt[T]);const Kt=yt[0],Nt=s.convert(M.format,M.colorSpace),mt=s.convert(M.type),kt=S(M.internalFormat,Nt,mt,M.colorSpace),Jt=M.isVideoTexture!==!0,ge=q.__version===void 0||et===!0,N=rt.dataReady;let gt=w(M,Kt);ut(i.TEXTURE_CUBE_MAP,M);let j;if(Vt){Jt&&ge&&e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,kt,Kt.width,Kt.height);for(let T=0;T<6;T++){j=yt[T].mipmaps;for(let D=0;D<j.length;D++){const k=j[D];M.format!==rn?Nt!==null?Jt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,D,0,0,k.width,k.height,Nt,k.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,D,kt,k.width,k.height,0,k.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,D,0,0,k.width,k.height,Nt,mt,k.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,D,kt,k.width,k.height,0,Nt,mt,k.data)}}}else{if(j=M.mipmaps,Jt&&ge){j.length>0&&gt++;const T=xe(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,gt,kt,T.width,T.height)}for(let T=0;T<6;T++)if(at){Jt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,0,0,yt[T].width,yt[T].height,Nt,mt,yt[T].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,kt,yt[T].width,yt[T].height,0,Nt,mt,yt[T].data);for(let D=0;D<j.length;D++){const nt=j[D].image[T].image;Jt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,D+1,0,0,nt.width,nt.height,Nt,mt,nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,D+1,kt,nt.width,nt.height,0,Nt,mt,nt.data)}}else{Jt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,0,0,Nt,mt,yt[T]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,kt,Nt,mt,yt[T]);for(let D=0;D<j.length;D++){const k=j[D];Jt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,D+1,0,0,Nt,mt,k.image[T]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,D+1,kt,Nt,mt,k.image[T])}}}f(M)&&p(i.TEXTURE_CUBE_MAP),q.__version=rt.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function it(R,M,W,et,rt,q){const Rt=s.convert(W.format,W.colorSpace),dt=s.convert(W.type),ct=S(W.internalFormat,Rt,dt,W.colorSpace);if(!n.get(M).__hasExternalTextures){const at=Math.max(1,M.width>>q),yt=Math.max(1,M.height>>q);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,q,ct,at,yt,M.depth,0,Rt,dt,null):e.texImage2D(rt,q,ct,at,yt,0,Rt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Zt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,et,rt,n.get(W).__webglTexture,0,Pt(M)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,et,rt,n.get(W).__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function O(R,M,W){if(i.bindRenderbuffer(i.RENDERBUFFER,R),M.depthBuffer){const et=M.depthTexture,rt=et&&et.isDepthTexture?et.type:null,q=_(M.stencilBuffer,rt),Rt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=Pt(M);Zt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,q,M.width,M.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,q,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,q,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Rt,i.RENDERBUFFER,R)}else{const et=M.textures;for(let rt=0;rt<et.length;rt++){const q=et[rt],Rt=s.convert(q.format,q.colorSpace),dt=s.convert(q.type),ct=S(q.internalFormat,Rt,dt,q.colorSpace),Vt=Pt(M);W&&Zt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,ct,M.width,M.height):Zt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Vt,ct,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ct,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function V(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z(M.depthTexture,0);const et=n.get(M.depthTexture).__webglTexture,rt=Pt(M);if(M.depthTexture.format===xi)Zt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(M.depthTexture.format===bi)Zt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,rt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function ot(R){const M=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");V(M.__webglFramebuffer,R)}else if(W){M.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[et]),M.__webglDepthbuffer[et]=i.createRenderbuffer(),O(M.__webglDepthbuffer[et],R,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),O(M.__webglDepthbuffer,R,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(R,M,W){const et=n.get(R);M!==void 0&&it(et.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&ot(R)}function bt(R){const M=R.texture,W=n.get(R),et=n.get(M);R.addEventListener("dispose",b);const rt=R.textures,q=R.isWebGLCubeRenderTarget===!0,Rt=rt.length>1;if(Rt||(et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture()),et.__version=M.version,a.memory.textures++),q){W.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[dt]=[];for(let ct=0;ct<M.mipmaps.length;ct++)W.__webglFramebuffer[dt][ct]=i.createFramebuffer()}else W.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let dt=0;dt<M.mipmaps.length;dt++)W.__webglFramebuffer[dt]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Rt)for(let dt=0,ct=rt.length;dt<ct;dt++){const Vt=n.get(rt[dt]);Vt.__webglTexture===void 0&&(Vt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Zt(R)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let dt=0;dt<rt.length;dt++){const ct=rt[dt];W.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[dt]);const Vt=s.convert(ct.format,ct.colorSpace),at=s.convert(ct.type),yt=S(ct.internalFormat,Vt,at,ct.colorSpace,R.isXRRenderTarget===!0),Kt=Pt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Kt,yt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,W.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),O(W.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),ut(i.TEXTURE_CUBE_MAP,M);for(let dt=0;dt<6;dt++)if(M.mipmaps&&M.mipmaps.length>0)for(let ct=0;ct<M.mipmaps.length;ct++)it(W.__webglFramebuffer[dt][ct],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,ct);else it(W.__webglFramebuffer[dt],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);f(M)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let dt=0,ct=rt.length;dt<ct;dt++){const Vt=rt[dt],at=n.get(Vt);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),ut(i.TEXTURE_2D,Vt),it(W.__webglFramebuffer,R,Vt,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),f(Vt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(dt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,et.__webglTexture),ut(dt,M),M.mipmaps&&M.mipmaps.length>0)for(let ct=0;ct<M.mipmaps.length;ct++)it(W.__webglFramebuffer[ct],R,M,i.COLOR_ATTACHMENT0,dt,ct);else it(W.__webglFramebuffer,R,M,i.COLOR_ATTACHMENT0,dt,0);f(M)&&p(dt),e.unbindTexture()}R.depthBuffer&&ot(R)}function C(R){const M=R.textures;for(let W=0,et=M.length;W<et;W++){const rt=M[W];if(f(rt)){const q=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Rt=n.get(rt).__webglTexture;e.bindTexture(q,Rt),p(q),e.unbindTexture()}}}const It=[],Tt=[];function jt(R){if(R.samples>0){if(Zt(R)===!1){const M=R.textures,W=R.width,et=R.height;let rt=i.COLOR_BUFFER_BIT;const q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(R),dt=M.length>1;if(dt)for(let ct=0;ct<M.length;ct++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let ct=0;ct<M.length;ct++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[ct]);const Vt=n.get(M[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Vt,0)}i.blitFramebuffer(0,0,W,et,0,0,W,et,rt,i.NEAREST),c===!0&&(It.length=0,Tt.length=0,It.push(i.COLOR_ATTACHMENT0+ct),R.depthBuffer&&R.resolveDepthBuffer===!1&&(It.push(q),Tt.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Tt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,It))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let ct=0;ct<M.length;ct++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[ct]);const Vt=n.get(M[ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const M=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Pt(R){return Math.min(r.maxSamples,R.samples)}function Zt(R){const M=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Yt(R){const M=a.render.frame;d.get(R)!==M&&(d.set(R,M),R.update())}function Wt(R,M){const W=R.colorSpace,et=R.format,rt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==Un&&W!==Tn&&(oe.getTransfer(W)===de?(et!==rn||rt!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),M}function xe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=G,this.resetTextureUnits=L,this.setTexture2D=Z,this.setTexture2DArray=Q,this.setTexture3D=Y,this.setTextureCube=tt,this.rebindTextures=pt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=it,this.useMultisampledRTT=Zt}function sm(i,t){function e(n,r=Tn){let s;const a=oe.getTransfer(r);if(n===Ln)return i.UNSIGNED_BYTE;if(n===fc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===pc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zl)return i.BYTE;if(n===kl)return i.SHORT;if(n===br)return i.UNSIGNED_SHORT;if(n===dc)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Ir)return i.HALF_FLOAT;if(n===Gl)return i.ALPHA;if(n===Vl)return i.RGB;if(n===rn)return i.RGBA;if(n===Wl)return i.LUMINANCE;if(n===Xl)return i.LUMINANCE_ALPHA;if(n===xi)return i.DEPTH_COMPONENT;if(n===bi)return i.DEPTH_STENCIL;if(n===ql)return i.RED;if(n===mc)return i.RED_INTEGER;if(n===Yl)return i.RG;if(n===gc)return i.RG_INTEGER;if(n===_c)return i.RGBA_INTEGER;if(n===Xr||n===qr||n===Yr||n===$r)if(a===de)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Xr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Xr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Yr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$r)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ma||n===Sa||n===ya||n===Ea)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ma)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ya)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ea)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wa||n===ba||n===Ta)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===wa||n===ba)return a===de?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ta)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Aa||n===Ra||n===Ca||n===Pa||n===La||n===Da||n===Ia||n===Ua||n===Na||n===Fa||n===Oa||n===Ba||n===za||n===ka)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Aa)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ra)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ca)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pa)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===La)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Da)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ia)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ua)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Na)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fa)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oa)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ba)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===za)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ka)return a===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Kr||n===Ha||n===Ga)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Kr)return a===de?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ha)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ga)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$l||n===Va||n===Wa||n===Xa)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Kr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Va)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class am extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ht extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const om={type:"move"};class ys{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const v of t.hand.values()){const f=e.getJointPose(v,n),p=this._getHandJoint(u,v);f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=f.radius),p.visible=f!==null}const d=u.joints["index-finger-tip"],m=u.joints["thumb-tip"],h=d.position.distanceTo(m.position),l=.02,g=.005;u.inputState.pinching&&h>l+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&h<=l-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(om)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ht;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const cm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lm=`
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

}`;class um{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Ie,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Dn({vertexShader:cm,fragmentShader:lm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ue(new $n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class hm extends Ai{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,d=null,m=null,h=null,l=null,g=null;const v=new um,f=e.getContextAttributes();let p=null,S=null;const _=[],w=[],U=new xt;let b=null;const A=new Be;A.layers.enable(1),A.viewport=new _e;const I=new Be;I.layers.enable(2),I.viewport=new _e;const y=[A,I],x=new am;x.layers.enable(1),x.layers.enable(2);let L=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let it=_[J];return it===void 0&&(it=new ys,_[J]=it),it.getTargetRaySpace()},this.getControllerGrip=function(J){let it=_[J];return it===void 0&&(it=new ys,_[J]=it),it.getGripSpace()},this.getHand=function(J){let it=_[J];return it===void 0&&(it=new ys,_[J]=it),it.getHandSpace()};function z(J){const it=w.indexOf(J.inputSource);if(it===-1)return;const O=_[it];O!==void 0&&(O.update(J.inputSource,J.frame,u||a),O.dispatchEvent({type:J.type,data:J.inputSource}))}function Z(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",Q);for(let J=0;J<_.length;J++){const it=w[J];it!==null&&(w[J]=null,_[J].disconnect(it))}L=null,G=null,v.reset(),t.setRenderTarget(p),l=null,h=null,m=null,r=null,S=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(J){u=J},this.getBaseLayer=function(){return h!==null?h:l},this.getBinding=function(){return m},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",Q),f.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(U),r.renderState.layers===void 0){const it={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};l=new XRWebGLLayer(r,e,it),r.updateRenderState({baseLayer:l}),t.setPixelRatio(1),t.setSize(l.framebufferWidth,l.framebufferHeight,!1),S=new Jn(l.framebufferWidth,l.framebufferHeight,{format:rn,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let it=null,O=null,V=null;f.depth&&(V=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=f.stencil?bi:xi,O=f.stencil?wi:Ei);const ot={colorFormat:e.RGBA8,depthFormat:V,scaleFactor:s};m=new XRWebGLBinding(r,e),h=m.createProjectionLayer(ot),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),S=new Jn(h.textureWidth,h.textureHeight,{format:rn,type:Ln,depthTexture:new Dc(h.textureWidth,h.textureHeight,O,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),zt.setContext(r),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Q(J){for(let it=0;it<J.removed.length;it++){const O=J.removed[it],V=w.indexOf(O);V>=0&&(w[V]=null,_[V].disconnect(O))}for(let it=0;it<J.added.length;it++){const O=J.added[it];let V=w.indexOf(O);if(V===-1){for(let pt=0;pt<_.length;pt++)if(pt>=w.length){w.push(O),V=pt;break}else if(w[pt]===null){w[pt]=O,V=pt;break}if(V===-1)break}const ot=_[V];ot&&ot.connect(O)}}const Y=new P,tt=new P;function $(J,it,O){Y.setFromMatrixPosition(it.matrixWorld),tt.setFromMatrixPosition(O.matrixWorld);const V=Y.distanceTo(tt),ot=it.projectionMatrix.elements,pt=O.projectionMatrix.elements,bt=ot[14]/(ot[10]-1),C=ot[14]/(ot[10]+1),It=(ot[9]+1)/ot[5],Tt=(ot[9]-1)/ot[5],jt=(ot[8]-1)/ot[0],Pt=(pt[8]+1)/pt[0],Zt=bt*jt,Yt=bt*Pt,Wt=V/(-jt+Pt),xe=Wt*-jt;it.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(xe),J.translateZ(Wt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const R=bt+Wt,M=C+Wt,W=Zt-xe,et=Yt+(V-xe),rt=It*C/M*R,q=Tt*C/M*R;J.projectionMatrix.makePerspective(W,et,rt,q,R,M),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function st(J,it){it===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(it.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;v.texture!==null&&(J.near=v.depthNear,J.far=v.depthFar),x.near=I.near=A.near=J.near,x.far=I.far=A.far=J.far,(L!==x.near||G!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),L=x.near,G=x.far,A.near=L,A.far=G,I.near=L,I.far=G,A.updateProjectionMatrix(),I.updateProjectionMatrix(),J.updateProjectionMatrix());const it=J.parent,O=x.cameras;st(x,it);for(let V=0;V<O.length;V++)st(O[V],it);O.length===2?$(x,A,I):x.projectionMatrix.copy(A.projectionMatrix),Mt(J,x,it)};function Mt(J,it,O){O===null?J.matrix.copy(it.matrixWorld):(J.matrix.copy(O.matrixWorld),J.matrix.invert(),J.matrix.multiply(it.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(it.projectionMatrix),J.projectionMatrixInverse.copy(it.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Pr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&l===null))return c},this.setFoveation=function(J){c=J,h!==null&&(h.fixedFoveation=J),l!==null&&l.fixedFoveation!==void 0&&(l.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let ut=null;function Ct(J,it){if(d=it.getViewerPose(u||a),g=it,d!==null){const O=d.views;l!==null&&(t.setRenderTargetFramebuffer(S,l.framebuffer),t.setRenderTarget(S));let V=!1;O.length!==x.cameras.length&&(x.cameras.length=0,V=!0);for(let pt=0;pt<O.length;pt++){const bt=O[pt];let C=null;if(l!==null)C=l.getViewport(bt);else{const Tt=m.getViewSubImage(h,bt);C=Tt.viewport,pt===0&&(t.setRenderTargetTextures(S,Tt.colorTexture,h.ignoreDepthValues?void 0:Tt.depthStencilTexture),t.setRenderTarget(S))}let It=y[pt];It===void 0&&(It=new Be,It.layers.enable(pt),It.viewport=new _e,y[pt]=It),It.matrix.fromArray(bt.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(bt.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(C.x,C.y,C.width,C.height),pt===0&&(x.matrix.copy(It.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),V===!0&&x.cameras.push(It)}const ot=r.enabledFeatures;if(ot&&ot.includes("depth-sensing")){const pt=m.getDepthInformation(O[0]);pt&&pt.isValid&&pt.texture&&v.init(t,pt,r.renderState)}}for(let O=0;O<_.length;O++){const V=w[O],ot=_[O];V!==null&&ot!==void 0&&ot.update(V,it,u||a)}ut&&ut(J,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const zt=new Pc;zt.setAnimationLoop(Ct),this.setAnimationLoop=function(J){ut=J},this.dispose=function(){}}}const Hn=new sn,dm=new fe;function fm(i,t){function e(f,p){f.matrixAutoUpdate===!0&&f.updateMatrix(),p.value.copy(f.matrix)}function n(f,p){p.color.getRGB(f.fogColor.value,Ac(i)),p.isFog?(f.fogNear.value=p.near,f.fogFar.value=p.far):p.isFogExp2&&(f.fogDensity.value=p.density)}function r(f,p,S,_,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(f,p):p.isMeshToonMaterial?(s(f,p),m(f,p)):p.isMeshPhongMaterial?(s(f,p),d(f,p)):p.isMeshStandardMaterial?(s(f,p),h(f,p),p.isMeshPhysicalMaterial&&l(f,p,w)):p.isMeshMatcapMaterial?(s(f,p),g(f,p)):p.isMeshDepthMaterial?s(f,p):p.isMeshDistanceMaterial?(s(f,p),v(f,p)):p.isMeshNormalMaterial?s(f,p):p.isLineBasicMaterial?(a(f,p),p.isLineDashedMaterial&&o(f,p)):p.isPointsMaterial?c(f,p,S,_):p.isSpriteMaterial?u(f,p):p.isShadowMaterial?(f.color.value.copy(p.color),f.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(f,p){f.opacity.value=p.opacity,p.color&&f.diffuse.value.copy(p.color),p.emissive&&f.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.bumpMap&&(f.bumpMap.value=p.bumpMap,e(p.bumpMap,f.bumpMapTransform),f.bumpScale.value=p.bumpScale,p.side===ze&&(f.bumpScale.value*=-1)),p.normalMap&&(f.normalMap.value=p.normalMap,e(p.normalMap,f.normalMapTransform),f.normalScale.value.copy(p.normalScale),p.side===ze&&f.normalScale.value.negate()),p.displacementMap&&(f.displacementMap.value=p.displacementMap,e(p.displacementMap,f.displacementMapTransform),f.displacementScale.value=p.displacementScale,f.displacementBias.value=p.displacementBias),p.emissiveMap&&(f.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,f.emissiveMapTransform)),p.specularMap&&(f.specularMap.value=p.specularMap,e(p.specularMap,f.specularMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest);const S=t.get(p),_=S.envMap,w=S.envMapRotation;_&&(f.envMap.value=_,Hn.copy(w),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),f.envMapRotation.value.setFromMatrix4(dm.makeRotationFromEuler(Hn)),f.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=p.reflectivity,f.ior.value=p.ior,f.refractionRatio.value=p.refractionRatio),p.lightMap&&(f.lightMap.value=p.lightMap,f.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,f.lightMapTransform)),p.aoMap&&(f.aoMap.value=p.aoMap,f.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,f.aoMapTransform))}function a(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform))}function o(f,p){f.dashSize.value=p.dashSize,f.totalSize.value=p.dashSize+p.gapSize,f.scale.value=p.scale}function c(f,p,S,_){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.size.value=p.size*S,f.scale.value=_*.5,p.map&&(f.map.value=p.map,e(p.map,f.uvTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function u(f,p){f.diffuse.value.copy(p.color),f.opacity.value=p.opacity,f.rotation.value=p.rotation,p.map&&(f.map.value=p.map,e(p.map,f.mapTransform)),p.alphaMap&&(f.alphaMap.value=p.alphaMap,e(p.alphaMap,f.alphaMapTransform)),p.alphaTest>0&&(f.alphaTest.value=p.alphaTest)}function d(f,p){f.specular.value.copy(p.specular),f.shininess.value=Math.max(p.shininess,1e-4)}function m(f,p){p.gradientMap&&(f.gradientMap.value=p.gradientMap)}function h(f,p){f.metalness.value=p.metalness,p.metalnessMap&&(f.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,f.metalnessMapTransform)),f.roughness.value=p.roughness,p.roughnessMap&&(f.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,f.roughnessMapTransform)),p.envMap&&(f.envMapIntensity.value=p.envMapIntensity)}function l(f,p,S){f.ior.value=p.ior,p.sheen>0&&(f.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),f.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(f.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,f.sheenColorMapTransform)),p.sheenRoughnessMap&&(f.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,f.sheenRoughnessMapTransform))),p.clearcoat>0&&(f.clearcoat.value=p.clearcoat,f.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(f.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,f.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(f.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ze&&f.clearcoatNormalScale.value.negate())),p.dispersion>0&&(f.dispersion.value=p.dispersion),p.iridescence>0&&(f.iridescence.value=p.iridescence,f.iridescenceIOR.value=p.iridescenceIOR,f.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(f.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,f.iridescenceMapTransform)),p.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),p.transmission>0&&(f.transmission.value=p.transmission,f.transmissionSamplerMap.value=S.texture,f.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(f.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,f.transmissionMapTransform)),f.thickness.value=p.thickness,p.thicknessMap&&(f.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=p.attenuationDistance,f.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(f.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(f.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=p.specularIntensity,f.specularColor.value.copy(p.specularColor),p.specularColorMap&&(f.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,f.specularColorMapTransform)),p.specularIntensityMap&&(f.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,f.specularIntensityMapTransform))}function g(f,p){p.matcap&&(f.matcap.value=p.matcap)}function v(f,p){const S=t.get(p).light;f.referencePosition.value.setFromMatrixPosition(S.matrixWorld),f.nearDistance.value=S.shadow.camera.near,f.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function pm(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,_){const w=_.program;n.uniformBlockBinding(S,w)}function u(S,_){let w=r[S.id];w===void 0&&(g(S),w=d(S),r[S.id]=w,S.addEventListener("dispose",f));const U=_.program;n.updateUBOMapping(S,U);const b=t.render.frame;s[S.id]!==b&&(h(S),s[S.id]=b)}function d(S){const _=m();S.__bindingPointIndex=_;const w=i.createBuffer(),U=S.__size,b=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,U,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,w),w}function m(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const _=r[S.id],w=S.uniforms,U=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let b=0,A=w.length;b<A;b++){const I=Array.isArray(w[b])?w[b]:[w[b]];for(let y=0,x=I.length;y<x;y++){const L=I[y];if(l(L,b,y,U)===!0){const G=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let Z=0;for(let Q=0;Q<z.length;Q++){const Y=z[Q],tt=v(Y);typeof Y=="number"||typeof Y=="boolean"?(L.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,G+Z,L.__data)):Y.isMatrix3?(L.__data[0]=Y.elements[0],L.__data[1]=Y.elements[1],L.__data[2]=Y.elements[2],L.__data[3]=0,L.__data[4]=Y.elements[3],L.__data[5]=Y.elements[4],L.__data[6]=Y.elements[5],L.__data[7]=0,L.__data[8]=Y.elements[6],L.__data[9]=Y.elements[7],L.__data[10]=Y.elements[8],L.__data[11]=0):(Y.toArray(L.__data,Z),Z+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function l(S,_,w,U){const b=S.value,A=_+"_"+w;if(U[A]===void 0)return typeof b=="number"||typeof b=="boolean"?U[A]=b:U[A]=b.clone(),!0;{const I=U[A];if(typeof b=="number"||typeof b=="boolean"){if(I!==b)return U[A]=b,!0}else if(I.equals(b)===!1)return I.copy(b),!0}return!1}function g(S){const _=S.uniforms;let w=0;const U=16;for(let A=0,I=_.length;A<I;A++){const y=Array.isArray(_[A])?_[A]:[_[A]];for(let x=0,L=y.length;x<L;x++){const G=y[x],z=Array.isArray(G.value)?G.value:[G.value];for(let Z=0,Q=z.length;Z<Q;Z++){const Y=z[Z],tt=v(Y),$=w%U;$!==0&&U-$<tt.boundary&&(w+=U-$),G.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=w,w+=tt.storage}}}const b=w%U;return b>0&&(w+=U-b),S.__size=w,S.__cache={},this}function v(S){const _={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function f(S){const _=S.target;_.removeEventListener("dispose",f);const w=a.indexOf(_.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function p(){for(const S in r)i.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:c,update:u,dispose:p}}class mm{constructor(t={}){const{canvas:e=au(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;const l=new Uint32Array(4),g=new Int32Array(4);let v=null,f=null;const p=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Oe,this.toneMapping=Cn,this.toneMappingExposure=1;const _=this;let w=!1,U=0,b=0,A=null,I=-1,y=null;const x=new _e,L=new _e;let G=null;const z=new Qt(0);let Z=0,Q=e.width,Y=e.height,tt=1,$=null,st=null;const Mt=new _e(0,0,Q,Y),ut=new _e(0,0,Q,Y);let Ct=!1;const zt=new Qs;let J=!1,it=!1;const O=new fe,V=new P,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function bt(){return A===null?tt:1}let C=n;function It(E,F){return e.getContext(E,F)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ks}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",j,!1),e.addEventListener("webglcontextcreationerror",T,!1),C===null){const F="webgl2";if(C=It(F,E),C===null)throw It(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Tt,jt,Pt,Zt,Yt,Wt,xe,R,M,W,et,rt,q,Rt,dt,ct,Vt,at,yt,Kt,Nt,mt,kt,Jt;function ge(){Tt=new Ef(C),Tt.init(),mt=new sm(C,Tt),jt=new _f(C,Tt,t,mt),Pt=new im(C),Zt=new Tf(C),Yt=new Vp,Wt=new rm(C,Tt,Pt,Yt,jt,mt,Zt),xe=new xf(_),R=new yf(_),M=new Du(C),kt=new mf(C,M),W=new wf(C,M,Zt,kt),et=new Rf(C,W,M,Zt),yt=new Af(C,jt,Wt),ct=new vf(Yt),rt=new Gp(_,xe,R,Tt,jt,kt,ct),q=new fm(_,Yt),Rt=new Xp,dt=new jp(Tt),at=new pf(_,xe,R,Pt,et,h,c),Vt=new nm(_,et,jt),Jt=new pm(C,Zt,jt,Pt),Kt=new gf(C,Tt,Zt),Nt=new bf(C,Tt,Zt),Zt.programs=rt.programs,_.capabilities=jt,_.extensions=Tt,_.properties=Yt,_.renderLists=Rt,_.shadowMap=Vt,_.state=Pt,_.info=Zt}ge();const N=new hm(_,C);this.xr=N,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const E=Tt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Tt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(E){E!==void 0&&(tt=E,this.setSize(Q,Y,!1))},this.getSize=function(E){return E.set(Q,Y)},this.setSize=function(E,F,H=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=E,Y=F,e.width=Math.floor(E*tt),e.height=Math.floor(F*tt),H===!0&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(Q*tt,Y*tt).floor()},this.setDrawingBufferSize=function(E,F,H){Q=E,Y=F,tt=H,e.width=Math.floor(E*H),e.height=Math.floor(F*H),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(Mt)},this.setViewport=function(E,F,H,X){E.isVector4?Mt.set(E.x,E.y,E.z,E.w):Mt.set(E,F,H,X),Pt.viewport(x.copy(Mt).multiplyScalar(tt).round())},this.getScissor=function(E){return E.copy(ut)},this.setScissor=function(E,F,H,X){E.isVector4?ut.set(E.x,E.y,E.z,E.w):ut.set(E,F,H,X),Pt.scissor(L.copy(ut).multiplyScalar(tt).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(E){Pt.setScissorTest(Ct=E)},this.setOpaqueSort=function(E){$=E},this.setTransparentSort=function(E){st=E},this.getClearColor=function(E){return E.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(E=!0,F=!0,H=!0){let X=0;if(E){let B=!1;if(A!==null){const lt=A.texture.format;B=lt===_c||lt===gc||lt===mc}if(B){const lt=A.texture.type,_t=lt===Ln||lt===Ei||lt===br||lt===wi||lt===fc||lt===pc,St=at.getClearColor(),wt=at.getClearAlpha(),Ft=St.r,Ot=St.g,Ut=St.b;_t?(l[0]=Ft,l[1]=Ot,l[2]=Ut,l[3]=wt,C.clearBufferuiv(C.COLOR,0,l)):(g[0]=Ft,g[1]=Ot,g[2]=Ut,g[3]=wt,C.clearBufferiv(C.COLOR,0,g))}else X|=C.COLOR_BUFFER_BIT}F&&(X|=C.DEPTH_BUFFER_BIT),H&&(X|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",j,!1),e.removeEventListener("webglcontextcreationerror",T,!1),Rt.dispose(),dt.dispose(),Yt.dispose(),xe.dispose(),R.dispose(),et.dispose(),kt.dispose(),Jt.dispose(),rt.dispose(),N.dispose(),N.removeEventListener("sessionstart",ne),N.removeEventListener("sessionend",ee),se.stop()};function gt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const E=Zt.autoReset,F=Vt.enabled,H=Vt.autoUpdate,X=Vt.needsUpdate,B=Vt.type;ge(),Zt.autoReset=E,Vt.enabled=F,Vt.autoUpdate=H,Vt.needsUpdate=X,Vt.type=B}function T(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function D(E){const F=E.target;F.removeEventListener("dispose",D),k(F)}function k(E){nt(E),Yt.remove(E)}function nt(E){const F=Yt.get(E).programs;F!==void 0&&(F.forEach(function(H){rt.releaseProgram(H)}),E.isShaderMaterial&&rt.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,H,X,B,lt){F===null&&(F=ot);const _t=B.isMesh&&B.matrixWorld.determinant()<0,St=Qc(E,F,H,X,B);Pt.setMaterial(X,_t);let wt=H.index,Ft=1;if(X.wireframe===!0){if(wt=W.getWireframeAttribute(H),wt===void 0)return;Ft=2}const Ot=H.drawRange,Ut=H.attributes.position;let ie=Ot.start*Ft,Me=(Ot.start+Ot.count)*Ft;lt!==null&&(ie=Math.max(ie,lt.start*Ft),Me=Math.min(Me,(lt.start+lt.count)*Ft)),wt!==null?(ie=Math.max(ie,0),Me=Math.min(Me,wt.count)):Ut!=null&&(ie=Math.max(ie,0),Me=Math.min(Me,Ut.count));const Se=Me-ie;if(Se<0||Se===1/0)return;kt.setup(B,X,St,H,wt);let ke,ae=Kt;if(wt!==null&&(ke=M.get(wt),ae=Nt,ae.setIndex(ke)),B.isMesh)X.wireframe===!0?(Pt.setLineWidth(X.wireframeLinewidth*bt()),ae.setMode(C.LINES)):ae.setMode(C.TRIANGLES);else if(B.isLine){let Lt=X.linewidth;Lt===void 0&&(Lt=1),Pt.setLineWidth(Lt*bt()),B.isLineSegments?ae.setMode(C.LINES):B.isLineLoop?ae.setMode(C.LINE_LOOP):ae.setMode(C.LINE_STRIP)}else B.isPoints?ae.setMode(C.POINTS):B.isSprite&&ae.setMode(C.TRIANGLES);if(B.isBatchedMesh)B._multiDrawInstances!==null?ae.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances):ae.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)ae.renderInstances(ie,Se,B.count);else if(H.isInstancedBufferGeometry){const Lt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Le=Math.min(H.instanceCount,Lt);ae.renderInstances(ie,Se,Le)}else ae.render(ie,Se)};function K(E,F,H){E.transparent===!0&&E.side===en&&E.forceSinglePass===!1?(E.side=ze,E.needsUpdate=!0,$i(E,F,H),E.side=Pn,E.needsUpdate=!0,$i(E,F,H),E.side=en):$i(E,F,H)}this.compile=function(E,F,H=null){H===null&&(H=E),f=dt.get(H),f.init(F),S.push(f),H.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),E!==H&&E.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const X=new Set;return E.traverse(function(B){const lt=B.material;if(lt)if(Array.isArray(lt))for(let _t=0;_t<lt.length;_t++){const St=lt[_t];K(St,H,B),X.add(St)}else K(lt,H,B),X.add(lt)}),S.pop(),f=null,X},this.compileAsync=function(E,F,H=null){const X=this.compile(E,F,H);return new Promise(B=>{function lt(){if(X.forEach(function(_t){Yt.get(_t).currentProgram.isReady()&&X.delete(_t)}),X.size===0){B(E);return}setTimeout(lt,10)}Tt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let ht=null;function Et(E){ht&&ht(E)}function ne(){se.stop()}function ee(){se.start()}const se=new Pc;se.setAnimationLoop(Et),typeof self<"u"&&se.setContext(self),this.setAnimationLoop=function(E){ht=E,N.setAnimationLoop(E),E===null?se.stop():se.start()},N.addEventListener("sessionstart",ne),N.addEventListener("sessionend",ee),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(F),F=N.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,F,A),f=dt.get(E,S.length),f.init(F),S.push(f),O.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),zt.setFromProjectionMatrix(O),it=this.localClippingEnabled,J=ct.init(this.clippingPlanes,it),v=Rt.get(E,p.length),v.init(),p.push(v),N.enabled===!0&&N.isPresenting===!0){const lt=_.xr.getDepthSensingMesh();lt!==null&&Di(lt,F,-1/0,_.sortObjects)}Di(E,F,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort($,st),pt=N.enabled===!1||N.isPresenting===!1||N.hasDepthSensing()===!1,pt&&at.addToRenderList(v,E),this.info.render.frame++,J===!0&&ct.beginShadows();const H=f.state.shadowsArray;Vt.render(H,E,F),J===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=v.opaque,B=v.transmissive;if(f.setupLights(),F.isArrayCamera){const lt=F.cameras;if(B.length>0)for(let _t=0,St=lt.length;_t<St;_t++){const wt=lt[_t];ha(X,B,E,wt)}pt&&at.render(E);for(let _t=0,St=lt.length;_t<St;_t++){const wt=lt[_t];Ve(v,E,wt,wt.viewport)}}else B.length>0&&ha(X,B,E,F),pt&&at.render(E),Ve(v,E,F);A!==null&&(Wt.updateMultisampleRenderTarget(A),Wt.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(_,E,F),kt.resetDefaultState(),I=-1,y=null,S.pop(),S.length>0?(f=S[S.length-1],J===!0&&ct.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Di(E,F,H,X){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||zt.intersectsSprite(E)){X&&V.setFromMatrixPosition(E.matrixWorld).applyMatrix4(O);const _t=et.update(E),St=E.material;St.visible&&v.push(E,_t,St,H,V.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||zt.intersectsObject(E))){const _t=et.update(E),St=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),V.copy(E.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),V.copy(_t.boundingSphere.center)),V.applyMatrix4(E.matrixWorld).applyMatrix4(O)),Array.isArray(St)){const wt=_t.groups;for(let Ft=0,Ot=wt.length;Ft<Ot;Ft++){const Ut=wt[Ft],ie=St[Ut.materialIndex];ie&&ie.visible&&v.push(E,_t,ie,H,V.z,Ut)}}else St.visible&&v.push(E,_t,St,H,V.z,null)}}const lt=E.children;for(let _t=0,St=lt.length;_t<St;_t++)Di(lt[_t],F,H,X)}function Ve(E,F,H,X){const B=E.opaque,lt=E.transmissive,_t=E.transparent;f.setupLightsView(H),J===!0&&ct.setGlobalState(_.clippingPlanes,H),X&&Pt.viewport(x.copy(X)),B.length>0&&Yi(B,F,H),lt.length>0&&Yi(lt,F,H),_t.length>0&&Yi(_t,F,H),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function ha(E,F,H,X){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new Jn(1,1,{generateMipmaps:!0,type:Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float")?Ir:Ln,minFilter:Yn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const lt=f.state.transmissionRenderTarget[X.id],_t=X.viewport||x;lt.setSize(_t.z,_t.w);const St=_.getRenderTarget();_.setRenderTarget(lt),_.getClearColor(z),Z=_.getClearAlpha(),Z<1&&_.setClearColor(16777215,.5),pt?at.render(H):_.clear();const wt=_.toneMapping;_.toneMapping=Cn;const Ft=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),J===!0&&ct.setGlobalState(_.clippingPlanes,X),Yi(E,H,X),Wt.updateMultisampleRenderTarget(lt),Wt.updateRenderTargetMipmap(lt),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Ut=0,ie=F.length;Ut<ie;Ut++){const Me=F[Ut],Se=Me.object,ke=Me.geometry,ae=Me.material,Lt=Me.group;if(ae.side===en&&Se.layers.test(X.layers)){const Le=ae.side;ae.side=ze,ae.needsUpdate=!0,da(Se,H,X,ke,ae,Lt),ae.side=Le,ae.needsUpdate=!0,Ot=!0}}Ot===!0&&(Wt.updateMultisampleRenderTarget(lt),Wt.updateRenderTargetMipmap(lt))}_.setRenderTarget(St),_.setClearColor(z,Z),Ft!==void 0&&(X.viewport=Ft),_.toneMapping=wt}function Yi(E,F,H){const X=F.isScene===!0?F.overrideMaterial:null;for(let B=0,lt=E.length;B<lt;B++){const _t=E[B],St=_t.object,wt=_t.geometry,Ft=X===null?_t.material:X,Ot=_t.group;St.layers.test(H.layers)&&da(St,F,H,wt,Ft,Ot)}}function da(E,F,H,X,B,lt){E.onBeforeRender(_,F,H,X,B,lt),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(_,F,H,X,E,lt),B.transparent===!0&&B.side===en&&B.forceSinglePass===!1?(B.side=ze,B.needsUpdate=!0,_.renderBufferDirect(H,F,X,B,E,lt),B.side=Pn,B.needsUpdate=!0,_.renderBufferDirect(H,F,X,B,E,lt),B.side=en):_.renderBufferDirect(H,F,X,B,E,lt),E.onAfterRender(_,F,H,X,B,lt)}function $i(E,F,H){F.isScene!==!0&&(F=ot);const X=Yt.get(E),B=f.state.lights,lt=f.state.shadowsArray,_t=B.state.version,St=rt.getParameters(E,B.state,lt,F,H),wt=rt.getProgramCacheKey(St);let Ft=X.programs;X.environment=E.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(E.isMeshStandardMaterial?R:xe).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Ft===void 0&&(E.addEventListener("dispose",D),Ft=new Map,X.programs=Ft);let Ot=Ft.get(wt);if(Ot!==void 0){if(X.currentProgram===Ot&&X.lightsStateVersion===_t)return pa(E,St),Ot}else St.uniforms=rt.getUniforms(E),E.onBuild(H,St,_),E.onBeforeCompile(St,_),Ot=rt.acquireProgram(St,wt),Ft.set(wt,Ot),X.uniforms=St.uniforms;const Ut=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ut.clippingPlanes=ct.uniform),pa(E,St),X.needsLights=el(E),X.lightsStateVersion=_t,X.needsLights&&(Ut.ambientLightColor.value=B.state.ambient,Ut.lightProbe.value=B.state.probe,Ut.directionalLights.value=B.state.directional,Ut.directionalLightShadows.value=B.state.directionalShadow,Ut.spotLights.value=B.state.spot,Ut.spotLightShadows.value=B.state.spotShadow,Ut.rectAreaLights.value=B.state.rectArea,Ut.ltc_1.value=B.state.rectAreaLTC1,Ut.ltc_2.value=B.state.rectAreaLTC2,Ut.pointLights.value=B.state.point,Ut.pointLightShadows.value=B.state.pointShadow,Ut.hemisphereLights.value=B.state.hemi,Ut.directionalShadowMap.value=B.state.directionalShadowMap,Ut.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ut.spotShadowMap.value=B.state.spotShadowMap,Ut.spotLightMatrix.value=B.state.spotLightMatrix,Ut.spotLightMap.value=B.state.spotLightMap,Ut.pointShadowMap.value=B.state.pointShadowMap,Ut.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Ot,X.uniformsList=null,Ot}function fa(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Er.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function pa(E,F){const H=Yt.get(E);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function Qc(E,F,H,X,B){F.isScene!==!0&&(F=ot),Wt.resetTextureUnits();const lt=F.fog,_t=X.isMeshStandardMaterial?F.environment:null,St=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Un,wt=(X.isMeshStandardMaterial?R:xe).get(X.envMap||_t),Ft=X.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ot=!!H.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ut=!!H.morphAttributes.position,ie=!!H.morphAttributes.normal,Me=!!H.morphAttributes.color;let Se=Cn;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Se=_.toneMapping);const ke=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ae=ke!==void 0?ke.length:0,Lt=Yt.get(X),Le=f.state.lights;if(J===!0&&(it===!0||E!==y)){const We=E===y&&X.id===I;ct.setState(X,E,We)}let ce=!1;X.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==Le.state.version||Lt.outputColorSpace!==St||B.isBatchedMesh&&Lt.batching===!1||!B.isBatchedMesh&&Lt.batching===!0||B.isBatchedMesh&&Lt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Lt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Lt.instancing===!1||!B.isInstancedMesh&&Lt.instancing===!0||B.isSkinnedMesh&&Lt.skinning===!1||!B.isSkinnedMesh&&Lt.skinning===!0||B.isInstancedMesh&&Lt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Lt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Lt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Lt.instancingMorph===!1&&B.morphTexture!==null||Lt.envMap!==wt||X.fog===!0&&Lt.fog!==lt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==ct.numPlanes||Lt.numIntersection!==ct.numIntersection)||Lt.vertexAlphas!==Ft||Lt.vertexTangents!==Ot||Lt.morphTargets!==Ut||Lt.morphNormals!==ie||Lt.morphColors!==Me||Lt.toneMapping!==Se||Lt.morphTargetsCount!==ae)&&(ce=!0):(ce=!0,Lt.__version=X.version);let cn=Lt.currentProgram;ce===!0&&(cn=$i(X,F,B));let Ki=!1,Nn=!1,Hr=!1;const Te=cn.getUniforms(),vn=Lt.uniforms;if(Pt.useProgram(cn.program)&&(Ki=!0,Nn=!0,Hr=!0),X.id!==I&&(I=X.id,Nn=!0),Ki||y!==E){Te.setValue(C,"projectionMatrix",E.projectionMatrix),Te.setValue(C,"viewMatrix",E.matrixWorldInverse);const We=Te.map.cameraPosition;We!==void 0&&We.setValue(C,V.setFromMatrixPosition(E.matrixWorld)),jt.logarithmicDepthBuffer&&Te.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Te.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,Nn=!0,Hr=!0)}if(B.isSkinnedMesh){Te.setOptional(C,B,"bindMatrix"),Te.setOptional(C,B,"bindMatrixInverse");const We=B.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),Te.setValue(C,"boneTexture",We.boneTexture,Wt))}B.isBatchedMesh&&(Te.setOptional(C,B,"batchingTexture"),Te.setValue(C,"batchingTexture",B._matricesTexture,Wt),Te.setOptional(C,B,"batchingColorTexture"),B._colorsTexture!==null&&Te.setValue(C,"batchingColorTexture",B._colorsTexture,Wt));const Gr=H.morphAttributes;if((Gr.position!==void 0||Gr.normal!==void 0||Gr.color!==void 0)&&yt.update(B,H,cn),(Nn||Lt.receiveShadow!==B.receiveShadow)&&(Lt.receiveShadow=B.receiveShadow,Te.setValue(C,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(vn.envMap.value=wt,vn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(vn.envMapIntensity.value=F.environmentIntensity),Nn&&(Te.setValue(C,"toneMappingExposure",_.toneMappingExposure),Lt.needsLights&&tl(vn,Hr),lt&&X.fog===!0&&q.refreshFogUniforms(vn,lt),q.refreshMaterialUniforms(vn,X,tt,Y,f.state.transmissionRenderTarget[E.id]),Er.upload(C,fa(Lt),vn,Wt)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Er.upload(C,fa(Lt),vn,Wt),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Te.setValue(C,"center",B.center),Te.setValue(C,"modelViewMatrix",B.modelViewMatrix),Te.setValue(C,"normalMatrix",B.normalMatrix),Te.setValue(C,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const We=X.uniformsGroups;for(let Vr=0,nl=We.length;Vr<nl;Vr++){const ma=We[Vr];Jt.update(ma,cn),Jt.bind(ma,cn)}}return cn}function tl(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function el(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,F,H){Yt.get(E.texture).__webglTexture=F,Yt.get(E.depthTexture).__webglTexture=H;const X=Yt.get(E);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=H===void 0,X.__autoAllocateDepthBuffer||Tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const H=Yt.get(E);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,H=0){A=E,U=F,b=H;let X=!0,B=null,lt=!1,_t=!1;if(E){const wt=Yt.get(E);wt.__useDefaultFramebuffer!==void 0?(Pt.bindFramebuffer(C.FRAMEBUFFER,null),X=!1):wt.__webglFramebuffer===void 0?Wt.setupRenderTarget(E):wt.__hasExternalTextures&&Wt.rebindTextures(E,Yt.get(E.texture).__webglTexture,Yt.get(E.depthTexture).__webglTexture);const Ft=E.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(_t=!0);const Ot=Yt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ot[F])?B=Ot[F][H]:B=Ot[F],lt=!0):E.samples>0&&Wt.useMultisampledRTT(E)===!1?B=Yt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ot)?B=Ot[H]:B=Ot,x.copy(E.viewport),L.copy(E.scissor),G=E.scissorTest}else x.copy(Mt).multiplyScalar(tt).floor(),L.copy(ut).multiplyScalar(tt).floor(),G=Ct;if(Pt.bindFramebuffer(C.FRAMEBUFFER,B)&&X&&Pt.drawBuffers(E,B),Pt.viewport(x),Pt.scissor(L),Pt.setScissorTest(G),lt){const wt=Yt.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+F,wt.__webglTexture,H)}else if(_t){const wt=Yt.get(E.texture),Ft=F||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,wt.__webglTexture,H||0,Ft)}I=-1},this.readRenderTargetPixels=function(E,F,H,X,B,lt,_t){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Yt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_t!==void 0&&(St=St[_t]),St){Pt.bindFramebuffer(C.FRAMEBUFFER,St);try{const wt=E.texture,Ft=wt.format,Ot=wt.type;if(!jt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-X&&H>=0&&H<=E.height-B&&C.readPixels(F,H,X,B,mt.convert(Ft),mt.convert(Ot),lt)}finally{const wt=A!==null?Yt.get(A).__webglFramebuffer:null;Pt.bindFramebuffer(C.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(E,F,H,X,B,lt,_t){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Yt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_t!==void 0&&(St=St[_t]),St){Pt.bindFramebuffer(C.FRAMEBUFFER,St);try{const wt=E.texture,Ft=wt.format,Ot=wt.type;if(!jt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-X&&H>=0&&H<=E.height-B){const Ut=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ut),C.bufferData(C.PIXEL_PACK_BUFFER,lt.byteLength,C.STREAM_READ),C.readPixels(F,H,X,B,mt.convert(Ft),mt.convert(Ot),0),C.flush();const ie=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);await ou(C,ie,4);try{C.bindBuffer(C.PIXEL_PACK_BUFFER,Ut),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,lt)}finally{C.deleteBuffer(Ut),C.deleteSync(ie)}return lt}}finally{const wt=A!==null?Yt.get(A).__webglFramebuffer:null;Pt.bindFramebuffer(C.FRAMEBUFFER,wt)}}},this.copyFramebufferToTexture=function(E,F=null,H=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const X=Math.pow(2,-H),B=Math.floor(E.image.width*X),lt=Math.floor(E.image.height*X),_t=F!==null?F.x:0,St=F!==null?F.y:0;Wt.setTexture2D(E,0),C.copyTexSubImage2D(C.TEXTURE_2D,H,0,0,_t,St,B,lt),Pt.unbindTexture()},this.copyTextureToTexture=function(E,F,H=null,X=null,B=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,E=arguments[1],F=arguments[2],B=arguments[3]||0,H=null);let lt,_t,St,wt,Ft,Ot;H!==null?(lt=H.max.x-H.min.x,_t=H.max.y-H.min.y,St=H.min.x,wt=H.min.y):(lt=E.image.width,_t=E.image.height,St=0,wt=0),X!==null?(Ft=X.x,Ot=X.y):(Ft=0,Ot=0);const Ut=mt.convert(F.format),ie=mt.convert(F.type);Wt.setTexture2D(F,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);const Me=C.getParameter(C.UNPACK_ROW_LENGTH),Se=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ke=C.getParameter(C.UNPACK_SKIP_PIXELS),ae=C.getParameter(C.UNPACK_SKIP_ROWS),Lt=C.getParameter(C.UNPACK_SKIP_IMAGES),Le=E.isCompressedTexture?E.mipmaps[B]:E.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Le.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Le.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,St),C.pixelStorei(C.UNPACK_SKIP_ROWS,wt),E.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,B,Ft,Ot,lt,_t,Ut,ie,Le.data):E.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,B,Ft,Ot,Le.width,Le.height,Ut,Le.data):C.texSubImage2D(C.TEXTURE_2D,B,Ft,Ot,Ut,ie,Le),C.pixelStorei(C.UNPACK_ROW_LENGTH,Me),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Se),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ke),C.pixelStorei(C.UNPACK_SKIP_ROWS,ae),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Lt),B===0&&F.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),Pt.unbindTexture()},this.copyTextureToTexture3D=function(E,F,H=null,X=null,B=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,X=arguments[1]||null,E=arguments[2],F=arguments[3],B=arguments[4]||0);let lt,_t,St,wt,Ft,Ot,Ut,ie,Me;const Se=E.isCompressedTexture?E.mipmaps[B]:E.image;H!==null?(lt=H.max.x-H.min.x,_t=H.max.y-H.min.y,St=H.max.z-H.min.z,wt=H.min.x,Ft=H.min.y,Ot=H.min.z):(lt=Se.width,_t=Se.height,St=Se.depth,wt=0,Ft=0,Ot=0),X!==null?(Ut=X.x,ie=X.y,Me=X.z):(Ut=0,ie=0,Me=0);const ke=mt.convert(F.format),ae=mt.convert(F.type);let Lt;if(F.isData3DTexture)Wt.setTexture3D(F,0),Lt=C.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)Wt.setTexture2DArray(F,0),Lt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);const Le=C.getParameter(C.UNPACK_ROW_LENGTH),ce=C.getParameter(C.UNPACK_IMAGE_HEIGHT),cn=C.getParameter(C.UNPACK_SKIP_PIXELS),Ki=C.getParameter(C.UNPACK_SKIP_ROWS),Nn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Se.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Se.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,wt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ft),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ot),E.isDataTexture||E.isData3DTexture?C.texSubImage3D(Lt,B,Ut,ie,Me,lt,_t,St,ke,ae,Se.data):F.isCompressedArrayTexture?C.compressedTexSubImage3D(Lt,B,Ut,ie,Me,lt,_t,St,ke,Se.data):C.texSubImage3D(Lt,B,Ut,ie,Me,lt,_t,St,ke,ae,Se),C.pixelStorei(C.UNPACK_ROW_LENGTH,Le),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ce),C.pixelStorei(C.UNPACK_SKIP_PIXELS,cn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ki),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Nn),B===0&&F.generateMipmaps&&C.generateMipmap(Lt),Pt.unbindTexture()},this.initRenderTarget=function(E){Yt.get(E).__webglFramebuffer===void 0&&Wt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Wt.setTextureCube(E,0):E.isData3DTexture?Wt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Wt.setTexture2DArray(E,0):Wt.setTexture2D(E,0),Pt.unbindTexture()},this.resetState=function(){U=0,b=0,A=null,Pt.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Js?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===Ur?"display-p3":"srgb"}}class ea{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qt(t),this.density=e}clone(){return new ea(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class gm extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Bc extends Ci{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Oo=new fe,Vs=new js,vr=new Nr,xr=new P;class _m extends pe{constructor(t=new Ue,e=new Bc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere),vr.applyMatrix4(r),vr.radius+=s,t.ray.intersectsSphere(vr)===!1)return;Oo.copy(r).invert(),Vs.copy(t.ray).applyMatrix4(Oo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=n.index,m=n.attributes.position;if(u!==null){const h=Math.max(0,a.start),l=Math.min(u.count,a.start+a.count);for(let g=h,v=l;g<v;g++){const f=u.getX(g);xr.fromBufferAttribute(m,f),Bo(xr,f,c,r,t,e,this)}}else{const h=Math.max(0,a.start),l=Math.min(m.count,a.start+a.count);for(let g=h,v=l;g<v;g++)xr.fromBufferAttribute(m,g),Bo(xr,g,c,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Bo(i,t,e,n,r,s,a){const o=Vs.distanceSqToPoint(i);if(o<e){const c=new P;Vs.closestPointToPoint(i,c),c.applyMatrix4(n);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,object:a})}}class na extends Ie{constructor(t,e,n,r,s,a,o,c,u){super(t,e,n,r,s,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class on{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,c=s-1,u;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),u=n[r]-a,u<0)o=r+1;else if(u>0)c=r-1;else{c=r;break}if(r=c,n[r]===a)return r/(s-1);const d=n[r],h=n[r+1]-d,l=(a-d)/h;return(r+l)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=e||(a.isVector2?new xt:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,r=[],s=[],a=[],o=new P,c=new fe;for(let l=0;l<=t;l++){const g=l/t;r[l]=this.getTangentAt(g,new P)}s[0]=new P,a[0]=new P;let u=Number.MAX_VALUE;const d=Math.abs(r[0].x),m=Math.abs(r[0].y),h=Math.abs(r[0].z);d<=u&&(u=d,n.set(1,0,0)),m<=u&&(u=m,n.set(0,1,0)),h<=u&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let l=1;l<=t;l++){if(s[l]=s[l-1].clone(),a[l]=a[l-1].clone(),o.crossVectors(r[l-1],r[l]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Re(r[l-1].dot(r[l]),-1,1));s[l].applyMatrix4(c.makeRotationAxis(o,g))}a[l].crossVectors(r[l],s[l])}if(e===!0){let l=Math.acos(Re(s[0].dot(s[t]),-1,1));l/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(l=-l);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],l*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ia extends on{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new xt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let c=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const d=Math.cos(this.aRotation),m=Math.sin(this.aRotation),h=c-this.aX,l=u-this.aY;c=h*d-l*m+this.aX,u=h*m+l*d+this.aY}return n.set(c,u)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class vm extends ia{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ra(){let i=0,t=0,e=0,n=0;function r(s,a,o,c){i=s,t=o,e=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,u){r(a,o,u*(o-s),u*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,u,d,m){let h=(a-s)/u-(o-s)/(u+d)+(o-a)/d,l=(o-a)/d-(c-a)/(d+m)+(c-o)/m;h*=d,l*=d,r(a,o,h,l)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const Mr=new P,Es=new ra,ws=new ra,bs=new ra;class xm extends on{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new P){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:c===0&&o===s-1&&(o=s-2,c=1);let u,d;this.closed||o>0?u=r[(o-1)%s]:(Mr.subVectors(r[0],r[1]).add(r[0]),u=Mr);const m=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?d=r[(o+2)%s]:(Mr.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=Mr),this.curveType==="centripetal"||this.curveType==="chordal"){const l=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(m),l),v=Math.pow(m.distanceToSquared(h),l),f=Math.pow(h.distanceToSquared(d),l);v<1e-4&&(v=1),g<1e-4&&(g=v),f<1e-4&&(f=v),Es.initNonuniformCatmullRom(u.x,m.x,h.x,d.x,g,v,f),ws.initNonuniformCatmullRom(u.y,m.y,h.y,d.y,g,v,f),bs.initNonuniformCatmullRom(u.z,m.z,h.z,d.z,g,v,f)}else this.curveType==="catmullrom"&&(Es.initCatmullRom(u.x,m.x,h.x,d.x,this.tension),ws.initCatmullRom(u.y,m.y,h.y,d.y,this.tension),bs.initCatmullRom(u.z,m.z,h.z,d.z,this.tension));return n.set(Es.calc(c),ws.calc(c),bs.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new P().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function zo(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,c=i*o;return(2*e-2*n+s+a)*c+(-3*e+3*n-2*s-a)*o+s*i+e}function Mm(i,t){const e=1-i;return e*e*t}function Sm(i,t){return 2*(1-i)*i*t}function ym(i,t){return i*i*t}function Hi(i,t,e,n){return Mm(i,t)+Sm(i,e)+ym(i,n)}function Em(i,t){const e=1-i;return e*e*e*t}function wm(i,t){const e=1-i;return 3*e*e*i*t}function bm(i,t){return 3*(1-i)*i*i*t}function Tm(i,t){return i*i*i*t}function Gi(i,t,e,n,r){return Em(i,t)+wm(i,e)+bm(i,n)+Tm(i,r)}class zc extends on{constructor(t=new xt,e=new xt,n=new xt,r=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new xt){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Gi(t,r.x,s.x,a.x,o.x),Gi(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Am extends on{constructor(t=new P,e=new P,n=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new P){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Gi(t,r.x,s.x,a.x,o.x),Gi(t,r.y,s.y,a.y,o.y),Gi(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class kc extends on{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rm extends on{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hc extends on{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Hi(t,r.x,s.x,a.x),Hi(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cm extends on{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Hi(t,r.x,s.x,a.x),Hi(t,r.y,s.y,a.y),Hi(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gc extends on{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],u=r[a],d=r[a>r.length-2?r.length-1:a+1],m=r[a>r.length-3?r.length-1:a+2];return n.set(zo(o,c.x,u.x,d.x,m.x),zo(o,c.y,u.y,d.y,m.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new xt().fromArray(r))}return this}}var ko=Object.freeze({__proto__:null,ArcCurve:vm,CatmullRomCurve3:xm,CubicBezierCurve:zc,CubicBezierCurve3:Am,EllipseCurve:ia,LineCurve:kc,LineCurve3:Rm,QuadraticBezierCurve:Hc,QuadraticBezierCurve3:Cm,SplineCurve:Gc});class Pm extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ko[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],c=o.getLength(),u=c===0?0:1-a/c;return o.getPointAt(u,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let u=0;u<c.length;u++){const d=c[u];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new ko[r.type]().fromJSON(r))}return this}}class Lm extends Pm{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new kc(this.currentPoint.clone(),new xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Hc(this.currentPoint.clone(),new xt(t,e),new xt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new zc(this.currentPoint.clone(),new xt(t,e),new xt(n,r),new xt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Gc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,c){const u=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+u,e+d,n,r,s,a,o,c),this}absellipse(t,e,n,r,s,a,o,c){const u=new ia(t,e,n,r,s,a,o,c);if(this.curves.length>0){const m=u.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(u);const d=u.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class sa extends Ue{constructor(t=[new xt(0,-.5),new xt(.5,0),new xt(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=Re(r,0,Math.PI*2);const s=[],a=[],o=[],c=[],u=[],d=1/e,m=new P,h=new xt,l=new P,g=new P,v=new P;let f=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:f=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,l.x=p*1,l.y=-f,l.z=p*0,v.copy(l),l.normalize(),c.push(l.x,l.y,l.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:f=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,l.x=p*1,l.y=-f,l.z=p*0,g.copy(l),l.x+=v.x,l.y+=v.y,l.z+=v.z,l.normalize(),c.push(l.x,l.y,l.z),v.copy(g)}for(let S=0;S<=e;S++){const _=n+S*d*r,w=Math.sin(_),U=Math.cos(_);for(let b=0;b<=t.length-1;b++){m.x=t[b].x*w,m.y=t[b].y,m.z=t[b].x*U,a.push(m.x,m.y,m.z),h.x=S/e,h.y=b/(t.length-1),o.push(h.x,h.y);const A=c[3*b+0]*w,I=c[3*b+1],y=c[3*b+0]*U;u.push(A,I,y)}}for(let S=0;S<e;S++)for(let _=0;_<t.length-1;_++){const w=_+S*t.length,U=w,b=w+t.length,A=w+t.length+1,I=w+1;s.push(U,b,I),s.push(A,I,b)}this.setIndex(s),this.setAttribute("position",new me(a,3)),this.setAttribute("uv",new me(o,2)),this.setAttribute("normal",new me(u,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sa(t.points,t.segments,t.phiStart,t.phiLength)}}class je extends sa{constructor(t=1,e=1,n=4,r=8){const s=new Lm;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:r}}static fromJSON(t){return new je(t.radius,t.length,t.capSegments,t.radialSegments)}}class In extends Ue{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],a=[],o=[],c=[],u=new P,d=new xt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let m=0,h=3;m<=e;m++,h+=3){const l=n+m/e*r;u.x=t*Math.cos(l),u.y=t*Math.sin(l),a.push(u.x,u.y,u.z),o.push(0,0,1),d.x=(a[h]/t+1)/2,d.y=(a[h+1]/t+1)/2,c.push(d.x,d.y)}for(let m=1;m<=e;m++)s.push(m,m+1,0);this.setIndex(s),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(o,3)),this.setAttribute("uv",new me(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new In(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class $t extends Ue{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const u=this;r=Math.floor(r),s=Math.floor(s);const d=[],m=[],h=[],l=[];let g=0;const v=[],f=n/2;let p=0;S(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new me(m,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(l,2));function S(){const w=new P,U=new P;let b=0;const A=(e-t)/n;for(let I=0;I<=s;I++){const y=[],x=I/s,L=x*(e-t)+t;for(let G=0;G<=r;G++){const z=G/r,Z=z*c+o,Q=Math.sin(Z),Y=Math.cos(Z);U.x=L*Q,U.y=-x*n+f,U.z=L*Y,m.push(U.x,U.y,U.z),w.set(Q,A,Y).normalize(),h.push(w.x,w.y,w.z),l.push(z,1-x),y.push(g++)}v.push(y)}for(let I=0;I<r;I++)for(let y=0;y<s;y++){const x=v[y][I],L=v[y+1][I],G=v[y+1][I+1],z=v[y][I+1];d.push(x,L,z),d.push(L,G,z),b+=6}u.addGroup(p,b,0),p+=b}function _(w){const U=g,b=new xt,A=new P;let I=0;const y=w===!0?t:e,x=w===!0?1:-1;for(let G=1;G<=r;G++)m.push(0,f*x,0),h.push(0,x,0),l.push(.5,.5),g++;const L=g;for(let G=0;G<=r;G++){const Z=G/r*c+o,Q=Math.cos(Z),Y=Math.sin(Z);A.x=y*Y,A.y=f*x,A.z=y*Q,m.push(A.x,A.y,A.z),h.push(0,x,0),b.x=Q*.5+.5,b.y=Y*.5*x+.5,l.push(b.x,b.y),g++}for(let G=0;G<r;G++){const z=U+G,Z=L+G;w===!0?d.push(Z,Z+1,z):d.push(Z+1,Z,z),I+=3}u.addGroup(p,I,w===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $t(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class an extends $t{constructor(t=1,e=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new an(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class aa extends Ue{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],a=[];o(r),u(n),d(),this.setAttribute("position",new me(s,3)),this.setAttribute("normal",new me(s.slice(),3)),this.setAttribute("uv",new me(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const _=new P,w=new P,U=new P;for(let b=0;b<e.length;b+=3)l(e[b+0],_),l(e[b+1],w),l(e[b+2],U),c(_,w,U,S)}function c(S,_,w,U){const b=U+1,A=[];for(let I=0;I<=b;I++){A[I]=[];const y=S.clone().lerp(w,I/b),x=_.clone().lerp(w,I/b),L=b-I;for(let G=0;G<=L;G++)G===0&&I===b?A[I][G]=y:A[I][G]=y.clone().lerp(x,G/L)}for(let I=0;I<b;I++)for(let y=0;y<2*(b-I)-1;y++){const x=Math.floor(y/2);y%2===0?(h(A[I][x+1]),h(A[I+1][x]),h(A[I][x])):(h(A[I][x+1]),h(A[I+1][x+1]),h(A[I+1][x]))}}function u(S){const _=new P;for(let w=0;w<s.length;w+=3)_.x=s[w+0],_.y=s[w+1],_.z=s[w+2],_.normalize().multiplyScalar(S),s[w+0]=_.x,s[w+1]=_.y,s[w+2]=_.z}function d(){const S=new P;for(let _=0;_<s.length;_+=3){S.x=s[_+0],S.y=s[_+1],S.z=s[_+2];const w=f(S)/2/Math.PI+.5,U=p(S)/Math.PI+.5;a.push(w,1-U)}g(),m()}function m(){for(let S=0;S<a.length;S+=6){const _=a[S+0],w=a[S+2],U=a[S+4],b=Math.max(_,w,U),A=Math.min(_,w,U);b>.9&&A<.1&&(_<.2&&(a[S+0]+=1),w<.2&&(a[S+2]+=1),U<.2&&(a[S+4]+=1))}}function h(S){s.push(S.x,S.y,S.z)}function l(S,_){const w=S*3;_.x=t[w+0],_.y=t[w+1],_.z=t[w+2]}function g(){const S=new P,_=new P,w=new P,U=new P,b=new xt,A=new xt,I=new xt;for(let y=0,x=0;y<s.length;y+=9,x+=6){S.set(s[y+0],s[y+1],s[y+2]),_.set(s[y+3],s[y+4],s[y+5]),w.set(s[y+6],s[y+7],s[y+8]),b.set(a[x+0],a[x+1]),A.set(a[x+2],a[x+3]),I.set(a[x+4],a[x+5]),U.copy(S).add(_).add(w).divideScalar(3);const L=f(U);v(b,x+0,S,L),v(A,x+2,_,L),v(I,x+4,w,L)}}function v(S,_,w,U){U<0&&S.x===1&&(a[_]=S.x-1),w.x===0&&w.z===0&&(a[_]=U/2/Math.PI+.5)}function f(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new aa(t.vertices,t.indices,t.radius,t.details)}}class oa extends aa{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new oa(t.radius,t.detail)}}class re extends Ue{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let u=0;const d=[],m=new P,h=new P,l=[],g=[],v=[],f=[];for(let p=0;p<=n;p++){const S=[],_=p/n;let w=0;p===0&&a===0?w=.5/e:p===n&&c===Math.PI&&(w=-.5/e);for(let U=0;U<=e;U++){const b=U/e;m.x=-t*Math.cos(r+b*s)*Math.sin(a+_*o),m.y=t*Math.cos(a+_*o),m.z=t*Math.sin(r+b*s)*Math.sin(a+_*o),g.push(m.x,m.y,m.z),h.copy(m).normalize(),v.push(h.x,h.y,h.z),f.push(b+w,1-_),S.push(u++)}d.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const _=d[p][S+1],w=d[p][S],U=d[p+1][S],b=d[p+1][S+1];(p!==0||a>0)&&l.push(_,w,b),(p!==n-1||c<Math.PI)&&l.push(w,U,b)}this.setIndex(l),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(v,3)),this.setAttribute("uv",new me(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new re(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Qe extends Ue{constructor(t=1,e=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],c=[],u=[],d=new P,m=new P,h=new P;for(let l=0;l<=n;l++)for(let g=0;g<=r;g++){const v=g/r*s,f=l/n*Math.PI*2;m.x=(t+e*Math.cos(f))*Math.cos(v),m.y=(t+e*Math.cos(f))*Math.sin(v),m.z=e*Math.sin(f),o.push(m.x,m.y,m.z),d.x=t*Math.cos(v),d.y=t*Math.sin(v),h.subVectors(m,d).normalize(),c.push(h.x,h.y,h.z),u.push(g/r),u.push(l/n)}for(let l=1;l<=n;l++)for(let g=1;g<=r;g++){const v=(r+1)*l+g-1,f=(r+1)*(l-1)+g-1,p=(r+1)*(l-1)+g,S=(r+1)*l+g;a.push(v,f,S),a.push(f,p,S)}this.setIndex(a),this.setAttribute("position",new me(o,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qe(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class qi extends Ci{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vc,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Or extends pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Dm extends Or{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ts=new fe,Ho=new P,Go=new P;class ca{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qs,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ho.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ho),Go.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Go),e.updateMatrixWorld(),Ts.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ts),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ts)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Im extends ca{constructor(){super(new Be(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Pr*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||r!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=r,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Um extends Or{constructor(t,e,n=0,r=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Im}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Vo=new fe,Bi=new P,As=new P;class Nm extends ca{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new xt(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Bi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Bi),As.copy(n.position),As.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(As),n.updateMatrixWorld(),r.makeTranslation(-Bi.x,-Bi.y,-Bi.z),Vo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vo)}}class Sr extends Or{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Nm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Fm extends ca{constructor(){super(new Lc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Om extends Or{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pe.DEFAULT_UP),this.updateMatrix(),this.target=new pe,this.shadow=new Fm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Wo=new fe;class Bm{constructor(t,e,n=0,r=1/0){this.ray=new js(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Zs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Wo.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wo),this}intersectObject(t,e=!0,n=[]){return Ws(t,this,n,e),n.sort(Xo),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Ws(t[r],this,n,e);return n.sort(Xo),n}}function Xo(i,t){return i.distance-t.distance}function Ws(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Ws(s[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ks}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ks);function le(i,t={}){return new qi({color:i,roughness:.55,metalness:.08,...t})}function te(i,t,e=0,n=0,r=0,s,a,o){const c=new ue(i,t);return c.position.set(e,n,r),s!=null&&c.scale.set(s,a,o),c.castShadow=!0,c}function zm(){const i=new Ht,t=le(14018287,{roughness:.22,metalness:.1,transparent:!1});return i.add(te(new $t(.075,.095,.32,16),t,0,.18,0)),i.add(te(new $t(.032,.055,.12,12),t,0,.38,0)),i.add(te(new $t(.038,.038,.03,12),le(12653087,{roughness:.4}),0,.45,0)),i.add(te(new $t(.07,.07,.04,16),le(16050369,{roughness:.3}),0,.08,0)),i}function km(){const i=new Ht,t=te(new $t(.02,.03,.28,8),le(6042391),0,.14,-.02);i.add(t);const e=new Ht;return e.position.set(0,.32,0),e.rotation.x=-.08,e.add(te(new $t(.2,.2,.04,24),le(16050369),0,0,0)),e.add(te(new $t(.15,.15,.045,24),le(12653087),0,0,.002)),e.add(te(new $t(.09,.09,.05,20),le(16050369),0,0,.004)),e.add(te(new $t(.04,.04,.055,16),le(12653087),0,0,.006)),i.add(e),i}function Hm(){const i=new Ht,t=[3057880,16731533,16044894,4431943],e=t[Math.floor(Math.random()*t.length)];i.add(te(new re(.15,16,14),le(e,{roughness:.22,transparent:!0,opacity:.92}),0,.22,0)),i.add(te(new re(.03,8,6),le(4006415),0,.08,0));const n=te(new Qe(.025,.008,6,10),le(4006415),0,.08,0);return n.rotation.x=Math.PI/2,i.add(n),i}function Gm(){const i=new Ht;return i.add(te(new $t(.15,.16,.26,12),le(6962716,{roughness:.85}),0,.16,0)),i.add(te(new $t(.14,.14,.03,12),le(15259048,{roughness:.7}),0,.29,0)),i.add(te(new $t(.05,.05,.02,10),le(4006415),0,.305,0)),i.add(te(new vt(.04,.08,.03),le(6042391),.12,.18,.04)),i}function Vm(){const i=new Ht,t=le(16758472,{roughness:.86}),e=new re(1,14,10);return i.add(te(e,t,0,.16,0,.16,.15,.14)),i.add(te(e,t,0,.32,.04,.11,.1,.11)),i.add(te(e,t,-.09,.4,.02,.045,.045,.04)),i.add(te(e,t,.09,.4,.02,.045,.045,.04)),i.add(te(e,le(16747720),0,.14,.12,.08,.07,.04)),i.add(te(e,le(1708040),-.035,.34,.13,.016,.02,.016)),i.add(te(e,le(1708040),.035,.34,.13,.016,.02,.016)),i.add(te(e,le(16731533),0,.28,.14,.02,.015,.02)),i}function Rs(i){return i==="fair"?zm():i==="pond"?Vm():i==="forest"?km():i==="western"?Hm():i==="cabin"?Gm():Wm()}function Br(){const i=new Ht,t=new re(1,12,10);i.add(te(t,le(12653087),0,0,0,.138,.112,.2)),i.add(te(t,le(2001125),0,.088,.1,.08,.075,.08));const e=te(t,le(16044894),-.12,.02,0,.12,.032,.15);e.rotation.z=.45,i.add(e);const n=te(t,le(16044894),.12,.02,0,.12,.032,.15);n.rotation.z=-.45,i.add(n);const r=te(new an(.038,.11,8),le(15228164),0,.08,.21);return r.rotation.x=Math.PI/2,i.add(r),i.add(te(t,le(1708040),-.028,.11,.16,.016,.018,.016)),i.add(te(t,le(1708040),.028,.11,.16,.016,.018,.016)),i}function Wm(){const i=new Ht;i.add(te(new $t(.04,.048,.1,8),le(6962716,{roughness:.9}),0,.05,0));const t=Br();return t.position.set(0,.2,0),i.add(t),i}function Gt(i,t={}){return new qi({color:i,roughness:.62,metalness:.06,...t})}function Bt(i,t,e=0,n=0,r=0,s,a,o){const c=new ue(i,t);return c.position.set(e,n,r),c.castShadow=!0,c.receiveShadow=!0,c}function _i(i,t,e=3.4){const n=new Ht;return n.position.set(i,0,t),n.add(Bt(new $t(.14,.18,e*.32,8),Gt(6042391),0,e*.14,0)),n.add(Bt(new an(.95,e*.55,8),Gt(1332010),0,e*.5,0)),n.add(Bt(new an(.7,e*.42,8),Gt(1796920),0,e*.82,0)),n}function Cs(i,t){const e=new Ht;e.position.set(i,0,t);const n=Gt(3107642);e.add(Bt(new $t(.14,.16,1.6,8),n,0,.8,0));const r=Bt(new $t(.09,.09,.65,8),n,.32,1,0);return r.rotation.z=1.05,e.add(r),e}const qo={fair:{clear:8308981,fog:12115960,fogD:.01,hemiSky:16773576,hemiGround:8034874,hemi:1.2,sun:16769704,sunI:1.4,fill:16765562,accentA:12653087,accentB:16044894,ground:12755050,stripe:["#c1121f","#f4e8c1"]},pond:{clear:4891608,fog:9358054,fogD:.012,hemiSky:13693183,hemiGround:1731208,hemi:1.25,sun:16774864,sunI:1.45,fill:8050687,accentA:16765503,accentB:3057880,ground:3836586,stripe:["#2ea8d8","#ffd23f"]},forest:{clear:10409322,fog:13166752,fogD:.006,hemiSky:16774868,hemiGround:4880946,hemi:1.28,sun:16770720,sunI:1.4,fill:16773576,accentA:4431943,accentB:16044894,ground:6131514,stripe:["#43a047","#efe6c8"]},western:{clear:14711338,fog:13931082,fogD:.016,hemiSky:16763016,hemiGround:6962716,hemi:1,sun:16747066,sunI:1.35,fill:16757575,accentA:6042391,accentB:15246667,ground:12880442,stripe:["#5c3317","#e8a54b"]},cabin:{clear:13924394,fog:12871720,fogD:.02,hemiSky:16765088,hemiGround:4858376,hemi:.95,sun:16751168,sunI:1.1,fill:13214247,accentA:11028498,accentB:4006415,ground:6962716,stripe:["#6a3e1c","#c9a227"]},pirate:{clear:728115,fog:1323080,fogD:.018,hemiSky:8308968,hemiGround:662040,hemi:.85,sun:16760954,sunI:1.15,fill:13214247,accentA:13214247,accentB:2060123,ground:4008472,stripe:["#1f6f5b","#c9a227"]}};function Xm(){const i=new Ht;i.add(Bt(new vt(10,4.4,.4),Gt(11028498),0,2.2,-7.2));for(let e=0;e<8;e+=1)i.add(Bt(new vt(.9,4.2,.08),Gt(e%2?12653087:16050369),-3.6+e*1.05,2.1,-6.95));const t=Bt(new Qe(1.7,.06,8,28),Gt(4862080),-5.8,3.2,-8);return i.add(t),i.add(Bt(new vt(1.2,1.6,1.2),Gt(12653087),5.4,.8,-5.5)),i.add(Bt(new an(1.1,1.1,4),Gt(16044894),5.4,2.1,-5.5)),i.add(Bt(new vt(.9,.45,.5),Gt(13214247),-1.6,.22,1.4)),i.add(Bt(new vt(.9,.45,.5),Gt(14729290),1.6,.22,1.4)),i}function qm(){const i=new Ht,t=Bt(new In(9,32),Gt(3057880,{roughness:.12,metalness:.2}),0,.02,0);t.rotation.x=-Math.PI/2,i.add(t),i.add(Bt(new vt(3.2,.22,1.4),Gt(9067054),0,.28,.55)),i.add(Bt(new vt(2.9,.08,1.15),Gt(5157864,{roughness:.15}),0,.38,.55));for(let e=0;e<6;e+=1){const n=Bt(new In(.28,12),Gt(4431943),-2.2+e*.9,.05,-2.4-e%2*.6);n.rotation.x=-Math.PI/2,i.add(n)}return i.add(Bt(new vt(.3,2.4,.3),Gt(6042391),-4.4,1.2,-3.2)),i.add(Bt(new re(.7,10,8),Gt(3046706),-4.4,2.5,-3.2)),i.add(Bt(new vt(.3,2.2,.3),Gt(6042391),4.6,1.1,-3.6)),i.add(Bt(new re(.65,10,8),Gt(3706428),4.6,2.35,-3.6)),i}function Ym(){const i=new Ht;i.add(_i(-9.2,-12,6.2)),i.add(_i(9.4,-12.5,6.6)),i.add(_i(-10.5,-9,5.4)),i.add(_i(10.8,-9.4,5.6)),i.add(Bt(new vt(16,1.2,.5),Gt(3046706),0,.6,-9.5)),i.add(Bt(new vt(3.6,.12,.18),Gt(6962716),0,.55,-2.4)),i.add(Bt(new $t(.06,.07,.7,8),Gt(6042391),-1.7,.35,-2.4)),i.add(Bt(new $t(.06,.07,.7,8),Gt(6042391),1.7,.35,-2.4));const t=(e,n)=>Bt(new $t(.32,.32,.44,12),Gt(13214247),e,.22,n);i.add(t(-3.4,-1.6)),i.add(t(3.5,-1.8));for(let e=0;e<10;e+=1){const n=Bt(new re(.07,8,6),Gt(e%2?16744619:16044894),-3.6+e*.8,.12,-3.2-e%3*.35);i.add(n)}return i}function $m(){const i=new Ht;return i.add(Bt(new vt(12,.4,8),Gt(12880442),0,.1,-2)),i.add(Cs(-4.4,-4.2)),i.add(Cs(5,-5)),i.add(Cs(-6.2,-6.4)),i.add(Bt(new vt(3.4,2.2,.18),Gt(9062936),0,1.5,-2.4)),i.add(Bt(new vt(3.6,.18,.6),Gt(6042391),0,2.65,-2.2)),i.add(Bt(new re(.7,10,8),Gt(16757575,{emissive:16747066,emissiveIntensity:.8}),6.5,3.4,-8)),i}function Km(){const i=new Ht;i.add(Bt(new vt(4.4,2.6,2.2),Gt(6962716),0,1.4,-4.2)),i.add(Bt(new vt(4.8,.15,2.6),Gt(4006415),0,2.8,-4.2));const t=Bt(new an(3.2,1.4,4),Gt(9062936),0,3.6,-4.2);t.rotation.y=Math.PI/4,i.add(t),i.add(Bt(new vt(.7,1.1,.08),Gt(4006415),0,.9,-3.05)),i.add(_i(-5.2,-3.8,3.8)),i.add(_i(5.4,-4.2,4.1));const e=Bt(new $t(.16,.16,1.8,10),Gt(6962716),-1.6,.2,1.3);e.rotation.z=1.2,i.add(e);const n=Bt(new $t(.14,.14,1.5,10),Gt(6042391),1.5,.18,1.2);return n.rotation.z=-1.05,i.add(n),i}function Jm(){const i=new Ht,t=Bt(new In(14,36),Gt(867174,{roughness:.2,metalness:.15}),0,.01,0);return t.rotation.x=-Math.PI/2,i.add(t),i.add(Bt(new vt(8,.25,6),Gt(6042391),0,.2,.2)),i.add(Bt(new vt(.18,1.1,6.2),Gt(4006415),-3.9,.7,.2)),i.add(Bt(new vt(.18,1.1,6.2),Gt(4006415),3.9,.7,.2)),i.add(Bt(new $t(.12,.14,5.2,10),Gt(6962716),-1.4,2.8,-1.6)),i.add(Bt(new vt(.08,2.4,1.6),Gt(16050369),-1.4,3.6,-1.6)),i.add(Bt(new vt(1.1,.7,.8),Gt(13214247,{metalness:.7,roughness:.3}),2.2,.55,1.4)),i.add(Bt(new vt(.9,.5,.7),Gt(16765514,{metalness:.8,roughness:.22}),2.4,1.05,1.4)),i.add(Bt(new re(1.4,12,10),Gt(16769162,{emissive:16761933,emissiveIntensity:.35}),7,4.2,-9)),i}function jm(i){const t=new Ht;i.add(t);const e={fair:Xm(),pond:qm(),forest:Ym(),western:$m(),cabin:Km(),pirate:Jm()};return Object.values(e).forEach(n=>{n.visible=!1,t.add(n)}),{root:t,show(n){return Object.entries(e).forEach(([r,s])=>{s.visible=r===n}),qo[n]||qo.fair},tick(){}}}function bn(i,t={}){return new qi({color:i,roughness:.55,metalness:.06,...t})}function Fe(i,t,e=0,n=0,r=0,s,a,o){const c=new ue(i,t);return c.position.set(e,n,r),c.castShadow=!0,c}const Yo={ray:{skin:5911320,skinDark:4006416,nail:2758672,sleeve:16044894,cuff:12653087,ring:16044894,age:0},nia:{skin:7027228,skinDark:4006416,nail:16731533,sleeve:8146431,cuff:1710626,ring:8188159,age:0},walt:{skin:15255968,skinDark:13215098,nail:13939850,sleeve:6040977,cuff:15722184,ring:13214247,age:1},lumber:{skin:13010498,skinDark:9065768,nail:6962716,sleeve:11028498,cuff:2758704,ring:9067054,age:.4},pirate:{skin:13935988,skinDark:11041354,nail:1708040,sleeve:2060123,cuff:12653087,ring:13214247,age:.3},cowboy:{skin:13935988,skinDark:11041354,nail:6962716,sleeve:11028498,cuff:15784352,ring:13214247,age:.2},june:{skin:15978680,skinDark:14725264,nail:16747720,sleeve:16747720,cuff:8146431,ring:16044894,age:1}};function Vc(i){return Yo[i]||Yo.ray}function Zm(i,{holding:t=null}={}){const e=Vc(i),n=new Ht,r=bn(e.skin,{roughness:.62}),s=bn(e.skinDark,{roughness:.7}),a=bn(e.sleeve),o=Fe(new je(.075,.62,5,10),a,0,0,0);o.rotation.x=Math.PI/2,n.add(o),n.add(Fe(new Qe(.08,.018,8,14),bn(e.cuff),0,0,.32));const c=Fe(new vt(.22,.07,.26),r,0,.02,.46);n.add(c),n.add(Fe(new re(.09,12,10),r,0,.02,.36));for(let m=0;m<4;m+=1){const h=-.085+m*.056,l=Fe(new je(.022,.13,3,8),r,h,.04,.62);l.rotation.x=.42,n.add(l),n.add(Fe(new re(.016,8,6),bn(e.nail),h,.055,.7))}const u=Fe(new je(.026,.1,3,8),r,-.13,.05,.46);u.rotation.z=.95,u.rotation.x=.35,n.add(u),e.age>.5&&(n.add(Fe(new vt(.18,.012,.02),s,0,.055,.44)),n.add(Fe(new vt(.14,.01,.016),s,.02,.058,.5)));const d=Fe(new Qe(.028,.007,8,12),bn(e.ring,{metalness:.8,roughness:.25}),.085,.05,.58);return d.rotation.x=1.2,n.add(d),t&&(t.position.set(.02,.08,.58),n.add(t)),n.userData.kind=i,n.userData.look=e,n.visible=!1,n}function yr(i,t){const e=Vc(i),n=new Ht,r=bn(e.skin),s=bn(e.sleeve),a=Fe(new $t(.032,.04,.28,10),s,-.02,-.06,.1);a.rotation.z=.35,a.rotation.x=.35,n.add(a),n.add(Fe(new re(.05,12,10),r,.02,.04,-.02)),n.add(Fe(new vt(.1,.055,.12),r,.02,.05,-.1));for(let c=0;c<4;c+=1)n.add(Fe(new je(.012,.05,3,6),r,-.03+c*.018,.07,-.17));t&&(t.position.set(.02,.06,-.2),n.add(t));const o=new pe;return o.position.set(.02,.06,-.26),n.add(o),n.userData.nozzle=o,n}function ve(i,t={}){return new qi({color:i,roughness:.5,metalness:.1,...t})}function ye(i,t,e=0,n=0,r=0,s,a,o){const c=new ue(i,t);return c.position.set(e,n,r),c.castShadow=!0,c}function $o(){const i=new Ht;return i.add(ye(new vt(.08,.045,.07),ve(12653087,{roughness:.9}))),i.add(ye(new vt(.07,.02,.06),ve(16050369,{roughness:.9}),0,.018,0)),i}function Wc(){const i=new Ht,t=ye(new $t(.012,.016,.28,8),ve(6962716));t.rotation.x=.2,i.add(t);const e=ye(new vt(.14,.08,.03),ve(9082012,{metalness:.75,roughness:.28}),.02,.12,0);return i.add(e),i.add(ye(new vt(.04,.09,.025),ve(11581632,{metalness:.7,roughness:.25}),-.05,.12,0)),i}function Qm(){const i=new Ht,t=ve(16765503,{roughness:.35}),e=ve(3057880,{roughness:.3,metalness:.15});i.add(ye(new vt(.09,.08,.18),t,0,0,.02));const n=ye(new $t(.02,.028,.34,12),e,0,.02,-.22);n.rotation.x=Math.PI/2,i.add(n),i.add(ye(new re(.07,14,12),ve(6087142,{transparent:!0,opacity:.7,roughness:.15}),.01,.1,.04));const r=ye(new vt(.055,.15,.06),ve(15228164),0,-.11,.04);r.rotation.x=.32,i.add(r);const s=ye(new Qe(.022,.006,6,10),ve(1708040),0,-.03,0);s.rotation.y=Math.PI/2,i.add(s);const a=new pe;return a.position.set(0,.02,-.4),i.add(a),i.userData.nozzle=a,i}function t0(){const i=new Ht,t=ve(6962716,{roughness:.5}),e=ye(new Qe(.13,.01,7,22,Math.PI*1.05),t,.05,.02,-.02);e.rotation.set(.15,1.2,.35),i.add(e),i.add(ye(new $t(.012,.014,.055,8),ve(4006415),.02,.01,0));const n=ye(new $t(.004,.004,.26,6),ve(6042391),.03,.03,-.12);n.rotation.x=Math.PI/2,i.add(n);const r=ye(new an(.009,.028,8),ve(12634320,{metalness:.75}),.03,.03,-.26);r.rotation.x=-Math.PI/2,i.add(r),i.add(ye(new vt(.028,.007,.03),ve(12653087),.03,.04,-.02));const s=new pe;return s.position.set(.03,.03,-.28),i.add(s),i.userData.nozzle=s,i}function e0(){const i=new Ht,t=ve(1842210,{metalness:.82,roughness:.22}),e=ve(6962716,{roughness:.65});i.add(ye(new vt(.07,.085,.16),t,0,.03,.02));const n=ye(new $t(.02,.022,.38,12),t,0,.04,-.24);n.rotation.x=Math.PI/2,i.add(n),i.add(ye(new $t(.055,.055,.055,12),t,0,.03,.04)),i.add(ye(new vt(.02,.04,.03),t,0,.09,.08));const r=ye(new vt(.055,.16,.07),e,0,-.1,.07);r.rotation.x=.42,i.add(r),i.add(ye(new vt(.06,.02,.08),ve(13214247,{metalness:.6}),0,-.02,.08));const s=new pe;return s.position.set(0,.04,-.44),i.add(s),i.userData.nozzle=s,i.userData.muzzle=s,i}function n0(i,t,e="ray"){for(;i.children.length;)i.remove(i.children[0]);i.userData.ammo=t,i.userData.carny=e;let n;for(t==="beanbags"?n=yr(e,$o()):t==="parrot"?n=yr(e,Br()):t==="axe"?n=yr(e,Wc()):t==="water"?n=Qm():t==="bow"?n=t0():t==="gun"?n=e0():n=yr(e,$o());n.children.length;)i.add(n.children[0]);if(i.userData.nozzle=n.userData.nozzle,!i.userData.nozzle){const r=new pe;r.position.set(0,.02,-.3),i.add(r),i.userData.nozzle=r}}function i0(i){return i==="water"?10:1}function r0(i){if(i==="beanbags"){const t=new Ht;return t.add(new ue(new vt(.09,.05,.08),ve(12653087,{roughness:.9}))),t.add(new ue(new vt(.08,.02,.07),ve(16050369,{roughness:.9}))),t.children[1].position.y=.02,t}if(i==="parrot")return Br();if(i==="axe"){const t=Wc();return t.scale.setScalar(1.35),t}if(i==="bow"){const t=new Ht,e=new ue(new $t(.008,.008,.42,6),ve(4006415));e.rotation.x=Math.PI/2,t.add(e);const n=new ue(new an(.016,.05,8),ve(9082012,{metalness:.6}));return n.rotation.x=-Math.PI/2,n.position.z=-.22,t.add(n),t}return i==="gun"?new ue(new re(.012,8,6),ve(16769162,{emissive:16761933,emissiveIntensity:1.6,metalness:.4})):new ue(new re(.016,8,6),ve(8050687,{transparent:!0,opacity:.85,roughness:.15,emissive:3842303,emissiveIntensity:.55}))}function s0(i){return i==="water"?8050687:i==="gun"?16761933:i==="bow"?16050369:i==="axe"?13214247:i==="parrot"?16757575:12653087}function a0(i){return i==="beanbags"||i==="parrot"||i==="axe"?.42:i==="bow"?.16:i==="gun"?.1:.2}const o0=10,Ps={harper:{stripeA:12653087,stripeB:16050369,lightA:16757575,lightB:16731533,lightC:8188159},cowboy:{stripeA:11028498,stripeB:15784352,lightA:15246667,lightB:14252090,lightC:6210742}},Ko={cowboy:{skin:13935988,shirt:11028498,pants:4016682,hair:3875348,hat:"cowboy",accent:13214247},lumber:{skin:13010498,shirt:11028498,pants:2758704,hair:3875348,hat:"beanie",accent:13214247},pirate:{skin:13935988,shirt:2060123,pants:1710626,hair:1708040,hat:"bandana",accent:12653087},ray:{skin:5911320,shirt:16044894,pants:2902638,hair:1708040,hat:"none",accent:12653087},june:{skin:15978680,shirt:16747720,pants:8146431,hair:16050369,hat:"bow",accent:16731533},nia:{skin:7027228,shirt:8146431,pants:1710626,hair:1708040,hat:"visor",accent:8188159},walt:{skin:15255968,shirt:6040977,pants:2758704,hair:13617080,hat:"crystal",accent:16044894}};function Dt(i,t={}){return new qi({color:i,roughness:.52,metalness:.08,...t})}function At(i,t,e=0,n=0,r=0,s,a,o){const c=new ue(i,t);return c.position.set(e,n,r),s!=null&&c.scale.set(s,a,o),c.castShadow=!0,c.receiveShadow=!0,c}function zr(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,{canvas:e,ctx:e.getContext("2d")}}function c0(i=256,t=256,e="#6a3e1c",n="#3d220f"){const{canvas:r,ctx:s}=zr(i,t);s.fillStyle=e,s.fillRect(0,0,i,t);for(let o=0;o<40;o+=1){s.strokeStyle=o%2?n:"#8a5a2e",s.globalAlpha=.18+o%5*.04,s.lineWidth=2+o%4,s.beginPath();const c=o*17%i;s.moveTo(c,0),s.bezierCurveTo(c+8,t*.3,c-12,t*.7,c+4,t),s.stroke()}s.globalAlpha=1;const a=new na(r);return a.wrapS=a.wrapT=Vi,a.colorSpace=Oe,a}function Ls(i,t){const{canvas:e,ctx:n}=zr(64,256),r=8,s=256/r;for(let o=0;o<r;o+=1)n.fillStyle=o%2?t:i,n.fillRect(0,o*s,64,s+1);const a=new na(e);return a.colorSpace=Oe,a.wrapS=a.wrapT=Vi,a.repeat.set(1,2),a}function l0(i,t,e){const n=String(t).split(/\s+/),r=[];let s="";for(const a of n){const o=s?`${s} ${a}`:a;i.measureText(o).width<=e?s=o:(s&&r.push(s),s=a)}return s&&r.push(s),r.length===0&&r.push(String(t)),r}function u0(i){i.fillStyle="#fff6dd",i.fillRect(0,0,1024,768),i.fillStyle="rgba(90, 50, 20, 0.05)";for(let t=0;t<80;t+=1)i.fillRect(t*97%1024,t*53%768,3,18);i.strokeStyle="#3b1d0c",i.lineWidth=28,i.strokeRect(18,18,988,732)}function h0(i,t){const e=Math.max(1,Math.min(10,Math.round(Number(t)||1))),n=e<=3?e:e<=6?3:e<=8?4:5,r=Math.ceil(e/n),s=["#c1121f","#2ec4b6","#f4d35e","#ff4d8d","#4d7cff","#e85d04","#7c4dff","#43a047"],a=880/n,o=640/r;for(let c=0;c<e;c+=1){const u=c%n,d=Math.floor(c/n),m=72+u*a+a/2,h=64+d*o+o/2,l=Math.min(a,o)*.34;i.fillStyle=s[c%s.length],i.strokeStyle="#140c08",i.lineWidth=Math.max(10,l*.12),i.beginPath(),i.ellipse(m,h-l*.08,l,l*1.12,0,0,Math.PI*2),i.fill(),i.stroke(),i.fillStyle="rgba(255,255,255,0.35)",i.beginPath(),i.ellipse(m-l*.28,h-l*.4,l*.22,l*.14,-.5,0,Math.PI*2),i.fill(),i.fillStyle="#140c08",i.beginPath(),i.arc(m-l*.22,h-l*.12,l*.1,0,Math.PI*2),i.arc(m+l*.22,h-l*.12,l*.1,0,Math.PI*2),i.fill(),i.lineWidth=Math.max(6,l*.08),i.beginPath(),i.arc(m,h+l*.12,l*.28,.15,Math.PI-.15),i.stroke()}}function Xs(i){const t=new na(i);return t.colorSpace=Oe,t.anisotropy=8,t.needsUpdate=!0,t}function d0(i,t,e=0,n=""){const{canvas:r,ctx:s}=zr(1024,768);u0(s);const a=String(i||"");if(!a)return h0(s,e),Xs(r);const o='"Nunito", "Noto Sans", "Noto Sans KR", "Noto Sans JP", "Noto Sans SC", "Noto Sans Arabic", "Noto Sans Thai", "Noto Sans Devanagari", sans-serif',c=780,u=520;let d=a.length<=4?200:150,m=[a];for(;d>=72;d-=6){s.font=`800 ${d}px ${o}`,m=l0(s,a,c);const l=m.some(v=>s.measureText(v).width>c),g=m.length*d*1.15;if(!l&&g<=u)break}s.font=`800 ${d}px ${o}`,s.textAlign="center",s.textBaseline="middle",s.lineJoin="round",s.miterLimit=2,s.lineWidth=Math.max(10,d*.07),s.strokeStyle="#fffaf0",s.fillStyle="#1a1008";const h=384-(m.length-1)*d*1.12/2;return m.forEach((l,g)=>{const v=h+g*d*1.12;s.strokeText(l,512,v),s.fillText(l,512,v)}),Xs(r)}function f0(i){const t=i%5,e=Math.floor(i/5);return{x:-.76+t*.38,y:.58+(1-e)*.42,z:.22+e*.12}}function p0(){const{canvas:i,ctx:t}=zr(1024,768),e=128;for(let n=0;n<768;n+=e)for(let r=0;r<1024;r+=e)t.fillStyle=(r+n)/e%2?"#c1121f":"#f4e8c1",t.fillRect(r,n,e,e);return t.strokeStyle="#3b1d0c",t.lineWidth=28,t.strokeRect(18,18,988,732),Xs(i)}function Jo(i){const t=Ko[i]||Ko.cowboy,e=new Ht,n=Dt(t.skin),r=Dt(t.shirt),s=Dt(t.pants),a=new re(1,16,12);e.add(At(new je(.12,.28,6,10),r,0,.55,0)),e.add(At(new je(.07,.28,4,8),s,-.06,.22,0)),e.add(At(new je(.07,.28,4,8),s,.06,.22,0));const o=At(new je(.045,.26,4,8),r,-.18,.62,.04);o.rotation.z=.55,o.rotation.x=-.4;const c=At(new je(.045,.26,4,8),n,.2,.7,.02);c.rotation.z=-1.15,e.add(o,c);const u=new Ht;u.position.set(0,.82,0),u.add(At(a,n,0,0,0,.12,.13,.12)),u.add(At(a,Dt(t.hair),0,.05,-.02,.13,.08,.13)),u.add(At(a,Dt(1708040),-.04,.02,.1,.016,.02,.014)),u.add(At(a,Dt(1708040),.04,.02,.1,.016,.02,.014));const d=At(new re(.03,8,6),Dt(6955056),0,-.05,.1,1,.5,1);if(d.visible=!1,u.add(d),t.hat==="cowboy"){u.add(At(new $t(.2,.2,.02,20),Dt(t.accent),0,.1,0)),u.add(At(new $t(.09,.11,.12,14),Dt(t.accent),0,.17,0));const m=At(new Qe(.035,.01,6,10,Math.PI),Dt(t.hair),0,-.03,.1);m.rotation.x=1.2,u.add(m)}else if(t.hat==="bandana"){u.add(At(a,Dt(t.accent),0,.08,0,.13,.05,.13));const m=At(new In(.035,10),Dt(1708040),-.04,.02,.115);u.add(m);const h=At(new Qe(.02,.005,6,10),Dt(16044894),.11,-.02,.02);h.rotation.y=1.2,u.add(h)}else if(t.hat==="bow")u.add(At(a,Dt(t.hair),0,.1,0,.14,.1,.14)),u.add(At(new re(.05,10,8),Dt(t.accent),-.08,.16,.04)),u.add(At(new re(.05,10,8),Dt(t.accent),.08,.16,.04));else if(t.hat==="visor"){const m=At(new vt(.2,.03,.1),Dt(t.accent,{emissive:t.accent,emissiveIntensity:.4}),0,.05,.08);u.add(m),u.add(At(new re(.03,8,6),Dt(16744619),-.11,-.01,.04)),u.add(At(new re(.03,8,6),Dt(8188159),.11,-.01,.04))}else if(t.hat==="beanie")u.add(At(new re(.13,12,10,0,Math.PI*2,0,Math.PI/2),Dt(t.accent),0,.08,0)),u.add(At(a,Dt(t.hair),0,-.06,.02,.09,.07,.08));else if(t.hat==="crystal"){u.add(At(new an(.12,.16,6),Dt(t.shirt),0,.18,0));const m=At(new re(.045,12,10),Dt(t.accent,{transparent:!0,opacity:.75,emissive:t.accent,emissiveIntensity:.5}),.16,-.22,.12);e.add(m);const h=At(a,Dt(t.hair),0,-.08,.04,.1,.08,.08);u.add(h)}else{const m=At(new In(.04,10),Dt(t.accent),0,.5,.13);e.add(m)}return e.add(u),e.userData.head=u,e.userData.mouth=d,e.userData.armR=c,e.userData.kind=i,e}function jo(i,t,e="ray"){n0(i,t,e)}function m0(i){return r0(i)}function Zo(i="ray"){return Zm(i)}function Qo(i){return 1-(1-i)**3}function g0(i){return i<.5?4*i*i*i:1-(-2*i+2)**3/2}function _0(i){const t=new mm({antialias:!0,alpha:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!1});t.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),t.setClearColor(591386,1),t.outputColorSpace=Oe,t.toneMapping=uc,t.toneMappingExposure=1.08,t.shadowMap.enabled=!0,t.shadowMap.type=cc,i.appendChild(t.domElement);const e=new gm;e.fog=new ea(591386,.038);const n=new Be(48,1,.08,80);e.add(n);let r={...Ps.harper};const s=c0(),a=Dt(16777215,{map:s,roughness:.72,metalness:.04}),o=Dt(4006415,{roughness:.78});let c=Dt(16777215,{map:Ls("#c1121f","#f4e8c1"),roughness:.65});const u=new Dm(5917336,4860436,.72);e.add(u);const d=new Om(12109055,.28);d.position.set(-4,8,2),e.add(d);const m=new Um(16769712,3.1,12,.6,.4,1);m.position.set(0,3.2,2.4),m.target.position.set(0,1.1,0),m.castShadow=!0,m.shadow.mapSize.set(1024,1024),e.add(m,m.target);const h=new Sr(16757575,.7,6);h.position.set(0,2.1,1.1),e.add(h);const l=new Sr(16731533,.45,5);l.position.set(-1.2,2.3,.4);const g=new Sr(8188159,.35,5);g.position.set(1.2,2.3,.4),e.add(l,g);const v=new Ht;v.visible=!1,e.add(v);const f=new Ue,p=new Float32Array(900);for(let T=0;T<300;T+=1)p[T*3]=(Math.random()-.5)*40,p[T*3+1]=4+Math.random()*18,p[T*3+2]=-8-Math.random()*22;f.setAttribute("position",new Ze(p,3)),v.add(new _m(f,new Bc({color:16774352,size:.06})));const S=At(new In(18,32),Dt(12755050,{roughness:.95}),0,0,0);S.rotation.x=-Math.PI/2,e.add(S);const _=new Ht;_.visible=!1,_.position.set(-6.5,3.4,-10),_.add(new ue(new Qe(1.6,.04,8,32),Dt(4862080,{emissive:2758728,emissiveIntensity:.3})));for(let T=0;T<8;T+=1){const D=T/8*Math.PI*2;_.add(At(new vt(.28,.22,.22),Dt(T%2?12653087:16044894),Math.cos(D)*1.6,Math.sin(D)*1.6,0));const k=At(new vt(.03,1.6,.03),Dt(6967432),0,0,0);k.rotation.z=D,_.add(k)}_.add(At(new vt(.12,2.2,.12),Dt(4006485),0,-2.2,0)),v.add(_);const w=jm(e),U=new Ht;e.add(U);const b=Dt(11028498,{roughness:.78}),A=At(new vt(2.55,2.15,.12),b,0,1.25,-.55);U.add(A),U.add(At(new vt(.16,2.2,.16),o,-1.22,1.2,-.4)),U.add(At(new vt(.16,2.2,.16),o,1.22,1.2,-.4)),U.add(At(new vt(2.5,.14,.7),a,0,.42,.15));const I=At(new vt(2.6,.5,.55),a,0,.16,.42);U.add(I);const y=new Ht;y.position.set(0,.42,.55),[-.78,.78].forEach((T,D)=>{const k=At(new vt(.28,.2,.22),Dt(D?12653087:13214247),T,.02,.04);y.add(k)}),U.add(y);const x=new Ht;x.position.set(0,2.32,.15);const L=At(new vt(2.6,.08,1.15),c,0,0,0);L.rotation.x=-.22,x.add(L);const G=[];for(let T=0;T<11;T+=1){const D=-1.2+T*.24,k=T%2?16050369:12653087,nt=At(new re(.09,10,8,0,Math.PI*2,0,Math.PI/2),Dt(k),D,-.12,.5);nt.rotation.x=Math.PI,x.add(nt),G.push(nt)}U.add(x);const z=new Ht;U.add(z);function Z(T){for(;z.children.length;)z.remove(z.children[0]);const D={fair:{wall:11028498,a:12653087,b:16050369},pond:{wall:1731208,a:16765503,b:3057880},forest:{wall:1718818,a:1332010,b:4006415},western:{wall:9062936,a:6042391,b:15246667},cabin:{wall:4006415,a:6962716,b:13214247},pirate:{wall:1323080,a:13214247,b:2060123}},k=D[T]||D.fair;if(A.material.color.setHex(k.wall),G.forEach((nt,K)=>nt.material.color.setHex(K%2?k.b:k.a)),T==="fair")z.add(At(new vt(.55,.32,.38),Dt(13214247),-1.05,.38,.72)),z.add(At(new vt(.5,.28,.34),Dt(14729290),1.08,.36,.7));else if(T==="pond")z.add(At(new vt(2.4,.18,1.1),Dt(9067054),0,.22,.55)),z.add(At(new vt(2.15,.08,.9),Dt(5157864,{roughness:.18}),0,.32,.55));else if(T==="forest"){const nt=At(new $t(.16,.16,.22,10),Dt(13214247),-1.12,.28,.62);nt.rotation.z=1.2,z.add(nt);const K=At(new $t(.16,.16,.22,10),Dt(14729290),1.12,.28,.62);K.rotation.z=-1.1,z.add(K)}else if(T==="cabin"){const nt=At(new $t(.12,.12,.7,10),Dt(6962716),-1.1,.34,.7);nt.rotation.z=1.2,z.add(nt),z.add(At(new $t(.22,.24,.18,12),Dt(6042391),1.05,.28,.7))}else T==="western"?(z.add(At(new vt(.06,.7,.06),Dt(6042391),-1.05,.55,.75)),z.add(At(new vt(.06,.7,.06),Dt(6042391),1.05,.55,.75)),z.add(At(new re(.08,10,8),Dt(16757575,{emissive:16747066,emissiveIntensity:1.1}),-1.05,.95,.75))):T==="pirate"&&(z.add(At(new vt(.55,.22,.4),Dt(13214247,{metalness:.55}),-1.05,.32,.7)),z.add(At(new vt(.5,.18,.36),Dt(14729290,{metalness:.5}),1.05,.3,.68)))}const Q=[];for(let T=0;T<14;T+=1){const D=T/13,k=-1.1+D*2.2,nt=2.08+Math.sin(D*Math.PI)*.08,K=.42,ht=[16757575,16731533,8188159,16044894][T%4],Et=At(new re(.035,10,8),Dt(ht,{emissive:ht,emissiveIntensity:1.2,roughness:.3}),k,nt,K);Et.castShadow=!1,Et.userData.phase=T*.7,U.add(Et),Q.push(Et)}const Y=new Ht;Y.position.set(0,2.46,.35),Y.add(At(new vt(1.35,.28,.05),o,0,0,0));const tt=new ue(new $n(1.28,.22),new mi({color:16180932}));tt.position.z=.03,Y.add(tt),U.add(Y);function $(T){const D=d0(T||"");tt.material.map&&tt.material.map.dispose(),tt.material.map=D,tt.material.needsUpdate=!0}let st=Jo("ray");st.position.set(-.92,.18,.55),st.rotation.y=.48,st.scale.setScalar(.92),e.add(st);const Mt=.18;let ut=Zo("ray");ut.position.set(1.6,1.7,1.4),ut.visible=!1,e.add(ut);let Ct=null;const zt=new Ht;jo(zt,"beanbags","ray");function J(T){const D={bow:[.12,-.24,-.82,.15,-.35,-.2,1.25],water:[.11,-.22,-.8,.1,-.3,0,1.15],gun:[.12,-.22,-.8,.08,-.25,0,1.2],axe:[.12,-.2,-.78,.25,-.3,.15,1.35],parrot:[.11,-.2,-.76,.1,-.2,.05,1.05],beanbags:[.12,-.22,-.8,.3,-.2,.1,1.15]}[T]||[.12,-.22,-.8,.3,-.2,.1,1.15],[k,nt,K,ht,Et,ne,ee]=D;zt.position.set(k,nt,K),zt.rotation.set(ht,Et,ne),zt.scale.setScalar(ee)}J("beanbags"),n.add(zt);const it=[],O=[],V=[],ot=[],pt=[],bt=[];let C="beanbags",It="fair",Tt=null;function jt(){V.forEach(D=>e.remove(D)),V.length=0;const T=Math.max(1,i0(C));for(let D=0;D<T;D+=1){const k=m0(C);k.visible=!1,e.add(k),V.push(k)}Tt&&(e.remove(Tt),Tt=null),C==="gun"&&(Tt=new Sr(16761933,0,2.4),e.add(Tt))}jt();const Pt=new re(.012,6,5),Zt=Dt(8050687,{transparent:!0,opacity:.8});for(let T=0;T<20;T+=1){const D=new ue(Pt,Zt);D.visible=!1,e.add(D),ot.push({mesh:D,v:new P,life:0})}const Yt=new oa(.03,0),Wt=Dt(16769162,{emissive:16761933,emissiveIntensity:1.4,roughness:.25});for(let T=0;T<28;T+=1){const D=new ue(Yt,Wt);D.visible=!1,e.add(D),pt.push({mesh:D,v:new P,life:0})}const xe=[12653087,16044894,3065014,16731533,16777215];for(let T=0;T<40;T+=1){const D=new ue(new $n(.04,.07),new mi({color:xe[T%5],side:en}));D.visible=!1,e.add(D),bt.push({mesh:D,v:new P,life:0,spin:Math.random()})}for(let T=0;T<o0;T+=1){const D=f0(T),k=new Ht;k.position.set(D.x,D.y,D.z);const nt=At(new vt(.54,.04,.28),a,0,0,.04);k.add(nt);const K=new Ht;k.add(K);const ht=At(new vt(.5,.36,.05),a,0,.2,-.04);ht.rotation.x=-.12,ht.visible=!1,K.add(ht);const Et=new ue(new $n(.46,.32),new mi({color:16180932}));Et.position.set(0,.28,.08),Et.rotation.x=-.08,Et.visible=!1,K.add(Et);const ne=new Ht;ne.position.set(0,.02,.1),K.add(ne);const ee=new Ht;ee.position.set(0,.2,-.01),ee.rotation.x=-.12,ee.visible=!1,K.add(ee);const se=new ue(new re(.24,10,8),new mi({visible:!1}));se.position.set(0,.22,.12),K.add(se),O.push(se),k.userData={fly:K,face:Et,toyRoot:ne,extras:ee,hit:se,down:!1,anim:null,dir:T%2===0?1:-1,spec:null},U.add(k),it.push(k)}const R=new Bm,M=new xt,W=new P,et=new P,rt=new P;let q=null,Rt=0,dt=0,ct={kind:"idle",t:0},Vt=!1,at=0;function yt(T){for(;T.children.length;){const D=T.children[0];T.remove(D),D.traverse(k=>{k.material&&k.material.map&&(k.material.map.dispose(),k.material.dispose())})}}function Kt(T){const{face:D,extras:k,toyRoot:nt}=T.userData;D.material.map&&D.material.map.dispose(),D.material.map=p0(),D.material.needsUpdate=!0,D.visible=!1,k.visible=!1,nt&&(nt.visible=!0)}function Nt(T,D){const k=T.userData.toyRoot;yt(k);const nt=D();nt.scale.multiplyScalar(1.15),k.add(nt),k.rotation.set(0,0,0),k.position.set(0,.02,.1),k.visible=!0,T.userData.down=!1}function mt(T){const D=T.userData.fly;D.visible=!0,D.position.set(0,0,0),D.rotation.set(0,0,0),D.scale.setScalar(1),T.userData.toyRoot.rotation.set(0,0,0),T.userData.toyRoot.position.set(0,.02,.1),T.userData.toyRoot.visible=!0,T.userData.face.visible=!1}function kt(T){return it.find(D=>D.userData.spec&&D.userData.spec.uid===T)}function Jt(T,D=C){const k=s0(D);ot.forEach((nt,K)=>{nt.mesh.visible=!0,nt.mesh.material.color.setHex(k),nt.mesh.position.copy(T);const ht=K/ot.length*Math.PI*2;nt.v.set(Math.cos(ht)*.5,.7+Math.random()*.4,Math.sin(ht)*.5),nt.life=.32+Math.random()*.1})}function ge(T){pt.forEach((D,k)=>{D.mesh.visible=!0,D.mesh.position.copy(T);const nt=k/pt.length*Math.PI*2;D.v.set(Math.cos(nt)*.8,1.1+Math.random()*.8,Math.sin(nt)*.5),D.life=.55})}let N="fair";function gt(){const T=i.clientWidth||window.innerWidth,D=i.clientHeight||window.innerHeight;t.setSize(T,D,!1),n.aspect=T/Math.max(1,D);const k=n.aspect<.7;N==="forest"?(n.fov=k?56:46,n.position.set(0,1.42,4.35),n.lookAt(0,.98,.28)):(n.fov=k?58:46,n.position.set(0,k?1.32:1.26,k?4.25:3.55),n.lookAt(0,.98,.18)),n.near=.12,n.updateProjectionMatrix()}gt();const j={renderer:t,scene:e,camera:n,dom:t.domElement,setSign:$,setVoice(T){r={...Ps[T]||Ps.harper},c.map=Ls(T==="cowboy"?"#a84812":"#c1121f",T==="cowboy"?"#f0d9a0":"#f4e8c1"),c.map.needsUpdate=!0,h.color.setHex(r.lightA),l.color.setHex(r.lightB),g.color.setHex(r.lightC)},setRound(T){const D=T&&T.ammo||"beanbags",k=T&&T.look||T&&T.carny||"ray",nt=T&&T.theme||"fair";C=D,It=nt,N=nt,jo(zt,D,k),J(D),jt(),e.remove(st),st=Jo(k),st.position.set(-1.38,Mt,.92),st.rotation.y=.55,st.scale.setScalar(.88),e.add(st),e.remove(ut),ut=Zo(k),ut.position.set(1.6,1.7,1.4),ut.scale.setScalar(1.35),e.add(ut);const K=w.show(nt);if(t.setClearColor(K.clear,1),e.fog.color.setHex(K.fog),e.fog.density=K.fogD,u.color.setHex(K.hemiSky),u.groundColor.setHex(K.hemiGround),u.intensity=K.hemi,d.color.setHex(K.sun),d.intensity=K.sunI,h.color.setHex(K.fill),l.color.setHex(K.accentA),g.color.setHex(K.accentB),S.material.color.setHex(K.ground),c.map=Ls(K.stripe[0],K.stripe[1]),c.map.needsUpdate=!0,typeof document<"u"&&document.documentElement.setAttribute("data-arena",nt),y.visible=nt==="fair",Y.visible=!1,x.visible=nt==="fair",Q.forEach(ht=>{ht.visible=nt==="fair"}),A.visible=nt==="fair"||nt==="western"||nt==="cabin",Z(nt),k==="pirate"){const ht=Br();ht.scale.setScalar(2.2),ht.position.set(.16,.86,.08),st.add(ht)}gt()},setCards(T){Vt=!1,Ct=null,ut.visible=!1;const D=[0,1,2,3,4,5,6,7,8,9];for(let k=D.length-1;k>0;k-=1){const nt=Math.floor(Math.random()*(k+1));[D[k],D[nt]]=[D[nt],D[k]]}it.forEach((k,nt)=>{const K=T[nt]||null;k.visible=!!K,k.userData.spec=K,k.userData.hit.userData.uid=K?K.uid:null,k.userData.down=!1,k.userData.anim=null,mt(k),K&&(k.userData.face.visible=!1,Nt(k,()=>Rs(It)),k.userData.toyRoot.visible=!0)})},pick(T,D){const k=t.domElement.getBoundingClientRect();M.x=(T-k.left)/k.width*2-1,M.y=-((D-k.top)/k.height)*2+1,R.setFromCamera(M,n);const nt=R.intersectObjects(O,!1);for(const K of nt){const ht=K.object.userData.uid;if(ht)return ht}return null},worldOf(T){const D=it.find(k=>k.userData.spec&&k.userData.spec.uid===T);return D?(D.userData.hit.getWorldPosition(W),W.clone()):null},sprayTo(T,D){const k=j.worldOf(T);if(!k){D&&D();return}zt.userData.nozzle?zt.userData.nozzle.getWorldPosition(rt):zt.getWorldPosition(rt),q={t:0,dur:a0(C),from:rt.clone(),to:k,onHit:D,done:!1,ammo:C},Rt=C==="gun"?1.4:1,Tt&&(Tt.position.copy(rt),Tt.intensity=6),W.copy(k),n.worldToLocal(W),zt.rotation.x=.22+Math.atan2(-W.y-.2,.6)*.25,zt.rotation.y=Math.atan2(-W.x,.7)*.32},knockDown(T){const D=kt(T);if(!D||D.userData.down)return;D.userData.down=!0,D.userData.toyRoot.visible=!1,D.userData.face.visible=!1;const k=j.worldOf(T);k&&ge(k),dt=C==="gun"||C==="axe"?.7:.35},spinOff(T){const D=kt(T);if(!D||D.userData.down)return;D.userData.down=!0,D.userData.face.visible=!1;const k=D.userData.fly,nt=D.userData.dir,K=new P;k.getWorldPosition(K);const ht=k.clone(!0);e.add(ht),ht.position.copy(K),ht.quaternion.copy(k.getWorldQuaternion(new Ri)),ht.scale.copy(k.scale),k.visible=!1,D.userData.anim={kind:"spinout",t:0,dur:.72,mesh:ht,fromP:K.clone(),toP:K.clone().add(new P(nt*2.6,1.85,1.55)),spinX:nt*Math.PI*4.2,spinY:nt*Math.PI*3.1,spinZ:nt*4.4},dt=C==="gun"||C==="axe"?.85:.45},popUp(T){const D=kt(T);D&&(D.userData.down=!1,D.userData.face.visible=!1,Nt(D,()=>Rs(It)))},handReturn(T){const D=(T||[]).map(kt).filter(Boolean);D.length&&(Ct={t:0,phase:"in",durIn:.55,durPlace:.95,durOut:.5,slots:D,index:0},ut.visible=!0,ut.position.set(1.7,2.05,1.85),ut.rotation.set(-.35,-.55,.15),D.forEach(k=>{const nt=k.userData.fly;k.userData.anim={kind:"spinback",t:0,dur:1.15,fromP:nt.position.clone(),toP:new P(0,0,0),fromX:nt.rotation.x,fromY:nt.rotation.y,fromZ:nt.rotation.z}}))},sparkle(T){(T||[]).forEach(D=>{const k=j.worldOf(D);k&&ge(k)})},carnyHit(){ct={kind:"hit",t:0}},carnyMiss(){ct={kind:"miss",t:0},st.userData.mouth&&(st.userData.mouth.visible=!0)},celebrate(){Vt=!0,ct={kind:"win",t:0},bt.forEach(T=>{T.mesh.visible=!0,T.mesh.position.set((Math.random()-.5)*1.6,2.2+Math.random(),.4+Math.random()*.4),T.v.set((Math.random()-.5)*.6,.2+Math.random()*.4,(Math.random()-.5)*.3),T.life=2.5+Math.random()})},resize:gt,render(T){if(at+=T,Tt&&Tt.intensity>0&&(Tt.intensity=Math.max(0,Tt.intensity-T*18)),_.rotation.z+=T*.18,Q.forEach(K=>{const ht=.85+.35*Math.sin(at*6+K.userData.phase);K.material.emissiveIntensity=ht}),y.children.forEach((K,ht)=>{K.rotation.y=Math.sin(at*1.4+ht)*.2}),st&&st.userData.head&&(st.position.y=Mt+Math.sin(at*2.3)*.015,st.rotation.y=.48+Math.sin(at*1.1)*.08,st.userData.head.rotation.z=Math.sin(at*1.4)*.05,st.userData.armR.rotation.z=-1.15+Math.sin(at*2.1)*.15,ct.t+=T,ct.kind==="miss"?(st.userData.head.rotation.x=-.2+Math.sin(ct.t*18)*.08,ct.t>.9&&(ct.kind="idle",st.userData.mouth.visible=!1,st.userData.head.rotation.x=0)):ct.kind==="hit"?(st.userData.head.rotation.x=.12,st.userData.armR.rotation.z=-2.1,ct.t>.7&&(ct.kind="idle",st.userData.head.rotation.x=0)):ct.kind==="win"&&(st.position.y=Mt+Math.abs(Math.sin(at*8))*.08,st.userData.armR.rotation.z=-2.2)),it.forEach(K=>{const ht=K.userData.anim;if(!ht)return;ht.t+=T;const Et=Math.min(1,ht.t/ht.dur),ne=K.userData.fly;if(ht.kind==="spinout"){const ee=Qo(Et),se=ht.mesh||ne;se.position.lerpVectors(ht.fromP,ht.toP,ee),se.rotation.set(ht.spinX*ee,ht.spinY*ee,ht.spinZ*ee),se.scale.setScalar(1+ee*.2)}else if(ht.kind==="spinback"){const ee=g0(Et);ne.position.lerpVectors(ht.fromP,ht.toP,ee),ne.rotation.set(ht.fromX*(1-ee),ht.fromY*(1-ee),ht.fromZ*(1-ee))}Et>=1&&(ht.kind==="spinback"?(mt(K),K.userData.down=!1,Kt(K),Nt(K,()=>Rs(It))):ht.kind==="spinout"&&(ne.visible=!1,ht.mesh&&e.remove(ht.mesh)),K.userData.anim=null)}),Ct){Ct.t+=T;const K=Ct.slots,ht=K[0]?K[0].localToWorld(K[0].userData.fly.position.clone()):new P(0,1.2,.4);if(K[1]){const Et=K[1].localToWorld(K[1].userData.fly.position.clone());ht.lerp(Et,.5)}if(Ct.phase==="in"){const Et=Math.min(1,Ct.t/Ct.durIn);ut.position.lerpVectors(new P(1.55,1.85,1.55),ht.clone().add(new P(.15,.12,.2)),Qo(Et)),ut.lookAt(ht),Et>=1&&(Ct.phase="place",Ct.t=0)}else if(Ct.phase==="place"){const Et=Math.min(1,Ct.t/Ct.durPlace);ut.position.copy(ht).add(new P(.12,.1,.18)),ut.lookAt(ht),ut.rotation.z+=Math.sin(Et*Math.PI)*.02,Et>=1&&(Ct.phase="out",Ct.t=0)}else{const Et=Math.min(1,Ct.t/Ct.durOut);ut.position.lerp(new P(1.7,1.9,1.7),Et),Et>=1&&(ut.visible=!1,Ct=null)}}if(Rt=Math.max(0,Rt-T*4),J(C),zt.position.z+=Rt*.03,q){q.t+=T;const K=Math.min(1,q.t/q.dur),ht=q.ammo==="beanbags"||q.ammo==="parrot"||q.ammo==="axe",Et=q.ammo==="bow"||q.ammo==="gun";V.forEach((ne,ee)=>{const se=V.length===1?K:Math.max(0,K*1.15-ee*.08);if(se<=0||se>1){ne.visible=!1;return}ne.visible=!0;const Di=Et?.02:ht?.18:.12;et.set((q.from.x+q.to.x)/2,Math.max(q.from.y,q.to.y)+Di,(q.from.z+q.to.z)/2);const Ve=1-se;ne.position.set(Ve*Ve*q.from.x+2*Ve*se*et.x+se*se*q.to.x,Ve*Ve*q.from.y+2*Ve*se*et.y+se*se*q.to.y,Ve*Ve*q.from.z+2*Ve*se*et.z+se*se*q.to.z),q.ammo==="axe"?ne.rotation.z+=T*16:q.ammo==="beanbags"||q.ammo==="parrot"?ne.rotation.x+=T*10:ne.rotation.y+=T*8}),K>=1&&!q.done&&(q.done=!0,Jt(q.to,q.ammo),q.onHit&&q.onHit()),q.t>q.dur+.12&&(V.forEach(ne=>{ne.visible=!1}),q=null)}ot.forEach(K=>{K.mesh.visible&&(K.life-=T,K.v.y-=4.5*T,K.mesh.position.addScaledVector(K.v,T),K.life<=0&&(K.mesh.visible=!1))}),pt.forEach(K=>{K.mesh.visible&&(K.life-=T,K.v.y-=2.2*T,K.mesh.position.addScaledVector(K.v,T),K.mesh.rotation.y+=T*8,K.life<=0&&(K.mesh.visible=!1))}),bt.forEach(K=>{K.mesh.visible&&(K.life-=T,K.v.y-=1.6*T,K.mesh.position.addScaledVector(K.v,T),K.mesh.rotation.x+=T*(2+K.spin),K.life<=0&&(K.mesh.visible=!1))});const D=dt*.01;dt=Math.max(0,dt-T*3);const k=n.position.x,nt=n.position.y;D&&(n.position.x+=(Math.random()-.5)*D,n.position.y+=(Math.random()-.5)*D),Vt&&Q.forEach((K,ht)=>{K.material.emissiveIntensity=1.2+Math.sin(at*12+ht)*.8}),t.render(e,n),n.position.x=k,n.position.y=nt},debugUids(){return it.map(T=>T.userData.spec?T.userData.spec.uid:null).filter(Boolean)},debugHits(){return it.map(T=>{const D=T.userData.spec;if(!D)return null;const k=new P;T.userData.hit.getWorldPosition(k),k.project(n);const nt=t.domElement.getBoundingClientRect();return{uid:D.uid,face:D.face,animal:D.animal||"",x:(k.x*.5+.5)*nt.width+nt.left,y:(-k.y*.5+.5)*nt.height+nt.top}}).filter(Boolean)},dispose(){t.dispose(),t.domElement.parentNode&&t.domElement.parentNode.removeChild(t.domElement)}};return j}const Ds="3.0.0",Kn="memory-match",qs="carnival-booth",gn=6,v0=2100,x0="mrj.play_mode",Xc="mrj.leaderboard.v1",qc="mrj.student.queue.v1",Yc="mrj.ui_locale",$c="mrj.voice",Kc="mrj.player_name",M0="./packs/animals-1-10.json",S0="./packs/ui-l1.json",pi="harper",Ys=[{id:"harper",label:"Miss Harper"},{id:"ray",label:"Coach Ray"},{id:"june",label:"Grandma June"},{id:"walt",label:"Grandpa Walt"},{id:"maya",label:"Maya"},{id:"leo",label:"Leo"},{id:"cowboy",label:"Cowboy"},{id:"nia",label:"Nia"},{id:"pirate",label:"Captain Pop"},{id:"car",label:"The Car"}],tc=[{index:1,ammo:"beanbags",carny:"ray",look:"ray",label:"Bean bags",carnyName:"Coach Ray",theme:"fair"},{index:2,ammo:"water",carny:"nia",look:"nia",label:"Water gun",carnyName:"Nia",theme:"pond"},{index:3,ammo:"bow",carny:"walt",look:"walt",label:"Bow",carnyName:"Grandpa Walt",theme:"forest"},{index:4,ammo:"gun",carny:"cowboy",look:"cowboy",label:"Shooting gallery",carnyName:"Dusty",theme:"western"},{index:5,ammo:"axe",carny:"june",look:"june",label:"Axe throw",carnyName:"Grandma June",theme:"cabin"},{index:6,ammo:"parrot",carny:"pirate",look:"pirate",label:"Parrot toss",carnyName:"Captain Pop",theme:"pirate"}],y0=[{index:1,a:"picture",b:"audio"},{index:2,a:"picture",b:"word"},{index:3,a:"audio",b:"word"},{index:4,a:"audio",b:"meaning"},{index:5,a:"meaning",b:"word"},{index:6,a:"meaning",b:"audio"}];function Li(){try{if(typeof localStorage<"u")return localStorage}catch{}return null}function E0(i=typeof location<"u"?location.search:""){const e=new URLSearchParams(i).get("pack");return e&&e.trim()?e.trim():M0}function w0(i=typeof location<"u"?location.search:""){const t=new URLSearchParams(i);return t.get("student")||t.get("student_id")||"local-student"}async function Is(i){const t=await fetch(i,{cache:"no-store"});if(!t.ok)throw new Error(`Load failed (${t.status}): ${i}`);return t.json()}function b0(i){if(!i||typeof i!="object")throw new Error("Invalid pack");if(!Array.isArray(i.items)||i.items.length===0)throw new Error("Invalid pack: items[] required");for(const t of i.items){if(!t||!t.id)throw new Error("Invalid pack item: id required");if(!t.en)throw new Error(`Invalid pack item ${t.id}: en required`)}return!0}function Jc(i,t=Math.random){const e=i.slice();for(let n=e.length-1;n>0;n-=1){const r=Math.floor(t()*(n+1));[e[n],e[r]]=[e[r],e[n]]}return e}function ec(i="id"){return typeof crypto<"u"&&crypto.randomUUID?`${i}_${crypto.randomUUID()}`:`${i}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,10)}`}function he(i){return String(i??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function ki(i){const t=Math.max(0,Math.floor(Number(i)||0)),e=Math.floor(t/6e4),n=Math.floor(t%6e4/1e3),r=Math.floor(t%1e3/10);return`${e}:${String(n).padStart(2,"0")}.${String(r).padStart(2,"0")}`}function jc(i){return i&&i.n!=null&&i.n!==""?String(i.n):""}function la(i,t){const e=i&&i.l1||{};return t&&e[t]?String(e[t]):""}function T0(i,t){if(t&&t!=="en"){const e=la(i,t);if(e)return{kind:"l1",text:e}}return{kind:"digit",text:jc(i)}}function A0(i,t,e){const n=i&&i.n!=null?Number(i.n):0,r=i&&i.audio_id||"",s=i&&(i.animal||i.id)||"";if(t==="meaning"){const a=T0(i,e);return{kind:a.kind,text:a.text,n,audioId:r,animal:s}}return t==="word"?{kind:"word",text:i.en?String(i.en):"",n,audioId:r,animal:s}:t==="audio"?{kind:"audio",text:"",n,audioId:r,animal:s}:t==="picture"?{kind:"picture",text:"",n,audioId:r,animal:s}:t==="digit"?{kind:"digit",text:jc(i),n,audioId:r}:t==="l1"?{kind:"l1",text:la(i,e),n,audioId:r}:{kind:t||"word",text:"",n,audioId:r}}function mn(i){const t=y0[i-1];if(!t)throw new Error(`Round ${i} out of range (1–${gn})`);const e=tc[i-1]||tc[0];return{...t,...e}}function R0(i){const t=mn(i);return`lesson_${t.a}_${t.b}`}function C0(i){const t=i&&i.heat_pairs;return Number(t)>0?Number(t):5}function P0(i,t){const e=Array.isArray(i&&i.skill_tags)?i.skill_tags:[],n=Array.isArray(t&&t.skill_tags)?t.skill_tags:[];return[...e,...n]}function nc(i,t=Math.random){const e=C0(i),n=e*2,r=Jc(i.items||[],t);if(r.length<n)throw new Error(`Pack needs ${n} items for two heats, found ${r.length}`);return{heatA:r.slice(0,e),heatB:r.slice(e,n),heatPairs:e}}function Us(i,t,e,n,r=Math.random){const s=[];for(const a of i)for(const o of[t.a,t.b]){const c=A0(a,o,e);s.push({uid:`${a.id}::${o}::${c.kind}`,itemId:a.id,role:o,face:c.kind,text:c.text,n:c.n,audioId:c.audioId,animal:c.animal||a.animal||a.id,l1:la(a,e),skill_tags:P0(n,a),down:!1})}return Jc(s,r).map((a,o)=>({...a,slot:o}))}function ic(i,t){return!i||!t||i.uid===t.uid||i.itemId!==t.itemId?!1:i.role!==t.role}function Ns(i){if(i==null)return null;const t=String(i).trim();return!t||t.toLowerCase()==="null"?null:/^(https?:)?\/\//i.test(t)||t.startsWith("data:")||t.startsWith("blob:")||t.startsWith("./")||t.startsWith("/")?t:/\.[a-z0-9]{2,4}$/i.test(t)?`./audio/${t}`:`./audio/${t}.mp3`}function L0(i,t,e){const n=i&&i.strings||{},r=n[t]||{};return r[e]!=null?String(r[e]):n.en&&n.en[e]!=null?String(n.en[e]):e}function D0(i,t){return(i&&i.locales||[]).find(n=>n&&n.code===t)||{code:t,label:t,rtl:!1}}function kr(i,t){const e=Li();if(e)try{e.setItem(i,t)}catch{}}function ua(i,t=""){const e=Li();if(!e)return t;try{const n=e.getItem(i);return n??t}catch{return t}}function I0(i="en"){return ua(Yc,i)||i}function U0(i){kr(Yc,i)}function N0(i="harper"){const t=ua($c,i);return Ys.some(e=>e.id===t)?t:i}function rc(i){kr($c,i)}function F0(i="Player"){return ua(Kc,i)||i}function sc(i){kr(Kc,i)}function O0(){try{if(typeof location<"u"){const i=new URLSearchParams(location.search);if((i.get("mode")||"").toLowerCase()==="maker"||i.get("maker")==="1")return"maker"}}catch{}return"student"}function Fs(i){kr(x0,i==="maker"?"maker":"student")}function Zc(){const i=Li();if(!i)return[];try{const t=JSON.parse(i.getItem(Xc)||"[]");return Array.isArray(t)?t:[]}catch{return[]}}function B0({module_id:i,name:t,total_ms:e,rounds:n,at:r}={}){const s={module_id:i||Kn,name:t&&String(t).trim()||"Player",total_ms:Math.max(0,Math.round(Number(e)||0)),rounds:Number(n)||gn,at:r||new Date().toISOString()},a=Zc();a.push(s);const o=Li();if(o)try{o.setItem(Xc,JSON.stringify(a))}catch{}return s}function z0(i=Kn){return Zc().filter(t=>t&&t.module_id===i).slice().sort((t,e)=>t.total_ms-e.total_ms||String(t.at).localeCompare(String(e.at))).slice(0,10)}function k0(){const i=Li();if(!i)return[];try{const t=JSON.parse(i.getItem(qc)||"[]");return Array.isArray(t)?t:[]}catch{return[]}}function H0(i){const t=Li();if(t)try{t.setItem(qc,JSON.stringify(i.slice(-2e3)))}catch{}}function G0({studentId:i="local-student",sessionId:t,uiLocale:e="en"}={}){const n=k0();function r(s={}){const a={student_id:i,session_id:t,module_id:Kn,activity_id:qs,item_id:"",skill_tags:[],response:"",correct:!1,latency_ms:0,accuracy:0,points:0,errors:0,started_at:new Date().toISOString(),ended_at:new Date().toISOString(),ui_locale:e,round_index:0,total_ms:0,...s};return n.push(a),H0(n),console.log("[memory-match record]",a),typeof window<"u"&&window.dispatchEvent(new CustomEvent("mrj-memory-match-record",{detail:a})),a}return{emit:r,queue:n,setLocale(s){e=s},setSession(s){t=s}}}function V0(){let i=null,t=null,e=null,n=!1,r="cowboy";const s=new Map,a=new Map;let o=null;function c(){if(i)return i.state==="suspended"&&i.resume().catch(()=>{}),i;const f=window.AudioContext||window.webkitAudioContext;if(!f)return null;i=new f,t=i.createGain(),t.gain.value=.78,t.connect(i.destination),e=i.createGain(),e.gain.value=1,e.connect(t);const p=i.createBuffer(1,i.sampleRate,i.sampleRate),S=p.getChannelData(0);for(let _=0;_<S.length;_+=1)S[_]=Math.random()*2-1;return o=p,i}async function u(f){const p=Ns(f);if(!p)return null;if(s.has(f))return s.get(f);if(a.has(f))return a.get(f);const S=(async()=>{const _=c();if(!_)return null;try{const w=await fetch(p);if(!w.ok)return null;const U=await w.arrayBuffer(),b=await _.decodeAudioData(U.slice(0));return s.set(f,b),b}catch{return null}})();return a.set(f,S),S}function d(f,p=1,S=1){if(n||!f)return!1;const _=c();if(!_||!e)return!1;const w=_.createBufferSource(),U=_.createGain();return w.buffer=f,w.playbackRate.value=S,U.gain.value=p,w.connect(U),U.connect(e),w.start(),!0}async function m(f,p=1){if(n||!f)return!1;const S=c();if(S)try{const _=await fetch(f);if(_.ok){const w=await S.decodeAudioData((await _.arrayBuffer()).slice(0));if(d(w,p))return!0}}catch{}try{const _=new Audio(f);return _.volume=Math.min(1,p),await _.play(),!0}catch{return!1}}async function h(f,p=1){if(n||!f)return!1;const S=await u(f);if(S&&d(S,p))return!0;const _=Ns(f);if(!_)return!1;try{const w=new Audio(_);return w.volume=Math.min(1,p),await w.play(),!0}catch{return!1}}async function l(f,p=.95){const S=Math.random()<.5?"1":"2",_=f==="round"||f==="win"?`carnies/${r}-${f==="win"?"hit-2":"round"}`:`carnies/${r}-${f}-${S}`;if(await h(_,p))return!0;const w=f==="win"?"carnies/booth-win":f==="round"?"carny-round":f==="hit"?`carny-hit-${S}`:`carny-miss-${S}`;return h(w,p)}function g(f,p,S,_,w=0,U=0){if(n)return;const b=c();if(!b||!e)return;const A=b.currentTime+w,I=b.createOscillator(),y=b.createGain();I.type=S,I.frequency.setValueAtTime(f,A),U&&I.frequency.exponentialRampToValueAtTime(Math.max(40,f+U),A+p),y.gain.setValueAtTime(1e-4,A),y.gain.exponentialRampToValueAtTime(_,A+.012),y.gain.exponentialRampToValueAtTime(1e-4,A+p),I.connect(y),y.connect(e),I.start(A),I.stop(A+p+.02)}function v(f,p,S=0,_=400,w=2400){if(n)return;const U=c();if(!U||!e||!o)return;const b=U.currentTime+S,A=U.createBufferSource();A.buffer=o,A.loop=!0;const I=U.createBiquadFilter();I.type="bandpass",I.frequency.setValueAtTime(w,b),I.frequency.exponentialRampToValueAtTime(_,b+f),I.Q.value=.7;const y=U.createGain();y.gain.setValueAtTime(p,b),y.gain.exponentialRampToValueAtTime(1e-4,b+f),A.connect(I),I.connect(y),y.connect(e),A.start(b),A.stop(b+f+.02)}return{unlock(){c()},setCarny(f){r=f||"cowboy"},preload(f){return Promise.all((f||[]).map(p=>u(p)))},playFile:h,word(f,p="harper"){const S=String(f||"").replace(/\.mp3$/i,"");if(!S)return Promise.resolve({ok:!1,fallback:!0});const _=[];return p&&p!=="harper"&&_.push(`./audio/voices/${p}/${S}.mp3`),_.push(Ns(S)),(async()=>{for(let w=0;w<_.length;w+=1){const U=_[w];if(!U)continue;if(await m(U,1))return{ok:!0,fallback:w>0}}return{ok:!1,fallback:!0}})()},carnyHit(){return l("hit",.95)},carnyMiss(){return l("miss",.95)},carnyRound(){return l("round",.92)},carnyWin(){return h("carnies/booth-win",1).then(f=>f||h("carny-win",1))},spray(){v(.2,.2,0,900,4200),g(180,.08,"sine",.04,0,-40)},suction(){g(220,.12,"sine",.07,0,80),v(.1,.12,0,400,1200)},pellet(){g(520,.05,"square",.04,0,-60),g(140,.08,"triangle",.05,.02)},bubbles(){g(640,.08,"sine",.04,0,120),g(880,.1,"sine",.03,.05,80)},beanbag(){v(.12,.18,0,200,800),g(90,.1,"triangle",.07,0)},petals(){g(740,.1,"sine",.035,0),g(980,.12,"triangle",.03,.04)},axe(){v(.14,.22,0,120,700),g(70,.14,"triangle",.1,0,-20)},gunshot(){v(.09,.55,0,180,2200),g(90,.12,"square",.22,0,-40),g(160,.06,"sawtooth",.12,.01,-80)},glass(){v(.22,.45,0,800,5200),v(.16,.3,.04,400,2800),g(1800,.08,"square",.06,0,-800),g(900,.12,"triangle",.05,.03,-400)},squeak(){g(2400,.07,"sine",.08,0,-600),g(1800,.09,"sine",.06,.05,-400)},balloonPop(){v(.18,.4,0,600,3600),g(140,.1,"sine",.08,0,-60),this.splash()},bow(){g(240,.08,"triangle",.06,0,40),v(.08,.1,0,600,1800)},fire(f){return f==="beanbags"?this.beanbag():f==="water"?this.spray():f==="parrot"?this.squeak():f==="axe"?this.axe():f==="bow"?this.bow():f==="gun"?this.gunshot():this.beanbag()},splash(){v(.16,.24,0,500,2800),g(220,.09,"sine",.05,0,-80)},thump(){g(72,.12,"sine",.12,0,-30),g(140,.08,"triangle",.05,.01)},pop(){g(320,.07,"square",.04,0,80),g(190,.1,"sine",.05,.02)},sparkle(){g(880,.08,"sine",.04,0),g(1320,.1,"triangle",.035,.04),g(1760,.12,"sine",.03,.08)},haptic(f=14){try{navigator.vibrate&&navigator.vibrate(f)}catch{}},setMuted(f){n=!!f}}}const W0={cat:"./pics/cat.jpg",dog:"./pics/dog.jpg",bird:"./pics/bird.jpg",fish:"./pics/fish.jpg",horse:"./pics/horse.jpg",cow:"./pics/cow.jpg",pig:"./pics/pig.jpg",duck:"./pics/duck.jpg",frog:"./pics/frog.jpg",bear:"./pics/bear.jpg"};function X0(i){return W0[String(i||"").toLowerCase()]||null}const $s=document.getElementById("app");function q0(i){const t=document.createElement("div");return t.innerHTML=i.trim(),t.firstElementChild}async function Y0(){try{document.fonts&&document.fonts.ready&&await Promise.race([document.fonts.ready,new Promise(i=>setTimeout(i,1400))])}catch{}}function ac(){const i=z0(Kn);return i.length?`<ol>${i.map(t=>`<li><span>${he(t.name)}</span><span>${he(ki(t.total_ms))}</span></li>`).join("")}</ol>`:'<p class="empty">—</p>'}async function $0(){const i=E0(),t=S0,[e,n,r]=await Promise.all([Is(i),Is(t),Is("./packs/index.json").catch(()=>({packs:[]}))]);b0(e),await Y0();const s=_0($s);typeof window<"u"&&(window.__booth=s);const a=V0();s.setSign(e.title||""),s.setVoice(pi);const o=w0();let c=I0(e.default_ui_locale||"en");(n.locales||[]).some(O=>O.code===c)||(c="en");let u=F0("Player"),d=O0(),m=N0(pi);const h=q0(`<div class="hud">
    <div class="play-bar hidden" id="play-bar">
      <div class="ticket">
        <span><b class="k" id="lbl-ver">v</b><b class="v" id="hud-ver">${Ds}</b></span>
        <span><b class="k" id="lbl-round">R</b><b class="v" id="hud-round">1/6</b></span>
        <span><b class="k" id="lbl-ammo">Throw</b><b class="v" id="hud-ammo">Bean bags</b></span>
        <span><b class="k" id="lbl-rtime">⏱</b><b class="v" id="hud-rtime">0:00</b></span>
        <span><b class="k" id="lbl-total">Total</b><b class="v" id="hud-total">0:00</b></span>
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
  </div>`);$s.appendChild(h);const l={view:"start",pack:e,ui:n,locale:c,voice:m,playerName:u,playMode:d,sessionId:ec("session"),telemetry:null,round:1,heat:0,heats:null,cards:[],open:[],locked:!1,matched:0,roundStartedAt:0,completedMs:[],firstTapAt:0,heatStartedAt:0,pairStartedAt:0};function g(O){return L0(l.ui,l.locale,O)}function v(){const O=D0(l.ui,l.locale);document.documentElement.lang=l.locale,document.documentElement.setAttribute("dir",O.rtl?"rtl":"ltr"),document.documentElement.setAttribute("data-voice",l.voice||pi)}function f(){return(l.ui.locales||[]).map(O=>`<button type="button" class="lang-chip${O.code===l.locale?" on":""}" data-code="${he(O.code)}">${he(O.label)}</button>`).join("")}function p(){return(r.packs||[]).map(O=>`<button type="button" class="lang-chip${O.file===i?" on":""}" data-pack="${he(O.file)}">${he(O.title||O.file)}</button>`).join("")}function S(){return Ys.map(O=>`<button type="button" class="lang-chip${O.id===l.voice?" on":""}" data-voice="${he(O.id)}">${he(O.label)}</button>`).join("")}function _(){v(),h.querySelector("#start").classList.remove("hidden"),h.querySelector("#end").classList.add("hidden"),h.querySelector("#play-bar").classList.add("hidden");const V=l.playMode==="maker"?`<div class="mode-row">
          <button type="button" class="mode-btn" id="mode-student">Student</button>
          <button type="button" class="mode-btn on" id="mode-maker">Maker</button>
        </div>
        <p class="hint">Maker: skip heats and rounds while you test.</p>`:"";h.querySelector("#start").innerHTML=`
      <aside class="board-dock">
        <h2>${he(g("leaderboard"))}</h2>
        ${ac()}
      </aside>
      <div class="card">
        <div class="card-scroll">
          <p class="kicker">MRJ ENGLISH · v${Ds}</p>
          <h1>KNOCKDOWN</h1>
          <p class="sub">${he(e.title||"")}</p>
          <p class="lang-label">${he(g("pack"))}</p>
          <div class="lang-grid" id="pack-grid">${p()}</div>
          <p class="how">${he(g("how"))}</p>
          ${V}
          <div class="row solo">
            <label>Name
              <input id="name" type="text" maxlength="24" autocomplete="nickname" value="${he(l.playerName)}" />
            </label>
          </div>
          <p class="lang-label">${he(g("voice"))}</p>
          <div class="lang-grid" id="voice-grid">${S()}</div>
          <p class="lang-label">${he(g("language"))}</p>
          <div class="lang-grid" id="lang-grid">${f()}</div>
          <p class="hint">${l.locale==="en"?he(g("l1_off")):""}</p>
        </div>
        <button class="btn" id="btn-play" type="button">${he(g("play"))}</button>
      </div>`,h.querySelector("#name").addEventListener("change",It=>{l.playerName=It.target.value.trim()||"Player",sc(l.playerName)});const ot=h.querySelector("#mode-student"),pt=h.querySelector("#mode-maker");ot&&ot.addEventListener("click",()=>{l.playMode="student",Fs("student"),_()}),pt&&pt.addEventListener("click",()=>{l.playMode="maker",Fs("maker"),_()}),h.querySelector("#lang-grid").addEventListener("click",It=>{const Tt=It.target.closest("[data-code]");Tt&&(l.locale=Tt.getAttribute("data-code"),U0(l.locale),_())});const bt=h.querySelector("#pack-grid");bt&&bt.addEventListener("click",It=>{const Tt=It.target.closest("[data-pack]");if(!Tt)return;const jt=Tt.getAttribute("data-pack");if(!jt||jt===i)return;const Pt=new URL(location.href);Pt.searchParams.set("pack",jt),location.assign(Pt.toString())});const C=h.querySelector("#voice-grid");C&&C.addEventListener("click",It=>{const Tt=It.target.closest("[data-voice]");if(!Tt)return;const jt=Tt.getAttribute("data-voice");!jt||!Ys.some(Pt=>Pt.id===jt)||(l.voice=jt,rc(jt),v(),_())}),h.querySelector("#btn-play").addEventListener("click",()=>x()),w()}function w(){try{const O=nc(e);s.setRound(mn(1)),s.setCards(Us(O.heatA,mn(1),l.locale,e))}catch{}}function U(){h.querySelector("#play-bar").classList.add("hidden"),h.querySelector("#end").classList.remove("hidden");const O=l.completedMs.reduce((V,ot)=>V+ot,0);h.querySelector("#end").innerHTML=`
      <aside class="board-dock">
        <h2>${he(g("leaderboard"))}</h2>
        ${ac()}
      </aside>
      <div class="card">
        <p class="kicker">MRJ ENGLISH</p>
        <h1>PRIZE!</h1>
        <p class="sub">${he(g("total"))}</p>
        <p class="win-time">${he(ki(O))}</p>
        <button class="btn" id="btn-again" type="button">${he(g("again"))}</button>
      </div>`,h.querySelector("#btn-again").addEventListener("click",()=>{l.view="start",_()})}function b(O=performance.now()){const V=l.completedMs.reduce((ot,pt)=>ot+pt,0);return l.view!=="play"||!l.roundStartedAt?V:V+(O-l.roundStartedAt)}function A(O=performance.now()){h.querySelector("#hud-round").textContent=`${l.round}/${gn}`;const V=mn(l.round);h.querySelector("#hud-ammo").textContent=V.label||"";const ot=l.roundStartedAt?O-l.roundStartedAt:0;h.querySelector("#hud-rtime").textContent=ki(ot),h.querySelector("#hud-total").textContent=ki(b(O)),h.querySelector("#hud-lesson").textContent=g(R0(l.round));const pt=h.querySelector("#skip-bar");l.playMode==="maker"&&l.view==="play"?pt.classList.remove("hidden"):pt.classList.add("hidden")}function I(){const O=h.querySelector("#skip-rounds");O.innerHTML=[1,2,3,4,5,6].map(V=>`<button type="button" class="round-jump${V===l.round?" on":""}" data-round="${V}">${V}</button>`).join("")}function y(){const O=["carnies/booth-win"],V=["cowboy","pirate","ray","june","nia","walt"],ot=["hit-1","hit-2","miss-1","miss-2","round"];for(const pt of V)for(const bt of ot)O.push(`carnies/${pt}-${bt}`);for(const pt of e.items||[])pt.audio_id&&O.push(pt.audio_id);return a.preload(O)}function x(){const O=h.querySelector("#name");O&&(l.playerName=O.value.trim()||"Player",sc(l.playerName)),a.unlock(),y(),l.sessionId=ec("session"),l.telemetry=G0({studentId:o,sessionId:l.sessionId,uiLocale:l.locale}),l.completedMs=[],l.round=1,l.view="play",h.querySelector("#start").classList.add("hidden"),h.querySelector("#end").classList.add("hidden"),h.querySelector("#play-bar").classList.remove("hidden"),v(),I(),L(1)}function L(O){l.round=O,l.heat=0,l.heats=nc(e),l.roundStartedAt=performance.now();const V=mn(O);a.setCarny(V.carny),s.setRound(V),a.carnyRound(),I(),G()}function G(){const O=mn(l.round),V=l.heat===0?l.heats.heatA:l.heats.heatB;l.cards=Us(V,O,l.locale,e),l.open=[],l.locked=!1,l.matched=0,l.heatStartedAt=performance.now(),$(),s.setCards(l.cards),A()}function z(O){return l.cards.find(V=>V.uid===O)}function Z(O,V,ot,pt,bt){const C=[...new Set([...O.skill_tags||[],...V.skill_tags||[]])];l.telemetry.emit({student_id:o,session_id:l.sessionId,module_id:Kn,activity_id:qs,item_id:ot?O.itemId:`${O.itemId},${V.itemId}`,skill_tags:C,response:`${O.uid}|${V.uid}`,correct:ot,latency_ms:Math.max(0,Math.round(bt-pt)),accuracy:ot?1:0,points:0,errors:ot?0:1,started_at:new Date(Date.now()-(bt-pt)).toISOString(),ended_at:new Date().toISOString(),ui_locale:l.locale,round_index:l.round,total_ms:Math.round(b(bt))})}function Q(O){O&&O.audioId&&O.face==="audio"&&a.word(O.audioId,l.voice).then(V=>{if(V&&V.fallback&&l.voice!==pi){l.voice=pi,rc(pi);const ot=h.querySelector("#toast");ot&&(ot.textContent="Word sound is Miss Harper.",ot.classList.add("on"),setTimeout(()=>ot.classList.remove("on"),1600))}})}function Y(O){const V=h.querySelector("#reveals");if(!V||!O)return;let ot=V.querySelector(`[data-uid="${CSS.escape(O.uid)}"]`);if(!ot){for(;V.children.length>=2;)V.firstElementChild?.remove();ot=document.createElement("div"),ot.className="reveal-card",ot.dataset.uid=O.uid,V.appendChild(ot)}const pt=O.animal||"",bt=X0(pt);if(O.face==="picture"&&bt)ot.innerHTML=`<img src="${bt}" alt="">`;else if(O.face==="picture"&&O.n)ot.innerHTML=`<b class="bigword">${he(String(O.n))}</b>`;else if(O.face==="picture")ot.innerHTML='<div class="speaker">🃏</div>';else if(O.face==="audio")ot.innerHTML='<div class="speaker">🔊</div>';else if(O.face==="word"){const C=l.locale!=="en"&&O.l1&&O.l1!==O.text?`<b class="l1help">${he(O.l1)}</b>`:"";ot.innerHTML=`<b class="bigword">${he(O.text||"")}</b>${C}`}else ot.innerHTML=`<b class="bigword">${he(O.text||"")}</b>`;ot.classList.remove("hidden")}function tt(O){const V=h.querySelector(`#reveals [data-uid="${CSS.escape(O)}"]`);V&&V.remove()}function $(){const O=h.querySelector("#reveals");O&&(O.innerHTML="")}function st(){if(l.heat===0){l.heat=1,G();return}const O=performance.now();if(l.completedMs.push(O-l.roundStartedAt),l.round>=gn){Mt();return}L(l.round+1)}function Mt(){l.view="win",l.locked=!0;const O=l.completedMs.reduce((V,ot)=>V+ot,0);a.carnyWin(),s.celebrate(),s.carnyHit(),l.playMode!=="maker"&&B0({module_id:Kn,name:l.playerName||"Player",total_ms:O,rounds:gn,at:new Date().toISOString()}),l.telemetry.emit({item_id:"session",skill_tags:e.skill_tags||[],response:"win",correct:!0,latency_ms:Math.round(O),accuracy:1,points:0,errors:0,started_at:new Date(Date.now()-O).toISOString(),ended_at:new Date().toISOString(),ui_locale:l.locale,round_index:gn,total_ms:Math.round(O)}),U()}function ut(O){if(l.view!=="play")return;const V=z(O);if(V){if(V.down){Q(V);return}l.locked||l.open.find(ot=>ot.uid===O)||(l.locked=!0,l.open.length===0&&(l.pairStartedAt=performance.now(),$()),a.fire(mn(l.round).ammo),a.haptic(12),s.sprayTo(O,()=>{const ot=mn(l.round).ammo;if(ot==="beanbags"?a.glass():ot==="water"?a.squeak():ot==="gun"?a.balloonPop():a.thump(),s.spinOff(O),V.down=!0,Q(V),Y(V),l.open.push(V),l.open.length<2){l.locked=!1;return}const[pt,bt]=l.open,C=ic(pt,bt),It=performance.now();Z(pt,bt,C,l.pairStartedAt||It,It),C?(a.sparkle(),s.sparkle([pt.uid,bt.uid]),s.carnyHit(),l.matched+=1,l.open=[],l.locked=!1,setTimeout(()=>{tt(pt.uid),tt(bt.uid)},700),l.matched>=(l.heats.heatPairs||5)&&setTimeout(st,450)):(s.carnyMiss(),s.handReturn([pt.uid,bt.uid]),setTimeout(()=>{a.pop(),tt(pt.uid),tt(bt.uid),pt.down=!1,bt.down=!1,l.open=[],l.locked=!1},v0))}))}}function Ct(O){if(O.type==="pointerdown")try{O.target.setPointerCapture(O.pointerId)}catch{}const V=s.pick(O.clientX,O.clientY);V&&(O.preventDefault(),ut(V))}s.dom.addEventListener("pointerdown",Ct,{passive:!1}),window.addEventListener("resize",()=>s.resize()),window.addEventListener("orientationchange",()=>setTimeout(()=>s.resize(),120)),h.querySelector("#skip-heat").addEventListener("click",()=>{l.playMode!=="maker"||l.view!=="play"||st()}),h.querySelector("#skip-round").addEventListener("click",()=>{if(!(l.playMode!=="maker"||l.view!=="play")){if(l.round>=gn){Mt();return}l.completedMs.push(Math.max(0,performance.now()-l.roundStartedAt)),L(l.round+1)}}),h.querySelector("#skip-rounds").addEventListener("click",O=>{if(l.playMode!=="maker"||l.view!=="play")return;const V=O.target.closest("[data-round]");if(!V)return;const ot=Number(V.getAttribute("data-round"));ot>=1&&ot<=gn&&L(ot)});let zt=performance.now();function J(O){const V=Math.min(.05,(O-zt)/1e3);zt=O,s.render(V),l.view==="play"&&A(O),requestAnimationFrame(J)}requestAnimationFrame(J),_();const it=new URLSearchParams(location.search);if(it.get("maker")==="1"&&(l.playMode="maker",Fs("maker")),it.get("autostart")==="1"){x();const O=Number(it.get("round")||1);O>=2&&O<=gn&&L(O)}it.get("tap")==="1"&&setTimeout(()=>{const V=l.cards[0];if(!V)return;ut(V.uid);const ot=l.cards.find(pt=>pt.itemId===V.itemId&&pt.uid!==V.uid);setTimeout(()=>{ot&&ut(ot.uid)},420)},700),window.MRJMemoryMatch={version:Ds,module_id:Kn,activity_id:qs,pack:e,ui:l.ui,booth:s,engine:{roundDef:mn,dealHeat:Us,isComplementaryPair:ic,formatMs:ki}}}$0().catch(i=>{$s.textContent="Carnival booth failed to load: "+i.message,console.error(i)});
