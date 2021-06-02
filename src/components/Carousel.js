import React from 'react'
import Carousel from 'react-elastic-carousel'
import '../styles/carousel.css'

const CarouselImage = () => {
  return (
    <>
      <Carousel
        itemsToShow={1}
        enableAutoPlay
        autoPlaySpeed={5000}
        className="carousel"
      >
        <img
          srcSet="./photos/houston3.jpg 1024w,
          ./photos/houston3.webp 300w"
          sizes="(max-width: 1024px) 300px, 1024px"
          src="./photos/houston3.jpg"
          alt="houston home"
          className="photo"
        />
        <img
          srcSet="./photos/houston4.jpg 1024w,
          ./photos/houston4.webp 300w"
          sizes="(max-width: 1024px) 300px, 1024px"
          src="./photos/houston4.jpg"
          alt="houston home"
          className="photo"
        />
        <img
          srcSet="./photos/original1.png 1024w,
          ./photos/original1.webp 300w"
          sizes="(max-width: 1024px) 300px, 1024px"
          src="./photos/original1.png"
          alt="houston home"
          className="photo"
        />

        <img
          src="./photos/original2.webp"
          alt="solar panel stand"
          className="photo"
          height="300"
          width="400"
        />
        <img
          src="./photos/original3.webp"
          alt="rooftop panels"
          className="photo"
          height="300"
          width="400"
        />

        <img
          srcSet="./photos/original4.png 1024w,
          ./photos/original4.webp 300w"
          sizes="(max-width: 1024px) 300px, 1024px"
          src="./photos/original4.png"
          alt="houston home"
          className="photo"
        />
        <img
          srcSet="./photos/original5.png 1024w,
          ./photos/original5.webp 300w"
          sizes="(max-width: 1024px) 300px, 1024px"
          src="./photos/original5.png"
          alt="houston home"
          className="photo"
        />
      </Carousel>
    </>
  )
}
export default CarouselImage
