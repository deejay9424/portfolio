export default () => ({
    menuItems: [
        {
            icon: 'mdi-apps',
            title: 'Home',
            to: '/'
        },
        {
            icon: 'mdi-clipboard-text',
            title: 'Projects',
            to: '/projects'
        },
        {
            icon: 'mdi-certificate',
            title: 'Certificates',
            to: '/certificates'
        },
        {
            icon: 'mdi-information',
            title: 'About',
            to: '/about'
        }
    ],
    user:{
        title:'Software Developer',
        firstName:'Dhruv',
        lastName:'Jain',
        bio:'Coolest Software Developer',
        imageSrc:'/Dj.jpg',
        contactNumber:'+91-7500169424',
        contactEmail:'dhruvjain261296@gmail.com',
        currentCompany:'Voith Digital Ventures',
        education:'Bachelor\'s of Engineering and Technology in Computer Science from Government Engineering College Bikaner(2018)'
    },
    timelineItems:[{
        date:"June 2014",
        title:"Started College",
        text:"Started College from Government Engineering College Bikaner",
        color:"cyan"
    },
    {
        date:"July 2018",
        title:"Finished College",
        text:"Finished College with First class division",
        color:"green"
    },
    {
        date:"July 2018",
        title:"Business Internship",
        text:"3 months business internship running a consumer goods and appliances business",
        color:"amber"
    },
    {
        date:"October 2018",
        title:"Started working",
        text:"Started working as an applications developer at Voith Digital Ventures",
        color:"orange"
    }],
    technologiesData:[{
        heading: "Known languages",
        data1:["C","C++","C#","Java","SQL","HTML"],
        data2:["CSS","JavaScript(Full Stack)","Python","R","TypeScript"],
        color:"purple lighten-4"
    },
    {
        heading: "Web Technologies & Web Frameworks",
        data1:["HTML","CSS","Javascript","JQuery","Node.js","npm","Asp.Net"],
        data2:["Angular.js","Vue.js","Nuxt.js","React.js","swagger API Docs","Progressive Web Applications","GraphQL"],
        color:"red lighten-2"
    },
    {
        heading: "Database",
        data1:["Mongo DB","SQL Server","Hive","Microsoft Access","Firebase Realtime Database"],
        data2:[],
        color:"blue lighten-4"
    },
    {
        heading: "Data science/ Big Data ",
        data1:["Hadoop","Jupyter Notebooks","VMware","Enthought Canopy"],
        data2:[],
        color:"deep-purple lighten-3"
    },
    {
        heading: "Machine Learning/ AI",
        data1:["Microsoft Azure Machine Learning Studio","Python","Face Recognition","Text to Speech","Image Recognition"],
        data2:[],
        color:"teal lighten-3"
    },
    {
        heading: "IoT",
        data1:["Bolt IoT","Raspberry Pi","Arduino"],
        data2:[],
        color:"light-green lighten-3"
    },
    {
        heading: "IDEs & Text Editors",
        data1:["Microsoft Visual Studio","Microsoft Visual Studio Code","Netbeans","Turbo C++","Notepad++","Eclipse"],
        data2:[],
        color:"lime lighten-3"
    },
    {
        heading: "Version Control",
        data1:["Microsoft Team Foundation Server","Microsoft Azure Git","Github"],
        data2:[],
        color:"amber lighten-3"
    },
    {
        heading: "Operating Systems",
        data1:["Windows","Linux","Dos","Raspbian"],
        data2:[],
        color:"yellow lighten-3"
    },
    {
        heading: "Hosting",
        data1:["Microsoft IIS","Microsoft Azure","Linux Server","Netlify","Heroku","Firebase"],
        data2:[],
        color:"orange lighten-4"
    }]
})