window.addEventListener("load",function(){var f=function(d,c,b,e){function a(){var a=(new Date).getTime();a=Math.round(b-Math.max((f-a)/e,0)*h);d.innerHTML=a;a==b&&clearInterval(g)}var h=b-c;c=Math.abs(Math.floor(e/h));c=Math.max(c,50);var f=(new Date).getTime()+e;var g=setInterval(a,c);a()},g=new IntersectionObserver(function(d,c){d.forEach(function(b){0<b.intersectionRatio&&b.target.querySelectorAll("#"+b.target.id+" .count").forEach(function(b){var a=b.innerText.trim();a=2<a.length-(a.indexOf(".")+
1)?a.replace(/\./ig,""):Math.floor(a);f(b,0,a,3E3)})})},{rootMargin:"0px",threshold:.1});document.querySelectorAll(".counters").forEach(function(d){g.observe(d)})});