(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(2),i=c.n(n),s=c(15),r=c.n(s),o=(c(25),c.p+"static/media/logo.6ce24c58.svg"),a=(c(26),c(0)),j=function(e){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h1",{children:["hello ",e.name+"Roll"," a.k.a ",e.heroName]}),e.children]})},l=c(16),d=c(17),h=c(20),u=c(19),b=function(e){Object(h.a)(c,e);var t=Object(u.a)(c);function c(){var e;return Object(l.a)(this,c),(e=t.call(this)).addCount=function(){e.setState({count:e.state.count+1})},e.state={count:0},e}return Object(d.a)(c,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"You just got Jebaited!!!"}),Object(a.jsx)("button",{onClick:this.addCount,children:"click this"}),Object(a.jsxs)("p",{children:["counting = ",this.state.count]}),Object(a.jsx)("img",{src:"https://c.tenor.com/VFFJ8Ei3C2IAAAAM/rickroll-rick.gif"}),Object(a.jsx)("br",{})]})}}]),c}(i.a.Component),O=c(5),p=c(18),f=c.n(p).a.create({baseURL:"http://localhost:8080/api/v1",headers:{"content-type":"application/json"}}),x=function(){return f.get("/greet/hi")},m=function(){var e=Object(n.useState)(""),t=Object(O.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){x().then((function(e){i(e.data)})).catch((function(e){console.log("something went wrong")}))})),c},g=function(){return f.get("/employee/employees")},v=function(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){g().then((function(e){i(e.data)})).catch((function(e){console.log("something went wrong")}))})),Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{children:"List of Employees"}),Object(a.jsx)("div",{children:Object(a.jsxs)("table",{border:"1",children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:"Name"}),Object(a.jsx)("td",{children:"Department"}),Object(a.jsx)("td",{children:"Location"})]}),c.map((function(e){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.name}),Object(a.jsx)("td",{children:e.department}),Object(a.jsx)("td",{children:e.location})]},e.id)}))]})})]})};var w=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(a.jsxs)("p",{children:["Edit ",Object(a.jsx)("code",{children:"src/App.js"})," am pogi ni sir."]}),Object(a.jsx)(v,{}),Object(a.jsx)("p",{children:m()}),Object(a.jsx)(b,{}),Object(a.jsx)(j,{name:"Rick ",heroName:" Rick Astley"}),Object(a.jsx)("a",{className:"App-link",href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",target:"_blank",rel:"noopener noreferrer",children:"You won't last 5 mins playing this video. Click now!"})]})})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,47)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),s(e),r(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root")),k()}},[[46,1,2]]]);
//# sourceMappingURL=main.98e34dd5.chunk.js.map