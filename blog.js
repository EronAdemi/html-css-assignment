const postsDiv = document.querySelector("#posts");

fetch("https://smart-soap.flywheelsites.com/wp-json/wp/v2/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((posts) => {
    const postHTML = posts
      .map(
        (post) => `
      <article>
        <h2>${post.title.rendered}</h2>
        <div>${post.excerpt.rendered}</div>
         <a href="blogdetail.html?slug=${post.slug}">Read More</a>
      </article>
    `
      )
      .join("");

    postsDiv.innerHTML = postHTML;
  })
  .catch((error) => {
    console.error("There was a problem fetching the data:", error);
  });
