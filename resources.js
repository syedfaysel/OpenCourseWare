fetch("https://syedfaysel.github.io/json-api/ocw/courses.json")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    const course = getCourse(data);
    showCourseResources(course);
  });

function getCourse(courses) {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("id");
  // console.log(query);
  for (const course of courses) {
    const courseCode = course.courseCode.toLowerCase();
    if (courseCode.toLowerCase() == query.toLowerCase()) {
      // console.log(course);
      return course;
    }
  }
}

function showCourseResources(course) {
  let courseInfoDiv = document.getElementById("resources");

  // Creating elements for course info
  let infoContent = document.createElement("div");
  infoContent.innerHTML = `<h2>${course.courseCode}: ${course.title}</h2>`;
  let resourceList = document.createElement("ul");

  course.resources.map((resource) => {
    console.log(resource);
    let listItem = document.createElement("li");
    listItem.innerHTML = `<a href="${resource.link}" target="_blank">${resource.title}</a>`;
    resourceList.appendChild(listItem);
  });

  infoContent.appendChild(resourceList);
  courseInfoDiv.appendChild(infoContent);
}

// Fetching tutorial data from json file & Creating a list of tutorials

//
