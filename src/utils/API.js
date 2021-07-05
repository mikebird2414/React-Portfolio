import careerResourcesWiki from '../assets/images/careerResourcesWiki.png'
import artistWebApp from '../assets/images/artistWebApp.jpg'
import weatherDashboard from '../assets/images/weatherDashboard.png'
import digitalClass from '../assets/images/digitalClass.png'
import employeeTracker from '../assets/images/employeeTracker.jpg'
import champUnite from '../assets/images/champUnite.png'
import nodejsLogo from '../assets/images/nodejsLogo.svg'
import mongodbLogo from '../assets/images/mongodbLogo.svg'
import mysqlLogo from '../assets/images/mysqlLogo.svg'
import expressjsLogo from '../assets/images/expressjsLogo.svg'
import jqueryLogo from '../assets/images/jqueryLogo.svg'
import htmlLogo from '../assets/images/htmlLogo.svg'
import cssLogo from '../assets/images/cssLogo.svg'
import javascriptLogo from '../assets/images/javascriptLogo.svg'
import indigoBallBg from '../assets/images/gdproj_indigoBall_bg.jpg'
import hyperMockBg from '../assets/images/gdproj_hyperMock_bg.jpg'
import otherLogosBg from '../assets/images/gdproj_otherLogos_bg.jpg'
import otherPrintsBg from '../assets/images/gdproj_otherPrints_bg.jpg'
// Graphic Design - Logos
import timmyScottLogo from '../assets/images/timmyScott_logo.png'
import solarTwistLogo from '../assets/images/solarTwist_logo.png'
import polynomialLogo from '../assets/images/polynomial_logo.png'
import careosityLogo from '../assets/images/careosity_logo.png'
import sipsAndGigglesLogo from '../assets/images/sipsAndGiggles_logo.png'
import lifeGamesLogo from '../assets/images/lifeGames_logo.png'
import professionalMixerLogo from '../assets/images/professionalMixer_logo.png'
// Graphic Design - Prints
import impactReportBrochure from '../assets/images/impact-report-brochure.jpg'
import galaFlyer from '../assets/images/gala-flyer-2.jpg.png'
import sipsAndGigglesFlyer from '../assets/images/sips-and-giggles-flyer.png'
import thankYouCard from '../assets/images/thankYou-card.png'
// Posts
import gridCss from '../assets/images/gridcss.PNG'
import currentProjects from '../assets/images/currentProjects.PNG'
import alternativeTernary from '../assets/images/alternativeTernary.PNG'
const posts = [
  {
    id: 48,
    date: '6/24/21 9:51PM',
    title: 'Mid-Year Review',
    copy:
      "Had my very first mid-year review at work today. I was happy to find out that I've been doing well. I can't express enough how much I appreciate being given the opportunity to start my new career at Ibotta. Everyone has been nothing but supportive. From the review, I do need to improve on asking for help when I'm working on a task and have reached an impasse. I tend to take too much time trying to figure such a task out on my own at times. I have to remember my colleagues are all willing to help given the opportunity. Aside from the review, I've finished my current project's (My Expense Tracker) MVP. There's still a bit of polishing left to do, but I'm happy where this is at right now. I will start using this in July to track my expenses.",
    video: 'https://www.youtube.com/embed/iiSaJCTDJZw'
  },
  {
    id: 47,
    date: '6/10/21 9:44PM',
    title: 'New Personal Project',
    copy:
      "I have been working on a small personal project for tracking expenses, mainly to practice and brush up on developing full stack applications. It has been months since I've really created a web app from scratch so before I forget things, I decided I'd create one that I would also use. This would allow me to keep track of my spending so I can better manage my finance. To continue expanding my frontend skills, I'm using a new css framework and a new way of implementing it as well. You can check out my github repo @ https://github.com/aroblesgalit/my-expense-tracker and a demo @ https://my-expense-tracker-web-app.herokuapp.com/"
  },
  {
    id: 46,
    date: '2/20/21 10:10PM',
    title: '2 Months',
    copy:
      "It's been 2 months now since I started my role as a Junior Web Developer at Ibotta. I've worked along side many talented people and have learned a lot regarding email and web development. I'm now able to produce Litmus files and In App Messages with little to no supervision. Next step is to be able to take web development tasks from start to finish as well as become proficient in Braze API integration."
  },
  {
    id: 45,
    date: '1/31/21 8:18PM',
    title: 'CSS Drawings',
    copy:
      'Had some fun drawing with just HTML and CSS. The first one was from a tutorial I followed while the rest were either copied from google images or imagination. This taught me how much could be done with just HTML and CSS including animations.',
    gif: 'https://j.gifs.com/L7QDQX.gif'
  },
  {
    id: 44,
    date: '12/29/20 3:39PM',
    title: 'Snake Game',
    copy:
      'Followed a tutorial on YouTube on how to code the Snake Game in JavaScript by Web Dev Simplified. This game uses a grid layout and renders at a certain time rate continuously. It also separates the logic for each component into its own JS file, which then get imported into one game JS file. I added a few extra things on top of what was provided in the tutorial: a level select that changes the speed of the snake and the amount that the body of the snake grows, a scoreboard that shows your score based on the length of the snake, and a highscore board showing the top 3 scores. These elements can also be toggled by a click of a button.',
    gif: 'https://j.gifs.com/p8Jl3Q.gif'
  },
  {
    id: 43,
    date: '12/25/20 9:27AM',
    title: 'Merry Christmas!',
    copy:
      "It's been a little over 2 weeks at Ibotta and I couldn't have asked for a better experience. I've been enjoying the work that I do with the most welcoming and supportive people. I'm really happy to have been given this opportunity right before Christmas and I can only predict that 2021 will be a very rewarding year to come."
  },
  {
    id: 42,
    date: '12/9/20 6:28PM',
    title: 'First Day at Ibotta',
    copy:
      "I had a great remote onboarding experience on my first official day at Ibotta along with other new hires. We learned more about the history of Ibotta, tools the team uses on the daily, and of the many perks and benefits Ibotta provides. I also had the opportunity to get to know more about my team and how they started at the company. I can't wait to start my training and work on projects!"
  },
  {
    id: 41,
    date: '12/7/20 8:29PM',
    title: 'Top Scroll Bar',
    copy:
      "I'm thinking of redesigning my portfolio, and I was looking at other web developers' portfolios for inspirations when one feature caught my eye. It was a scroll bar at the top of the page that indicates how far along you are down the page. I thought this was a neat feature so I decided to add it to my design portfolio pages. I can proudly say that I managed to create a component for it without looking into a tutorial. You can check it out in action by going to my Design page and viewing any of the projects from there."
  },
  {
    id: 40,
    date: '12/5/20 7:01PM',
    title: 'MacBook Pro',
    copy:
      "Just received my work equipment yesterday. I don't think it would be too hard of a transition to mac from windows. I'm actually excited for this opportunity to work on mac operating system and looking forward to the onboarding this Wednesday."
  },
  {
    id: 39,
    date: '12/3/20 11:48AM',
    title: 'More Hover Effects',
    copy:
      'Worked on more different types of hover effects for product cards and learned how to animate svg elements. Thinking of ways to redo my portfolio and implement some of these effects.',
    gif: 'https://j.gifs.com/p8xw1m.gif'
  },
  {
    id: 38,
    date: '11/28/20 3:34PM',
    title: 'Hover Effects',
    copy:
      'Worked on different types of hover effects the last few days to practice more of CSS. I took ideas from other sites and tried to figure each one on my own. The last one was the most challenging as I ran into issues with the 3d aspect but glad I was able to solve them.',
    gif: 'https://j.gifs.com/3QLAy4.gif'
  },
  {
    id: 37,
    date: '11/24/20 8:27PM',
    title: 'Best of 2020',
    copy:
      "A few hours ago, I received an email followed by a call for an offer on the Junior Web Developer role at Ibotta. It has been a long 6-month job search, and I'm very happy that I finally get to announce I'm starting my first role in web development in a couple of weeks. This news is the best thing that has happened to me in 2020. 😁🙌"
  },
  {
    id: 36,
    date: '11/20/20 5:34PM',
    title: 'Ibotta Interview',
    copy:
      "Had my 2 hour long interview with Ibotta, and I'm quite happy with how it turned out. I was nervous for the first half but felt much better as it went on. I first had an hour long interview with 2 members of the team and went over the take-home explaining what I did and my thought process. The rest of the interviews were behavioral and I was able to meet 4 more team members. It was a fun round of interviews overall, and I'm content that I was able to say everything I wanted to."
  },
  {
    id: 32,
    date: '11/15/20 8:59PM',
    title: 'Click & Drag to Scroll',
    copy:
      "Learned how to go about creating a carousel slider that scrolls on mouse click and drag. The idea is to calculate how far you deviate from the initial x position and subtract it from how far you've scrolled from the left. Then you would set the slider's scrollLeft position to that value. This concept could also be useful for a drag and drop feature. 🤔💡",
    gif: 'https://j.gifs.com/ZYjql5.gif'
  },


  {
    id: 29,
    date: '11/12/20 5:00PM',
    title: 'Sticky Nav',
    copy:
      "Today's JavaScript 30 challenge was simple, to make a navbar sticky and animate a couple of other elements simultaneously. I was able to do the first part of making the nav sticky and just followed along for the rest. The idea was to compare the values of the top of the nav and the y position of the page. When the y position of the page is equal to or greater than the top of the nav, add a 'fixed-nav' class to the body, otherwise remove the class. This class was then used to update the position property of the nav from relative to sticky. It was also used to update the logo's max-width so it animates in and to update the scale of the white div so it zooms in.",
    gif: 'https://j.gifs.com/6XZP4O.gif'
  },
  {
    id: 20,
    date: '11/3/20 8:38AM',
    title: 'CSS Text Shadow',
    copy:
      'Today I explored a CSS text shadow mouse move effect for the JavaScript 30 challenge. Using the mousemove event listener and coordinates of the hero div and mouse cursor, I was able to calculate the displacement of the text shadow and update it. Though, I have to admit, I had to do a bit of research to fully understand the solution.',
    gif: 'https://j.gifs.com/wVWZxJ.gif'
  },
  {
    id: 8,
    date: '10/23/20 10:36PM',
    title: 'CSS Variables',
    copy:
      "I have some experience with CSS variables, but I admit I don't use it as often as I should. It does make updating certain values a lot easier when you create a variable for it. For example, creating a variable for a primary color on your site avoids having to copy and paste it over and over again. Creating a variable allows you to also change it with JavaScript, which is what today's JavaScript 30 challenge was about. Using sliders for spacing, blur, and color, I added change and mouseover events to handle the change in values. Each of the slider inputs have a 'name' attribute that corresponds to the css variables I've created. So everytime a certain slider is changed, it updates the correct variable value.",
    gif: 'https://j.gifs.com/mOooK3.gif'
  },
  {
    id: 5,
    date: '10/18/20 5:25PM',
    title: 'Mobile Navbar',
    copy:
      "I decided to make another update to my site by turning the navbar for mobile view into a bottom navbar using icons. This way it's just one click to view another page within my site. I also updated the navigation for my graphic design projects to hide itself when not scrolling so it's not in the way."
  },
  {
    id: 1,
    date: '10/10/20 11:23PM',
    title: 'Posts Page',
    copy:
      "I decided to create a page for my posts on my site instead of posting on social media like LinkedIn. This is more for me to record things I feel are post worthy. So here is my first post regarding this page itself and its future contents. Here you'll find posts on new things I've just learned, tutorials, recent achievements, projects, and more."
  }
]

