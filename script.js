// Hamburger toggle
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
menuBtn.onclick = () => navLinks.classList.toggle("show");

// Splash screen
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    document.getElementById("content").style.display = "block";
    document.getElementById("popupOverlay").style.display = "flex";
  }, 1500);
});

// Popup
function closePopup() { document.getElementById("popupOverlay").style.display = "none"; }

// Promo modal
const modal = document.getElementById("promoModal");
const closeBtn = modal.querySelector(".close");
function closePromo() { modal.classList.remove("show"); }
function redirectPromo() { window.location.href = "https://vaqf.uz"; }
window.addEventListener("load", () => setTimeout(() => modal.classList.add("show"), 3825));

// Telegram Banner
window.addEventListener("load", function() {
  setTimeout(function() { document.getElementById("telegramBanner").style.display="flex"; }, 9000);
});

// Carousel
let index=0;
const slides=document.querySelectorAll(".slide");
function showSlide(){ slides.forEach((s,i)=> s.style.display=(i===index)?"block":"none"); index=(index+1)%slides.length; }
showSlide(); setInterval(showSlide,3000);

// ===== BLOG POSTS =====
const posts = [
  { title: "How Small Habits Change Your Life", description: "Big results come from small daily improvements. Here's why.", content: "Small habits are powerful because they build lasting change quietly. Over time, small steps compound into major progress." },
  { title: "Why Simplicity Wins", description: "Less is often more.", content: "Simplicity removes noise. Focus on what matters. Less clutter, more clarity. This principle works in design, business, and life." },
  { title: "The Power of Consistency", description: "Consistency beats intensity.", content: "Success is built on repeated action, not bursts of effort. Steady discipline shapes identity and creates lasting growth." }
];
const container=document.getElementById("blog-container");
function showPosts(){ container.innerHTML=""; posts.forEach((post,i)=>{ const div=document.createElement("div"); div.className="post"; div.innerHTML=`<h2>${post.title}</h2><p>${post.description}</p>`; div.addEventListener("click",()=>showPost(i)); container.appendChild(div); }); animatePosts(); }
showPosts();
function animatePosts(){ document.querySelectorAll(".post").forEach((el,idx)=>{ el.style.animationDelay=`${idx*0.2}s`; }); }
function showPost(i){ const post=posts[i]; container.innerHTML=`<div class="single-post"><h2>${post.title}</h2><p>${post.content}</p><button onclick="showPosts()">← Back to Posts</button></div>`; window.scrollTo({top:0,behavior:"smooth"}); }

// Intersection animation
const observer=new IntersectionObserver(entries=>{ entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.style.opacity=1; entry.target.style.transform="translateY(0)"; } }); },{threshold:0.2});
document.querySelectorAll(".fade-in, .post").forEach(el=>observer.observe(el));
