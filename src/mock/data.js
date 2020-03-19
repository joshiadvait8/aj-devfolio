import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Advait Joshi', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Advait joshi || joshiadvait8 portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Advait Joshi',
  subtitle: 'Web and Mobile App Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'jpg.jpg',
  paragraphOne:
    "I am a full stack developer & currently working as an Intern in Asian Paints. I've very good knowledge of Web development and developed handful of websites for college fests to make a digital presence.",
  paragraphTwo:
    'I have good knowledge of backend technologies like Java, Python, flask for REST APIs and JavaScript that is used to solve the business problem also with that frontend knowledge of HTML CSS and React native for developing good UI/UX for the users in web and mobile apps for both iOS and Android.',
  paragraphThree: '',
  resume:
    'https://uploads.codesandbox.io/uploads/user/3ecae8ee-0760-4738-930e-fbfb05fc34ec/MzyT-Advait_Joshi_Resume.pdf',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'github-universe.jpg',
    title: '',
    info: '',
    info2: '',
    url: 'https://github.com/joshiadvait8',
    repo: 'https://github.com/joshiadvait8', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'joshiadvait8@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/joshiadvait8',
    },
    {
      id: uuidv1(),
      name: 'medium',
      url: 'https://medium.com/@joshiadvait8',
    },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/joshiadvait8',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/joshiadvait8',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
