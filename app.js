import Header from './partials/header.js'
import Hero from './templates/hero.js'
import About from './templates/about.js'
import Skills from './templates/skills.js'
import Expertise from './templates/expertise.js'
import Contact from './templates/contact.js'
import Footer from './partials/footer.js'


const App = Vue.createApp({
    components: {
        'header-component': Header,
        'hero-component': Hero,
        'about-component': About,
        'skills-component': Skills,
        'expertise-component': Expertise,
        'contact-component': Contact,
        'footer-component': Footer,
    },

    setup() {
        return {}
    }
});

App.config.globalProperties.$profile = {
    site_name: "Ssebuliba Paul",
    site_aka: "Pawulo",
    tagline: "Enhancing Digital Experiences",
    currentYear: new Date().getFullYear(),
    start_date: 2018,
    get yrs_of_exp() { return this.currentYear - this.start_date},
    contacts: {
        airtel: "+256 758 051679",
        mtn: "+256 762 023744",
        whatsapp: "https://wa.me/256758051679",
        email: "ssebulibapaul@gmail.com",
        address: "Kampala, Uganda",
    }
}

App.mount('#App');

feather.replace(); // Initialize the feature icon library