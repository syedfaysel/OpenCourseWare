


const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Permissions-Policy": "ch-ua-form-factor,ch-ua-full-version=*,ch-ua-platform=*,ch-ua-platform-version=*,ch-ua-model=*,ch-ua-mobile=false,ch-ua-bitness=*"
  }
};

let url = "https://syedfaysel.github.io/json-api/ocw/courses.json";
// url = "./assets/courses.json";

fetch(url, options)
  .then(res => res.json())
  .then(data => {
    // console.log(data);
    const course = getCourse(data);
    CreateTutorialList(course);
})

function getCourse(courses) {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("id");
  // console.log(query);
  for (const course of courses) { 
    const courseCode = course.courseCode.toLowerCase();
    if (courseCode == query.toLowerCase()) {
      // console.log(course);
      return course;
    }
  }
}


function CreateTutorialList(course) {
  let tutorialList = document.getElementById("tutorials");
  let videoPlayer = document.getElementById("video-player");

  // default video will be first one
  videoPlayer.src = course.videos[0].link;



  // Creating a list of tutorials from course.videos array of obejcts
  course.videos.map(tutorial => {
    
    let tutorialItem = document.createElement("li");
    tutorialItem.innerHTML = `<button class="btn"
    onclick="document.getElementById("video-player").src='${tutorial.link}'">${tutorial.title.toUpperCase()}</button>`;
    tutorialList.appendChild(tutorialItem);
  })
  
}

// Fetching tutorial data from json file & Creating a list of tutorials



// 
