(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"7evw":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"CommentCount",{enumerable:!0,get:function(){return r.CommentCount}}),Object.defineProperty(t,"CommentEmbed",{enumerable:!0,get:function(){return o.CommentEmbed}}),Object.defineProperty(t,"DiscussionEmbed",{enumerable:!0,get:function(){return a.DiscussionEmbed}}),t.default=void 0;var r=n("UZsz"),o=n("Bp/N"),a=n("HhXV"),i={CommentCount:r.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:a.DiscussionEmbed};t.default=i},"Bp/N":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r=a(n("q1tI")),o=a(n("17x9"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(i,e);var t,n,o,a=l(i);function i(){return c(this,i),a.apply(this,arguments)}return t=i,(n=[{key:"getSrc",value:function(){var e=Number(this.props.commentId).toString(36),t=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(e,"?p=").concat(t,"&m=").concat(n)}},{key:"render",value:function(){return r.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}])&&u(t.prototype,n),o&&u(t,o),i}(r.default.Component);t.CommentEmbed=m,m.defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320},m.propTypes={commentId:o.default.string.isRequired,showMedia:o.default.bool,showParentComment:o.default.bool,width:o.default.number,height:o.default.number}},HhXV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r=i(n("q1tI")),o=i(n("17x9")),a=n("ZMnY");function i(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"],y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(c,e);var t,n,o,i=d(c);function c(){return s(this,c),i.apply(this,arguments)}return t=c,(n=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,a.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,a.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),"dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,a.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){var t=this;this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.category_id=e.categoryID,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,e.language&&(this.language=e.language),h.forEach((function(n){t.callbacks[n]=[e[n]]}))}}},{key:"render",value:function(){return r.default.createElement("div",u({},this.props,{id:"disqus_thread"}))}}])&&l(t.prototype,n),o&&l(t,o),c}(r.default.Component);t.DiscussionEmbed=y,y.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string,categoryID:o.default.string,remoteAuthS3:o.default.string,apiKey:o.default.string,preData:o.default.func,preInit:o.default.func,onInit:o.default.func,onReady:o.default.func,afterRender:o.default.func,preReset:o.default.func,onIdentify:o.default.func,beforeComment:o.default.func,onNewComment:o.default.func,onPaginate:o.default.func}).isRequired}},QILm:function(e,t,n){var r=n("8OQS");e.exports=function(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}},UZsz:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r=i(n("q1tI")),o=i(n("17x9")),a=n("ZMnY");function i(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=(0,a.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(c,e);var t,n,o,i=f(c);function c(){return u(this,c),i.apply(this,arguments)}return t=c,(n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,a.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?p():(0,a.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),"dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,a.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return r.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}])&&s(t.prototype,n),o&&s(t,o),c}(r.default.Component);t.CommentCount=h,h.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string}).isRequired}},ZMnY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r;return function(){var o=this,a=arguments,i=function(){r=null,n||e.apply(o,a)},c=n&&!r;window.clearTimeout(r),r=setTimeout(i,t),c&&e.apply(o,a)}},t.isReactElement=i,t.shallowComparison=function(e,t){var n,r=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw o}}}}(new Set(Object.keys(e),Object.keys(t)));try{for(r.s();!(n=r.n()).done;){var o=n.value;if(e[o]!==t[o]&&!i(e[o]))return!0}}catch(c){r.e(c)}finally{r.f()}return!1};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r};function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e){return!!o.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return o.default.isValidElement(e)}))}},cZrw:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return W}));var r=n("q1tI"),o=n.n(r),a=n("Wbzz"),i=n("LvDl"),c=n("MqQV"),u=n("FcLX"),s=n("z8k1"),l=n("yE/o"),f=n("3mGJ"),d=n("pVnL"),m=n.n(d),p=n("TSYQ"),h=n.n(p),y=n("ICNK"),b=n("Y53p"),v=n("H+2d"),g=n("ZeOK"),w=n("MZgk");function E(e){var t=e.children,n=e.className,r=e.content,a=h()("header",n),i=Object(y.a)(E,e),c=Object(b.a)(E,e);return o.a.createElement(c,m()({},i,{className:a}),v.a.isNil(t)?r:t)}E.handledProps=["as","children","className","content"],E.create=Object(w.c)(E,(function(e){return{content:e}}));var O=E;function j(e){var t=e.children,n=e.className,r=e.content,a=h()("description",n),i=Object(y.a)(j,e),c=Object(b.a)(j,e);return o.a.createElement(c,m()({},i,{className:a}),v.a.isNil(t)?r:t)}j.handledProps=["as","children","className","content"],j.create=Object(w.c)(j,(function(e){return{content:e}}));var S=j;function _(e){var t=e.children,n=e.className,r=e.content,a=h()("extra",n),i=Object(y.a)(_,e),c=Object(b.a)(_,e);return o.a.createElement(c,m()({},i,{className:a}),v.a.isNil(t)?r:t)}_.handledProps=["as","children","className","content"],_.create=Object(w.c)(_,(function(e){return{content:e}}));var I=_;function C(e){var t=e.children,n=e.className,r=e.content,a=h()("meta",n),i=Object(y.a)(C,e),c=Object(b.a)(C,e);return o.a.createElement(c,m()({},i,{className:a}),v.a.isNil(t)?r:t)}C.handledProps=["as","children","className","content"],C.create=Object(w.c)(C,(function(e){return{content:e}}));var P=C;function N(e){var t=e.children,n=e.className,r=e.content,a=e.description,i=e.extra,c=e.header,u=e.meta,s=e.verticalAlign,l=h()(Object(g.f)(s),"content",n),f=Object(y.a)(N,e),d=Object(b.a)(N,e);return v.a.isNil(t)?o.a.createElement(d,m()({},f,{className:l}),O.create(c,{autoGenerateKey:!1}),P.create(u,{autoGenerateKey:!1}),S.create(a,{autoGenerateKey:!1}),I.create(i,{autoGenerateKey:!1}),r):o.a.createElement(d,m()({},f,{className:l}),t)}N.handledProps=["as","children","className","content","description","extra","header","meta","verticalAlign"];var D=N,k=n("QILm"),q=n.n(k),R=n("3WF5"),x=n.n(R);function M(e){var t=e.children,n=e.className,r=e.content,a=e.divided,i=e.items,c=e.link,u=e.relaxed,s=e.unstackable,l=h()("ui",Object(g.a)(a,"divided"),Object(g.a)(c,"link"),Object(g.a)(s,"unstackable"),Object(g.b)(u,"relaxed"),"items",n),f=Object(y.a)(M,e),d=Object(b.a)(M,e);if(!v.a.isNil(t))return o.a.createElement(d,m()({},f,{className:l}),t);if(!v.a.isNil(r))return o.a.createElement(d,m()({},f,{className:l}),r);var p=x()(i,(function(e){var t=e.childKey,n=q()(e,["childKey"]),r=t||[n.content,n.description,n.header,n.meta].join("-");return o.a.createElement(K,m()({},n,{key:r}))}));return o.a.createElement(d,m()({},f,{className:l}),p)}M.handledProps=["as","children","className","content","divided","items","link","relaxed","unstackable"];var T=M,U=n("5XkN");function Q(e){var t=e.size,n=Object(y.a)(Q,e);return o.a.createElement(U.a,m()({},n,{size:t,ui:!!t,wrapped:!0}))}Q.handledProps=["size"],Q.create=Object(w.c)(Q,(function(e){return{src:e}}));var A=Q;function G(e){var t=e.children,n=e.className,r=e.content,a=e.description,i=e.extra,c=e.header,u=e.image,s=e.meta,l=h()("item",n),f=Object(y.a)(G,e),d=Object(b.a)(G,e);return v.a.isNil(t)?o.a.createElement(d,m()({},f,{className:l}),A.create(u,{autoGenerateKey:!1}),o.a.createElement(D,{content:r,description:a,extra:i,header:c,meta:s})):o.a.createElement(d,m()({},f,{className:l}),t)}G.handledProps=["as","children","className","content","description","extra","header","image","meta"],G.Content=D,G.Description=S,G.Extra=I,G.Group=T,G.Header=O,G.Image=A,G.Meta=P;var K=G,z=n("aQu0"),Z=n("+6Dn"),B=n("yIZz"),L=n("7evw"),V=n("soUV"),W=(t.default=Object(V.a)((function(e){var t=e.data.post,n=t.frontmatter,o=t.html,d=t.timeToRead,m=n.author.avatar.children[0],p=e.data.post.frontmatter.tags.map((function(e){return r.createElement(c.a,{key:e},r.createElement(a.Link,{to:"/blog/tags/"+e+"/"},e))})),h=e.data.recents.edges.map((function(e){var t=e.node,n=t.frontmatter.author.avatar.children[0],o=Object(i.get)(t,"frontmatter.image.children.0.fixed",{}),c=r.createElement(u.a.Group,null,r.createElement(u.a,null,r.createElement(u.a.Avatar,{src:n.fixed.src,srcSet:n.fixed.srcSet}),r.createElement(u.a.Content,null,r.createElement(u.a.Author,{style:{fontWeight:400}},t.frontmatter.author.id),r.createElement(u.a.Metadata,{style:{margin:0}},t.timeToRead," min read"))));return r.createElement("div",{key:t.fields.slug,style:{paddingBottom:"1em"}},r.createElement(s.a,{as:a.Link,to:t.fields.slug,image:o,header:t.frontmatter.title,extra:c}))})),y=Object(i.get)(n,"image.children.0.fixed",{});return r.createElement(l.a,null,r.createElement(B.a,null),r.createElement(f.a,{vertical:!0,style:{border:"none"}},r.createElement(K.Group,null,r.createElement(K,null,r.createElement(K.Image,{size:"tiny",src:m.fixed.src,srcSet:m.fixed.srcSet,circular:!0}),r.createElement(K.Content,null,r.createElement(K.Description,null,n.author.id),r.createElement(K.Meta,null,n.author.bio),r.createElement(K.Extra,null,n.updatedDate," - ",d," min read")))),r.createElement(z.a,{as:"h1"},n.title)),r.createElement(U.a,Object.assign({},y,{fluid:!0})),r.createElement(f.a,{vertical:!0,style:{border:"none"},dangerouslySetInnerHTML:{__html:o}}),r.createElement(f.a,{vertical:!0},p),e.data.site&&e.data.site.siteMetadata&&e.data.site.siteMetadata.disqus&&r.createElement(f.a,{vertical:!0},r.createElement(L.DiscussionEmbed,{shortname:e.data.site.siteMetadata.disqus,config:{}})),r.createElement(f.a,{vertical:!0},r.createElement(Z.a,{padded:!0,centered:!0},h)))})),"2764299892")}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-f67a726ac0f2a689e410.js.map