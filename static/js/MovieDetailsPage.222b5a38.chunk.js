(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[3],{55:function(t,e,r){"use strict";r.d(e,"e",(function(){return a})),r.d(e,"d",(function(){return c})),r.d(e,"b",(function(){return u})),r.d(e,"a",(function(){return s})),r.d(e,"c",(function(){return h}));var n=r(56),o=r.n(n),i="1ac1fd301cd441bc3d222350adc1c163";o.a.defaults.baseURL="https://api.themoviedb.org/3";var a=function(){return o.a.get("/trending/movie/day?api_key=".concat(i)).then((function(t){return t.data}))},c=function(t){return o.a.get("/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t)).then((function(t){return t.data}))},u=function(t){return o.a.get("/movie/".concat(t,"?api_key=").concat(i,"&language=en-US")).then((function(t){return t.data}))},s=function(t){return o.a.get("/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US")).then((function(t){return t.data}))},h=function(t){return o.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"))}},58:function(t,e,r){t.exports=r(86)},59:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return o}))},86:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(P){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return N()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=h(t,e,r);if("normal"===u.type){if(n=r.done?d:f,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=s;var l="suspendedStart",f="suspendedYield",p="executing",d="completed",v={};function y(){}function g(){}function m(){}var j={};j[i]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(S([])));w&&w!==r&&n.call(w,i)&&(j=w);var x=m.prototype=y.prototype=Object.create(j);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function r(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=h(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:N}}function N(){return{value:e,done:!0}}return g.prototype=x.constructor=m,m.constructor=g,g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},O(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(x),u(x,c,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},91:function(t,e,r){"use strict";r.r(e);var n=r(10),o=r(58),i=r.n(o),a=r(59),c=r(16),u=r(17),s=r(19),h=r(18),l=r(0),f=r(55),p=r(9),d=r(3),v=r(11),y=r(1),g=Object(l.lazy)((function(){return r.e(2).then(r.bind(null,87))})),m=Object(l.lazy)((function(){return r.e(4).then(r.bind(null,88))})),j=function(t){Object(s.a)(r,t);var e=Object(h.a)(r);function r(){var t;Object(c.a)(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={film:{}},t.handleGoBack=function(){var e,r,n;t.props.history.push(null!==(e=null===(r=t.props.location)||void 0===r||null===(n=r.state)||void 0===n?void 0:n.from)&&void 0!==e?e:v.a.movies)},t}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var t=Object(a.a)(i.a.mark((function t(){var e=this;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.b)(this.props.match.params.movieId).then((function(t){return e.setState({film:t})})).then(console.log(this.state.film));case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.film;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("section",{children:[Object(y.jsx)("button",{className:"Button",type:"button",onClick:this.handleGoBack,children:"Go back"}),Object(y.jsxs)("ul",{className:"ImageGallery",children:[Object(y.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(t.poster_path),alt:"",width:"250"}),Object(y.jsxs)("ul",{style:{listStyle:"none"},children:[Object(y.jsxs)("li",{children:[Object(y.jsx)("h2",{children:t.title}),Object(y.jsx)("p",{children:t.vote_average})]}),Object(y.jsxs)("li",{children:[Object(y.jsx)("h2",{children:"Overview"}),Object(y.jsx)("p",{children:t.overview})]}),Object(y.jsxs)("li",{children:[Object(y.jsx)("h2",{children:"Genres"}),Object(y.jsx)("p",{children:t.genres&&t.genres.map((function(t){return t.name})).join(", ")})]})]})]})]}),Object(y.jsxs)("section",{children:[Object(y.jsx)("p",{children:"Additional information"}),Object(y.jsxs)("ul",{children:[Object(y.jsx)("li",{children:Object(y.jsx)(p.b,{to:"".concat(this.props.match.url).concat(v.a.cast),children:"Cast"})}),Object(y.jsx)("li",{children:Object(y.jsx)(p.b,{to:"".concat(this.props.match.url).concat(v.a.reviews),children:"Reviews"})})]}),Object(y.jsxs)(l.Suspense,{children:[Object(y.jsx)(d.a,{path:"".concat(this.props.match.path).concat(v.a.cast),render:function(e){return Object(y.jsx)(g,Object(n.a)(Object(n.a)({},e),{},{movieId:t.id}))}}),Object(y.jsx)(d.a,{path:"".concat(this.props.match.path).concat(v.a.reviews),render:function(e){return Object(y.jsx)(m,Object(n.a)(Object(n.a)({},e),{},{movieId:t.id}))}})]})]})]})}}]),r}(l.Component);e.default=j}}]);
//# sourceMappingURL=MovieDetailsPage.222b5a38.chunk.js.map