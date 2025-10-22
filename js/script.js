// document.addEventListener("DOMContentLoaded", () => {
//   // Default data (used if localStorage is empty)
//   const defaultData = {
//     image: "images/profilephoto.jpeg",
//     name: "Crash",
//     username: "@CrashiusClay69",
//     followers: "265K",
//     following: "833",
//     posts: [
//       { content:"Had a great day coding 🚀", image:"", time:"1h", date:"Oct 19, 2025", views:"1.2K", likes:"150", replies:"20", shares:"10", isRepost:false },
//       { content:"Check out my new project!", image:"", time:"2h", date:"Oct 18, 2025", views:"900", likes:"80", replies:"10", shares:"5", isRepost:false },
//       { content:"Working late but loving it 💻", image:"", time:"3h", date:"Oct 17, 2025", views:"700", likes:"65", replies:"8", shares:"3", isRepost:false },
//       { content:"Reposting: Great design inspiration ✨", image:"", time:"4h", date:"Oct 16, 2025", views:"500", likes:"40", replies:"4", shares:"1", isRepost:true }
//     ]
//   };

//   // Load stored (admin) data if present
//   const stored = localStorage.getItem("xData");
//   const data = stored ? JSON.parse(stored) : defaultData;

//   // Update desktop sidebar
//   const profileImageEl = document.getElementById("profileImage");
//   const profileNameEl = document.getElementById("profileName");
//   const usernameEl = document.getElementById("username");
//   const followersCountEl = document.getElementById("followersCount");
//   const followingCountEl = document.getElementById("followingCount");

//   if (profileImageEl) profileImageEl.src = data.image;
//   if (profileNameEl) profileNameEl.innerHTML = `${data.name} <i class="bi bi-patch-check-fill" style="color:#1DA1F2;"></i>`;
//   if (usernameEl) usernameEl.textContent = data.username;
//   if (followersCountEl) followersCountEl.textContent = data.followers;
//   if (followingCountEl) followingCountEl.textContent = data.following;

//   // Fill mobile offcanvas profile
//   const offImg = document.getElementById("offcanvasProfileImage");
//   const offName = document.getElementById("offcanvasProfileName");
//   const offHandle = document.getElementById("offcanvasUsername");
//   const offFollowers = document.getElementById("offcanvasFollowersCount");
//   const offFollowing = document.getElementById("offcanvasFollowingCount");
//   const offSwitchName = document.getElementById("offcanvasSwitchName");

//   if (offImg) offImg.src = data.image;
//   if (offName) offName.textContent = data.name;
//   if (offHandle) offHandle.textContent = data.username;
//   if (offFollowers) offFollowers.textContent = data.followers;
//   if (offFollowing) offFollowing.textContent = data.following;
//   if (offSwitchName) offSwitchName.textContent = data.name;

//   // Render posts (each post may have its own image)
//   const tweetFeed = document.getElementById("tweetFeed");
//   tweetFeed.innerHTML = "";

//   data.posts.forEach((p) => {
//     const postEl = document.createElement("article");
//     postEl.className = "tweet card bg-dark text-light p-3 mb-3 rounded-4 border-0 shadow-sm";

//     postEl.innerHTML = `
//       <div class="d-flex align-items-start">
//         <img src="${data.image}" alt="User avatar" class="avatar rounded-circle me-3" style="width:48px;height:48px;object-fit:cover;">
//         <div class="tweet-content flex-grow-1">
//           <div class="d-flex align-items-center justify-content-between">
//             <h6 class="mb-0 fw-bold">${data.name} <i class="bi bi-patch-check-fill" style="color:#1DA1F2;"></i> 
//               <span class="text-muted fw-normal">${data.username} · ${p.time}</span>
//             </h6>
//             <i class="bi bi-three-dots text-muted"></i>
//           </div>

//           <p class="mb-2 mt-1">${p.content}</p>

//           ${p.image ? `<img src="${p.image}" alt="Post Image" class="rounded-4 mb-2 w-100" style="max-height:400px;object-fit:cover;">` : ""}

//           <div class="d-flex justify-content-between text-muted small mt-2">
//             <span><i class="bi bi-chat"></i> ${p.replies}</span>
//             <span><i class="bi bi-arrow-repeat"></i> ${p.shares}</span>
//             <span><i class="bi bi-heart"></i> ${p.likes}</span>
//             <span><i class="bi bi-bar-chart"></i> ${p.views}</span>
//           </div>

//           <div class="text-muted small mt-1">${p.date}</div>
//         </div>
//       </div>
//     `;
//     tweetFeed.appendChild(postEl);
//   });

