window.onload = ()=> {

    feather.replace();

    let site_header = document.querySelector('.site-header');

    function stickyHeader(element, page_divided_by) {
        window.addEventListener('scroll', ()=>{ 

            let element_vertical_position = window.scrollY;
            let window_height = window.innerHeight / page_divided_by; // inneHeight is the viewport height (vh) of the window

            if (element_vertical_position > window_height) {
                // site_header.classList.toggle('static-site-header'); // Made the screen jumpy
                element.classList.add('header-scrolled');
            }
            else {
                element.classList.remove('header-scrolled');
            }
        });
    }

    // stickyHeader(site_header, 6);
    
}