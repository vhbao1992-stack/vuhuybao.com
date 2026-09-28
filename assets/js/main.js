(function(){
  var header=document.querySelector('.header'),
      burger=document.querySelector('.burger'),
      menu=document.querySelector('.menu');
  function onScroll(){ if(header) header.classList.toggle('scrolled', window.scrollY>8); }
  window.addEventListener('scroll', onScroll, {passive:true}); onScroll();
  if(burger && menu){
    burger.addEventListener('click', function(){
      var open=menu.classList.toggle('open');
      burger.classList.toggle('x', open);
      burger.setAttribute('aria-expanded', open);
    });
    menu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ menu.classList.remove('open'); burger.classList.remove('x'); burger.setAttribute('aria-expanded', false); });
    });
  }
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, {threshold:.12, rootMargin:'0px 0px -40px 0px'});
    els.forEach(function(el){ io.observe(el); });
  } else { els.forEach(function(el){ el.classList.add('in'); }); }
  var y=document.getElementById('y'); if(y) y.textContent=new Date().getFullYear();
})();
(function(){
  var box=document.getElementById('booking'); if(!box) return;
  var url=(box.getAttribute('data-url')||'').trim(); if(!url) return;
  box.classList.add('has-url');
  var f=document.createElement('iframe');
  f.src=url+(url.indexOf('?')>-1?'&':'?')+'gv=true';
  f.title='Đặt lịch tư vấn với Vũ Huy Bảo'; f.loading='lazy';
  box.querySelector('.booking-frame').appendChild(f);
  document.querySelectorAll('.js-book').forEach(function(a){ a.href=url; a.textContent='Mở trang đặt lịch'; });
})();