const projects = [
  {
    title: 'ChampUnite',
    description:
      'A full-stack MERN game app where users go on a one-on-one card battle.',
    imageUrl: champUnite,
    githubUrl: 'https://github.com/aroblesgalit/champ-unite',
    deployedUrl: 'https://champ-unite-v01.herokuapp.com/'
  },
  {
    title: 'Artist Web App',
    description:
      'A web app for an artist to show off his/her work as well as sell art.',
    imageUrl: artistWebApp,
    githubUrl: 'https://github.com/aroblesgalit/artist-web-app',
    deployedUrl: 'https://artist-web-app.herokuapp.com/'
  },
  {
    title: 'Digital Class',
    description:
      'A full-stack MERN app allowing teachers to quickly and easily create and assign quizzes.',
    imageUrl: digitalClass,
    githubUrl: 'https://github.com/aroblesgalit/digital-class',
    deployedUrl: 'https://digital-class-production.herokuapp.com/'
  },
  {
    title: 'Career Resources & Wiki',
    description:
      'A full-stack app that allows users to post and get resources about job fields of their choice.',
    imageUrl: careerResourcesWiki,
    githubUrl: 'https://github.com/aroblesgalit/Project2',
    deployedUrl: 'https://secure-shelf-77308.herokuapp.com/'
  },
  {
    title: 'Weather Dashboard',
    description:
      'A weather dashboard app that shows the current and future weather information of a city.',
    imageUrl: weatherDashboard,
    githubUrl: 'https://github.com/aroblesgalit/06-Weather-Dashboard',
    deployedUrl: 'https://aroblesgalit.github.io/06-Weather-Dashboard/'
  },
  {
    title: 'Employee Tracker',
    description:
      'A command-line interface app for tracking employees within a company.',
    imageUrl: employeeTracker,
    githubUrl: 'https://github.com/aroblesgalit/12-Employee-Tracker'
  }
]

