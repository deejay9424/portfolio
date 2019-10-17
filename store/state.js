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
        date:"June 1, 2014",
        title:"Started College",
        text:"Started College from Government Engineering College Bikaner"
    },
    {
        date:"July 1, 2018",
        title:"Finished College",
        text:"Finished College with First class division"
    },
    {
        date:"July 2, 2018",
        title:"Business Internship",
        text:"3 months business internship running a consumer goods and appliances business"
    },
    {
        date:"October 3, 2018",
        title:"Started working",
        text:"Started working as an applications developer at Voith Digital Ventures"
    }]
})