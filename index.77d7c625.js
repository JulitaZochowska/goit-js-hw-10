function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},u=e.parcelRequired7c6;null==u&&((u=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var u={id:t,exports:{}};return n[t]=u,e.call(u.exports,u,u.exports),u.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){r[t]=e},e.parcelRequired7c6=u),u.register("cCfq4",(function(e,n){var r,u,o,c,i,f,s,a,l,p,y,d,b,h,v,m,x,_,S,w,g,j,E,$,O,R,k,C,P,I,q,N,T,D,U;t(e.exports,"Children",(function(){return r}),(function(t){return r=t})),t(e.exports,"Component",(function(){return u}),(function(t){return u=t})),t(e.exports,"Fragment",(function(){return o}),(function(t){return o=t})),t(e.exports,"Profiler",(function(){return c}),(function(t){return c=t})),t(e.exports,"PureComponent",(function(){return i}),(function(t){return i=t})),t(e.exports,"StrictMode",(function(){return f}),(function(t){return f=t})),t(e.exports,"Suspense",(function(){return s}),(function(t){return s=t})),t(e.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",(function(){return a}),(function(t){return a=t})),t(e.exports,"cloneElement",(function(){return l}),(function(t){return l=t})),t(e.exports,"createContext",(function(){return p}),(function(t){return p=t})),t(e.exports,"createElement",(function(){return y}),(function(t){return y=t})),t(e.exports,"createFactory",(function(){return d}),(function(t){return d=t})),t(e.exports,"createRef",(function(){return b}),(function(t){return b=t})),t(e.exports,"forwardRef",(function(){return h}),(function(t){return h=t})),t(e.exports,"isValidElement",(function(){return v}),(function(t){return v=t})),t(e.exports,"lazy",(function(){return m}),(function(t){return m=t})),t(e.exports,"memo",(function(){return x}),(function(t){return x=t})),t(e.exports,"startTransition",(function(){return _}),(function(t){return _=t})),t(e.exports,"unstable_act",(function(){return S}),(function(t){return S=t})),t(e.exports,"useCallback",(function(){return w}),(function(t){return w=t})),t(e.exports,"useContext",(function(){return g}),(function(t){return g=t})),t(e.exports,"useDebugValue",(function(){return j}),(function(t){return j=t})),t(e.exports,"useDeferredValue",(function(){return E}),(function(t){return E=t})),t(e.exports,"useEffect",(function(){return $}),(function(t){return $=t})),t(e.exports,"useId",(function(){return O}),(function(t){return O=t})),t(e.exports,"useImperativeHandle",(function(){return R}),(function(t){return R=t})),t(e.exports,"useInsertionEffect",(function(){return k}),(function(t){return k=t})),t(e.exports,"useLayoutEffect",(function(){return C}),(function(t){return C=t})),t(e.exports,"useMemo",(function(){return P}),(function(t){return P=t})),t(e.exports,"useReducer",(function(){return I}),(function(t){return I=t})),t(e.exports,"useRef",(function(){return q}),(function(t){return q=t})),t(e.exports,"useState",(function(){return N}),(function(t){return N=t})),t(e.exports,"useSyncExternalStore",(function(){return T}),(function(t){return T=t})),t(e.exports,"useTransition",(function(){return D}),(function(t){return D=t})),t(e.exports,"version",(function(){return U}),(function(t){return U=t}));var F=Symbol.for("react.element"),L=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),B=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),Y=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),J=Symbol.iterator;var K={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,X={};function Z(t,e,n){this.props=t,this.context=e,this.refs=X,this.updater=n||K}function tt(){}function et(t,e,n){this.props=t,this.context=e,this.refs=X,this.updater=n||K}Z.prototype.isReactComponent={},Z.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},Z.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},tt.prototype=Z.prototype;var nt=et.prototype=new tt;nt.constructor=et,Q(nt,Z.prototype),nt.isPureReactComponent=!0;var rt=Array.isArray,ut=Object.prototype.hasOwnProperty,ot={current:null},ct={key:!0,ref:!0,__self:!0,__source:!0};function it(t,e,n){var r,u={},o=null,c=null;if(null!=e)for(r in void 0!==e.ref&&(c=e.ref),void 0!==e.key&&(o=""+e.key),e)ut.call(e,r)&&!ct.hasOwnProperty(r)&&(u[r]=e[r]);var i=arguments.length-2;if(1===i)u.children=n;else if(1<i){for(var f=Array(i),s=0;s<i;s++)f[s]=arguments[s+2];u.children=f}if(t&&t.defaultProps)for(r in i=t.defaultProps)void 0===u[r]&&(u[r]=i[r]);return{$$typeof:F,type:t,key:o,ref:c,props:u,_owner:ot.current}}function ft(t){return"object"==typeof t&&null!==t&&t.$$typeof===F}var st=/\/+/g;function at(t,e){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,(function(t){return e[t]}))}(""+t.key):e.toString(36)}function lt(t,e,n,r,u){var o=typeof t;"undefined"!==o&&"boolean"!==o||(t=null);var c,i=!1;if(null===t)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(t.$$typeof){case F:case L:i=!0}}if(i)return u=u(i=t),t=""===r?"."+at(i,0):r,rt(u)?(n="",null!=t&&(n=t.replace(st,"$&/")+"/"),lt(u,e,n,"",(function(t){return t}))):null!=u&&(ft(u)&&(u=function(t,e){return{$$typeof:F,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(u,n+(!u.key||i&&i.key===u.key?"":(""+u.key).replace(st,"$&/")+"/")+t)),e.push(u)),1;if(i=0,r=""===r?".":r+":",rt(t))for(var f=0;f<t.length;f++){var s=r+at(o=t[f],f);i+=lt(o,e,n,s,u)}else if("function"==typeof(s=null===(c=t)||"object"!=typeof c?null:"function"==typeof(c=J&&c[J]||c["@@iterator"])?c:null))for(t=s.call(t),f=0;!(o=t.next()).done;)i+=lt(o=o.value,e,n,s=r+at(o,f++),u);else if("object"===o)throw e=String(t),Error("Objects are not valid as a React child (found: "+("[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return i}function pt(t,e,n){if(null==t)return t;var r=[],u=0;return lt(t,r,"","",(function(t){return e.call(n,t,u++)})),r}function yt(t){if(-1===t._status){var e=t._result;(e=e()).then((function(e){0!==t._status&&-1!==t._status||(t._status=1,t._result=e)}),(function(e){0!==t._status&&-1!==t._status||(t._status=2,t._result=e)})),-1===t._status&&(t._status=0,t._result=e)}if(1===t._status)return t._result.default;throw t._result}var dt={current:null},bt={transition:null};r={map:pt,forEach:function(t,e,n){pt(t,(function(){e.apply(this,arguments)}),n)},count:function(t){var e=0;return pt(t,(function(){e++})),e},toArray:function(t){return pt(t,(function(t){return t}))||[]},only:function(t){if(!ft(t))throw Error("React.Children.only expected to receive a single React element child.");return t}},u=Z,o=M,c=A,i=et,f=V,s=W,a={ReactCurrentDispatcher:dt,ReactCurrentBatchConfig:bt,ReactCurrentOwner:ot},l=function(t,e,n){if(null==t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Q({},t.props),u=t.key,o=t.ref,c=t._owner;if(null!=e){if(void 0!==e.ref&&(o=e.ref,c=ot.current),void 0!==e.key&&(u=""+e.key),t.type&&t.type.defaultProps)var i=t.type.defaultProps;for(f in e)ut.call(e,f)&&!ct.hasOwnProperty(f)&&(r[f]=void 0===e[f]&&void 0!==i?i[f]:e[f])}var f=arguments.length-2;if(1===f)r.children=n;else if(1<f){i=Array(f);for(var s=0;s<f;s++)i[s]=arguments[s+2];r.children=i}return{$$typeof:F,type:t.type,key:u,ref:o,props:r,_owner:c}},p=function(t){return(t={$$typeof:B,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:z,_context:t},t.Consumer=t},y=it,d=function(t){var e=it.bind(null,t);return e.type=t,e},b=function(){return{current:null}},h=function(t){return{$$typeof:H,render:t}},v=ft,m=function(t){return{$$typeof:G,_payload:{_status:-1,_result:t},_init:yt}},x=function(t,e){return{$$typeof:Y,type:t,compare:void 0===e?null:e}},_=function(t){var e=bt.transition;bt.transition={};try{t()}finally{bt.transition=e}},S=function(){throw Error("act(...) is not supported in production builds of React.")},w=function(t,e){return dt.current.useCallback(t,e)},g=function(t){return dt.current.useContext(t)},j=function(){},E=function(t){return dt.current.useDeferredValue(t)},$=function(t,e){return dt.current.useEffect(t,e)},O=function(){return dt.current.useId()},R=function(t,e,n){return dt.current.useImperativeHandle(t,e,n)},k=function(t,e){return dt.current.useInsertionEffect(t,e)},C=function(t,e){return dt.current.useLayoutEffect(t,e)},P=function(t,e){return dt.current.useMemo(t,e)},I=function(t,e,n){return dt.current.useReducer(t,e,n)},q=function(t){return dt.current.useRef(t)},N=function(t){return dt.current.useState(t)},T=function(t,e,n){return dt.current.useSyncExternalStore(t,e,n)},D=function(){return dt.current.useTransition()},U="18.2.0"}));u("cCfq4");var o=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,s=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,p=a||l||Function("return this")(),y=Object.prototype.toString,d=Math.max,b=Math.min,h=function(){return p.Date.now()};function v(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==y.call(t)}(t))return NaN;if(v(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=v(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=i.test(t);return n||f.test(t)?s(t.slice(2),n?2:8):c.test(t)?NaN:+t}debounce((()=>{console.log("delayed")}),300);document.querySelector("#search-box").addEventListener("input",(function(t){e=t.value,new Promise(((t,n)=>{fetch("https://restcountries.com/v3.1/name/"+e).then((t=>{if(t.ok)return t.json();n(`Error code ${t.status}`)})).then((e=>{t(e)})).catch((t=>{n(t)}))}));var e}));
//# sourceMappingURL=index.77d7c625.js.map
