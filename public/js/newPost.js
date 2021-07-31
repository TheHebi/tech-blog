async function createPostHandler(event) {
  event.preventDefault();

  document.location.replace("/dash/new");
}

document.querySelector("#create-new-post").addEventListener("click", createPostHandler);
