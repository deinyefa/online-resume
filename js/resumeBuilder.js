//------------------------ Bio ------------------------------//
var name = HTMLheaderName.replace("%data%", "Deinyefa Eporwei");
var role = HTMLheaderRole.replace("%data%", "Front-end Developer");
var logo = HTMLbioPic.replace("%data%", "images/fry.jpg");
var welcomeMessage = HTMLwelcomeMsg.replace("%data%", "Lorem ipsum dolor sit amet.");

var bio = {
    "name": name,
    "role": role,
    "contacts": {
        "mobile": "613-261-2124",
        "email": "df.eporwer@gmail.com",
        "github": "deinyefa",
        "location": "Ottawa"
    },
    "welcomeMessage": welcomeMessage,
    "skills": [
        "HTML", " CSS", " C#", " Unity3D", " JS"
    ],
    "pictureURL": logo,
    "display": displayContacts = function() {
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);

        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);

        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);

        var formattedContactLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedContactLocation);
    }
};

//- biopic and welcome message
$("#header").append(bio.pictureURL);
$("#header").append(bio.welcomeMessage);

//- skills list
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

//- name, role and contact info
$("#header").prepend(bio.display());
$("#header").prepend(bio.role);
$("#header").prepend(bio.name);


// ---------------------- Education ----------------------------//
var education = {
    "schools": [{
        "name": "Carleton University",
        "location": "Ottawa, Ontario",
        "degree": "BS",
        "major": ["Earth Sciences"],
        "dates": "2017"
    }],
    "onlineCourses": [{
        "title": ["Front-end Developer"],
        "school": "Udacity",
        "dates": "2016 - present",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
    "display": displayEducation = function() {
        for (var schoolIndex = 0; schoolIndex < education.schools.length; schoolIndex++) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[schoolIndex].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[schoolIndex].degree);
            var formattedSchoolDegree = formattedSchoolName + formattedDegree;
            $(".education-entry:last").append(formattedSchoolDegree);

            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[schoolIndex].dates);
            $(".education-entry:last").append(formattedSchoolDates);

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schoolIndex].location);
            $(".education-entry:last").append(formattedSchoolLocation);

            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[schoolIndex].major);
            $(".education-entry:last").append(formattedSchoolMajor);
        }

        for (var courseIndex = 0; courseIndex < education.onlineCourses.length; courseIndex++) {
            $(".education-entry:last").append(HTMLonlineClasses);

            var onlineCoursesHeading = $(".online-courses");
            onlineCoursesHeading.css("padding-left", "0");

            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[courseIndex].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[courseIndex].school);
            var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
            $(".education-entry:last").append(formattedOnlineTitleSchool);

            var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[courseIndex].dates);
            $(".education-entry:last").append(formattedOnlineDate);

            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[courseIndex].url);
            $(".education-entry:last").append(formattedOnlineURL);
        }
    }
};

$("#education").append(education.display());


// -------------------------- Work ----------------------------- //
var work = {
    "jobs": [{
            "title": "Front-end Developer",
            "employer": "live-love.ca",
            "location": "Ottawa, Ontario",
            "dates": "in progress",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            "title": "VR Developer",
            "employer": "independent",
            "location": "Ottawa, Ontario",
            "dates": "in progress",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ],
    "display": displayWork = function() {
        for (var jobIndex = 0; jobIndex < work.jobs.length; jobIndex++) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobIndex].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[jobIndex].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[jobIndex].dates);
            $(".work-entry:last").append(formattedDates);

            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[jobIndex].location);
            $(".work-entry:last").append(formattedWorkLocation);

            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[jobIndex].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};

$("#workExperience").append(work.display());


// ------------------------- Projects ------------------------- //

var projects = {
    "projects": [{
            "title": "My Portfolio",
            "dates": "May, 2017",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "images": ["http://placehold.it/350x250", " http://placehold.it/350x250"]
        },
        {
            "title": "Scream",
            "dates": "May, 2017",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "images": ["http://placehold.it/350x250", " http://placehold.it/350x250"]
        }
    ],
    "display": displayProjects = function() {
        for (var projectIndex = 0; projectIndex < projects.projects.length; projectIndex++) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[projectIndex].title);
            $(".project-entry:last").append(formattedProjectTitle);

            var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[projectIndex].dates);
            $(".project-entry:last").append(formattedProjectDate);

            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[projectIndex].description);
            $(".project-entry:last").append(formattedProjectDescription);


            if (projects.projects[projectIndex].images.length > 0) {
                for (var imageIndex = 0; imageIndex < projects.projects[projectIndex].images.length; imageIndex++) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[projectIndex].images[imageIndex]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};

$("#projects").append(projects.display());

$("#mapDiv").append(googleMap);
