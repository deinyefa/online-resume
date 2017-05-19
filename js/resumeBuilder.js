
var name = HTMLheaderName.replace("%data%", "Deinyefa Eporwei");
var role = HTMLheaderRole.replace("%data%", "Front-end Developer");
var contact = HTMLcontactGeneric.replace("%contact%", "mobile");
var logo = HTMLbioPic.replace("%data%", "images/fry.jpg");
var welcomeMessage = HTMLwelcomeMsg.replace("%data%", "Lorem ipsum dolor sit amet.");

var bio = {
  "name" : name,
  "role" : role,
  "contact" : {
    "mobile" : "613-261-2124",
    "email" : "df.eporwer@gmail.com",
    "github" : "deinyefa",
    "location": "Ottawa, Canada"
  },
  "welcomeMessage" : welcomeMessage,
  "skills" : [
    "HTML", " CSS", " C#", " Unity3D", " JS"
  ],
  "pictureURL" : logo
};

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
  $("#skills").append(formattedSkill);
}


var education = {
  "school": [
    {
      "name": "Carleton University",
      "years": "2012 - 2017",
      "city": "Ottawa",
      "degree": "BS",
      "major": ["Earth Sciences"]
    }
  ],
  "onlineCourses": [
    {
      "name": "Udacity",
      "city": "San Francisco",
      "degree": "online",
      "course": ["VR Developer", " Front-end Developer"]
    }
  ]
};

var work = {
  "jobs": [
    {
      "title": "Front-end Developer",
      "employer": "live-love.ca",
      "location": "Ottawa, CA",
      "dates": "in progress",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore   magna aliqua."
    },
    {
      "title": "VR Developer",
      "employer": "independent",
      "location": "Ottawa, CA",
      "dates": "in progress",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore   magna aliqua."
    }
  ]
};

for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedEmployerTitle);

  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);

  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);

  // var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  // $(".work-entry:last").append(formattedLocation);
}


var projects = {
  "Front-end": [
    {
      "name": "My Portfolio",
      "completed": "May, 2017",
      "tools": ["HTML", " CSS"],
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "images": ["http://placehold.it/150x150", " http://placehold.it/150x150"]
    }
  ],
  "VR": [
    {
      "name": "Scream",
      "completed": "May, 2017",
      "tools": ["Unity3D", " C#"],
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "images": ["http://placehold.it/150x150", " http://placehold.it/150x150"]
    }
  ]
};



$("#header").prepend(bio.pictureURL);
$("#header").prepend(bio.welcomeMessage);
$("#header").prepend(bio.contact);
$("#header").prepend(bio.role);
$("#header").prepend(bio.name);

$("#workExperience").prepend(work.description);
$("#workExperience").prepend(work.years);
$("#workExperience").prepend(work.employer);
$("#workExperience").prepend(work.title);

$("#projects").append(projects);
$("#education").append(education);






/*- Albert EINSTIEN
var finalName = oldName;
var names = oldName.split(" ");
names[1] = names[1].toUpperCase();
names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
finalName = names.join(" ");
return finalName;
*/
