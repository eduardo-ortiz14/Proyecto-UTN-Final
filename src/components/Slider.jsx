import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./Slider.css";

function Slider() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide w-100 slider"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/flyer1.jpg"
            className="d-block w-100"
            alt="Descripción de la imagen 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/flyer2.jpg"
            className="d-block w-100"
            alt="Descripción de la imagen 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/flyer3.jpg"
            className="d-block w-100"
            alt="Descripción de la imagen 3"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
