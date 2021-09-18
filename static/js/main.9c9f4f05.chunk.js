(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{32:function(n,t,e){},78:function(n,t,e){"use strict";e.r(t);var i,o,r=e(0),a=e.n(r),c=e(23),p=e.n(c),s=(e(32),e(14)),l=e(6),d=e(9),u=e(3),b=e(4),x=b.a.header(i||(i=Object(u.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n\n  form {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    max-width: 600px;\n    background-color: #fff;\n    border-radius: 3px;\n    overflow: hidden;\n  }\n\n  button {\n    display: inline-block;\n    width: 48px;\n    height: 48px;\n    border: 0;\n    background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n    background-size: 40%;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n\n    &:hover {\n      opacity: 1;\n    }\n  }\n\n  span {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n  }\n\n  input {\n    display: inline-block;\n    width: 100%;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px;\n\n    &::placeholder {\n      font: inherit;\n      font-size: 18px;\n    }\n  }\n"]))),g=e(1),f=function(n){var t=n.onSearch;return Object(g.jsx)(x,{children:Object(g.jsxs)("form",{onSubmit:function(n){n.preventDefault(),t(n.target.elements.imageName.value.trim().toLowerCase())},children:[Object(g.jsx)("button",{type:"submit",children:Object(g.jsx)("span",{children:"Search"})}),Object(g.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"imageName"})]})})},h=b.a.div(o||(o=Object(u.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n"]))),m=function(n){var t=n.children;return Object(g.jsx)(h,{children:t})},j=e(12),O=e.n(j),v=e(25),w=e(13),y=e.n(w);y.a.defaults.baseURL="https://pixabay.com/api/";var k,S,L,z,C,I,U,E=function(){var n=Object(v.a)(O.a.mark((function n(t,e){var i,o;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.a.get("?key=".concat("22089613-2c269b20f41d8e495fd067b59","&q=").concat(t,"&").concat("&image_type=photo&orientation=horizontal&per_page=12","&page=").concat(e));case 2:return i=n.sent,o=i.data.hits,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),R=b.a.li(k||(k=Object(u.a)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),J=b.a.img(S||(S=Object(u.a)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),N=function(n){var t=n.id,e=n.webformatURL,i=n.tags,o=n.onClick;return Object(g.jsx)(R,{onClick:o,children:Object(g.jsx)(J,{src:e,alt:i})},t)},T=b.a.ul(L||(L=Object(u.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),_=function(n){var t=n.images,e=n.onSelect;return Object(g.jsx)(T,{children:t.map((function(n){var t=n.id,i=n.webformatURL,o=n.tags,r=n.largeImageURL;return Object(g.jsx)(N,{webformatURL:i,tags:o,onClick:function(){return e({largeImageURL:r,tags:o})}},t)}))})},q=b.a.button(z||(z=Object(u.a)(["\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  :focus {\n    background-color: #303f9f;\n  }\n"]))),B=function(n){var t=n.onClick;return Object(g.jsx)(q,{type:"button",onClick:t,children:"Load more"})},D=e(26),F=e.n(D),H=(e(77),function(){return Object(g.jsx)(F.a,{type:"Oval",color:"#187c39",height:100,width:100,timeout:3e3})}),M=b.a.div(C||(C=Object(u.a)(["\n  position: fixed;\n  top: 100%;\n  left: 50%;\n  transform: translate(-100%, -50%);\n"])));var A=b.a.div(I||(I=Object(u.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),G=b.a.div(U||(U=Object(u.a)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),K=function(n){var t=n.srcImg,e=n.altImg,i=n.onClose;return function(n,t){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Object(r.useEffect)((function(){return window.addEventListener(n,t,e),function(){window.removeEventListener(n,t)}}))}("keydown",(function(n){"Escape"===n.code&&i()})),Object(g.jsx)(A,{onClick:function(n){n.currentTarget===n.target&&i()},children:Object(g.jsx)(G,{children:Object(g.jsx)("img",{src:t,alt:e})})})},P=function(){var n=Object(r.useState)(null),t=Object(l.a)(n,2),e=t[0],i=t[1],o=Object(r.useState)(null),a=Object(l.a)(o,2),c=a[0],p=a[1],u=Object(r.useState)([]),b=Object(l.a)(u,2),x=b[0],h=b[1],j=Object(r.useState)("idle"),O=Object(l.a)(j,2),v=O[0],w=O[1],y=Object(r.useState)(1),k=Object(l.a)(y,2),S=k[0],L=k[1];Object(r.useLayoutEffect)((function(){if(null!==e){if(""===e)return d.b.error("U need to write a name of image!");(function(n,t){return n!==e&&t!==S})&&(w("pending"),E(e,S).then((function(n){if(0===n.length)return d.b.error("there is no image with that name  ".concat(e));h((function(t){return[].concat(Object(s.a)(t),Object(s.a)(n))})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(n){return w("rejected")})).finally((function(){return w("resolved")})))}}),[e,S]);var z=x.length>=12&&"resolved"===v;return Object(g.jsxs)(m,{children:[Object(g.jsx)(f,{onSearch:function(n){i(n),L(1),1!==S&&h([])}}),"pending"===v&&Object(g.jsx)(M,{children:Object(g.jsx)(H,{})}),Object(g.jsx)(_,{images:x,onSelect:function(n){p(n)}}),z&&Object(g.jsx)(B,{onClick:function(){L((function(n){return n+1}))}}),c&&Object(g.jsx)(K,{srcImg:c.largeImageURL,altImg:c.tags,onClose:function(){p(null)}}),Object(g.jsx)(d.a,{position:"top-right"})]})};p.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(P,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.9c9f4f05.chunk.js.map