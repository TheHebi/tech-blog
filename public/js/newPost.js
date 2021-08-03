async function createPostHandler(event) {
  event.preventDefault();

  location.assign("/dash/new");
}

document.querySelector("#create-new-post").addEventListener("click", createPostHandler);
