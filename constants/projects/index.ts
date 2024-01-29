import barlowAndBarrow from "@/assets/imgs/barlow-&-barrow.png"
import jetsElite from "@/assets/imgs/jets-elite.png"
import myLuxTrade from "@/assets/imgs/myluxtrade.png"
import propertyListingApp from "@/assets/imgs/property-listing-app.png"
import redox from "@/assets/imgs/redox.png"
import theMallNigeria from "@/assets/imgs/the-mall-nigeria.png"

export const projectsData = [
	{
		id: 1,
		title: `Redox`,
		role: `Full Stack Engineer`,
		img: redox,
		path: "https://redoxtrade.onrender.com/",
		client: `Redox V`,
		timeline: `1 Frontend Development, 1 Month Backend Engineering, and 1 Month Client-Server Implementation.`,
		description: `Collaborating with a team, we implemented effective state management using the Context API to ensure a predictable and scalable state in our application. Together, we integrated backend APIs (developed using NodeJS and ExpressJS) to fetch and update data, ensuring seamless communication between the frontend and backend. Our team implemented responsive design principles to create user interfaces that work seamlessly across various devices and screen sizes. We integrated MongoDB as the backend database, collectively designing schemas and ensuring efficient data storage and retrieval. Additionally, we worked on file upload functionality, integrating with Cloudinary for efficient storage and management of media assets. As a team effort, we deployed the NodeJS application on render.com and managed the infrastructure for scalability and reliability.`,
		tools: [`vite`, `react`, `Redux`, `node.js`, `express.js`, `cloudinary`, `jwtWebToken`],
	},
	{
		id: 2,
		title: `Property Listing App`,
		role: `Front End Engineer`,
		img: propertyListingApp,
		path: "https://pl-frontend.vercel.app/",
		client: `Mentorshub`,
		timeline: `3 weeks Frontend Development.`,
		description: `Working collaboratively within our team, we developed modular and reusable UI components using React.js within the Next.js framework, promoting a component-based development approach. Our collective efforts included integrating with external APIs and services to fetch and display dynamic data within the application, offering real-time updates and interactions to enhance user experience. As a team, we implemented efficient page routing and navigation using Next.js, leveraging its built-in routing capabilities to ensure a seamless and smooth user journey.`,
		tools: [`Next.js`, `TypeScript`, `Tailwind CSS`, `GraphQL`],
	},
	{
		id: 3,
		title: `Jets Elite`,
		role: `Frontend Designer`,
		img: jetsElite,
		path: `https://jets-elite.com/`,
		client: `Lacruise`,
		timeline: `1 Month and 2 weeks Frontend Development.`,
		description: `I organized and styled the content on the website according to what the client wanted. I made the website look good and easy to use, so it's comfortable for people to explore. I also created a form for people to share their contact information and book flights.`,
		tools: [`WordPress`, `Page Builders`, `jQuery`, `PHP`],
	},
	{
		id: 4,
		title: `My LuxTrade`,
		role: `Software Engineer`,
		img: myLuxTrade,
		path: `https://myluxtrade.com/`,
		client: `Lacruise`,
		timeline: `2 Month Frontend Development, 1 Month Backend Engineering, and 2 Weeks Client-Server Implementation.`,
		description: `I took care of and made the MySQLi database work better, so the website can store and get data faster for a smoother experience. I also made sure the design of the website looks good on different devices and created nice interfaces using React.js and PHP when necessary. Additionally, I added logic and features to the server side using PHP, managing tasks like processing data, authenticating users, and other important server-side jobs.`,
		tools: [`webpack`, `WordPress`, `Page Builders`, `Vanilla JS`, `jQuery`, `React`, `PHP`, `MySQLi`, `firebase`, `Tailwind CSS`],
	},
	{
		id: 5,
		title: `The Mall Nigeria`,
		role: `Front End Engineer`,
		img: theMallNigeria,
		path: `https://themallnigeria.com/`,
		client: `Lacruise`,
		timeline: `3 Month Frontend Development.`,
		description: `I made the website easy to use and nice to look at by creating a user interface that people can easily navigate. I also made sure the website works well on different devices like computers, tablets, and phones. To make the website faster, I used some smart techniques like compressing images, loading them only when needed, and making the code files smaller. This way, the website gives a great experience to users, no matter what device they are using.`,
		tools: [`WordPress`, `Page Builders`, `jQuery`, `Vanilla JS`],
	},
	{
		id: 6,
		title: `Barlow and Barrow`,
		role: `Front End Developer`,
		img: barlowAndBarrow,
		path: "http://barlowandbarrow.com/",
		client: `Movie App`,
		timeline: `2 Month Frontend Development.`,
		description: `I made sure the website looks good and works well on different devices like computers, tablets, and phones by using responsive design principles. This way, people get a great experience no matter what device they use. I also organized and styled the content on the website so that it fits well with the design, and clients can easily manage it through the admin interface.`,
		tools: [`WordPress`, `Page Builders`],
	},
]
