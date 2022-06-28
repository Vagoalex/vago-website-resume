"use strict";(self.webpackChunkvago_website_resume=self.webpackChunkvago_website_resume||[]).push([[108],{108:function(t,e,o){o.r(e),o.d(e,{default:function(){return v}});var n=o(982),s=o(885),d=o(791),i=o(184),a=function(t){var e=t.todo,o=t.done;return(0,i.jsxs)("div",{className:"TodoHeader",children:[(0,i.jsx)("h2",{className:"TodoHeader__title",children:"Todo List"}),(0,i.jsxs)("div",{className:"TodoHeader-info",children:[(0,i.jsxs)("p",{className:"TodoHeader-info__desk",children:[(0,i.jsx)("span",{className:"TodoHeader-info__desk--active",children:"".concat(e," ")}),"more to do"]}),(0,i.jsxs)("p",{className:"TodoHeader-info__desk",children:[(0,i.jsx)("span",{className:"TodoHeader-info__desk--active",children:"".concat(o," ")}),"done"]})]})]})},r=[{id:1,label:"All"},{id:2,label:"Active"},{id:3,label:"Done"}],l=function(t){var e=t.status,o=t.statusFilter;return(0,i.jsx)("div",{className:"TodoSearchPanel",children:r.map((function(t){var n=t.id,s=t.label;return(0,i.jsx)("button",{className:e===s?"TodoSearchPanel__btn TodoSearchPanel__btn--active":"TodoSearchPanel__btn","data-status":s,onClick:function(t){return o(t.target.getAttribute("data-status"))},children:s},n)}))})},c=o(942),u=o(413),m=o(255),f=o(295),x=function(t){var e=t.id,o=t.index,n=t.text,s=t.important,d=t.done,a=t.removeTodoItem,r=t.onToggleValue;return(0,i.jsxs)("li",{className:s?"TodoListItem TodoListItem--important":"TodoListItem",style:d?{border:"1px solid rgb(9, 255, 0)",color:"rgb(9, 255, 0)"}:null,children:[(0,i.jsxs)("p",{className:d?"TodoListItem__text TodoListItem__text--done":"TodoListItem__text",onClick:function(){return r(e,"done")},children:[" ",(0,i.jsx)("span",{className:d?"TodoListItem__index TodoListItem__index--done":"TodoListItem__index",children:" ".concat(o+1," ")}),n]}),(0,i.jsxs)("div",{className:"TodoListItem-buttons",children:[(0,i.jsx)("button",{className:"TodoListItem-buttons-btn TodoListItem-buttons-btn-delete",onClick:function(){return a(e)},id:e}),(0,i.jsx)("button",{onClick:function(){return r(e,"important")},className:"TodoListItem-buttons-btn TodoListItem-buttons-btn-important"})]})]})},T=function(t){var e=t.todoList,o=t.setTodoList,s=function(t){o((0,n.Z)(e.filter((function(e){return e.id!==t}))))},d=function(t,s){var d=e.findIndex((function(e){return e.id===t})),i=e[d],a=(0,u.Z)((0,u.Z)({},i),{},(0,c.Z)({},s,!i[s]));o([].concat((0,n.Z)(e.slice(0,d)),[a],(0,n.Z)(e.slice(d+1))))};return(0,i.jsx)("div",{className:"TodoList",children:(0,i.jsx)(m.Z,{component:"ul",className:"TodoList-list",children:e.map((function(t,e){return(0,i.jsx)(f.Z,{timeout:500,classNames:"item-transition",children:(0,i.jsx)(x,(0,u.Z)({removeTodoItem:s,onToggleValue:d,index:e},t),t.id)},t.id)}))})})},h=o(506),b=function(t){var e={};return t.todo?t.todo.length<4&&(e.todo="\u041c\u0438\u043d\u0438\u043c\u0443\u043c 4 \u0441\u0438\u043c\u0432\u043e\u043b\u0430."):e.todo="\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0434\u0435\u043b\u043e!",e},_=function(t){var e=t.addTodoItem,o=(0,h.TA)({initialValues:{todo:""},validate:b,onSubmit:function(t,n){var s=n.resetForm;e(t),s(o.initialValues)}});return(0,i.jsxs)("form",{className:"TodoAddForm",onSubmit:o.handleSubmit,children:[(0,i.jsx)("input",{id:"todo",name:"todo",type:"text",className:"TodoAddForm__input",placeholder:"What needs to be done?",value:o.values.todo,onChange:o.handleChange,onBlur:o.handleBlur}),(0,i.jsx)("button",{type:"submit",className:"TodoAddForm__btn",children:"Add"}),o.touched.todo&&o.errors.todo?(0,i.jsx)("div",{className:"TodoAddForm-error",children:o.errors.todo}):null]})},v=function(){var t=(0,d.useState)([{id:1,text:"\u0421\u0434\u0435\u043b\u0430\u0439 \u0447\u0435\u0440\u0442\u043e\u0432 \u0442\u0443\u0434\u0443 \u043b\u0438\u0441\u0442, \u0441\u0440\u043e\u0447\u043d\u043e! \u042f \u0443\u0441\u0442\u0430\u043b \u0436\u0434\u0430\u0442\u044c!",important:!1,done:!0},{id:2,text:"\u041f\u043e\u043f\u0438\u0442\u044c \u043f\u0438\u0432\u043a\u0430 \u0434\u043b\u044f \u0440\u044b\u0432\u043a\u0430!",important:!0,done:!1}]),e=(0,s.Z)(t,2),o=e[0],r=e[1],c=(0,d.useState)([]),u=(0,s.Z)(c,2),m=u[0],f=u[1],x=(0,d.useState)("All"),h=(0,s.Z)(x,2),b=h[0],v=h[1],j=(0,d.useState)(null),p=(0,s.Z)(j,2),N=p[0],L=p[1],I=(0,d.useState)(null),Z=(0,s.Z)(I,2),g=Z[0],k=Z[1],S=(0,d.useState)(3),A=(0,s.Z)(S,2),C=A[0],F=A[1];(0,d.useEffect)((function(){L(o.length-g)}),[o,g]),(0,d.useEffect)((function(){k(o.filter((function(t){return t.done})).length)}),[o]),(0,d.useEffect)((function(){f(o)}),[o]);var H=function(t){switch(t){case"All":default:f(o);break;case"Active":f(o.filter((function(t){return!t.done})));break;case"Done":f(o.filter((function(t){return t.done})))}};return(0,i.jsx)("div",{className:"Todo",children:(0,i.jsx)("div",{className:"Todo-wrapper",children:(0,i.jsxs)("div",{className:"Todo-container",children:[(0,i.jsx)(a,{todo:N,done:g}),(0,i.jsx)(l,{statusFilter:function(t){v(t),H(t)},todoList:o,status:b}),(0,i.jsx)(T,{todoList:m,status:b,setTodoList:r}),(0,i.jsx)(_,{addTodoItem:function(t){var e=t.todo;r([].concat((0,n.Z)(o),[{id:C,text:e,important:!1,done:!1}])),F(C+1)}})]})})})}}}]);
//# sourceMappingURL=108.c5017c9c.chunk.js.map