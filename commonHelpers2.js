import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as m,i as c}from"./assets/vendor-77e16229.js";const e={startBtn:document.querySelector("[data-start]"),input:document.querySelector("#datetime-picker"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")};let r,o;const f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){o=t[0],o<new Date?(c.error({title:"Error",message:"Please choose a date in the future"}),e.startBtn.disabled=!0):e.startBtn.disabled=!1}};m(e.input,f);e.startBtn.addEventListener("click",()=>{h()});function h(){o&&o>new Date&&(e.startBtn.disabled=!0,clearInterval(r),r=setInterval(()=>{const n=o-new Date;n<=0?(clearInterval(r),c.success({title:"Success",message:"Countdown finished"}),a(0),e.startBtn.disabled=!1):a(n)},1e3))}function a(t){const n=y(t);e.days.textContent=s(n.days),e.hours.textContent=s(n.hours),e.minutes.textContent=s(n.minutes),e.seconds.textContent=s(n.seconds)}function y(t){const u=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),i=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:d,minutes:i,seconds:l}}function s(t){return String(t).padStart(2,"0")}
//# sourceMappingURL=commonHelpers2.js.map