const graphicDesignProjects = [
  {
    title: 'Indigo Ball',
    type: ['Logo Design', 'Print'],
    image: indigoBallBg,
    link: '/graphic-design/indigo-ball'
  },
  {
    title: 'HyperMock',
    type: ['Logo Design', 'UI Design'],
    image: hyperMockBg,
    link: '/graphic-design/hypermock'
  },
  {
    title: 'Other Logos',
    type: ['Logo Designs'],
    image: otherLogosBg,
    link: '/graphic-design/other-logos'
  },
  {
    title: 'Other Print Designs',
    type: ['Print Designs'],
    image: otherPrintsBg,
    link: '/graphic-design/other-prints'
  }
]

const graphicDesignLogos = [
  {
    url: timmyScottLogo,
    alt: 'Logo for Timmy Scott Productions.',
    shape: 'vertical',
    background: '#3c0e54'
  },
  {
    url: solarTwistLogo,
    alt: 'Logo for Solar Twist company.',
    shape: 'horizontal',
    background: '#f4f4f4'
  },
  {
    url: polynomialLogo,
    alt: 'Logo for a support group called Polynomial.',
    shape: 'box',
    background: '#101526'
  },
  {
    url: careosityLogo,
    alt: 'Logo for Care-osity company.',
    shape: 'box',
    background: '#f4f4f4'
  },
  {
    url: sipsAndGigglesLogo,
    alt: 'Logo for Sips and Giggles fundraiser event.',
    shape: 'box',
    background: '#f4f4f4'
  },
  {
    url: lifeGamesLogo,
    alt: 'Logo for a mobile app called LifeGames.',
    shape: 'vertical',
    background: '#a41c43'
  },
  {
    url: professionalMixerLogo,
    alt: 'Logo for a mixer event called Professional Mixer Series.',
    shape: 'horizontal',
    background: '#f4f4f4'
  }
]

