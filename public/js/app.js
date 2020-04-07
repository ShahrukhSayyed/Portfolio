let projects = [
    {
        projectId: 1,
        projectTitle: 'To-Do System',
        projectDescription: 'ToDo is a MEAN stack based web application which is used to schedule the work by ToDoing it. There are two separate parts of the application.',
        projectLiveLink:'https://github.com/ShahrukhSayyed',
    },
    {
        projectId: 2,
        projectTitle: 'Lets Meet',
        projectDescription: 'Lets Meet is an MEAN stack based application which is used to schedule the Meetings. There are two separate parts of the application.',
        projectLiveLink:'https://github.com/ShahrukhSayyed',

    },
    {
        projectId: 3,
        projectTitle: 'Chat Application',
        projectDescription: `Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop.
            A frontend application in which multiple users can chat in a group.`,
        projectLiveLink:'https://github.com/ShahrukhSayyed',

    },
    {
        projectId: 4,
        projectTitle: 'World Map',
        projectDescription: `Anguar App to fetch the data of countries from world from https://restcountries.eu API. In this application I have used all the advance features of Angular.`,
        projectLiveLink:'https://github.com/ShahrukhSayyed',

    },
    {
        projectId: 5,
        projectTitle: 'GOT App',
        projectDescription: 'Angular app to fetch the GOT data from Ice and Fire API.',
        projectLiveLink:'https://github.com/ShahrukhSayyed',

    },
    {
        projectId: 6,
        projectTitle: 'EPL',
        projectDescription: 'Project that fetch the data from EPL JSON located at Server.',
        projectLiveLink:'https://github.com/ShahrukhSayyed',

    },

    {
        projectId: 7,
        projectTitle: 'Dreams Construction',
        projectDescription: 'Web Based application based on Firebase API , DB and Functions Hosted at Firebase',
        projectLiveLink:'https://dreams-constructions.firebaseapp.com/',

    },

]


//Functions for retrieving the data

function getProjectInfo(projectId) {
    //console.log(projectId)
    for (let project of projects) {
        if (project.projectId == projectId) {
            //console.log(project)
            $("#projectTitle").text(project.projectTitle);
            $("#projectDescription").text(project.projectDescription);
            $("#projectLiveLink").prop("href", project.projectLiveLink)


        }


    }

}// end 