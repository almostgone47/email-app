(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{40:function(e,t,n){e.exports=n(69)},69:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"fetchUser",(function(){return k})),n.d(a,"handleToken",(function(){return g}));n(41);var r=n(0),c=n.n(r),u=n(17),l=n.n(u),o=n(7),i=n(10),s=n(37),p=n(11),m=n(12),h=n(14),f=n(13),d=n(19),b=n(8),v=n(16),E=n.n(v),y=n(22),O=n(23),j=n.n(O),k=function(){return function(){var e=Object(y.a)(E.a.mark((function e(t){var n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("/api/current_user");case 2:n=e.sent,t({type:"fetch_user",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(y.a)(E.a.mark((function t(n){var a;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.post("/api/stripe",e);case 2:a=t.sent,n({type:"fetch_user",payload:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=n(38),z=n.n(w),x=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement(z.a,{name:"Emailzzz",description:"$5 for 5 email credits",amount:500,token:function(t){return e.props.handleToken(t)},stripeKey:"pk_test_iAZ91sQKgdpJOPqRLttzJovY00AnlMBVkK"},c.a.createElement("button",{className:"btn"},"Add credits"))}}]),n}(r.Component),C=Object(o.b)(null,a)(x),N=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"renderContent",value:function(){switch(this.props.auth){case null:return"Still deciding";case!1:return c.a.createElement("li",null,c.a.createElement("a",{href:"/auth/google"},"Login With Google"));default:return[c.a.createElement("li",{key:"1"},c.a.createElement(C,null)),c.a.createElement("li",{key:"2",style:{margin:"0 20px"}},"Credits:",this.props.auth.credits),c.a.createElement("li",{key:"3"},c.a.createElement("a",{href:"/api/logout"},"Logout"))]}}},{key:"render",value:function(){return c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement(d.b,{to:this.props.auth?"/surveys":"/",className:"left brand-logo"},"Emailzzz"),c.a.createElement("ul",{className:"right"},this.renderContent())))}}]),n}(r.Component);var _=Object(o.b)((function(e){return{auth:e.auth}}))(N),A=function(){return c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("h1",null,"Emailzzz"),"Collect feedback from your users")},J=function(){return c.a.createElement("h1",null,"Dashboard")},K=function(){return c.a.createElement("h1",null,"SurveyNew")},L=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"render",value:function(){return c.a.createElement(d.a,null,c.a.createElement("div",{className:"container"},c.a.createElement(_,null),c.a.createElement(b.a,{exact:!0,path:"/",component:A}),c.a.createElement(b.a,{exact:!0,path:"/surveys",component:J}),c.a.createElement(b.a,{path:"/survey/new",component:K})))}}]),n}(r.Component),B=Object(o.b)(null,a)(L),D=Object(i.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_user":return t.payload||!1;default:return e}}}),M=Object(i.d)(D,{},Object(i.a)(s.a));l.a.render(c.a.createElement(o.a,{store:M},c.a.createElement(B,null)),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.dbf06f2f.chunk.js.map