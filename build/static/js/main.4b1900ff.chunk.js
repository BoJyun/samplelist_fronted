(this.webpackJsonpwncform=this.webpackJsonpwncform||[]).push([[0],{132:function(e,t,n){},134:function(e,t,n){},163:function(e,t,n){},164:function(e,t,n){},165:function(e,t,n){},188:function(e,t,n){},196:function(e,t,n){},197:function(e,t,n){},263:function(e,t,n){},266:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(25),r=n.n(s),i=(n(163),n(75)),o=n(24),l=(n(164),n(22)),u=(n(165),n(20)),p=n.n(u),d=n(33),j=n(42),m=n.n(j),f=n(158),b=(n(113),function(e,t){f.a[e]({message:e,description:t,duration:3})}),h=n(3),O=c.a.createContext(),x=function(e){var t=e.children,n=c.a.useState(),a=Object(l.a)(n,2),s=a[0],r=a[1],i=c.a.useState(""),o=Object(l.a)(i,2),u=o[0],j=o[1],f=c.a.useState(null),x=Object(l.a)(f,2),v=x[0],g=x[1];c.a.useEffect((function(){null!=window.localStorage.getItem("listApp-token")&null!=window.localStorage.getItem("listApp-user")?(g("JWT "+window.localStorage.getItem("listApp-token")),j(window.localStorage.getItem("listApp-user"))):(g(null),j(""))}),[]);var w={"Content-Type":"application/json",Accept:"application/json"},k=function(){var e=Object(d.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,e.prev=1,e.next=4,m()({method:"get",url:"http://127.0.0.1:8000/samplelist/account/authentication",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:v}});case 4:n=e.sent,t=n.data,j(t.user),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),b("error","\u8a8d\u8b49\u5931\u6548"),C();case 13:return e.abrupt("return",t);case 14:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(d.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,e.prev=1,e.next=4,m()({method:"get",url:"http://127.0.0.1:8000/samplelist/mylist/api/fetchGetList",headers:{"Content-Type":"application/json",Accept:"application/json"}});case 4:n=e.sent,t=n.data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),b("error",e.t0.message);case 11:return e.abrupt("return",t);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(d.a)(p.a.mark((function e(){var t,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,e.prev=1,e.next=4,m()({method:"get",url:"http://127.0.0.1:8000/samplelist/mylist/api/fetchCompletedList",headers:{"Content-Type":"application/json",Accept:"application/json"}});case 4:n=e.sent,t=n.data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),b("error",e.t0.message);case 11:return e.abrupt("return",t);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(d.a)(p.a.mark((function e(t,n){var a,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null,e.prev=1,e.next=4,m()({method:"post",url:"http://127.0.0.1:8000/samplelist/account/login",headers:w,data:{username:t,password:n}});case 4:c=e.sent,1==(a=c.data).success?(window.localStorage.setItem("listApp-token",a.access_token),window.localStorage.setItem("listApp-user",a.user.username),j(a.user),g("JWT "+window.localStorage.getItem("listApp-token")),b("success","login success"),window.location.href="/#/inProcess"):(window.localStorage.removeItem("listApp-token"),window.location.href="/#/login"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),b("error","Login Fail"),C();case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}(),C=function(){j(""),g(null),window.localStorage.removeItem("listApp-token"),window.localStorage.removeItem("listApp-user"),window.location.href="/#/inProcess"},S=function(){var e=Object(d.a)(p.a.mark((function e(t,n){var a,c,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new FormData,c=null,a.append("name",n.name),a.append("date",n.date),a.append("num",n.num),a.append("file",n.file),a.append("project",n.project),a.append("commit",n.commit),a.append("important",n.important),a.append("complete",n.complete),a.append("product",t),e.prev=11,e.next=14,m()({method:"post",url:"http:///127.0.0.1:8000/samplelist/mylist/api/fetchUploadFile",headers:{"Content-Type":"multipart/form-data"},data:a});case 14:s=e.sent,c=s.data,e.next=21;break;case 18:throw e.prev=18,e.t0=e.catch(11),new Error(e.t0.message);case 21:return e.abrupt("return",c);case 22:case"end":return e.stop()}}),e,null,[[11,18]])})));return function(t,n){return e.apply(this,arguments)}}(),I=function(){var e=Object(d.a)(p.a.mark((function e(t,n,a,c){var s,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=null,e.prev=1,e.next=4,m()({method:"patch",url:"http://127.0.0.1:8000/samplelist/mylist/api/fetchComplete/"+t.id,headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:v},data:{done_user:n,startTime:a,endTime:c}});case 4:r=e.sent,s=r.data,e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),b("error",e.t0.message),C();case 12:return e.abrupt("return",s);case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n,a,c){return e.apply(this,arguments)}}(),E=function(){var e=Object(d.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.prev=1,e.next=4,m()({method:"delete",url:"http://127.0.0.1:8000/samplelist/mylist/api/fetchQuit/"+t,headers:w});case 4:a=e.sent,n=a.data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),b("error",e.t0.message);case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(d.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.prev=1,e.next=4,m()({method:"patch",url:"http://127.0.0.1:8000/samplelist/mylist/api/fetchUpdataData/"+t.id,headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:v},data:t});case 4:a=e.sent,n=a.data,e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),b("error",e.t0.message),C();case 12:return e.abrupt("return",n);case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(d.a)(p.a.mark((function e(t){var n,a,c,s,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null,e.prev=1,e.next=4,m()({method:"POST",url:"http://127.0.0.1:8000/samplelist/mylist/api/fetchDownloadExcel",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:v},responseType:"arraybuffer",data:t});case 4:n=e.sent,a=n.headers["content-disposition"],c=decodeURI(a.replace("attachment;filename=","")),s=window.URL.createObjectURL(new Blob([n.data])),(r=document.createElement("a")).href=s,r.setAttribute("download",c),document.body.appendChild(r),r.click(),e.next=18;break;case 15:throw e.prev=15,e.t0=e.catch(1),new Error("error : Please login or checkup the server!");case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(d.a)(p.a.mark((function e(t){var n,a,c,s,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null,e.prev=1,e.next=4,m()({method:"POST",url:"http://127.0.0.1:8000/samplelist/mylist/api/fetchDownloadFile",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:v},responseType:"arraybuffer",data:t});case 4:n=e.sent,a=n.headers["content-disposition"],c=decodeURI(a.replace("attachment;filename=","")),s=window.URL.createObjectURL(new Blob([n.data])),(r=document.createElement("a")).href=s,r.setAttribute("download",c),document.body.appendChild(r),r.click(),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(1),403==e.t0.response.status?b("error","Please login..."):b("error",e.t0.response.status),C();case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsx)(O.Provider,{value:{ToDoList:s,setToDoList:r,fetchGetList:y,fetchUploadFile:S,fetchComplete:I,fetchQuit:E,fetchUpdataData:A,fetchDownloadFile:F,account:u,fetchLogin:T,fetchLogout:C,fetchAuthentication:k,fetchCompletedList:D,fetchDownloadExcel:N},children:t})},v=function(e){var t=e.path_to,n=e.name,a=c.a.useContext(O);return Object(h.jsx)(o.a,{exact:!0,path:t,children:function(e){var c="";return"/logout"==t?(c="booklogin",Object(h.jsx)("button",{class:c,onClick:function(){a.fetchLogout()},children:n})):"/login"==t?(c="booklogin",Object(h.jsx)(i.b,{to:t,children:Object(h.jsx)("button",{class:c,children:n})})):(c="bookMark",e.match?c+=" select_bookMark":c="bookMark",Object(h.jsx)(i.b,{to:t,children:Object(h.jsx)("button",{class:c,children:n})}))}})},g=function(){var e=c.a.useContext(O),t=c.a.useState(""),n=Object(l.a)(t,2),a=n[0],s=n[1];return c.a.useEffect((function(){""!=e.account?s(e.account):s("")})),Object(h.jsxs)("div",{id:"topBlock",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)(v,{path_to:"/",name:"My Tasks"}),Object(h.jsx)(v,{path_to:"/inProcess",name:"In Process"}),Object(h.jsx)(v,{path_to:"/completed",name:"Completed"})]}),Object(h.jsx)("div",{class:"b",children:""==a?Object(h.jsx)(v,{path_to:"/login",name:"login"}):Object(h.jsx)(v,{path_to:"/logout",name:"logout"})})]})},w=n(50),k=n(14),y=(n(188),function(e){var t=e.className,n=e.inputName;return Object(h.jsxs)("div",{class:"inputName",children:[Object(h.jsx)("i",{class:t})," ",n]})}),D=function(e){var t,n,a=e.closeAdd,c=e.stateData,s=e.changeState,r=e.submitTodo,i=e.filebox,o=e.downloadfile;return c.process?(t=Object(h.jsx)("span",{class:"inputStyle",children:c.file}),n=Object(h.jsx)("button",{type:"button",class:"addButton saveButton",onClick:o,children:"FileDownload"})):(t=Object(h.jsx)("input",{name:"file",type:"file",accept:".zip,.7z",class:"inputStyle",ref:i,onChange:function(e){s(e)}}),n=Object(h.jsx)("button",{type:"button",class:"addButton saveButton",onClick:r,children:" \uff0b Save"})),Object(h.jsxs)("div",{class:"InputTasksForm",children:[Object(h.jsxs)("div",{class:"InputTask",children:[Object(h.jsx)(y,{className:"fas fa-address-card",inputName:"Project"}),Object(h.jsx)("div",{class:"inputForm",children:Object(h.jsx)("input",{name:"project",type:"text",class:"inputStyle inputProject",value:c.project,onChange:s})}),Object(h.jsx)(y,{className:"fas fa-calendar-alt",inputName:"Deadline"}),Object(h.jsx)("div",{class:"inputForm",children:Object(h.jsx)("input",{name:"date",type:"date",class:"inputStyle inputDateTime",value:c.date,onChange:s})}),Object(h.jsx)(y,{className:"fa fa-calculator",inputName:"Quantity "}),Object(h.jsx)("div",{class:"inputForm",children:Object(h.jsx)("input",{name:"num",type:"number",class:"inputStyle inputNumber",min:"1",value:c.num,onChange:s})}),Object(h.jsx)(y,{className:"fas fa-file",inputName:"File"}),Object(h.jsx)("div",{class:"inputForm",children:t}),Object(h.jsx)(y,{className:"far fa-comment-dots",inputName:"Comment"}),Object(h.jsx)("div",{class:"inputForm",children:Object(h.jsx)("textarea",{name:"commit",rows:"6",cols:"55",class:"inputStyle",value:c.commit,onChange:s})})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{type:"button",class:"addButton cancelButton",onClick:a,children:" \uff38 Cancel"}),n]})]})},T=(n(132),n(268)),C=function(e){var t=Object(a.useState)({id:"",name:"",project:"",date:"",num:1,file:"",commit:"",important:"",process:!1,complete:!1}),n=Object(l.a)(t,2),s=n[0],r=n[1],i=Object(a.useState)(!1),o=Object(l.a)(i,2),u=o[0],j=o[1],m=c.a.useContext(O);Object(a.useEffect)((function(){e.listData&&r(Object(k.a)(Object(k.a)({},e.listData),{},{process:e.process}))}),[]);var f=c.a.useRef(),b=c.a.useRef(),x=function(e){var t=e.target.value;"file"==e.target.name?t=t.substring(t.lastIndexOf("\\")+1):"complete"==e.target.name&&(t=e.target.checked,r((function(e){return Object(k.a)(Object(k.a)({},e),{},{complete:t})}))),r((function(n){return Object(k.a)(Object(k.a)({},n),{},Object(w.a)({},e.target.name,t))}))},v=function(){var t=Object(d.a)(p.a.mark((function t(n,a){var c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.fetchUploadFile(n,a);case 3:c=t.sent,alert(c.msg),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0.message);case 10:return t.prev=10,j(!1),r({id:"",name:"",project:"",date:"",num:"",file:"",commit:"",important:"",process:!1,complete:!1}),f.current.value="",e.closeAdd(),e.onSuccess(),t.finish(10);case 17:case"end":return t.stop()}}),t,null,[[0,7,10,17]])})));return function(e,n){return t.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(T.a,{tip:"Loading...",spinning:u,children:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{class:"Y"==s.important?"important inputTaskTitle":"inputTaskTitle",ref:b,children:Object(h.jsx)("input",{name:"name",type:"text",class:"taskTitle"+(s.completed?"complete":""),value:s.name,onChange:x,placeholder:"Type Your Employee ID Here\u2026"})}),Object(h.jsx)(D,{closeAdd:e.closeAdd,stateData:s,changeState:x,submitTodo:function(){""==s.name?alert("\u5f85\u8fa6\u4e8b\u9805\u540d\u7a31\u672a\u8f38\u5165\uff01"):0==f.current.files.length?alert("\u8acb\u9644\u4e0azip\u6a94"):(j(!0),v(f.current.files[0],s))},filebox:f,downloadfile:function(){m.fetchDownloadFile(s)}})]})})})},S=(n(196),function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)("input",{id:"addTask",value:" \uff0b Add Task",onClick:function(){document.getElementById("addTask").style.display="none",document.getElementById("inputTask").style.display=""},type:"button"})}),Object(h.jsx)("div",{id:"inputTask",style:{display:"none"},children:Object(h.jsx)(C,{closeAdd:function(){document.getElementById("addTask").style.display="",document.getElementById("inputTask").style.display="none"},onSuccess:e.onSuccess})})]})}),I=(n(134),function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){1==n&&c(!1)}));return Object(h.jsx)("div",{class:"InputTasksForm",children:Object(h.jsx)(S,{onSuccess:function(){c(!0)}})})}),E=(n(197),n(155),n(272)),A=n(271),N=n(269),F=function(e){var t=Object(a.useState)({listData:e.listData,important:e.listData.important,complete:e.listData.complete,editTasks:null}),n=Object(l.a)(t,2),s=n[0],r=n[1],i=Object(a.useState)(!1),o=Object(l.a)(i,2),u=o[0],p=o[1],d=Object(a.useState)(),j=Object(l.a)(d,2),m=(j[0],j[1],Object(a.useState)(!1)),f=Object(l.a)(m,2),b=f[0],x=f[1],v=c.a.useContext(O),g=c.a.useRef();Object(a.useEffect)((function(){r(Object(k.a)(Object(k.a)({},s),{},{listData:e.listData,important:e.listData.important,complete:e.listData.complete})),b&&x(!1)}),[b,e]);var w=function(t,n){var a=null;switch(t){case"complete":r(Object(k.a)(Object(k.a)({},s),{},{complete:n.target.checked}));break;case"important":""==s.important?(r(Object(k.a)(Object(k.a)({},s),{},{important:"Y"})),a="Y"):(r(Object(k.a)(Object(k.a)({},s),{},{important:""})),a="")}v.fetchUpdataData({id:s.listData.id,important:a}),e.onSuccess()},y=function(){x(!0)},D=function(){g.current.style.display="",r(Object(k.a)(Object(k.a)({},s),{},{editTasks:null}))};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{class:"listBlock",children:[Object(h.jsxs)("div",{class:"list"+("Y"==s.important?" important ":""),onClick:function(e){return function(e){-1===e.target.className.indexOf("fa-user-edit")&&-1===e.target.className.indexOf("taskChk")&&(r(Object(k.a)(Object(k.a)({},s),{},{editTasks:Object(h.jsx)(C,{listData:s.listData,closeAdd:D,changeState:w,onSuccess:y,process:!0})})),g.current.style.display="none")}(e)},ref:g,children:[Object(h.jsx)("input",{type:"text",class:" taskTitle "+(s.complete?" complete ":"")+(s.important?" important ":""),value:s.listData.name}),Object(h.jsx)("i",{class:"Y"==s.important?" fas fa-user-edit fa-lg iconImportant icon":" fas fa-user-edit fa-lg icon",onClick:function(){""!=v.account&&w("important")}}),Object(h.jsx)("input",{name:"Quit",type:"button",class:"taskChk",value:"Quit",onClick:function(){return function(t){window.confirm("\u78ba\u5b9a\u8981\u522a\u9664"+t.name+"?")&&(v.fetchQuit(t.id),e.onSuccess())}(s.listData)}}),Object(h.jsx)("input",{name:"complete",type:"button",class:"taskChk",disabled:""==v.account,value:"Complete",onClick:function(){return s.listData,void p(!0)}}),Object(h.jsxs)("div",{class:"listIcon",children:[""!=s.listData.date?Object(h.jsx)("i",{class:"far fa-calendar-alt icon"}):"",""!=s.listData.date?" ".concat(s.listData.date.substring(5).replace("-","/")," "):"",""!=s.listData.file?Object(h.jsx)("i",{class:"fas fa-file icon"}):"",""!=s.listData.commit?Object(h.jsx)("i",{class:"far fa-comment-dots icon"}):""]})]}),Object(h.jsx)("div",{children:s.editTasks})]}),Object(h.jsxs)(E.a,{title:"Complete Check",visible:u,onOk:function(){if(""!=window.document.getElementById("user").value&&""!=window.document.getElementById("StartTime").value&&""!=window.document.getElementById("EndTime").value){var t=window.document.getElementById("user").value,n=window.document.getElementById("StartTime").value,a=window.document.getElementById("EndTime").value;v.fetchComplete(s.listData,t,n,a),e.onSuccess(),p(!1)}else window.alert("All the imput is required")},onCancel:function(){p(!1)},children:[Object(h.jsx)(A.a,{label:"User",name:"user",id:"user",placeholder:"Please input the User"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)("label",{children:["Start time :  ",Object(h.jsx)(N.a,{format:"HH:mm",id:"StartTime"})]}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)("label",{children:["End time :  ",Object(h.jsx)(N.a,{format:"HH:mm",id:"EndTime"})]})]})]})},B=function(e){var t=c.a.useContext(O),n=Object(a.useState)([]),s=Object(l.a)(n,2),r=s[0],i=s[1],o=Object(a.useState)(!1),u=Object(l.a)(o,2),p=u[0],d=u[1];Object(a.useEffect)((function(){e.socket&&e.socket.current&&(e.socket.current.onmessage=function(e){console.log("socket",e.data),d(!0)})})),Object(a.useEffect)((function(){"completed"==e.page?t.fetchCompletedList().then((function(e){i(e)})):t.fetchGetList().then((function(e){i(e)}))}),[p]),Object(a.useEffect)((function(){p&&d(!1)}),[p]);var j=function(){e.socket&&e.socket.current.send(JSON.stringify({message:"changeData true"})),d(!0)},m=r.map((function(t){switch(e.page){case"inProgress":if(t.complete)return null;break;case"completed":if(!t.complete)return null}return Object(h.jsx)(F,{listData:t,onSuccess:j},t.id)}));return Object(h.jsx)("div",{children:m})},L=function(){var e=c.a.useRef(null);c.a.useEffect((function(){return e.current=new WebSocket("ws://127.0.0.1:81/samplelist/ws/mylist/"),e.current.onopen=function(){console.log("websocket link success")},e.current.onerror=function(e){console.error("WebSocket error observed:",e)},function(){e.current.close()}}),[]),c.a.useEffect((function(){setTimeout((function(){return window.location.reload()}),24e5)}),[]);return Object(h.jsx)("div",{class:"InputTasksForm",children:Object(h.jsx)(B,{page:"inProgress",socket:e})})},P=(n(263),function(e){var t=e.className,n=e.inputName;return Object(h.jsxs)("div",{class:"inputName",children:[Object(h.jsx)("i",{class:t})," ",n]})}),U=function(){var e=Object(a.useState)({startDate:"",endDate:""}),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(!1),i=Object(l.a)(r,2),o=i[0],u=i[1],j=c.a.useRef(),m=c.a.useContext(O),f=function(){s({startDate:"",endDate:""}),j.current.style.display="none"},b=function(e){s(Object(k.a)(Object(k.a)({},n),{},Object(w.a)({},e.target.id,e.target.value)))},x=function(){var e=Object(d.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.fetchDownloadExcel({startDate:n.startDate,endDate:n.endDate});case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert(e.t0.message);case 9:return e.prev=9,f(),u(!1),e.finish(9);case 13:case"end":return e.stop()}}),e,null,[[0,6,9,13]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)(T.a,{tip:"Loading...",spinning:o,children:[Object(h.jsx)("div",{class:"InputTasksForm",children:Object(h.jsx)(B,{page:"completed"})}),Object(h.jsxs)("div",{class:"InputTasksForm2",children:[Object(h.jsx)("div",{children:Object(h.jsx)("input",{id:"outputdata",value:" \uff0b Output Excel",type:"button",onClick:function(){j.current.style.display=""}})}),Object(h.jsxs)("div",{style:{display:"none"},ref:j,children:[Object(h.jsxs)("div",{class:"InputTaskData",children:[Object(h.jsx)(P,{className:"fas fa-calendar-alt",inputName:"StartDate"}),Object(h.jsx)("div",{class:"inputForm",children:Object(h.jsx)("input",{name:"date",id:"startDate",type:"date",value:n.startDate,class:"inputStyle inputDateTime",onChange:function(e){b(e)}})}),Object(h.jsx)(P,{className:"fas fa-calendar-alt",inputName:"EndDate"}),Object(h.jsx)("div",{class:"inputForm",children:Object(h.jsx)("input",{name:"date",id:"endDate",type:"date",value:n.endDate,class:"inputStyle inputDateTime",onChange:function(e){b(e)}})})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{type:"button",class:"addButton cancelButton",onClick:f,children:" \uff38 Cancel"}),Object(h.jsx)("button",{type:"button",class:"addButton saveButton",onClick:function(){""==n.startDate||""==n.endDate?alert("input startDate and endDate"):(u(!0),x())},children:" \uff0b Save"})]})]})]})]})},R=n(270),z=n(45),_=function(){var e=c.a.useContext(O);c.a.useEffect((function(){""!=e.account&&(window.location.href="/#/inProcess")}));var t=function(){return Object(h.jsxs)(R.a,{onFinish:function(t){return e.fetchLogin(t.account,t.password)},children:[Object(h.jsx)(R.a.Item,{name:"account",rules:[{required:!0,message:"\u5e33\u865f\u4e0d\u53ef\u4ee5\u7a7a\u767d!"}],children:Object(h.jsx)(A.a,{prefix:Object(h.jsx)("i",{className:"fa fa-user"}),placeholder:"\u8acb\u8f38\u5165\u5e33\u865f"})}),Object(h.jsx)(R.a.Item,{name:"password",rules:[{required:!0,message:"\u5bc6\u78bc\u4e0d\u53ef\u4ee5\u7a7a\u767d!"}],children:Object(h.jsx)(A.a.Password,{prefix:Object(h.jsx)("i",{className:"fa fa-lock"}),placeholder:"\u8acb\u8f38\u5165\u5bc6\u78bc"})}),Object(h.jsx)(R.a.Item,{className:"text-center",children:Object(h.jsx)(z.a,{type:"primary",shape:"round",htmlType:"submit",children:"\u767b\u5165"})})]})};return Object(h.jsx)("div",{className:"d-flex align-items-center vh-100",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"row justify-content-center",children:Object(h.jsx)("div",{className:"col-4 m-4 text-center font-weight-bold",style:{fontSize:"20px"},children:"Login"})}),Object(h.jsx)("div",{className:"row justify-content-center",children:Object(h.jsx)("div",{className:"col-4",children:Object(h.jsx)(t,{})})})]})})},Q=function(){return Object(h.jsxs)(i.a,{children:[Object(h.jsx)(g,{}),Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/",component:function(){return Object(h.jsx)(I,{})}}),Object(h.jsx)(o.a,{exact:!0,path:"/inProcess",component:function(){return Object(h.jsx)(L,{})}}),Object(h.jsx)(o.a,{exact:!0,path:"/completed",component:function(){return Object(h.jsx)(U,{})}}),Object(h.jsx)(o.a,{exact:!0,path:"/login",component:function(){return Object(h.jsx)(_,{})}})]})]})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,273)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};n(264),n(265);r.a.render(Object(h.jsx)(x,{children:Object(h.jsx)(Q,{})}),document.getElementById("root")),Y()}},[[266,1,2]]]);
//# sourceMappingURL=main.4b1900ff.chunk.js.map