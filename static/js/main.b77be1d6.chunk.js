(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{13:function(e,a,t){},22:function(e,a,t){e.exports=t(32)},32:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(20),c=t.n(l),s=(t(13),t(7)),m=t(8),i=t(10),u=t(9),o=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={imageUrl:["../image/img1.jpg","../image/img2.jpg","../image/img3.jpg","../image/img4.jpg"],index:0},e.next=function(){var a=e.state,t=a.index;t<a.imageUrl.length-1&&e.setState({index:t+1})},e.prev=function(){var a=e.state.index;a>0&&e.setState({index:a-1})},e}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-container"},r.a.createElement("img",{src:this.state.imageUrl[this.state.index],alt:"slider"}),r.a.createElement("button",{className:"next-btn",onClick:this.next},r.a.createElement("i",{className:"fas fa-chevron-right"})),r.a.createElement("button",{className:"prev-btn",onClick:this.prev},r.a.createElement("i",{className:"fas fa-chevron-left"})))}}]),t}(n.Component),p=t(15),E=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleChange=function(e){var a=e.target.name,t=e.target.value;n.setState(Object(p.a)({},a,t))},n.handleSubmit=function(e){e.preventDefault();var a=e.target.name,t=e.target.value,l=n.state,c=l.name,s=l.email,m=l.password,i="".errName,u="".errEmail,o="".errPass;""===c&&(i=r.a.createElement("p",null,"Name required")),""===s?u=r.a.createElement("p",null,"Email required"):s.match(/\S+@\S+\.\S+/)||(u=r.a.createElement("p",null,"Invalid email")),""===m?o=r.a.createElement("p",null,"Password required"):m.match(/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/)||(o=r.a.createElement("p",null,"Password must include ",r.a.createElement("br",null),"* minimum eight characters",r.a.createElement("br",null),"* atleast one letter and one number")),n.setState({errorName:i,errorEmail:u,errorPassword:o}),i||u||o||n.setState({success:!0}),n.setState(Object(p.a)({},a,t))},n.state={name:"",email:"",password:"",errorName:"",errorEmail:"",errorPassword:"",success:!1},n}return Object(m.a)(t,[{key:"render",value:function(){var e=this.state,a=e.success,t=e.name,n=e.email,l=e.password,c=e.errorName,s=e.errorEmail,m=e.errorPassword;return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h2",null,"Create an account"),r.a.createElement("p",{style:{display:a?"block":"none"},className:"success"},"Form submission is successful",r.a.createElement("br",null),r.a.createElement("span",null,"Name:",t),r.a.createElement("br",null),r.a.createElement("span",null,"Email:",n)),r.a.createElement("label",null,"Name:",r.a.createElement("input",{name:"name",type:"text",value:t,onChange:this.handleChange}),c),r.a.createElement("label",null,"Email:",r.a.createElement("input",{name:"email",type:"text",value:n,onChange:this.handleChange}),s),r.a.createElement("label",null,"Password:",r.a.createElement("input",{name:"password",type:"password",value:l,onChange:this.handleChange}),m),r.a.createElement("input",{type:"submit",value:"Submit"}))}}]),t}(n.Component),h=t(12),d=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={menu:!0},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this,a=this.state.menu;return r.a.createElement("header",null,r.a.createElement("nav",{style:{display:a?"none":"block"}},r.a.createElement("ul",null,r.a.createElement(h.b,{className:"links",to:"/image"},r.a.createElement("li",null,"View image")),r.a.createElement(h.b,{className:"links",to:"/signup"},r.a.createElement("li",null,"Sign up")),r.a.createElement("li",null,"Dashboard"))),r.a.createElement("button",{className:"menu-icon-btn",onClick:function(){return e.setState({menu:!a})}},r.a.createElement("i",{className:"fas fa-bars"})))}}]),t}(n.Component);var b=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h2",null,"LOGO"))},g=t(1);var v=function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"inner-container"},r.a.createElement(b,null),r.a.createElement(d,null),r.a.createElement(g.c,null,r.a.createElement(g.a,{path:"/image",component:o}),r.a.createElement(g.a,{path:"/signup",component:E}))))};c.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.b77be1d6.chunk.js.map