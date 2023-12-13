import React from "react";
import Card from './Card';
import '../styles/styleCarousel.css'

function Carousel({ id }) {
    let carouselId = `carousel-${id}`;
    return (
        <div className="carousel-container">
            <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Card></Card>
                    </div>
                    <div className="carousel-item">
                        <Card></Card>
                    </div>
                    {/* Agrega más tarjetas si es necesario */}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#${carouselId}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
export default Carousel;