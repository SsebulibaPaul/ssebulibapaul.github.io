const Contact = {
    setup() {
        const title = "contact";
        
        return {
            title
        };
    },

    template: /*html*/`
        <section :id="title" className="page">
            <section className="banner">
                <div className="wrapper">
                    <p class="mono-title toi">Contact</p>
                    <h2 className="title">Let's <span class="toi">Work Together</span></h2>
                    <p className="text">Have a project in mind? I would love to hear about it. Send me a message and let's build something great together</p>
                </div>
            </section>

            <div className="wrapper contact-area">
                <div className="info">
                    <div>
                        <address className="text">
                            <span class="icon-holder"><i data-feather="map-pin" className="icon"></i></span>
                            <div>
                                <h4>Location</h4>
                                <span className="meta-txt">{{ $profile.contacts.address }}</span>
                            </div>
                        </address>
                        <div className="text">
                            <span class="icon-holder"><i data-feather="mail" className="icon"></i></span>
                            <div>
                                <h4>Email</h4>
                                <span className="meta-txt">{{ $profile.contacts.email }}</span>
                            </div>
                        </div>
                    </div>
                    <div className="avail">
                        <h4 class="heading">Currently Available</h4>
                        <p className="desc">Open to freelance projects and full-time opportunities</p>
                    </div>
                </div>

                <div className="contact-info">

                    <h4 class="heading mono-title">Click below to contact me on:</h4>

                    <div class="buttons">
                        <a :href="$profile.contacts.whatsapp">WhatsApp
                            <span className="meta-txt">{{ $profile.site_name }}</span>
                        </a>
                        <a :href="'tel:'+$profile.contacts.airtel">Airtel
                            <span className="meta-txt">{{ $profile.contacts.airtel }}</span>
                        </a>
                        <a :href="'tel:'+$profile.contacts.mtn">MTN
                            <span className="meta-txt">{{ $profile.contacts.mtn }}</span>
                        </a>
                        <a :href="'mailto:'+$profile.contacts.email">Email
                            <span className="meta-txt">{{ $profile.contacts.email }}</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `

}

export default Contact;