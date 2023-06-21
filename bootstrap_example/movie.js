function getDataApi() {
  fetch("https://api.tvmaze.com/shows")
    .then((data) => {
      let x = data.json();
      console.log(x);
      return x;
    })
    .then((result) => result[0])
    .then((X) => console.log(X));
}
let filmler = [];
function getDataApi2() {
  fetch("https://api.tvmaze.com/shows")
    .then((data) => data.json())
    .then((result) =>
      result.map((x) => {
        filmler.push({
          id: x.id,
          genres: x.genres,
          language: x.language,
          name: x.name,
          image: x.image.medium,
          country: x.network?.country.name,
          rating: x.rating.average,
          summary: x.summary,
          url: x.url,
          premiered: x.premiered,
        });
      })
    );

  setTimeout(addAllMovie, 3000);
}
getDataApi2();

let allfilm = document.getElementById("allfilm");

 function addAllMovie() {
  allfilm.innerHTML = "";

  console.log(filmler);

  filmler.map((x) => {
    allfilm.innerHTML += `<div class="card my-1" style="width: 20rem;">
        <img src="${x.image}"
            class="card-img-top p-3 " alt="...">
        <div class="card-body">
            <h5 class="card-title">${x.name}</h5>
            <p class="card-text">${x.summary.toString()}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${x.language}</li>
            <li class="list-group-item"> ${x.premiered}</li>
            <li class="list-group-item">${x.country}</li>
            <li class="list-group-item d-flex justify-content-around">
                <span class="badge text-bg-primary">Drama</span>
                <span class="badge text-bg-primary">Science-Fiction</span>
                <span class="badge text-bg-primary">Thriller</span>
            </li>

        </ul>
        <div class="card-body">
            <a href="${x.url}"
                class="card-link">${x.url}</a>
        </div>





    </div>  `;
  });
}
