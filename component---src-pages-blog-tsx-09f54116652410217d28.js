(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"1GPU":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return oe}));var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),c=a("yE/o"),i=a("FcLX"),o=a("z8k1"),s=a("3mGJ"),d=a("+6Dn"),u=a("yIZz"),m=a("pVnL"),p=a.n(m),h=a("lwsE"),b=a.n(h),v=a("W8MJ"),f=a.n(v),E=a("a1gu"),g=a.n(E),O=a("Nsbk"),j=a.n(O),N=a("PJYZ"),k=a.n(N),C=a("7W2i"),y=a.n(C),A=a("lSNA"),I=a.n(A),x=a("3WF5"),L=a.n(x),P=a("Og4/"),w=a.n(P),z=a("TSYQ"),G=a.n(z),V=a("ZeOK"),W=a("ICNK"),K=a("Y53p"),D=a("H+2d"),J=a("MZgk");function S(e){var t=e.children,a=e.className,n=e.content,r=G()(a,"description"),c=Object(W.a)(S,e),i=Object(K.a)(S,e);return l.a.createElement(i,p()({},c,{className:r}),D.a.isNil(t)?n:t)}S.handledProps=["as","children","className","content"],S.create=Object(J.c)(S,(function(e){return{content:e}}));var M=S;function Y(e){var t=e.children,a=e.className,n=e.content,r=G()("header",a),c=Object(W.a)(Y,e),i=Object(K.a)(Y,e);return l.a.createElement(i,p()({},c,{className:r}),D.a.isNil(t)?n:t)}Y.handledProps=["as","children","className","content"],Y.create=Object(J.c)(Y,(function(e){return{content:e}}));var Z=Y;function H(e){var t=e.children,a=e.className,n=e.content,r=e.description,c=e.floated,i=e.header,o=e.verticalAlign,s=G()(Object(V.e)(c,"floated"),Object(V.f)(o),"content",a),d=Object(W.a)(H,e),u=Object(K.a)(H,e);return D.a.isNil(t)?l.a.createElement(u,p()({},d,{className:s}),Z.create(i),M.create(r),n):l.a.createElement(u,p()({},d,{className:s}),t)}H.handledProps=["as","children","className","content","description","floated","header","verticalAlign"],H.create=Object(J.c)(H,(function(e){return{content:e}}));var R=H,T=a("D1pA");function X(e){var t=e.className,a=e.verticalAlign,n=G()(Object(V.f)(a),t),r=Object(W.a)(X,e);return l.a.createElement(T.a,p()({},r,{className:n}))}X.handledProps=["className","verticalAlign"],X.create=Object(J.c)(X,(function(e){return{name:e}}));var F=X,Q=a("YO3V"),U=a.n(Q),q=a("5XkN"),B=function(e){function t(){var e,a;b()(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=g()(this,(e=j()(t)).call.apply(e,[this].concat(l))),I()(k()(a),"handleClick",(function(e){a.props.disabled||w()(a.props,"onClick",e,a.props)})),a}return y()(t,e),f()(t,[{key:"render",value:function(){var e=this.props,a=e.active,r=e.children,c=e.className,i=e.content,o=e.description,s=e.disabled,d=e.header,u=e.icon,m=e.image,h=e.value,b=Object(K.a)(t,this.props),v=G()(Object(V.a)(a,"active"),Object(V.a)(s,"disabled"),Object(V.a)("li"!==b,"item"),c),f=Object(W.a)(t,this.props),E="li"===b?{value:h}:{"data-value":h};if(!D.a.isNil(r))return l.a.createElement(b,p()({},E,{role:"listitem",className:v,onClick:this.handleClick},f),r);var g=F.create(u,{autoGenerateKey:!1}),O=q.a.create(m,{autoGenerateKey:!1});if(!Object(n.isValidElement)(i)&&U()(i))return l.a.createElement(b,p()({},E,{role:"listitem",className:v,onClick:this.handleClick},f),g||O,R.create(i,{autoGenerateKey:!1,defaultProps:{header:d,description:o}}));var j=Z.create(d,{autoGenerateKey:!1}),N=M.create(o,{autoGenerateKey:!1});return g||O?l.a.createElement(b,p()({},E,{role:"listitem",className:v,onClick:this.handleClick},f),g||O,(i||j||N)&&l.a.createElement(R,null,j,N,i)):l.a.createElement(b,p()({},E,{role:"listitem",className:v,onClick:this.handleClick},f),j,N,i)}}]),t}(n.Component);I()(B,"handledProps",["active","as","children","className","content","description","disabled","header","icon","image","onClick","value"]),B.create=Object(J.c)(B,(function(e){return{content:e}}));var $=B;function _(e){var t=e.children,a=e.className,n=e.content,r=Object(W.a)(_,e),c=Object(K.a)(_,e),i=G()(Object(V.a)("ul"!==c&&"ol"!==c,"list"),a);return l.a.createElement(c,p()({},r,{className:i}),D.a.isNil(t)?n:t)}_.handledProps=["as","children","className","content"];var ee=_,te=function(e){function t(){var e,a;b()(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return a=g()(this,(e=j()(t)).call.apply(e,[this].concat(l))),I()(k()(a),"handleItemOverrides",(function(e){return{onClick:function(t,n){w()(e,"onClick",t,n),w()(a.props,"onItemClick",t,n)}}})),a}return y()(t,e),f()(t,[{key:"render",value:function(){var e=this,a=this.props,n=a.animated,r=a.bulleted,c=a.celled,i=a.children,o=a.className,s=a.content,d=a.divided,u=a.floated,m=a.horizontal,h=a.inverted,b=a.items,v=a.link,f=a.ordered,E=a.relaxed,g=a.selection,O=a.size,j=a.verticalAlign,N=G()("ui",O,Object(V.a)(n,"animated"),Object(V.a)(r,"bulleted"),Object(V.a)(c,"celled"),Object(V.a)(d,"divided"),Object(V.a)(m,"horizontal"),Object(V.a)(h,"inverted"),Object(V.a)(v,"link"),Object(V.a)(f,"ordered"),Object(V.a)(g,"selection"),Object(V.b)(E,"relaxed"),Object(V.e)(u,"floated"),Object(V.f)(j),"list",o),k=Object(W.a)(t,this.props),C=Object(K.a)(t,this.props);return D.a.isNil(i)?D.a.isNil(s)?l.a.createElement(C,p()({role:"list",className:N},k),L()(b,(function(t){return $.create(t,{overrideProps:e.handleItemOverrides})}))):l.a.createElement(C,p()({role:"list",className:N},k),s):l.a.createElement(C,p()({role:"list",className:N},k),i)}}]),t}(n.Component);I()(te,"Content",R),I()(te,"Description",M),I()(te,"Header",Z),I()(te,"Icon",F),I()(te,"Item",$),I()(te,"List",ee),I()(te,"handledProps",["animated","as","bulleted","celled","children","className","content","divided","floated","horizontal","inverted","items","link","onItemClick","ordered","relaxed","selection","size","verticalAlign"]);var ae=te,ne=function(e){return n.createElement(o.a,null,n.createElement(o.a.Content,null,n.createElement(o.a.Header,null,"Tags")),n.createElement(o.a.Content,null,n.createElement(ae,null,e.tags.map((function(t){var a=t.fieldValue===e.tag,l=a?"/blog":"/blog/tags/"+t.fieldValue+"/";return n.createElement(ae.Item,{as:"span",key:t.fieldValue},n.createElement(ae.Icon,{name:"tag",color:a?"blue":null}),n.createElement(ae.Content,{style:a?{fontWeight:"700"}:null},n.createElement(e.Link,{to:l},t.fieldValue," (",t.totalCount,")")))})))))},le=a("R6OX"),re=a("LvDl"),ce=function(e){if(1===e.pageCount)return null;var t=e.pathname.startsWith("/blog/page/")?e.pathname.split("/")[3]:"1";return n.createElement(le.a,{pagination:!0},Object(re.times)(e.pageCount,(function(a){var l=(a+1).toString(),r=e.pageCount<10?5:3,c=+l-r<+t&&+l+r>+t,i=+l===e.pageCount;return c||1==+l||i?n.createElement(le.a.Item,{key:l,style:{cursor:"pointer"},as:e.Link,to:"/blog/page/"+l+"/",name:l,active:t===l}):+l==e.pageCount-1||2==+l?n.createElement(le.a.Item,{key:l,disabled:!0},"..."):null})))},ie=a("soUV"),oe=(t.default=Object(ie.a)((function(e){var t=e.data.tags.group,a=e.data.posts.edges,l=e.location.pathname,m=Math.ceil(e.data.posts.totalCount/10),p=n.createElement(c.a,null,a.map((function(e){var t=e.node,a=t.frontmatter,l=t.timeToRead,c=t.fields.slug,s=t.excerpt,d=a.author.avatar.children[0],u=Object(re.get)(a,"image.children.0.fixed",{}),m=n.createElement(i.a.Group,null,n.createElement(i.a,null,n.createElement(i.a.Avatar,{src:d.fixed.src,srcSet:d.fixed.srcSet}),n.createElement(i.a.Content,null,n.createElement(i.a.Author,{style:{fontWeight:400}},a.author.id),n.createElement(i.a.Metadata,{style:{margin:0}},a.updatedDate," - ",l," min read")))),p=n.createElement(o.a.Description,null,s,n.createElement("br",null),n.createElement(r.Link,{to:c},"Read more…"));return n.createElement(o.a,{key:c,fluid:!0,image:u,header:a.title,extra:m,description:p})})));return n.createElement(c.a,null,n.createElement(u.a,null),n.createElement(s.a,{vertical:!0},n.createElement(d.a,{padded:!0,style:{justifyContent:"space-around"}},n.createElement("div",{style:{maxWidth:600}},p,n.createElement(s.a,{vertical:!0,textAlign:"center"},n.createElement(ce,{Link:r.Link,pathname:l,pageCount:m}))),n.createElement("div",null,n.createElement(ne,{Link:r.Link,tags:t,tag:e.pageContext.tag})))))})),"1852904082")}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-09f54116652410217d28.js.map