const graphicDesignPrints = [
  {
    heading: 'impact report brochure',
    description: '8.5 x 11 inches trifold brochure for the LGBTQ Center OC',
    image: impactReportBrochure
  },
  {
    heading: 'gala flyer',
    description: '5 x 7 inches flyer for APAIT',
    image: galaFlyer,
    orientation: 'portrait'
  },
  {
    heading: 'sips & giggles flyer',
    description: '5 x 7 inches flyer for the LGBTQ Center OC',
    image: sipsAndGigglesFlyer,
    orientation: 'landscape'
  },
  {
    heading: 'thank you card',
    description: '5 x 7 inches Thank You card for the LGBTQ Center OC',
    image: thankYouCard,
    orientation: 'landscape'
  }
]

const skills = [
  {
    title: 'HTML',
    icon: htmlLogo
  },
  {
    title: 'CSS',
    icon: cssLogo
  },
  {
    title: 'JavaScript',
    icon: javascriptLogo
  },
  {
    title: 'jQuery',
    icon: jqueryLogo
  },
  {
    title: 'Bootstrap',
    icon:
      'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg'
  },
  {
    title: 'UIKit',
    icon: 'https://cdn.iconscout.com/icon/free/png-64/uikit-285322.png'
  },
  {
    title: 'React',
    icon:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png'
  },
  {
    title: 'Node.js',
    icon: nodejsLogo
  },
  {
    title: 'MongoDB',
    icon: mongodbLogo
  },
  {
    title: 'MySQL',
    icon: mysqlLogo
  },
  {
    title: 'Express',
    icon: expressjsLogo
  },
  {
    title: 'Visual Studio',
    icon:
      'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg'
  },
  {
    title: 'Adobe Illustrator',
    icon:
      'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg'
  },
  {
    title: 'Adobe Photoshop',
    icon:
      'https://upload.wikimedia.org/wikipedia/commons/2/20/Photoshop_CC_icon.png'
  },
  {
    title: 'Adobe XD',
    icon:
      'https://upload.wikimedia.org/wikipedia/commons/d/dc/Adobe_Experience_Design_logo.svg'
  },
  {
    title: 'Adobe InDesign',
    icon:
      'https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg'
  },
  {
    title: 'Adobe After Effects',
    icon:
      'https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg'
  }
]

