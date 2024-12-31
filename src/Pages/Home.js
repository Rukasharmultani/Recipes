import Footer from "../Common/Footer";
import Header from "../Common/Header";


export default function Home(){
    return(
        <>
        
        <Banner/>
        
        </>
    );
}


export function Banner(){
    return(
        <>
            <section id="hero" className="hero section light-background">
  <div className="container">
    <div className="row gy-4 justify-content-center justify-content-lg-between">
      <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">

        <h1 >Enjoy Your Healthy<br/>Making Recipes</h1><br/>
        <div className="d-flex"  data-aos-delay="200">
          <a href="#book-a-table" className="btn-get-started">Making Recipes</a>
          <a href="https://youtu.be/ZVhgcKr3lMU?si=u41vVxlxkdtNQyVx" className="glightbox btn-watch-video d-flex align-items-center">
            <i className="bi bi-play-circle"></i><span>Watch Video</span>
          </a>
        </div>
      </div>
      <div className="col-lg-5 order-1 order-lg-2 hero-img" >
        <img src="assets/img/hero-img.png" className="img-fluid animated" alt=""/>
      </div>
    </div>
  </div>
</section>
</>
);
}
