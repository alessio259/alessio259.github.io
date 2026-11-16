(()=>{var Th=0,jc=1,Rh=2;var eu=1,Ch=2,xn=3,zn=0,be=1,Ze=2,On=0,Ti=1,Ii=2,tl=3,el=4,Ph=5,Kn=100,Ih=101,Lh=102,Dh=103,Uh=104,Nh=200,Fh=201,Oh=202,Bh=203,Uo=204,No=205,zh=206,kh=207,Vh=208,Hh=209,Gh=210,Wh=211,Xh=212,qh=213,Yh=214,Fo=0,Oo=1,Bo=2,Li=3,zo=4,ko=5,Vo=6,Ho=7,ic=0,$h=1,Zh=2,Bn=0,Jh=1,Kh=2,Qh=3,jh=4,tf=5,ef=6,nf=7;var nu=300,Di=301,Ui=302,Go=303,Wo=304,Ts=306,Xo=1e3,ti=1001,qo=1002,Qe=1003,rf=1004;var Rr=1005;var on=1006,js=1007;var ei=1008;var bn=1009,iu=1010,ru=1011,sr=1012,rc=1013,ni=1014,yn=1015,hr=1016,sc=1017,oc=1018,Ni=1020,su=35902,ou=1021,au=1022,Je=1023,cu=1024,lu=1025,Ri=1026,Fi=1027,uu=1028,ac=1029,hu=1030,cc=1031;var lc=1033,Kr=33776,Qr=33777,jr=33778,ts=33779,Yo=35840,$o=35841,Zo=35842,Jo=35843,Ko=36196,Qo=37492,jo=37496,ta=37808,ea=37809,na=37810,ia=37811,ra=37812,sa=37813,oa=37814,aa=37815,ca=37816,la=37817,ua=37818,ha=37819,fa=37820,da=37821,es=36492,pa=36494,ma=36495,fu=36283,ga=36284,_a=36285,xa=36286;var ns=2300,va=2301,to=2302,nl=2400,il=2401,rl=2402;var sf=3200,of=3201;var du=0,af=1,Fn="",Ce="srgb",zi="srgb-linear",Rs="linear",ee="srgb";var fi=7680;var sl=519,cf=512,lf=513,uf=514,pu=515,hf=516,ff=517,df=518,pf=519,ol=35044;var al="300 es",Mn=2e3,is=2001,kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let r=this._listeners[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var eo=Math.PI/180,ya=180/Math.PI;function fr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[i&255]+ye[i>>8&255]+ye[i>>16&255]+ye[i>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function Se(i,t,e){return Math.max(t,Math.min(e,i))}function mf(i,t){return(i%t+t)%t}function no(i,t,e){return(1-e)*i+e*t}function Zi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Re(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Rt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bt=class i{constructor(t,e,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=r[0],m=r[3],p=r[6],E=r[1],y=r[4],v=r[7],P=r[2],A=r[5],R=r[8];return s[0]=o*_+a*E+c*P,s[3]=o*m+a*y+c*A,s[6]=o*p+a*v+c*R,s[1]=l*_+u*E+h*P,s[4]=l*m+u*y+h*A,s[7]=l*p+u*v+h*R,s[2]=f*_+d*E+g*P,s[5]=f*m+d*y+g*A,s[8]=f*p+d*v+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,f=a*c-u*s,d=l*s-o*c,g=e*h+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=h*_,t[1]=(r*l-u*n)*_,t[2]=(a*n-r*o)*_,t[3]=f*_,t[4]=(u*e-r*c)*_,t[5]=(r*s-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(io.makeScale(t,e)),this}rotate(t){return this.premultiply(io.makeRotation(-t)),this}translate(t,e){return this.premultiply(io.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},io=new Bt;function mu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function rs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gf(){let i=rs("canvas");return i.style.display="block",i}var cl={};function tr(i){i in cl||(cl[i]=!0,console.warn(i))}function _f(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function xf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function vf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Zt={enabled:!0,workingColorSpace:zi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ee&&(i.r=Sn(i.r),i.g=Sn(i.g),i.b=Sn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ee&&(i.r=Ci(i.r),i.g=Ci(i.g),i.b=Ci(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Fn?Rs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Sn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ci(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ll=[.64,.33,.3,.6,.15,.06],ul=[.2126,.7152,.0722],hl=[.3127,.329],fl=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dl=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Zt.define({[zi]:{primaries:ll,whitePoint:hl,transfer:Rs,toXYZ:fl,fromXYZ:dl,luminanceCoefficients:ul,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:ll,whitePoint:hl,transfer:ee,toXYZ:fl,fromXYZ:dl,luminanceCoefficients:ul,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}});var di,Ma=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{di===void 0&&(di=rs("canvas")),di.width=t.width,di.height=t.height;let n=di.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=di}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=rs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Sn(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Sn(e[n]/255)*255):e[n]=Sn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},yf=0,ss=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=fr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ro(r[o].image)):s.push(ro(r[o]))}else s=ro(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function ro(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Ma.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Mf=0,Ue=class i extends kn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ti,r=ti,s=on,o=ei,a=Je,c=bn,l=i.DEFAULT_ANISOTROPY,u=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=fr(),this.name="",this.source=new ss(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xo:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case qo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xo:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case qo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ue.DEFAULT_IMAGE=null;Ue.DEFAULT_MAPPING=nu;Ue.DEFAULT_ANISOTROPY=1;var le=class i{constructor(t=0,e=0,n=0,r=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,c=t.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,v=(d+1)/2,P=(p+1)/2,A=(u+f)/4,R=(h+_)/4,C=(g+m)/4;return y>v&&y>P?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=A/n,s=R/n):v>P?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=A/r,s=C/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=R/s,r=C/s),this.set(n,r,s,e),this}let E=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-_)/E,this.z=(f-u)/E,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Sa=class extends kn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);let r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Ue(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ss(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},En=class extends Sa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},os=class extends Ue{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ba=class extends Ue{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3],f=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h!==_||c!==f||l!==d||u!==g){let m=1-a,p=c*f+l*d+u*g+h*_,E=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let P=Math.sqrt(y),A=Math.atan2(P,p*E);m=Math.sin(m*A)/P,a=Math.sin(a*A)/P}let v=a*E;if(c=c*m+f*v,l=l*m+d*v,u=u*m+g*v,h=h*m+_*v,m===1-a){let P=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=P,l*=P,u*=P,h*=P}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+u*h+c*d-l*f,t[e+1]=c*g+u*f+l*h-a*d,t[e+2]=l*g+u*d+a*f-c*h,t[e+3]=u*g-a*h-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),h=a(s/2),f=c(n/2),d=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),u=2*(a*e-s*r),h=2*(s*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return so.copy(this).projectOnVector(t),this.sub(so)}reflect(t){return this.sub(so.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Se(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},so=new F,pl=new Vn,ii=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,qe):qe.fromBufferAttribute(s,o),qe.applyMatrix4(t.matrixWorld),this.expandByPoint(qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cr.copy(n.boundingBox)),Cr.applyMatrix4(t.matrixWorld),this.union(Cr)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qe),qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ji),Pr.subVectors(this.max,Ji),pi.subVectors(t.a,Ji),mi.subVectors(t.b,Ji),gi.subVectors(t.c,Ji),Pn.subVectors(mi,pi),In.subVectors(gi,mi),Wn.subVectors(pi,gi);let e=[0,-Pn.z,Pn.y,0,-In.z,In.y,0,-Wn.z,Wn.y,Pn.z,0,-Pn.x,In.z,0,-In.x,Wn.z,0,-Wn.x,-Pn.y,Pn.x,0,-In.y,In.x,0,-Wn.y,Wn.x,0];return!oo(e,pi,mi,gi,Pr)||(e=[1,0,0,0,1,0,0,0,1],!oo(e,pi,mi,gi,Pr))?!1:(Ir.crossVectors(Pn,In),e=[Ir.x,Ir.y,Ir.z],oo(e,pi,mi,gi,Pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},dn=[new F,new F,new F,new F,new F,new F,new F,new F],qe=new F,Cr=new ii,pi=new F,mi=new F,gi=new F,Pn=new F,In=new F,Wn=new F,Ji=new F,Pr=new F,Ir=new F,Xn=new F;function oo(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Xn.fromArray(i,s);let a=r.x*Math.abs(Xn.x)+r.y*Math.abs(Xn.y)+r.z*Math.abs(Xn.z),c=t.dot(Xn),l=e.dot(Xn),u=n.dot(Xn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Sf=new ii,Ki=new F,ao=new F,or=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Sf.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ki.subVectors(t,this.center);let e=Ki.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Ki,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ao.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ki.copy(t.center).add(ao)),this.expandByPoint(Ki.copy(t.center).sub(ao))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},pn=new F,co=new F,Lr=new F,Ln=new F,lo=new F,Dr=new F,uo=new F,Ea=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.origin).addScaledVector(this.direction,e),pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){co.copy(t).add(e).multiplyScalar(.5),Lr.copy(e).sub(t).normalize(),Ln.copy(this.origin).sub(co);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Lr),a=Ln.dot(this.direction),c=-Ln.dot(Lr),l=Ln.lengthSq(),u=Math.abs(1-o*o),h,f,d,g;if(u>0)if(h=o*c-a,f=o*a-c,g=s*u,h>=0)if(f>=-g)if(f<=g){let _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(co).addScaledVector(Lr,f),d}intersectSphere(t,e){pn.subVectors(t.center,this.origin);let n=pn.dot(this.direction),r=pn.dot(pn)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,c=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,c=(t.min.z-f.z)*h),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,n,r,s){lo.subVectors(e,t),Dr.subVectors(n,t),uo.crossVectors(lo,Dr);let o=this.direction.dot(uo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ln.subVectors(this.origin,t);let c=a*this.direction.dot(Dr.crossVectors(Ln,Dr));if(c<0)return null;let l=a*this.direction.dot(lo.cross(Ln));if(l<0||c+l>o)return null;let u=-a*Ln.dot(uo);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ue=class i{constructor(t,e,n,r,s,o,a,c,l,u,h,f,d,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,u,h,f,d,g,_,m)}set(t,e,n,r,s,o,a,c,l,u,h,f,d,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,r=1/_i.setFromMatrixColumn(t,0).length(),s=1/_i.setFromMatrixColumn(t,1).length(),o=1/_i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let f=o*u,d=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=d+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*u,d=c*h,g=l*u,_=l*h;e[0]=f+_*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=_+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*u,d=c*h,g=l*u,_=l*h;e[0]=f-_*a,e[4]=-o*h,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=_-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*u,d=o*h,g=a*u,_=a*h;e[0]=c*u,e[4]=g*l-d,e[8]=f*l+_,e[1]=c*h,e[5]=_*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=_-f*h,e[8]=g*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*h+g,e[10]=f-_*h}else if(t.order==="XZY"){let f=o*c,d=o*l,g=a*c,_=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=f*h+_,e[5]=o*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=a*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bf,t,Ef)}lookAt(t,e,n){let r=this.elements;return Le.subVectors(t,e),Le.lengthSq()===0&&(Le.z=1),Le.normalize(),Dn.crossVectors(n,Le),Dn.lengthSq()===0&&(Math.abs(n.z)===1?Le.x+=1e-4:Le.z+=1e-4,Le.normalize(),Dn.crossVectors(n,Le)),Dn.normalize(),Ur.crossVectors(Le,Dn),r[0]=Dn.x,r[4]=Ur.x,r[8]=Le.x,r[1]=Dn.y,r[5]=Ur.y,r[9]=Le.y,r[2]=Dn.z,r[6]=Ur.z,r[10]=Le.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],y=n[7],v=n[11],P=n[15],A=r[0],R=r[4],C=r[8],b=r[12],M=r[1],T=r[5],W=r[9],B=r[13],H=r[2],I=r[6],O=r[10],J=r[14],k=r[3],tt=r[7],nt=r[11],ft=r[15];return s[0]=o*A+a*M+c*H+l*k,s[4]=o*R+a*T+c*I+l*tt,s[8]=o*C+a*W+c*O+l*nt,s[12]=o*b+a*B+c*J+l*ft,s[1]=u*A+h*M+f*H+d*k,s[5]=u*R+h*T+f*I+d*tt,s[9]=u*C+h*W+f*O+d*nt,s[13]=u*b+h*B+f*J+d*ft,s[2]=g*A+_*M+m*H+p*k,s[6]=g*R+_*T+m*I+p*tt,s[10]=g*C+_*W+m*O+p*nt,s[14]=g*b+_*B+m*J+p*ft,s[3]=E*A+y*M+v*H+P*k,s[7]=E*R+y*T+v*I+P*tt,s[11]=E*C+y*W+v*O+P*nt,s[15]=E*b+y*B+v*J+P*ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*c*h-r*l*h-s*a*f+n*l*f+r*a*d-n*c*d)+_*(+e*c*d-e*l*f+s*o*f-r*o*d+r*l*u-s*c*u)+m*(+e*l*h-e*a*d-s*o*h+n*o*d+s*a*u-n*l*u)+p*(-r*a*u-e*c*h+e*a*f+r*o*h-n*o*f+n*c*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],E=h*m*l-_*f*l+_*c*d-a*m*d-h*c*p+a*f*p,y=g*f*l-u*m*l-g*c*d+o*m*d+u*c*p-o*f*p,v=u*_*l-g*h*l+g*a*d-o*_*d-u*a*p+o*h*p,P=g*h*c-u*_*c-g*a*f+o*_*f+u*a*m-o*h*m,A=e*E+n*y+r*v+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return t[0]=E*R,t[1]=(_*f*s-h*m*s-_*r*d+n*m*d+h*r*p-n*f*p)*R,t[2]=(a*m*s-_*c*s+_*r*l-n*m*l-a*r*p+n*c*p)*R,t[3]=(h*c*s-a*f*s-h*r*l+n*f*l+a*r*d-n*c*d)*R,t[4]=y*R,t[5]=(u*m*s-g*f*s+g*r*d-e*m*d-u*r*p+e*f*p)*R,t[6]=(g*c*s-o*m*s-g*r*l+e*m*l+o*r*p-e*c*p)*R,t[7]=(o*f*s-u*c*s+u*r*l-e*f*l-o*r*d+e*c*d)*R,t[8]=v*R,t[9]=(g*h*s-u*_*s-g*n*d+e*_*d+u*n*p-e*h*p)*R,t[10]=(o*_*s-g*a*s+g*n*l-e*_*l-o*n*p+e*a*p)*R,t[11]=(u*a*s-o*h*s-u*n*l+e*h*l+o*n*d-e*a*d)*R,t[12]=P*R,t[13]=(u*_*r-g*h*r+g*n*f-e*_*f-u*n*m+e*h*m)*R,t[14]=(g*a*r-o*_*r-g*n*c+e*_*c+o*n*m-e*a*m)*R,t[15]=(o*h*r-u*a*r+u*n*c-e*h*c-o*n*f+e*a*f)*R,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,h=a+a,f=s*l,d=s*u,g=s*h,_=o*u,m=o*h,p=a*h,E=c*l,y=c*u,v=c*h,P=n.x,A=n.y,R=n.z;return r[0]=(1-(_+p))*P,r[1]=(d+v)*P,r[2]=(g-y)*P,r[3]=0,r[4]=(d-v)*A,r[5]=(1-(f+p))*A,r[6]=(m+E)*A,r[7]=0,r[8]=(g+y)*R,r[9]=(m-E)*R,r[10]=(1-(f+_))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements,s=_i.set(r[0],r[1],r[2]).length(),o=_i.set(r[4],r[5],r[6]).length(),a=_i.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Ye.copy(this);let l=1/s,u=1/o,h=1/a;return Ye.elements[0]*=l,Ye.elements[1]*=l,Ye.elements[2]*=l,Ye.elements[4]*=u,Ye.elements[5]*=u,Ye.elements[6]*=u,Ye.elements[8]*=h,Ye.elements[9]*=h,Ye.elements[10]*=h,e.setFromRotationMatrix(Ye),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Mn){let c=this.elements,l=2*s/(e-t),u=2*s/(n-r),h=(e+t)/(e-t),f=(n+r)/(n-r),d,g;if(a===Mn)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===is)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Mn){let c=this.elements,l=1/(e-t),u=1/(n-r),h=1/(o-s),f=(e+t)*l,d=(n+r)*u,g,_;if(a===Mn)g=(o+s)*h,_=-2*h;else if(a===is)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},_i=new F,Ye=new ue,bf=new F(0,0,0),Ef=new F(1,1,1),Dn=new F,Ur=new F,Le=new F,ml=new ue,gl=new Vn,an=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Se(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Se(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Se(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Se(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ml.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ml,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gl.setFromEuler(this),this.setFromQuaternion(gl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};an.DEFAULT_ORDER="XYZ";var as=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},wf=0,_l=new F,xi=new Vn,mn=new ue,Nr=new F,Qi=new F,Af=new F,Tf=new Vn,xl=new F(1,0,0),vl=new F(0,1,0),yl=new F(0,0,1),Ml={type:"added"},Rf={type:"removed"},vi={type:"childadded",child:null},ho={type:"childremoved",child:null},Pe=class i extends kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new F,e=new an,n=new Vn,r=new F(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ue},normalMatrix:{value:new Bt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new as,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.multiply(xi),this}rotateOnWorldAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.premultiply(xi),this}rotateX(t){return this.rotateOnAxis(xl,t)}rotateY(t){return this.rotateOnAxis(vl,t)}rotateZ(t){return this.rotateOnAxis(yl,t)}translateOnAxis(t,e){return _l.copy(t).applyQuaternion(this.quaternion),this.position.add(_l.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xl,t)}translateY(t){return this.translateOnAxis(vl,t)}translateZ(t){return this.translateOnAxis(yl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Nr.copy(t):Nr.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Qi,Nr,this.up):mn.lookAt(Nr,Qi,this.up),this.quaternion.setFromRotationMatrix(mn),r&&(mn.extractRotation(r.matrixWorld),xi.setFromRotationMatrix(mn),this.quaternion.premultiply(xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ml),vi.child=t,this.dispatchEvent(vi),vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rf),ho.child=t,this.dispatchEvent(ho),ho.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ml),vi.child=t,this.dispatchEvent(vi),vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,t,Af),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,Tf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];s(t.shapes,h)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}};Pe.DEFAULT_UP=new F(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var $e=new F,gn=new F,fo=new F,_n=new F,yi=new F,Mi=new F,Sl=new F,po=new F,mo=new F,go=new F,_o=new le,xo=new le,vo=new le,Qn=class i{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),$e.subVectors(t,e),r.cross($e);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){$e.subVectors(r,e),gn.subVectors(n,e),fo.subVectors(t,e);let o=$e.dot($e),a=$e.dot(gn),c=$e.dot(fo),l=gn.dot(gn),u=gn.dot(fo),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(l*c-a*u)*f,g=(o*u-a*c)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,_n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,_n.x),c.addScaledVector(o,_n.y),c.addScaledVector(a,_n.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return _o.setScalar(0),xo.setScalar(0),vo.setScalar(0),_o.fromBufferAttribute(t,e),xo.fromBufferAttribute(t,n),vo.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(_o,s.x),o.addScaledVector(xo,s.y),o.addScaledVector(vo,s.z),o}static isFrontFacing(t,e,n,r){return $e.subVectors(n,e),gn.subVectors(t,e),$e.cross(gn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),$e.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;yi.subVectors(r,n),Mi.subVectors(s,n),po.subVectors(t,n);let c=yi.dot(po),l=Mi.dot(po);if(c<=0&&l<=0)return e.copy(n);mo.subVectors(t,r);let u=yi.dot(mo),h=Mi.dot(mo);if(u>=0&&h<=u)return e.copy(r);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(yi,o);go.subVectors(t,s);let d=yi.dot(go),g=Mi.dot(go);if(g>=0&&d<=g)return e.copy(s);let _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Mi,a);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Sl.subVectors(s,r),a=(h-u)/(h-u+(d-g)),e.copy(r).addScaledVector(Sl,a);let p=1/(m+_+f);return o=_*p,a=f*p,e.copy(n).addScaledVector(yi,o).addScaledVector(Mi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},Fr={h:0,s:0,l:0};function yo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Zt.workingColorSpace){if(t=mf(t,1),e=Se(e,0,1),n=Se(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=yo(o,s,t+1/3),this.g=yo(o,s,t),this.b=yo(o,s,t-1/3)}return Zt.toWorkingColorSpace(this,r),this}setStyle(t,e=Ce){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let n=gu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sn(t.r),this.g=Sn(t.g),this.b=Sn(t.b),this}copyLinearToSRGB(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return Zt.fromWorkingColorSpace(Me.copy(this),t),Math.round(Se(Me.r*255,0,255))*65536+Math.round(Se(Me.g*255,0,255))*256+Math.round(Se(Me.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Me.copy(this),e);let n=Me.r,r=Me.g,s=Me.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Me.copy(this),e),t.r=Me.r,t.g=Me.g,t.b=Me.b,t}getStyle(t=Ce){Zt.fromWorkingColorSpace(Me.copy(this),t);let e=Me.r,n=Me.g,r=Me.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Un),this.setHSL(Un.h+t,Un.s+e,Un.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Un),t.getHSL(Fr);let n=no(Un.h,Fr.h,e),r=no(Un.s,Fr.s,e),s=no(Un.l,Fr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Me=new Xt;Xt.NAMES=gu;var Cf=0,ri=class extends kn{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=fr(),this.name="",this.blending=Ti,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uo,this.blendDst=No,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Li,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Uo&&(n.blendSrc=this.blendSrc),this.blendDst!==No&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Li&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},je=class extends ri{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var fe=new F,Or=new Rt,ke=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ol,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Or.fromBufferAttribute(this,e),Or.applyMatrix3(t),this.setXY(e,Or.x,Or.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Zi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),r=Re(r,this.array),s=Re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ol&&(t.usage=this.usage),t}};var cs=class extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ls=class extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var _e=class extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}},Pf=0,ze=new ue,Mo=new Pe,Si=new F,De=new ii,ji=new ii,ge=new F,cn=class i extends kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mu(t)?ls:cs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Bt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,n){return ze.makeTranslation(t,e,n),this.applyMatrix4(ze),this}scale(t,e,n){return ze.makeScale(t,e,n),this.applyMatrix4(ze),this}lookAt(t){return Mo.lookAt(t),Mo.updateMatrix(),this.applyMatrix4(Mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _e(n,3))}else{for(let n=0,r=e.count;n<r;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];De.setFromBufferAttribute(s),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,De.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,De.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(De.min),this.boundingBox.expandByPoint(De.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new or);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let n=this.boundingSphere.center;if(De.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];ji.setFromBufferAttribute(a),this.morphTargetsRelative?(ge.addVectors(De.min,ji.min),De.expandByPoint(ge),ge.addVectors(De.max,ji.max),De.expandByPoint(ge)):(De.expandByPoint(ji.min),De.expandByPoint(ji.max))}De.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)ge.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(ge));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ge.fromBufferAttribute(a,l),c&&(Si.fromBufferAttribute(t,l),ge.add(Si)),r=Math.max(r,n.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new F,c[C]=new F;let l=new F,u=new F,h=new F,f=new Rt,d=new Rt,g=new Rt,_=new F,m=new F;function p(C,b,M){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,M),f.fromBufferAttribute(s,C),d.fromBufferAttribute(s,b),g.fromBufferAttribute(s,M),u.sub(l),h.sub(l),d.sub(f),g.sub(f);let T=1/(d.x*g.y-g.x*d.y);isFinite(T)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(T),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(T),a[C].add(_),a[b].add(_),a[M].add(_),c[C].add(m),c[b].add(m),c[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let C=0,b=E.length;C<b;++C){let M=E[C],T=M.start,W=M.count;for(let B=T,H=T+W;B<H;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let y=new F,v=new F,P=new F,A=new F;function R(C){P.fromBufferAttribute(r,C),A.copy(P);let b=a[C];y.copy(b),y.sub(P.multiplyScalar(P.dot(b))).normalize(),v.crossVectors(A,b);let T=v.dot(c[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,T)}for(let C=0,b=E.length;C<b;++C){let M=E[C],T=M.start,W=M.count;for(let B=T,H=T+W;B<H;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new F,s=new F,o=new F,a=new F,c=new F,l=new F,u=new F,h=new F;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u),d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new ke(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=t(c,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){let f=l[u],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let d=l[h];u.push(d.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let r=t.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(e))}let s=t.morphAttributes;for(let l in s){let u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},bl=new ue,qn=new Ea,Br=new or,El=new F,zr=new F,kr=new F,Vr=new F,So=new F,Hr=new F,wl=new F,Gr=new F,de=class extends Pe{constructor(t=new cn,e=new je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){Hr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],h=s[c];u!==0&&(So.fromBufferAttribute(h,t),o?Hr.addScaledVector(So,u):Hr.addScaledVector(So.sub(e),u))}e.add(Hr)}return e}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(s),qn.copy(t.ray).recast(t.near),!(Br.containsPoint(qn.origin)===!1&&(qn.intersectSphere(Br,El)===null||qn.origin.distanceToSquared(El)>(t.far-t.near)**2))&&(bl.copy(s).invert(),qn.copy(t.ray).applyMatrix4(bl),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qn)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],E=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=E,P=y;v<P;v+=3){let A=a.getX(v),R=a.getX(v+1),C=a.getX(v+2);r=Wr(this,p,t,n,l,u,h,A,R,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let E=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);r=Wr(this,o,t,n,l,u,h,E,y,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],E=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let v=E,P=y;v<P;v+=3){let A=v,R=v+1,C=v+2;r=Wr(this,p,t,n,l,u,h,A,R,C),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let E=m,y=m+1,v=m+2;r=Wr(this,o,t,n,l,u,h,E,y,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}};function If(i,t,e,n,r,s,o,a){let c;if(t.side===be?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===zn,a),c===null)return null;Gr.copy(a),Gr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Gr);return l<e.near||l>e.far?null:{distance:l,point:Gr.clone(),object:i}}function Wr(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,zr),i.getVertexPosition(c,kr),i.getVertexPosition(l,Vr);let u=If(i,t,e,n,zr,kr,Vr,wl);if(u){let h=new F;Qn.getBarycoord(wl,zr,kr,Vr,h),r&&(u.uv=Qn.getInterpolatedAttribute(r,a,c,l,h,new Rt)),s&&(u.uv1=Qn.getInterpolatedAttribute(s,a,c,l,h,new Rt)),o&&(u.normal=Qn.getInterpolatedAttribute(o,a,c,l,h,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new F,materialIndex:0};Qn.getNormal(zr,kr,Vr,f.normal),u.face=f,u.barycoord=h}return u}var ar=class i extends cn{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new _e(l,3)),this.setAttribute("normal",new _e(u,3)),this.setAttribute("uv",new _e(h,2));function g(_,m,p,E,y,v,P,A,R,C,b){let M=v/R,T=P/C,W=v/2,B=P/2,H=A/2,I=R+1,O=C+1,J=0,k=0,tt=new F;for(let nt=0;nt<O;nt++){let ft=nt*T-B;for(let Pt=0;Pt<I;Pt++){let Vt=Pt*M-W;tt[_]=Vt*E,tt[m]=ft*y,tt[p]=H,l.push(tt.x,tt.y,tt.z),tt[_]=0,tt[m]=0,tt[p]=A>0?1:-1,u.push(tt.x,tt.y,tt.z),h.push(Pt/R),h.push(1-nt/C),J+=1}}for(let nt=0;nt<C;nt++)for(let ft=0;ft<R;ft++){let Pt=f+ft+I*nt,Vt=f+ft+I*(nt+1),q=f+(ft+1)+I*(nt+1),j=f+(ft+1)+I*nt;c.push(Pt,Vt,j),c.push(Vt,q,j),k+=6}a.addGroup(d,k,b),d+=k,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Oi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function we(i){let t={};for(let e=0;e<i.length;e++){let n=Oi(i[e]);for(let r in n)t[r]=n[r]}return t}function Lf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function _u(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Zt.workingColorSpace}var Df={clone:Oi,merge:we},Uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ve=class extends ri{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uf,this.fragmentShader=Nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Oi(t.uniforms),this.uniformsGroups=Lf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},us=class extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=Mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Nn=new F,Al=new Rt,Tl=new Rt,Ae=class extends us{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ya*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(eo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ya*2*Math.atan(Math.tan(eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nn.x,Nn.y).multiplyScalar(-t/Nn.z)}getViewSize(t,e){return this.getViewBounds(t,Al,Tl),e.subVectors(Tl,Al)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(eo*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},bi=-90,Ei=1,wa=class extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ae(bi,Ei,t,e);r.layers=this.layers,this.add(r);let s=new Ae(bi,Ei,t,e);s.layers=this.layers,this.add(s);let o=new Ae(bi,Ei,t,e);o.layers=this.layers,this.add(o);let a=new Ae(bi,Ei,t,e);a.layers=this.layers,this.add(a);let c=new Ae(bi,Ei,t,e);c.layers=this.layers,this.add(c);let l=new Ae(bi,Ei,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(let l of e)this.remove(l);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===is)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},hs=class extends Ue{constructor(t,e,n,r,s,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Di,super(t,e,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Aa=class extends En{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new hs(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:on}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ar(5,5,5),s=new Ve({name:"CubemapFromEquirect",uniforms:Oi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:be,blending:On});s.uniforms.tEquirect.value=e;let o=new de(r,s),a=e.minFilter;return e.minFilter===ei&&(e.minFilter=on),new wa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}},bo=new F,Ff=new F,Of=new Bt,vn=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=bo.subVectors(n,e).cross(Ff.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(bo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Of.getNormalMatrix(t),r=this.coplanarPoint(bo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Yn=new or,Xr=new F,cr=class{constructor(t=new vn,e=new vn,n=new vn,r=new vn,s=new vn,o=new vn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn){let n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],h=r[6],f=r[7],d=r[8],g=r[9],_=r[10],m=r[11],p=r[12],E=r[13],y=r[14],v=r[15];if(n[0].setComponents(c-s,f-l,m-d,v-p).normalize(),n[1].setComponents(c+s,f+l,m+d,v+p).normalize(),n[2].setComponents(c+o,f+u,m+g,v+E).normalize(),n[3].setComponents(c-o,f-u,m-g,v-E).normalize(),n[4].setComponents(c-a,f-h,m-_,v-y).normalize(),e===Mn)n[5].setComponents(c+a,f+h,m+_,v+y).normalize();else if(e===is)n[5].setComponents(a,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(t){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Xr.x=r.normal.x>0?t.max.x:t.min.x,Xr.y=r.normal.y>0?t.max.y:t.min.y,Xr.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function xu(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Bf(i){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,h=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){let g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){let _=h[d];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var fs=class i extends cn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,h=t/a,f=e/c,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){let E=p*f-o;for(let y=0;y<l;y++){let v=y*h-s;g.push(v,-E,0),_.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<a;E++){let y=E+l*p,v=E+l*(p+1),P=E+1+l*(p+1),A=E+1+l*p;d.push(y,v,A),d.push(v,P,A)}this.setIndex(d),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(_,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},zf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kf=`#ifdef USE_ALPHAHASH
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
#endif`,Vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xf=`#ifdef USE_AOMAP
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
#endif`,qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
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
#endif`,$f=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qf=`#ifdef USE_IRIDESCENCE
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
#endif`,jf=`#ifdef USE_BUMPMAP
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
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
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
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cd=`#define PI 3.141592653589793
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
} // validated`,ld=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ud=`vec3 transformedNormal = objectNormal;
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
#endif`,hd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,md="gl_FragColor = linearToOutputTexel( gl_FragColor );",gd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_d=`#ifdef USE_ENVMAP
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
#endif`,xd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vd=`#ifdef USE_ENVMAP
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
#endif`,yd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Md=`#ifdef USE_ENVMAP
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
#endif`,Sd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ed=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ad=`#ifdef USE_GRADIENTMAP
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
}`,Td=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pd=`uniform bool receiveShadow;
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
#endif`,Id=`#ifdef USE_ENVMAP
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
#endif`,Ld=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fd=`PhysicalMaterial material;
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
#endif`,Od=`struct PhysicalMaterial {
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
}`,Bd=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,zd=`#if defined( RE_IndirectDiffuse )
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
#endif`,kd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$d=`#if defined( USE_POINTS_UV )
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
#endif`,Zd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tp=`#ifdef USE_MORPHTARGETS
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
#endif`,ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,np=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ip=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,op=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ap=`#ifdef USE_NORMALMAP
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
#endif`,cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,up=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_p=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Mp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ep=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wp=`#ifdef USE_SKINNING
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
#endif`,Ap=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tp=`#ifdef USE_SKINNING
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
#endif`,Rp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ip=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lp=`#ifdef USE_TRANSMISSION
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
#endif`,Dp=`#ifdef USE_TRANSMISSION
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
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Op=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zp=`uniform sampler2D t2D;
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
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`#include <common>
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
}`,Xp=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qp=`#define DISTANCE
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
}`,Yp=`#define DISTANCE
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jp=`uniform float scale;
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
}`,Kp=`uniform vec3 diffuse;
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
}`,Qp=`#include <common>
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
}`,jp=`uniform vec3 diffuse;
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
}`,tm=`#define LAMBERT
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
}`,em=`#define LAMBERT
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
}`,nm=`#define MATCAP
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
}`,im=`#define MATCAP
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
}`,rm=`#define NORMAL
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
}`,sm=`#define NORMAL
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
}`,om=`#define PHONG
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
}`,am=`#define PHONG
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
}`,cm=`#define STANDARD
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
}`,lm=`#define STANDARD
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
}`,um=`#define TOON
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
}`,hm=`#define TOON
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
}`,fm=`uniform float size;
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
}`,dm=`uniform vec3 diffuse;
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
}`,pm=`#include <common>
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
}`,mm=`uniform vec3 color;
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
}`,gm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,_m=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:zf,alphahash_pars_fragment:kf,alphamap_fragment:Vf,alphamap_pars_fragment:Hf,alphatest_fragment:Gf,alphatest_pars_fragment:Wf,aomap_fragment:Xf,aomap_pars_fragment:qf,batching_pars_vertex:Yf,batching_vertex:$f,begin_vertex:Zf,beginnormal_vertex:Jf,bsdfs:Kf,iridescence_fragment:Qf,bumpmap_pars_fragment:jf,clipping_planes_fragment:td,clipping_planes_pars_fragment:ed,clipping_planes_pars_vertex:nd,clipping_planes_vertex:id,color_fragment:rd,color_pars_fragment:sd,color_pars_vertex:od,color_vertex:ad,common:cd,cube_uv_reflection_fragment:ld,defaultnormal_vertex:ud,displacementmap_pars_vertex:hd,displacementmap_vertex:fd,emissivemap_fragment:dd,emissivemap_pars_fragment:pd,colorspace_fragment:md,colorspace_pars_fragment:gd,envmap_fragment:_d,envmap_common_pars_fragment:xd,envmap_pars_fragment:vd,envmap_pars_vertex:yd,envmap_physical_pars_fragment:Id,envmap_vertex:Md,fog_vertex:Sd,fog_pars_vertex:bd,fog_fragment:Ed,fog_pars_fragment:wd,gradientmap_pars_fragment:Ad,lightmap_pars_fragment:Td,lights_lambert_fragment:Rd,lights_lambert_pars_fragment:Cd,lights_pars_begin:Pd,lights_toon_fragment:Ld,lights_toon_pars_fragment:Dd,lights_phong_fragment:Ud,lights_phong_pars_fragment:Nd,lights_physical_fragment:Fd,lights_physical_pars_fragment:Od,lights_fragment_begin:Bd,lights_fragment_maps:zd,lights_fragment_end:kd,logdepthbuf_fragment:Vd,logdepthbuf_pars_fragment:Hd,logdepthbuf_pars_vertex:Gd,logdepthbuf_vertex:Wd,map_fragment:Xd,map_pars_fragment:qd,map_particle_fragment:Yd,map_particle_pars_fragment:$d,metalnessmap_fragment:Zd,metalnessmap_pars_fragment:Jd,morphinstance_vertex:Kd,morphcolor_vertex:Qd,morphnormal_vertex:jd,morphtarget_pars_vertex:tp,morphtarget_vertex:ep,normal_fragment_begin:np,normal_fragment_maps:ip,normal_pars_fragment:rp,normal_pars_vertex:sp,normal_vertex:op,normalmap_pars_fragment:ap,clearcoat_normal_fragment_begin:cp,clearcoat_normal_fragment_maps:lp,clearcoat_pars_fragment:up,iridescence_pars_fragment:hp,opaque_fragment:fp,packing:dp,premultiplied_alpha_fragment:pp,project_vertex:mp,dithering_fragment:gp,dithering_pars_fragment:_p,roughnessmap_fragment:xp,roughnessmap_pars_fragment:vp,shadowmap_pars_fragment:yp,shadowmap_pars_vertex:Mp,shadowmap_vertex:Sp,shadowmask_pars_fragment:bp,skinbase_vertex:Ep,skinning_pars_vertex:wp,skinning_vertex:Ap,skinnormal_vertex:Tp,specularmap_fragment:Rp,specularmap_pars_fragment:Cp,tonemapping_fragment:Pp,tonemapping_pars_fragment:Ip,transmission_fragment:Lp,transmission_pars_fragment:Dp,uv_pars_fragment:Up,uv_pars_vertex:Np,uv_vertex:Fp,worldpos_vertex:Op,background_vert:Bp,background_frag:zp,backgroundCube_vert:kp,backgroundCube_frag:Vp,cube_vert:Hp,cube_frag:Gp,depth_vert:Wp,depth_frag:Xp,distanceRGBA_vert:qp,distanceRGBA_frag:Yp,equirect_vert:$p,equirect_frag:Zp,linedashed_vert:Jp,linedashed_frag:Kp,meshbasic_vert:Qp,meshbasic_frag:jp,meshlambert_vert:tm,meshlambert_frag:em,meshmatcap_vert:nm,meshmatcap_frag:im,meshnormal_vert:rm,meshnormal_frag:sm,meshphong_vert:om,meshphong_frag:am,meshphysical_vert:cm,meshphysical_frag:lm,meshtoon_vert:um,meshtoon_frag:hm,points_vert:fm,points_frag:dm,shadow_vert:pm,shadow_frag:mm,sprite_vert:gm,sprite_frag:_m},rt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},sn={basic:{uniforms:we([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:we([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:we([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:we([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:we([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:we([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:we([rt.points,rt.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:we([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:we([rt.common,rt.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:we([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:we([rt.sprite,rt.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:we([rt.common,rt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:we([rt.lights,rt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};sn.physical={uniforms:we([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};var qr={r:0,b:0,g:0},$n=new an,xm=new ue;function vm(i,t,e,n,r,s,o){let a=new Xt(0),c=s===!0?0:1,l,u,h=null,f=0,d=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?e:t).get(y)),y}function _(E){let y=!1,v=g(E);v===null?p(a,c):v&&v.isColor&&(p(v,1),y=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,y){let v=g(y);v&&(v.isCubeTexture||v.mapping===Ts)?(u===void 0&&(u=new de(new ar(1,1,1),new Ve({name:"BackgroundCubeMaterial",uniforms:Oi(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:be,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),$n.copy(y.backgroundRotation),$n.x*=-1,$n.y*=-1,$n.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(xm.makeRotationFromEuler($n)),u.material.toneMapped=Zt.getTransfer(v.colorSpace)!==ee,(h!==v||f!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new de(new fs(2,2),new Ve({name:"BackgroundMaterial",uniforms:Oi(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(v.colorSpace)!==ee,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,y){E.getRGB(qr,_u(i)),n.buffers.color.setClear(qr.r,qr.g,qr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(a,c)},render:_,addToRenderList:m}}function ym(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(M,T,W,B,H){let I=!1,O=h(B,W,T);s!==O&&(s=O,l(s.object)),I=d(M,B,W,H),I&&g(M,B,W,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(I||o)&&(o=!1,v(M,T,W,B),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,T,W){let B=W.wireframe===!0,H=n[M.id];H===void 0&&(H={},n[M.id]=H);let I=H[T.id];I===void 0&&(I={},H[T.id]=I);let O=I[B];return O===void 0&&(O=f(c()),I[B]=O),O}function f(M){let T=[],W=[],B=[];for(let H=0;H<e;H++)T[H]=0,W[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:W,attributeDivisors:B,object:M,attributes:{},index:null}}function d(M,T,W,B){let H=s.attributes,I=T.attributes,O=0,J=W.getAttributes();for(let k in J)if(J[k].location>=0){let nt=H[k],ft=I[k];if(ft===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(ft=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(ft=M.instanceColor)),nt===void 0||nt.attribute!==ft||ft&&nt.data!==ft.data)return!0;O++}return s.attributesNum!==O||s.index!==B}function g(M,T,W,B){let H={},I=T.attributes,O=0,J=W.getAttributes();for(let k in J)if(J[k].location>=0){let nt=I[k];nt===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(nt=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(nt=M.instanceColor));let ft={};ft.attribute=nt,nt&&nt.data&&(ft.data=nt.data),H[k]=ft,O++}s.attributes=H,s.attributesNum=O,s.index=B}function _(){let M=s.newAttributes;for(let T=0,W=M.length;T<W;T++)M[T]=0}function m(M){p(M,0)}function p(M,T){let W=s.newAttributes,B=s.enabledAttributes,H=s.attributeDivisors;W[M]=1,B[M]===0&&(i.enableVertexAttribArray(M),B[M]=1),H[M]!==T&&(i.vertexAttribDivisor(M,T),H[M]=T)}function E(){let M=s.newAttributes,T=s.enabledAttributes;for(let W=0,B=T.length;W<B;W++)T[W]!==M[W]&&(i.disableVertexAttribArray(W),T[W]=0)}function y(M,T,W,B,H,I,O){O===!0?i.vertexAttribIPointer(M,T,W,H,I):i.vertexAttribPointer(M,T,W,B,H,I)}function v(M,T,W,B){_();let H=B.attributes,I=W.getAttributes(),O=T.defaultAttributeValues;for(let J in I){let k=I[J];if(k.location>=0){let tt=H[J];if(tt===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor)),tt!==void 0){let nt=tt.normalized,ft=tt.itemSize,Pt=t.get(tt);if(Pt===void 0)continue;let Vt=Pt.buffer,q=Pt.type,j=Pt.bytesPerElement,vt=q===i.INT||q===i.UNSIGNED_INT||tt.gpuType===rc;if(tt.isInterleavedBufferAttribute){let st=tt.data,K=st.stride,ot=tt.offset;if(st.isInstancedInterleavedBuffer){for(let wt=0;wt<k.locationSize;wt++)p(k.location+wt,st.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let wt=0;wt<k.locationSize;wt++)m(k.location+wt);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let wt=0;wt<k.locationSize;wt++)y(k.location+wt,ft/k.locationSize,q,nt,K*j,(ot+ft/k.locationSize*wt)*j,vt)}else{if(tt.isInstancedBufferAttribute){for(let st=0;st<k.locationSize;st++)p(k.location+st,tt.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let st=0;st<k.locationSize;st++)m(k.location+st);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let st=0;st<k.locationSize;st++)y(k.location+st,ft/k.locationSize,q,nt,ft*j,ft/k.locationSize*st*j,vt)}}else if(O!==void 0){let nt=O[J];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(k.location,nt);break;case 3:i.vertexAttrib3fv(k.location,nt);break;case 4:i.vertexAttrib4fv(k.location,nt);break;default:i.vertexAttrib1fv(k.location,nt)}}}}E()}function P(){C();for(let M in n){let T=n[M];for(let W in T){let B=T[W];for(let H in B)u(B[H].object),delete B[H];delete T[W]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;let T=n[M.id];for(let W in T){let B=T[W];for(let H in B)u(B[H].object),delete B[H];delete T[W]}delete n[M.id]}function R(M){for(let T in n){let W=n[T];if(W[M.id]===void 0)continue;let B=W[M.id];for(let H in B)u(B[H].object),delete B[H];delete W[M.id]}}function C(){b(),o=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function Mm(i,t,e){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),e.update(u,n,h))}function a(l,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,n,1)}function c(l,u,h,f){if(h===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Sm(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Je&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let C=R===hr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==bn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==yn&&!C)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:P,maxSamples:A}}function bm(i){let t=this,e=null,n=0,r=!1,s=!1,o=new vn,a=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||r;return r=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let E=s?0:n,y=E*4,v=p.clippingState||null;c.value=v,v=u(g,f,y,d);for(let P=0;P!==y;++P)v[P]=e[P];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=d+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=d;y!==_;++y,v+=4)o.copy(h[y]).applyMatrix4(E,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Em(i){let t=new WeakMap;function e(o,a){return a===Go?o.mapping=Di:a===Wo&&(o.mapping=Ui),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Go||a===Wo)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Aa(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var ds=class extends us{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ai=4,Rl=[.125,.215,.35,.446,.526,.582],jn=20,Eo=new ds,Cl=new Xt,wo=null,Ao=0,To=0,Ro=!1,Jn=(1+Math.sqrt(5))/2,wi=1/Jn,Pl=[new F(-Jn,wi,0),new F(Jn,wi,0),new F(-wi,0,Jn),new F(wi,0,Jn),new F(0,Jn,-wi),new F(0,Jn,wi),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],ps=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){wo=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ll(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wo,Ao,To),this._renderer.xr.enabled=Ro,t.scissorTest=!1,Yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Di||t.mapping===Ui?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wo=this._renderer.getRenderTarget(),Ao=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:on,minFilter:on,generateMipmaps:!1,type:hr,format:Je,colorSpace:zi,depthBuffer:!1},r=Il(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Il(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wm(s)),this._blurMaterial=Am(s,t,e)}return r}_compileMaterial(t){let e=new de(this._lodPlanes[0],t);this._renderer.compile(e,Eo)}_sceneToCubeUV(t,e,n,r){let a=new Ae(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Cl),u.toneMapping=Bn,u.autoClear=!1;let d=new je({name:"PMREM.Background",side:be,depthWrite:!1,depthTest:!1}),g=new de(new ar,d),_=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Cl),_=!0);for(let p=0;p<6;p++){let E=p%3;E===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):E===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let y=this._cubeSize;Yr(r,E*y,p>2?y:0,y,y),u.setRenderTarget(r),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Di||t.mapping===Ui;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ll());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new de(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let c=this._cubeSize;Yr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Eo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Pl[(r-s-1)%Pl.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new de(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*jn-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):jn;m>jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${jn}`);let p=[],E=0;for(let R=0;R<jn;++R){let C=R/_,b=Math.exp(-C*C/2);p.push(b),R===0?E+=b:R<m&&(E+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;let v=this._sizeLods[r],P=3*v*(r>y-Ai?r-y+Ai:0),A=4*(this._cubeSize-v);Yr(e,P,A,3*v,2*v),c.setRenderTarget(e),c.render(h,Eo)}};function wm(i){let t=[],e=[],n=[],r=i,s=i-Ai+1+Rl.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);e.push(a);let c=1/a;o>i-Ai?c=Rl[o-i+Ai-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*d),y=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let A=0;A<d;A++){let R=A%3*2/3-1,C=A>2?0:-1,b=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];E.set(b,_*g*A),y.set(f,m*g*A);let M=[A,A,A,A,A,A];v.set(M,p*g*A)}let P=new cn;P.setAttribute("position",new ke(E,_)),P.setAttribute("uv",new ke(y,m)),P.setAttribute("faceIndex",new ke(v,p)),t.push(P),r>Ai&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Il(i,t,e){let n=new En(i,t,e);return n.texture.mapping=Ts,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Am(i,t,e){let n=new Float32Array(jn),r=new F(0,1,0);return new Ve({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:uc(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ll(){return new Ve({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uc(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Dl(){return new Ve({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function uc(){return`

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
	`}function Tm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Go||c===Wo,u=c===Di||c===Ui;if(l||u){let h=t.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new ps(i)),h=l?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return l&&d&&d.height>0||u&&d&&r(d)?(e===null&&(e=new ps(i)),h=l?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Rm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&tr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Cm(i,t,e,n){let r={},s=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function c(h){let f=h.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let d=h.morphAttributes;for(let g in d){let _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(h){let f=[],d=h.index,g=h.attributes.position,_=0;if(d!==null){let E=d.array;_=d.version;for(let y=0,v=E.length;y<v;y+=3){let P=E[y+0],A=E[y+1],R=E[y+2];f.push(P,A,A,R,R,P)}}else if(g!==void 0){let E=g.array;_=g.version;for(let y=0,v=E.length/3-1;y<v;y+=3){let P=y+0,A=y+1,R=y+2;f.push(P,A,A,R,R,P)}}else return;let m=new(mu(f)?ls:cs)(f,1);m.version=_;let p=s.get(h);p&&t.remove(p),s.set(h,m)}function u(h){let f=s.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Pm(i,t,e){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,s,f*o),e.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,f*o,g),e.update(d,n,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function h(f,d,g,_){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=d[E]*_[E];e.update(p,n,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Im(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Lm(i,t,e){let n=new WeakMap,r=new le;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let b=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let v=a.attributes.position.count*y,P=1;v>t.maxTextureSize&&(P=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let A=new Float32Array(v*P*4*h),R=new os(A,v,P,h);R.type=yn,R.needsUpdate=!0;let C=y*4;for(let M=0;M<h;M++){let T=m[M],W=p[M],B=E[M],H=v*P*4*M;for(let I=0;I<T.count;I++){let O=I*C;d===!0&&(r.fromBufferAttribute(T,I),A[H+O+0]=r.x,A[H+O+1]=r.y,A[H+O+2]=r.z,A[H+O+3]=0),g===!0&&(r.fromBufferAttribute(W,I),A[H+O+4]=r.x,A[H+O+5]=r.y,A[H+O+6]=r.z,A[H+O+7]=0),_===!0&&(r.fromBufferAttribute(B,I),A[H+O+8]=r.x,A[H+O+9]=r.y,A[H+O+10]=r.z,A[H+O+11]=B.itemSize===4?r.w:1)}}f={count:h,texture:R,size:new Rt(v,P)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Dm(i,t,e,n){let r=new WeakMap;function s(c){let l=n.render.frame,u=c.geometry,h=t.get(c,u);if(r.get(h)!==l&&(t.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return h}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}var ms=class extends Ue{constructor(t,e,n,r,s,o,a,c,l,u=Ri){if(u!==Ri&&u!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ri&&(n=ni),n===void 0&&u===Fi&&(n=Ni),super(null,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Qe,this.minFilter=c!==void 0?c:Qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},vu=new Ue,Ul=new ms(1,1),yu=new os,Mu=new ba,Su=new hs,Nl=[],Fl=[],Ol=new Float32Array(16),Bl=new Float32Array(9),zl=new Float32Array(4);function ki(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=Nl[r];if(s===void 0&&(s=new Float32Array(r),Nl[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Cs(i,t){let e=Fl[t];e===void 0&&(e=new Int32Array(t),Fl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Um(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Nm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2fv(this.addr,t),me(e,t)}}function Fm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;i.uniform3fv(this.addr,t),me(e,t)}}function Om(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4fv(this.addr,t),me(e,t)}}function Bm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;zl.set(n),i.uniformMatrix2fv(this.addr,!1,zl),me(e,n)}}function zm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Bl.set(n),i.uniformMatrix3fv(this.addr,!1,Bl),me(e,n)}}function km(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Ol.set(n),i.uniformMatrix4fv(this.addr,!1,Ol),me(e,n)}}function Vm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Hm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2iv(this.addr,t),me(e,t)}}function Gm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3iv(this.addr,t),me(e,t)}}function Wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4iv(this.addr,t),me(e,t)}}function Xm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2uiv(this.addr,t),me(e,t)}}function Ym(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3uiv(this.addr,t),me(e,t)}}function $m(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4uiv(this.addr,t),me(e,t)}}function Zm(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ul.compareFunction=pu,s=Ul):s=vu,e.setTexture2D(t||s,r)}function Jm(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Mu,r)}function Km(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Su,r)}function Qm(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||yu,r)}function jm(i){switch(i){case 5126:return Um;case 35664:return Nm;case 35665:return Fm;case 35666:return Om;case 35674:return Bm;case 35675:return zm;case 35676:return km;case 5124:case 35670:return Vm;case 35667:case 35671:return Hm;case 35668:case 35672:return Gm;case 35669:case 35673:return Wm;case 5125:return Xm;case 36294:return qm;case 36295:return Ym;case 36296:return $m;case 35678:case 36198:case 36298:case 36306:case 35682:return Zm;case 35679:case 36299:case 36307:return Jm;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return Qm}}function tg(i,t){i.uniform1fv(this.addr,t)}function eg(i,t){let e=ki(t,this.size,2);i.uniform2fv(this.addr,e)}function ng(i,t){let e=ki(t,this.size,3);i.uniform3fv(this.addr,e)}function ig(i,t){let e=ki(t,this.size,4);i.uniform4fv(this.addr,e)}function rg(i,t){let e=ki(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function sg(i,t){let e=ki(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function og(i,t){let e=ki(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ag(i,t){i.uniform1iv(this.addr,t)}function cg(i,t){i.uniform2iv(this.addr,t)}function lg(i,t){i.uniform3iv(this.addr,t)}function ug(i,t){i.uniform4iv(this.addr,t)}function hg(i,t){i.uniform1uiv(this.addr,t)}function fg(i,t){i.uniform2uiv(this.addr,t)}function dg(i,t){i.uniform3uiv(this.addr,t)}function pg(i,t){i.uniform4uiv(this.addr,t)}function mg(i,t,e){let n=this.cache,r=t.length,s=Cs(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||vu,s[o])}function gg(i,t,e){let n=this.cache,r=t.length,s=Cs(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Mu,s[o])}function _g(i,t,e){let n=this.cache,r=t.length,s=Cs(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Su,s[o])}function xg(i,t,e){let n=this.cache,r=t.length,s=Cs(e,r);pe(n,s)||(i.uniform1iv(this.addr,s),me(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||yu,s[o])}function vg(i){switch(i){case 5126:return tg;case 35664:return eg;case 35665:return ng;case 35666:return ig;case 35674:return rg;case 35675:return sg;case 35676:return og;case 5124:case 35670:return ag;case 35667:case 35671:return cg;case 35668:case 35672:return lg;case 35669:case 35673:return ug;case 5125:return hg;case 36294:return fg;case 36295:return dg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return xg}}var Ta=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=jm(e.type)}},Ra=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vg(e.type)}},Ca=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},Co=/(\w+)(\])?(\[|\.)?/g;function kl(i,t){i.seq.push(t),i.map[t.id]=t}function yg(i,t,e){let n=i.name,r=n.length;for(Co.lastIndex=0;;){let s=Co.exec(n),o=Co.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){kl(e,l===void 0?new Ta(a,i,t):new Ra(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Ca(a),kl(e,h)),e=h}}}var Pi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);yg(s,o,this)}}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function Vl(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Mg=37297,Sg=0;function bg(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Hl=new Bt;function Eg(i){Zt._getMatrix(Hl,Zt.workingColorSpace,i);let t=`mat3( ${Hl.elements.map(e=>e.toFixed(4))} )`;switch(Zt.getTransfer(i)){case Rs:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Gl(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+bg(i.getShaderSource(t),o)}else return r}function wg(i,t){let e=Eg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Ag(i,t){let e;switch(t){case Jh:e="Linear";break;case Kh:e="Reinhard";break;case Qh:e="Cineon";break;case jh:e="ACESFilmic";break;case ef:e="AgX";break;case nf:e="Neutral";break;case tf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var $r=new F;function Tg(){Zt.getLuminanceCoefficients($r);let i=$r.x.toFixed(4),t=$r.y.toFixed(4),e=$r.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function Cg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Pg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function er(i){return i!==""}function Wl(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pa(i){return i.replace(Ig,Dg)}var Lg=new Map;function Dg(i,t){let e=kt[t];if(e===void 0){let n=Lg.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Pa(e)}var Ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ql(i){return i.replace(Ug,Ng)}function Ng(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Yl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Fg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===eu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ch?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xn&&(t="SHADOWMAP_TYPE_VSM"),t}function Og(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Di:case Ui:t="ENVMAP_TYPE_CUBE";break;case Ts:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Bg(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ui&&(t="ENVMAP_MODE_REFRACTION"),t}function zg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ic:t="ENVMAP_BLENDING_MULTIPLY";break;case $h:t="ENVMAP_BLENDING_MIX";break;case Zh:t="ENVMAP_BLENDING_ADD";break}return t}function kg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Vg(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Fg(e),l=Og(e),u=Bg(e),h=zg(e),f=kg(e),d=Rg(e),g=Cg(s),_=r.createProgram(),m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(er).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(er).join(`
`),p.length>0&&(p+=`
`)):(m=[Yl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),p=[Yl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?kt.tonemapping_pars_fragment:"",e.toneMapping!==Bn?Ag("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,wg("linearToOutputTexel",e.outputColorSpace),Tg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(er).join(`
`)),o=Pa(o),o=Wl(o,e),o=Xl(o,e),a=Pa(a),a=Wl(a,e),a=Xl(a,e),o=ql(o),a=ql(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===al?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=E+m+o,v=E+p+a,P=Vl(r,r.VERTEX_SHADER,y),A=Vl(r,r.FRAGMENT_SHADER,v);r.attachShader(_,P),r.attachShader(_,A),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function R(T){if(i.debug.checkShaderErrors){let W=r.getProgramInfoLog(_).trim(),B=r.getShaderInfoLog(P).trim(),H=r.getShaderInfoLog(A).trim(),I=!0,O=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(I=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,P,A);else{let J=Gl(r,P,"vertex"),k=Gl(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+W+`
`+J+`
`+k)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(B===""||H==="")&&(O=!1);O&&(T.diagnostics={runnable:I,programLog:W,vertexShader:{log:B,prefix:m},fragmentShader:{log:H,prefix:p}})}r.deleteShader(P),r.deleteShader(A),C=new Pi(r,_),b=Pg(r,_)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,Mg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=A,this}var Hg=0,Ia=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new La(t),e.set(t,n)),n}},La=class{constructor(t){this.id=Hg++,this.code=t,this.usedTimes=0}};function Gg(i,t,e,n,r,s,o){let a=new as,c=new Ia,l=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures,d=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,M,T,W,B){let H=W.fog,I=B.geometry,O=b.isMeshStandardMaterial?W.environment:null,J=(b.isMeshStandardMaterial?e:t).get(b.envMap||O),k=J&&J.mapping===Ts?J.image.height:null,tt=g[b.type];b.precision!==null&&(d=r.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let nt=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,ft=nt!==void 0?nt.length:0,Pt=0;I.morphAttributes.position!==void 0&&(Pt=1),I.morphAttributes.normal!==void 0&&(Pt=2),I.morphAttributes.color!==void 0&&(Pt=3);let Vt,q,j,vt;if(tt){let te=sn[tt];Vt=te.vertexShader,q=te.fragmentShader}else Vt=b.vertexShader,q=b.fragmentShader,c.update(b),j=c.getVertexShaderID(b),vt=c.getFragmentShaderID(b);let st=i.getRenderTarget(),K=i.state.buffers.depth.getReversed(),ot=B.isInstancedMesh===!0,wt=B.isBatchedMesh===!0,xt=!!b.map,At=!!b.matcap,Nt=!!J,D=!!b.aoMap,Ht=!!b.lightMap,Tt=!!b.bumpMap,Ut=!!b.normalMap,dt=!!b.displacementMap,Wt=!!b.emissiveMap,pt=!!b.metalnessMap,w=!!b.roughnessMap,x=b.anisotropy>0,z=b.clearcoat>0,$=b.dispersion>0,Q=b.iridescence>0,Y=b.sheen>0,bt=b.transmission>0,ct=x&&!!b.anisotropyMap,mt=z&&!!b.clearcoatMap,$t=z&&!!b.clearcoatNormalMap,et=z&&!!b.clearcoatRoughnessMap,gt=Q&&!!b.iridescenceMap,Ct=Q&&!!b.iridescenceThicknessMap,It=Y&&!!b.sheenColorMap,_t=Y&&!!b.sheenRoughnessMap,Yt=!!b.specularMap,zt=!!b.specularColorMap,ie=!!b.specularIntensityMap,L=bt&&!!b.transmissionMap,at=bt&&!!b.thicknessMap,X=!!b.gradientMap,Z=!!b.alphaMap,ht=b.alphaTest>0,lt=!!b.alphaHash,Ft=!!b.extensions,ce=Bn;b.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ce=i.toneMapping);let ve={shaderID:tt,shaderType:b.type,shaderName:b.name,vertexShader:Vt,fragmentShader:q,defines:b.defines,customVertexShaderID:j,customFragmentShaderID:vt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:wt,batchingColor:wt&&B._colorsTexture!==null,instancing:ot,instancingColor:ot&&B.instanceColor!==null,instancingMorph:ot&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:zi,alphaToCoverage:!!b.alphaToCoverage,map:xt,matcap:At,envMap:Nt,envMapMode:Nt&&J.mapping,envMapCubeUVHeight:k,aoMap:D,lightMap:Ht,bumpMap:Tt,normalMap:Ut,displacementMap:f&&dt,emissiveMap:Wt,normalMapObjectSpace:Ut&&b.normalMapType===af,normalMapTangentSpace:Ut&&b.normalMapType===du,metalnessMap:pt,roughnessMap:w,anisotropy:x,anisotropyMap:ct,clearcoat:z,clearcoatMap:mt,clearcoatNormalMap:$t,clearcoatRoughnessMap:et,dispersion:$,iridescence:Q,iridescenceMap:gt,iridescenceThicknessMap:Ct,sheen:Y,sheenColorMap:It,sheenRoughnessMap:_t,specularMap:Yt,specularColorMap:zt,specularIntensityMap:ie,transmission:bt,transmissionMap:L,thicknessMap:at,gradientMap:X,opaque:b.transparent===!1&&b.blending===Ti&&b.alphaToCoverage===!1,alphaMap:Z,alphaTest:ht,alphaHash:lt,combine:b.combine,mapUv:xt&&_(b.map.channel),aoMapUv:D&&_(b.aoMap.channel),lightMapUv:Ht&&_(b.lightMap.channel),bumpMapUv:Tt&&_(b.bumpMap.channel),normalMapUv:Ut&&_(b.normalMap.channel),displacementMapUv:dt&&_(b.displacementMap.channel),emissiveMapUv:Wt&&_(b.emissiveMap.channel),metalnessMapUv:pt&&_(b.metalnessMap.channel),roughnessMapUv:w&&_(b.roughnessMap.channel),anisotropyMapUv:ct&&_(b.anisotropyMap.channel),clearcoatMapUv:mt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:$t&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:It&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:_t&&_(b.sheenRoughnessMap.channel),specularMapUv:Yt&&_(b.specularMap.channel),specularColorMapUv:zt&&_(b.specularColorMap.channel),specularIntensityMapUv:ie&&_(b.specularIntensityMap.channel),transmissionMapUv:L&&_(b.transmissionMap.channel),thicknessMapUv:at&&_(b.thicknessMap.channel),alphaMapUv:Z&&_(b.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Ut||x),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!I.attributes.uv&&(xt||Z),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:K,skinning:B.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Pt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:xt&&b.map.isVideoTexture===!0&&Zt.getTransfer(b.map.colorSpace)===ee,decodeVideoTextureEmissive:Wt&&b.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(b.emissiveMap.colorSpace)===ee,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ze,flipSided:b.side===be,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ft&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&b.extensions.multiDraw===!0||wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ve.vertexUv1s=l.has(1),ve.vertexUv2s=l.has(2),ve.vertexUv3s=l.has(3),l.clear(),ve}function p(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let T in b.defines)M.push(T),M.push(b.defines[T]);return b.isRawShaderMaterial===!1&&(E(M,b),y(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function E(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){let M=g[b.type],T;if(M){let W=sn[M];T=Df.clone(W.uniforms)}else T=b.uniforms;return T}function P(b,M){let T;for(let W=0,B=u.length;W<B;W++){let H=u[W];if(H.cacheKey===M){T=H,++T.usedTimes;break}}return T===void 0&&(T=new Vg(i,M,b,s),u.push(T)),T}function A(b){if(--b.usedTimes===0){let M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function R(b){c.remove(b)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:P,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:C}}function Wg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Xg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function $l(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Zl(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(h,f,d,g,_,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function a(h,f,d,g,_,m){let p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?r.push(p):e.push(p)}function c(h,f,d,g,_,m){let p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?r.unshift(p):e.unshift(p)}function l(h,f){e.length>1&&e.sort(h||Xg),n.length>1&&n.sort(f||$l),r.length>1&&r.sort(f||$l)}function u(){for(let h=t,f=i.length;h<f;h++){let d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function qg(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new Zl,i.set(n,[o])):r>=s.length?(o=new Zl,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Yg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Xt};break;case"SpotLight":e={position:new F,direction:new F,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function $g(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Zg=0;function Jg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Kg(i){let t=new Yg,e=$g(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);let r=new F,s=new ue,o=new ue;function a(l){let u=0,h=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,E=0,y=0,v=0,P=0,A=0,R=0;l.sort(Jg);for(let b=0,M=l.length;b<M;b++){let T=l[b],W=T.color,B=T.intensity,H=T.distance,I=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=W.r*B,h+=W.g*B,f+=W.b*B;else if(T.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(T.sh.coefficients[O],B);R++}else if(T.isDirectionalLight){let O=t.get(T);if(O.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let J=T.shadow,k=e.get(T);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,n.directionalShadow[d]=k,n.directionalShadowMap[d]=I,n.directionalShadowMatrix[d]=T.shadow.matrix,E++}n.directional[d]=O,d++}else if(T.isSpotLight){let O=t.get(T);O.position.setFromMatrixPosition(T.matrixWorld),O.color.copy(W).multiplyScalar(B),O.distance=H,O.coneCos=Math.cos(T.angle),O.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),O.decay=T.decay,n.spot[_]=O;let J=T.shadow;if(T.map&&(n.spotLightMap[P]=T.map,P++,J.updateMatrices(T),T.castShadow&&A++),n.spotLightMatrix[_]=J.matrix,T.castShadow){let k=e.get(T);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=I,v++}_++}else if(T.isRectAreaLight){let O=t.get(T);O.color.copy(W).multiplyScalar(B),O.halfWidth.set(T.width*.5,0,0),O.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=O,m++}else if(T.isPointLight){let O=t.get(T);if(O.color.copy(T.color).multiplyScalar(T.intensity),O.distance=T.distance,O.decay=T.decay,T.castShadow){let J=T.shadow,k=e.get(T);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,k.shadowCameraNear=J.camera.near,k.shadowCameraFar=J.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=I,n.pointShadowMatrix[g]=T.shadow.matrix,y++}n.point[g]=O,g++}else if(T.isHemisphereLight){let O=t.get(T);O.skyColor.copy(T.color).multiplyScalar(B),O.groundColor.copy(T.groundColor).multiplyScalar(B),n.hemi[p]=O,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==E||C.numPointShadows!==y||C.numSpotShadows!==v||C.numSpotMaps!==P||C.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=E,C.numPointShadows=y,C.numSpotShadows=v,C.numSpotMaps=P,C.numLightProbes=R,n.version=Zg++)}function c(l,u){let h=0,f=0,d=0,g=0,_=0,m=u.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){let y=l[p];if(y.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),h++}else if(y.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(y.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Jl(i){let t=new Kg(i),e=[],n=[];function r(u){l.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function c(u){t.setupView(e,u)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Qg(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new Jl(i),t.set(r,[a])):s>=o.length?(a=new Jl(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Da=class extends ri{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=sf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ua=class extends ri{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,t0=`uniform sampler2D shadow_pass;
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
}`;function e0(i,t,e){let n=new cr,r=new Rt,s=new Rt,o=new le,a=new Da({depthPacking:of}),c=new Ua,l={},u=e.maxTextureSize,h={[zn]:be,[be]:zn,[Ze]:Ze},f=new Ve({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:jg,fragmentShader:t0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new cn;g.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new de(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eu;let p=this.type;this.render=function(A,R,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let b=i.getRenderTarget(),M=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),W=i.state;W.setBlending(On),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let B=p!==xn&&this.type===xn,H=p===xn&&this.type!==xn;for(let I=0,O=A.length;I<O;I++){let J=A[I],k=J.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);let tt=k.getFrameExtents();if(r.multiply(tt),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/tt.x),r.x=s.x*tt.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/tt.y),r.y=s.y*tt.y,k.mapSize.y=s.y)),k.map===null||B===!0||H===!0){let ft=this.type!==xn?{minFilter:Qe,magFilter:Qe}:{};k.map!==null&&k.map.dispose(),k.map=new En(r.x,r.y,ft),k.map.texture.name=J.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();let nt=k.getViewportCount();for(let ft=0;ft<nt;ft++){let Pt=k.getViewport(ft);o.set(s.x*Pt.x,s.y*Pt.y,s.x*Pt.z,s.y*Pt.w),W.viewport(o),k.updateMatrices(J,ft),n=k.getFrustum(),v(R,C,k.camera,J,this.type)}k.isPointLightShadow!==!0&&this.type===xn&&E(k,C),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,M,T)};function E(A,R){let C=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new En(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,C,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,C,d,_,null)}function y(A,R,C,b){let M=null,T=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(T!==void 0)M=T;else if(M=C.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let W=M.uuid,B=R.uuid,H=l[W];H===void 0&&(H={},l[W]=H);let I=H[B];I===void 0&&(I=M.clone(),H[B]=I,R.addEventListener("dispose",P)),M=I}if(M.visible=R.visible,M.wireframe=R.wireframe,b===xn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let W=i.properties.get(M);W.light=C}return M}function v(A,R,C,b,M){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===xn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);let B=t.update(A),H=A.material;if(Array.isArray(H)){let I=B.groups;for(let O=0,J=I.length;O<J;O++){let k=I[O],tt=H[k.materialIndex];if(tt&&tt.visible){let nt=y(A,tt,b,M);A.onBeforeShadow(i,A,R,C,B,nt,k),i.renderBufferDirect(C,null,B,nt,A,k),A.onAfterShadow(i,A,R,C,B,nt,k)}}}else if(H.visible){let I=y(A,H,b,M);A.onBeforeShadow(i,A,R,C,B,I,null),i.renderBufferDirect(C,null,B,I,A,null),A.onAfterShadow(i,A,R,C,B,I,null)}}let W=A.children;for(let B=0,H=W.length;B<H;B++)v(W[B],R,C,b,M)}function P(A){A.target.removeEventListener("dispose",P);for(let C in l){let b=l[C],M=A.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var n0={[Fo]:Oo,[Bo]:Vo,[zo]:Ho,[Li]:ko,[Oo]:Fo,[Vo]:Bo,[Ho]:zo,[ko]:Li};function i0(i,t){function e(){let L=!1,at=new le,X=null,Z=new le(0,0,0,0);return{setMask:function(ht){X!==ht&&!L&&(i.colorMask(ht,ht,ht,ht),X=ht)},setLocked:function(ht){L=ht},setClear:function(ht,lt,Ft,ce,ve){ve===!0&&(ht*=ce,lt*=ce,Ft*=ce),at.set(ht,lt,Ft,ce),Z.equals(at)===!1&&(i.clearColor(ht,lt,Ft,ce),Z.copy(at))},reset:function(){L=!1,X=null,Z.set(-1,0,0,0)}}}function n(){let L=!1,at=!1,X=null,Z=null,ht=null;return{setReversed:function(lt){if(at!==lt){let Ft=t.get("EXT_clip_control");at?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);let ce=ht;ht=null,this.setClear(ce)}at=lt},getReversed:function(){return at},setTest:function(lt){lt?st(i.DEPTH_TEST):K(i.DEPTH_TEST)},setMask:function(lt){X!==lt&&!L&&(i.depthMask(lt),X=lt)},setFunc:function(lt){if(at&&(lt=n0[lt]),Z!==lt){switch(lt){case Fo:i.depthFunc(i.NEVER);break;case Oo:i.depthFunc(i.ALWAYS);break;case Bo:i.depthFunc(i.LESS);break;case Li:i.depthFunc(i.LEQUAL);break;case zo:i.depthFunc(i.EQUAL);break;case ko:i.depthFunc(i.GEQUAL);break;case Vo:i.depthFunc(i.GREATER);break;case Ho:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=lt}},setLocked:function(lt){L=lt},setClear:function(lt){ht!==lt&&(at&&(lt=1-lt),i.clearDepth(lt),ht=lt)},reset:function(){L=!1,X=null,Z=null,ht=null,at=!1}}}function r(){let L=!1,at=null,X=null,Z=null,ht=null,lt=null,Ft=null,ce=null,ve=null;return{setTest:function(te){L||(te?st(i.STENCIL_TEST):K(i.STENCIL_TEST))},setMask:function(te){at!==te&&!L&&(i.stencilMask(te),at=te)},setFunc:function(te,We,hn){(X!==te||Z!==We||ht!==hn)&&(i.stencilFunc(te,We,hn),X=te,Z=We,ht=hn)},setOp:function(te,We,hn){(lt!==te||Ft!==We||ce!==hn)&&(i.stencilOp(te,We,hn),lt=te,Ft=We,ce=hn)},setLocked:function(te){L=te},setClear:function(te){ve!==te&&(i.clearStencil(te),ve=te)},reset:function(){L=!1,at=null,X=null,Z=null,ht=null,lt=null,Ft=null,ce=null,ve=null}}}let s=new e,o=new n,a=new r,c=new WeakMap,l=new WeakMap,u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,y=null,v=null,P=null,A=null,R=new Xt(0,0,0),C=0,b=!1,M=null,T=null,W=null,B=null,H=null,I=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,J=0,k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(k)[1]),O=J>=1):k.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),O=J>=2);let tt=null,nt={},ft=i.getParameter(i.SCISSOR_BOX),Pt=i.getParameter(i.VIEWPORT),Vt=new le().fromArray(ft),q=new le().fromArray(Pt);function j(L,at,X,Z){let ht=new Uint8Array(4),lt=i.createTexture();i.bindTexture(L,lt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<X;Ft++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(at,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,ht):i.texImage2D(at+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ht);return lt}let vt={};vt[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),vt[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),vt[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(i.DEPTH_TEST),o.setFunc(Li),Tt(!1),Ut(jc),st(i.CULL_FACE),D(On);function st(L){u[L]!==!0&&(i.enable(L),u[L]=!0)}function K(L){u[L]!==!1&&(i.disable(L),u[L]=!1)}function ot(L,at){return h[L]!==at?(i.bindFramebuffer(L,at),h[L]=at,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=at),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=at),!0):!1}function wt(L,at){let X=d,Z=!1;if(L){X=f.get(at),X===void 0&&(X=[],f.set(at,X));let ht=L.textures;if(X.length!==ht.length||X[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Ft=ht.length;lt<Ft;lt++)X[lt]=i.COLOR_ATTACHMENT0+lt;X.length=ht.length,Z=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,Z=!0);Z&&i.drawBuffers(X)}function xt(L){return g!==L?(i.useProgram(L),g=L,!0):!1}let At={[Kn]:i.FUNC_ADD,[Ih]:i.FUNC_SUBTRACT,[Lh]:i.FUNC_REVERSE_SUBTRACT};At[Dh]=i.MIN,At[Uh]=i.MAX;let Nt={[Nh]:i.ZERO,[Fh]:i.ONE,[Oh]:i.SRC_COLOR,[Uo]:i.SRC_ALPHA,[Gh]:i.SRC_ALPHA_SATURATE,[Vh]:i.DST_COLOR,[zh]:i.DST_ALPHA,[Bh]:i.ONE_MINUS_SRC_COLOR,[No]:i.ONE_MINUS_SRC_ALPHA,[Hh]:i.ONE_MINUS_DST_COLOR,[kh]:i.ONE_MINUS_DST_ALPHA,[Wh]:i.CONSTANT_COLOR,[Xh]:i.ONE_MINUS_CONSTANT_COLOR,[qh]:i.CONSTANT_ALPHA,[Yh]:i.ONE_MINUS_CONSTANT_ALPHA};function D(L,at,X,Z,ht,lt,Ft,ce,ve,te){if(L===On){_===!0&&(K(i.BLEND),_=!1);return}if(_===!1&&(st(i.BLEND),_=!0),L!==Ph){if(L!==m||te!==b){if((p!==Kn||v!==Kn)&&(i.blendEquation(i.FUNC_ADD),p=Kn,v=Kn),te)switch(L){case Ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ii:i.blendFunc(i.ONE,i.ONE);break;case tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case el:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ii:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case el:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,y=null,P=null,A=null,R.set(0,0,0),C=0,m=L,b=te}return}ht=ht||at,lt=lt||X,Ft=Ft||Z,(at!==p||ht!==v)&&(i.blendEquationSeparate(At[at],At[ht]),p=at,v=ht),(X!==E||Z!==y||lt!==P||Ft!==A)&&(i.blendFuncSeparate(Nt[X],Nt[Z],Nt[lt],Nt[Ft]),E=X,y=Z,P=lt,A=Ft),(ce.equals(R)===!1||ve!==C)&&(i.blendColor(ce.r,ce.g,ce.b,ve),R.copy(ce),C=ve),m=L,b=!1}function Ht(L,at){L.side===Ze?K(i.CULL_FACE):st(i.CULL_FACE);let X=L.side===be;at&&(X=!X),Tt(X),L.blending===Ti&&L.transparent===!1?D(On):D(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);let Z=L.stencilWrite;a.setTest(Z),Z&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Wt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):K(i.SAMPLE_ALPHA_TO_COVERAGE)}function Tt(L){M!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),M=L)}function Ut(L){L!==Th?(st(i.CULL_FACE),L!==T&&(L===jc?i.cullFace(i.BACK):L===Rh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):K(i.CULL_FACE),T=L}function dt(L){L!==W&&(O&&i.lineWidth(L),W=L)}function Wt(L,at,X){L?(st(i.POLYGON_OFFSET_FILL),(B!==at||H!==X)&&(i.polygonOffset(at,X),B=at,H=X)):K(i.POLYGON_OFFSET_FILL)}function pt(L){L?st(i.SCISSOR_TEST):K(i.SCISSOR_TEST)}function w(L){L===void 0&&(L=i.TEXTURE0+I-1),tt!==L&&(i.activeTexture(L),tt=L)}function x(L,at,X){X===void 0&&(tt===null?X=i.TEXTURE0+I-1:X=tt);let Z=nt[X];Z===void 0&&(Z={type:void 0,texture:void 0},nt[X]=Z),(Z.type!==L||Z.texture!==at)&&(tt!==X&&(i.activeTexture(X),tt=X),i.bindTexture(L,at||vt[L]),Z.type=L,Z.texture=at)}function z(){let L=nt[tt];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $t(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ct(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function It(L){Vt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Vt.copy(L))}function _t(L){q.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),q.copy(L))}function Yt(L,at){let X=l.get(at);X===void 0&&(X=new WeakMap,l.set(at,X));let Z=X.get(L);Z===void 0&&(Z=i.getUniformBlockIndex(at,L.name),X.set(L,Z))}function zt(L,at){let Z=l.get(at).get(L);c.get(at)!==Z&&(i.uniformBlockBinding(at,Z,L.__bindingPointIndex),c.set(at,Z))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},tt=null,nt={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,E=null,y=null,v=null,P=null,A=null,R=new Xt(0,0,0),C=0,b=!1,M=null,T=null,W=null,B=null,H=null,Vt.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:st,disable:K,bindFramebuffer:ot,drawBuffers:wt,useProgram:xt,setBlending:D,setMaterial:Ht,setFlipSided:Tt,setCullFace:Ut,setLineWidth:dt,setPolygonOffset:Wt,setScissorTest:pt,activeTexture:w,bindTexture:x,unbindTexture:z,compressedTexImage2D:$,compressedTexImage3D:Q,texImage2D:gt,texImage3D:Ct,updateUBOMapping:Yt,uniformBlockBinding:zt,texStorage2D:$t,texStorage3D:et,texSubImage2D:Y,texSubImage3D:bt,compressedTexSubImage2D:ct,compressedTexSubImage3D:mt,scissor:It,viewport:_t,reset:ie}}function Kl(i,t,e,n){let r=r0(n);switch(e){case ou:return i*t;case cu:return i*t;case lu:return i*t*2;case uu:return i*t/r.components*r.byteLength;case ac:return i*t/r.components*r.byteLength;case hu:return i*t*2/r.components*r.byteLength;case cc:return i*t*2/r.components*r.byteLength;case au:return i*t*3/r.components*r.byteLength;case Je:return i*t*4/r.components*r.byteLength;case lc:return i*t*4/r.components*r.byteLength;case Kr:case Qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jr:case ts:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $o:case Jo:return Math.max(i,16)*Math.max(t,8)/4;case Yo:case Zo:return Math.max(i,8)*Math.max(t,8)/2;case Ko:case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ea:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case na:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ia:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ra:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case sa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case oa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case aa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ca:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case la:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ua:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ha:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case fa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case da:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case es:case pa:case ma:return Math.ceil(i/4)*Math.ceil(t/4)*16;case fu:case ga:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _a:case xa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function r0(i){switch(i){case bn:case iu:return{byteLength:1,components:1};case sr:case ru:case hr:return{byteLength:2,components:1};case sc:case oc:return{byteLength:2,components:4};case ni:case rc:case yn:return{byteLength:4,components:1};case su:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function s0(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Rt,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return d?new OffscreenCanvas(w,x):rs("canvas")}function _(w,x,z){let $=1,Q=pt(w);if((Q.width>z||Q.height>z)&&($=z/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap||typeof VideoFrame!="undefined"&&w instanceof VideoFrame){let Y=Math.floor($*Q.width),bt=Math.floor($*Q.height);h===void 0&&(h=g(Y,bt));let ct=x?g(Y,bt):h;return ct.width=Y,ct.height=bt,ct.getContext("2d").drawImage(w,0,0,Y,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+bt+")."),ct}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,x,z,$,Q=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=x;if(x===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8)),x===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),x===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8)),x===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),x===i.RGBA){let bt=Q?Rs:Zt.getTransfer($);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=bt===ee?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(w,x){let z;return w?x===null||x===ni||x===Ni?z=i.DEPTH24_STENCIL8:x===yn?z=i.DEPTH32F_STENCIL8:x===sr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ni||x===Ni?z=i.DEPTH_COMPONENT24:x===yn?z=i.DEPTH_COMPONENT32F:x===sr&&(z=i.DEPTH_COMPONENT16),z}function P(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Qe&&w.minFilter!==on?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function A(w){let x=w.target;x.removeEventListener("dispose",A),C(x),x.isVideoTexture&&u.delete(x)}function R(w){let x=w.target;x.removeEventListener("dispose",R),M(x)}function C(w){let x=n.get(w);if(x.__webglInit===void 0)return;let z=w.source,$=f.get(z);if($){let Q=$[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(w),Object.keys($).length===0&&f.delete(z)}n.remove(w)}function b(w){let x=n.get(w);i.deleteTexture(x.__webglTexture);let z=w.source,$=f.get(z);delete $[x.__cacheKey],o.memory.textures--}function M(w){let x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(x.__webglFramebuffer[$]))for(let Q=0;Q<x.__webglFramebuffer[$].length;Q++)i.deleteFramebuffer(x.__webglFramebuffer[$][Q]);else i.deleteFramebuffer(x.__webglFramebuffer[$]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[$])}else{if(Array.isArray(x.__webglFramebuffer))for(let $=0;$<x.__webglFramebuffer.length;$++)i.deleteFramebuffer(x.__webglFramebuffer[$]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let $=0;$<x.__webglColorRenderbuffer.length;$++)x.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[$]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let z=w.textures;for(let $=0,Q=z.length;$<Q;$++){let Y=n.get(z[$]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(z[$])}n.remove(w)}let T=0;function W(){T=0}function B(){let w=T;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),T+=1,w}function H(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function I(w,x){let z=n.get(w);if(w.isVideoTexture&&dt(w),w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){let $=w.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,w,x);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+x)}function O(w,x){let z=n.get(w);if(w.version>0&&z.__version!==w.version){q(z,w,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+x)}function J(w,x){let z=n.get(w);if(w.version>0&&z.__version!==w.version){q(z,w,x);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+x)}function k(w,x){let z=n.get(w);if(w.version>0&&z.__version!==w.version){j(z,w,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+x)}let tt={[Xo]:i.REPEAT,[ti]:i.CLAMP_TO_EDGE,[qo]:i.MIRRORED_REPEAT},nt={[Qe]:i.NEAREST,[rf]:i.NEAREST_MIPMAP_NEAREST,[Rr]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[js]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},ft={[cf]:i.NEVER,[pf]:i.ALWAYS,[lf]:i.LESS,[pu]:i.LEQUAL,[uf]:i.EQUAL,[df]:i.GEQUAL,[hf]:i.GREATER,[ff]:i.NOTEQUAL};function Pt(w,x){if(x.type===yn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===on||x.magFilter===js||x.magFilter===Rr||x.magFilter===ei||x.minFilter===on||x.minFilter===js||x.minFilter===Rr||x.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,tt[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,tt[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,tt[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,nt[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,nt[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ft[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Qe||x.minFilter!==Rr&&x.minFilter!==ei||x.type===yn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Vt(w,x){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",A));let $=x.source,Q=f.get($);Q===void 0&&(Q={},f.set($,Q));let Y=H(x);if(Y!==w.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[Y].usedTimes++;let bt=Q[w.__cacheKey];bt!==void 0&&(Q[w.__cacheKey].usedTimes--,bt.usedTimes===0&&b(x)),w.__cacheKey=Y,w.__webglTexture=Q[Y].texture}return z}function q(w,x,z){let $=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&($=i.TEXTURE_3D);let Q=Vt(w,x),Y=x.source;e.bindTexture($,w.__webglTexture,i.TEXTURE0+z);let bt=n.get(Y);if(Y.version!==bt.__version||Q===!0){e.activeTexture(i.TEXTURE0+z);let ct=Zt.getPrimaries(Zt.workingColorSpace),mt=x.colorSpace===Fn?null:Zt.getPrimaries(x.colorSpace),$t=x.colorSpace===Fn||ct===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let et=_(x.image,!1,r.maxTextureSize);et=Wt(x,et);let gt=s.convert(x.format,x.colorSpace),Ct=s.convert(x.type),It=y(x.internalFormat,gt,Ct,x.colorSpace,x.isVideoTexture);Pt($,x);let _t,Yt=x.mipmaps,zt=x.isVideoTexture!==!0,ie=bt.__version===void 0||Q===!0,L=Y.dataReady,at=P(x,et);if(x.isDepthTexture)It=v(x.format===Fi,x.type),ie&&(zt?e.texStorage2D(i.TEXTURE_2D,1,It,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,It,et.width,et.height,0,gt,Ct,null));else if(x.isDataTexture)if(Yt.length>0){zt&&ie&&e.texStorage2D(i.TEXTURE_2D,at,It,Yt[0].width,Yt[0].height);for(let X=0,Z=Yt.length;X<Z;X++)_t=Yt[X],zt?L&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,_t.width,_t.height,gt,Ct,_t.data):e.texImage2D(i.TEXTURE_2D,X,It,_t.width,_t.height,0,gt,Ct,_t.data);x.generateMipmaps=!1}else zt?(ie&&e.texStorage2D(i.TEXTURE_2D,at,It,et.width,et.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,gt,Ct,et.data)):e.texImage2D(i.TEXTURE_2D,0,It,et.width,et.height,0,gt,Ct,et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){zt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,It,Yt[0].width,Yt[0].height,et.depth);for(let X=0,Z=Yt.length;X<Z;X++)if(_t=Yt[X],x.format!==Je)if(gt!==null)if(zt){if(L)if(x.layerUpdates.size>0){let ht=Kl(_t.width,_t.height,x.format,x.type);for(let lt of x.layerUpdates){let Ft=_t.data.subarray(lt*ht/_t.data.BYTES_PER_ELEMENT,(lt+1)*ht/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,lt,_t.width,_t.height,1,gt,Ft)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,_t.width,_t.height,et.depth,gt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,It,_t.width,_t.height,et.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,_t.width,_t.height,et.depth,gt,Ct,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,It,_t.width,_t.height,et.depth,0,gt,Ct,_t.data)}else{zt&&ie&&e.texStorage2D(i.TEXTURE_2D,at,It,Yt[0].width,Yt[0].height);for(let X=0,Z=Yt.length;X<Z;X++)_t=Yt[X],x.format!==Je?gt!==null?zt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,X,It,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?L&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,_t.width,_t.height,gt,Ct,_t.data):e.texImage2D(i.TEXTURE_2D,X,It,_t.width,_t.height,0,gt,Ct,_t.data)}else if(x.isDataArrayTexture)if(zt){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,It,et.width,et.height,et.depth),L)if(x.layerUpdates.size>0){let X=Kl(et.width,et.height,x.format,x.type);for(let Z of x.layerUpdates){let ht=et.data.subarray(Z*X/et.data.BYTES_PER_ELEMENT,(Z+1)*X/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,et.width,et.height,1,gt,Ct,ht)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,gt,Ct,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,It,et.width,et.height,et.depth,0,gt,Ct,et.data);else if(x.isData3DTexture)zt?(ie&&e.texStorage3D(i.TEXTURE_3D,at,It,et.width,et.height,et.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,gt,Ct,et.data)):e.texImage3D(i.TEXTURE_3D,0,It,et.width,et.height,et.depth,0,gt,Ct,et.data);else if(x.isFramebufferTexture){if(ie)if(zt)e.texStorage2D(i.TEXTURE_2D,at,It,et.width,et.height);else{let X=et.width,Z=et.height;for(let ht=0;ht<at;ht++)e.texImage2D(i.TEXTURE_2D,ht,It,X,Z,0,gt,Ct,null),X>>=1,Z>>=1}}else if(Yt.length>0){if(zt&&ie){let X=pt(Yt[0]);e.texStorage2D(i.TEXTURE_2D,at,It,X.width,X.height)}for(let X=0,Z=Yt.length;X<Z;X++)_t=Yt[X],zt?L&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,gt,Ct,_t):e.texImage2D(i.TEXTURE_2D,X,It,gt,Ct,_t);x.generateMipmaps=!1}else if(zt){if(ie){let X=pt(et);e.texStorage2D(i.TEXTURE_2D,at,It,X.width,X.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Ct,et)}else e.texImage2D(i.TEXTURE_2D,0,It,gt,Ct,et);m(x)&&p($),bt.__version=Y.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function j(w,x,z){if(x.image.length!==6)return;let $=Vt(w,x),Q=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+z);let Y=n.get(Q);if(Q.version!==Y.__version||$===!0){e.activeTexture(i.TEXTURE0+z);let bt=Zt.getPrimaries(Zt.workingColorSpace),ct=x.colorSpace===Fn?null:Zt.getPrimaries(x.colorSpace),mt=x.colorSpace===Fn||bt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let $t=x.isCompressedTexture||x.image[0].isCompressedTexture,et=x.image[0]&&x.image[0].isDataTexture,gt=[];for(let Z=0;Z<6;Z++)!$t&&!et?gt[Z]=_(x.image[Z],!0,r.maxCubemapSize):gt[Z]=et?x.image[Z].image:x.image[Z],gt[Z]=Wt(x,gt[Z]);let Ct=gt[0],It=s.convert(x.format,x.colorSpace),_t=s.convert(x.type),Yt=y(x.internalFormat,It,_t,x.colorSpace),zt=x.isVideoTexture!==!0,ie=Y.__version===void 0||$===!0,L=Q.dataReady,at=P(x,Ct);Pt(i.TEXTURE_CUBE_MAP,x);let X;if($t){zt&&ie&&e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Yt,Ct.width,Ct.height);for(let Z=0;Z<6;Z++){X=gt[Z].mipmaps;for(let ht=0;ht<X.length;ht++){let lt=X[ht];x.format!==Je?It!==null?zt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,0,0,lt.width,lt.height,It,lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,Yt,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,0,0,lt.width,lt.height,It,_t,lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht,Yt,lt.width,lt.height,0,It,_t,lt.data)}}}else{if(X=x.mipmaps,zt&&ie){X.length>0&&at++;let Z=pt(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,at,Yt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(et){zt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,gt[Z].width,gt[Z].height,It,_t,gt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Yt,gt[Z].width,gt[Z].height,0,It,_t,gt[Z].data);for(let ht=0;ht<X.length;ht++){let Ft=X[ht].image[Z].image;zt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,0,0,Ft.width,Ft.height,It,_t,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,Yt,Ft.width,Ft.height,0,It,_t,Ft.data)}}else{zt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,It,_t,gt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Yt,It,_t,gt[Z]);for(let ht=0;ht<X.length;ht++){let lt=X[ht];zt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,0,0,It,_t,lt.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ht+1,Yt,It,_t,lt.image[Z])}}}m(x)&&p(i.TEXTURE_CUBE_MAP),Y.__version=Q.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function vt(w,x,z,$,Q,Y){let bt=s.convert(z.format,z.colorSpace),ct=s.convert(z.type),mt=y(z.internalFormat,bt,ct,z.colorSpace),$t=n.get(x),et=n.get(z);if(et.__renderTarget=x,!$t.__hasExternalTextures){let gt=Math.max(1,x.width>>Y),Ct=Math.max(1,x.height>>Y);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,Y,mt,gt,Ct,x.depth,0,bt,ct,null):e.texImage2D(Q,Y,mt,gt,Ct,0,bt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),Ut(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Q,et.__webglTexture,0,Tt(x)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Q,et.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(w,x,z){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){let $=x.depthTexture,Q=$&&$.isDepthTexture?$.type:null,Y=v(x.stencilBuffer,Q),bt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=Tt(x);Ut(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,Y,x.width,x.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,Y,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,w)}else{let $=x.textures;for(let Q=0;Q<$.length;Q++){let Y=$[Q],bt=s.convert(Y.format,Y.colorSpace),ct=s.convert(Y.type),mt=y(Y.internalFormat,bt,ct,Y.colorSpace),$t=Tt(x);z&&Ut(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$t,mt,x.width,x.height):Ut(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$t,mt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,mt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function K(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(x.depthTexture);$.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),I(x.depthTexture,0);let Q=$.__webglTexture,Y=Tt(x);if(x.depthTexture.format===Ri)Ut(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(x.depthTexture.format===Fi)Ut(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ot(w){let x=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let $=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),$){let Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=$}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");K(x.__webglFramebuffer,w)}else if(z){x.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[$]),x.__webglDepthbuffer[$]===void 0)x.__webglDepthbuffer[$]=i.createRenderbuffer(),st(x.__webglDepthbuffer[$],w,!1);else{let Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),st(x.__webglDepthbuffer,w,!1);else{let $=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(w,x,z){let $=n.get(w);x!==void 0&&vt($.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&ot(w)}function xt(w){let x=w.texture,z=n.get(w),$=n.get(x);w.addEventListener("dispose",R);let Q=w.textures,Y=w.isWebGLCubeRenderTarget===!0,bt=Q.length>1;if(bt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=x.version,o.memory.textures++),Y){z.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[ct]=[];for(let mt=0;mt<x.mipmaps.length;mt++)z.__webglFramebuffer[ct][mt]=i.createFramebuffer()}else z.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)z.__webglFramebuffer[ct]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(bt)for(let ct=0,mt=Q.length;ct<mt;ct++){let $t=n.get(Q[ct]);$t.__webglTexture===void 0&&($t.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&Ut(w)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ct=0;ct<Q.length;ct++){let mt=Q[ct];z.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ct]);let $t=s.convert(mt.format,mt.colorSpace),et=s.convert(mt.type),gt=y(mt.internalFormat,$t,et,mt.colorSpace,w.isXRRenderTarget===!0),Ct=Tt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,gt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,z.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),st(z.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Pt(i.TEXTURE_CUBE_MAP,x);for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0)for(let mt=0;mt<x.mipmaps.length;mt++)vt(z.__webglFramebuffer[ct][mt],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,mt);else vt(z.__webglFramebuffer[ct],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(x)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ct=0,mt=Q.length;ct<mt;ct++){let $t=Q[ct],et=n.get($t);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),Pt(i.TEXTURE_2D,$t),vt(z.__webglFramebuffer,w,$t,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),m($t)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ct=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,$.__webglTexture),Pt(ct,x),x.mipmaps&&x.mipmaps.length>0)for(let mt=0;mt<x.mipmaps.length;mt++)vt(z.__webglFramebuffer[mt],w,x,i.COLOR_ATTACHMENT0,ct,mt);else vt(z.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,ct,0);m(x)&&p(ct),e.unbindTexture()}w.depthBuffer&&ot(w)}function At(w){let x=w.textures;for(let z=0,$=x.length;z<$;z++){let Q=x[z];if(m(Q)){let Y=E(w),bt=n.get(Q).__webglTexture;e.bindTexture(Y,bt),p(Y),e.unbindTexture()}}}let Nt=[],D=[];function Ht(w){if(w.samples>0){if(Ut(w)===!1){let x=w.textures,z=w.width,$=w.height,Q=i.COLOR_BUFFER_BIT,Y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(w),ct=x.length>1;if(ct)for(let mt=0;mt<x.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let mt=0;mt<x.length;mt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[mt]);let $t=n.get(x[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$t,0)}i.blitFramebuffer(0,0,z,$,0,0,z,$,Q,i.NEAREST),c===!0&&(Nt.length=0,D.length=0,Nt.push(i.COLOR_ATTACHMENT0+mt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Nt.push(Y),D.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Nt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let mt=0;mt<x.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,bt.__webglColorRenderbuffer[mt]);let $t=n.get(x[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,$t,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Tt(w){return Math.min(r.maxSamples,w.samples)}function Ut(w){let x=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function dt(w){let x=o.render.frame;u.get(w)!==x&&(u.set(w,x),w.update())}function Wt(w,x){let z=w.colorSpace,$=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==zi&&z!==Fn&&(Zt.getTransfer(z)===ee?($!==Je||Q!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),x}function pt(w){return typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame!="undefined"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=W,this.setTexture2D=I,this.setTexture2DArray=O,this.setTexture3D=J,this.setTextureCube=k,this.rebindTextures=wt,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Ut}function o0(i,t){function e(n,r=Fn){let s,o=Zt.getTransfer(r);if(n===bn)return i.UNSIGNED_BYTE;if(n===sc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===oc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===su)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===iu)return i.BYTE;if(n===ru)return i.SHORT;if(n===sr)return i.UNSIGNED_SHORT;if(n===rc)return i.INT;if(n===ni)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===hr)return i.HALF_FLOAT;if(n===ou)return i.ALPHA;if(n===au)return i.RGB;if(n===Je)return i.RGBA;if(n===cu)return i.LUMINANCE;if(n===lu)return i.LUMINANCE_ALPHA;if(n===Ri)return i.DEPTH_COMPONENT;if(n===Fi)return i.DEPTH_STENCIL;if(n===uu)return i.RED;if(n===ac)return i.RED_INTEGER;if(n===hu)return i.RG;if(n===cc)return i.RG_INTEGER;if(n===lc)return i.RGBA_INTEGER;if(n===Kr||n===Qr||n===jr||n===ts)if(o===ee)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Kr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Kr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ts)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yo||n===$o||n===Zo||n===Jo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Yo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$o)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Zo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ko||n===Qo||n===jo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ko||n===Qo)return o===ee?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===jo)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ta||n===ea||n===na||n===ia||n===ra||n===sa||n===oa||n===aa||n===ca||n===la||n===ua||n===ha||n===fa||n===da)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ta)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ea)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===na)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ia)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ra)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sa)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oa)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===aa)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ca)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===la)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ua)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ha)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fa)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===da)return o===ee?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===es||n===pa||n===ma)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===es)return o===ee?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ma)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fu||n===ga||n===_a||n===xa)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===es)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ga)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_a)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ni?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Na=class extends Ae{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ke=class extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},a0={type:"move"},nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(a0)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ke;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},c0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l0=`
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

}`,Fa=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let r=new Ue,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ve({vertexShader:c0,fragmentShader:l0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new de(new fs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Oa=class extends kn{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null,_=new Fa,m=e.getContextAttributes(),p=null,E=null,y=[],v=[],P=new Rt,A=null,R=new Ae;R.viewport=new le;let C=new Ae;C.viewport=new le;let b=[R,C],M=new Na,T=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=y[q];return j===void 0&&(j=new nr,y[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=y[q];return j===void 0&&(j=new nr,y[q]=j),j.getGripSpace()},this.getHand=function(q){let j=y[q];return j===void 0&&(j=new nr,y[q]=j),j.getHandSpace()};function B(q){let j=v.indexOf(q.inputSource);if(j===-1)return;let vt=y[j];vt!==void 0&&(vt.update(q.inputSource,q.frame,l||o),vt.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",I);for(let q=0;q<y.length;q++){let j=v[q];j!==null&&(v[q]=null,y[q].disconnect(j))}T=null,W=null,_.reset(),t.setRenderTarget(p),d=null,f=null,h=null,r=null,E=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",H),r.addEventListener("inputsourceschange",I),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(P),r.renderState.layers===void 0){let j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,j),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new En(d.framebufferWidth,d.framebufferHeight,{format:Je,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,vt=null,st=null;m.depth&&(st=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=m.stencil?Fi:Ri,vt=m.stencil?Ni:ni);let K={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:s};h=new XRWebGLBinding(r,e),f=h.createProjectionLayer(K),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new En(f.textureWidth,f.textureHeight,{format:Je,type:bn,depthTexture:new ms(f.textureWidth,f.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Vt.setContext(r),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function I(q){for(let j=0;j<q.removed.length;j++){let vt=q.removed[j],st=v.indexOf(vt);st>=0&&(v[st]=null,y[st].disconnect(vt))}for(let j=0;j<q.added.length;j++){let vt=q.added[j],st=v.indexOf(vt);if(st===-1){for(let ot=0;ot<y.length;ot++)if(ot>=v.length){v.push(vt),st=ot;break}else if(v[ot]===null){v[ot]=vt,st=ot;break}if(st===-1)break}let K=y[st];K&&K.connect(vt)}}let O=new F,J=new F;function k(q,j,vt){O.setFromMatrixPosition(j.matrixWorld),J.setFromMatrixPosition(vt.matrixWorld);let st=O.distanceTo(J),K=j.projectionMatrix.elements,ot=vt.projectionMatrix.elements,wt=K[14]/(K[10]-1),xt=K[14]/(K[10]+1),At=(K[9]+1)/K[5],Nt=(K[9]-1)/K[5],D=(K[8]-1)/K[0],Ht=(ot[8]+1)/ot[0],Tt=wt*D,Ut=wt*Ht,dt=st/(-D+Ht),Wt=dt*-D;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Wt),q.translateZ(dt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),K[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let pt=wt+dt,w=xt+dt,x=Tt-Wt,z=Ut+(st-Wt),$=At*xt/w*pt,Q=Nt*xt/w*pt;q.projectionMatrix.makePerspective(x,z,$,Q,pt,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function tt(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let j=q.near,vt=q.far;_.texture!==null&&(_.depthNear>0&&(j=_.depthNear),_.depthFar>0&&(vt=_.depthFar)),M.near=C.near=R.near=j,M.far=C.far=R.far=vt,(T!==M.near||W!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,W=M.far),R.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,M.layers.mask=R.layers.mask|C.layers.mask;let st=q.parent,K=M.cameras;tt(M,st);for(let ot=0;ot<K.length;ot++)tt(K[ot],st);K.length===2?k(M,R,C):M.projectionMatrix.copy(R.projectionMatrix),nt(q,M,st)};function nt(q,j,vt){vt===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(vt.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ya*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(q){c=q,f!==null&&(f.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let ft=null;function Pt(q,j){if(u=j.getViewerPose(l||o),g=j,u!==null){let vt=u.views;d!==null&&(t.setRenderTargetFramebuffer(E,d.framebuffer),t.setRenderTarget(E));let st=!1;vt.length!==M.cameras.length&&(M.cameras.length=0,st=!0);for(let ot=0;ot<vt.length;ot++){let wt=vt[ot],xt=null;if(d!==null)xt=d.getViewport(wt);else{let Nt=h.getViewSubImage(f,wt);xt=Nt.viewport,ot===0&&(t.setRenderTargetTextures(E,Nt.colorTexture,f.ignoreDepthValues?void 0:Nt.depthStencilTexture),t.setRenderTarget(E))}let At=b[ot];At===void 0&&(At=new Ae,At.layers.enable(ot),At.viewport=new le,b[ot]=At),At.matrix.fromArray(wt.transform.matrix),At.matrix.decompose(At.position,At.quaternion,At.scale),At.projectionMatrix.fromArray(wt.projectionMatrix),At.projectionMatrixInverse.copy(At.projectionMatrix).invert(),At.viewport.set(xt.x,xt.y,xt.width,xt.height),ot===0&&(M.matrix.copy(At.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),st===!0&&M.cameras.push(At)}let K=r.enabledFeatures;if(K&&K.includes("depth-sensing")){let ot=h.getDepthInformation(vt[0]);ot&&ot.isValid&&ot.texture&&_.init(t,ot,r.renderState)}}for(let vt=0;vt<y.length;vt++){let st=v[vt],K=y[vt];st!==null&&K!==void 0&&K.update(st,j,l||o)}ft&&ft(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}let Vt=new xu;Vt.setAnimationLoop(Pt),this.setAnimationLoop=function(q){ft=q},this.dispose=function(){}}},Zn=new an,u0=new ue;function h0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,_u(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,E,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,E,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===be&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===be&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=t.get(p),y=E.envMap,v=E.envMapRotation;y&&(m.envMap.value=y,Zn.copy(v),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),m.envMapRotation.value.setFromMatrix4(u0.makeRotationFromEuler(Zn)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===be&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function f0(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,y){let v=y.program;n.uniformBlockBinding(E,v)}function l(E,y){let v=r[E.id];v===void 0&&(g(E),v=u(E),r[E.id]=v,E.addEventListener("dispose",m));let P=y.program;n.updateUBOMapping(E,P);let A=t.render.frame;s[E.id]!==A&&(f(E),s[E.id]=A)}function u(E){let y=h();E.__bindingPointIndex=y;let v=i.createBuffer(),P=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,P,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let y=r[E.id],v=E.uniforms,P=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,R=v.length;A<R;A++){let C=Array.isArray(v[A])?v[A]:[v[A]];for(let b=0,M=C.length;b<M;b++){let T=C[b];if(d(T,A,b,P)===!0){let W=T.__offset,B=Array.isArray(T.value)?T.value:[T.value],H=0;for(let I=0;I<B.length;I++){let O=B[I],J=_(O);typeof O=="number"||typeof O=="boolean"?(T.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,W+H,T.__data)):O.isMatrix3?(T.__data[0]=O.elements[0],T.__data[1]=O.elements[1],T.__data[2]=O.elements[2],T.__data[3]=0,T.__data[4]=O.elements[3],T.__data[5]=O.elements[4],T.__data[6]=O.elements[5],T.__data[7]=0,T.__data[8]=O.elements[6],T.__data[9]=O.elements[7],T.__data[10]=O.elements[8],T.__data[11]=0):(O.toArray(T.__data,H),H+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(E,y,v,P){let A=E.value,R=y+"_"+v;if(P[R]===void 0)return typeof A=="number"||typeof A=="boolean"?P[R]=A:P[R]=A.clone(),!0;{let C=P[R];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return P[R]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(E){let y=E.uniforms,v=0,P=16;for(let R=0,C=y.length;R<C;R++){let b=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,T=b.length;M<T;M++){let W=b[M],B=Array.isArray(W.value)?W.value:[W.value];for(let H=0,I=B.length;H<I;H++){let O=B[H],J=_(O),k=v%P,tt=k%J.boundary,nt=k+tt;v+=tt,nt!==0&&P-nt<J.storage&&(v+=P-nt),W.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=v,v+=J.storage}}}let A=v%P;return A>0&&(v+=P-A),E.__size=v,E.__cache={},this}function _(E){let y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){let y=E.target;y.removeEventListener("dispose",m);let v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(let E in r)i.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:c,update:l,dispose:p}}var gs=class{constructor(t={}){let{canvas:e=gf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,E=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ce,this.toneMapping=Bn,this.toneMappingExposure=1;let v=this,P=!1,A=0,R=0,C=null,b=-1,M=null,T=new le,W=new le,B=null,H=new Xt(0),I=0,O=e.width,J=e.height,k=1,tt=null,nt=null,ft=new le(0,0,O,J),Pt=new le(0,0,O,J),Vt=!1,q=new cr,j=!1,vt=!1,st=new ue,K=new ue,ot=new F,wt=new le,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},At=!1;function Nt(){return C===null?k:1}let D=n;function Ht(S,U){return e.getContext(S,U)}try{let S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r170"),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",ht,!1),e.addEventListener("webglcontextcreationerror",lt,!1),D===null){let U="webgl2";if(D=Ht(U,S),D===null)throw Ht(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Tt,Ut,dt,Wt,pt,w,x,z,$,Q,Y,bt,ct,mt,$t,et,gt,Ct,It,_t,Yt,zt,ie,L;function at(){Tt=new Rm(D),Tt.init(),zt=new o0(D,Tt),Ut=new Sm(D,Tt,t,zt),dt=new i0(D,Tt),Ut.reverseDepthBuffer&&f&&dt.buffers.depth.setReversed(!0),Wt=new Im(D),pt=new Wg,w=new s0(D,Tt,dt,pt,Ut,zt,Wt),x=new Em(v),z=new Tm(v),$=new Bf(D),ie=new ym(D,$),Q=new Cm(D,$,Wt,ie),Y=new Dm(D,Q,$,Wt),It=new Lm(D,Ut,w),et=new bm(pt),bt=new Gg(v,x,z,Tt,Ut,ie,et),ct=new h0(v,pt),mt=new qg,$t=new Qg(Tt),Ct=new vm(v,x,z,dt,Y,d,c),gt=new e0(v,Y,Ut),L=new f0(D,Wt,Ut,dt),_t=new Mm(D,Tt,Wt),Yt=new Pm(D,Tt,Wt),Wt.programs=bt.programs,v.capabilities=Ut,v.extensions=Tt,v.properties=pt,v.renderLists=mt,v.shadowMap=gt,v.state=dt,v.info=Wt}at();let X=new Oa(v,D);this.xr=X,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let S=Tt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Tt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(S){S!==void 0&&(k=S,this.setSize(O,J,!1))},this.getSize=function(S){return S.set(O,J)},this.setSize=function(S,U,V=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=S,J=U,e.width=Math.floor(S*k),e.height=Math.floor(U*k),V===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(O*k,J*k).floor()},this.setDrawingBufferSize=function(S,U,V){O=S,J=U,k=V,e.width=Math.floor(S*V),e.height=Math.floor(U*V),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(ft)},this.setViewport=function(S,U,V,G){S.isVector4?ft.set(S.x,S.y,S.z,S.w):ft.set(S,U,V,G),dt.viewport(T.copy(ft).multiplyScalar(k).round())},this.getScissor=function(S){return S.copy(Pt)},this.setScissor=function(S,U,V,G){S.isVector4?Pt.set(S.x,S.y,S.z,S.w):Pt.set(S,U,V,G),dt.scissor(W.copy(Pt).multiplyScalar(k).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(S){dt.setScissorTest(Vt=S)},this.setOpaqueSort=function(S){tt=S},this.setTransparentSort=function(S){nt=S},this.getClearColor=function(S){return S.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(S=!0,U=!0,V=!0){let G=0;if(S){let N=!1;if(C!==null){let it=C.texture.format;N=it===lc||it===cc||it===ac}if(N){let it=C.texture.type,ut=it===bn||it===ni||it===sr||it===Ni||it===sc||it===oc,yt=Ct.getClearColor(),Mt=Ct.getClearAlpha(),Lt=yt.r,Ot=yt.g,St=yt.b;ut?(g[0]=Lt,g[1]=Ot,g[2]=St,g[3]=Mt,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Lt,_[1]=Ot,_[2]=St,_[3]=Mt,D.clearBufferiv(D.COLOR,0,_))}else G|=D.COLOR_BUFFER_BIT}U&&(G|=D.DEPTH_BUFFER_BIT),V&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",ht,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),mt.dispose(),$t.dispose(),pt.dispose(),x.dispose(),z.dispose(),Y.dispose(),ie.dispose(),L.dispose(),bt.dispose(),X.dispose(),X.removeEventListener("sessionstart",Xc),X.removeEventListener("sessionend",qc),Gn.stop()};function Z(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ht(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let S=Wt.autoReset,U=gt.enabled,V=gt.autoUpdate,G=gt.needsUpdate,N=gt.type;at(),Wt.autoReset=S,gt.enabled=U,gt.autoUpdate=V,gt.needsUpdate=G,gt.type=N}function lt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ft(S){let U=S.target;U.removeEventListener("dispose",Ft),ce(U)}function ce(S){ve(S),pt.remove(S)}function ve(S){let U=pt.get(S).programs;U!==void 0&&(U.forEach(function(V){bt.releaseProgram(V)}),S.isShaderMaterial&&bt.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,V,G,N,it){U===null&&(U=xt);let ut=N.isMesh&&N.matrixWorld.determinant()<0,yt=Eh(S,U,V,G,N);dt.setMaterial(G,ut);let Mt=V.index,Lt=1;if(G.wireframe===!0){if(Mt=Q.getWireframeAttribute(V),Mt===void 0)return;Lt=2}let Ot=V.drawRange,St=V.attributes.position,Kt=Ot.start*Lt,re=(Ot.start+Ot.count)*Lt;it!==null&&(Kt=Math.max(Kt,it.start*Lt),re=Math.min(re,(it.start+it.count)*Lt)),Mt!==null?(Kt=Math.max(Kt,0),re=Math.min(re,Mt.count)):St!=null&&(Kt=Math.max(Kt,0),re=Math.min(re,St.count));let se=re-Kt;if(se<0||se===1/0)return;ie.setup(N,G,yt,V,Mt);let Te,Qt=_t;if(Mt!==null&&(Te=$.get(Mt),Qt=Yt,Qt.setIndex(Te)),N.isMesh)G.wireframe===!0?(dt.setLineWidth(G.wireframeLinewidth*Nt()),Qt.setMode(D.LINES)):Qt.setMode(D.TRIANGLES);else if(N.isLine){let Et=G.linewidth;Et===void 0&&(Et=1),dt.setLineWidth(Et*Nt()),N.isLineSegments?Qt.setMode(D.LINES):N.isLineLoop?Qt.setMode(D.LINE_LOOP):Qt.setMode(D.LINE_STRIP)}else N.isPoints?Qt.setMode(D.POINTS):N.isSprite&&Qt.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Qt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Tt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Et=N._multiDrawStarts,fn=N._multiDrawCounts,jt=N._multiDrawCount,Xe=Mt?$.get(Mt).bytesPerElement:1,hi=pt.get(G).currentProgram.getUniforms();for(let Ie=0;Ie<jt;Ie++)hi.setValue(D,"_gl_DrawID",Ie),Qt.render(Et[Ie]/Xe,fn[Ie])}else if(N.isInstancedMesh)Qt.renderInstances(Kt,se,N.count);else if(V.isInstancedBufferGeometry){let Et=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,fn=Math.min(V.instanceCount,Et);Qt.renderInstances(Kt,se,fn)}else Qt.render(Kt,se)};function te(S,U,V){S.transparent===!0&&S.side===Ze&&S.forceSinglePass===!1?(S.side=be,S.needsUpdate=!0,Tr(S,U,V),S.side=zn,S.needsUpdate=!0,Tr(S,U,V),S.side=Ze):Tr(S,U,V)}this.compile=function(S,U,V=null){V===null&&(V=S),p=$t.get(V),p.init(U),y.push(p),V.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),S!==V&&S.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();let G=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let it=N.material;if(it)if(Array.isArray(it))for(let ut=0;ut<it.length;ut++){let yt=it[ut];te(yt,V,N),G.add(yt)}else te(it,V,N),G.add(it)}),y.pop(),p=null,G},this.compileAsync=function(S,U,V=null){let G=this.compile(S,U,V);return new Promise(N=>{function it(){if(G.forEach(function(ut){pt.get(ut).currentProgram.isReady()&&G.delete(ut)}),G.size===0){N(S);return}setTimeout(it,10)}Tt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let We=null;function hn(S){We&&We(S)}function Xc(){Gn.stop()}function qc(){Gn.start()}let Gn=new xu;Gn.setAnimationLoop(hn),typeof self!="undefined"&&Gn.setContext(self),this.setAnimationLoop=function(S){We=S,X.setAnimationLoop(S),S===null?Gn.stop():Gn.start()},X.addEventListener("sessionstart",Xc),X.addEventListener("sessionend",qc),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,U,C),p=$t.get(S,y.length),p.init(U),y.push(p),K.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(K),vt=this.localClippingEnabled,j=et.init(this.clippingPlanes,vt),m=mt.get(S,E.length),m.init(),E.push(m),X.enabled===!0&&X.isPresenting===!0){let it=v.xr.getDepthSensingMesh();it!==null&&Qs(it,U,-1/0,v.sortObjects)}Qs(S,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(tt,nt),At=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,At&&Ct.addToRenderList(m,S),this.info.render.frame++,j===!0&&et.beginShadows();let V=p.state.shadowsArray;gt.render(V,S,U),j===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){let it=U.cameras;if(N.length>0)for(let ut=0,yt=it.length;ut<yt;ut++){let Mt=it[ut];$c(G,N,S,Mt)}At&&Ct.render(S);for(let ut=0,yt=it.length;ut<yt;ut++){let Mt=it[ut];Yc(m,S,Mt,Mt.viewport)}}else N.length>0&&$c(G,N,S,U),At&&Ct.render(S),Yc(m,S,U);C!==null&&(w.updateMultisampleRenderTarget(C),w.updateRenderTargetMipmap(C)),S.isScene===!0&&S.onAfterRender(v,S,U),ie.resetDefaultState(),b=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],j===!0&&et.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Qs(S,U,V,G){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||q.intersectsSprite(S)){G&&wt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(K);let ut=Y.update(S),yt=S.material;yt.visible&&m.push(S,ut,yt,V,wt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||q.intersectsObject(S))){let ut=Y.update(S),yt=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),wt.copy(S.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),wt.copy(ut.boundingSphere.center)),wt.applyMatrix4(S.matrixWorld).applyMatrix4(K)),Array.isArray(yt)){let Mt=ut.groups;for(let Lt=0,Ot=Mt.length;Lt<Ot;Lt++){let St=Mt[Lt],Kt=yt[St.materialIndex];Kt&&Kt.visible&&m.push(S,ut,Kt,V,wt.z,St)}}else yt.visible&&m.push(S,ut,yt,V,wt.z,null)}}let it=S.children;for(let ut=0,yt=it.length;ut<yt;ut++)Qs(it[ut],U,V,G)}function Yc(S,U,V,G){let N=S.opaque,it=S.transmissive,ut=S.transparent;p.setupLightsView(V),j===!0&&et.setGlobalState(v.clippingPlanes,V),G&&dt.viewport(T.copy(G)),N.length>0&&Ar(N,U,V),it.length>0&&Ar(it,U,V),ut.length>0&&Ar(ut,U,V),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function $c(S,U,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new En(1,1,{generateMipmaps:!0,type:Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float")?hr:bn,minFilter:ei,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace}));let it=p.state.transmissionRenderTarget[G.id],ut=G.viewport||T;it.setSize(ut.z,ut.w);let yt=v.getRenderTarget();v.setRenderTarget(it),v.getClearColor(H),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear(),At&&Ct.render(V);let Mt=v.toneMapping;v.toneMapping=Bn;let Lt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),j===!0&&et.setGlobalState(v.clippingPlanes,G),Ar(S,V,G),w.updateMultisampleRenderTarget(it),w.updateRenderTargetMipmap(it),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let St=0,Kt=U.length;St<Kt;St++){let re=U[St],se=re.object,Te=re.geometry,Qt=re.material,Et=re.group;if(Qt.side===Ze&&se.layers.test(G.layers)){let fn=Qt.side;Qt.side=be,Qt.needsUpdate=!0,Zc(se,V,G,Te,Qt,Et),Qt.side=fn,Qt.needsUpdate=!0,Ot=!0}}Ot===!0&&(w.updateMultisampleRenderTarget(it),w.updateRenderTargetMipmap(it))}v.setRenderTarget(yt),v.setClearColor(H,I),Lt!==void 0&&(G.viewport=Lt),v.toneMapping=Mt}function Ar(S,U,V){let G=U.isScene===!0?U.overrideMaterial:null;for(let N=0,it=S.length;N<it;N++){let ut=S[N],yt=ut.object,Mt=ut.geometry,Lt=G===null?ut.material:G,Ot=ut.group;yt.layers.test(V.layers)&&Zc(yt,U,V,Mt,Lt,Ot)}}function Zc(S,U,V,G,N,it){S.onBeforeRender(v,U,V,G,N,it),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(v,U,V,G,S,it),N.transparent===!0&&N.side===Ze&&N.forceSinglePass===!1?(N.side=be,N.needsUpdate=!0,v.renderBufferDirect(V,U,G,N,S,it),N.side=zn,N.needsUpdate=!0,v.renderBufferDirect(V,U,G,N,S,it),N.side=Ze):v.renderBufferDirect(V,U,G,N,S,it),S.onAfterRender(v,U,V,G,N,it)}function Tr(S,U,V){U.isScene!==!0&&(U=xt);let G=pt.get(S),N=p.state.lights,it=p.state.shadowsArray,ut=N.state.version,yt=bt.getParameters(S,N.state,it,U,V),Mt=bt.getProgramCacheKey(yt),Lt=G.programs;G.environment=S.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(S.isMeshStandardMaterial?z:x).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Lt===void 0&&(S.addEventListener("dispose",Ft),Lt=new Map,G.programs=Lt);let Ot=Lt.get(Mt);if(Ot!==void 0){if(G.currentProgram===Ot&&G.lightsStateVersion===ut)return Kc(S,yt),Ot}else yt.uniforms=bt.getUniforms(S),S.onBeforeCompile(yt,v),Ot=bt.acquireProgram(yt,Mt),Lt.set(Mt,Ot),G.uniforms=yt.uniforms;let St=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(St.clippingPlanes=et.uniform),Kc(S,yt),G.needsLights=Ah(S),G.lightsStateVersion=ut,G.needsLights&&(St.ambientLightColor.value=N.state.ambient,St.lightProbe.value=N.state.probe,St.directionalLights.value=N.state.directional,St.directionalLightShadows.value=N.state.directionalShadow,St.spotLights.value=N.state.spot,St.spotLightShadows.value=N.state.spotShadow,St.rectAreaLights.value=N.state.rectArea,St.ltc_1.value=N.state.rectAreaLTC1,St.ltc_2.value=N.state.rectAreaLTC2,St.pointLights.value=N.state.point,St.pointLightShadows.value=N.state.pointShadow,St.hemisphereLights.value=N.state.hemi,St.directionalShadowMap.value=N.state.directionalShadowMap,St.directionalShadowMatrix.value=N.state.directionalShadowMatrix,St.spotShadowMap.value=N.state.spotShadowMap,St.spotLightMatrix.value=N.state.spotLightMatrix,St.spotLightMap.value=N.state.spotLightMap,St.pointShadowMap.value=N.state.pointShadowMap,St.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Ot,G.uniformsList=null,Ot}function Jc(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=Pi.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Kc(S,U){let V=pt.get(S);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Eh(S,U,V,G,N){U.isScene!==!0&&(U=xt),w.resetTextureUnits();let it=U.fog,ut=G.isMeshStandardMaterial?U.environment:null,yt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:zi,Mt=(G.isMeshStandardMaterial?z:x).get(G.envMap||ut),Lt=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ot=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),St=!!V.morphAttributes.position,Kt=!!V.morphAttributes.normal,re=!!V.morphAttributes.color,se=Bn;G.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(se=v.toneMapping);let Te=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Qt=Te!==void 0?Te.length:0,Et=pt.get(G),fn=p.state.lights;if(j===!0&&(vt===!0||S!==M)){let Be=S===M&&G.id===b;et.setState(G,S,Be)}let jt=!1;G.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==fn.state.version||Et.outputColorSpace!==yt||N.isBatchedMesh&&Et.batching===!1||!N.isBatchedMesh&&Et.batching===!0||N.isBatchedMesh&&Et.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Et.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Et.instancing===!1||!N.isInstancedMesh&&Et.instancing===!0||N.isSkinnedMesh&&Et.skinning===!1||!N.isSkinnedMesh&&Et.skinning===!0||N.isInstancedMesh&&Et.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Et.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Et.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Et.instancingMorph===!1&&N.morphTexture!==null||Et.envMap!==Mt||G.fog===!0&&Et.fog!==it||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==et.numPlanes||Et.numIntersection!==et.numIntersection)||Et.vertexAlphas!==Lt||Et.vertexTangents!==Ot||Et.morphTargets!==St||Et.morphNormals!==Kt||Et.morphColors!==re||Et.toneMapping!==se||Et.morphTargetsCount!==Qt)&&(jt=!0):(jt=!0,Et.__version=G.version);let Xe=Et.currentProgram;jt===!0&&(Xe=Tr(G,U,N));let hi=!1,Ie=!1,Yi=!1,oe=Xe.getUniforms(),rn=Et.uniforms;if(dt.useProgram(Xe.program)&&(hi=!0,Ie=!0,Yi=!0),G.id!==b&&(b=G.id,Ie=!0),hi||M!==S){dt.buffers.depth.getReversed()?(st.copy(S.projectionMatrix),xf(st),vf(st),oe.setValue(D,"projectionMatrix",st)):oe.setValue(D,"projectionMatrix",S.projectionMatrix),oe.setValue(D,"viewMatrix",S.matrixWorldInverse);let Rn=oe.map.cameraPosition;Rn!==void 0&&Rn.setValue(D,ot.setFromMatrixPosition(S.matrixWorld)),Ut.logarithmicDepthBuffer&&oe.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&oe.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,Ie=!0,Yi=!0)}if(N.isSkinnedMesh){oe.setOptional(D,N,"bindMatrix"),oe.setOptional(D,N,"bindMatrixInverse");let Be=N.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),oe.setValue(D,"boneTexture",Be.boneTexture,w))}N.isBatchedMesh&&(oe.setOptional(D,N,"batchingTexture"),oe.setValue(D,"batchingTexture",N._matricesTexture,w),oe.setOptional(D,N,"batchingIdTexture"),oe.setValue(D,"batchingIdTexture",N._indirectTexture,w),oe.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&oe.setValue(D,"batchingColorTexture",N._colorsTexture,w));let $i=V.morphAttributes;if(($i.position!==void 0||$i.normal!==void 0||$i.color!==void 0)&&It.update(N,V,Xe),(Ie||Et.receiveShadow!==N.receiveShadow)&&(Et.receiveShadow=N.receiveShadow,oe.setValue(D,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(rn.envMap.value=Mt,rn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&U.environment!==null&&(rn.envMapIntensity.value=U.environmentIntensity),Ie&&(oe.setValue(D,"toneMappingExposure",v.toneMappingExposure),Et.needsLights&&wh(rn,Yi),it&&G.fog===!0&&ct.refreshFogUniforms(rn,it),ct.refreshMaterialUniforms(rn,G,k,J,p.state.transmissionRenderTarget[S.id]),Pi.upload(D,Jc(Et),rn,w)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Pi.upload(D,Jc(Et),rn,w),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&oe.setValue(D,"center",N.center),oe.setValue(D,"modelViewMatrix",N.modelViewMatrix),oe.setValue(D,"normalMatrix",N.normalMatrix),oe.setValue(D,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Be=G.uniformsGroups;for(let Rn=0,Cn=Be.length;Rn<Cn;Rn++){let Qc=Be[Rn];L.update(Qc,Xe),L.bind(Qc,Xe)}}return Xe}function wh(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Ah(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(S,U,V){pt.get(S.texture).__webglTexture=U,pt.get(S.depthTexture).__webglTexture=V;let G=pt.get(S);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){let V=pt.get(S);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,V=0){C=S,A=U,R=V;let G=!0,N=null,it=!1,ut=!1;if(S){let Mt=pt.get(S);if(Mt.__useDefaultFramebuffer!==void 0)dt.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(Mt.__webglFramebuffer===void 0)w.setupRenderTarget(S);else if(Mt.__hasExternalTextures)w.rebindTextures(S,pt.get(S.texture).__webglTexture,pt.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let St=S.depthTexture;if(Mt.__boundDepthTexture!==St){if(St!==null&&pt.has(St)&&(S.width!==St.image.width||S.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(S)}}let Lt=S.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(ut=!0);let Ot=pt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ot[U])?N=Ot[U][V]:N=Ot[U],it=!0):S.samples>0&&w.useMultisampledRTT(S)===!1?N=pt.get(S).__webglMultisampledFramebuffer:Array.isArray(Ot)?N=Ot[V]:N=Ot,T.copy(S.viewport),W.copy(S.scissor),B=S.scissorTest}else T.copy(ft).multiplyScalar(k).floor(),W.copy(Pt).multiplyScalar(k).floor(),B=Vt;if(dt.bindFramebuffer(D.FRAMEBUFFER,N)&&G&&dt.drawBuffers(S,N),dt.viewport(T),dt.scissor(W),dt.setScissorTest(B),it){let Mt=pt.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,Mt.__webglTexture,V)}else if(ut){let Mt=pt.get(S.texture),Lt=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Mt.__webglTexture,V||0,Lt)}b=-1},this.readRenderTargetPixels=function(S,U,V,G,N,it,ut){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=pt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ut!==void 0&&(yt=yt[ut]),yt){dt.bindFramebuffer(D.FRAMEBUFFER,yt);try{let Mt=S.texture,Lt=Mt.format,Ot=Mt.type;if(!Ut.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-G&&V>=0&&V<=S.height-N&&D.readPixels(U,V,G,N,zt.convert(Lt),zt.convert(Ot),it)}finally{let Mt=C!==null?pt.get(C).__webglFramebuffer:null;dt.bindFramebuffer(D.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(S,U,V,G,N,it,ut){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=pt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ut!==void 0&&(yt=yt[ut]),yt){let Mt=S.texture,Lt=Mt.format,Ot=Mt.type;if(!Ut.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-G&&V>=0&&V<=S.height-N){dt.bindFramebuffer(D.FRAMEBUFFER,yt);let St=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,St),D.bufferData(D.PIXEL_PACK_BUFFER,it.byteLength,D.STREAM_READ),D.readPixels(U,V,G,N,zt.convert(Lt),zt.convert(Ot),0);let Kt=C!==null?pt.get(C).__webglFramebuffer:null;dt.bindFramebuffer(D.FRAMEBUFFER,Kt);let re=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await _f(D,re,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,St),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,it),D.deleteBuffer(St),D.deleteSync(re),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,V=0){S.isTexture!==!0&&(tr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);let G=Math.pow(2,-V),N=Math.floor(S.image.width*G),it=Math.floor(S.image.height*G),ut=U!==null?U.x:0,yt=U!==null?U.y:0;w.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,ut,yt,N,it),dt.unbindTexture()},this.copyTextureToTexture=function(S,U,V=null,G=null,N=0){S.isTexture!==!0&&(tr("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,S=arguments[1],U=arguments[2],N=arguments[3]||0,V=null);let it,ut,yt,Mt,Lt,Ot,St,Kt,re,se=S.isCompressedTexture?S.mipmaps[N]:S.image;V!==null?(it=V.max.x-V.min.x,ut=V.max.y-V.min.y,yt=V.isBox3?V.max.z-V.min.z:1,Mt=V.min.x,Lt=V.min.y,Ot=V.isBox3?V.min.z:0):(it=se.width,ut=se.height,yt=se.depth||1,Mt=0,Lt=0,Ot=0),G!==null?(St=G.x,Kt=G.y,re=G.z):(St=0,Kt=0,re=0);let Te=zt.convert(U.format),Qt=zt.convert(U.type),Et;U.isData3DTexture?(w.setTexture3D(U,0),Et=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(w.setTexture2DArray(U,0),Et=D.TEXTURE_2D_ARRAY):(w.setTexture2D(U,0),Et=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let fn=D.getParameter(D.UNPACK_ROW_LENGTH),jt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Xe=D.getParameter(D.UNPACK_SKIP_PIXELS),hi=D.getParameter(D.UNPACK_SKIP_ROWS),Ie=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,se.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,se.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Mt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Lt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ot);let Yi=S.isDataArrayTexture||S.isData3DTexture,oe=U.isDataArrayTexture||U.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let rn=pt.get(S),$i=pt.get(U),Be=pt.get(rn.__renderTarget),Rn=pt.get($i.__renderTarget);dt.bindFramebuffer(D.READ_FRAMEBUFFER,Be.__webglFramebuffer),dt.bindFramebuffer(D.DRAW_FRAMEBUFFER,Rn.__webglFramebuffer);for(let Cn=0;Cn<yt;Cn++)Yi&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,pt.get(S).__webglTexture,N,Ot+Cn),S.isDepthTexture?(oe&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,pt.get(U).__webglTexture,N,re+Cn),D.blitFramebuffer(Mt,Lt,it,ut,St,Kt,it,ut,D.DEPTH_BUFFER_BIT,D.NEAREST)):oe?D.copyTexSubImage3D(Et,N,St,Kt,re+Cn,Mt,Lt,it,ut):D.copyTexSubImage2D(Et,N,St,Kt,re+Cn,Mt,Lt,it,ut);dt.bindFramebuffer(D.READ_FRAMEBUFFER,null),dt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else oe?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(Et,N,St,Kt,re,it,ut,yt,Te,Qt,se.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Et,N,St,Kt,re,it,ut,yt,Te,se.data):D.texSubImage3D(Et,N,St,Kt,re,it,ut,yt,Te,Qt,se):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,N,St,Kt,it,ut,Te,Qt,se.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,N,St,Kt,se.width,se.height,Te,se.data):D.texSubImage2D(D.TEXTURE_2D,N,St,Kt,it,ut,Te,Qt,se);D.pixelStorei(D.UNPACK_ROW_LENGTH,fn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,jt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Xe),D.pixelStorei(D.UNPACK_SKIP_ROWS,hi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ie),N===0&&U.generateMipmaps&&D.generateMipmap(Et),dt.unbindTexture()},this.copyTextureToTexture3D=function(S,U,V=null,G=null,N=0){return S.isTexture!==!0&&(tr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,S=arguments[2],U=arguments[3],N=arguments[4]||0),tr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,U,V,G,N)},this.initRenderTarget=function(S){pt.get(S).__webglFramebuffer===void 0&&w.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),dt.unbindTexture()},this.resetState=function(){A=0,R=0,C=null,dt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=Zt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Zt._getUnpackColorSpace()}};var _s=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var xs=class extends Ue{constructor(t,e,n,r,s,o,a,c,l){super(t,e,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),r=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);let u=n[r],f=n[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),c=e||(o.isVector2?new Rt:new F);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new F,r=[],s=[],o=[],a=new F,c=new ue;for(let d=0;d<=t;d++){let g=d/t;r[d]=this.getTangentAt(g,new F)}s[0]=new F,o[0]=new F;let l=Number.MAX_VALUE,u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Se(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(Se(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},vs=class extends tn{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Rt){let n=e,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+t*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ba=class extends vs{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function hc(){let i=0,t=0,e=0,n=0;function r(s,o,a,c){i=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,u,h){let f=(o-s)/l-(a-s)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){let o=s*s,a=o*s;return i+t*s+e*o+n*a}}}var Zr=new F,Po=new hc,Io=new hc,Lo=new hc,lr=class extends tn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new F){let n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(Zr.subVectors(r[0],r[1]).add(r[0]),l=Zr);let h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Zr.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Zr),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Po.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,_,m),Io.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,_,m),Lo.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Po.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),Io.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Lo.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(Po.calc(c),Io.calc(c),Lo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new F().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Ql(i,t,e,n,r){let s=(n-t)*.5,o=(r-e)*.5,a=i*i,c=i*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*i+e}function d0(i,t){let e=1-i;return e*e*t}function p0(i,t){return 2*(1-i)*i*t}function m0(i,t){return i*i*t}function ir(i,t,e,n){return d0(i,t)+p0(i,e)+m0(i,n)}function g0(i,t){let e=1-i;return e*e*e*t}function _0(i,t){let e=1-i;return 3*e*e*i*t}function x0(i,t){return 3*(1-i)*i*i*t}function v0(i,t){return i*i*i*t}function rr(i,t,e,n,r){return g0(i,t)+_0(i,e)+x0(i,n)+v0(i,r)}var za=class extends tn{constructor(t=new Rt,e=new Rt,n=new Rt,r=new Rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new Rt){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(rr(t,r.x,s.x,o.x,a.x),rr(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ka=class extends tn{constructor(t=new F,e=new F,n=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new F){let n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(rr(t,r.x,s.x,o.x,a.x),rr(t,r.y,s.y,o.y,a.y),rr(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Va=class extends tn{constructor(t=new Rt,e=new Rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Rt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ha=class extends tn{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ga=class extends tn{constructor(t=new Rt,e=new Rt,n=new Rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Rt){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(ir(t,r.x,s.x,o.x),ir(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ys=class extends tn{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){let n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(ir(t,r.x,s.x,o.x),ir(t,r.y,s.y,o.y),ir(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wa=class extends tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Rt){let n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return n.set(Ql(a,c.x,l.x,u.x,h.x),Ql(a,c.y,l.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let r=t.points[e];this.points.push(new Rt().fromArray(r))}return this}},y0=Object.freeze({__proto__:null,ArcCurve:Ba,CatmullRomCurve3:lr,CubicBezierCurve:za,CubicBezierCurve3:ka,EllipseCurve:vs,LineCurve:Va,LineCurve3:Ha,QuadraticBezierCurve:Ga,QuadraticBezierCurve3:ys,SplineCurve:Wa});var Ms=class i extends cn{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],c=[],l=[],u=[],h=t,f=(e-t)/r,d=new F,g=new Rt;for(let _=0;_<=r;_++){for(let m=0;m<=n;m++){let p=s+m/n*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}h+=f}for(let _=0;_<r;_++){let m=_*(n+1);for(let p=0;p<n;p++){let E=p+m,y=E,v=E+n+1,P=E+n+2,A=E+1;a.push(y,v,A),a.push(v,P,A)}}this.setIndex(a),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(l,3)),this.setAttribute("uv",new _e(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Hn=class i extends cn{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new F,f=new F,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let E=[],y=p/n,v=0;p===0&&o===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let P=0;P<=e;P++){let A=P/e;h.x=-t*Math.cos(r+A*s)*Math.sin(o+y*a),h.y=t*Math.cos(o+y*a),h.z=t*Math.sin(r+A*s)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(A+v,1-y),E.push(l++)}u.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){let y=u[p][E+1],v=u[p][E],P=u[p+1][E],A=u[p+1][E+1];(p!==0||o>0)&&d.push(y,v,A),(p!==n-1||c<Math.PI)&&d.push(v,P,A)}this.setIndex(d),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(_,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ur=class i extends cn{constructor(t=new ys(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),e=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:r,closed:s};let o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new F,c=new F,l=new Rt,u=new F,h=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new _e(h,3)),this.setAttribute("normal",new _e(f,3)),this.setAttribute("uv",new _e(d,2));function _(){for(let y=0;y<e;y++)m(y);m(s===!1?e:0),E(),p()}function m(y){u=t.getPointAt(y/e,u);let v=o.normals[y],P=o.binormals[y];for(let A=0;A<=r;A++){let R=A/r*Math.PI*2,C=Math.sin(R),b=-Math.cos(R);c.x=b*v.x+C*P.x,c.y=b*v.y+C*P.y,c.z=b*v.z+C*P.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let v=1;v<=r;v++){let P=(r+1)*(y-1)+(v-1),A=(r+1)*y+(v-1),R=(r+1)*y+v,C=(r+1)*(y-1)+v;g.push(P,A,C),g.push(A,R,C)}}function E(){for(let y=0;y<=e;y++)for(let v=0;v<=r;v++)l.x=y/e,l.y=v/r,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new y0[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Ss=class extends ri{static get type(){return"MeshPhongMaterial"}constructor(t){super(),this.isMeshPhongMaterial=!0,this.color=new Xt(16777215),this.specular=new Xt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=du,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Jr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function M0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Bi=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Xa=class extends Bi{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nl,endingEnd:nl}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case il:s=t,a=2*e-n;break;case rl:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case il:o=t,c=2*n-e;break;case rl:o=1,c=n+r[1]-r[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(r-e),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,E=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*_+.5*g,v=d*m-d*_;for(let P=0;P!==a;++P)s[P]=p*o[u+P]+E*o[l+P]+y*o[c+P]+v*o[h+P];return s}},qa=class extends Bi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(r-e),h=1-u;for(let f=0;f!==a;++f)s[f]=o[l+f]*h+o[c+f]*u;return s}},Ya=class extends Bi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},en=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Jr(e,this.TimeBufferType),this.values=Jr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Jr(t.times,Array),values:Jr(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Xa(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ns:e=this.InterpolantFactoryMethodDiscrete;break;case va:e=this.InterpolantFactoryMethodLinear;break;case to:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ns;case this.InterpolantFactoryMethodLinear:return va;case this.InterpolantFactoryMethodSmooth:return to}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(r!==void 0&&M0(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===to,s=t.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(r)c=!0;else{let h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){let _=e[h+g];if(_!==e[f+g]||_!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};en.prototype.TimeBufferType=Float32Array;en.prototype.ValueBufferType=Float32Array;en.prototype.DefaultInterpolation=va;var si=class extends en{constructor(t,e,n){super(t,e,n)}};si.prototype.ValueTypeName="bool";si.prototype.ValueBufferType=Array;si.prototype.DefaultInterpolation=ns;si.prototype.InterpolantFactoryMethodLinear=void 0;si.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends en{};$a.prototype.ValueTypeName="color";var Za=class extends en{};Za.prototype.ValueTypeName="number";var Ja=class extends Bi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(r-e),l=t*a;for(let u=l+a;l!==u;l+=4)Vn.slerpFlat(s,0,o,l-a,o,l,c);return s}},bs=class extends en{InterpolantFactoryMethodLinear(t){return new Ja(this.times,this.values,this.getValueSize(),t)}};bs.prototype.ValueTypeName="quaternion";bs.prototype.InterpolantFactoryMethodSmooth=void 0;var oi=class extends en{constructor(t,e,n){super(t,e,n)}};oi.prototype.ValueTypeName="string";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=ns;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends en{};Ka.prototype.ValueTypeName="vector";var Qa=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}},S0=new Qa,ja=class{constructor(t){this.manager=t!==void 0?t:S0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ja.DEFAULT_MATERIAL_NAME="__DEFAULT";var Es=class extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Do=new ue,jl=new F,tu=new F,tc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cr,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;jl.setFromMatrixPosition(t.matrixWorld),e.position.copy(jl),tu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tu),e.updateMatrixWorld(),Do.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Do),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Do)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ec=class extends tc{constructor(){super(new ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ws=class extends Es{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new ec}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},As=class extends Es{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var fc="\\[\\]\\.:\\/",b0=new RegExp("["+fc+"]","g"),dc="[^"+fc+"]",E0="[^"+fc.replace("\\.","")+"]",w0=/((?:WC+[\/:])*)/.source.replace("WC",dc),A0=/(WCOD+)?/.source.replace("WCOD",E0),T0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dc),R0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dc),C0=new RegExp("^"+w0+A0+T0+R0+"$"),P0=["material","materials","bones","map"],nc=class{constructor(t,e,n){let r=n||ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ae=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(b0,"")}static parseTrackName(t){let e=C0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);P0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[r];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ae.Composite=nc;ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ae.prototype.GetterByBindingType=[ae.prototype._getValue_direct,ae.prototype._getValue_array,ae.prototype._getValue_arrayElement,ae.prototype._getValue_toArray];ae.prototype.SetterByBindingTypeAndVersioning=[[ae.prototype._setValue_direct,ae.prototype._setValue_direct_setNeedsUpdate,ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_array,ae.prototype._setValue_array_setNeedsUpdate,ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_arrayElement,ae.prototype._setValue_arrayElement_setNeedsUpdate,ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ae.prototype._setValue_fromArray,ae.prototype._setValue_fromArray_setNeedsUpdate,ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var V_=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function Ps(i,t){return i==null||t==null?NaN:i<t?-1:i>t?1:i>=t?0:NaN}function I0(i,t){return i==null||t==null?NaN:t<i?-1:t>i?1:t>=i?0:NaN}function bu(i){let t,e,n;i.length!==2?(t=Ps,e=(a,c)=>Ps(i(a),c),n=(a,c)=>i(a)-c):(t=i===Ps||i===I0?i:L0,e=i,n=i);function r(a,c,l=0,u=a.length){if(l<u){if(t(c,c)!==0)return u;do{let h=l+u>>>1;e(a[h],c)<0?l=h+1:u=h}while(l<u)}return l}function s(a,c,l=0,u=a.length){if(l<u){if(t(c,c)!==0)return u;do{let h=l+u>>>1;e(a[h],c)<=0?l=h+1:u=h}while(l<u)}return l}function o(a,c,l=0,u=a.length){let h=r(a,c,l,u-1);return h>l&&n(a[h-1],c)>-n(a[h],c)?h-1:h}return{left:r,center:o,right:s}}function L0(){return 0}function D0(i){return i===null?NaN:+i}var Eu=bu(Ps),G_=Eu.right,W_=Eu.left,X_=bu(D0).center;var q_=wu(Au),Y_=wu(U0);function wu(i){return function(t,e,n=e){if(!((e=+e)>=0))throw new RangeError("invalid rx");if(!((n=+n)>=0))throw new RangeError("invalid ry");let{data:r,width:s,height:o}=t;if(!((s=Math.floor(s))>=0))throw new RangeError("invalid width");if(!((o=Math.floor(o!==void 0?o:r.length/s))>=0))throw new RangeError("invalid height");if(!s||!o||!e&&!n)return t;let a=e&&i(e),c=n&&i(n),l=r.slice();return a&&c?(Vi(a,l,r,s,o),Vi(a,r,l,s,o),Vi(a,l,r,s,o),Hi(c,r,l,s,o),Hi(c,l,r,s,o),Hi(c,r,l,s,o)):a?(Vi(a,r,l,s,o),Vi(a,l,r,s,o),Vi(a,r,l,s,o)):c&&(Hi(c,r,l,s,o),Hi(c,l,r,s,o),Hi(c,r,l,s,o)),t}}function Vi(i,t,e,n,r){for(let s=0,o=n*r;s<o;)i(t,e,s,s+=n,1)}function Hi(i,t,e,n,r){for(let s=0,o=n*r;s<n;++s)i(t,e,s,s+o,n)}function U0(i){let t=Au(i);return(e,n,r,s,o)=>{r<<=2,s<<=2,o<<=2,t(e,n,r+0,s+0,o),t(e,n,r+1,s+1,o),t(e,n,r+2,s+2,o),t(e,n,r+3,s+3,o)}}function Au(i){let t=Math.floor(i);if(t===i)return N0(i);let e=i-t,n=2*i+1;return(r,s,o,a,c)=>{if(!((a-=c)>=o))return;let l=t*s[o],u=c*t,h=u+c;for(let f=o,d=o+u;f<d;f+=c)l+=s[Math.min(a,f)];for(let f=o,d=a;f<=d;f+=c)l+=s[Math.min(a,f+u)],r[f]=(l+e*(s[Math.max(o,f-h)]+s[Math.min(a,f+h)]))/n,l-=s[Math.max(o,f-u)]}}function N0(i){let t=2*i+1;return(e,n,r,s,o)=>{if(!((s-=o)>=r))return;let a=i*n[r],c=o*i;for(let l=r,u=r+c;l<u;l+=o)a+=n[Math.min(s,l)];for(let l=r,u=s;l<=u;l+=o)a+=n[Math.min(s,l+c)],e[l]=a/t,a-=n[Math.max(r,l-c)]}}var Ne=class{constructor(){this._partials=new Float64Array(32),this._n=0}add(t){let e=this._partials,n=0;for(let r=0;r<this._n&&r<32;r++){let s=e[r],o=t+s,a=Math.abs(t)<Math.abs(s)?t-(o-s):s-(o-t);a&&(e[n++]=a),t=o}return e[n]=t,this._n=n+1,this}valueOf(){let t=this._partials,e=this._n,n,r,s,o=0;if(e>0){for(o=t[--e];e>0&&(n=o,r=t[--e],o=n+r,s=r-(o-n),!s););e>0&&(s<0&&t[e-1]<0||s>0&&t[e-1]>0)&&(r=s*2,n=o+r,r==n-o&&(o=n))}return o}};var F0=Array.prototype,$_=F0.slice;var Z_=Math.sqrt(50),J_=Math.sqrt(10),K_=Math.sqrt(2);function*O0(i){for(let t of i)yield*t}function pc(i){return Array.from(O0(i))}function ai(i,t,e){i=+i,t=+t,e=(r=arguments.length)<2?(t=i,i=0,1):r<3?1:+e;for(var n=-1,r=Math.max(0,Math.ceil((t-i)/e))|0,s=new Array(r);++n<r;)s[n]=i+n*e;return s}var Q_=B0(Math.random);function B0(i){return function(e,n=0,r=e.length){let s=r-(n=+n);for(;s;){let o=i()*s--|0,a=e[s+n];e[s+n]=e[o+n],e[o+n]=a}return e}}var qt=1e-6,$u=1e-12,Jt=Math.PI,Ee=Jt/2,Tu=Jt/4,Ge=Jt*2,Fe=180/Jt,he=Jt/180,ne=Math.abs,Er=Math.atan,An=Math.atan2,Gt=Math.cos,Is=Math.ceil,Zu=Math.exp;var Ju=Math.log;var Dt=Math.sin,z0=Math.sign||function(i){return i>0?1:i<0?-1:0},Oe=Math.sqrt,Ku=Math.tan;function Qu(i){return i>1?0:i<-1?Jt:Math.acos(i)}function nn(i){return i>1?Ee:i<-1?-Ee:Math.asin(i)}function Ru(i){return(i=Dt(i/2))*i}function xe(){}function zs(i,t){i&&Pu.hasOwnProperty(i.type)&&Pu[i.type](i,t)}var Cu={Feature:function(i,t){zs(i.geometry,t)},FeatureCollection:function(i,t){for(var e=i.features,n=-1,r=e.length;++n<r;)zs(e[n].geometry,t)}},Pu={Sphere:function(i,t){t.sphere()},Point:function(i,t){i=i.coordinates,t.point(i[0],i[1],i[2])},MultiPoint:function(i,t){for(var e=i.coordinates,n=-1,r=e.length;++n<r;)i=e[n],t.point(i[0],i[1],i[2])},LineString:function(i,t){vc(i.coordinates,t,0)},MultiLineString:function(i,t){for(var e=i.coordinates,n=-1,r=e.length;++n<r;)vc(e[n],t,0)},Polygon:function(i,t){Iu(i.coordinates,t)},MultiPolygon:function(i,t){for(var e=i.coordinates,n=-1,r=e.length;++n<r;)Iu(e[n],t)},GeometryCollection:function(i,t){for(var e=i.geometries,n=-1,r=e.length;++n<r;)zs(e[n],t)}};function vc(i,t,e){var n=-1,r=i.length-e,s;for(t.lineStart();++n<r;)s=i[n],t.point(s[0],s[1],s[2]);t.lineEnd()}function Iu(i,t){var e=-1,n=i.length;for(t.polygonStart();++e<n;)vc(i[e],t,1);t.polygonEnd()}function ci(i,t){i&&Cu.hasOwnProperty(i.type)?Cu[i.type](i,t):zs(i,t)}var ex=new Ne,nx=new Ne;function yc(i){return[An(i[1],i[0]),nn(i[2])]}function Wi(i){var t=i[0],e=i[1],n=Gt(e);return[n*Gt(t),n*Dt(t),Dt(e)]}function Ls(i,t){return i[0]*t[0]+i[1]*t[1]+i[2]*t[2]}function ks(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function mc(i,t){i[0]+=t[0],i[1]+=t[1],i[2]+=t[2]}function Ds(i,t){return[i[0]*t,i[1]*t,i[2]*t]}function Mc(i){var t=Oe(i[0]*i[0]+i[1]*i[1]+i[2]*i[2]);i[0]/=t,i[1]/=t,i[2]/=t}function Sc(i,t){function e(n,r){return n=i(n,r),t(n[0],n[1])}return i.invert&&t.invert&&(e.invert=function(n,r){return n=t.invert(n,r),n&&i.invert(n[0],n[1])}),e}function bc(i,t){return ne(i)>Jt&&(i-=Math.round(i/Ge)*Ge),[i,t]}bc.invert=bc;function k0(i,t,e){return(i%=Ge)?t||e?Sc(Du(i),Uu(t,e)):Du(i):t||e?Uu(t,e):bc}function Lu(i){return function(t,e){return t+=i,ne(t)>Jt&&(t-=Math.round(t/Ge)*Ge),[t,e]}}function Du(i){var t=Lu(i);return t.invert=Lu(-i),t}function Uu(i,t){var e=Gt(i),n=Dt(i),r=Gt(t),s=Dt(t);function o(a,c){var l=Gt(c),u=Gt(a)*l,h=Dt(a)*l,f=Dt(c),d=f*e+u*n;return[An(h*r-d*s,u*e-f*n),nn(d*r+h*s)]}return o.invert=function(a,c){var l=Gt(c),u=Gt(a)*l,h=Dt(a)*l,f=Dt(c),d=f*r-h*s;return[An(h*r+f*s,u*e+d*n),nn(d*e-u*n)]},o}function V0(i,t,e,n,r,s){if(e){var o=Gt(t),a=Dt(t),c=n*e;r==null?(r=t+n*Ge,s=t-c/2):(r=Nu(o,r),s=Nu(o,s),(n>0?r<s:r>s)&&(r+=n*Ge));for(var l,u=r;n>0?u>s:u<s;u-=c)l=yc([o,-a*Gt(u),-a*Dt(u)]),i.point(l[0],l[1])}}function Nu(i,t){t=Wi(t),t[0]-=i,Mc(t);var e=Qu(-t[1]);return((-t[2]<0?-e:e)+Ge-qt)%Ge}function ju(){var i=[],t;return{point:function(e,n,r){t.push([e,n,r])},lineStart:function(){i.push(t=[])},lineEnd:xe,rejoin:function(){i.length>1&&i.push(i.pop().concat(i.shift()))},result:function(){var e=i;return i=[],t=null,e}}}function Fs(i,t){return ne(i[0]-t[0])<qt&&ne(i[1]-t[1])<qt}function Us(i,t,e,n){this.x=i,this.z=t,this.o=e,this.e=n,this.v=!1,this.n=this.p=null}function th(i,t,e,n,r){var s=[],o=[],a,c;if(i.forEach(function(g){if(!((_=g.length-1)<=0)){var _,m=g[0],p=g[_],E;if(Fs(m,p)){if(!m[2]&&!p[2]){for(r.lineStart(),a=0;a<_;++a)r.point((m=g[a])[0],m[1]);r.lineEnd();return}p[0]+=2*qt}s.push(E=new Us(m,g,null,!0)),o.push(E.o=new Us(m,null,E,!1)),s.push(E=new Us(p,g,null,!1)),o.push(E.o=new Us(p,null,E,!0))}}),!!s.length){for(o.sort(t),Fu(s),Fu(o),a=0,c=o.length;a<c;++a)o[a].e=e=!e;for(var l=s[0],u,h;;){for(var f=l,d=!0;f.v;)if((f=f.n)===l)return;u=f.z,r.lineStart();do{if(f.v=f.o.v=!0,f.e){if(d)for(a=0,c=u.length;a<c;++a)r.point((h=u[a])[0],h[1]);else n(f.x,f.n.x,1,r);f=f.n}else{if(d)for(u=f.p.z,a=u.length-1;a>=0;--a)r.point((h=u[a])[0],h[1]);else n(f.x,f.p.x,-1,r);f=f.p}f=f.o,u=f.z,d=!d}while(!f.v);r.lineEnd()}}}function Fu(i){if(t=i.length){for(var t,e=0,n=i[0],r;++e<t;)n.n=r=i[e],r.p=n,n=r;n.n=r=i[0],r.p=n}}function gc(i){return ne(i[0])<=Jt?i[0]:z0(i[0])*((ne(i[0])+Jt)%Ge-Jt)}function H0(i,t){var e=gc(t),n=t[1],r=Dt(n),s=[Dt(e),-Gt(e),0],o=0,a=0,c=new Ne;r===1?n=Ee+qt:r===-1&&(n=-Ee-qt);for(var l=0,u=i.length;l<u;++l)if(f=(h=i[l]).length)for(var h,f,d=h[f-1],g=gc(d),_=d[1]/2+Tu,m=Dt(_),p=Gt(_),E=0;E<f;++E,g=v,m=A,p=R,d=y){var y=h[E],v=gc(y),P=y[1]/2+Tu,A=Dt(P),R=Gt(P),C=v-g,b=C>=0?1:-1,M=b*C,T=M>Jt,W=m*A;if(c.add(An(W*b*Dt(M),p*R+W*Gt(M))),o+=T?C+b*Ge:C,T^g>=e^v>=e){var B=ks(Wi(d),Wi(y));Mc(B);var H=ks(s,B);Mc(H);var I=(T^C>=0?-1:1)*nn(H[2]);(n>I||n===I&&(B[0]||B[1]))&&(a+=T^C>=0?1:-1)}}return(o<-qt||o<qt&&c<-$u)^a&1}function eh(i,t,e,n){return function(r){var s=t(r),o=ju(),a=t(o),c=!1,l,u,h,f={point:d,lineStart:_,lineEnd:m,polygonStart:function(){f.point=p,f.lineStart=E,f.lineEnd=y,u=[],l=[]},polygonEnd:function(){f.point=d,f.lineStart=_,f.lineEnd=m,u=pc(u);var v=H0(l,n);u.length?(c||(r.polygonStart(),c=!0),th(u,W0,v,e,r)):v&&(c||(r.polygonStart(),c=!0),r.lineStart(),e(null,null,1,r),r.lineEnd()),c&&(r.polygonEnd(),c=!1),u=l=null},sphere:function(){r.polygonStart(),r.lineStart(),e(null,null,1,r),r.lineEnd(),r.polygonEnd()}};function d(v,P){i(v,P)&&r.point(v,P)}function g(v,P){s.point(v,P)}function _(){f.point=g,s.lineStart()}function m(){f.point=d,s.lineEnd()}function p(v,P){h.push([v,P]),a.point(v,P)}function E(){a.lineStart(),h=[]}function y(){p(h[0][0],h[0][1]),a.lineEnd();var v=a.clean(),P=o.result(),A,R=P.length,C,b,M;if(h.pop(),l.push(h),h=null,!!R){if(v&1){if(b=P[0],(C=b.length-1)>0){for(c||(r.polygonStart(),c=!0),r.lineStart(),A=0;A<C;++A)r.point((M=b[A])[0],M[1]);r.lineEnd()}return}R>1&&v&2&&P.push(P.pop().concat(P.shift())),u.push(P.filter(G0))}}return f}}function G0(i){return i.length>1}function W0(i,t){return((i=i.x)[0]<0?i[1]-Ee-qt:Ee-i[1])-((t=t.x)[0]<0?t[1]-Ee-qt:Ee-t[1])}var Ou=eh(function(){return!0},X0,Y0,[-Jt,-Ee]);function X0(i){var t=NaN,e=NaN,n=NaN,r;return{lineStart:function(){i.lineStart(),r=1},point:function(s,o){var a=s>0?Jt:-Jt,c=ne(s-t);ne(c-Jt)<qt?(i.point(t,e=(e+o)/2>0?Ee:-Ee),i.point(n,e),i.lineEnd(),i.lineStart(),i.point(a,e),i.point(s,e),r=0):n!==a&&c>=Jt&&(ne(t-n)<qt&&(t-=n*qt),ne(s-a)<qt&&(s-=a*qt),e=q0(t,e,s,o),i.point(n,e),i.lineEnd(),i.lineStart(),i.point(a,e),r=0),i.point(t=s,e=o),n=a},lineEnd:function(){i.lineEnd(),t=e=NaN},clean:function(){return 2-r}}}function q0(i,t,e,n){var r,s,o=Dt(i-e);return ne(o)>qt?Er((Dt(t)*(s=Gt(n))*Dt(e)-Dt(n)*(r=Gt(t))*Dt(i))/(r*s*o)):(t+n)/2}function Y0(i,t,e,n){var r;if(i==null)r=e*Ee,n.point(-Jt,r),n.point(0,r),n.point(Jt,r),n.point(Jt,0),n.point(Jt,-r),n.point(0,-r),n.point(-Jt,-r),n.point(-Jt,0),n.point(-Jt,r);else if(ne(i[0]-t[0])>qt){var s=i[0]<t[0]?Jt:-Jt;r=e*s/2,n.point(-s,r),n.point(0,r),n.point(s,r)}else n.point(t[0],t[1])}function $0(i){var t=Gt(i),e=2*he,n=t>0,r=ne(t)>qt;function s(u,h,f,d){V0(d,i,e,f,u,h)}function o(u,h){return Gt(u)*Gt(h)>t}function a(u){var h,f,d,g,_;return{lineStart:function(){g=d=!1,_=1},point:function(m,p){var E=[m,p],y,v=o(m,p),P=n?v?0:l(m,p):v?l(m+(m<0?Jt:-Jt),p):0;if(!h&&(g=d=v)&&u.lineStart(),v!==d&&(y=c(h,E),(!y||Fs(h,y)||Fs(E,y))&&(E[2]=1)),v!==d)_=0,v?(u.lineStart(),y=c(E,h),u.point(y[0],y[1])):(y=c(h,E),u.point(y[0],y[1],2),u.lineEnd()),h=y;else if(r&&h&&n^v){var A;!(P&f)&&(A=c(E,h,!0))&&(_=0,n?(u.lineStart(),u.point(A[0][0],A[0][1]),u.point(A[1][0],A[1][1]),u.lineEnd()):(u.point(A[1][0],A[1][1]),u.lineEnd(),u.lineStart(),u.point(A[0][0],A[0][1],3)))}v&&(!h||!Fs(h,E))&&u.point(E[0],E[1]),h=E,d=v,f=P},lineEnd:function(){d&&u.lineEnd(),h=null},clean:function(){return _|(g&&d)<<1}}}function c(u,h,f){var d=Wi(u),g=Wi(h),_=[1,0,0],m=ks(d,g),p=Ls(m,m),E=m[0],y=p-E*E;if(!y)return!f&&u;var v=t*p/y,P=-t*E/y,A=ks(_,m),R=Ds(_,v),C=Ds(m,P);mc(R,C);var b=A,M=Ls(R,b),T=Ls(b,b),W=M*M-T*(Ls(R,R)-1);if(!(W<0)){var B=Oe(W),H=Ds(b,(-M-B)/T);if(mc(H,R),H=yc(H),!f)return H;var I=u[0],O=h[0],J=u[1],k=h[1],tt;O<I&&(tt=I,I=O,O=tt);var nt=O-I,ft=ne(nt-Jt)<qt,Pt=ft||nt<qt;if(!ft&&k<J&&(tt=J,J=k,k=tt),Pt?ft?J+k>0^H[1]<(ne(H[0]-I)<qt?J:k):J<=H[1]&&H[1]<=k:nt>Jt^(I<=H[0]&&H[0]<=O)){var Vt=Ds(b,(-M+B)/T);return mc(Vt,R),[H,yc(Vt)]}}}function l(u,h){var f=n?i:Jt-i,d=0;return u<-f?d|=1:u>f&&(d|=2),h<-f?d|=4:h>f&&(d|=8),d}return eh(o,a,s,n?[0,-i]:[-Jt,i-Jt])}function Z0(i,t,e,n,r,s){var o=i[0],a=i[1],c=t[0],l=t[1],u=0,h=1,f=c-o,d=l-a,g;if(g=e-o,!(!f&&g>0)){if(g/=f,f<0){if(g<u)return;g<h&&(h=g)}else if(f>0){if(g>h)return;g>u&&(u=g)}if(g=r-o,!(!f&&g<0)){if(g/=f,f<0){if(g>h)return;g>u&&(u=g)}else if(f>0){if(g<u)return;g<h&&(h=g)}if(g=n-a,!(!d&&g>0)){if(g/=d,d<0){if(g<u)return;g<h&&(h=g)}else if(d>0){if(g>h)return;g>u&&(u=g)}if(g=s-a,!(!d&&g<0)){if(g/=d,d<0){if(g>h)return;g>u&&(u=g)}else if(d>0){if(g<u)return;g<h&&(h=g)}return u>0&&(i[0]=o+u*f,i[1]=a+u*d),h<1&&(t[0]=o+h*f,t[1]=a+h*d),!0}}}}}var dr=1e9,Ns=-dr;function J0(i,t,e,n){function r(l,u){return i<=l&&l<=e&&t<=u&&u<=n}function s(l,u,h,f){var d=0,g=0;if(l==null||(d=o(l,h))!==(g=o(u,h))||c(l,u)<0^h>0)do f.point(d===0||d===3?i:e,d>1?n:t);while((d=(d+h+4)%4)!==g);else f.point(u[0],u[1])}function o(l,u){return ne(l[0]-i)<qt?u>0?0:3:ne(l[0]-e)<qt?u>0?2:1:ne(l[1]-t)<qt?u>0?1:0:u>0?3:2}function a(l,u){return c(l.x,u.x)}function c(l,u){var h=o(l,1),f=o(u,1);return h!==f?h-f:h===0?u[1]-l[1]:h===1?l[0]-u[0]:h===2?l[1]-u[1]:u[0]-l[0]}return function(l){var u=l,h=ju(),f,d,g,_,m,p,E,y,v,P,A,R={point:C,lineStart:W,lineEnd:B,polygonStart:M,polygonEnd:T};function C(I,O){r(I,O)&&u.point(I,O)}function b(){for(var I=0,O=0,J=d.length;O<J;++O)for(var k=d[O],tt=1,nt=k.length,ft=k[0],Pt,Vt,q=ft[0],j=ft[1];tt<nt;++tt)Pt=q,Vt=j,ft=k[tt],q=ft[0],j=ft[1],Vt<=n?j>n&&(q-Pt)*(n-Vt)>(j-Vt)*(i-Pt)&&++I:j<=n&&(q-Pt)*(n-Vt)<(j-Vt)*(i-Pt)&&--I;return I}function M(){u=h,f=[],d=[],A=!0}function T(){var I=b(),O=A&&I,J=(f=pc(f)).length;(O||J)&&(l.polygonStart(),O&&(l.lineStart(),s(null,null,1,l),l.lineEnd()),J&&th(f,a,I,s,l),l.polygonEnd()),u=l,f=d=g=null}function W(){R.point=H,d&&d.push(g=[]),P=!0,v=!1,E=y=NaN}function B(){f&&(H(_,m),p&&v&&h.rejoin(),f.push(h.result())),R.point=C,v&&u.lineEnd()}function H(I,O){var J=r(I,O);if(d&&g.push([I,O]),P)_=I,m=O,p=J,P=!1,J&&(u.lineStart(),u.point(I,O));else if(J&&v)u.point(I,O);else{var k=[E=Math.max(Ns,Math.min(dr,E)),y=Math.max(Ns,Math.min(dr,y))],tt=[I=Math.max(Ns,Math.min(dr,I)),O=Math.max(Ns,Math.min(dr,O))];Z0(k,tt,i,t,e,n)?(v||(u.lineStart(),u.point(k[0],k[1])),u.point(tt[0],tt[1]),J||u.lineEnd(),A=!1):J&&(u.lineStart(),u.point(I,O),A=!1)}E=I,y=O,v=J}return R}}var Ec,wc,Os,Bs,Xi={sphere:xe,point:xe,lineStart:K0,lineEnd:xe,polygonStart:xe,polygonEnd:xe};function K0(){Xi.point=j0,Xi.lineEnd=Q0}function Q0(){Xi.point=Xi.lineEnd=xe}function j0(i,t){i*=he,t*=he,wc=i,Os=Dt(t),Bs=Gt(t),Xi.point=t_}function t_(i,t){i*=he,t*=he;var e=Dt(t),n=Gt(t),r=ne(i-wc),s=Gt(r),o=Dt(r),a=n*o,c=Bs*e-Os*n*s,l=Os*e+Bs*n*s;Ec.add(An(Oe(a*a+c*c),l)),wc=i,Os=e,Bs=n}function e_(i){return Ec=new Ne,ci(i,Xi),+Ec}var Ac=[null,null],n_={type:"LineString",coordinates:Ac};function nh(i,t){return Ac[0]=i,Ac[1]=t,e_(n_)}function Bu(i,t,e){var n=ai(i,t-qt,e).concat(t);return function(r){return n.map(function(s){return[r,s]})}}function zu(i,t,e){var n=ai(i,t-qt,e).concat(t);return function(r){return n.map(function(s){return[s,r]})}}function i_(){var i,t,e,n,r,s,o,a,c=10,l=c,u=90,h=360,f,d,g,_,m=2.5;function p(){return{type:"MultiLineString",coordinates:E()}}function E(){return ai(Is(n/u)*u,e,u).map(g).concat(ai(Is(a/h)*h,o,h).map(_)).concat(ai(Is(t/c)*c,i,c).filter(function(y){return ne(y%u)>qt}).map(f)).concat(ai(Is(s/l)*l,r,l).filter(function(y){return ne(y%h)>qt}).map(d))}return p.lines=function(){return E().map(function(y){return{type:"LineString",coordinates:y}})},p.outline=function(){return{type:"Polygon",coordinates:[g(n).concat(_(o).slice(1),g(e).reverse().slice(1),_(a).reverse().slice(1))]}},p.extent=function(y){return arguments.length?p.extentMajor(y).extentMinor(y):p.extentMinor()},p.extentMajor=function(y){return arguments.length?(n=+y[0][0],e=+y[1][0],a=+y[0][1],o=+y[1][1],n>e&&(y=n,n=e,e=y),a>o&&(y=a,a=o,o=y),p.precision(m)):[[n,a],[e,o]]},p.extentMinor=function(y){return arguments.length?(t=+y[0][0],i=+y[1][0],s=+y[0][1],r=+y[1][1],t>i&&(y=t,t=i,i=y),s>r&&(y=s,s=r,r=y),p.precision(m)):[[t,s],[i,r]]},p.step=function(y){return arguments.length?p.stepMajor(y).stepMinor(y):p.stepMinor()},p.stepMajor=function(y){return arguments.length?(u=+y[0],h=+y[1],p):[u,h]},p.stepMinor=function(y){return arguments.length?(c=+y[0],l=+y[1],p):[c,l]},p.precision=function(y){return arguments.length?(m=+y,f=Bu(s,r,90),d=zu(t,i,m),g=Bu(a,o,90),_=zu(n,e,m),p):m},p.extentMajor([[-180,-90+qt],[180,90-qt]]).extentMinor([[-180,-80-qt],[180,80+qt]])}function ih(){return i_()()}function Bc(i,t){var e=i[0]*he,n=i[1]*he,r=t[0]*he,s=t[1]*he,o=Gt(n),a=Dt(n),c=Gt(s),l=Dt(s),u=o*Gt(e),h=o*Dt(e),f=c*Gt(r),d=c*Dt(r),g=2*nn(Oe(Ru(s-n)+o*c*Ru(r-e))),_=Dt(g),m=g?function(p){var E=Dt(p*=g)/_,y=Dt(g-p)/_,v=y*u+E*f,P=y*h+E*d,A=y*a+E*l;return[An(P,v)*Fe,An(A,Oe(v*v+P*P))*Fe]}:function(){return[e*Fe,n*Fe]};return m.distance=g,m}var Tc=i=>i,_c=new Ne,Rc=new Ne,rh,sh,Cc,Pc,wn={point:xe,lineStart:xe,lineEnd:xe,polygonStart:function(){wn.lineStart=r_,wn.lineEnd=o_},polygonEnd:function(){wn.lineStart=wn.lineEnd=wn.point=xe,_c.add(ne(Rc)),Rc=new Ne},result:function(){var i=_c/2;return _c=new Ne,i}};function r_(){wn.point=s_}function s_(i,t){wn.point=oh,rh=Cc=i,sh=Pc=t}function oh(i,t){Rc.add(Pc*i-Cc*t),Cc=i,Pc=t}function o_(){oh(rh,sh)}var qi=1/0,Vs=qi,Sr=-qi,Hs=Sr,Gs={point:a_,lineStart:xe,lineEnd:xe,polygonStart:xe,polygonEnd:xe,result:function(){var i=[[qi,Vs],[Sr,Hs]];return Sr=Hs=-(Vs=qi=1/0),i}};function a_(i,t){i<qi&&(qi=i),i>Sr&&(Sr=i),t<Vs&&(Vs=t),t>Hs&&(Hs=t)}var Ic=0,Lc=0,pr=0,Ws=0,Xs=0,Gi=0,Dc=0,Uc=0,mr=0,ah,ch,ln,un,He={point:li,lineStart:ku,lineEnd:Vu,polygonStart:function(){He.lineStart=u_,He.lineEnd=h_},polygonEnd:function(){He.point=li,He.lineStart=ku,He.lineEnd=Vu},result:function(){var i=mr?[Dc/mr,Uc/mr]:Gi?[Ws/Gi,Xs/Gi]:pr?[Ic/pr,Lc/pr]:[NaN,NaN];return Ic=Lc=pr=Ws=Xs=Gi=Dc=Uc=mr=0,i}};function li(i,t){Ic+=i,Lc+=t,++pr}function ku(){He.point=c_}function c_(i,t){He.point=l_,li(ln=i,un=t)}function l_(i,t){var e=i-ln,n=t-un,r=Oe(e*e+n*n);Ws+=r*(ln+i)/2,Xs+=r*(un+t)/2,Gi+=r,li(ln=i,un=t)}function Vu(){He.point=li}function u_(){He.point=f_}function h_(){lh(ah,ch)}function f_(i,t){He.point=lh,li(ah=ln=i,ch=un=t)}function lh(i,t){var e=i-ln,n=t-un,r=Oe(e*e+n*n);Ws+=r*(ln+i)/2,Xs+=r*(un+t)/2,Gi+=r,r=un*i-ln*t,Dc+=r*(ln+i),Uc+=r*(un+t),mr+=r*3,li(ln=i,un=t)}function uh(i){this._context=i}uh.prototype={_radius:4.5,pointRadius:function(i){return this._radius=i,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){this._line===0&&this._context.closePath(),this._point=NaN},point:function(i,t){switch(this._point){case 0:{this._context.moveTo(i,t),this._point=1;break}case 1:{this._context.lineTo(i,t);break}default:{this._context.moveTo(i+this._radius,t),this._context.arc(i,t,this._radius,0,Ge);break}}},result:xe};var Nc=new Ne,xc,hh,fh,gr,_r,br={point:xe,lineStart:function(){br.point=d_},lineEnd:function(){xc&&dh(hh,fh),br.point=xe},polygonStart:function(){xc=!0},polygonEnd:function(){xc=null},result:function(){var i=+Nc;return Nc=new Ne,i}};function d_(i,t){br.point=dh,hh=gr=i,fh=_r=t}function dh(i,t){gr-=i,_r-=t,Nc.add(Oe(gr*gr+_r*_r)),gr=i,_r=t}var Hu,qs,Gu,Wu,Ys=class{constructor(t){this._append=t==null?ph:p_(t),this._radius=4.5,this._=""}pointRadius(t){return this._radius=+t,this}polygonStart(){this._line=0}polygonEnd(){this._line=NaN}lineStart(){this._point=0}lineEnd(){this._line===0&&(this._+="Z"),this._point=NaN}point(t,e){switch(this._point){case 0:{this._append`M${t},${e}`,this._point=1;break}case 1:{this._append`L${t},${e}`;break}default:{if(this._append`M${t},${e}`,this._radius!==Gu||this._append!==qs){let n=this._radius,r=this._;this._="",this._append`m0,${n}a${n},${n} 0 1,1 0,${-2*n}a${n},${n} 0 1,1 0,${2*n}z`,Gu=n,qs=this._append,Wu=this._,this._=r}this._+=Wu;break}}}result(){let t=this._;return this._="",t.length?t:null}};function ph(i){let t=1;this._+=i[0];for(let e=i.length;t<e;++t)this._+=arguments[t]+i[t]}function p_(i){let t=Math.floor(i);if(!(t>=0))throw new RangeError(`invalid digits: ${i}`);if(t>15)return ph;if(t!==Hu){let e=10**t;Hu=t,qs=function(r){let s=1;this._+=r[0];for(let o=r.length;s<o;++s)this._+=Math.round(arguments[s]*e)/e+r[s]}}return qs}function mh(i,t){let e=3,n=4.5,r,s;function o(a){return a&&(typeof n=="function"&&s.pointRadius(+n.apply(this,arguments)),ci(a,r(s))),s.result()}return o.area=function(a){return ci(a,r(wn)),wn.result()},o.measure=function(a){return ci(a,r(br)),br.result()},o.bounds=function(a){return ci(a,r(Gs)),Gs.result()},o.centroid=function(a){return ci(a,r(He)),He.result()},o.projection=function(a){return arguments.length?(r=a==null?(i=null,Tc):(i=a).stream,o):i},o.context=function(a){return arguments.length?(s=a==null?(t=null,new Ys(e)):new uh(t=a),typeof n!="function"&&s.pointRadius(n),o):t},o.pointRadius=function(a){return arguments.length?(n=typeof a=="function"?a:(s.pointRadius(+a),+a),o):n},o.digits=function(a){if(!arguments.length)return e;if(a==null)e=null;else{let c=Math.floor(a);if(!(c>=0))throw new RangeError(`invalid digits: ${a}`);e=c}return t===null&&(s=new Ys(e)),o},o.projection(i).digits(e).context(t)}function zc(i){return function(t){var e=new Fc;for(var n in i)e[n]=i[n];return e.stream=t,e}}function Fc(){}Fc.prototype={constructor:Fc,point:function(i,t){this.stream.point(i,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}};function kc(i,t,e){var n=i.clipExtent&&i.clipExtent();return i.scale(150).translate([0,0]),n!=null&&i.clipExtent(null),ci(e,i.stream(Gs)),t(Gs.result()),n!=null&&i.clipExtent(n),i}function gh(i,t,e){return kc(i,function(n){var r=t[1][0]-t[0][0],s=t[1][1]-t[0][1],o=Math.min(r/(n[1][0]-n[0][0]),s/(n[1][1]-n[0][1])),a=+t[0][0]+(r-o*(n[1][0]+n[0][0]))/2,c=+t[0][1]+(s-o*(n[1][1]+n[0][1]))/2;i.scale(150*o).translate([a,c])},e)}function m_(i,t,e){return gh(i,[[0,0],t],e)}function g_(i,t,e){return kc(i,function(n){var r=+t,s=r/(n[1][0]-n[0][0]),o=(r-s*(n[1][0]+n[0][0]))/2,a=-s*n[0][1];i.scale(150*s).translate([o,a])},e)}function __(i,t,e){return kc(i,function(n){var r=+t,s=r/(n[1][1]-n[0][1]),o=-s*n[0][0],a=(r-s*(n[1][1]+n[0][1]))/2;i.scale(150*s).translate([o,a])},e)}var Xu=16,x_=Gt(30*he);function qu(i,t){return+t?y_(i,t):v_(i)}function v_(i){return zc({point:function(t,e){t=i(t,e),this.stream.point(t[0],t[1])}})}function y_(i,t){function e(n,r,s,o,a,c,l,u,h,f,d,g,_,m){var p=l-n,E=u-r,y=p*p+E*E;if(y>4*t&&_--){var v=o+f,P=a+d,A=c+g,R=Oe(v*v+P*P+A*A),C=nn(A/=R),b=ne(ne(A)-1)<qt||ne(s-h)<qt?(s+h)/2:An(P,v),M=i(b,C),T=M[0],W=M[1],B=T-n,H=W-r,I=E*B-p*H;(I*I/y>t||ne((p*B+E*H)/y-.5)>.3||o*f+a*d+c*g<x_)&&(e(n,r,s,o,a,c,T,W,b,v/=R,P/=R,A,_,m),m.point(T,W),e(T,W,b,v,P,A,l,u,h,f,d,g,_,m))}}return function(n){var r,s,o,a,c,l,u,h,f,d,g,_,m={point:p,lineStart:E,lineEnd:v,polygonStart:function(){n.polygonStart(),m.lineStart=P},polygonEnd:function(){n.polygonEnd(),m.lineStart=E}};function p(C,b){C=i(C,b),n.point(C[0],C[1])}function E(){h=NaN,m.point=y,n.lineStart()}function y(C,b){var M=Wi([C,b]),T=i(C,b);e(h,f,u,d,g,_,h=T[0],f=T[1],u=C,d=M[0],g=M[1],_=M[2],Xu,n),n.point(h,f)}function v(){m.point=p,n.lineEnd()}function P(){E(),m.point=A,m.lineEnd=R}function A(C,b){y(r=C,b),s=h,o=f,a=d,c=g,l=_,m.point=y}function R(){e(h,f,u,d,g,_,s,o,r,a,c,l,Xu,n),m.lineEnd=v,v()}return m}}var M_=zc({point:function(i,t){this.stream.point(i*he,t*he)}});function S_(i){return zc({point:function(t,e){var n=i(t,e);return this.stream.point(n[0],n[1])}})}function b_(i,t,e,n,r){function s(o,a){return o*=n,a*=r,[t+i*o,e-i*a]}return s.invert=function(o,a){return[(o-t)/i*n,(e-a)/i*r]},s}function Yu(i,t,e,n,r,s){if(!s)return b_(i,t,e,n,r);var o=Gt(s),a=Dt(s),c=o*i,l=a*i,u=o/i,h=a/i,f=(a*e-o*t)/i,d=(a*t+o*e)/i;function g(_,m){return _*=n,m*=r,[c*_-l*m+t,e-l*_-c*m]}return g.invert=function(_,m){return[n*(u*_-h*m+f),r*(d-h*_-u*m)]},g}function E_(i){return w_(function(){return i})()}function w_(i){var t,e=150,n=480,r=250,s=0,o=0,a=0,c=0,l=0,u,h=0,f=1,d=1,g=null,_=Ou,m=null,p,E,y,v=Tc,P=.5,A,R,C,b,M;function T(I){return C(I[0]*he,I[1]*he)}function W(I){return I=C.invert(I[0],I[1]),I&&[I[0]*Fe,I[1]*Fe]}T.stream=function(I){return b&&M===I?b:b=M_(S_(u)(_(A(v(M=I)))))},T.preclip=function(I){return arguments.length?(_=I,g=void 0,H()):_},T.postclip=function(I){return arguments.length?(v=I,m=p=E=y=null,H()):v},T.clipAngle=function(I){return arguments.length?(_=+I?$0(g=I*he):(g=null,Ou),H()):g*Fe},T.clipExtent=function(I){return arguments.length?(v=I==null?(m=p=E=y=null,Tc):J0(m=+I[0][0],p=+I[0][1],E=+I[1][0],y=+I[1][1]),H()):m==null?null:[[m,p],[E,y]]},T.scale=function(I){return arguments.length?(e=+I,B()):e},T.translate=function(I){return arguments.length?(n=+I[0],r=+I[1],B()):[n,r]},T.center=function(I){return arguments.length?(s=I[0]%360*he,o=I[1]%360*he,B()):[s*Fe,o*Fe]},T.rotate=function(I){return arguments.length?(a=I[0]%360*he,c=I[1]%360*he,l=I.length>2?I[2]%360*he:0,B()):[a*Fe,c*Fe,l*Fe]},T.angle=function(I){return arguments.length?(h=I%360*he,B()):h*Fe},T.reflectX=function(I){return arguments.length?(f=I?-1:1,B()):f<0},T.reflectY=function(I){return arguments.length?(d=I?-1:1,B()):d<0},T.precision=function(I){return arguments.length?(A=qu(R,P=I*I),H()):Oe(P)},T.fitExtent=function(I,O){return gh(T,I,O)},T.fitSize=function(I,O){return m_(T,I,O)},T.fitWidth=function(I,O){return g_(T,I,O)},T.fitHeight=function(I,O){return __(T,I,O)};function B(){var I=Yu(e,0,0,f,d,h).apply(null,t(s,o)),O=Yu(e,n-I[0],r-I[1],f,d,h);return u=k0(a,c,l),R=Sc(t,O),C=Sc(u,R),A=qu(R,P),H()}function H(){return b=M=null,T}return function(){return t=i.apply(this,arguments),T.invert=t.invert&&W,B()}}function _h(i){return function(t,e){var n=Gt(t),r=Gt(e),s=i(n*r);return s===1/0?[2,0]:[s*r*Dt(t),s*Dt(e)]}}function wr(i){return function(t,e){var n=Oe(t*t+e*e),r=i(n),s=Dt(r),o=Gt(r);return[An(t*s,n*o),nn(n&&e*s/n)]}}var A_=_h(function(i){return Oe(2/(1+i))});A_.invert=wr(function(i){return 2*nn(i/2)});var T_=_h(function(i){return(i=Qu(i))&&i/Dt(i)});T_.invert=wr(function(i){return i});function R_(i,t){return[i,Ju(Ku((Ee+t)/2))]}R_.invert=function(i,t){return[i,2*Er(Zu(t))-Ee]};function Oc(i,t){return[i,t]}Oc.invert=Oc;function xh(){return E_(Oc).scale(152.63)}var xr=1.340264,vr=-.081106,yr=893e-6,Mr=.003796,$s=Oe(3)/2,C_=12;function P_(i,t){var e=nn($s*Dt(t)),n=e*e,r=n*n*n;return[i*Gt(e)/($s*(xr+3*vr*n+r*(7*yr+9*Mr*n))),e*(xr+vr*n+r*(yr+Mr*n))]}P_.invert=function(i,t){for(var e=t,n=e*e,r=n*n*n,s=0,o,a,c;s<C_&&(a=e*(xr+vr*n+r*(yr+Mr*n))-t,c=xr+3*vr*n+r*(7*yr+9*Mr*n),e-=o=a/c,n=e*e,r=n*n*n,!(ne(o)<$u));++s);return[$s*i*(xr+3*vr*n+r*(7*yr+9*Mr*n))/Gt(e),nn(Dt(e)/$s)]};function I_(i,t){var e=Gt(t),n=Gt(i)*e;return[e*Dt(i)/n,Dt(t)/n]}I_.invert=wr(Er);function L_(i,t){var e=t*t,n=e*e;return[i*(.8707-.131979*e+n*(-.013791+n*(.003971*e-.001529*n))),t*(1.007226+e*(.015085+n*(-.044475+.028874*e-.005916*n)))]}L_.invert=function(i,t){var e=t,n=25,r;do{var s=e*e,o=s*s;e-=r=(e*(1.007226+s*(.015085+o*(-.044475+.028874*s-.005916*o)))-t)/(1.007226+s*(.015085*3+o*(-.044475*7+.028874*9*s-.005916*11*o)))}while(ne(r)>qt&&--n>0);return[i/(.8707+(s=e*e)*(-.131979+s*(-.013791+s*s*s*(.003971-.001529*s)))),e]};function D_(i,t){return[Gt(t)*Dt(i),Dt(t)]}D_.invert=wr(nn);function U_(i,t){var e=Gt(t),n=1+Gt(i)*e;return[e*Dt(i)/n,Dt(t)/n]}U_.invert=wr(function(i){return 2*Er(i)});function N_(i,t){return[Ju(Ku((Ee+t)/2)),-i]}N_.invert=function(i,t){return[-t,2*Er(Zu(i))-Ee]};function Vc(i){return i}function Zs(i){if(i==null)return Vc;var t,e,n=i.scale[0],r=i.scale[1],s=i.translate[0],o=i.translate[1];return function(a,c){c||(t=e=0);var l=2,u=a.length,h=new Array(u);for(h[0]=(t+=a[0])*n+s,h[1]=(e+=a[1])*r+o;l<u;)h[l]=a[l],++l;return h}}function vh(i,t){for(var e,n=i.length,r=n-t;r<--n;)e=i[r],i[r++]=i[n],i[n]=e}function Hc(i,t){return typeof t=="string"&&(t=i.objects[t]),t.type==="GeometryCollection"?{type:"FeatureCollection",features:t.geometries.map(function(e){return yh(i,e)})}:yh(i,t)}function yh(i,t){var e=t.id,n=t.bbox,r=t.properties==null?{}:t.properties,s=Js(i,t);return e==null&&n==null?{type:"Feature",properties:r,geometry:s}:n==null?{type:"Feature",id:e,properties:r,geometry:s}:{type:"Feature",id:e,bbox:n,properties:r,geometry:s}}function Js(i,t){var e=Zs(i.transform),n=i.arcs;function r(u,h){h.length&&h.pop();for(var f=n[u<0?~u:u],d=0,g=f.length;d<g;++d)h.push(e(f[d],d));u<0&&vh(h,g)}function s(u){return e(u)}function o(u){for(var h=[],f=0,d=u.length;f<d;++f)r(u[f],h);return h.length<2&&h.push(h[0]),h}function a(u){for(var h=o(u);h.length<4;)h.push(h[0]);return h}function c(u){return u.map(a)}function l(u){var h=u.type,f;switch(h){case"GeometryCollection":return{type:h,geometries:u.geometries.map(l)};case"Point":f=s(u.coordinates);break;case"MultiPoint":f=u.coordinates.map(s);break;case"LineString":f=o(u.arcs);break;case"MultiLineString":f=u.arcs.map(o);break;case"Polygon":f=c(u.arcs);break;case"MultiPolygon":f=u.arcs.map(c);break;default:return null}return{type:h,coordinates:f}}return l(t)}function Gc(i,t){var e={},n={},r={},s=[],o=-1;t.forEach(function(l,u){var h=i.arcs[l<0?~l:l],f;h.length<3&&!h[1][0]&&!h[1][1]&&(f=t[++o],t[o]=l,t[u]=f)}),t.forEach(function(l){var u=a(l),h=u[0],f=u[1],d,g;if(d=r[h])if(delete r[d.end],d.push(l),d.end=f,g=n[f]){delete n[g.start];var _=g===d?d:d.concat(g);n[_.start=d.start]=r[_.end=g.end]=_}else n[d.start]=r[d.end]=d;else if(d=n[f])if(delete n[d.start],d.unshift(l),d.start=h,g=r[h]){delete r[g.end];var m=g===d?d:g.concat(d);n[m.start=g.start]=r[m.end=d.end]=m}else n[d.start]=r[d.end]=d;else d=[l],n[d.start=h]=r[d.end=f]=d});function a(l){var u=i.arcs[l<0?~l:l],h=u[0],f;return i.transform?(f=[0,0],u.forEach(function(d){f[0]+=d[0],f[1]+=d[1]})):f=u[u.length-1],l<0?[f,h]:[h,f]}function c(l,u){for(var h in l){var f=l[h];delete u[f.start],delete f.start,delete f.end,f.forEach(function(d){e[d<0?~d:d]=1}),s.push(f)}}return c(r,n),c(n,r),t.forEach(function(l){e[l<0?~l:l]||s.push([l])}),s}function Wc(i){return Js(i,Mh.apply(this,arguments))}function Mh(i,t,e){var n,r,s;if(arguments.length>1)n=F_(i,t,e);else for(r=0,n=new Array(s=i.arcs.length);r<s;++r)n[r]=r;return{type:"MultiLineString",arcs:Gc(i,n)}}function F_(i,t,e){var n=[],r=[],s;function o(h){var f=h<0?~h:h;(r[f]||(r[f]=[])).push({i:h,g:s})}function a(h){h.forEach(o)}function c(h){h.forEach(a)}function l(h){h.forEach(c)}function u(h){switch(s=h,h.type){case"GeometryCollection":h.geometries.forEach(u);break;case"LineString":a(h.arcs);break;case"MultiLineString":case"Polygon":c(h.arcs);break;case"MultiPolygon":l(h.arcs);break}}return u(t),r.forEach(e==null?function(h){n.push(h[0].i)}:function(h){e(h[0].g,h[h.length-1].g)&&n.push(h[0].i)}),n}var Ks=Math.PI/180,Tn=(i,t,e)=>Math.max(t,Math.min(e,i)),Sh=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,ui=(i,t,e)=>i+(t-i)*e;function bh(i,t,e){let n=i*Ks,r=t*Ks;return new F(Math.cos(r)*Math.sin(n)*e,Math.sin(r)*e,Math.cos(r)*Math.cos(n)*e)}function z_(i,t){let e=t?2048:4096,n=e/2,r=document.createElement("canvas");r.width=e,r.height=n;let s=r.getContext("2d"),o=xh().scale(e/(2*Math.PI)).translate([e/2,n/2]),a=mh(o,s),c=s.createLinearGradient(0,0,0,n);c.addColorStop(0,"#0c2235"),c.addColorStop(.5,"#12344f"),c.addColorStop(1,"#0c2235"),s.fillStyle=c,s.fillRect(0,0,e,n),s.beginPath(),a(ih()),s.strokeStyle="rgba(120,175,210,.16)",s.lineWidth=e/2048,s.stroke();let l=Hc(i,i.objects.countries);s.beginPath(),a(l),s.fillStyle="#cbb48a",s.fill(),s.beginPath(),a(Wc(i,i.objects.countries,(h,f)=>h!==f)),s.strokeStyle="rgba(120,96,60,.75)",s.lineWidth=e/2048,s.stroke(),s.beginPath(),a(l),s.strokeStyle="rgba(240,225,190,.35)",s.lineWidth=e/1400,s.stroke();let u=new xs(r);return u.colorSpace=Ce,u}function k_(i){let t;try{t=new gs({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return null}if(!t.getContext())return null;let e=i.layer,n=i.anchor,r=!!i.reduce,s=Math.min(innerWidth,innerHeight)<700;t.setPixelRatio(Math.min(devicePixelRatio||1,2)),t.setClearColor(0,0),t.autoClear=!1;let o=t.domElement;o.className="g3d-canvas",e.appendChild(o);let a=document.createElement("div");a.className="g3d-labels",e.appendChild(a);let c=new _s,l=new Ae(30,1,.1,100);l.position.set(0,0,4.5),c.add(new As(16777215,1.05));let u=new ws(16774368,1.7);u.position.set(-3,2.2,4),c.add(u);let h=new Ke,f=new Ke;h.add(f),c.add(h);let d=new de(new Hn(1,s?72:112,s?48:80),new Ss({map:z_(i.world,s),shininess:14,specular:new Xt(1913670)}));d.rotation.y=-Math.PI/2,f.add(d);let g=new de(new Hn(1.13,64,48),new Ve({vertexShader:"varying vec3 vN; void main(){ vN = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"varying vec3 vN; void main(){ float i = pow(clamp(0.62 - dot(vN, vec3(0.0,0.0,1.0)), 0.0, 1.0), 3.0); gl_FragColor = vec4(0.36,0.66,0.88,1.0) * i * 1.05; }",blending:Ii,side:be,transparent:!0,depthWrite:!1}));c.add(g);let _=new Ke;f.add(_);let m=i.points,p=i.colors,E={};i.routes.forEach(K=>{let ot=new Ke;ot.visible=!1,_.add(ot);let wt=K.legs.filter(xt=>xt[1]!==xt[2]).map(xt=>{let At=m[xt[1]],Nt=m[xt[2]],D=Bc(At,Nt),Ht=nh(At,Nt),Ut=xt[0]==="flight"?.015+Ht*.11:.004+Ht*.02,dt=Math.max(12,Math.round(Ht*90)),Wt=[];for(let $=0;$<=dt;$++){let Q=$/dt,Y=D(Q);Wt.push(bh(Y[0],Y[1],1.002+Ut*Math.sin(Math.PI*Q)))}let pt=new lr(Wt),w=dt*2,x=new de(new ur(pt,w,.0058,6),new je({color:p[xt[0]]})),z=new de(new ur(pt,w,.016,6),new je({color:p[xt[0]],transparent:!0,opacity:.28,blending:Ii,depthWrite:!1}));return ot.add(x,z),{l:xt,curve:pt,core:x,glow:z,len:Ht+Ut,prog:1}});E[K.id]={g:ot,legs:wt,t0:0}});let y=new de(new Hn(.017,16,12),new je({color:16777215})),v=new de(new Hn(.04,16,12),new je({color:15754300,transparent:!0,opacity:.45,blending:Ii,depthWrite:!1}));y.add(v),y.visible=!1,f.add(y);let P=i.pins.map(K=>{let ot=bh(K.c[0],K.c[1],1.003),wt=K.home?15985887:15902017,xt=new de(new Hn(K.home?.016:.013,14,10),new je({color:wt}));xt.position.copy(ot);let At=new de(new Ms(.02,.026,32),new je({color:wt,transparent:!0,side:Ze,depthWrite:!1}));At.position.copy(ot),At.lookAt(ot.clone().multiplyScalar(2)),f.add(xt,At);let Nt=document.createElement(K.home?"span":"button");return Nt.className="g3d-label"+(K.home?" home":""),Nt.textContent=i.T(K.name),K.home||(Nt.type="button",Nt.onclick=()=>i.onPick(K.id),Nt.setAttribute("aria-label",i.T("Mostra la rotta per")+" "+i.T(K.name))),a.appendChild(Nt),{p:K,pos:ot,dot:xt,ring:At,el:Nt}}),A=20,R=25,C=null,b=0,M=i.getSel(),T=0;function W(){h.rotation.x=R*Ks,f.rotation.y=-A*Ks}function B(K){let ot=m.tor,wt=m[K.legs[K.legs.length-1][2]],xt=Bc(ot,wt)(.5),At=[xt[0],Tn(xt[1],-55,55)];At[0]-A>180&&(At[0]-=360),A-At[0]>180&&(At[0]+=360),C={t:performance.now(),from:[A,R],to:At},b=performance.now()+4e3}function H(K){M=K,Object.keys(E).forEach(wt=>E[wt].g.visible=wt===K),E[K]&&(T=performance.now()+(r?-1e6:500))}let I=null,O=!0;e.addEventListener("pointerdown",K=>{if(!O||K.target.closest(".g3d-label"))return;let ot=nt;K.clientX<ot.x||K.clientX>ot.x+ot.w||K.clientY<ot.y||K.clientY>ot.y+ot.h||(I={x:K.clientX,y:K.clientY,id:K.pointerId},C=null,b=performance.now(),e.setPointerCapture(K.pointerId),e.classList.add("grabbing"))}),e.addEventListener("pointermove",K=>{if(!I||K.pointerId!==I.id)return;let ot=57.3/(nt.w*.44);A-=(K.clientX-I.x)*ot,R=Tn(R+(K.clientY-I.y)*ot,-70,70),I.x=K.clientX,I.y=K.clientY,b=performance.now()});let J=()=>{I=null,e.classList.remove("grabbing")};e.addEventListener("pointerup",J),e.addEventListener("pointercancel",J),addEventListener("keydown",K=>{if(!O||document.activeElement!==i.keyTarget)return;let ot={ArrowLeft:[-8,0],ArrowRight:[8,0],ArrowUp:[0,8],ArrowDown:[0,-8]}[K.key];ot&&(K.preventDefault(),C=null,b=performance.now(),A+=ot[0],R=Tn(R+ot[1],-70,70))});let k=0,tt=0,nt={x:0,y:0,w:1,h:1};function ft(){k=innerWidth,tt=innerHeight,t.setSize(k,tt,!1),o.style.width=k+"px",o.style.height=tt+"px"}ft(),addEventListener("resize",ft);let Pt=i.hero;function Vt(){let K=n.getBoundingClientRect(),ot=Pt.offsetHeight,wt=Tn(scrollY/Math.max(1,ot*.62),0,1),xt=r?wt>.5?1:0:Sh(wt),At=k<900,Nt=At?Math.min(k*1.35,tt*.9):Math.min(k*.78,tt*1.12),D=(k-Nt)/2,Ht=At?tt*.5-Nt/2:tt*.52-Nt/2;nt={x:ui(K.left,D,xt),y:ui(K.top,Ht,xt),w:ui(K.width,Nt,xt),h:ui(K.height,Nt,xt)},o.style.opacity=String(ui(1,.34,xt));let Tt=Tn(1-xt/.22,0,1);return a.style.opacity=String(Tt),a.style.visibility=Tt>0?"visible":"hidden",O=xt<.05,e.classList.toggle("bg",!O),xt}let q=new F(0,0,1),j=new F,vt=performance.now();function st(K){if(requestAnimationFrame(st),document.hidden){vt=K;return}let ot=Math.min(64,K-vt);vt=K;let wt=Vt();if(C){let Ht=Tn((K-C.t)/1100,0,1),Tt=Sh(Ht);A=ui(C.from[0],C.to[0],Tt),R=ui(C.from[1],C.to[1],Tt),Ht>=1&&(C=null)}else!r&&!I&&(K-b>3500||wt>.05)&&(A-=ot*(wt>.05?.0045:.0055));W();let xt=E[M];if(xt){let Ht=Math.max(320,1400/xt.legs.length),Tt=K-T;xt.legs.forEach((dt,Wt)=>{let pt=Tn((Tt-Wt*Ht)/Ht,0,1),w=Math.floor(dt.core.geometry.index.count*pt/6)*6,x=Math.floor(dt.glow.geometry.index.count*pt/6)*6;dt.core.geometry.setDrawRange(0,w),dt.glow.geometry.setDrawRange(0,x),dt.core.visible=dt.glow.visible=pt>0});let Ut=Tt>xt.legs.length*Ht;if(y.visible=Ut&&!r,y.visible){let dt=xt.legs.reduce((w,x)=>w+x.len,0),Wt=Tn(dt*2600,4200,9e3),pt=(Tt-xt.legs.length*Ht)%(Wt+700);if(pt>Wt)y.visible=!1;else{let w=pt/Wt*dt,x=0;for(;x<xt.legs.length-1&&w>xt.legs[x].len;)w-=xt.legs[x].len,x++;y.position.copy(xt.legs[x].curve.getPointAt(Tn(w/xt.legs[x].len,0,1))),v.material.color.set(p[xt.legs[x].l[0]])}}}let At=K/1e3*1.1%1;t.setScissorTest(!1),t.clear();let Nt=nt.x,D=tt-nt.y-nt.h;t.setViewport(Nt,D,nt.w,nt.h),t.setScissor(Nt,D,nt.w,nt.h),t.setScissorTest(!0),c.updateMatrixWorld(),P.forEach(Ht=>{let Tt=Ht.p.home||Ht.p.id===M,Ut=Tt&&!r?1+At*1.8:1;Ht.ring.scale.set(Ut,Ut,Ut),Ht.ring.material.opacity=Tt?r?.8:1-At:0,Ht.dot.getWorldPosition(j);let dt=j.clone().normalize().dot(q),Wt=j.clone().project(l),pt=nt.x+(Wt.x+1)/2*nt.w,w=nt.y+(1-Wt.y)/2*nt.h,x=dt>.18&&(Tt||Ht.p.home||!0);Ht.el.style.display=x?"":"none",x&&(Ht.el.classList.toggle("on",Tt),Ht.el.classList.toggle("dot",!Tt),Ht.el.style.transform=Tt?`translate(${pt+9}px, ${w-10}px)`:`translate(${pt-11}px, ${w-11}px)`)}),t.render(c,l)}return W(),requestAnimationFrame(st),{spinTo:B,select:H}}window.RotteGlobe3D={init:k_};})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
