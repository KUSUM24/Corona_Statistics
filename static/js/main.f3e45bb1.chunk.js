(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[0],{71:function(e,t,c){},83:function(e,t,c){},86:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c(0),s=c.n(n),a=c(21),i=c.n(a),j=c(38),o=c(63),l=c(52),d=c.n(l),b=c(55),h=c(15),x=(c(71),function(){return Object(r.jsx)("div",{className:"text-center",children:Object(r.jsxs)("div",{class:"lds-roller ",children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})})}),O=c(18),u=c(105),v=c(107),f=c(106),m=c(58),g=function(e){var t=e.getSearch,c=Object(n.useRef)();return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(u.a,{bg:"light",expand:"lg",style:{boxShadow:"0px 0px 10px 5px gray",marginTop:"0.5%"},children:[Object(r.jsx)(u.a.Brand,{href:"/",children:"Corona Live Statistics"}),Object(r.jsx)(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(r.jsxs)(u.a.Collapse,{id:"basic-navbar-nav",className:"justify-content-end",children:[Object(r.jsx)(v.a,{className:"mr-auto",children:Object(r.jsx)(O.b,{to:"/historic",children:Object(r.jsx)("div",{className:"btn btn-primary",children:"Historic"})})}),Object(r.jsx)(f.a,{inline:!0,children:Object(r.jsx)(m.a,{type:"text",ref:c,onChange:function(){return t(c.current.value)},placeholder:"Search Country",className:"mr-sm-2"})})]})]})})},y=c(102),p=c(27),S=c.n(p),C=function(e){var t=e.countryList,c=e.worldData,n=e.sortStatus,s=e.sortValue,a=e.getCountryName;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(y.a,{striped:!0,responsive:!0,bordered:!0,hover:!0,variant:"primary",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{onClick:function(){return n("countryName")},style:{cursor:"pointer"},children:Object(r.jsxs)("div",{className:"d-flex justify-content-between",children:["Country Name","countryName"==s&&Object(r.jsx)(S.a,{})]})}),Object(r.jsx)("th",{onClick:function(){return n("newCases")},style:{cursor:"pointer"},children:Object(r.jsxs)("div",{className:"d-flex justify-content-between",children:["New Cases","newCases"==s&&Object(r.jsx)(S.a,{})]})}),Object(r.jsx)("th",{onClick:function(){return n("active")},style:{cursor:"pointer"},children:Object(r.jsxs)("div",{className:"d-flex justify-content-between",children:["Active Cases ","active"==s&&Object(r.jsx)(S.a,{})]})}),Object(r.jsx)("th",{onClick:function(){return n("total")},style:{cursor:"pointer"},children:Object(r.jsxs)("div",{className:"d-flex justify-content-between",children:["Total Cases ","total"==s&&Object(r.jsx)(S.a,{})]})}),Object(r.jsx)("th",{onClick:function(){return n("recovered")},style:{cursor:"pointer"},children:Object(r.jsxs)("div",{className:"d-flex justify-content-between",children:["Recovered Cases"," ","recovered"==s&&Object(r.jsx)(S.a,{})]})}),Object(r.jsx)("th",{onClick:function(){return n("deaths")},style:{cursor:"pointer"},children:Object(r.jsxs)("div",{className:"d-flex justify-content-between",children:["Deaths ","deaths"==s&&Object(r.jsx)(S.a,{})]})}),Object(r.jsx)("th",{onClick:function(){return n("tests")},style:{cursor:"pointer"},children:Object(r.jsxs)("div",{className:"d-flex justify-content-between",children:["Total Tests ","tests"==s&&Object(r.jsx)(S.a,{})]})})]})}),Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{style:{backgroundColor:"#dc3545",color:"white"},children:[Object(r.jsx)("td",{children:"1"}),Object(r.jsx)("td",{children:"World"}),Object(r.jsx)("td",{children:c.todayCases.toLocaleString()}),Object(r.jsx)("td",{children:c.active.toLocaleString()}),Object(r.jsx)("td",{children:c.cases.toLocaleString()}),Object(r.jsx)("td",{children:c.recovered.toLocaleString()}),Object(r.jsx)("td",{children:c.deaths.toLocaleString()}),Object(r.jsx)("td",{children:c.tests.toLocaleString()})]}),t.map((function(e,t){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:t+2}),Object(r.jsx)("td",{onClick:function(){return a(e.country)},children:Object(r.jsx)(O.b,{to:"/".concat(e.country),style:{cursor:"pointer",color:"black",border:"1px solid transparent",borderColor:"transparent",width:"100%"},children:e.country})}),Object(r.jsx)("td",{children:e.todayCases.toLocaleString()}),Object(r.jsx)("td",{children:e.active.toLocaleString()}),Object(r.jsx)("td",{children:e.cases.toLocaleString()}),Object(r.jsx)("td",{children:e.recovered.toLocaleString()}),Object(r.jsx)("td",{children:e.deaths.toLocaleString()}),Object(r.jsx)("td",{children:e.tests.toLocaleString()})]})}))]})]})})},L=function(e){var t=e.countryList,c=e.worldData,n=e.getSearch,s=e.sortStatus,a=e.sortValue,i=e.getCountryName;return Object(r.jsxs)("div",{children:[Object(r.jsx)(g,{getSearch:n}),Object(r.jsx)(C,{countryList:t,worldData:c,sortStatus:s,sortValue:a,getCountryName:i})]})},N=c(8),w=function(e){var t=e.getSearch,c=Object(n.useRef)();return Object(r.jsx)("div",{children:Object(r.jsxs)(u.a,{bg:"light",expand:"lg",style:{boxShadow:"0px 0px 10px 5px gray",marginTop:"0.5%"},children:[Object(r.jsx)(u.a.Brand,{href:"/",children:"Corona Live Statistics"}),Object(r.jsx)(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(r.jsxs)(u.a.Collapse,{id:"basic-navbar-nav",className:"justify-content-end",children:[Object(r.jsx)(v.a,{className:"mr-auto",children:Object(r.jsx)(O.b,{to:"/Corona_Statistics",children:Object(r.jsx)("div",{className:"btn btn-primary",children:"Home"})})}),Object(r.jsx)(f.a,{inline:!0,children:Object(r.jsx)(m.a,{type:"text",ref:c,onChange:function(){return t(c.current.value)},placeholder:"Search Country",className:"mr-sm-2"})})]})]})})},D=c(103),T=c(62),k=function(e){var t=e.historicData,c=e.historicWorld,s=e.dateList,a=Object(n.useState)(s[0]),i=Object(h.a)(a,2),j=i[0],o=i[1];console.log(t);return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"text-center m-4",children:[Object(r.jsx)("label",{className:"m-0",style:{fontSize:"120%"},children:"Select Date"}),Object(r.jsx)(D.a,{variant:"dark",id:"dropdown-basic-button",title:j,children:s.map((function(e,t){return Object(r.jsx)(T.a.Item,{href:"#",onClick:function(){return function(e){o(e)}(e)},children:e})}))})]}),Object(r.jsxs)(y.a,{striped:!0,responsive:!0,bordered:!0,hover:!0,variant:"success",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:"Country Name"}),Object(r.jsx)("th",{children:"Total Cases"}),Object(r.jsx)("th",{children:"Recovered Cases"}),Object(r.jsx)("th",{children:"Deaths"})]})}),Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{style:{backgroundColor:"#dc3545",color:"white"},children:[Object(r.jsx)("td",{children:"1"}),Object(r.jsx)("td",{children:"World"}),Object(r.jsx)("td",{children:c.cases[j].toLocaleString()}),Object(r.jsx)("td",{children:c.recovered[j].toLocaleString()}),Object(r.jsx)("td",{children:c.deaths[j].toLocaleString()})]}),t.map((function(e,t){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:t+2}),Object(r.jsx)("td",{children:e.country}),Object(r.jsx)("td",{children:e.timeline.cases[j].toLocaleString()}),Object(r.jsx)("td",{children:e.timeline.recovered[j].toLocaleString()}),Object(r.jsx)("td",{children:e.timeline.deaths[j].toLocaleString()})]})})}))]})]})]})},P=function(e){var t=e.historicData,c=e.historicWorld,n=e.getSearch,s=e.dateList;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(w,{getSearch:n}),Object(r.jsx)(k,{historicData:t,historicWorld:c,dateList:s})]})},M=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)(u.a,{bg:"light",expand:"lg",style:{boxShadow:"0px 0px 10px 5px gray",marginTop:"0.5%"},children:[Object(r.jsx)(u.a.Brand,{href:"/",children:"Corona Live Statistics"}),Object(r.jsx)(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(r.jsx)(u.a.Collapse,{id:"basic-navbar-nav",className:"justify-content-end",children:Object(r.jsxs)(v.a,{className:"mr-auto",children:[Object(r.jsx)(O.b,{to:"/Corona_Statistics",children:Object(r.jsx)("div",{className:"btn btn-primary",children:"Home"})}),Object(r.jsx)(O.b,{to:"/historic",children:Object(r.jsx)("div",{className:"btn btn-primary",children:"Historic"})})]})})]})})},R=c(104),E=c(59),B=c(108),F=(c(83),function(e){var t=e.oneCountryData;return Object(r.jsx)("div",{children:Object(r.jsxs)(R.a,{children:[Object(r.jsx)(E.a,{className:"m-4",children:Object(r.jsxs)(B.a,{children:[Object(r.jsxs)(B.a.Header,{className:"d-flex justify-content-between",children:[t.country,Object(r.jsx)("div",{children:"Till Date"})]}),Object(r.jsxs)(B.a.Body,{children:[Object(r.jsxs)("div",{children:["Active Cases: ",Object(r.jsx)("b",{children:t.active.toLocaleString()})]}),Object(r.jsxs)("div",{children:["Total Cases: ",Object(r.jsx)("b",{children:t.cases.toLocaleString()})]}),Object(r.jsxs)("div",{children:["Recovered Cases:"," ",Object(r.jsx)("b",{children:t.recovered.toLocaleString()})]}),Object(r.jsxs)("div",{children:["Deaths: ",Object(r.jsx)("b",{children:t.deaths.toLocaleString()})]}),Object(r.jsxs)("div",{children:["Tests: ",Object(r.jsx)("b",{children:t.tests.toLocaleString()})]})]})]})}),Object(r.jsx)(E.a,{className:"m-4",children:Object(r.jsxs)(B.a,{children:[Object(r.jsxs)(B.a.Header,{className:"d-flex justify-content-between",children:[t.country," ",Object(r.jsx)("div",{children:"Today"})," "]}),Object(r.jsxs)(B.a.Body,{children:[Object(r.jsxs)("div",{children:["New Cases: ",Object(r.jsx)("b",{children:t.todayCases.toLocaleString()})]}),Object(r.jsxs)("div",{children:["New Recovered:"," ",Object(r.jsx)("b",{children:t.todayRecovered.toLocaleString()})]}),Object(r.jsxs)("div",{children:["New Deaths: ",Object(r.jsx)("b",{children:t.todayDeaths.toLocaleString()})]}),Object(r.jsxs)("div",{children:["Critical: ",Object(r.jsx)("b",{children:t.critical.toLocaleString()})]}),Object(r.jsxs)("div",{children:[" ","Case per people:",Object(r.jsx)("b",{children:t.oneCasePerPeople.toLocaleString()})]})]})]})}),Object(r.jsx)(E.a,{className:"m-4",children:Object(r.jsxs)(B.a,{children:[Object(r.jsxs)(B.a.Header,{className:"d-flex justify-content-between",children:[t.country," ",Object(r.jsx)("div",{children:"Per Million"})]}),Object(r.jsxs)(B.a.Body,{children:[Object(r.jsxs)("div",{children:["Active Per Million:"," ",Object(r.jsx)("b",{children:t.activePerOneMillion.toLocaleString()})]}),Object(r.jsxs)("div",{children:["Total Per Million:"," ",Object(r.jsx)("b",{children:t.casesPerOneMillion.toLocaleString()})]}),Object(r.jsxs)("div",{children:["Recovered Per Million:"," ",Object(r.jsx)("b",{children:t.recoveredPerOneMillion.toLocaleString()})]}),Object(r.jsxs)("div",{children:["Deaths Per Million:"," ",Object(r.jsx)("b",{children:t.deathsPerOneMillion.toLocaleString()})]}),Object(r.jsxs)("div",{children:["Tests Per Million:"," ",Object(r.jsx)("b",{children:t.testsPerOneMillion.toLocaleString()})]})]})]})})]})})}),H=function(e){var t=e.oneCountryData;return console.log(t),Object(r.jsx)(r.Fragment,{children:t.active&&Object(r.jsxs)("div",{children:[Object(r.jsx)(M,{}),Object(r.jsx)(F,{oneCountryData:t})]})})},W=function(){var e=Object(n.useState)(!0),t=Object(h.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),i=Object(h.a)(a,2),l=i[0],u=i[1],v=Object(n.useState)([]),f=Object(h.a)(v,2),m=f[0],g=f[1],y=Object(n.useState)({}),p=Object(h.a)(y,2),S=p[0],C=p[1],w=Object(n.useState)({}),D=Object(h.a)(w,2),T=D[0],k=D[1],M=Object(n.useState)({}),R=Object(h.a)(M,2),E=R[0],B=R[1],F=Object(n.useState)({}),W=Object(h.a)(F,2),V=W[0],G=W[1],A=Object(n.useState)([]),_=Object(h.a)(A,2),I=_[0],J=_[1],z=Object(n.useState)("active"),q=Object(h.a)(z,2),K=q[0],Q=q[1],U=Object(n.useState)({}),X=Object(h.a)(U,2),Y=X[0],Z=X[1],$=Object(n.useState)(""),ee=Object(h.a)($,2),te=ee[0],ce=ee[1];Object(n.useEffect)((function(){s(!0),function(){var e=Object(b.a)(d.a.mark((function e(){var t,c,r,n,a,i,j,o,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://corona.lmao.ninja/v2/countries",{method:"GET"});case 2:return t=e.sent,e.next=5,t.json();case 5:return c=e.sent,u(c.sort((function(e,t){return t.active-e.active}))),g(c),e.next=10,fetch("https://corona.lmao.ninja/v2/all",{method:"GET"});case 10:return r=e.sent,e.next=13,r.json();case 13:return n=e.sent,C(n),e.next=17,fetch("https://corona.lmao.ninja/v2/historical",{method:"GET"});case 17:return a=e.sent,e.next=20,a.json();case 20:return i=e.sent,k(i),B(i),console.log(i),e.next=26,fetch("https://corona.lmao.ninja/v2/historical/all",{method:"GET"});case 26:return j=e.sent,e.next=29,j.json();case 29:o=e.sent,l=Object.keys(o.cases),J(l.reverse()),G(o),s(!1);case 34:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]);var re=function(e){var t=new RegExp(e,"i"),c=m.filter((function(e){return e.country.match(t)}));u(c)},ne=function(e){var t=new RegExp(e,"i"),c=E.filter((function(e){return e.country.match(t)}));k(c)},se=function(e){var t;"countryName"==e?t=m.sort((function(e,t){return e.country>t.country?1:-1})):"newCases"==e?t=m.sort((function(e,t){return t.todayCases-e.todayCases})):"total"==e?t=m.sort((function(e,t){return t.cases-e.cases})):"active"==e?t=m.sort((function(e,t){return t.active-e.active})):"recovered"==e?t=m.sort((function(e,t){return t.recovered-e.recovered})):"deaths"==e?t=m.sort((function(e,t){return t.deaths-e.deaths})):"tests"==e&&(t=m.sort((function(e,t){return t.tests-e.tests}))),console.log(t),u(Object(o.a)(t)),Q(e)},ae=function(e){ce(e),m.map((function(t){t.country==e&&Z(t)}))};return console.log(te),Object(r.jsx)(r.Fragment,{children:c?Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(x,{})}):Object(r.jsx)(O.a,{children:Object(r.jsxs)(N.c,{children:[Object(r.jsx)(N.a,{exact:!0,path:"/",render:function(e){return Object(r.jsx)(L,Object(j.a)({countryList:l,worldData:S,getSearch:re,sortStatus:se,sortValue:K,getCountryName:ae},e))}}),Object(r.jsx)(N.a,{path:"/Corona_Statistics",exact:!0,render:function(e){return Object(r.jsx)(L,Object(j.a)({countryList:l,worldData:S,getSearch:re,sortStatus:se,sortValue:K,getCountryName:ae},e))}}),Object(r.jsx)(N.a,{path:"/historic",exact:!0,render:function(e){return Object(r.jsx)(P,Object(j.a)({historicData:T,historicWorld:V,dateList:I,getSearch:ne},e))}}),Object(r.jsx)(N.a,{path:"/".concat(te),exact:!0,render:function(e){return Object(r.jsx)(H,Object(j.a)({oneCountryData:Y},e))}})]})})})};c(84);i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(W,{})}),document.getElementById("root"))}},[[86,1,2]]]);
//# sourceMappingURL=main.f3e45bb1.chunk.js.map