// fetch data here
let url = "https://syedfaysel.github.io/json-api/ocw/courses.json";
// url = "./assets/courses.json";

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    displayData(data);
  });



  // display data
  function displayData(data) {
    let items = document.getElementById("courses");

    for(const course of data) {
      console.log(course);
      

      let item = document.createElement("div");
      item.classList = "course";
      item.innerHTML = `<p>${course.title}</p>
      <p>${course.courseCode}</p>
      <a href="./course.html?id=${course.courseCode}" >Explore-></a>`;
      items.appendChild(item);
    }
  }