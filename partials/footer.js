const Footer = {

    setup() {
        const title = "footer"
    },

    template: /*html*/`
        <footer>
            <div className="wrapper">
                <p className="copy">
                    <a href="/" className="toi">{{ $profile.site_name }}</a> | Active developer since {{ $profile.start_date }}
                </p>
            </div>
        </footer>
    `

};

export default Footer;