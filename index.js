


const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Permissions-Policy": "ch-ua-form-factor,ch-ua-full-version=*,ch-ua-platform=*,ch-ua-platform-version=*,ch-ua-model=*,ch-ua-mobile=false,ch-ua-bitness=*"
  }
};

fetch("https://syedfaysel.github.io/json-api/ocw/courses.json", options)
  .then(res => res.json())
  .then(data => {
    // console.log(data);
    const course = getCourse(data);
    CreateTutorialList(course);
})

function getCourse(courses) {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("id");
  console.log(query);
  for (const course of courses) { 
    if (course.courseCode == query) {
      console.log(course);
      return course;
    }
  }
}


function CreateTutorialList(course) {
  let tutorialList = document.getElementById("tutorials");

  // Creating a list of tutorials from course.videos array of obejcts
  // for (const tutorial in course.videos) {
  //   let tutorialItem = document.createElement("li");
  //   tutorialItem.innerHTML = `<button class="btn"
  //   onclick="document.getElementById('video-player').src='${course.videos[tutorial].link}'">Link Here</button>`;
  //   tutorialList.appendChild(tutorialItem);
  // }

  // Creating a list of tutorials from course.videos array of obejcts
  course.videos.map(tutorial => {
    let tutorialItem = document.createElement("li");
    tutorialItem.innerHTML = `<button class="btn"
    onclick="document.getElementById('video-player').src='${tutorial.link}'">${tutorial.title}</button>`;
    tutorialList.appendChild(tutorialItem);
  })
  
}

// Fetching tutorial data from json file & Creating a list of tutorials



