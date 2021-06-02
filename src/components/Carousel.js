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
          srcSet="./photos/original1.png 1024w,
          ./photos/original1.webp 300w"
          sizes="(max-width: 1024px) 300px, 1024px"
          src="./photos/original1.png"
          alt="houston home"
          className="photo"
        />
        <img
          srcSet="./photos/original2.png 1024w,
          ./photos/original2.webp 300w"
          sizes="(max-width: 1024px) 300px, 1024px"
          src="./photos/original2.png"
          alt="houston home"
          className="photo"
        />
        <img
          srcSet="./photos/original3.jpg 1024w,
          ./photos/original3.webp 300w"
          sizes="(max-width: 1024px) 300px, 1024px"
          src="./photos/original3.jpg"
          alt="houston home"
          className="photo"
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
        <img
          srcSet="./photos/original6.png 1024w,
          ./photos/original6.webp 300w"
          sizes="(max-width: 1024px) 300px, 1024px"
          src="./photos/original6.png"
          alt="houston home"
          className="photo"
        />
        <img
          srcSet="./photos/original7.png 1024w,
          ./photos/original7.webp 300w"
          sizes="(max-width: 1024px) 300px, 1024px"
          src="./photos/original7.png"
          alt="houston home"
          className="photo"
        />
        <img
          srcSet="./photos/original8.png 1024w,
          ./photos/original8.webp 300w"
          sizes="(max-width: 1024px) 300px, 1024px"
          src="./photos/original8.png"
          alt="houston home"
          className="photo"
        />
        <img
          srcSet="./photos/original9.jpg 1024w,
          ./photos/original9.webp 300w"
          sizes="(max-width: 1024px) 300px, 1024px"
          src="./photos/original9.jpg"
          alt="houston home"
          className="photo"
        />
        <img
          srcSet="./photos/original10.png 1024w,
          ./photos/original10.webp 300w"
          sizes="(max-width: 1024px) 300px, 1024px"
          src="./photos/original10.png"
          alt="houston home"
          className="photo"
        />
      </Carousel>
    </>
  )
}
export default CarouselImage