const credits = [
  {
    text: 'HTML5 Logo',
    link: 'https://www.w3.org/html/logo/#downloads'
  },
  {
    text: 'CSS3 Logo',
    link: 'https://worldvectorlogo.com/downloaded/css3'
  },
  {
    text: 'JavaScript Logo',
    link: 'https://commons.wikimedia.org/wiki/File:Javascript-shield.svg'
  },
  {
    text: 'jQuery Logo',
    link: 'https://brand.jquery.org/logos/'
  },
  {
    text: 'Bootstrap Logo',
    link: 'https://commons.wikimedia.org/wiki/File:Bootstrap_logo.svg'
  },
  {
    text: 'UIKit Logo',
    link: 'https://iconscout.com/icon/uikit'
  },
  {
    text: 'React Logo',
    link: 'https://commons.wikimedia.org/wiki/File:React-icon.svg'
  },
  {
    text: 'Node.js Logo',
    link: 'https://nodejs.org/en/about/resources/'
  },
  {
    text: 'MongoDB Logo',
    link: 'https://www.mongodb.com/brand-resources'
  },
  {
    text: 'MySQL Logo',
    link: 'https://www.mysql.com/about/legal/logos.html'
  },
  {
    text: 'Express Logo',
    link: 'https://commons.wikimedia.org/wiki/File:Expressjs.png'
  },
  {
    text: 'Visual Studio Logo',
    link:
      'https://commons.wikimedia.org/wiki/File:Visual_Studio_Code_1.35_icon.svg'
  },
  {
    text: 'Adobe Illustrator Logo',
    link:
      'https://commons.wikimedia.org/wiki/File:Adobe_Illustrator_CC_icon.svg'
  },
  {
    text: 'Adobe Photoshop Logo',
    link: 'https://commons.wikimedia.org/wiki/File:Photoshop_CC_icon.png'
  },
  {
    text: 'Adobe Experience Design Logo',
    link:
      'https://commons.wikimedia.org/wiki/File:Adobe_Experience_Design_logo.svg'
  },
  {
    text: 'Adobe InDesign Logo',
    link: 'https://commons.wikimedia.org/wiki/File:Adobe_InDesign_CC_icon.svg'
  },
  {
    text: 'Adobe After Effects Logo',
    link:
      'https://commons.wikimedia.org/wiki/File:Adobe_After_Effects_CC_icon.svg'
  }
]

export default {
  getProjects: function () {
    return new Promise(resolve => {
      resolve(projects)
    })
  },
  getSkills: function () {
    return new Promise(resolve => {
      resolve(skills)
    })
  },
  getCredits: function () {
    return new Promise(resolve => {
      resolve(credits)
    })
  },
  getGDProjects: function () {
    return new Promise(resolve => {
      resolve(graphicDesignProjects)
    })
  },
  getGDLogos: function () {
    return new Promise(resolve => {
      resolve(graphicDesignLogos)
    })
  },
  getGDPrints: function () {
    return new Promise(resolve => {
      resolve(graphicDesignPrints)
    })
  },
  getPosts: function () {
    return new Promise(resolve => {
      resolve(posts)
    })
  }
}
