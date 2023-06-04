    // fetch data here
    fetch("https://syedfaysel.github.io/json-api/ocw/courses.json")
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
          <a href="./videos.html?id=${course.courseCode}" >Learn -></a>`;
          items.appendChild(item);
        }
      }