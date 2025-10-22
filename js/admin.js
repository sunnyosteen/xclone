document.addEventListener("DOMContentLoaded", () => {
  // Default data (3 posts)
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
        isRepost: false,
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
        isRepost: false,
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

  let data = JSON.parse(localStorage.getItem("xData")) || defaultData;

  // Fill profile fields
  document.getElementById("profileName").value = data.name;
  document.getElementById("profileUsername").value = data.username;
  document.getElementById("followersCount").value = data.followers;
  document.getElementById("followingCount").value = data.following;

  // Profile image upload + preview
  const profileImageInput = document.getElementById("profileImageInput");
  const previewImg = document.createElement("img");
  previewImg.src = data.image;
  previewImg.classList.add("rounded-circle", "mt-2");
  previewImg.style.width = "80px";
  previewImg.style.height = "80px";
  previewImg.style.objectFit = "cover";
  profileImageInput.parentElement.appendChild(previewImg);

  profileImageInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        data.image = reader.result;
        previewImg.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  });

  // Posts section
  const postsContainer = document.getElementById("postsContainer");
  postsContainer.innerHTML = "";

  // Generate 3 editable posts
  for (let i = 0; i < 3; i++) {
    if (!data.posts[i]) {
      data.posts[i] = {
        content: "",
        image: "",
        time: "",
        date: "",
        views: "",
        likes: "",
        replies: "",
        shares: "",
        isRepost: false,
      };
    }

    const post = data.posts[i];
    const card = document.createElement("div");
    card.classList.add("card", "p-3", "mb-3");

    card.innerHTML = `
      <h5>Post ${i + 1}</h5>

      <div class="form-check form-switch mb-3">
        <input class="form-check-input" type="checkbox" id="isRepost${i}" ${post.isRepost ? "checked" : ""}>
        <label class="form-check-label">Is Repost?</label>
      </div>

      <div class="repostFields mb-3" id="repostFields${i}" style="display: ${post.isRepost ? "block" : "none"};">
        <h6>Repost Author Info</h6>
        <input type="text" id="repostName${i}" value="${post.repostAuthor?.name || ""}" class="form-control mb-2" placeholder="Repost Author Name">
        <input type="text" id="repostUsername${i}" value="${post.repostAuthor?.username || ""}" class="form-control mb-2" placeholder="Repost Username">
        <label>Repost Author Image</label>
        <input type="file" id="repostImage${i}" class="form-control mb-2">
        <img id="previewRepostImage${i}" src="${post.repostAuthor?.image || ""}" class="rounded mt-2" style="max-width:100px;display:${post.repostAuthor?.image ? "block" : "none"};">
      </div>

      <textarea id="content${i}" class="form-control mb-2" rows="2" placeholder="Post content">${post.content}</textarea>

      <label>Post Image (optional)</label>
      <input type="file" id="postImage${i}" class="form-control mb-2">
      <img id="previewPostImage${i}" src="${post.image || ""}" class="rounded mt-2" style="max-width:150px; display:${post.image ? "block" : "none"};">

      <input type="text" id="postTime${i}" value="${post.time}" class="form-control mb-2" placeholder="Time (e.g., 2h)">
      <input type="text" id="postDate${i}" value="${post.date}" class="form-control mb-2" placeholder="Date (e.g., Oct 19, 2025)">

      <div class="row g-2">
        <div class="col"><input id="postViews${i}" class="form-control" value="${post.views}" placeholder="Views"></div>
        <div class="col"><input id="postLikes${i}" class="form-control" value="${post.likes}" placeholder="Likes"></div>
        <div class="col"><input id="postReplies${i}" class="form-control" value="${post.replies}" placeholder="Replies"></div>
        <div class="col"><input id="postShares${i}" class="form-control" value="${post.shares}" placeholder="Shares"></div>
      </div>
    `;

    postsContainer.appendChild(card);

    // Post image upload
    const postImageInput = card.querySelector(`#postImage${i}`);
    const previewPost = card.querySelector(`#previewPostImage${i}`);
    postImageInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          data.posts[i].image = reader.result;
          previewPost.src = reader.result;
          previewPost.style.display = "block";
        };
        reader.readAsDataURL(file);
      }
    });

    // Repost toggle visibility
    const repostToggle = card.querySelector(`#isRepost${i}`);
    const repostFields = card.querySelector(`#repostFields${i}`);
    repostToggle.addEventListener("change", (e) => {
      repostFields.style.display = e.target.checked ? "block" : "none";
    });

    // Repost image upload
    const repostImageInput = card.querySelector(`#repostImage${i}`);
    const previewRepost = card.querySelector(`#previewRepostImage${i}`);
    repostImageInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          if (!data.posts[i].repostAuthor) data.posts[i].repostAuthor = {};
          data.posts[i].repostAuthor.image = reader.result;
          previewRepost.src = reader.result;
          previewRepost.style.display = "block";
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Save all changes
  document.getElementById("saveData").addEventListener("click", () => {
    data.name = document.getElementById("profileName").value;
    data.username = document.getElementById("profileUsername").value;
    data.followers = document.getElementById("followersCount").value;
    data.following = document.getElementById("followingCount").value;

    data.posts.forEach((_, i) => {
      data.posts[i].isRepost = document.getElementById(`isRepost${i}`).checked;
      data.posts[i].content = document.getElementById(`content${i}`).value;
      data.posts[i].time = document.getElementById(`postTime${i}`).value;
      data.posts[i].date = document.getElementById(`postDate${i}`).value;
      data.posts[i].views = document.getElementById(`postViews${i}`).value;
      data.posts[i].likes = document.getElementById(`postLikes${i}`).value;
      data.posts[i].replies = document.getElementById(`postReplies${i}`).value;
      data.posts[i].shares = document.getElementById(`postShares${i}`).value;

      if (data.posts[i].isRepost) {
        data.posts[i].repostAuthor = {
          name: document.getElementById(`repostName${i}`).value,
          username: document.getElementById(`repostUsername${i}`).value,
          image: data.posts[i].repostAuthor?.image || ""
        };
      } else {
        data.posts[i].repostAuthor = null;
      }
    });

    localStorage.setItem("xData", JSON.stringify(data));
    alert("✅ All changes saved successfully!");
  });
});
