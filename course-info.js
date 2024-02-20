
// const options = {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     "Permissions-Policy": "ch-ua-form-factor,ch-ua-full-version=*,ch-ua-platform=*,ch-ua-platform-version=*,ch-ua-model=*,ch-ua-mobile=false,ch-ua-bitness=*"
//   }
// };

fetch("https://syedfaysel.github.io/json-api/ocw/courses.json")
  .then(res => res.json())
  .then(data => {
    // console.log(data);
    const course = getCourse(data);
    showCourseDetails(course);
})

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


function showCourseDetails(course) {
  let courseInfoDiv = document.getElementById("course-info");

  // Creating elements for course info
  let infoContent = document.createElement("div");
  infoContent.innerHTML = `<h2>${course.title}</h2>
  <p>${course.courseCode}</p>
  <p>${course.credit} Credits</p>
  <p>Prerequisites: ${course.prerequisite}</p>
  <p>Course type: ${course.courseType}</p>
  <div class="course-info-link"><a href="./videos.html?id=${course.courseCode}">Tutorials</a>
  <a href="./resources.html?id=${course.courseCode}">Resources</a></div>
  </div>`;


  courseInfoDiv.appendChild(infoContent);
  
}

// Fetching tutorial data from json file & Creating a list of tutorials



// 