//   // Light/dark mode toggle
//   const toggleBtn = document.querySelector(".toggle-mode");
//   if (toggleBtn) {
//     toggleBtn.addEventListener("click", () => {
//       document.body.classList.toggle("light-mode");
//       toggleBtn.textContent = document.body.classList.contains("light-mode") ? "🌞" : "🌙";
//     });
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  const defaultData = {
    image: "images/profilephoto.jpeg",
    name: "Crash",
    username: "@CrashiusClay69",
    followers: "265K",
    following: "833",
    posts: [
      {
        content: "Had a great day coding 🚀",
        image: "",
        time: "1h",
        date: "Oct 19, 2025",
        views: "1.2K",
        likes: "150",
        replies: "20",
        shares: "10",
        isRepost: false
      },
      {
        content: "Check out my new project!",
        image: "",
        time: "2h",
        date: "Oct 18, 2025",
        views: "900",
        likes: "80",
        replies: "10",
        shares: "5",
        isRepost: false
      },
      {
        content: "Reposting: Great design inspiration ✨",
        image: "",
        time: "4h",
        date: "Oct 16, 2025",
        views: "500",
        likes: "40",
        replies: "4",
        shares: "1",
        isRepost: true,
        repostAuthor: {
          name: "DesignHub",
          username: "@designhub",
          image: "images/designhub.jpeg"
        }
      }
    ]
  };

  // Load from localStorage if present
  const stored = localStorage.getItem("xData");
  const data = stored ? JSON.parse(stored) : defaultData;

  // ===== DESKTOP SIDEBAR =====
  const profileImageEl = document.getElementById("profileImage");
  const profileNameEl = document.getElementById("profileName");
  const usernameEl = document.getElementById("username");
  const followersCountEl = document.getElementById("followersCount");
  const followingCountEl = document.getElementById("followingCount");

  if (profileImageEl) profileImageEl.src = data.image;
  if (profileNameEl) profileNameEl.innerHTML = `${data.name} <i class="bi bi-patch-check-fill" style="color:#1DA1F2;"></i>`;
  if (usernameEl) usernameEl.textContent = data.username;
  if (followersCountEl) followersCountEl.textContent = data.followers;
  if (followingCountEl) followingCountEl.textContent = data.following;

  // ===== MOBILE OFFCANVAS =====
  const offImg = document.getElementById("offcanvasProfileImage");
  const offName = document.getElementById("offcanvasProfileName");
  const offHandle = document.getElementById("offcanvasUsername");
  const offFollowers = document.getElementById("offcanvasFollowersCount");
  const offFollowing = document.getElementById("offcanvasFollowingCount");
  const offSwitchName = document.getElementById("offcanvasSwitchName");

  if (offImg) offImg.src = data.image;
  if (offName) offName.innerHTML = `${data.name} <i class="bi bi-patch-check-fill" style="color:#1DA1F2;"></i>`;
  if (offHandle) offHandle.textContent = data.username;
  if (offFollowers) offFollowers.textContent = data.followers;
  if (offFollowing) offFollowing.textContent = data.following;
  if (offSwitchName) offSwitchName.textContent = data.name;

  // ===== MAIN FEED =====
  const tweetFeed = document.getElementById("tweetFeed");
  tweetFeed.innerHTML = "";

  data.posts.slice(0, 3).forEach((p) => {
    const postEl = document.createElement("article");
    postEl.className = "tweet card bg-dark text-light p-3 mb-3 rounded-4 border-0 shadow-sm";

    // Use repost author if applicable
    const author = p.isRepost && p.repostAuthor
      ? p.repostAuthor
      : { name: data.name, username: data.username, image: data.image };

    postEl.innerHTML = `
      ${p.isRepost ? `
        <div class="text-muted small mb-1">
          <i class="bi bi-arrow-repeat"></i> ${data.name} reposted
        </div>` : ""}
      <div class="d-flex align-items-start">
        <img src="${author.image}" alt="User avatar" class="avatar rounded-circle me-3" style="width:48px;height:48px;object-fit:cover;">
        <div class="tweet-content flex-grow-1">
          <div class="d-flex align-items-center justify-content-between">
            <h6 class="mb-0 fw-bold">${author.name} 
              <i class="bi bi-patch-check-fill" style="color:#1DA1F2;"></i> 
              <span class="text-muted fw-normal">${author.username} · ${p.time}</span>
            </h6>
            <i class="bi bi-three-dots text-muted"></i>
          </div>
          <p class="mb-2 mt-1">${p.content}</p>
          ${p.image ? `<img src="${p.image}" alt="Post Image" class="rounded-4 mb-2 w-100" style="max-height:400px;object-fit:cover;">` : ""}
          <div class="d-flex justify-content-between text-muted small mt-2">
            <span><i class="bi bi-chat"></i> ${p.replies}</span>
            <span><i class="bi bi-arrow-repeat"></i> ${p.shares}</span>
            <span><i class="bi bi-heart"></i> ${p.likes}</span>
            <span><i class="bi bi-bar-chart"></i> ${p.views}</span>
          </div>
          <div class="text-muted small mt-1">${p.date}</div>
        </div>
      </div>
    `;
    tweetFeed.appendChild(postEl);
  });

  // ===== THEME TOGGLE =====
  const toggleBtn = document.querySelector(".toggle-mode");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      toggleBtn.textContent = document.body.classList.contains("light-mode") ? "🌞" : "🌙";
    });
  }
});
