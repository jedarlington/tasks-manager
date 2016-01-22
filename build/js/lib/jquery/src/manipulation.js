define(["./core","./var/concat","./var/push","./core/access","./manipulation/var/rcheckableType","./manipulation/var/rtagName","./manipulation/var/rscriptType","./manipulation/wrapMap","./manipulation/getAll","./manipulation/setGlobalEval","./manipulation/buildFragment","./manipulation/support","./data/var/dataPriv","./data/var/dataUser","./data/var/acceptData","./core/init","./traversing","./selector","./event"],function(e,t,n,r,i,s,o,u,a,f,l,c,h,p,d){function w(t,n){return e.nodeName(t,"table")&&e.nodeName(n.nodeType!==11?n:n.firstChild,"tr")?t.getElementsByTagName("tbody")[0]||t:t}function E(e){return e.type=(e.getAttribute("type")!==null)+"/"+e.type,e}function S(e){var t=y.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function x(t,n){var r,i,s,o,u,a,f,l;if(n.nodeType!==1)return;if(h.hasData(t)){o=h.access(t),u=h.set(n,o),l=o.events;if(l){delete u.handle,u.events={};for(s in l)for(r=0,i=l[s].length;r<i;r++)e.event.add(n,s,l[s][r])}}p.hasData(t)&&(a=p.access(t),f=e.extend({},a),p.set(n,f))}function T(e,t){var n=t.nodeName.toLowerCase();if(n==="input"&&i.test(e.type))t.checked=e.checked;else if(n==="input"||n==="textarea")t.defaultValue=e.defaultValue}function N(n,r,i,s){r=t.apply([],r);var u,f,p,d,v,m,y=0,w=n.length,x=w-1,T=r[0],C=e.isFunction(T);if(C||w>1&&typeof T=="string"&&!c.checkClone&&g.test(T))return n.each(function(e){var t=n.eq(e);C&&(r[0]=T.call(this,e,t.html())),N(t,r,i,s)});if(w){u=l(r,n[0].ownerDocument,!1,n,s),f=u.firstChild,u.childNodes.length===1&&(u=f);if(f||s){p=e.map(a(u,"script"),E),d=p.length;for(;y<w;y++)v=u,y!==x&&(v=e.clone(v,!0,!0),d&&e.merge(p,a(v,"script"))),i.call(n[y],v,y);if(d){m=p[p.length-1].ownerDocument,e.map(p,S);for(y=0;y<d;y++)v=p[y],o.test(v.type||"")&&!h.access(v,"globalEval")&&e.contains(m,v)&&(v.src?e._evalUrl&&e._evalUrl(v.src):e.globalEval(v.textContent.replace(b,"")))}}}return n}function C(t,n,r){var i,s=n?e.filter(n,t):t,o=0;for(;(i=s[o])!=null;o++)!r&&i.nodeType===1&&e.cleanData(a(i)),i.parentNode&&(r&&e.contains(i.ownerDocument,i)&&f(a(i,"script")),i.parentNode.removeChild(i));return t}var v=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,m=/<script|<style|<link/i,g=/checked\s*(?:[^=]|=\s*.checked.)/i,y=/^true\/(.*)/,b=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;return e.extend({htmlPrefilter:function(e){return e.replace(v,"<$1></$2>")},clone:function(t,n,r){var i,s,o,u,l=t.cloneNode(!0),h=e.contains(t.ownerDocument,t);if(!c.noCloneChecked&&(t.nodeType===1||t.nodeType===11)&&!e.isXMLDoc(t)){u=a(l),o=a(t);for(i=0,s=o.length;i<s;i++)T(o[i],u[i])}if(n)if(r){o=o||a(t),u=u||a(l);for(i=0,s=o.length;i<s;i++)x(o[i],u[i])}else x(t,l);return u=a(l,"script"),u.length>0&&f(u,!h&&a(t,"script")),l},cleanData:function(t){var n,r,i,s=e.event.special,o=0;for(;(r=t[o])!==undefined;o++)if(d(r)){if(n=r[h.expando]){if(n.events)for(i in n.events)s[i]?e.event.remove(r,i):e.removeEvent(r,i,n.handle);r[h.expando]=undefined}r[p.expando]&&(r[p.expando]=undefined)}}}),e.fn.extend({domManip:N,detach:function(e){return C(this,e,!0)},remove:function(e){return C(this,e)},text:function(t){return r(this,function(t){return t===undefined?e.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9)this.textContent=t})},null,t,arguments.length)},append:function(){return N(this,arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=w(this,e);t.appendChild(e)}})},prepend:function(){return N(this,arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=w(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return N(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return N(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){var t,n=0;for(;(t=this[n])!=null;n++)t.nodeType===1&&(e.cleanData(a(t,!1)),t.textContent="");return this},clone:function(t,n){return t=t==null?!1:t,n=n==null?t:n,this.map(function(){return e.clone(this,t,n)})},html:function(t){return r(this,function(t){var n=this[0]||{},r=0,i=this.length;if(t===undefined&&n.nodeType===1)return n.innerHTML;if(typeof t=="string"&&!m.test(t)&&!u[(s.exec(t)||["",""])[1].toLowerCase()]){t=e.htmlPrefilter(t);try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(e.cleanData(a(n,!1)),n.innerHTML=t);n=0}catch(o){}}n&&this.empty().append(t)},null,t,arguments.length)},replaceWith:function(){var t=[];return N(this,arguments,function(n){var r=this.parentNode;e.inArray(this,t)<0&&(e.cleanData(a(this)),r&&r.replaceChild(n,this))},t)}}),e.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,r){e.fn[t]=function(t){var i,s=[],o=e(t),u=o.length-1,a=0;for(;a<=u;a++)i=a===u?this:this.clone(!0),e(o[a])[r](i),n.apply(s,i.get());return this.pushStack(s)}}),e});