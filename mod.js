// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function e(r){return"number"==typeof r}function t(r){var n,e="";for(n=0;n<r;n++)e+="0";return e}function i(r,n,e){var i=!1,a=n-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function o(r){var n,t,o;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,o=parseInt(t,10),!isFinite(o)){if(!e(t))throw new Error("invalid integer. Value: "+t);o=0}return o<0&&("u"===r.specifier||10!==n)&&(o=4294967295+o+1),o<0?(t=(-o).toString(n),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=o.toString(n),o||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===u.call(r.specifier)?u.call(t):a.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var c=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,v=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,w=/\.0$/,h=/\.0*e/,b=/(\..*[^0])0*e/;function N(r){var n,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((n=r.precision)>0&&(n-=1),t=i.toExponential(n)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,h,"e"),t=p.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,v,"e+0$1"),t=p.call(t,y,"e-0$1"),r.alternate&&(t=p.call(t,g,"$1."),t=p.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function m(r){var n,e="";for(n=0;n<r;n++)e+=" ";return e}function A(r,n,e){var t=n-r.length;return t<0?r:r=e?r+m(t):m(t)+r}var _=String.fromCharCode,E=isNaN,U=Array.isArray;function k(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function I(r){var n,e,t,a,u,c,s,l,p;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,l=0;l<r.length;l++)if(f(t=r[l]))c+=t;else{if(n=void 0!==t.precision,!(t=k(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),e=t.flags,p=0;p<e.length;p++)switch(a=e.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=e.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,E(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(n&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,n=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(t.padZeros=!1),t.arg=o(t);break;case"s":t.maxWidth=n?t.precision:-1;break;case"c":if(!E(t.arg)){if((u=parseInt(t.arg,10))<0||u>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(u)?String(t.arg):_(u)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(t.precision=6),t.arg=N(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=A(t.arg,t.width,t.padRight)),c+=t.arg||"",s+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function F(r){var n,e,t,i;for(e=[],i=0,t=S.exec(r);t;)(n=r.slice(i,S.lastIndex-t[0].length)).length&&e.push(n),e.push(x(t)),i=S.lastIndex,t=S.exec(r);return(n=r.slice(i)).length&&e.push(n),e}function j(r){return"string"==typeof r}function T(r){var n,e,t;if(!j(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=F(r),(e=new Array(arguments.length))[0]=n,t=1;t<e.length;t++)e[t]=arguments[t];return I.apply(null,e)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__;var C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,e){var t,i,a,u;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(H.call(r,n)||W.call(r,n)?(t=r.__proto__,r.__proto__=O,delete r[n],r[n]=e.value,r.__proto__=t):r[n]=e.value),a="get"in e,u="set"in e,i&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,n,e.get),u&&G&&G.call(r,n,e.set),r};function L(r,n,e){C(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}var P=Math.floor;function M(r){return P(r)===r&&r>=0}function R(r){return r!=r}var Z=Number.POSITIVE_INFINITY,X=Number.NEGATIVE_INFINITY;function Y(r){return r===Z||r===X}function q(r){return Math.abs(r)}var z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var B=Object.prototype.toString;var D=Object.prototype.hasOwnProperty;var J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"";var Q=z&&"symbol"==typeof Symbol.toStringTag?function(r){var n,e,t,i,a;if(null==r)return B.call(r);e=r[K],a=K,n=null!=(i=r)&&D.call(i,a);try{r[K]=void 0}catch(n){return B.call(r)}return t=B.call(r),n?r[K]=e:delete r[K],t}:function(r){return B.call(r)},rr="function"==typeof Uint32Array;var nr="function"==typeof Uint32Array?Uint32Array:null;var er,tr="function"==typeof Uint32Array?Uint32Array:void 0;er=function(){var r,n,e;if("function"!=typeof nr)return!1;try{n=new nr(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(rr&&e instanceof Uint32Array||"[object Uint32Array]"===Q(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var ir=er,ar="function"==typeof Float64Array;var ur="function"==typeof Float64Array?Float64Array:null;var or,fr="function"==typeof Float64Array?Float64Array:void 0;or=function(){var r,n,e;if("function"!=typeof ur)return!1;try{n=new ur([1,3.14,-3.14,NaN]),e=n,r=(ar&&e instanceof Float64Array||"[object Float64Array]"===Q(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var cr=or,sr="function"==typeof Uint8Array;var lr="function"==typeof Uint8Array?Uint8Array:null;var pr,vr="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,n,e;if("function"!=typeof lr)return!1;try{n=new lr(n=[1,3.14,-3.14,256,257]),e=n,r=(sr&&e instanceof Uint8Array||"[object Uint8Array]"===Q(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var yr=pr,gr="function"==typeof Uint16Array;var dr="function"==typeof Uint16Array?Uint16Array:null;var wr,hr="function"==typeof Uint16Array?Uint16Array:void 0;wr=function(){var r,n,e;if("function"!=typeof dr)return!1;try{n=new dr(n=[1,3.14,-3.14,65536,65537]),e=n,r=(gr&&e instanceof Uint16Array||"[object Uint16Array]"===Q(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var br,Nr={uint16:wr,uint8:yr};(br=new Nr.uint16(1))[0]=4660;var mr=52===new Nr.uint8(br.buffer)[0],Ar=!0===mr?1:0,_r=new cr(1),Er=new ir(_r.buffer);function Ur(r){return _r[0]=r,Er[Ar]}var kr=!0===mr?1:0,Ir=new cr(1),Sr=new ir(Ir.buffer);function xr(r,n){return Ir[0]=r,Sr[kr]=n>>>0,Ir[0]}var Fr=.6931471803691238,jr=1.9082149292705877e-10;function Tr(r){var n,e,t,i,a,u,o,f,c,s,l,p;return 0===r?X:R(r)||r<0?NaN:(a=0,(e=Ur(r))<1048576&&(a-=54,e=Ur(r*=0x40000000000000)),e>=2146435072?r+r:(a+=(e>>20)-1023|0,a+=(f=(e&=1048575)+614244&1048576|0)>>20|0,o=(r=xr(r,e|1072693248^f))-1,(1048575&2+e)<3?0===o?0===a?0:a*Fr+a*jr:(u=o*o*(.5-.3333333333333333*o),0===a?o-u:a*Fr-(u-a*jr-o)):(f=e-398458|0,c=440401-e|0,i=(l=(p=(s=o/(2+o))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),u=t+i,(f|=c)>0?(n=.5*o*o,0===a?o-(n-s*(n+u)):a*Fr-(n-(s*(n+u)+a*jr)-o)):0===a?o-s*(o-u):a*Fr-(s*(o-u)-a*jr-o))))}var Or=Math.ceil;function Vr(r){return r<0?Or(r):P(r)}function $r(r,n){var e,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(e=.5*a))+(1-i-e+(a*t-r*n))}var Gr=-.16666666666666632;function Hr(r,n){var e,t,i;return e=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*r,0===n?r+t*(Gr+i*e):r-(i*(.5*n-t*e)-n-t*Gr)}var Wr,Cr,Lr=!0===mr?0:1,Pr=new cr(1),Mr=new ir(Pr.buffer);!0===mr?(Wr=1,Cr=0):(Wr=0,Cr=1);var Rr={HIGH:Wr,LOW:Cr},Zr=new cr(1),Xr=new ir(Zr.buffer),Yr=Rr.HIGH,qr=Rr.LOW;function zr(r,n){return Xr[Yr]=r,Xr[qr]=n,Zr[0]}var Br,Dr;!0===mr?(Br=1,Dr=0):(Br=0,Dr=1);var Jr={HIGH:Br,LOW:Dr},Kr=new cr(1),Qr=new ir(Kr.buffer),rn=Jr.HIGH,nn=Jr.LOW;function en(r,n,e,t){return Kr[0]=r,n[t]=Qr[rn],n[t+e]=Qr[nn],n}function tn(r){return en(r,[0,0],1,0)}L(tn,"assign",en);var an=[0,0];function un(r,n){var e,t;return tn.assign(r,an,1,0),e=an[0],e&=2147483647,t=Ur(n),zr(e|=t&=2147483648,an[1])}function on(r,n,e,t){return R(r)||Y(r)?(n[t]=r,n[t+e]=0,n):0!==r&&q(r)<22250738585072014e-324?(n[t]=4503599627370496*r,n[t+e]=-52,n):(n[t]=r,n[t+e]=0,n)}L((function(r){return on(r,[0,0],1,0)}),"assign",on);var fn=[0,0],cn=[0,0];function sn(r,n){var e,t;return 0===n||0===r||R(r)||Y(r)?r:(on(r,fn,1,0),n+=fn[1],n+=function(r){var n=Ur(r);return(n=(2146435072&n)>>>20)-1023|0}(r=fn[0]),n<-1074?un(0,r):n>1023?r<0?X:Z:(n<=-1023?(n+=52,t=2220446049250313e-31):t=1,tn.assign(r,cn,1,0),e=cn[0],e&=2148532223,t*zr(e|=n+1023<<20,cn[1])))}function ln(r){return function(r,n){var e,t;for(e=[],t=0;t<n;t++)e.push(r);return e}(0,r)}var pn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],vn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],yn=5.960464477539063e-8,gn=ln(20),dn=ln(20),wn=ln(20),hn=ln(20);function bn(r,n,e,t,i,a,u,o,f){var c,s,l,p,v,y,g,d,w;for(p=a,w=t[e],d=e,v=0;d>0;v++)s=yn*w|0,hn[v]=w-16777216*s|0,w=t[d-1]+s,d-=1;if(w=sn(w,i),w-=8*P(.125*w),w-=g=0|w,l=0,i>0?(g+=v=hn[e-1]>>24-i,hn[e-1]-=v<<24-i,l=hn[e-1]>>23-i):0===i?l=hn[e-1]>>23:w>=.5&&(l=2),l>0){for(g+=1,c=0,v=0;v<e;v++)d=hn[v],0===c?0!==d&&(c=1,hn[v]=16777216-d):hn[v]=16777215-d;if(i>0)switch(i){case 1:hn[e-1]&=8388607;break;case 2:hn[e-1]&=4194303}2===l&&(w=1-w,0!==c&&(w-=sn(1,i)))}if(0===w){for(d=0,v=e-1;v>=a;v--)d|=hn[v];if(0===d){for(y=1;0===hn[a-y];y++);for(v=e+1;v<=e+y;v++){for(f[o+v]=pn[u+v],s=0,d=0;d<=o;d++)s+=r[d]*f[o+(v-d)];t[v]=s}return bn(r,n,e+=y,t,i,a,u,o,f)}}if(0===w)for(e-=1,i-=24;0===hn[e];)e-=1,i-=24;else(w=sn(w,-i))>=16777216?(s=yn*w|0,hn[e]=w-16777216*s|0,i+=24,hn[e+=1]=s):hn[e]=0|w;for(s=sn(1,i),v=e;v>=0;v--)t[v]=s*hn[v],s*=yn;for(v=e;v>=0;v--){for(s=0,y=0;y<=p&&y<=e-v;y++)s+=vn[y]*t[v+y];wn[e-v]=s}for(s=0,v=e;v>=0;v--)s+=wn[v];for(n[0]=0===l?s:-s,s=wn[0]-s,v=1;v<=e;v++)s+=wn[v];return n[1]=0===l?s:-s,7&g}function Nn(r,n,e,t){var i,a,u,o,f,c,s;for(4,(a=(e-3)/24|0)<0&&(a=0),o=e-24*(a+1),c=a-(u=t-1),s=u+4,f=0;f<=s;f++)gn[f]=c<0?0:pn[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=u;c++)i+=r[c]*gn[u+(f-c)];dn[f]=i}return 4,bn(r,n,4,dn,o,4,a,u,gn)}var mn=Math.round;function An(r,n,e){var t,i,a,u,o;return a=r-1.5707963267341256*(t=mn(.6366197723675814*r)),u=6077100506506192e-26*t,o=n>>20|0,e[0]=a-u,o-(Ur(e[0])>>20&2047)>16&&(u=20222662487959506e-37*t-((i=a)-(a=i-(u=6077100506303966e-26*t))-u),e[0]=a-u,o-(Ur(e[0])>>20&2047)>49&&(u=84784276603689e-45*t-((i=a)-(a=i-(u=20222662487111665e-37*t))-u),e[0]=a-u)),e[1]=a-e[0]-u,t}var _n=1.5707963267341256,En=6077100506506192e-26,Un=2*En,kn=4*En,In=[0,0,0],Sn=[0,0];function xn(r,n){var e,t,i,a,u,o,f;if((i=2147483647&Ur(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?An(r,i,n):i<=1073928572?r>0?(f=r-_n,n[0]=f-En,n[1]=f-n[0]-En,1):(f=r+_n,n[0]=f+En,n[1]=f-n[0]+En,-1):r>0?(f=r-2*_n,n[0]=f-Un,n[1]=f-n[0]-Un,2):(f=r+2*_n,n[0]=f+Un,n[1]=f-n[0]+Un,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?An(r,i,n):r>0?(f=r-3*_n,n[0]=f-1.8231301519518578e-10,n[1]=f-n[0]-1.8231301519518578e-10,3):(f=r+3*_n,n[0]=f+1.8231301519518578e-10,n[1]=f-n[0]+1.8231301519518578e-10,-3):1075388923===i?An(r,i,n):r>0?(f=r-4*_n,n[0]=f-kn,n[1]=f-n[0]-kn,4):(f=r+4*_n,n[0]=f+kn,n[1]=f-n[0]+kn,-4);if(i<1094263291)return An(r,i,n);if(i>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(e=function(r){return Pr[0]=r,Mr[Lr]}(r),f=zr(i-((t=(i>>20)-1046)<<20|0),e),u=0;u<2;u++)In[u]=0|f,f=16777216*(f-In[u]);for(In[2]=f,a=3;0===In[a-1];)a-=1;return o=Nn(In,Sn,t,a),r<0?(n[0]=-Sn[0],n[1]=-Sn[1],-o):(n[0]=Sn[0],n[1]=Sn[1],o)}var Fn=[0,0];function jn(r){var n;if(n=Ur(r),(n&=2147483647)<=1072243195)return n<1044381696?1:$r(r,0);if(n>=2146435072)return NaN;switch(3&xn(r,Fn)){case 0:return $r(Fn[0],Fn[1]);case 1:return-Hr(Fn[0],Fn[1]);case 2:return-$r(Fn[0],Fn[1]);default:return Hr(Fn[0],Fn[1])}}var Tn=[0,0];function On(r){var n;if(n=Ur(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Hr(r,0);if(n>=2146435072)return NaN;switch(3&xn(r,Tn)){case 0:return Hr(Tn[0],Tn[1]);case 1:return $r(Tn[0],Tn[1]);case 2:return-Hr(Tn[0],Tn[1]);default:return-$r(Tn[0],Tn[1])}}var Vn=3.141592653589793;var $n=1.4616321449683622,Gn=1.4616321449683622;function Hn(r){var n,e,t,i,a,u,o,f,c,s,l,p,v;if(R(r)||Y(r))return r;if(0===r)return Z;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-Tr(r);if(n){if(r>=4503599627370496)return Z;if(c=function(r){var n,e;return R(r)||Y(r)?NaN:0===(n=q(e=r%2))||1===n?un(0,e):n<.25?On(Vn*e):n<.75?un(jn(Vn*(n=.5-n)),e):n<1.25?(e=un(1,e)-e,On(Vn*e)):n<1.75?-un(jn(Vn*(n-=1.5)),e):(e-=un(2,e),On(Vn*e))}(r),0===c)return Z;e=Tr(Vn/q(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(v=-Tr(r),r>=$n-1+.27?(l=1-r,t=0):r>=$n-1-.27?(l=r-(Gn-1),t=1):(l=r,t=2)):(v=0,r>=$n+.27?(l=2-r,t=0):r>=$n-.27?(l=r-Gn,t=1):(l=r-1,t=2)),t){case 0:u=.07721566490153287+(p=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),a=p*(.3224670334241136+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),v+=(o=l*u+a)-.5*l;break;case 1:u=.48383612272381005+(s=(p=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(s),a=s*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(s)-.1475877229945939,i=.06462494023913339+s*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(s),v+=-.12148629053584961+(o=p*u-(-3638676997039505e-33-s*(a+l*i)));break;case 2:u=l*(l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)-.07721566490153287),a=1+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),v+=-.5*l+u/a}else if(r<8)switch(o=(l=r-(t=Vr(r)))*(l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)-.07721566490153287),f=1+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),v=.5*l+o/f,p=1,t){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:v+=Tr(p*=l+2)}else r<0x400000000000000?(c=Tr(r),s=.4189385332046727+(p=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=p*p),v=(r-.5)*(c-1)+s):v=r*(Tr(r)-1);return n&&(v=e-v),v}function Wn(r){var n;return R(r)||r===Z?r:r===X?0:r>709.782712893384?Z:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,e){var t,i,a,u;return sn(1-(n-(t=r-n)*(a=t-(i=t*t)*(0===(u=i)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),e)}(r-.6931471803691238*(n=Vr(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function Cn(r){return P(r)===r}function Ln(r){return Cn(r/2)}function Pn(r){return Ln(r>0?r-1:r+1)}var Mn=Math.sqrt,Rn=!0===mr?0:1,Zn=new cr(1),Xn=new ir(Zn.buffer);function Yn(r,n){return Zn[0]=r,Xn[Rn]=n>>>0,Zn[0]}function qn(r){return 0|r}var zn=[1,1.5],Bn=[0,.5849624872207642],Dn=[0,1.350039202129749e-8];var Jn=1e300,Kn=[0,0],Qn=[0,0];function re(r,n){var e,t,i,a,u,o,f,c,s,l,p,v,y,g;if(R(r)||R(n))return NaN;if(tn.assign(n,Kn,1,0),u=Kn[0],0===Kn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return Mn(r);if(-.5===n)return 1/Mn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(Y(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:q(r)<1==(n===Z)?0:Z}(r,n)}if(tn.assign(r,Kn,1,0),a=Kn[0],0===Kn[1]){if(0===a)return function(r,n){return n===X?Z:n===Z?0:n>0?Pn(n)?r:0:Pn(n)?un(Z,r):Z}(r,n);if(1===r)return 1;if(-1===r&&Pn(n))return-1;if(Y(r))return r===X?re(-0,-n):n<0?0:Z}if(r<0&&!1===Cn(n))return(r-r)/(r-r);if(i=q(r),e=2147483647&a|0,t=2147483647&u|0,f=u>>>31|0,o=(o=a>>>31|0)&&Pn(n)?-1:1,t>1105199104){if(t>1139802112)return function(r,n){return(2147483647&Ur(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(e<1072693247)return 1===f?o*Jn*Jn:1e-300*o*1e-300;if(e>1072693248)return 0===f?o*Jn*Jn:1e-300*o*1e-300;p=function(r,n){var e,t,i,a,u,o;return e=(u=1.9259629911266175e-8*(i=n-1)-i*i*(0===(o=i)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((t=Yn(t=(a=1.4426950216293335*i)+u,0))-a),r[0]=t,r[1]=e,r}(Qn,i)}else p=function(r,n,e){var t,i,a,u,o,f,c,s,l,p,v,y,g,d,w,h,b,N,m,A,_;return N=0,e<1048576&&(N-=53,e=Ur(n*=9007199254740992)),N+=(e>>20)-1023|0,e=1072693248|(m=1048575&e|0),m<=235662?A=0:m<767610?A=1:(A=0,N+=1,e-=1048576),u=Yn(i=(h=(n=xr(n,e))-(c=zn[A]))*(b=1/(n+c)),0),t=524288+(e>>1|536870912),f=xr(0,t+=A<<18),w=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=Yn(f=3+(a=u*u)+(w+=(o=b*(h-u*f-u*(n-(f-c))))*(u+i)),0),g=(v=-7.028461650952758e-9*(l=Yn(l=(h=u*f)+(b=o*f+(w-(f-3-a))*i),0))+.9617966939259756*(b-(l-h))+Dn[A])-((y=Yn(y=(p=.9617967009544373*l)+v+(s=Bn[A])+(d=N),0))-d-s-p),r[0]=y,r[1]=g,r}(Qn,i,e);if(v=(l=(n-(c=Yn(n,0)))*p[0]+n*p[1])+(s=c*p[0]),tn.assign(v,Kn,1,0),y=qn(Kn[0]),g=qn(Kn[1]),y>=1083179008){if(0!=(y-1083179008|g))return o*Jn*Jn;if(l+8008566259537294e-32>v-s)return o*Jn*Jn}else if((2147483647&y)>=1083231232){if(0!=(y-3230714880|g))return 1e-300*o*1e-300;if(l<=v-s)return 1e-300*o*1e-300}return v=function(r,n,e){var t,i,a,u,o,f,c,s,l,p,v;return p=((l=2147483647&r|0)>>20)-1023|0,s=0,l>1071644672&&(t=((s=r+(1048576>>p+1)>>>0)&~(1048575>>(p=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-p>>>0,r<0&&(s=-s),n-=a=xr(0,t)),r=qn(r=Ur(c=1-((c=(u=.6931471824645996*(a=Yn(a=e+n,0)))+(o=.6931471805599453*(e-(a-n))+-1.904654299957768e-9*a))*(i=c-(a=c*c)*(0===(v=a)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=o-(c-u))+c*f)-c))),(r+=s<<20>>>0)>>20<=0?sn(c,s):xr(c,r)}(y,s,l),o*v}function ne(r){var n,e,t;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),e=Wn(r),2.5066282746310007*(e=r>143.01608?(t=re(r,.5*r-.25))*(t/e):re(r,r-.5)/e)*n}function ee(r,n){return n/((1+.5772156649015329*r)*r)}function te(r){var n,e,t,i;if(Cn(r)&&r<0||r===X||R(r))return NaN;if(0===r)return function(r){return 0===r&&1/r===X}(r)?X:Z;if(r>171.61447887182297)return Z;if(r<-170.5674972726612)return 0;if((e=q(r))>33)return r>=0?ne(r):(n=0==(1&(t=P(e)))?-1:1,(i=e-t)>.5&&(i=e-(t+=1)),i=e*On(Vn*i),n*Vn/(q(i)*ne(e)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return ee(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return ee(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var n,e;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),e=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),e=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/e)}(r-=2)}var ie=!0===mr?1:0,ae=new cr(1),ue=new ir(ae.buffer);function oe(r){return ae[0]=r,ue[ie]}var fe=!0===mr?1:0,ce=new cr(1),se=new ir(ce.buffer);function le(r,n){return ce[0]=r,se[fe]=n>>>0,ce[0]}var pe=.6931471803691238,ve=1.9082149292705877e-10;function ye(r,n){return R(r)||R(n)?NaN:r===Z||n===Z?Z:r===n&&0===r?function(r){return 0===r&&1/r===Z}(r)?r:n:r>n?r:n}function ge(r,n){return R(r)||R(n)?NaN:r===X||n===X?X:r===n&&0===r?function(r){return 0===r&&1/r===X}(r)?r:n:r<n?r:n}function de(r,n){var e,t,i,a,u,o,f,c,s,l;return f=(n-r-10.900511+.5)/(i=r+10.900511-.5),r<1?n<=-708.3964185322641?Wn(r*Tr(n)-n-Hn(r)):re(n,r)*Wn(-n)/te(r):(q(f*f*r)<=100&&r>150?(e=r*(function(r){var n,e,t,i,a,u,o,f,c,s;if(r<-1||R(r))return NaN;if(-1===r)return X;if(r===Z)return r;if(0===r)return r;if(s=1,(t=r<0?-r:r)<.41421356237309503){if(t<1.862645149230957e-9)return t<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(s=0,i=r,e=1)}return 0!==s&&(t<9007199254740992?(a=(s=((e=oe(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),a/=c):(s=((e=oe(c=r))>>20)-1023,a=0),(e&=1048575)<434334?c=le(c,1072693248|e):(s+=1,c=le(c,1071644672|e),e=1048576-e>>2),i=c-1),n=.5*i*i,0===e?0===i?s*pe+(a+=s*ve):s*pe-((f=n*(1-.6666666666666666*i))-(s*ve+a)-i):(f=(o=(u=i/(2+i))*u)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(o),0===s?i-(n-u*(n+f)):s*pe-(n-(u*(n+f)+(s*ve+a))-i))}(f)-f)+-10.400511*n/i,e=Wn(e)):ge(a=r*Tr(n/i),u=r-n)<=-708.3964185322641||ye(a,u)>=709.782712893384?(t=u/r,ge(a,u)/2>-708.3964185322641&&ye(a,u)/2<709.782712893384?e=(o=re(n/i,r/2)*Wn(u/2))*o:ge(a,u)/4>-708.3964185322641&&ye(a,u)/4<709.782712893384&&n>r?(e=(o=re(n/i,r/4)*Wn(u/4))*o,e*=e):e=t>-708.3964185322641&&t<709.782712893384?re(n*Wn(t)/i,r):Wn(a+u)):e=re(n/i,r)*Wn(u),e*=Mn(i/2.718281828459045)/(0===(c=r)?1/0:((c<0?-c:c)<=1?(s=709811.662581658+c*(679979.8474157227+c*(293136.7857211597+c*(74887.54032914672+c*(12555.290582413863+c*(1443.4299244417066+c*(115.24194596137347+c*(6.309239205732627+c*(.22668404630224365+c*(.004826466289237662+4624429436045379e-20*c))))))))),l=0+c*(362880+c*(1026576+c*(1172700+c*(723680+c*(269325+c*(63273+c*(9450+c*(870+c*(45+1*c)))))))))):(s=4624429436045379e-20+(c=1/c)*(.004826466289237662+c*(.22668404630224365+c*(6.309239205732627+c*(115.24194596137347+c*(1443.4299244417066+c*(12555.290582413863+c*(74887.54032914672+c*(293136.7857211597+c*(679979.8474157227+709811.662581658*c))))))))),l=1+c*(45+c*(870+c*(9450+c*(63273+c*(269325+c*(723680+c*(1172700+c*(1026576+c*(362880+0*c)))))))))),s/l)))}function we(r,n){var e;return r<=0||n<0?NaN:0===n?r>1?0:1===r?1:Z:(e=de(r,n),n<1&&17976931348623157e292*n<e?Z:(0===e?e=Wn(e=r*Tr(n)-n-Hn(r)-Tr(n)):e/=n,e))}function he(r,n,e){return R(r)||R(n)||R(e)||n<0||e<=0?NaN:r<0||r===Z?0:0===n?0===r?Z:0:we(n,r*e)*e}function be(r){return function(){return r}}function Ne(r){return R(r)?be(NaN):function(n){if(R(n))return NaN;return n===r?Z:0}}function me(r,n){return R(r)||R(n)||r<0||n<=0?be(NaN):0===r?Ne(0):function(e){if(R(e))return NaN;if(e<0||e===Z)return 0;return we(r,e*n)*n}}function Ae(r,n,e){return M(n)?he(r,n,e):NaN}function _e(r,n){return M(r)?me(r,n):be(NaN)}L((function(r,n){return R(r)||R(n)?NaN:r===n?Z:0}),"factory",Ne),L(he,"factory",me),L(Ae,"factory",_e);export{Ae as default,_e as factory};
//# sourceMappingURL=mod.js.map
