(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{142:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(144),c=n(150),u=n.n(c),o=(n(159),function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"Sangj blog")),t)}),l=(n(161),n(8)),s=n.n(l),d=n(52),m=n.n(d),f=(n(163),n(165),function(e){var t=e.onOpen;return r.a.createElement("div",{className:"hamburger",onClick:t},r.a.createElement("i",{className:"icon-menu"}))}),p=(n(167),function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"sidebar__inner"},"About"),r.a.createElement("div",{className:"sidebar__inner"},"Posts"),r.a.createElement("div",{className:"sidebar__inner"},"Tags"))},t}(a.Component)),h=(n(169),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={visible:!1},n.dbc=n.dbc.bind(m()(m()(n))),n}s()(t,e);var n=t.prototype;return n.dbc=function(){this.setState({visible:!this.state.visible})},n.render=function(){return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"header__title"},r.a.createElement(i.Link,{to:"/"},"SangJeong")),r.a.createElement("div",{className:"header__menu"},r.a.createElement(f,{onOpen:this.dbc})),r.a.createElement("div",{className:"header__sub-title"},r.a.createElement(i.Link,{to:"/about"},"About"),r.a.createElement(i.Link,{to:"/about"},"Posts"),r.a.createElement(i.Link,{to:"/about"},"Tags"))),this.state.visible&&r.a.createElement(p,null))},t}(a.Component));t.default=function(){return r.a.createElement(o,null,r.a.createElement(h,null))}},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(5),c=n.n(i),u=n(143),o=n.n(u);n.d(t,"Link",function(){return o.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(36);n.d(t,"waitForRouteChange",function(){return l.c});var s=n(145),d=n.n(s);n.d(t,"PageRenderer",function(){return d.a});var m=n(50);n.d(t,"parsePath",function(){return m.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},145:function(e,t,n){var a;e.exports=(a=n(149))&&a.default||a},149:function(e,t,n){"use strict";n.r(t);n(38);var a=n(0),r=n.n(a),i=n(5),c=n.n(i),u=n(73),o=n(1),l=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({key:t.pathname,location:t,pageResources:n},n.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},159:function(e,t,n){},163:function(e,t,n){},165:function(e,t,n){},167:function(e,t,n){},169:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-e1d5b2326494643376e1.js.map