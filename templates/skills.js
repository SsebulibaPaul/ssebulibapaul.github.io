const Skills = {

    setup() {
        const title = "skills";
        
        return {
            title
        };
    },

    template: /*html*/`
        <section :id="title" className="page">
            <section className="banner">
                <div className="wrapper">
                    <p class="mono-title toi">Tech Stack</p>
                    <h2 className="title">Skills & <span class="toi">Expertise</span></h2>
                    <p className="text">A versatile skill set built through years of hands-on experience across the full web development spectrum.</p>
                </div>
            </section>
                
            <ul className="wrapper skills-list card-holder">
                <li className="card">
                    <h3 className="mono-title toi">Frontend</h3>
                    <ul className="expertise-list">
                        <li>HTML5 <span className="meta-txt">99%</span></li>
                        <li>CSS <span className="meta-txt">99%</span></li>
                        <li>JavaScript <span className="meta-txt">95%</span></li>
                        <li>Vue <span className="meta-txt">90%</span></li>
                        <li>React <span className="meta-txt">75%</span></li>
                    </ul>
                </li>
                <li className="card">
                    <h3 class="mono-title toi">Backend</h3>
                    <ul className="expertise-list">
                        <li>PHP <span className="meta-txt">99%</span></li>
                        <li>Laravel<span className="meta-txt">97%</span></li>
                        <li>MySQL / MariaDB <span className="meta-txt">90%</span></li>
                        <li>REST APIs <span className="meta-txt">95%</span></li>
                        <li>CALL Stack <span className="meta-txt">98%</span></li>
                    </ul>
                </li>
                <li className="card">
                    <h3 class="mono-title toi">CMS & Platforms</h3>
                    <ul className="expertise-list">
                        <li>WordPress <span className="meta-txt">99%</span></li>
                        <li>WP Themes <span className="meta-txt">99%</span></li>
                        <li>WP Plugins <span className="meta-txt">85%</span></li>
                        <li>Livewire <span className="meta-txt">99%</span></li>
                        <li>Aline.js <span className="meta-txt">80%</span></li>
                    </ul>
                </li>
            </ul>

            <div class="wrapper tags">
                <h3 className="heading">Technologies I work with</h3>
                <ul className="list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>PHP</li>
                    <li>MySQL</li>
                    <li>MariaDB</li>
                    <li>Laravel</li>
                    <li>WordPress</li>
                    <li>Vue</li>
                    <li>React</li>
                    <li>Alpine</li>
                    <li>Inertia.js</li>
                    <li>REST APIs</li>
                    <li>Git</li>
                    <li>Composer</li>
                    <li>NPM</li>
                </ul>
            </div>

        </section>
    `
}
 
export default Skills;