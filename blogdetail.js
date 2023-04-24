const postSlug = new URLSearchParams(window.location.search).get("slug");
const postSlugWithSpaces = postSlug.replace(/-/g, " ");
console.log(postSlugWithSpaces);

fetch(
  `https://smart-soap.flywheelsites.com/wp-json/wp/v2/posts?slug=${postSlug}`
)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((posts) => {
    const post = posts.find(
      (post) => post.slug.replace(/-/g, " ") === postSlugWithSpaces
    );
    const postHTML = `
      <article>
        <h2>${post.title.rendered}</h2>
        <div>${post.content.rendered}</div>
      </article>
    `;

    const postDiv = document.querySelector("#post");
    postDiv.innerHTML = postHTML;
  })
  .catch((error) => {
    console.error("There was a problem fetching the data:", error);
  });