function openNav(){document.getElementById("myTopnav").style.left="0"}function closeNav(){document.getElementById("myTopnav").style.left="-250px"}function menuoverlayOn(){document.getElementById("menuoverlay").style.display="block"}function menuoverlayOff(){document.getElementById("menuoverlay").style.display="none"}function addClassBody(){var e,t,a;e=document.body,t="flow",a=e.className.split(" "),-1==a.indexOf(t)&&(e.className+=" "+t)}function removeClassBody(){var e=document.body;e.className=e.className.replace(/\bflow\b/g,"")}function scrollFunction(){document.body.scrollTop>200||document.documentElement.scrollTop>200?document.getElementById("backToTop").style.display="block":document.getElementById("backToTop").style.display="none"}function topFunction(){document.body.scrollTop=0,document.documentElement.scrollTop=0}for(var btns=document.getElementsByClassName("dropbtn"),i=0;i<btns.length;i++)btns[i].addEventListener("click",function(){var e=document.getElementsByClassName("active");e.length>0&&(e[0].className=e[0].className.replace(" active","")),this.className+=" active"});window.onclick=function(e){if(!e.target.matches(".dropbtn")){var t,a=document.getElementsByClassName("dropbtn");for(t=0;t<a.length;t++){var n=a[t];n.classList.contains("active")&&n.classList.remove("active")}}};var randomRandomIndex,showRandomPost;!function(e,t,a){var n={widgetTitle:"",widgetStyle:2,homePage:"https://www.kompiajaib.com/",numPosts:10,summaryLength:370,titleLength:"auto",thumbnailSize:90,thumbnailHeight:50,noImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC",containerId:"random-post",newTabLink:!1,moreText:"Baca Selengkapnya",callBack:function(){}};for(var i in RandomPostConfig)n[i]="undefined"==RandomPostConfig[i]?n[i]:RandomPostConfig[i];var o=function(e){var n=t.createElement("script");n.type="text/javascript",n.src=e,a.appendChild(n)},s=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},l=function(e){var t,a,n=e.length;if(0===n)return!1;for(;--n;)t=Math.floor(Math.random()*(n+1)),a=e[n],e[n]=e[t],e[t]=a;return e},r=function(e){var t=e.feed.openSearch$totalResults.$t-n.numPosts,a=s(1,t>0?t:1);o(n.homePage.replace(/\/$/,"")+"/feeds/posts/summary?alt=json-in-script&orderby=updated&start-index="+a+"&max-results="+n.numPosts+"&callback=showRandomPost")},c=function(e){var t,a,i,o,s,r=document.getElementById(n.containerId),c=l(e.feed.entry),d=n.widgetStyle,m=n.widgetTitle+'<ul class="random-post-style-'+d+'">',u=n.newTabLink?' target="_blank"':"",f='<span style="display:block;clear:both;"></span>';if(r){for(var p=0;p<n.numPosts&&p!=c.length;p++){a=c[p].title.$t,i="auto"!==n.titleLength&&n.titleLength<a.length?a.substring(0,n.titleLength)+"&hellip;":a,o="media$thumbnail"in c[p]&&n.thumbnailSize!==!1?c[p].media$thumbnail.url.replace(/.*?:\/\//g,"https://cdn.staticaly.com/img/").replace(/\/s[0-9]+(\-c)?/,"/w"+n.thumbnailSize+"-h50-p-k-no-nu"):n.noImage,s="summary"in c[p]&&n.summaryLength>0?c[p].summary.$t.replace(/<br ?\/?>/g," ").replace(/<.*?>/g,"").replace(/[<>]/g,"").substring(0,n.summaryLength)+"&hellip;":"";for(var h=0,g=c[p].link.length;g>h;h++)t="alternate"==c[p].link[h].rel?c[p].link[h].href:"#";m+=2==d?'<li><div class="random-post-item-thumbnail"><a href="'+t+'" title="'+a+'"'+u+'><img alt="" src="'+o+'" width="'+n.thumbnailSize+'" height="'+n.thumbnailHeight+'"></a></div><div class="random-post-item-title"><a title="'+a+'" href="'+t+'"'+u+">"+i+'</a></div><span class="random-post-item-summary"><span class="random-post-item-summary-text">'+s+'</span> <a href="'+t+'" class="random-post-item-more"'+u+">"+n.moreText+"</a></span>"+f+"</li>":3==d||4==d?'<li class="random-post-item" tabindex="0"><a class="random-post-item-title" href="'+t+'"'+u+' target="_blank"><img alt="" class="random-post-item-thumbnail" src="'+o+'" width="'+n.thumbnailSize+'" height="'+n.thumbnailSize+'"></a><div class="random-post-item-tooltip"><a class="random-post-item-title" title="'+a+'" href="'+t+'"'+u+" target='_blank'>"+i+"</a></div>"+f+"</li>":5==d?'<li class="random-post-item" tabindex="0"><a class="random-post-item-wrapper" href="'+t+'" title="'+a+'"'+u+' target="_blank"><img alt="" class="random-post-item-thumbnail" src="'+o+'" width="'+n.thumbnailSize+'" height="'+n.thumbnailSize+'"><span class="random-post-item-tooltip">'+i+"</span></a>"+f+"</li>":6==d?'<li><a class="random-post-item-title" title="'+a+'" href="'+t+'"'+u+" target='_blank'>"+i+'</a><div class="random-post-item-tooltip"><img alt="" class="random-post-item-thumbnail" src="'+o+'" width="'+n.thumbnailSize+'" height="'+n.thumbnailSize+'"><span class="random-post-item-summary"><span class="random-post-item-summary-text">'+s+"</span></span>"+f+"</div></li>":'<li><a title="'+a+'" href="'+t+'"'+u+" target='_blank'>"+i+"</a></li>"}r.innerHTML=m+="</ul>"+f,n.callBack()}};randomRandomIndex=r,showRandomPost=c,o(n.homePage.replace(/\/$/,"")+"/feeds/posts/summary?alt=json-in-script&orderby=updated&max-results=0&callback=randomRandomIndex")}(window,document,document.getElementsByTagName("head")[0]),window.onscroll=function(){scrollFunction()},!function(e,t){var a=t(e,e.document);e.lazySizes=a,"object"==typeof module&&module.exports&&(module.exports=a)}("undefined"!=typeof window?window:{},function(e,t){"use strict";var a,n;if(function(){var t,a={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};n=e.lazySizesConfig||e.lazysizesConfig||{};for(t in a)t in n||(n[t]=a[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:n,noSupport:!0};var i=t.documentElement,o=e.Date,s=e.HTMLPictureElement,l="addEventListener",r="getAttribute",c=e[l],d=e.setTimeout,m=e.requestAnimationFrame||d,u=e.requestIdleCallback,f=/^picture$/i,p=["load","error","lazyincluded","_lazyloaded"],h={},g=Array.prototype.forEach,y=function(e,t){return h[t]||(h[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),h[t].test(e[r]("class")||"")&&h[t]},v=function(e,t){y(e,t)||e.setAttribute("class",(e[r]("class")||"").trim()+" "+t)},b=function(e,t){var a;(a=y(e,t))&&e.setAttribute("class",(e[r]("class")||"").replace(a," "))},z=function(e,t,a){var n=a?l:"removeEventListener";a&&z(e,t),p.forEach(function(a){e[n](a,t)})},A=function(e,n,i,o,s){var l=t.createEvent("Event");return i||(i={}),i.instance=a,l.initEvent(n,!o,!s),l.detail=i,e.dispatchEvent(l),l},C=function(t,a){var i;!s&&(i=e.picturefill||n.pf)?(a&&a.src&&!t[r]("srcset")&&t.setAttribute("srcset",a.src),i({reevaluate:!0,elements:[t]})):a&&a.src&&(t.src=a.src)},E=function(e,t){return(getComputedStyle(e,null)||{})[t]},w=function(e,t,a){for(a=a||e.offsetWidth;a<n.minSize&&t&&!e._lazysizesWidth;)a=t.offsetWidth,t=t.parentNode;return a},k=function(){var e,a,n=[],i=[],o=n,s=function(){var t=o;for(o=n.length?i:n,e=!0,a=!1;t.length;)t.shift()();e=!1},l=function(n,i){e&&!i?n.apply(this,arguments):(o.push(n),a||(a=!0,(t.hidden?d:m)(s)))};return l._lsFlush=s,l}(),N=function(e,t){return t?function(){k(e)}:function(){var t=this,a=arguments;k(function(){e.apply(t,a)})}},T=function(e){var t,a=0,i=n.throttleDelay,s=n.ricTimeout,l=function(){t=!1,a=o.now(),e()},r=u&&s>49?function(){u(l,{timeout:s}),s!==n.ricTimeout&&(s=n.ricTimeout)}:N(function(){d(l)},!0);return function(e){var n;(e=!0===e)&&(s=33),t||(t=!0,n=i-(o.now()-a),0>n&&(n=0),e||9>n?r():d(r,n))}},x=function(e){var t,a,n=99,i=function(){t=null,e()},s=function(){var e=o.now()-a;n>e?d(s,n-e):(u||i)(i)};return function(){a=o.now(),t||(t=d(s,n))}},_=function(){var s,m,u,p,h,w,_,S,L,M,I,P,R=/^img$/i,F=/^iframe$/i,$="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),W=0,H=0,O=0,D=-1,j=function(e){O--,(!e||0>O||!e.target)&&(O=0)},Q=function(e){return null==P&&(P="hidden"==E(t.body,"visibility")),P||"hidden"!=E(e.parentNode,"visibility")&&"hidden"!=E(e,"visibility")},U=function(e,a){var n,o=e,s=Q(e);for(S-=a,I+=a,L-=a,M+=a;s&&(o=o.offsetParent)&&o!=t.body&&o!=i;)(s=(E(o,"opacity")||1)>0)&&"visible"!=E(o,"overflow")&&(n=o.getBoundingClientRect(),s=M>n.left&&L<n.right&&I>n.top-1&&S<n.bottom+1);return s},q=function(){var e,o,l,c,d,u,f,h,g,y,v,b,z=a.elements;if((p=n.loadMode)&&8>O&&(e=z.length)){for(o=0,D++;e>o;o++)if(z[o]&&!z[o]._lazyRace)if(!$||a.prematureUnveil&&a.prematureUnveil(z[o]))ee(z[o]);else if((h=z[o][r]("data-expand"))&&(u=1*h)||(u=H),y||(y=!n.expand||n.expand<1?i.clientHeight>500&&i.clientWidth>500?500:370:n.expand,a._defEx=y,v=y*n.expFactor,b=n.hFac,P=null,v>H&&1>O&&D>2&&p>2&&!t.hidden?(H=v,D=0):H=p>1&&D>1&&6>O?y:W),g!==u&&(w=innerWidth+u*b,_=innerHeight+u,f=-1*u,g=u),l=z[o].getBoundingClientRect(),(I=l.bottom)>=f&&(S=l.top)<=_&&(M=l.right)>=f*b&&(L=l.left)<=w&&(I||M||L||S)&&(n.loadHidden||Q(z[o]))&&(m&&3>O&&!h&&(3>p||4>D)||U(z[o],u))){if(ee(z[o]),d=!0,O>9)break}else!d&&m&&!c&&4>O&&4>D&&p>2&&(s[0]||n.preloadAfterLoad)&&(s[0]||!h&&(I||M||L||S||"auto"!=z[o][r](n.sizesAttr)))&&(c=s[0]||z[o]);c&&!d&&ee(c)}},V=T(q),G=function(e){var t=e.target;return t._lazyCache?void delete t._lazyCache:(j(e),v(t,n.loadedClass),b(t,n.loadingClass),z(t,X),A(t,"lazyloaded"),void 0)},K=N(G),X=function(e){K({target:e.target})},J=function(e,t){try{e.contentWindow.location.replace(t)}catch(a){e.src=t}},Y=function(e){var t,a=e[r](n.srcsetAttr);(t=n.customMedia[e[r]("data-media")||e[r]("media")])&&e.setAttribute("media",t),a&&e.setAttribute("srcset",a)},Z=N(function(e,t,a,i,o){var s,l,c,m,p,h;(p=A(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(a?v(e,n.autosizesClass):e.setAttribute("sizes",i)),l=e[r](n.srcsetAttr),s=e[r](n.srcAttr).replace(/.*?:\/\//g,"https://cdn.statically.io/img/"),o&&(c=e.parentNode,m=c&&f.test(c.nodeName||"")),h=t.firesLoad||"src"in e&&(l||s||m),p={target:e},v(e,n.loadingClass),h&&(clearTimeout(u),u=d(j,2500),z(e,X,!0)),m&&g.call(c.getElementsByTagName("source"),Y),l?e.setAttribute("srcset",l):s&&!m&&(F.test(e.nodeName)?J(e,s):e.src=s),o&&(l||m)&&C(e,{src:s})),e._lazyRace&&delete e._lazyRace,b(e,n.lazyClass),k(function(){var t=e.complete&&e.naturalWidth>1;h&&!t||(t&&v(e,"ls-is-cached"),G(p),e._lazyCache=!0,d(function(){"_lazyCache"in e&&delete e._lazyCache},9)),"lazy"==e.loading&&O--},!0)}),ee=function(e){if(!e._lazyRace){var t,a=R.test(e.nodeName),i=a&&(e[r](n.sizesAttr)||e[r]("sizes")),o="auto"==i;(!o&&m||!a||!e[r]("src")&&!e.srcset||e.complete||y(e,n.errorClass)||!y(e,n.lazyClass))&&(t=A(e,"lazyunveilread").detail,o&&B.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,O++,Z(e,t,o,i,a))}},te=x(function(){n.loadMode=3,V()}),ae=function(){3==n.loadMode&&(n.loadMode=2),te()},ne=function(){if(!m){if(o.now()-h<999)return void d(ne,999);m=!0,n.loadMode=3,V(),c("scroll",ae,!0)}};return{_:function(){h=o.now(),a.elements=t.getElementsByClassName(n.lazyClass),s=t.getElementsByClassName(n.lazyClass+" "+n.preloadClass),c("scroll",V,!0),c("resize",V,!0),e.MutationObserver?new MutationObserver(V).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i[l]("DOMNodeInserted",V,!0),i[l]("DOMAttrModified",V,!0),setInterval(V,999)),c("hashchange",V,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){t[l](e,V,!0)}),/d$|^c/.test(t.readyState)?ne():(c("load",ne),t[l]("DOMContentLoaded",V),d(ne,2e4)),a.elements.length?(q(),k._lsFlush()):V()},checkElems:V,unveil:ee,_aLSL:ae}}(),B=function(){var e,a=N(function(e,t,a,n){var i,o,s;if(e._lazysizesWidth=n,n+="px",e.setAttribute("sizes",n),f.test(t.nodeName||""))for(i=t.getElementsByTagName("source"),o=0,s=i.length;s>o;o++)i[o].setAttribute("sizes",n);a.detail.dataAttr||C(e,a.detail)}),i=function(e,t,n){var i,o=e.parentNode;o&&(n=w(e,o,n),i=A(e,"lazybeforesizes",{width:n,dataAttr:!!t}),i.defaultPrevented||(n=i.detail.width)&&n!==e._lazysizesWidth&&a(e,o,i,n))},o=function(){var t,a=e.length;if(a)for(t=0;a>t;t++)i(e[t])},s=x(o);return{_:function(){e=t.getElementsByClassName(n.autosizesClass),c("resize",s)},checkElems:s,updateElem:i}}(),S=function(){!S.i&&t.getElementsByClassName&&(S.i=!0,B._(),_._())};return d(function(){n.init&&S()}),a={cfg:n,autoSizer:B,loader:_,init:S,uP:C,aC:v,rC:b,hC:y,fire:A,gW:w,rAF:k}});var x=document.querySelectorAll(".lazyloadimg"),i;for(i=0;i<x.length;i++)x[i].innerHTML=x[i].innerHTML.replace("<!--","").replace("-->","");