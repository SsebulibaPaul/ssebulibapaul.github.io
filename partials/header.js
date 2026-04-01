const Navbar = {

    setup() {
        
        const site_name = "Ssebuliba Paul";
        const title = "site-header";

        (()=>{

            window.addEventListener('scroll', ()=>{    
                let element_vertical_position = window.scrollY;
                let window_height = 20;

                let site_header = document.querySelector('#site-header');

                if (element_vertical_position > window_height) {
                    site_header.classList.add('static-site-header');
                }
                else {
                    site_header.classList.remove('static-site-header');
                }
            });

        })();

        return {
            title,
        };

    },

    template: /*html*/`
        <header :id="title">
            <nav className="wrapper">
                
                <a href="/" className="logo-area">
                    <span class="logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="pawulo-logo icon">
                            <path d="m18 16 4-4-4-4"></path>
                            <path d="m6 8-4 4 4 4"></path>
                            <path d="m14.5 4-5 16"></path>
                        </svg>
                    </span>
                    <h1 className="title">{{ $profile.site_name }}</h1>
                </a>

                <div id="nav-menu" className="menu" popover anchor="menu-btn" popover="auto">
                    <ul className="drop-down-menu">
                        <li><a href="/" popovertarget="nav-menu" popovertargetaction="hide">Home</a></li>
                        <!-- <li><a href="/#hero" popovertarget="nav-menu" popovertargetaction="hide">About</a></li> -->
                        <li><a href="/#skills" popovertarget="nav-menu" popovertargetaction="hide">skills</a></li>
                        <li><a href="/#work" popovertarget="nav-menu" popovertargetaction="hide">Work</a></li>
                        <li><a href="/#contact" popovertarget="nav-menu" popovertargetaction="hide">Contact</a></li>
                    </ul>

                    <a href="/#contact" className="special-link" popovertarget="nav-menu" popovertargetaction="hide">Hire Me</a>
                </div>

                <button id="menu-btn" className="menu-btn" popovertarget="nav-menu">
                    <i data-feather="menu" className="icon"></i>
                </button>

            </nav>
        </header>
    `

}

export default Navbar;