System.register(["react","react-dom"],(function(e){var t,n;return{setters:[function(e){t=e},function(e){n=e}],execute:function(){e(function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,n){e.exports=t},function(e,t,n){"use strict";e.exports=function(e,t,n,o,r,i,a,c){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,o,r,i,a,c],l=0;(u=new Error(t.replace(/%s/g,(function(){return s[l++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}}},function(e,t,n){function o(e,t){var n=document.createElement("a");n.href=e;for(var o="/"===n.pathname[0]?n.pathname:"/"+n.pathname,r=0,i=o.length;r!==t&&i>=0;){"/"===o[--i]&&r++}if(r!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+r+") in the URL path "+e);var a=o.slice(0,i+1);return n.protocol+"//"+n.host+a}t.setPublicPath=function(e,t){if(t||(t=1),"string"!=typeof e||0===e.trim().length)throw Error("systemjs-webpack-interop: setPublicPath(systemjsModuleName) must be called with a non-empty string 'systemjsModuleName'");if("number"!=typeof t||t<=0||isNaN(t)||!r(t))throw Error("systemjs-webpack-interop: setPublicPath(systemjsModuleName, rootDirectoryLevel) must be called with a positive integer 'rootDirectoryLevel'");var i;try{if(!(i=window.System.resolve(e)))throw Error()}catch(t){throw Error("systemjs-webpack-interop: There is no such module '"+e+"' in the SystemJS registry. Did you misspell the name of your module?")}n.p=o(i,t)},t.resolveDirectory=o;var r=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}},function(e,t,n){e.exports=n(10)()},function(e,t){e.exports=n},function(e,t,n){var o,r,i;r=[t],void 0===(i="function"==typeof(o=function(e){"use strict";function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(l){if("object"!==o(l))throw new Error("single-spa-react requires a configuration object");var p=function(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?t(r,!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},i,{},l);if(!p.React)throw new Error("single-spa-react must be passed opts.React");if(!p.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!p.rootComponent&&!p.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");!r&&p.React.createContext&&(e.SingleSpaContext=r=p.React.createContext());var f={bootstrap:a.bind(null,p),mount:c.bind(null,p),unmount:u.bind(null,p)};return p.parcelCanUpdate&&(f.update=s.bind(null,p)),f},e.SingleSpaContext=void 0;var r=null;e.SingleSpaContext=r;var i={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,suppressComponentDidCatchWarning:!1,domElements:{},domElementGetter:null,parcelCanUpdate:!0};function a(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent(t).then((function(t){e.rootComponent=t}))}function c(e,t){return new Promise((function(n,o){!e.suppressComponentDidCatchWarning&&function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)&&(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not have a prototype.  If using a functional component, wrap it in an error boundary or other class that implements componentDidCatch to avoid accidentally unmounting the entire single-spa application")));var i=function(e,t){return(t=t&&t.customProps?t.customProps:t).domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa-react was not given an application name as a prop, so it can't make a unique dom element container for the react application");var n="single-spa-application:".concat(t);return function(){var e=document.getElementById(n);return e||((e=document.createElement("div")).id=n,document.body.appendChild(e)),e}}(t)}(e,t);if("function"!=typeof i)throw new Error("single-spa-react: the domElementGetter for react application '".concat(t.appName||t.name,"' is not a function"));var a=e.React.createElement(e.rootComponent,t),c=r?e.React.createElement(r.Provider,{value:t},a):a,u=function(e,t){var n=e();if(!n)throw new Error("single-spa-react: domElementGetter function for application '".concat(t.appName||t.name,"' did not return a valid dom element. Please pass a valid domElement or domElementGetter via opts or props"));return n}(i,t);l({elementToRender:c,domElement:u,whenFinished:function(){n(this)},opts:e}),e.domElements[t.name]=u}))}function u(e,t){return Promise.resolve().then((function(){e.ReactDOM.unmountComponentAtNode(e.domElements[t.name]),delete e.domElements[t.name]}))}function s(e,t){return new Promise((function(n,o){var i=e.React.createElement(e.rootComponent,t);l({elementToRender:r?e.React.createElement(r.Provider,{value:t},i):i,domElement:e.domElements[t.name],whenFinished:function(){n(this)},opts:e})}))}function l(e){var t=e.opts,n=e.elementToRender,o=e.domElement,r=e.whenFinished;return"createRoot"===t.renderType?t.ReactDOM.createRoot(o).render(n,r):"createBlockingRoot"===t.renderType?t.ReactDOM.createBlockingRoot(o).render(n,r):"hydrate"===t.renderType?t.ReactDOM.hydrate(n,o,r):t.ReactDOM.render(n,o,r)}})?o.apply(t,r):o)||(e.exports=i)},function(e,t,n){"use strict";t.__esModule=!0;var o=i(n(0)),r=i(n(9));function i(e){return e&&e.__esModule?e:{default:e}}t.default=o.default.createContext||r.default,e.exports=t.default},function(e,t,n){n(8),e.exports=n(15)},function(e,t,n){"use strict";n.r(t),function(e){var t=n(2);const o=e.replace(/\?/g,"").split("&").reduce((function(e,t){const n=t.split("=");return e[n[0]]=n[1],e}),{});Object(t.setPublicPath)(decodeURIComponent(o.systemjsModuleName),Number(o.rootDirectoryLevel))}.call(this,"?systemjsModuleName=%40mf-demo%2Fnavbar&rootDirectoryLevel=1")},function(e,t,n){"use strict";t.__esModule=!0;var o=n(0),r=(a(o),a(n(3))),i=a(n(12));a(n(14));function a(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,o){e=n,t.forEach((function(t){return t(e,o)}))}}}t.default=function(e,t){var n,a,p="__create-react-context-"+(0,i.default)()+"__",f=function(e){function n(){var t,o;c(this,n);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return t=o=u(this,e.call.apply(e,[this].concat(i))),o.emitter=l(o.props.value),u(o,t)}return s(n,e),n.prototype.getChildContext=function(){var e;return(e={})[p]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,o=e.value,r=void 0;((i=n)===(a=o)?0!==i||1/i==1/a:i!=i&&a!=a)?r=0:(r="function"==typeof t?t(n,o):1073741823,0!==(r|=0)&&this.emitter.set(e.value,r))}var i,a},n.prototype.render=function(){return this.props.children},n}(o.Component);f.childContextTypes=((n={})[p]=r.default.object.isRequired,n);var m=function(t){function n(){var e,o;c(this,n);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return e=o=u(this,t.call.apply(t,[this].concat(i))),o.state={value:o.getValue()},o.onUpdate=function(e,t){0!=((0|o.observedBits)&t)&&o.setState({value:o.getValue()})},u(o,e)}return s(n,t),n.prototype.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=null==t?1073741823:t},n.prototype.componentDidMount=function(){this.context[p]&&this.context[p].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=null==e?1073741823:e},n.prototype.componentWillUnmount=function(){this.context[p]&&this.context[p].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[p]?this.context[p].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(o.Component);return m.contextTypes=((a={})[p]=r.default.object,a),{Provider:f,Consumer:m}},e.exports=t.default},function(e,t,n){"use strict";var o=n(11);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";(function(t){var n="__global_unique_id__";e.exports=function(){return t[n]=(t[n]||0)+1}}).call(this,n(13))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";var o=function(){};e.exports=o},function(e,t,n){"use strict";n.r(t),n.d(t,"bootstrap",(function(){return Ee})),n.d(t,"mount",(function(){return Pe})),n.d(t,"unmount",(function(){return Oe}));var o=n(0),r=n.n(o),i=n(4),a=n.n(i),c=n(5),u=n.n(c),s=n(1),l=n.n(s),p=n(6),f=n.n(p);function m(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function d(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function h(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}m.__suppressDeprecationWarning=!0,d.__suppressDeprecationWarning=!0,h.__suppressDeprecationWarning=!0;var v,y,b,g,w,E=function(e,t){return e.substr(0,t.length)===t},P=function(e,t){for(var n=void 0,o=void 0,r=t.split("?")[0],i=D(r),a=""===i[0],c=R(e),u=0,s=c.length;u<s;u++){var p=!1,f=c[u].route;if(f.default)o={route:f,params:{},uri:t};else{for(var m=D(f.path),d={},h=Math.max(i.length,m.length),v=0;v<h;v++){var y=m[v],b=i[v];if(S(y)){d[y.slice(1)||"*"]=i.slice(v).map(decodeURIComponent).join("/");break}if(void 0===b){p=!0;break}var g=_.exec(y);if(g&&!a){-1===T.indexOf(g[1])||l()(!1);var w=decodeURIComponent(b);d[g[1]]=w}else if(y!==b){p=!0;break}}if(!p){n={route:f,params:d,uri:"/"+i.slice(0,v).join("/")};break}}}return n||o||null},O=function(e,t){if(E(e,"/"))return e;var n=e.split("?"),o=n[0],r=n[1],i=t.split("?")[0],a=D(o),c=D(i);if(""===a[0])return U(i,r);if(!E(a[0],".")){var u=c.concat(a).join("/");return U(("/"===i?"":"/")+u,r)}for(var s=c.concat(a),l=[],p=0,f=s.length;p<f;p++){var m=s[p];".."===m?l.pop():"."!==m&&l.push(m)}return U("/"+l.join("/"),r)},C=function(e,t){return"/"+D(e).map((function(e){var n=_.exec(e);return n?t[n[1]]:e})).join("/")},_=/^:(.+)/,j=function(e){return _.test(e)},S=function(e){return e&&"*"===e[0]},x=function(e,t){return{route:e,score:e.default?0:D(e.path).reduce((function(e,t){return e+=4,!function(e){return""===e}(t)?j(t)?e+=2:S(t)?e-=5:e+=3:e+=1,e}),0),index:t}},R=function(e){return e.map(x).sort((function(e,t){return e.score<t.score?1:e.score>t.score?-1:e.index-t.index}))},D=function(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")},U=function(e,t){return e+(t?"?"+t:"")},T=["uri","path"],F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},N=function(e){var t=e.location,n=t.search,o=t.hash,r=t.href,i=t.origin,a=t.protocol,c=t.host,u=t.hostname,s=t.port,l=e.location.pathname;!l&&r&&k&&(l=new URL(r).pathname);return{pathname:encodeURI(decodeURI(l)),search:n,hash:o,href:r,origin:i,protocol:a,host:c,hostname:u,port:s,state:e.history.state,key:e.history.state&&e.history.state.key||"initial"}},k=!("undefined"==typeof window||!window.document||!window.document.createElement),M=(v=k?window:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",t=e.indexOf("?"),n={pathname:t>-1?e.substr(0,t):e,search:t>-1?e.substr(t):""},o=0,r=[n],i=[null];return{get location(){return r[o]},addEventListener:function(e,t){},removeEventListener:function(e,t){},history:{get entries(){return r},get index(){return o},get state(){return i[o]},pushState:function(e,t,n){var a=n.split("?"),c=a[0],u=a[1],s=void 0===u?"":u;o++,r.push({pathname:c,search:s.length?"?"+s:s}),i.push(e)},replaceState:function(e,t,n){var a=n.split("?"),c=a[0],u=a[1],s=void 0===u?"":u;r[o]={pathname:c,search:s},i[o]=e},go:function(e){var t=o+e;t<0||t>i.length-1||(o=t)}}}}(),y=[],b=N(v),g=!1,w=function(){},{get location(){return b},get transitioning(){return g},_onTransitionComplete:function(){g=!1,w()},listen:function(e){y.push(e);var t=function(){b=N(v),e({location:b,action:"POP"})};return v.addEventListener("popstate",t),function(){v.removeEventListener("popstate",t),y=y.filter((function(t){return t!==e}))}},navigate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.state,o=t.replace,r=void 0!==o&&o;if("number"==typeof e)v.history.go(e);else{n=F({},n,{key:Date.now()+""});try{g||r?v.history.replaceState(n,null,e):v.history.pushState(n,null,e)}catch(t){v.location[r?"replace":"assign"](e)}}b=N(v),g=!0;var i=new Promise((function(e){return w=e}));return y.forEach((function(e){return e({location:b,action:"PUSH"})})),i}}),W=(M.navigate,Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e});function I(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}function A(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function B(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function L(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var q=function(e,t){var n=f()(t);return n.displayName=e,n},G=q("Location"),V=function(e){var t=e.children;return r.a.createElement(G.Consumer,null,(function(e){return e?t(e):r.a.createElement(K,null,t)}))},K=function(e){function t(){var n,o;A(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=B(this,e.call.apply(e,[this].concat(i))),o.state={context:o.getContext(),refs:{unlisten:null}},B(o,n)}return L(t,e),t.prototype.getContext=function(){var e=this.props.history;return{navigate:e.navigate,location:e.location}},t.prototype.componentDidCatch=function(e,t){if(!re(e))throw e;(0,this.props.history.navigate)(e.uri,{replace:!0})},t.prototype.componentDidUpdate=function(e,t){t.context.location!==this.state.context.location&&this.props.history._onTransitionComplete()},t.prototype.componentDidMount=function(){var e=this,t=this.state.refs,n=this.props.history;n._onTransitionComplete(),t.unlisten=n.listen((function(){Promise.resolve().then((function(){requestAnimationFrame((function(){e.unmounted||e.setState((function(){return{context:e.getContext()}}))}))}))}))},t.prototype.componentWillUnmount=function(){var e=this.state.refs;this.unmounted=!0,e.unlisten()},t.prototype.render=function(){var e=this.state.context,t=this.props.children;return r.a.createElement(G.Provider,{value:e},"function"==typeof t?t(e):t||null)},t}(r.a.Component);K.defaultProps={history:M};var H=q("Base",{baseuri:"/",basepath:"/"}),Y=function(e){return r.a.createElement(H.Consumer,null,(function(t){return r.a.createElement(V,null,(function(n){return r.a.createElement($,W({},t,n,e))}))}))},$=function(e){function t(){return A(this,t),B(this,e.apply(this,arguments))}return L(t,e),t.prototype.render=function(){var e=this.props,t=e.location,n=e.navigate,o=e.basepath,i=e.primary,a=e.children,c=(e.baseuri,e.component),u=void 0===c?"div":c,s=I(e,["location","navigate","basepath","primary","children","baseuri","component"]),l=r.a.Children.toArray(a).reduce((function(e,t){var n=ue(o)(t);return e.concat(n)}),[]),p=t.pathname,f=P(l,p);if(f){var m=f.params,d=f.uri,h=f.route,v=f.route.value;o=h.default?o:h.path.replace(/\*$/,"");var y=W({},m,{uri:d,location:t,navigate:function(e,t){return n(O(e,d),t)}}),b=r.a.cloneElement(v,y,v.props.children?r.a.createElement(Y,{location:t,primary:i},v.props.children):void 0),g=i?X:u,w=i?W({uri:d,location:t,component:u},s):s;return r.a.createElement(H.Provider,{value:{baseuri:d,basepath:o}},r.a.createElement(g,w,b))}return null},t}(r.a.PureComponent);$.defaultProps={primary:!0};var J=q("Focus"),X=function(e){var t=e.uri,n=e.location,o=e.component,i=I(e,["uri","location","component"]);return r.a.createElement(J.Consumer,null,(function(e){return r.a.createElement(Z,W({},i,{component:o,requestFocus:e,uri:t,location:n}))}))},z=!0,Q=0,Z=function(e){function t(){var n,o;A(this,t);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return n=o=B(this,e.call.apply(e,[this].concat(i))),o.state={},o.requestFocus=function(e){!o.state.shouldFocus&&e&&e.focus()},B(o,n)}return L(t,e),t.getDerivedStateFromProps=function(e,t){if(null==t.uri)return W({shouldFocus:!0},e);var n=e.uri!==t.uri,o=t.location.pathname!==e.location.pathname&&e.location.pathname===e.uri;return W({shouldFocus:n||o},e)},t.prototype.componentDidMount=function(){Q++,this.focus()},t.prototype.componentWillUnmount=function(){0===--Q&&(z=!0)},t.prototype.componentDidUpdate=function(e,t){e.location!==this.props.location&&this.state.shouldFocus&&this.focus()},t.prototype.focus=function(){var e=this.props.requestFocus;e?e(this.node):z?z=!1:this.node&&(this.node.contains(document.activeElement)||this.node.focus())},t.prototype.render=function(){var e=this,t=this.props,n=(t.children,t.style),o=(t.requestFocus,t.component),i=void 0===o?"div":o,a=(t.uri,t.location,I(t,["children","style","requestFocus","component","uri","location"]));return r.a.createElement(i,W({style:W({outline:"none"},n),tabIndex:"-1",ref:function(t){return e.node=t}},a),r.a.createElement(J.Provider,{value:this.requestFocus},this.props.children))},t}(r.a.Component);!function(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,o=null,r=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?o="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(o="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?r="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(r="UNSAFE_componentWillUpdate"),null!==n||null!==o||null!==r){var i=e.displayName||e.name,a="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+i+" uses "+a+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==o?"\n  "+o:"")+(null!==r?"\n  "+r:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=m,t.componentWillReceiveProps=d),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=h;var c=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;c.call(this,e,t,o)}}}(Z);var ee=function(){},te=r.a.forwardRef;void 0===te&&(te=function(e){return e});var ne=te((function(e,t){var n=e.innerRef,o=I(e,["innerRef"]);return r.a.createElement(H.Consumer,null,(function(e){e.basepath;var i=e.baseuri;return r.a.createElement(V,null,(function(e){var a=e.location,c=e.navigate,u=o.to,s=o.state,l=o.replace,p=o.getProps,f=void 0===p?ee:p,m=I(o,["to","state","replace","getProps"]),d=O(u,i),h=encodeURI(d),v=a.pathname===h,y=E(a.pathname,h);return r.a.createElement("a",W({ref:t||n,"aria-current":v?"page":void 0},m,f({isCurrent:v,isPartiallyCurrent:y,href:d,location:a}),{href:d,onClick:function(e){if(m.onClick&&m.onClick(e),se(e)){e.preventDefault();var t=l;if("boolean"!=typeof l&&v){var n=W({},a.state),o=(n.key,I(n,["key"]));r=W({},s),i=o,t=(u=Object.keys(r)).length===Object.keys(i).length&&u.every((function(e){return i.hasOwnProperty(e)&&r[e]===i[e]}))}c(d,{state:s,replace:t})}var r,i,u}}))}))}))}));function oe(e){this.uri=e}ne.displayName="Link";var re=function(e){return e instanceof oe},ie=function(e){function t(){return A(this,t),B(this,e.apply(this,arguments))}return L(t,e),t.prototype.componentDidMount=function(){var e=this.props,t=e.navigate,n=e.to,o=(e.from,e.replace),r=void 0===o||o,i=e.state,a=(e.noThrow,e.baseuri),c=I(e,["navigate","to","from","replace","state","noThrow","baseuri"]);Promise.resolve().then((function(){var e=O(n,a);t(C(e,c),{replace:r,state:i})}))},t.prototype.render=function(){var e=this.props,t=(e.navigate,e.to),n=(e.from,e.replace,e.state,e.noThrow),o=e.baseuri,r=I(e,["navigate","to","from","replace","state","noThrow","baseuri"]),i=O(t,o);return n||function(e){throw new oe(e)}(C(i,r)),null},t}(r.a.Component),ae=function(e){return r.a.createElement(H.Consumer,null,(function(t){var n=t.baseuri;return r.a.createElement(V,null,(function(t){return r.a.createElement(ie,W({},t,{baseuri:n},e))}))}))},ce=function(e){return e.replace(/(^\/+|\/+$)/g,"")},ue=function e(t){return function(n){if(!n)return null;if(n.type===r.a.Fragment&&n.props.children)return r.a.Children.map(n.props.children,e(t));var o,i,a;if(n.props.path||n.props.default||n.type===ae||l()(!1),n.type!==ae||n.props.from&&n.props.to||l()(!1),n.type===ae&&(o=n.props.from,i=n.props.to,a=function(e){return j(e)},D(o).filter(a).sort().join("/")!==D(i).filter(a).sort().join("/"))&&l()(!1),n.props.default)return{value:n,default:!0};var c=n.type===ae?n.props.from:n.props.path,u="/"===c?t:ce(t)+"/"+ce(c);return{value:n,default:n.props.default,path:n.props.children?ce(u)+"/*":u}}},se=function(e){return!e.defaultPrevented&&0===e.button&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)};function le(e){return(le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function pe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fe(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,ye(o.key),o)}}function me(e,t,n){return t=de(t),function(e,t){if(t&&("object"==le(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,function(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return function(){return!!e}()}()?Reflect.construct(t,n||[],de(e).constructor):t.apply(e,n))}function de(e){return(de=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function he(e,t){return(he=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function ve(e,t,n){return(t=ye(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ye(e){var t=function(e,t){if("object"!=le(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=le(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==le(t)?t:t+""}var be=function(e){function t(){var e;pe(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return ve(e=me(this,t,[].concat(o)),"state",{hasError:!1}),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&he(e,t)}(t,e),n=t,(o=[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return console.log("isProd in mf-navbar:>> ",!0),this.state.hasError?r.a.createElement("div",{className:"error"},"Error"):r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,{className:"navbar-brand",to:"/mf-root-config"},r.a.createElement("img",{src:"https://as2.ftcdn.net/v2/jpg/01/34/74/23/1000_F_134742344_ewV8CI2eeb8iSTujRWYXgR5HBivbSCYx.jpg",className:"d-inline-block align-top mr-2 align-middle",height:"50",width:"50",alt:""}),"Microfrontends Demo (Docker)"),r.a.createElement("div",{class:"collapse navbar-collapse"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(ne,{className:"nav-link",to:"/mf-root-config/employees"},"Employees")))),r.a.createElement("em",{className:"text-white"},this.props.name," using React"))}}])&&fe(n.prototype,o),i&&fe(n,i),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,o,i}(r.a.Component),ge=n(2);Object(ge.setPublicPath)("@mf-demo/navbar");var we=u()({React:r.a,ReactDOM:a.a,rootComponent:be,domElementGetter:function(){var e=!1,t=document.getElementById("mf-navbar");t||(e=!0,(t=document.createElement("nav")).id="mf-navbar");t.className="navbar navbar-dark bg-dark navbar-expand-lg",e&&document.body.appendChild(t);return t}}),Ee=we.bootstrap,Pe=we.mount,Oe=we.unmount}]))}}}));
//# sourceMappingURL=mf-demo-navbar.js.map