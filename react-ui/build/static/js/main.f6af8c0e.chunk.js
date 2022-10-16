(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{34:function(e,t,r){},42:function(e,t,r){},43:function(e,t,r){},45:function(e,t,r){},71:function(e,t,r){},72:function(e,t,r){},73:function(e,t,r){},74:function(e,t,r){"use strict";r.r(t);var a=r(1),s=r(35),n=r.n(s),o=(r(42),r(2)),i=r(3),c=r(4),l=r(5),d=r(6),j=(r(43),r(13)),h=r(7),u=r.n(h),b=r(9),m=(r(45),r(10)),p=r.n(m),O=r(0),x=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(o.a)(this,r);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={isLoggedIn:!1},e.componentDidMount=function(){p.a.get("/check/login",{withCredentials:!0}).then((function(t){200===t.status&&e.setState({isLoggedIn:!0})})).catch((function(e){return console.log(e)}))},e.handleLogout=Object(j.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("/api/logout").then((function(t){e.setState({isLoggedIn:!1})})).catch((function(e){return console.log(e)}));case 2:case"end":return t.stop()}}),t)}))),e}return Object(i.a)(r,[{key:"render",value:function(){return Object(O.jsx)("header",{children:Object(O.jsxs)("nav",{className:"navbar",children:[Object(O.jsxs)("ul",{id:"menu-left",children:[Object(O.jsx)("li",{children:Object(O.jsx)(b.b,{to:"/",children:"Logo"})}),Object(O.jsx)("li",{children:Object(O.jsx)(b.b,{to:"/",children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)(b.b,{to:"/about",children:"About"})})]}),Object(O.jsx)("p",{children:"The Book Recommender Website"}),Object(O.jsx)("ul",{id:"menu-right",children:this.state.isLoggedIn?Object(O.jsxs)("div",{id:"username",children:[Object(O.jsx)("li",{children:this.state.username}),Object(O.jsx)("li",{onClick:this.handleLogout,children:"Logout"})]}):Object(O.jsxs)("div",{children:[Object(O.jsx)("li",{children:Object(O.jsx)(b.b,{to:"/register",children:"Register"})}),Object(O.jsx)("li",{children:Object(O.jsx)(b.b,{to:"/login",children:"Sign In"})})]})})]})})}}]),r}(a.Component),g=r(19),f=(r(71),r.p+"static/media/book1.8291d14e.jpg"),v=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(e){var a;return Object(o.a)(this,r),(a=t.call(this,e)).state={title:a.props.title,author:a.props.author,bookURL:a.props.cover_url,goodreads_rating:a.props.goodreads_rating,class_name:a.props.class_name},a}return Object(i.a)(r,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"book-block",children:Object(O.jsxs)(b.b,{to:"/dt/".concat(this.props.id,"/").concat(this.props.book_section),children:[Object(O.jsx)("img",{alt:"imagcia",src:this.state.bookURL?this.state.bookURL:f}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:this.state.title}),Object(O.jsx)("h4",{children:this.state.author}),Object(O.jsx)("p",{children:"Stars  ("+this.state.goodreads_rating.$numberDecimal+"/5)"})]})]})})}}]),r}(a.Component),_=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(e){var a;return Object(o.a)(this,r),(a=t.call(this,e)).changeSlides=function(e,t){var r={start_index:a.state.start_index,slide_size:a.state.slide_size},s=null;"prev"===e&&(s=function(e,t,r){return t.start_index-e<=0?0:t.start_index-e}(t,r,a.state.arr.data.length)),"next"===e&&(s=function(e,t,r){return t.start_index+t.slide_size>=r?0:t.start_index+e}(t,r,a.state.arr.data.length)),a.setState({start_index:s})},a.componentDidMount=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/get/books",{params:{name:a.props.name}}).then((function(e){var t=e.data;a.setState({arr:t,loading:!1})})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)}))),a.state={arr:[],loading:!0,start_index:0,slide_size:6},a.changeSlides=a.changeSlides.bind(Object(g.a)(a)),a}return Object(i.a)(r,[{key:"render",value:function(){var e=this;return Object(O.jsxs)("div",{className:"products-wrapper",children:[Object(O.jsx)("h2",{id:"title",children:this.props.title}),Object(O.jsxs)("div",{className:"items",children:[Object(O.jsx)("button",{className:"side-icons",id:"left_bt",onClick:function(){e.changeSlides("prev",1)},children:"\xab"}),Object(O.jsx)("button",{className:"side-icons",id:"right_bt",onClick:function(){e.changeSlides("next",1)},children:"\xbb"}),this.state.loading?Object(O.jsx)(O.Fragment,{children:"Loading...."}):this.state.arr.data?this.state.arr.data.slice(this.state.start_index,this.state.start_index+this.state.slide_size).map((function(t){return Object(O.jsx)(v,{id:t._id,title:t.title,author:t.author,cover_url:t.cover_url,goodreads_rating:t.goodreads_rating,book_section:e.props.name},t._id)})):Object(O.jsx)(O.Fragment,{children:"Loading...."})]})]})}}]),r}(a.Component),w=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"body",children:[Object(O.jsx)(x,{}),Object(O.jsx)(N,{}),Object(O.jsx)(k,{}),Object(O.jsx)(y,{})]})}}]),r}(a.Component),N=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return Object(O.jsx)("div",{id:"search-bar"})}}]),r}(a.Component),k=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return Object(O.jsxs)("main",{className:"products",children:[Object(O.jsx)("nav",{className:"list-options",children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Most Rated Books"}),Object(O.jsx)("li",{children:"Best Selling Books"}),Object(O.jsx)("li",{children:"New Arrivals"})]})}),Object(O.jsx)(_,{title:"Most Rated Books",name:"MostRated"}),Object(O.jsx)(_,{title:"Best Selling Products",name:"BestSelling"}),Object(O.jsx)(_,{title:"New Products",name:"NewBooks"})]})}}]),r}(a.Component),y=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return Object(O.jsx)("footer",{children:"Created By Shubham Jain"})}}]),r}(a.Component),S=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(x,{}),Object(O.jsx)("h1",{children:"Hello From /about"})]})}}]),r}(a.Component),C=S,E=r(20);r(34),r(72);function L(){return Object(O.jsx)("footer",{children:"Created By Shubham Jain"})}var I=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(e){var a;return Object(o.a)(this,r),(a=t.call(this,e)).handleInputChange=function(e){var t=e.target.value,r=e.target.name;a.setState(Object(E.a)({},r,t))},a.handleErrors=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""===a.state.firstName?a.setState({firstName_error:"First name can't be empty"}):a.state.firstName<=4?a.setState({firstName_error:"First name must have atleast 5 letters."}):a.setState({firstName_error:"No error"}),""===a.state.lastName?a.setState({lastName_error:"Last name can't be empty"}):a.state.lastName<=4?a.setState({lastName_error:"Last name must have atleast 5 letters."}):a.setState({lastName_error:"No error"}),""===a.state.email?a.setState({email_error:"Email can't be empty"}):new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(a.state.email)?a.setState({email_error:"No error"}):a.setState({email_error:"Enter a valid email."}),""===a.state.password?a.setState({password_error:"Password can't be empty"}):new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(a.state.password)?a.setState({password_error:"No error"}):a.setState({password_error:"Enter a valid password."});case 4:case"end":return e.stop()}}),e)}))),a.register=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p.a.post("/api/register",{first_name:a.state.firstName,last_name:a.state.lastName,email_id:a.state.email,password:a.state.password},{withCredentials:!0}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)}))),a.handleSubmit=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a.handleErrors();case 3:if("No error"!==a.state.firstName_error||"No error"!==a.state.lastName_error||"No error"!==a.state.email_error||"No error"!==a.state.password_error){e.next=7;break}return console.log("Format ok"),e.next=7,a.register();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={redirect:null,email:"",password:"",firstName:"",lastName:"",email_error:"",password_error:"",lastName_error:"",firstName_error:""},a}return Object(i.a)(r,[{key:"componentDidMount",value:function(){p.a.get("/check").then((function(e){console.log(e.data.msg)})).catch((function(e){console.log(e.message),e.message.includes("status code 500")&&console.log("Backend Server is closed")})),p.a.get("/check/login",{withCredentials:!0}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return this.state.redirect?Object(O.jsx)(d.a,{to:this.state.redirect}):Object(O.jsxs)("div",{children:[Object(O.jsx)(x,{}),Object(O.jsxs)("div",{className:"body-c",children:[Object(O.jsx)("div",{id:"form-container",children:Object(O.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(O.jsx)("h2",{children:"Register"}),Object(O.jsx)("h3",{children:"First Name"}),Object(O.jsx)("input",{name:"firstName",value:this.state.firstName,type:"text",onChange:this.handleInputChange,placeholder:"Enter First name",className:"form-input"}),"No error"!==this.state.firstName_error?Object(O.jsx)("p",{id:"errors",children:this.state.firstName_error}):Object(O.jsx)(O.Fragment,{}),Object(O.jsx)("h3",{children:"Last Name"}),Object(O.jsx)("input",{name:"lastName",value:this.state.lastName,type:"text",onChange:this.handleInputChange,placeholder:"Enter Last name",className:"form-input"}),"No error"!==this.state.lastName_error?Object(O.jsx)("p",{id:"errors",children:this.state.lastName_error}):Object(O.jsx)(O.Fragment,{}),Object(O.jsx)("h3",{children:"Email"}),Object(O.jsx)("input",{name:"email",value:this.state.email,type:"text",onChange:this.handleInputChange,placeholder:"Enter Email",className:"form-input"}),"No error"!==this.state.email_error?Object(O.jsx)("p",{id:"errors",children:this.state.email_error}):Object(O.jsx)(O.Fragment,{}),Object(O.jsx)("h3",{children:"Password"}),Object(O.jsx)("input",{name:"password",value:this.state.password,type:"text",onChange:this.handleInputChange,placeholder:"Enter Password",className:"form-input"}),"No error"!==this.state.password_error?Object(O.jsx)("p",{id:"errors",children:this.state.password_error}):Object(O.jsx)(O.Fragment,{}),Object(O.jsx)("button",{id:"button",type:"submit",onClick:this.handleSubmit,children:"Register"}),Object(O.jsxs)("h4",{children:["Already have an account?"," ",Object(O.jsx)(b.b,{to:"/login",children:"Sign In here"})]})]})}),Object(O.jsx)("div",{id:"side-image"})]}),Object(O.jsx)(L,{})]})}}]),r}(a.Component),F=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(e){var a;return Object(o.a)(this,r),(a=t.call(this,e)).handleInputChange=function(e){var t=e.target.value,r=e.target.name;a.setState(Object(E.a)({},r,t))},a.handleErrors=Object(j.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""===a.state.email?a.setState({email_error:"Email can't be empty"}):new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(a.state.email)?(console.log("Email ok"),a.setState({email_error:"No error"})):a.setState({email_error:"Enter a valid email."}),""===a.state.password?a.setState({password_error:"Password can't be empty"}):new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(a.state.password)?(console.log("Password ok"),a.setState({password_error:"No error"})):a.setState({password_error:"Enter a valid password."});case 2:case"end":return e.stop()}}),e)}))),a.loginUser=function(){p.a.post("/api/login",{email_id:a.state.email,password:a.state.password},{withCredentials:!0}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},a.handleSubmit=function(){var e=Object(j.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a.handleErrors();case 3:"No error"===a.state.email_error&&"No error"===a.state.password_error&&console.log("Format is ok");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={redirect:null,email:"",password:"",email_error:"",password_error:""},a}return Object(i.a)(r,[{key:"componentDidMount",value:function(){p.a.get("/check/login",{withCredentials:!0}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return this.state.redirect?Object(O.jsx)(d.a,{to:this.state.redirect}):Object(O.jsxs)("div",{children:[Object(O.jsx)(x,{}),Object(O.jsxs)("div",{className:"body-c",children:[Object(O.jsx)("div",{id:"form-container",children:Object(O.jsxs)("form",{id:"register-form",onSubmit:this.handleSubmit,children:[Object(O.jsx)("h2",{children:"Login"}),Object(O.jsx)("h3",{children:"Email"}),Object(O.jsx)("input",{name:"email",value:this.state.email,type:"text",onChange:this.handleInputChange,placeholder:"Enter Email",className:"form-input"}),"No error"!==this.state.email_error?Object(O.jsx)("p",{id:"errors",children:this.state.email_error}):Object(O.jsx)(O.Fragment,{}),Object(O.jsx)("h3",{children:"Password"}),Object(O.jsx)("input",{name:"password",value:this.state.password,type:"text",onChange:this.handlePassword,placeholder:"Enter Password",className:"form-input"}),"No error"!==this.state.password_error?Object(O.jsx)("p",{id:"errors",children:this.state.email_error}):Object(O.jsx)(O.Fragment,{}),Object(O.jsx)("button",{id:"button",type:"submit",onClick:this.handleSubmit,children:"Login"}),Object(O.jsxs)("h4",{children:["Doesn't have an account? ",Object(O.jsx)(b.b,{to:"/register",children:"Sign up here"})]})]})}),Object(O.jsx)("div",{id:"side-image"})]}),Object(O.jsx)(L,{})]})}}]),r}(a.Component),R=(r(73),function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){var e;Object(o.a)(this,r);for(var a=arguments.length,s=new Array(a),n=0;n<a;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={book_data:null,loading:!0},e.componentDidMount=Object(j.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.props),t.next=3,p.a.get("/api/get/details",{params:{id:e.props.match.params.bookId,name:e.props.match.params.bookSection}}).then((function(t){var r=t.data;e.setState({book_data:r.data,loading:!1})})).catch((function(e){console.log(e)}));case 3:case"end":return t.stop()}}),t)}))),e}return Object(i.a)(r,[{key:"render",value:function(){var e,t,r,a;return Object(O.jsxs)("div",{className:"bookDetail",children:[Object(O.jsx)(x,{}),Object(O.jsxs)("main",{className:"main",children:[Object(O.jsxs)("section",{className:"bookCover",children:[Object(O.jsx)("img",{alt:"Book Cover",src:null===(e=this.state.book_data)||void 0===e?void 0:e.cover_url}),this.state.loading?Object(O.jsx)(O.Fragment,{}):Object(O.jsx)(B,{book_data:this.state.book_data})]}),Object(O.jsxs)("section",{className:"authorInfo",children:[Object(O.jsx)("div",{className:"dummy_text",children:("About "+(null===(t=this.state.book_data)||void 0===t?void 0:t.author)).toUpperCase()}),Object(O.jsxs)("div",{className:"author_details",children:[Object(O.jsx)("img",{src:"https://s.gr-assets.com/assets/nophoto/user/f_111x148-8060b12280b2aec7543bafb574ee8422.png",className:"author-profile",alt:"Imagination"}),Object(O.jsx)("p",{children:null===(r=this.state.book_data)||void 0===r?void 0:r.author})]}),Object(O.jsx)("p",{children:null===(a=this.state.book_data)||void 0===a?void 0:a.author_works})]})]})]})}}]),r}(a.Component)),B=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){var e=this.props.book_data,t=e.title,r=e.small_title,a=e.author,s=e.goodreads_rating,n=e.total_ratings,o=e.summary;return Object(O.jsxs)("div",{className:"book-data",children:[console.log(this.props),Object(O.jsx)("h2",{children:t}),Object(O.jsx)("p",{className:"small_title",children:"("+r+")"}),Object(O.jsxs)("p",{className:"author_name",children:["by ",a]}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"Stars ("+s.$numberDecimal+"/5)"}),Object(O.jsx)("li",{children:"Ratings ("+n+")"})]}),Object(O.jsx)("p",{id:"description",children:o})]})}}]),r}(a.Component),A=function(e){Object(c.a)(r,e);var t=Object(l.a)(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return Object(O.jsxs)(d.d,{children:[Object(O.jsx)(d.b,{exact:!0,path:"/",component:w}),Object(O.jsx)(d.b,{path:"/about",component:C}),Object(O.jsx)(d.b,{path:"/register",component:I}),Object(O.jsx)(d.b,{path:"/login",component:F}),Object(O.jsx)(d.b,{path:"/dt/:bookId/:bookSection",component:R})]})}}]),r}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(Object(O.jsx)(b.a,{children:Object(O.jsx)(A,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[74,1,2]]]);
//# sourceMappingURL=main.f6af8c0e.chunk.js.map