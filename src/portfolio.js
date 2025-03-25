/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Surya Chandra Reddy",
  title: "Hello All, I'm Surya",
  subTitle: emoji(
    "Java Full Stack Developer creating scalable, high-performance microservices and distributed systems to power Financial Client operations"
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SURYATSCR",
  linkedin: "https://www.linkedin.com/in/tscr/",
  gmail: "suryachandra.tscr@gmail.com",
  Instagram: "https://www.instagram.com/yourstruly_surya/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Tech Stack I work with",
  subTitle: " ",
  skills: [
    emoji(
      "🔄 Backend Efficiency Wizard: Built Spring Boot microservices and Kafka error systems, cutting processing times by 25%. I boosted performance for customer onboarding with Oracle DB integration."
    ),
    emoji(
      "🛠️ Scalability Architect: Created RESTful APIs and microservices, reducing deployment times by 15% for fraud detection. I used Docker and GKE to ensure scalable, secure backend solutions."
    ),
    emoji("🌐 Architectural Visionary: Crafting robust, scalable, and efficient architectures that power seamless user experiences.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "Microservices",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "Junit",
      fontAwesomeClassname: "fas fa-bug"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-amazon"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Bitbucket",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of North Texas, Denton",
      logo: require("./assets/images/unt-logo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "January 2021 - May 2022",
      desc: "Course Work: Computer Networks, Database Management Systems, Data Visualization, Software Engineering, Computer Algorithms, Big Data-Data Science, Advanced Algorithms, Machine Learning",
      descBullets: [
        "Worked as Student Library Assistant in Willis Library, UNT" 
      ]
    },
    {
      schoolName: "RVR & JC College of Engineering, India",
      logo: require("./assets/images/RVR_logo.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "June 2016 - May 2019",
      desc: "Course Work: Algorithm Analysis, Operating Systems, Object Oriented Programming, Database Management System, Computer Architecture, Artificial Intelligence, Data mining, Web Technologies",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Java 11/17/21  (7.5 out of 10) ",
      progressPercentage: "75%"
    },
    {
      Stack: "Spring Boot  (7 out of 10) ",
      progressPercentage: "70%"
    },
    {
      Stack: "Microservices  (7 out of 10)",
      progressPercentage: "70%"
    },
    {
      Stack: "Angular  (6 out of 10)", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "JavaScript  (6 out of 10) ",
      progressPercentage: "60%"
    },
    {
      Stack: "Python  (6 out of 10) ",
      progressPercentage: "60%"
    },
    {
      Stack: "HTML-CSS (7 out of 10) ",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Java Full Stack Developer",
      company: "Accenture  : JPMC",
      companylogo: require("./assets/images/JPMC.jpg"),
      date: "Apr 2024 – Present",
      desc: "",
      descBullets: [
        "Built REST APIs with Spring Boot for customer onboarding, enhancing microservices integration.",
        "Ensured code quality with JUnit, Mockito, and SonarQube testing. ",
        "Implemented Kafka error messaging with Oracle DB, improving efficiency by 25%."
      ]
    },
    {
      role: "Software Developer Consultant",
      company: "HCL : Mastercard",
     // companylogo: require("./assets/images/HCL.png"),
      companylogo: require("./assets/images/mastercard.png"),
      date: "Sep 2022 – Nov 2023",
      desc: "",
      descBullets: [
        "Designed & Developed efficient microservices with Spring Boot for Mastercard Fraud Center including MFC, Stand-In, TRE & Fraud Detection. Deployed them on Docker, orchestrated them with GKE.",
        "Built Angular UI for MFC, boosting user engagement by 10%.",
        "Achieved sonarQube coverage of all the Shared Libraries to 90% by implementing code quality measures and code refactoring, resulting in enhanced software maintainability."
      ]
    },
    {
      role: "Student Library Assistant",
      company: "Willis Library, UNT",
      companylogo: require("./assets/images/unt-logo.png"),
      date: "Aug 2021 – Dec 2021",
      desc: "",
      descBullets: [
        "Assisted patrons with new Library cards. Books, Journals, Academic Laptops and digital equipment checkout. ",
        "Maintained the Reports of resource overdue status by Specified procedure and filing of classified records",
    
      ]
    },
    {
      role: "Software Engineer",
      company: "Value Labs",
      companylogo: require("./assets/images/ValueLabs.jpg"),
      date: "July 2019 – Nov 2020",
      desc: "",
      descBullets: [
        "Resolved JIRA tickets in Agile projects, managing code with GitHub. ",
        "Created Java apps with Spring Framework for health science, enhancing performance.",
        "Created RESTful APIs for performing CRUD operations on User Data. ",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Application Migration On-Premise to Multi-cloud Environment(AWS, Google Cloud)",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Application Migration to Multi-cloud Environment",
      projectDesc: "Made data migration from Onpremise MySQL to Cloud SQL using ETL. Switched application server to GKE. Incorporated Terraform to automate the provisioning and managing of cloud resources, ensuring a consistent and repeatable infrastructure setup.",
      footerLink: [
        {
          //name: "Visit Website",
         // url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "",
  number: "940-231-2678",
  email_address: "suryachandra.tscr@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
