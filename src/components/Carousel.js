import React from 'react'
import Carousel from 'react-elastic-carousel'
import '../styles/carousel.css'

const CarouselImage = () => {
  return (
    <>
      <Carousel
        itemsToShow={1}
        easing="cubic-bezier(1,.15,.55,1.54)"
        tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
        transitionMs={700}
        className="carousel"
      >
        <img
          srcSet="./photos/original1.png 1024w,
          ./photos/original1.webp 300w"
          sizes="(max-width: 1024px) 300px, 1024px"
          src="./photos/original1.png"
          alt="solar panels"
          className="photo"
          height="500"
          width="500"
        />
        <img
          srcSet="./photos/original2.png 1024w,
          ./photos/original2.webp 300w"
          sizes="(max-width: 1024px) 300px, 1024px"
          src="./photos/original2.png"
          alt="solar panels on stand"
          className="photo"
          height="500"
          width="500"
        />
        <img
          srcSet="./photos/original3.jpg 1024w,
          ./photos/original3.webp 300w"
          sizes="(max-width: 1024px) 300px, 1024px"
          src="./photos/original3.jpg"
          alt="roof panels"
          className="photo"
          height="500"
          width="500"
        />
        <img
          srcSet="./photos/original4.png 1024w,
          ./photos/original4.webp 300w"
          sizes="(max-width: 1024px) 300px, 1024px"
          src="./photos/original4.png"
          alt="second roof panels"
          className="photo"
          height="500"
          width="500"
        />
        <img
          srcSet="./photos/original5.png 1024w,
          ./photos/original5.webp 300w"
          sizes="(max-width: 1024px) 300px, 1024px"
          src="./photos/original5.png"
          alt="home panels"
          className="photo"
          height="500"
          width="500"
        />
        <img
          srcSet="./photos/original6.png 1024w,
          ./photos/original6.webp 300w"
          sizes="(max-width: 1024px) 300px, 1024px"
          src="./photos/original6.png"
          alt="panel scaffolding"
          className="photo"
          height="500"
          width="500"
        />
        <img
          srcSet="./photos/original7.png 1024w,
          ./photos/original7.webp 300w"
          sizes="(max-width: 1024px) 300px, 1024px"
          src="./photos/original7.png"
          alt="completed panels"
          className="photo"
          height="500"
          width="500"
        />
        <img
          srcSet="./photos/original8.png 1024w,
          ./photos/original8.webp 300w"
          sizes="(max-width: 1024px) 300px, 1024px"
          src="./photos/original8.png"
          alt="houston complete"
          className="photo"
          height="500"
          width="500"
        />
        <img
          srcSet="./photos/original9.jpg 1024w,
          ./photos/original9.webp 300w"
          sizes="(max-width: 1024px) 300px, 1024px"
          src="./photos/original9.jpg"
          alt="industrial panels"
          className="photo"
          height="500"
          width="500"
        />
        <img
          srcSet="./photos/original10.png 1024w,
          ./photos/original10.webp 300w"
          sizes="(max-width: 1024px) 300px, 1024px"
          src="./photos/original10.png"
          alt="industrial-panels-two"
          className="photo"
          height="500"
          width="500"
        />
      </Carousel>
    </>
  )
}
export default CarouselImage
