// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research-projects",
          title: "Research Projects",
          description: "Websites for projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Github Repos of Code",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Terry&#39;s CV",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-publications",
              title: "publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-projects",
              title: "projects",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "news-1-survey-paper-accepted-to-the-allerton-conference",
          title: '1 survey paper accepted to the Allerton Conference!',
          description: "",
          section: "News",},{id: "news-1-first-author-paper-accepted-to-emnlp-findings-here-we-come-miami-sparkles-smile",
          title: '1 first-author paper accepted to EMNLP-Findings, here we come Miami! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-honorable-mention-for-cra-outstanding-researcher-award",
          title: 'Honorable Mention for CRA Outstanding Researcher Award!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-1-first-author-paper-accepted-to-iclr-sparkles-smile",
          title: '1 first-author paper accepted to ICLR! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-began-research-internship-at-cognitive-computation-group-w-prof-dan-roth-smile",
          title: 'Began Research Internship at Cognitive Computation Group w/ Prof. Dan Roth! :smile:',
          description: "",
          section: "News",},{id: "projects-badjudge",
          title: 'BadJudge',
          description: "ICLR 2025",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%65%72%74%6F%6E%67@%75%63%64%61%76%69%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/TerryTong-Git", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/terry-tong-538a7523b", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=UE4CnZcAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/ttong_nlp", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
