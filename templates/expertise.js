const Expertise = {

    setup() {
        const title = "work";
        
        return {
            title
        };
    },

    template: /*html*/`
        <section :id="title" className="page">
            <section className="banner">
                <div className="wrapper">
                    <p class="mono-title toi">What I Build</p>
                    <h2 className="title">Areas of <span class="toi">Expertise</span></h2>
                    <p className="text">From content management systems to modern web applications, I deliver end-to-end solutions tailored to your needs.</p>
                </div>
            </section>
                
            <ul className="wrapper card-holder">
                <li className="card">
                    <span data-feather="globe" className="icon"></span>
                    <p className="mono-title toi">CMS Development</p>
                    <h3 class="title">WordPress Themes</h3>
                    <p class="text">Custom WordPress themes built from scratch with pixel-perfect designs, performance-optimized code, and full Gutenberg compatibility. Tailored to each client's brand identity.</p>
                    <ul class="tags">
                        <li>WordPress</li>
                        <li>PHP</li>
                        <li>JavaScript</li>
                        <li>CSS</li>
                        <li>Gutenberg</li>
                    </ul>
                </li>
                <li className="card">
                    <span data-feather="zap" className="icon"></span>
                    <p className="mono-title toi">Plugin Development</p>
                    <h3 class="title">WordPress Plugins</h3>
                    <p class="text">Bespoke WordPress plugins that extend functionality beyond what off-the-shelf solutions offer. From custom post types and meta boxes to advanced integrations and REST API endpoints.</p>
                    <ul class="tags">
                        <li>PHP</li>
                        <li>WordPress API</li>
                        <li>REST</li>
                        <li>MySQL</li>
                        <li>OOP</li>
                    </ul>
                </li>
                <li className="card">
                    <span data-feather="layers" className="icon"></span>
                    <p className="mono-title toi">Single-Page Applications</p>
                    <h3 class="title">Vue SPAs</h3>
                    <p class="text">Modern, reactive single-page applications with Vue.js. Fast, component-driven UIs with state management, routing, and seamless API integrations for fluid user experiences.</p>
                    <ul class="tags">
                        <li>Vue.js</li>
                        <li>JavaScript</li>
                        <li>Vuex</li>
                        <li>Vue Router</li>
                        <li>REST APIs</li>
                    </ul>
                </li>
                <li className="card">
                    <span data-feather="code" className="icon"></span>
                    <p className="mono-title toi">Frontend Development</p>
                    <h3 class="title">React Applications</h3>
                    <p class="text">Scalable React applications with hooks, context, and modern patterns. From interactive dashboards to dynamic content platforms — all performance-optimized and accessible.</p>
                    <ul class="tags">
                        <li>React</li>
                        <li>Typescript</li>
                        <li>Redux</li>
                        <li>CSS</li>
                        <li>REST APIs</li>
                    </ul>
                </li>
                <li className="card">
                    <span data-feather="database" className="icon"></span>
                    <p className="mono-title toi">Full-Stack Developmen</p>
                    <h3 class="title">Laravel Applications</h3>
                    <p class="text">Robust full-stack applications powered by Laravel. Clean MVC architecture, Eloquent ORM, authentication, queues, and advanced database design with MySQL/MariaDB.</p>
                    <ul class="tags">
                        <li>Laravel</li>
                        <li>PHP</li>
                        <li>MySQL</li>
                        <li>Eloquent</li>
                        <li>Blade</li>
                    </ul>
                </li>
                <li className="card">
                    <span data-feather="layout" className="icon"></span>
                    <p className="mono-title toi">Modern PHP Development</p>
                    <h3 class="title">CALL Stack Projects</h3>
                    <p class="text">Full-featured web applications using the CALL stack. Reactive UIs without leaving PHP — real-time components with Livewire, interactivity with Alpine.js, styled with modern baseline CSS.</p>
                    <ul class="tags">
                        <li>CSS</li>
                        <li>Alpine.js</li>
                        <li>Livewire</li>
                        <li>Laravel</li>
                        <li>PHP</li>
                    </ul>
                </li>
                
            </ul>

        </section>
    `
}
 
export default Expertise;