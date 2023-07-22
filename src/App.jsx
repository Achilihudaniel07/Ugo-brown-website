import './App.css'
import { SocialIcon } from 'react-social-icons';

function App() {

    return (
    
        <div className="article-page">

            {/* <!-- Header --> */}

            <header className="header" data-section-themee="dark">

                <div className="container2">

                    <div className="header-container">

                        <div className="header-logo">  
                            <ol href="#">
                                <img src="images/logo.png" alt="Ugo Brown logo" width="160" height="40"/>
                            </ol>
                        </div>

                        <input className="menu-btn" id="menu-btn" type="checkbox"/>                  
                        <label className="menu-icon" htmlFor="menu-btn">
                            <span className="navicon"></span>
                        </label>

                        <nav className="navbar-menu">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#about" className="nav-link">About </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#services" className="nav-link">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#products" className="nav-link">Products</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#testimonials" className="nav-link">Testimonials</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#contact" className="nav-link">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>


                    {/* <!-- Main --> */}
            

                    {/* <!-- Homepage section --> */}

                    <section className="section-hero hero-homepage">
                        <div className="container">
                            <div className="section-body">
                                <section className="section-inner">
                                    <h2 className="section-title">Looking for an affordable place to get your hair accessories? We gat you covered !!</h2>
                                    <a href="#" className="button">Get Started</a>
                                </section>
                            </div>
                        </div>
                    </section>
                </div>

            </header>

            
            <main>
                {/* <!-- About Us section --> */}

                <section id="about" className="section section-about-us">
                    <div className="container">

                        <header className="section-header">
                            <h2 className="section-title">About Us</h2>
                            <p className="section-tagline">Everything about us</p>
                        </header>

                        <div className="section-about-body">
                            <div className="about-row">
                                <div className="about-img">
                                    <img
                                    sizes="(max-width: 1505px) 40vw, 638px"
                                    srcSet="
                                    images/about_tcwytk_c_scale,w_310.png 310w,
                                    images/about_tcwytk_c_scale,w_493.png 493w,
                                    images/about_tcwytk_c_scale,w_638.png 638w"
                                    src="images/about_tcwytk_c_scale,w_638.png"
                                    alt="Ugochi Faith Emeka"/>
                                </div>
                                
                                <div className="about-col-1-2">
                                    <h3>Who are we</h3>
                                    <p> <b>Ugo Brown Hair Accessories</b>  is a company based in Nigeria. It was established by Miss Ugochi Faith Emeka in 2022. Our goal and objective is to provide authentic hair accessories for the beautification of our clients at an affordable price.</p>

                                    <h3>How we work</h3>
                                    <p>We deal in the sales of various hair accessories such as relaxers, attachments, hair gels, finger and toe nails, weavons, etc at pocket friendly prices across the globe. We also do home delivery where possible</p>

                                    <h3>Our social media platform</h3>
                                    
                                    <div className="about-social-links">                                                                      
                                        <div className="about-social-links1" >
                                            <h5>Twitter:</h5>
                                            <SocialIcon url="https://twitter.com/dan__kesh77" target="_blank" rel='noopener noreferrer' style={{width:"30px", height: "20px"}}/>
                                        </div>

                                        <div className="about-social-links1">
                                            <h5>Instagram:</h5>
                                            <SocialIcon url="https://instagram.com/dan__kesh77" target="_blank" rel='noopener noreferrer' style={{width:"30px", height: "20px"}} />
                                        </div>
                                            
                                        <div className="about-social-links1" >
                                            <h5>Facebook:</h5>
                                            <SocialIcon url="https://www.facebook.com/daniel.achilihu.9" target="_blank" rel='noopener noreferrer' style={{width:"30px", height: "20px"}}/>
                                        </div>
                
                                        <div className="about-social-links1">
                                            <h5>Whatsapp:</h5>
                                            <SocialIcon url="https://api.whatsapp.com/send?phone=+2349071953161& text=Thank%20you%20for%20contacting%20Ugo Brown Hair Accessories" target="_blank" rel='noopener noreferrer' style={{width:"30px", height: "20px"}}/>                                  
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="section-footer">
                            <a href="#" className="button">Learn more about us</a>
                        </div>
                    </div>

                </section>


                {/* <!-- Services section --> */}

                <section id="services" className="section section-services">
                    <div className="container">
                        <header className="section-header">
                            <h2 className="section-title">Services</h2>
                            <p className="section-tagline">We deal in the following sales:</p>
                        </header>

                        <div className="section-body">
                            <ul className="row">
                                <li className="col-1-3">
                                    <div className="card-services">
                                        <h3 className="card-title"><a href="https://api.whatsapp.com/send?phone=+2349071953161& text=Thank%20you%20for%20contacting%20Ugo Brown Hair Accessories">Hair Attachments</a></h3>
                                    </div>
                                </li>

                                <li className="col-1-3">
                                    <div className="card-services">
                                        <h3 className="card-title"><a href="https://api.whatsapp.com/send?phone=+2349071953161& text=Thank%20you%20for%20contacting%20Ugo Brown Hair Accessories">Hair Relaxers</a></h3>
                                    </div>
                                </li>

                                <li className="col-1-3">
                                    <div className="card-services">
                                        <h3 className="card-title"><a href="https://api.whatsapp.com/send?phone=+2349071953161& text=Thank%20you%20for%20contacting%20Ugo Brown Hair Accessories">Hair weavons</a></h3>
                                    </div>
                                </li>
                            </ul>

                            <ul className="row">
                                <li className="col-1-3">
                                    <div className="card-services">
                                        <h3 className="card-title"><a href="https://api.whatsapp.com/send?phone=+2349071953161& text=Thank%20you%20for%20contacting%20Ugo Brown Hair Accessories">Hair Gel</a></h3>
                                    </div>
                                </li>

                                <li className="col-1-3">
                                    <div className="card-services">
                                        <h3 className="card-title"><a href="https://api.whatsapp.com/send?phone=+2349071953161& text=Thank%20you%20for%20contacting%20Ugo Brown Hair Accessories">Edge Control</a></h3>
                                    </div>
                                </li>

                                <li className="col-1-3">
                                    <div className="card-services">
                                        <h3 className="card-title"><a href="https://api.whatsapp.com/send?phone=+2349071953161& text=Thank%20you%20for%20contacting%20Ugo Brown Hair Accessories">Finger and Toe Nails</a></h3>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>

                </section>


                {/* <!-- Products section --> */}

                <section id="products" className="section section-wproducts" data-section-theme="dark">
                    <div className="container">

                        <header className="section-header">
                            <h2 className="section-title">Products</h2>
                            <p className="section-tagline">Take a look at our top available products</p>
                        </header>

                        <div className="section-body">
                            <ul className="row">
                                <li className="col-1-3">
                                    <article className="card-products">
                                        <div className="card-outer">
                                            <div className="card-image">
                                                <img src="images/attachment.jpg" alt="Hair Attachments"/>
                                            </div>

                                            <div className="card-inner">
                                                <h3 className="card-title"><a href="#">Price: #500</a></h3>
                                            </div>
                                        </div>
                                    </article>
                                </li>

                                <li className="col-1-3">
                                    <article className="card-products">
                                        <div className="card-outer">
                                            <div className="card-image">
                                                <img src="images/relaxers.jpg" alt="Hair Relaxers"/>
                                            </div>
                                            <div className="card-inner">
                                                <h3 className="card-title"><a href="#">Price: #500</a></h3>
                                            </div>
                                        </div>
                                    </article>
                                </li>

                                <li className="col-1-3">
                                    <article className="card-products">
                                        <div className="card-outer">
                                            <div className="card-image">
                                                <img src="images/weavon.jpg" alt="Hair weavons"/>
                                            </div>
                                            <div className="card-inner">
                                                <h3 className="card-title"><a href="#">Price: #500</a></h3>
                                            </div>
                                        </div>
                                    </article>
                                </li>
                    

                                <li className="col-1-3">
                                    <article className="card-products">
                                        <div className="card-outer">
                                            <div className="card-image">
                                                <img src="images/nails.jpeg" alt="Finger and Toe Nails"/>
                                            </div>
                                            <div className="card-inner">
                                                <h3 className="card-title"><a href="#">Price: #500</a></h3>
                                            </div>
                                        </div>
                                    </article>
                                </li>
                    

                                <li className="col-1-3">
                                    <article className="card-products">
                                        <div className="card-outer">
                                            <div className="card-image">
                                                <img src="images/gel.jpg" alt="Hair Gel"/>
                                            </div>
                                            <div className="card-inner">
                                                <h3 className="card-title"><a href="#">Price: #500</a></h3>
                                            </div>
                                        </div>
                                    </article>
                                </li>
                    

                                <li className="col-1-3">
                                    <article className="card-products">
                                        <div className="card-outer">
                                            <div className="card-image">
                                                <img src="images/edge.jpg" alt="Edge control"/>
                                            </div>
                                            <div className="card-inner">
                                                <h3 className="card-title"><a href="#">Price: #500</a></h3>
                                            </div>
                                        </div>
                                    </article>
                                </li>
                    
                            </ul>
                        </div>
                    </div>

                </section>




                {/* <!-- Testimonials section --> */}

                <section id="testimonials" className="section section-testimonial">
                    <div className="container">
                        <header className="section-header">
                            <h2 className="section-title">Testimonials</h2>
                            <p className="section-tagline">Hear some feedbacks from our best customers</p>
                        </header>
                            
                        <div className="section-body">
                            <ul className="row">
                                <li className="col-1-3">
                                    <article className="card-testimonial">
                                        <img src="https://media.licdn.com/dms/image/D4D03AQGkA56p2mDNtA/profile-displayphoto-shrink_200_200/0/1680364882896?e=1695254400&v=beta&t=f_tdmZqQq297Vy1-KTcabpCn6MFkh8q0B9cgAdzECOc" alt="Amarachi Eze" width="100" height="100" className="card-avatar"/>
                                        <blockquote className="card-quote">
                                            <p> &nbsp;  &nbsp;  &nbsp; I am completely blown away. Thanks to Ugo brown, I just got an authentic hair weavon at a very cheap price.
                                            <cite>Amarachi Eze.</cite>
                                            </p>
                                        </blockquote>
                                    </article>
                                </li>

                                <li className="col-1-3">
                                    <article className="card-testimonial">
                                        <img src="https://media.licdn.com/dms/image/D4D03AQGkA56p2mDNtA/profile-displayphoto-shrink_200_200/0/1680364882896?e=1695254400&v=beta&t=f_tdmZqQq297Vy1-KTcabpCn6MFkh8q0B9cgAdzECOc" alt="Oluwashade Ajayi" width="100" height="100" className="card-avatar"/>
                                        <blockquote className="card-quote"> 
                                        <p> &nbsp;  &nbsp;  &nbsp; Thank you so much for your help. Now i can slay with my fancy toe nails.
                                            <cite>Oluwashade Ajayi.</cite>
                                            </p>
                                        </blockquote>
                                    </article>
                                </li>

                                <li className="col-1-3">
                                    <article className="card-testimonial">
                                        <img src="https://media.licdn.com/dms/image/D4D03AQGkA56p2mDNtA/profile-displayphoto-shrink_200_200/0/1680364882896?e=1695254400&v=beta&t=f_tdmZqQq297Vy1-KTcabpCn6MFkh8q0B9cgAdzECOc" alt="Gabrielle Musa" width="100" height="100" className="card-avatar"/>
                                        <blockquote className="card-quote"> 
                                            <p> &nbsp;  &nbsp;  &nbsp; I love your company. Definitely worth it. I would have been scammed again if i had purchased from my former vendor.
                                            <cite>Gabrielle Musa</cite>
                                            </p>
                                        </blockquote>
                                    </article>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>



                {/* <!-- Contact section --> */}

                <section id="contact" className="section section-contact">
                    <div className="container">
                        <header className="section-header">
                            <h2 className="section-title">Contact</h2>
                            <p className="section-tagline">We would love to hear from you!</p>
                        </header>

                        <div className="section-contact-body">
                            <p> Have a new order in mind? Click the button to reach out and I will contact you shortly</p>
                        </div>
                        
                        <div className="section-footer">
                            <a href="https://api.whatsapp.com/send?phone=+2349071953161& text=Thank%20you%20for%20contacting%20Ugo Brown Hair Accessories" target="_blank" rel='noopener noreferrer' className="button">Get in touch</a>
                        </div>
                    </div>
                </section>
            
            </main>






            {/* <!-- Footer --> */}

            <footer className="footer" data-section-theme="dark">

                <div  className="container">

                    <div className="footer-row">

                        <div className="footer-col-1-2">
                            <div className="header-logo" >
                            <img src="images/logo.png" alt="Ugo-brown logo" width="160" height="40"/>
                            <address className="footer-address">
                                Abia State<br/>
                                Nigeria.<br/>
                            </address>
                            </div>
                        </div>                                                                   
                                                                                              
                        <div className="footer-col-1-2">
                            <ul className="social nav">
                                <li className="social-item nav-item">
                                    <SocialIcon url="https://twitter.com/dan__kesh77" target="_blank" rel='noopener noreferrer' style={{width:"35px", height: "35px"}}/>
                                </li>

                                <li className="social-item nav-item">
                                    <SocialIcon url="https://instagram.com/dan__kesh77" target="_blank" rel='noopener noreferrer' style={{width:"35px", height: "35px"}} />              
                                </li>

                                <li className="social-item nav-item">                                
                                    <SocialIcon url="https://www.facebook.com/daniel.achilihu.9" target="_blank" rel='noopener noreferrer' style={{width:"35px", height: "35px"}}/>
                                </li>

                                <li className="social-item nav-item">                                   
                                    <SocialIcon url="https://api.whatsapp.com/send?phone=+2349071953161& text=Thank%20you%20for%20contacting%20Ugo Brown Hair Accessories" target="_blank" rel='noopener noreferrer' style={{width:"35px", height: "35px"}}/>    
                                </li>
                            </ul>
                        </div>

                    </div>

                    <hr/>

                    <div className="footer-row">
                        <div className="footer-col-1-2">
                            <p className="footer-copyright">© Copyright Daniel A. Online Services 2022  |  Made by   <a href="https://api.whatsapp.com/send?phone=+2349037231624&text=Thank%20you%20for%20contacting%20me"  target="_blank" rel='noopener noreferrer'>Achilihu Daniel U.</a> </p>
                        </div>

                        <div className="footer-col-1-2">
                            <ul className="footer-nav nav">
                                <li className="footer-nav-item nav-item">
                                    <a href="#" className="footer-nav-link">Terms of use</a>
                                </li>
                                <li className="footer-nav-item nav-item">
                                    <a href="#" className="footer-nav-link">Privacy Policy</a>
                                </li>
                                <li className="footer-nav-item nav-item">
                                    <a href="#" className="footer-nav-link">Cookie Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </footer>

        </div>
    )
}

export default App;
