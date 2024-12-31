import Footer from "../Common/Footer";
import Header from "../Common/Header";

export default function Contact(){
    return(
        <>
        
            <section id="contact" className="contact section">
<div className="container section-title" >
  <h2>Contact</h2>
  <p><span>Need Help?</span> <span className="description-title">Contact Us</span></p>
</div>

<div className="container"  data-aos-delay="100">

  <div className="mb-5">
    <iframe style={{width: "100%", height: "400px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.7484253936!2d72.41492632920657!3d23.020474103611704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1721816759659!5m2!1sen!2sin" frameborder="0" allowfullscreen=""></iframe>
  </div>

  <div className="row gy-4">

    <div className="col-md-6">
      <div className="info-item d-flex align-items-center"  data-aos-delay="200">
        <i className="icon bi bi-geo-alt flex-shrink-0"></i>
        <div>
          <h3>Address</h3>
          <p>India Street, Gujarat, AMD 380001</p>
        </div>
      </div>
    </div>

    <div className="col-md-6">
      <div className="info-item d-flex align-items-center"  data-aos-delay="300">
        <i className="icon bi bi-telephone flex-shrink-0"></i>
        <div>
          <h3>Call Us</h3>
          <p>+1 5589 55488 55</p>
        </div>
      </div>
    </div>

    <div className="col-md-6">
      <div className="info-item d-flex align-items-center"  data-aos-delay="400">
        <i className="icon bi bi-envelope flex-shrink-0"></i>
        <div>
          <h3>Email Us</h3>
          <p>user123@gmail.com</p>
        </div>
      </div>
    </div>

    <div className="col-md-6">
      <div className="info-item d-flex align-items-center"  data-aos-delay="500">
        <i className="icon bi bi-clock flex-shrink-0"></i>
        <div>
          <h3>Mayking Hours<br/></h3>
          <p><strong>Mon-Sat:</strong> 11AM - 23PM; <strong>Sunday:</strong> Closed</p>
        </div>
      </div>
    </div>

  </div>

  <form action="forms/contact.php" method="post" class="php-email-form"  data-aos-delay="600">
          <div class="row gy-4">

            <div class="col-md-6">
              <input type="text" name="name" class="form-control" placeholder="Your Name" required=""/>
            </div>

            <div class="col-md-6 ">
              <input type="email" class="form-control" name="email" placeholder="Your Email" required=""/>
            </div>

            <div class="col-md-12">
              <input type="text" class="form-control" name="subject" placeholder="Subject" required=""/>
            </div>

            <div class="col-md-12">
              <textarea class="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
            </div>

            <div class="col-md-12 text-center">
              <div class="loading">Loading</div>
              <div class="error-message"></div>
              <div class="sent-message">Your message has been sent. Thank you!</div>

              <button type="submit">Send Message</button>
            </div>

          </div>
        </form>

</div>

</section>

        </>
    );
}