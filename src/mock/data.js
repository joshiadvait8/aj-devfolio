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
  subtitle: 'FullStack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'jpg.jpg',
  paragraphOne:
    " I live in Mumbai I have completed my graduation in science from Birla College majoring in Information Technology. This is the place where interest in programming created in me further I 've decided to go ahead so I'm into to K J Somaiya Institute of Management Studies & Research popularly known as SIMSR one of the prestigious colleges in Mumbai doing masters in computer applications here I've learned many new things as well as brushed up my old technical skill.",
  paragraphTwo:
    "On weekends I love to attend hackathons still I've attended only 3 they are the place where I've got to connect with techie public view awesome ideas and Last but not least learn something at a higher pace Other than coding, programming, technology I love to hang out with friends also I used to play badminton, Table tennis some times that acts as refreshment.",
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
