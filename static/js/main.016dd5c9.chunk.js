(this["webpackJsonpflash-cards"]=this["webpackJsonpflash-cards"]||[]).push([[0],{42:function(e,t,c){},43:function(e,t,c){},53:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(28),r=c.n(s),o=(c(42),c(43),c(20)),i=c(6),d=c(8),l=c(23),u=c(58),b="deckState",m=function(e){var t=window.localStorage.getItem(e);return t?JSON.parse(t):null},j=c(1),h=Object(n.createContext)(null),f="newDeck",x="editDeck",p="deleteDeck",O="newCard",g="updateCard",v="deleteCard",k=function(e){var t={front:e.front,back:e.back,id:Object(u.a)()};return console.log(t),t},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Untitled Deck",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default description",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return{name:e,description:t,id:Object(u.a)(),cards:c}},y=function(e,t){switch(console.log("deck reducer"),t.type){case O:return console.log("adding a card"),Object(l.a)(e.map((function(e){if(t.cardBones){if(e.id===t.deckId)return{name:e.name,description:e.description,id:e.id,cards:[].concat(Object(l.a)(e.cards),[k({front:t.cardBones.front,back:t.cardBones.back})])}}else console.log("no 'CardBones' cardBones");return e})));case g:return t.cardId?(console.log("Updating this card: ",t.cardId),Object(l.a)(e.map((function(e){return e.id===t.deckId?{name:e.name,description:e.description,id:e.id,cards:e.cards.map((function(e){return e.id===t.cardId&&t.cardBones&&(e.front=t.cardBones.front,e.back=t.cardBones.back),e}))}:(console.log("no deck with that ID found"),e)})))):(console.log("cardId must be provided"),e);case v:return t.cardId?(console.log("Deleting this card: ",t.cardId),Object(l.a)(e.map((function(e){return console.log("Im logging from inside a function"),console.log(e.cards.filter((function(e){return!0}))),e.id===t.deckId?{name:e.name,description:e.description,id:e.id,cards:e.cards.filter((function(e){return e.id!==t.cardId}))}:(console.log("no deck with that ID found"),e)})))):(console.log("no cardId provided"),e);case f:return t.deckBones&&""!==t.deckBones.name.trim()?[].concat(Object(l.a)(e),[w(t.deckBones.name,t.deckBones.description)]):(console.log("no infomation to create new deck"),e);case x:return t.deckBones&&""!==t.deckBones.name.trim()?e.map((function(e){return e.id===t.deckId&&t.deckBones&&(e.name=t.deckBones.name,e.description=t.deckBones.description),e})):(console.log("no infomation to create new deck"),e);case p:return e.filter((function(e){return e.id!==t.deckId}));default:return e}},N=m(b)?m(b):[w("Tutorial","Learn how to use FlashCard.Monster - Click here!",[k({front:"### Welcome to Flash Card Monster",back:"### the fastest way to make flash cards for studdying and memory recall."}),k({front:"### Flash Card Monster makes it easy to create flash cards",back:""}),k({front:"### Create new flash card decks!",back:"### Click \u201c+ Add Deck\u201d to get started."}),k({front:"### Create and organize your flash cards",back:"### Click \u201c+ Add Card\u201d to create new cards. Don't worry, you can leave and come back, your work will still be here!"}),k({front:"### When it\u2019s time to start studying, click \u201cPlay\u201d to review your flash cards one at a time.",back:"### Navigate back to your decks at any time by clicking the Logo."})])],C=function(e){var t=Object(n.useReducer)(y,N),c=Object(d.a)(t,2),a=c[0],s=c[1];return Object(n.useEffect)((function(){var e,t;e=b,t=a,window.localStorage.setItem(e,JSON.stringify(t))}),[a]),Object(j.jsx)(h.Provider,{value:{deckState:a,deckContextDispatch:s},children:e.children})},S=c(55),I=c(11);function D(){for(var e=arguments.length,t=new Array(e),c=0;c<e;c++)t[c]=arguments[c];return t.filter(Boolean).join(" ")}function B(){var e=[{name:"Decks",href:"/",current:function(){return"/"===t}}],t=Object(i.f)().pathname,c=Object(i.e)();return Object(j.jsx)(S.a,{as:"nav",id:"nav",className:"bg-gray-800",children:function(t){var n=t.open;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",children:Object(j.jsxs)("div",{className:"relative flex items-center justify-between h-16",children:[Object(j.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden",children:Object(j.jsxs)(S.a.Button,{className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",children:[Object(j.jsx)("span",{className:"sr-only",children:"Open main menu"}),n?Object(j.jsx)(I.i,{className:"block h-6 w-6","aria-hidden":"true"}):Object(j.jsx)(I.e,{className:"block h-6 w-6","aria-hidden":"true"})]})}),Object(j.jsxs)("div",{className:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",children:[Object(j.jsx)("div",{className:"flex-shrink-0 flex items-center",children:Object(j.jsx)("div",{className:"cursor-pointer",onClick:function(){c.push("/")},children:Object(j.jsx)("span",{className:" h-8 w-auto text-white font-bold",children:"www.FlashCard.Monster"})})}),Object(j.jsx)("div",{className:"hidden sm:block sm:ml-6"})]})]})}),Object(j.jsx)(S.a.Panel,{className:"sm:hidden",children:Object(j.jsx)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:e.map((function(e){return Object(j.jsx)("a",{href:e.href,className:D(e.current()?"bg-gray-900 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block px-3 py-2 rounded-md text-base font-medium"),"aria-current":e.current()?"page":void 0,children:e.name},e.name)}))})})]})}})}var M=c(56),E=c(59),F=c(57),A={DANGOR:{default:"bg-red-600",hover:"hover:bg-red-700",ring:"focus:ring-red-500"},PRIMARY:{default:"bg-blue-600",hover:"hover:bg-blue-700",ring:"focus:ring-blue-500"},SUCCESS:{default:"bg-green-600",hover:"hover:bg-green-700",ring:"focus:ring-green-500"},WARNING:{default:"bg-yellow-600",hover:"hover:bg-yellow-700",ring:"focus:ring-yellow-500"}};function T(e){var t=e.open,c=e.handleClose,a=Object(n.useRef)(null);return Object(j.jsx)(E.a.Root,{show:t,as:n.Fragment,children:Object(j.jsx)(F.a,{as:"div",static:!0,className:"fixed z-10 inset-0 overflow-y-auto",initialFocus:a,open:t,onClose:function(){return c()},children:Object(j.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[Object(j.jsx)(E.a.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(j.jsx)(F.a.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),Object(j.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),Object(j.jsx)(E.a.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:Object(j.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[Object(j.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:Object(j.jsx)("div",{className:"",children:Object(j.jsxs)("div",{className:"mt-3 text-center sm:mt-0 sm:mx-4 sm:text-left",children:[Object(j.jsx)(F.a.Title,{as:"h3",className:"text-lg leading-6 font-medium text-gray-900",children:e.title}),Object(j.jsx)("div",{className:"mt-2",children:Object(j.jsx)("div",{className:"text-sm text-gray-500",children:e.content})})]})})}),Object(j.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[Object(j.jsx)("button",{type:"button",className:" w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 ".concat(e.submit.theme.default," text-base font-medium text-white ").concat(e.submit.theme.hover," focus:outline-none focus:ring-2 focus:ring-offset-2 ").concat(e.submit.theme.ring," sm:ml-3 sm:w-auto sm:text-sm"),onClick:function(){e.submit.action(),c()},children:e.submit.label}),Object(j.jsx)("button",{type:"button",className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){return c()},ref:a,children:"Cancel"})]})]})})]})})})}function R(e){var t=Object(n.useState)(!1),c=Object(d.a)(t,2),a=c[0],s=c[1];Object(n.useEffect)((function(){e.show?s(!0):s(!1)}),[e.show]);return Object(j.jsx)(T,{open:a,handleClose:function(){s(!1),e.updateShowState(!1)},title:e.title,content:e.children?e.children:Object(j.jsx)(j.Fragment,{}),submit:{label:e.submitButtonText||"Submit",theme:A.SUCCESS,action:e.submitAction},cancel:null})}function L(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),c=t[0],a=t[1];return{showModal:c,setShowModal:a,handleModalClose:function(){a(!1)}}}var z=c(31);function P(e){var t=(null===e||void 0===e?void 0:e.label)?e.label:"",c=(null===e||void 0===e?void 0:e.placeholder)?e.placeholder:"",n=(null===e||void 0===e?void 0:e.id)?e.id:"",a=e.autocomplete?"on":"off",s=e.value?e.value:"";return Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:n,className:"block text-sm font-medium text-gray-700",children:t}),Object(j.jsx)("input",{onChange:e.inputOnChange,type:"text",id:n,autoComplete:a,className:"focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-8 sm:text-sm border-gray-300 rounded-md",placeholder:c,value:s})]})}function U(e){var t=Object(n.useContext)(h),c=t.deckState,a=t.deckContextDispatch,s=Object(n.useState)({name:e.name||"",description:e.description||""}),r=Object(d.a)(s,2),o=r[0],i=r[1];Object(n.useEffect)((function(){if(e.deckId){var t=c.find((function(t){return t.id===e.deckId})),n=t.name,a=t.description;i({name:n,description:a})}}),[c,e.deckId]);var l=function(e){var t=Object(z.a)({},o);switch(e.target.id){case"deck-name":t.name=e.target.value,i(t);break;case"description":t.description=e.target.value,i(t)}};return Object(j.jsxs)("form",{id:"add-deck",name:"add-deck",onSubmit:function(t){return t.preventDefault(),t.stopPropagation(),e.deckId?a({type:x,deckBones:o,deckId:e.deckId}):a({type:f,deckBones:o}),!1},children:[Object(j.jsx)(P,{id:"deck-name",label:"Deck Name",placeholder:"",inputOnChange:l,value:o.name}),Object(j.jsx)(P,{id:"description",label:"Description",placeholder:"",inputOnChange:l,value:o.description})]})}var G=function(){document.getElementById("add-deck").dispatchEvent(new Event("submit",{cancelable:!0,bubbles:!0}))};function Y(e){var t=e.deck,c=Object(n.useContext)(h).deckContextDispatch,a=Object(i.e)();function s(e){a.push("/deck-view/".concat(e))}var r=L(),o=r.showModal,d=r.setShowModal,l=r.handleModalClose;return Object(j.jsxs)("div",{className:"mx-2 my-2 p-4 border w-72 inline-block rounded-lg cursor-pointer relative hover:shadow",onClick:function(e){e.target===e.currentTarget&&s(t.id)},children:[Object(j.jsx)(R,{title:"Edit Deck",show:o,submitAction:G,updateShowState:l,submitButtonText:"Update Deck",children:Object(j.jsx)(U,{deckId:t.id})}),Object(j.jsx)(M.a,{className:"relative",children:function(e){var n=e.open;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(M.a.Button,{className:"float-right rounded-lg",children:Object(j.jsx)(I.d,{className:"h-6 text-gray-600"})}),Object(j.jsx)(M.a.Overlay,{className:"".concat(n?"opacity-0 fixed inset-0":"opacity-0"," bg-black")}),Object(j.jsxs)(M.a.Panel,{className:"absolute z-10 w-auto right-0 top-0 rounded-md border border-gray-300 shadow-md px-2 py-2 bg-white text-base",children:[Object(j.jsxs)("button",{onClick:function(){console.log("Edit button was pressed"),d(!0)},className:"text-gray-600 px-2 py-1 mb-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-75 hover:bg-gray-100 flex",children:[Object(j.jsx)("span",{className:"pr-2",children:Object(j.jsx)(I.f,{className:"w-6"})}),"Edit"]}),Object(j.jsxs)("button",{onClick:function(){console.log("Deleting deck"),c({type:p,deckId:t.id})},className:"text-red-600 px-2 py-1 mb-1 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-75 hover:bg-red-100 flex",children:[Object(j.jsx)("span",{className:"pr-2",children:Object(j.jsx)(I.h,{className:"w-6"})}),"Delete"]})]})]})}}),Object(j.jsxs)("div",{onClick:function(){s(t.id)},children:[Object(j.jsx)("p",{className:"text-xl",children:t.name}),Object(j.jsxs)("p",{className:"text-sm text-gray-600 mb-2",children:[t.cards.length," cards"]}),Object(j.jsx)("p",{children:t.description?t.description:"\u200a"})]})]})}function J(e){var t=e.size?e.size:W.MEDIUM,c=e.theme?e.theme:H.PRIMARY;return Object(j.jsx)("button",{onClick:e.onClick,className:"".concat(c.default," ").concat(c.hover," ").concat(c.ring," ").concat(t," ").concat(e.className),children:e.children})}var W={SMALL:"px-4 py-1 rounded",MEDIUM:"px-4 py-3 rounded-md",LARGE:"px-6 py-4 rounded-lg"},H={DANGOR:{default:"text-white bg-red-600",hover:"hover:bg-red-700",ring:"focus:ring-red-500"},PRIMARY:{default:"text-white bg-blue-600",hover:"hover:bg-blue-700",ring:"focus:ring-blue-500"},SUCCESS:{default:"text-white bg-green-600",hover:"hover:bg-green-700",ring:"focus:ring-green-500"},WARNING:{default:"text-white bg-yellow-600",hover:"hover:bg-yellow-700",ring:"focus:ring-yellow-500"}};function Q(e){return Object(j.jsx)("div",{className:"p-4",children:e.children})}function $(e){var t,c,n=L(),a=n.showModal,s=n.setShowModal,r=n.handleModalClose;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(R,{title:"Add Deck",show:a,submitAction:G,updateShowState:r,submitButtonText:"Add Deck",children:Object(j.jsx)(U,{})}),Object(j.jsx)(J,{onClick:function(){s(!0)},size:null===(t=e.button)||void 0===t?void 0:t.size,theme:null===(c=e.button)||void 0===c?void 0:c.theme,children:"+ Add Deck"})]})}function q(){var e=Object(n.useContext)(h).deckState;return Object(j.jsxs)(Q,{children:[Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)("h1",{className:"text-xl mb-4 mr-4 inline",children:"Decks"}),Object(j.jsx)($,{button:{size:W.SMALL,theme:H.SUCCESS}})]}),e.map((function(e){return Object(j.jsx)(Y,{deck:e},e.id)}))]})}function K(e){var t=Object(n.useContext)(h),c=t.deckState,a=t.deckContextDispatch,s=Object(n.useState)({front:e.front||"",back:e.back||""}),r=Object(d.a)(s,2),o=r[0],i=r[1];Object(n.useEffect)((function(){if(e.cardId){var t=c.find((function(t){return t.id===e.deckId})).cards.find((function(t){return t.id===e.cardId}));t&&i({front:t.front,back:t.back})}}),[c,e.cardId,e.deckId]);var l=function(e){var t=Object(z.a)({},o);switch(e.target.id){case"front":t.front=e.target.value,i(t);break;case"back":t.back=e.target.value,i(t)}};return Object(j.jsxs)("form",{id:"add-card",name:"add-card",onSubmit:function(){e.cardId?a({type:g,deckId:e.deckId,cardId:e.cardId,cardBones:o}):a({type:O,deckId:e.deckId,cardBones:o})},children:[Object(j.jsxs)("div",{className:"mt-3",children:[Object(j.jsx)("label",{htmlFor:"front",children:"Card Front"}),Object(j.jsx)("textarea",{id:"front",className:"focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-8 sm:text-sm border-gray-300 rounded-md",placeholder:"",onChange:l,value:o.front})]}),Object(j.jsxs)("div",{className:"mt-3",children:[Object(j.jsx)("label",{htmlFor:"back",children:"Card Back"}),Object(j.jsx)("textarea",{id:"back",className:"focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-8 sm:text-sm border-gray-300 rounded-md",placeholder:"",onChange:l,value:o.back})]})]})}var V=function(){document.getElementById("add-card").dispatchEvent(new Event("submit",{cancelable:!0,bubbles:!0}))},X=c(26);function Z(e){var t=e.card,c=Object(n.useContext)(h).deckContextDispatch,a=t.front?t.front:"\u200e",s=t.back?t.back:"\u200e",r=L(),o=r.showModal,i=r.setShowModal,d=r.handleModalClose;return Object(j.jsxs)("div",{className:"mx-2 my-2 p-4 border w-96 inline-block rounded-lg cursor-pointer relative hover:shadow",children:[Object(j.jsxs)(M.a,{className:"relative",children:[Object(j.jsx)(M.a.Button,{className:"float-right ml-6 mb-4 rounded-lg",children:Object(j.jsx)(I.d,{className:"h-6 text-gray-600"})}),Object(j.jsx)(R,{title:"Edit Deck",show:o,submitAction:V,updateShowState:d,submitButtonText:"Update Deck",children:Object(j.jsx)(K,{deckId:e.deckId,cardId:e.card.id})}),Object(j.jsxs)(M.a.Panel,{className:"absolute z-10 w-auto right-0 top-0 rounded-md border border-gray-300 shadow-md px-2 py-2 bg-white text-base",children:[Object(j.jsxs)("button",{onClick:function(){console.log("Edit button was pressed"),i(!0)},className:"text-gray-600 px-2 py-1 mb-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-75 hover:bg-gray-100 flex",children:[Object(j.jsx)("span",{className:"pr-2",children:Object(j.jsx)(I.f,{className:"w-6"})}),"Edit"]}),Object(j.jsxs)("button",{onClick:function(){c({type:v,deckId:e.deckId,cardId:t.id})},className:"text-red-600 px-2 py-1 mb-1 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-75 hover:bg-red-100 flex",children:[Object(j.jsx)("span",{className:"pr-2",children:Object(j.jsx)(I.h,{className:"w-6"})}),"Delete"]})]})]}),Object(j.jsxs)("div",{className:"prose-sm flex flex-col h-full justify-center",children:[Object(j.jsx)(X.a,{className:"block",children:a}),s.length>1&&Object(j.jsx)(X.a,{className:"block pt-4",children:s})]})]})}var _=c(37);function ee(e){return setTimeout((function(){e.history.push("/")}),3e3),Object(j.jsxs)(Q,{children:[Object(j.jsx)("p",{children:"Uh oh... we can't find this deck! Go back to select another deck."}),Object(j.jsx)("p",{children:"You will be automatically redirected in 3 seconds."})]})}function te(e){var t,c,n=L(),a=n.showModal,s=n.setShowModal,r=n.handleModalClose;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(R,{title:"Add Card",show:a,submitAction:V,updateShowState:r,submitButtonText:"Add Card",children:Object(j.jsx)(K,{deckId:e.deckId})}),Object(j.jsx)(J,{onClick:function(){s(!0)},size:null===(t=e.button)||void 0===t?void 0:t.size,theme:null===(c=e.button)||void 0===c?void 0:c.theme,children:"+ Add Card"})]})}function ce(){var e=Object(i.g)().id,t=Object(n.useContext)(h).deckState,c=Object(i.e)();if(!e)return c.push("/"),null;var a=t.find((function(t){return t.id===e}));return a?Object(j.jsxs)(Q,{children:[Object(j.jsxs)("div",{className:"mb-4",children:[Object(j.jsx)("h1",{className:"text-xl mb-4 mr-4 inline",children:a.name}),Object(j.jsx)(te,{deckId:e,button:{size:W.SMALL,theme:H.SUCCESS}}),Object(j.jsx)(J,{className:" ml-4",onClick:function(){c.push("/study-mode/".concat(e))},size:W.SMALL,theme:H.PRIMARY,children:Object(j.jsxs)("div",{className:"flex items-baseline",children:[Object(j.jsx)(_.a,{className:"h-4 mr-2 self-center"}),Object(j.jsx)("span",{className:"",children:"Play"})]})})]}),Object(j.jsx)("p",{children:a.description}),Object(j.jsx)("div",{className:"flex flex-wrap",children:a.cards.map((function(t){return Object(j.jsx)(Z,{card:t,deckId:e},t.id)}))})]}):(console.log("Deck not selected ",a),ee({selectedDeck:a,history:c}))}function ne(e){var t=Object(n.useRef)(!0),c=Object(n.useState)(!0),a=Object(d.a)(c,2),s=a[0],r=a[1],o=Object(n.useState)(150),i=Object(d.a)(o,1)[0],l=Object(n.useState)(e.card),u=Object(d.a)(l,2),b=u[0],m=u[1],h=Object(n.useRef)(null),f=Object(n.useRef)(0),x=Object(n.useRef)(!0);Object(n.useEffect)((function(){t.current?t.current=!1:h.current||(r(!1),h.current=setTimeout((function(){r(!0),m(e.card),h.current=null}),2*i))}),[e.card,i]),Object(n.useEffect)((function(){e.index>f.current?x.current=!0:x.current=!1,f.current=e.index}),[e.index]);var p=Object(n.useRef)(!1),O=Object(n.useState)(!0),g=Object(d.a)(O,2),v=g[0],k=g[1],w=Object(n.useState)(!1),y=Object(d.a)(w,2),N=y[0],C=y[1];return Object(n.useEffect)((function(){p.current=!0,e.flip?k(!1):C(!1),setTimeout((function(){e.flip?C(!0):k(!0),p.current=!1}),550)}),[e.flip]),Object(j.jsxs)(E.a,{show:s,enter:"transition ease-out duration-".concat(i),enterFrom:"transform opacity-75 scale-95 ".concat(x.current?"":"-","translate-x-1/2"),enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-".concat(i),leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95 ".concat(x.current?"-":"","translate-x-1/2"),className:"perspective-9",children:[Object(j.jsx)(E.a,{show:v,enter:"transition ease-out duration-500",enterFrom:p.current?"$transform opacity-75 scale-95 rotate-x-90":"",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-500",leaveFrom:"transform opacity-100 scale-100",leaveTo:p.current?"transform opacity-100 scale-95 rotate-x-90":"",children:Object(j.jsx)(ae,{content:b.front,label:"Question",className:"".concat(e.className)})}),Object(j.jsx)(E.a,{show:N,enter:"transition ease-out duration-500",enterFrom:"transform opacity-75 scale-95 -rotate-x-90",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-500",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-100 scale-95 -rotate-x-90",children:Object(j.jsx)(ae,{content:b.back,label:"Answer",className:e.className})})]})}function ae(e){return Object(j.jsx)("div",{className:"max-w-lg ".concat(e.className),children:Object(j.jsx)("div",{className:"sm:aspect-w-9 sm:aspect-h-14 md:aspect-w-14 md:aspect-h-9",children:Object(j.jsx)("div",{className:"p-4 bg-white rounded-lg shadow",children:Object(j.jsxs)("div",{id:"front",className:"grid grid-cols-1 grid-rows-3 h-full",children:[Object(j.jsx)("span",{className:"font-semibold text-gray-400",children:e.label}),Object(j.jsx)("div",{className:"row-start-2 text-center prose my-auto",children:Object(j.jsx)(X.a,{children:e.content})})]})})})})}function se(e){var t=Object(i.g)().id,c=Object(n.useContext)(h).deckState,a=Object(n.useMemo)((function(){return c.find((function(e){return e.id===t}))}),[t,c]),s=Object(n.useState)(!1),r=Object(d.a)(s,2),o=r[0],l=r[1],u=Object(n.useCallback)((function(){l(!o)}),[o]),b=Object(n.useMemo)((function(){return a?a.cards.length:0}),[a]),m=Object(n.useState)(0),f=Object(d.a)(m,2),x=f[0],p=f[1],O=Object(n.useCallback)((function(e){var t=x+e;for(o&&l(!1);t>b-1;)t-=b;for(;t<0;)t+=b;p(t)}),[b,x,o]),g=Object(n.useState)(0),v=Object(d.a)(g,2),k=v[0],w=v[1];Object(n.useEffect)((function(){var e=function(){var e;return null===(e=document.getElementById("nav"))||void 0===e?void 0:e.offsetHeight}();w(e||0)}),[]);var y=Object(n.useCallback)((function(e){if(!e.isComposing&&229!==e.keyCode)switch(e.key){case"ArrowRight":O(1);break;case"ArrowLeft":O(-1);break;case"ArrowUp":u()}}),[O,u]);Object(n.useEffect)((function(){return document.addEventListener("keydown",y),function(){document.removeEventListener("keydown",y)}}),[y]);var N=Object(i.e)();return t?a?Object(j.jsxs)("div",{className:"grid",style:{height:"calc(100vh - ".concat(k,"px)"),gridTemplateRows:"1fr minmax(0, 2fr) 1fr",gridTemplateColumns:"1fr minmax(0, 2fr) 1fr"},children:[Object(j.jsxs)("div",{className:"mb-4 pt-4 pl-4 col-span-2",children:[Object(j.jsx)("h1",{className:"text-xl",children:"Let's Study"}),Object(j.jsxs)("p",{children:["".concat(1+x,"/").concat(b)," Cards"]})]}),Object(j.jsx)("button",{className:"row-start-3 md:row-start-2 col-start-1 mr-auto p-8 mt-auto mb-2 md:mb-0 md:mt-0",onClick:function(){return O(-1)},children:0===x?Object(j.jsx)(I.g,{className:"w-8 transform rotate-180"}):Object(j.jsx)(I.a,{className:"w-8"})}),Object(j.jsx)("button",{className:"row-start-3 md:row-start-2 col-start-3 ml-auto p-8 mt-auto mb-2 md:mb-0 md:mt-0",onClick:function(){return O(1)},children:x+1>=b?Object(j.jsx)(I.g,{className:"w-8"}):Object(j.jsx)(I.b,{className:"w-8"})}),Object(j.jsxs)(J,{className:"mt-auto mb-8 row-start-3 col-start-2 justify-self-center w-full max-w-xs",onClick:u,children:["Flip",Object(j.jsx)(I.c,{className:"hidden md:inline h-4 ml-4 text-blue-400"})]}),Object(j.jsx)("div",{className:"col-span-3 md:col-span-1 m-4 md:m-0 row-start-2 md:col-start-2 self-center",children:Object(j.jsx)(ne,{card:a.cards[x],className:"mx-auto",flip:o,index:x})})]}):ee({selectedDeck:a,history:N}):(N.push("/"),null)}var re=function(){return Object(j.jsx)(o.a,{children:Object(j.jsxs)(C,{children:[Object(j.jsx)(B,{}),Object(j.jsxs)("div",{className:"",children:[Object(j.jsx)(i.a,{exact:!0,path:"/",component:q}),Object(j.jsx)(i.a,{exact:!0,path:"/deck-view",component:ce}),Object(j.jsx)(i.a,{path:"/deck-view/:id",component:ce}),Object(j.jsx)(i.a,{exact:!0,path:"/study-mode",component:se}),Object(j.jsx)(i.a,{path:"/study-mode/:id",component:se})]})]})})},oe=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,60)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(re,{})}),document.getElementById("root")),oe(console.log)}},[[53,1,2]]]);
//# sourceMappingURL=main.016dd5c9.chunk.js.map