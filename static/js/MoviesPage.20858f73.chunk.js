(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[5],{55:function(t,e,n){"use strict";n.d(e,"e",(function(){return i})),n.d(e,"d",(function(){return u})),n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return d}));var a=n(56),c=n.n(a),r="1ac1fd301cd441bc3d222350adc1c163";c.a.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){return c.a.get("/trending/movie/day?api_key=".concat(r)).then((function(t){return t.data}))},u=function(t){return c.a.get("/search/movie?api_key=".concat(r,"&language=en-US&query=").concat(t)).then((function(t){return t.data}))},o=function(t){return c.a.get("/movie/".concat(t,"?api_key=").concat(r,"&language=en-US")).then((function(t){return t.data}))},s=function(t){return c.a.get("/movie/".concat(t,"/credits?api_key=").concat(r,"&language=en-US")).then((function(t){return t.data}))},d=function(t){return c.a.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(r,"&language=en-US&page=1"))}},57:function(t,e,n){"use strict";n(0);var a=n(9),c=n(3),r=n(1);e.a=Object(c.f)((function(t){var e=t.data,n=t.location;return Object(r.jsx)("ul",{children:e.map((function(t){return Object(r.jsx)("li",{children:Object(r.jsx)(a.b,{to:{pathname:"movies/".concat(t.id),state:{from:n}},children:t.title})},t.id)}))})}))},90:function(t,e,n){"use strict";n.r(e);var a=n(16),c=n(17),r=n(19),i=n(18),u=n(0),o=n(55),s=n(57),d=n(1),h=function(t){Object(r.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={data:[],query:""},t.onChange=function(e){var n=e.target.value;t.setState({query:n})},t.onSubmit=function(e){e.preventDefault(),t.state.query.length&&Object(o.d)(t.state.query).then((function(e){var n=e.results;return t.setState({data:n}),n}))},t}return Object(c.a)(n,[{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("form",{action:"submit",onSubmit:this.onSubmit,children:[Object(d.jsxs)("label",{htmlFor:"search",children:["Search movie:",Object(d.jsx)("input",{type:"text",name:"search",onChange:this.onChange})]}),Object(d.jsx)("button",{type:"submit",children:"Search"})]}),Object(d.jsx)("ul",{children:Object(d.jsx)(s.a,{data:this.state.data})})]})}}]),n}(u.Component);e.default=h}}]);
//# sourceMappingURL=MoviesPage.20858f73.chunk.js.map