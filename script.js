const firebaseConfig={apiKey:"YOUR_API_KEY",authDomain:"YOUR_PROJECT.firebaseapp.com",projectId:"YOUR_PROJECT",storageBucket:"YOUR_PROJECT.appspot.com",messagingSenderId:"YOUR_SENDER_ID",appId:"YOUR_APP_ID"};
firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
const statsDocRef=db.collection("site_stats").doc("counts");
const visitorEl=document.getElementById("visitorCount");
const likeEl=document.getElementById("likeCount");
const shareEl=document.getElementById("shareCount");
const downloadEl=document.getElementById("downloadCount");
function updateUI(v,l,s,d){visitorEl.textContent=v;likeEl.textContent=l;shareEl.textContent=s;downloadEl.textContent=d;}
async function loadCounts(){const doc=await statsDocRef.get();if(!doc.exists){await statsDocRef.set({visitors:0,likes:0,shares:0,downloads:0});updateUI(0,0,0,0);}else{const d=doc.data();updateUI(d.visitors||0,d.likes||0,d.shares||0,d.downloads||0);}}
async function incrementCounter(field,el){await statsDocRef.set({[field]:firebase.firestore.FieldValue.increment(1)},{merge:true});const doc=await statsDocRef.get();el.textContent=doc.data()[field];}
async function likeProfile(){await incrementCounter("likes",likeEl);}
async function shareProfile(){navigator.clipboard.writeText(window.location.href);await incrementCounter("shares",shareEl);alert("Profile link copied!");}
async function downloadResume(){await incrementCounter("downloads",downloadEl);alert("Resume download started!");}
window.addEventListener("DOMContentLoaded",async()=>{await loadCounts();await incrementCounter("visitors",visitorEl);});
window.likeProfile=likeProfile;window.shareProfile=shareProfile;window.downloadResume=downloadResume;
// load blogs
const blogContainer=document.getElementById('blogContainer');
async function loadBlogs(){const snap=await db.collection('blogs').orderBy('date','desc').get();if(snap.empty){blogContainer.innerHTML='<p>No blogs yet.</p>';return;}blogContainer.innerHTML='';snap.forEach(doc=>{const b=doc.data();blogContainer.innerHTML+=`<div class="blog-card"><h3>${b.title}</h3><p>${b.description}</p><a href="${b.link}" target="_blank" class="read-more">Read More →</a></div>`});}
window.addEventListener('DOMContentLoaded',loadBlogs);
