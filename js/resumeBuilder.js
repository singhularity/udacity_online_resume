/*
This is empty on purpose! Your code to build the resume will go here.
 */

/* BIO
 name : string
 role : string
 contacts : an object with
    mobile: string
    email: string
    github: string
    twitter: string
    location: string
 welcomeMessage: string
 skills: array of strings
 biopic: url
 display: function
 */



function buildBio()
{
    var bio =
    {
        name: "Saurabh Singh",
        role: "Software Developer",
        contacts:
            {
                mobile: "585-705-0307",
                email: "singhulariti@gmail.com",
                github: "https://github.com/singhularity",
                twitter: "@singhulariti",
                location: "New Jersey"
            },
        welcomeMessage: "Welcome to my page!",
        skills: ["Java", "Python", "Oracle", "MongoDB", "Software Design"],
        biopic: "http://i.imgur.com/OWBwM6F.jpg",
        display: function()
            {
                var formattedName = replaceData(HTMLheaderName, bio.name);
                var formattedRole = replaceData(HTMLheaderRole, bio.role);
                var welcomMessage = replaceData(HTMLwelcomeMsg, bio.welcomeMessage);
                var biopic = replaceData(HTMLbioPic, bio.biopic);

                /* Make header */

                Object.getOwnPropertyNames(bio.contacts).forEach(function(contact) {
                    $("#topContacts").append(replaceData(HTMLcontactGeneric.replace("%contact%", contact), bio.contacts[contact]));
                });
                var header = $("#header").append(biopic).append(welcomMessage).append(HTMLskillsStart);
                bio.skills.forEach(function(skill){
                    $("#skills").append(replaceData(HTMLskills, skill));
                });
                header.prepend(formattedRole).prepend(formattedName);
            }
        };

    return bio.display();
}

/*
 projects: array of objects with
 title: string
 dates: string (works with a hyphen between them)
 description: string
 images: array with string urls
 display: function
 */

function buildProjects(){
    var projects =
    [{
        title: "Distributed Caching",
        dates: "2010 - 2012",
        description: "Compare different distibuted caching strategies",
        images: ["http://gen.xyz/wp-content/themes/xyz/images/xyz-logo-purple.png",
            "http://gen.xyz/wp-content/themes/xyz/images/xyz-logo-purple.png"]
    }]

    var display = function()
    {
        $("#projects").append(HTMLprojectStart);
        projects.forEach(function (project) {
            var projectTitle = replaceData(HTMLprojectTitle, project.title);
            var projectDates = replaceData(HTMLprojectDates, project.dates);
            var projectDescription = replaceData(HTMLprojectDescription, project.description);
            var projectEntry = $(".project-entry").append(projectTitle).append(projectDates).append(projectDescription);

            project.images.forEach(function(image){
                projectEntry.append(replaceData(HTMLprojectImage, image));
            })
        })
    }

    return display();
}
/*
 jobs: array of objects with
    employer: string
    title: string
    location: string
    dates: string (works with a hyphen between them)
    description: string
 display: function
 */
function buildWorkExperience(){
    var workExperience =
    [{
        employer: "Markit North America",
        title: "Associate",
        location: "New York, NY",
        dates: "2010-2013",
        description: "Was responsible for making sure that we did not lose money at the end of the day.",
        url: "www.markit.com"
    }]

    var display = function()
    {
        $("#workExperience").append(HTMLworkStart);
        workExperience.forEach(function(job){
            var jobEmployer = replaceData(HTMLworkEmployer, job.employer).replace("#",job.url);
            var jobTitle = replaceData(HTMLworkTitle, job.title);
            var jobHeader = jobEmployer + jobTitle;
            var jobDates = replaceData(HTMLworkDates, job.dates);
            var jobLocation = replaceData(HTMLworkLocation, job.location);
            var jobDescription = replaceData(HTMLworkDescription, job.description);
            $(".work-entry").append(jobHeader).append(jobDates).append(jobLocation).append(jobDescription);
        });
    }

    return display();
}
/*
 schools: array of objects with
     name: string
     location: string
     degree: string
     majors: array of strings
     dates: integer (graduation date)
     url: string
 onlineCourses: array with
     title: string
     school: string
     date: integer (date finished)
     url: string
 display: function
 */
function education(){
    var schools = [{
        name: "Mumbai University",
        location: "India",
        degree: "Bachelor of Engineering",
        majors: ["Information Technology"],
        dates: 2012,
        url: "http://mu.ac.in/portal/"
    },
        {
            name: "Rochester Institute of Technology",
            location: "Rochester, New York",
            degree: "Masters of Science",
            majors: "Computer Science",
            dates: 2010,
            url: "http://www.rit.edu/"
        }];

    var onlineCourses = [{
        title: "Oracle Certified Java Programmer",
        school: "Oracle",
        dates: 2012,
        url: "http://education.oracle.com/pls/web_prod-plq-dad/db_pages.getpage?page_id=653&get_params=p_id:157"
    },
        {
            title: "Functional Programming Principles in Scala",
            school: "Coursera",
            dates: 2013,
            url: "https://www.coursera.org/maestro/api/certificate/get_certificate?course_id=970457"
        }];

    var display = function()
    {
        $("#education").append(HTMLschoolStart);

        schools.forEach(function (school) {
            var schoolName = replaceData(HTMLschoolName, school.name).replace("#", school.url);
            var schoolDegree = replaceData(HTMLschoolDegree, school.degree);
            var schoolTitle = schoolName + schoolDegree;
            var schoolDates = replaceData(HTMLschoolDates, school.dates);
            var schoolLocation = replaceData(HTMLschoolLocation, school.location);
            var schoolMajor = replaceData(HTMLschoolMajor, school.majors);
            $(".education-entry").append(schoolTitle).append(schoolDates).append(schoolLocation).append(schoolMajor);
        });

        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);
        onlineCourses.forEach(function(onlineCourse){
            var courseTitle = replaceData(HTMLonlineTitle, onlineCourse.title);
            var courseSchool = replaceData(HTMLonlineSchool, onlineCourse.school);
            var courseHeader = courseTitle + courseSchool;
            var courseDates = replaceData(HTMLonlineDates, onlineCourse.dates);
            var courseUrl = replaceData(HTMLonlineURL, onlineCourse.url).replace("#", onlineCourse.url);
            $(".education-entry").last().append(courseHeader).append(courseDates).append(courseUrl);
        })
    };
    return display();
}

function replaceData(htmlString, value)
{
    return htmlString.replace("%data%", value);
}

buildBio();
buildWorkExperience();
buildProjects();
education();