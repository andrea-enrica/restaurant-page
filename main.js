(()=>{"use strict";var e={};function t(){let e=document.getElementById("content");e.classList.add("menu"),document.getElementById("menu").classList.add("active");let t=document.createElement("div");t.classList.add("container");let n=document.createElement("h4");n.classList.add("restaurantName"),n.innerText="Papancherrye",t.appendChild(n);let a=document.createElement("h1");a.innerText="Menu",t.appendChild(a);const c=document.createElement("hr");t.appendChild(c);let i=document.createElement("div");i.classList.add("main-menu"),t.appendChild(i);const u=[{name:'Papanash "The classic".........................15$',ingredients:"Lorem ipsum dolor sit amet, aliquam quam augue, accumsan faucibus nulla elementum, luctus faucibus massa."},{name:'Papanash "Chic\'n sweet"......................20$',ingredients:"Lorem ipsum dolor sit amet, aliquam quam augue, accumsan faucibus nulla elementum, luctus faucibus massa."},{name:'Papanash "Sweet for my lips"...........23$',ingredients:"Lorem ipsum dolor sit amet, aliquam quam augue, accumsan faucibus nulla elementum, luctus faucibus massa."},{name:'Papanash "I can\'t resist"......................20$',ingredients:"Lorem ipsum dolor sit amet, aliquam quam augue, accumsan faucibus nulla elementum, luctus faucibus massa."},{name:'Papanash "This is heaven"....................17$',ingredients:"Lorem ipsum dolor sit amet, aliquam quam augue, accumsan faucibus nulla elementum, luctus faucibus massa."}];for(let e=0;e<u.length;e++){const t=document.createElement("h2");t.classList.add("name"),t.innerHTML=u[e].name,i.appendChild(t);const n=document.createElement("p");n.classList.add("ingredients"),n.innerHTML=u[e].ingredients,i.appendChild(n);const a=document.createElement("hr");i.appendChild(a)}e.appendChild(t),document.body.style.backgroundImage="url('/home/enrica/Documents/work-space/the_odin_project/Javascript/restaurant-page/media/Papanas1.jpg')"}function n(){let n=document.getElementById("content");if(n.classList.add("home"),!document.getElementsByClassName("topNav")[0]){let e=function(){let e=document.createElement("div"),t=document.createElement("button"),n=document.createElement("button"),a=document.createElement("button"),c=document.createElement("button");return e.setAttribute("class","topNav"),t.innerText="HOME",t.setAttribute("id","home"),n.innerText="MENU",n.setAttribute("id","menu"),a.innerText="ABOUT",a.setAttribute("id","about"),c.innerText="CONTACT US",c.setAttribute("id","contact"),e.appendChild(t),e.appendChild(n),e.appendChild(a),e.appendChild(c),e}();n.appendChild(e)}document.getElementById("home").classList.add("active");let a=document.createElement("div");a.classList.add("container");let c=document.createElement("h1"),i=document.createElement("h4"),u=document.createElement("button");c.innerText="Papancherrye",i.innerText="The authentic taste from HOME",u.innerText="Delivery",u.onclick=()=>{(0,e.clear)(),t()},a.appendChild(c),a.appendChild(i),a.appendChild(u).setAttribute("id","delivery"),n.appendChild(a),document.body.style.backgroundImage="url('/home/enrica/Documents/work-space/the_odin_project/Javascript/restaurant-page/media/Papanas1.jpg')"}function a(){let e=document.getElementById("content");document.getElementsByClassName("container")[0].remove(),e.className="";let t=document.getElementsByTagName("button");for(let e=0;e<t.length;e++)t[e].className=""}(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e),n(),document.getElementById("home").onclick=()=>{a(),n()},document.getElementById("menu").onclick=()=>{a(),t()},document.getElementById("about").onclick=()=>{a(),function(){let e=document.getElementById("content");e.classList.add("about"),document.getElementById("about").classList.add("active");let t=document.createElement("div");t.classList.add("container");let n=document.createElement("h4");n.classList.add("restaurantName"),n.innerText="Papancherrye",t.appendChild(n);let a=document.createElement("h1");a.innerText="Romanian culinary story",t.appendChild(a);let c=document.createElement("div");c.classList.add("about-main"),t.appendChild(c);let i=document.createElement("p");i.innerText="Ut at mollis sapien, non condimentum metus. Etiam eleifend ullamcorper felis a consectetur. Morbi vulputate condimentum nunc hendrerit facilisis. Curabitur ac risus nec sem tristique pharetra. Nulla ornare consectetur libero eu congue. Suspendisse vulputate varius erat, vitae pulvinar justo mattis ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris sit amet consectetur dolor. Donec nec vulputate erat. Integer tempus volutpat orci sed consectetur. Donec tellus lorem, porttitor quis egestas id, mattis a arcu. Nullam et est posuere, ornare nibh nec, tempus nulla. In sit amet maximus augue. Etiam accumsan leo a urna condimentum iaculis. Quisque fermentum id est placerat fringilla.",c.appendChild(i),e.appendChild(t),document.body.style.backgroundImage="url('/home/enrica/Documents/work-space/the_odin_project/Javascript/restaurant-page/media/Papanas1.jpg')"}()},document.getElementById("contact").onclick=()=>{a(),function(){let e=document.getElementById("content");e.classList.add("contact"),document.getElementById("contact").classList.add("active");let t=document.createElement("div");t.classList.add("container");let n=document.createElement("h4");n.classList.add("restaurantName"),n.innerText="Papancherrye",t.appendChild(n);let a=document.createElement("h1");a.innerText="Contact Us",t.appendChild(a);let c=document.createElement("h4");c.classList.add("contactMotto"),c.innerText="Mamanash would love to hear from you. Give us a call or send us an email.",t.appendChild(c);let i=document.createElement("div");i.classList.add("contact-main");let u=document.createElement("h5");u.innerText="Address";let d=document.createElement("p");d.innerText="53 Papanas St. Cluj-Napoca ";let l=document.createElement("h5");l.innerText="Hours";let s=document.createElement("p");s.innerText="Wednesday-Sunday: 12:00 - 20:00";let m=document.createElement("h5");m.innerText="Contact us";let o=document.createElement("p");o.innerText="Phone: 0720000000";let r=document.createElement("p");r.innerText="Email: papancherrye@notarealemail.com",i.appendChild(u),i.appendChild(d),i.appendChild(l),i.appendChild(s),i.appendChild(m),i.appendChild(o),i.appendChild(r),t.appendChild(i),e.appendChild(t),document.body.style.backgroundImage="url('/home/enrica/Documents/work-space/the_odin_project/Javascript/restaurant-page/media/Papanas1.jpg')"}()}})();