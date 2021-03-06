/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio =
{
    name: "Saurabh Singh",
    role: "Software Developer",
    contacts:
        {
            mobile: "585-585-0000",
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
        var formattedName = replaceData(HTMLheaderName, this.name);
        var formattedRole = replaceData(HTMLheaderRole, this.role);
        var welcomMessage = replaceData(HTMLwelcomeMsg, this.welcomeMessage);
        var biopic = replaceData(HTMLbioPic, this.biopic);

        /* Make header */

        Object.getOwnPropertyNames(this.contacts).forEach(function(contact) {
            $("#topContacts").append(replaceData(HTMLcontactGeneric.replace("%contact%", contact), bio.contacts[contact]));
        });
        var header = $("#header").append(biopic).append(welcomMessage).append(HTMLskillsStart);
        this.skills.forEach(function(skill){
            $("#skills").append(replaceData(HTMLskills, skill));
        });
        header.prepend(formattedRole).prepend(formattedName);
    }
};

var projects =
{
   projects: [{
        title: "Distributed Caching",
        dates: "2010 - 2012",
        description: "Compare different distibuted caching strategies",
        images: ["images/dfs.png",
            "images/hint_based_caching.png"],
        url: "https://sites.google.com/site/ssmscapproject/"
    }],
    display: function()
    {
        $("#projects").append(HTMLprojectStart);
        this.projects.forEach(function (project) {
            var projectTitle = replaceData(HTMLprojectTitle, project.title).replace("#", project.url);
            var projectDates = replaceData(HTMLprojectDates, project.dates);
            var projectDescription = replaceData(HTMLprojectDescription, project.description);
            var projectEntry = $(".project-entry").append(projectTitle).append(projectDates).append(projectDescription);

            project.images.forEach(function(image){
                projectEntry.append(replaceData(HTMLprojectImage, image));
            })
        })
    }
};

var work = {
    jobs: [{
            employer: "Markit North America",
            title: "Associate",
            location: "New York, NY",
            dates: "2010-2013",
            description: "Was responsible for making sure that we did not lose money at the end of the day.",
            url: "www.markit.com"
    },
        {
            employer: "Amplify Education Inc",
            title: "Software Developer II",
            location: "Brooklyn, NY",
            dates: "2013-Current",
            description: "I'm responsible for making sure kids learn.",
            url: "www.amplify.com"
        }],
    display: function()
    {
        $("#workExperience").append(HTMLworkStart);
        this.jobs.forEach(function (job) {
            var jobEmployer = replaceData(HTMLworkEmployer, job.employer).replace("#", job.url);
            var jobTitle = replaceData(HTMLworkTitle, job.title);
            var jobHeader = jobEmployer + jobTitle;
            var jobDates = replaceData(HTMLworkDates, job.dates);
            var jobLocation = replaceData(HTMLworkLocation, job.location);
            var jobDescription = replaceData(HTMLworkDescription, job.description);
            $(".work-entry").append(jobHeader).append(jobDates).append(jobLocation).append(jobDescription);
        });
    }
};

var education = {
    schools: [
        {
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
        }],
    onlineCourses: [
        {
            title: "Oracle Certified Java Programmer",
            school: "Oracle",
            dates: 2012,
            url: "http://www.oracle.com/index.html"
        },
        {
            title: "Functional Programming Principles in Scala",
            school: "Coursera",
            dates: 2013,
            url: "https://www.coursera.org/maestro/api/certificate/get_certificate?course_id=970457"
        }],
    display: function () {
        $("#education").append(HTMLschoolStart);

        this.schools.forEach(function (school) {
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
        this.onlineCourses.forEach(function (onlineCourse) {
            var courseTitle = replaceData(HTMLonlineTitle, onlineCourse.title);
            var courseSchool = replaceData(HTMLonlineSchool, onlineCourse.school);
            var courseHeader = courseTitle + courseSchool;
            var courseDates = replaceData(HTMLonlineDates, onlineCourse.dates);
            var courseUrl = replaceData(HTMLonlineURL, onlineCourse.url).replace("#", onlineCourse.url);
            $(".education-entry").last().append(courseHeader).append(courseDates).append(courseUrl);
        })
    }
};

var appendMapAndFooter = function()
{
    $("#map-div").append(googleMap);
    //$("#main").append(internationalizeButton);
    $("#footerContacts").append($("#topContacts").html());
}

function replaceData(htmlString, value)
{
    return htmlString.replace("%data%", value);
}

function inName(name)
{
    var nameParts = $("#name").text().split(" ");
    return nameParts[0] + " " + nameParts[1].toUpperCase();
}

bio.display();
work.display();
projects.display();
education.display();
appendMapAndFooter();
document.getElementById("menuButton").addEventListener("mouseenter",function(e){
    $(".menu").toggle();
    $("#menuButton").toggle();
});

document.getElementById("menuList").addEventListener("mouseleave",function(e){
    $(".menu").toggle();
    $("#menuButton").toggle();
});