(()=>{"use strict";const e=function(e){return new Swiper(e,{spaceBetween:16,slidesPerView:"auto",pagination:{el:".swiper-pagination",clickable:!0}})},t=function(t,s,n,i,a,o,c,r,l){let d,p=document.querySelector(t),m=document.querySelector(i),u=p.querySelector(s),_=p.querySelector(n),g=document.querySelector(r),v=0;window.innerWidth<768&&(d=e(".swiper")),p.addEventListener("click",(function(e){e.preventDefault(),_.classList.toggle("expand__icon-rotate"),m.classList.toggle(a),g.classList.toggle(l),window.matchMedia("(min-width: 1120px)and (max-width: 1980px)").matches?p.classList.toggle(o):p.classList.toggle(c),0===v?(u.textContent="Скрыть",v=1):(u.textContent="Показать всё",v=0)})),window.addEventListener("resize",(function(){window.matchMedia("(min-width:0 ) and (max-width: 768px)").matches&&(m.classList.add(a),void 0===d&&(d=e(".swiper"))),window.matchMedia("(min-width: 768px)and (max-width: 1980px)").matches&&void 0!==d&&(d[0].destroy(!0,!0),d[1].destroy(!0,!0),d[2].destroy(!0,!0),d=void 0),window.matchMedia("(min-width: 768px)and (max-width: 1120px)").matches&&(1===v?(p.classList.add(c),p.classList.remove(o),g.classList.add(l)):(m.classList.remove(a),g.classList.remove(l))),window.matchMedia("(min-width: 1120px)and (max-width: 1980px)").matches&&(1===v?(p.classList.add(o),p.classList.remove(c),g.classList.add(l)):(m.classList.remove(a),g.classList.remove(l)))}))},s=function(e,t,s,n,i){let a=document.querySelector(e),o=document.querySelector(t),c=document.querySelector(s),r=document.querySelector(n);a.addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation(),r.classList.add(i)})),o.addEventListener("click",(e=>{e.preventDefault(),e.stopPropagation(),r.classList.remove(i)})),c.addEventListener("click",(e=>{e.preventDefault(),e.stopPropagation(),r.classList.remove(i)})),document.addEventListener("click",(e=>{!e.composedPath().includes(r)&&r.classList.contains(i)&&r.classList.remove(i)}))};t(".repair-elements__button-wrapper .expand",".repair-elements__button-wrapper .expand__text",".repair-elements__button-wrapper .expand__icon",".repair-elements__list","repair-elements__list--visible","repair-elements__expand--margin-top-small","repair-elements__expand--margin-top-big","article.products-repair","products-repair--top-margin"),t(".technique-elements__button-wrapper .expand",".technique-elements__button-wrapper .expand__text",".technique-elements__button-wrapper .expand__icon",".technique-elements__list","technique-elements__list--visible","technique-elements__expand--margin-top-small","technique-elements__expand--margin-top-big","section.products-repair","products-repair--top-margin"),function(){let e=document.querySelector(".header__wrap-margin-left .button"),t=document.querySelector(".pop-up-menu"),s=document.querySelector(".pop-up-menu__wrap .button");e.addEventListener("click",(e=>{e.stopPropagation(),t.classList.add("pop-up-menu--visible")})),s.addEventListener("click",(e=>{e.stopPropagation(),t.classList.remove("pop-up-menu--visible")})),document.addEventListener("click",(e=>{!e.composedPath().includes(t)&&t.classList.contains("pop-up-menu--visible")&&t.classList.remove("pop-up-menu--visible")}))}(),s(".list-buttons__button .button__phone-icon",".request-call__button",".modals__call .clean-list__button",".modals__call","modals__call--visible"),s(".list-buttons__button .button__message-icon",".request-message__button",".modals__message .clean-list__button",".modals__message","modals__message--visible"),function(){let e=document.querySelector(".page-service__text .expand"),t=document.querySelector(".page-service__text .expand__icon"),s=document.querySelector(".page-service__text-formation"),n=document.querySelector(".page-service__text .expand__text"),i=0;e.addEventListener("click",(a=>{e.classList.toggle("expand-margin-top"),t.classList.toggle("expand__icon-rotate"),s.classList.toggle("page-service__text-formation--visible"),i?(n.textContent="Читать далее",i=0):(i=1,n.textContent="Скрыть")}))}()})();
//# sourceMappingURL=bundle.js.map
