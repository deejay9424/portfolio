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
        education:'Bachelor\'s of Engineering and Technology in Computer Science from Government Engineering Technology Bikaner(2018)'
    }
})