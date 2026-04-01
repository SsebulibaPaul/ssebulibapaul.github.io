const About = {

    setup() {

        const title = "about"
    },

    template: /*html*/`
        <section :id="title">

            <section className="indie-section">
                <div className="wrapper">
                    <h1 className="title">I am a Web Engineer</h1>
                    <div className="info-list">
                        <p className="text">I like crafting solid, robust, scalable, fast and flexible web products with great user experiences that adapt to business needs</p>
                        <p className="text">I am a highly motivated and experienced web engineer with {{ $profile.yrs_of_exp }}+ years of experience in developing, and deploying scalable and efficient web applications.</p>
                        <p className="text">I like crafting solid, robust, scalable, fast and flexible web products with great user experiences that adapt to business needs</p>
                    </div>
                </div>
            </section>


            <section className="skills wrapper">

                <div className="technical">
                    <h2 className="title">Technical Skills</h2>
                    <ul className="list skil">
                        <li>
                            <h5>API Intergration</h5>
                            <p>WhatsApp, Youtube, Instagram</p>
                        </li>
                        <li>
                            <h5>Office Software</h5>
                            <p>Word, PowerPoint, Excel</p>
                        </li>
                    </ul>
                </div>

            </section>

            <section className="skills wrapper">
                
            </section>
            
        </section>
    `

}

export default About;