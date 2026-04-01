const Hero = {

    setup() {
        const title = "hero";
        
        return {
            title
        };
    },

    template: /*html*/`
        <section :id="title" className="hero-section">
            <div className="wrapper">
                <h1 className="heading">Hi, I am <span class="toi">{{ $profile.site_name }}</span></h1>
                <p className="desc">Full-stack Web Developer</p>
                <!-- <p className="text">I help businesses to create and impliment robust, scalable, fast and flexible web solutions that adapt to their needs</p> -->
                <p className="text">Over <strong className="toi">{{$profile.yrs_of_exp}}+ years of experience</strong> crafting exceptional web experiences ranging from static websites to modern SPAs and full-stack applications</p>
                <div className="descriptors">
                    <ul className="list">
                        <!-- <li>I build amazing high-value engaging websites</li> -->
                        <li>I'm a passionate full-stack web developer with over {{$profile.yrs_of_exp}} years of professional experience</li>
                        <li>I specialize in crafting robust and scalable web solutions that adapt to business needs</li>
                        <li>I use modern web technologies to create bespoke, elegant and intuitive websites</li>
                    </ul>
                    <img src='/images/ssebulibaPaulBanner.jpg' className="image" alt='' />
                </div>
            </div>
        </section>
    `
}
 
export default Hero;