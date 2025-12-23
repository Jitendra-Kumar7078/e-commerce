   import React, { useState, useRef } from 'react'
   import AliceCarousel from 'react-alice-carousel'
   import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
   import { Button } from '@headlessui/react'
   import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
   import 'react-alice-carousel/lib/alice-carousel.css'
   

   const HomeSectionCarousel = ({data,sectionName}) => {
       const [activeIndex, setActiveIndex] = useState(0)
       const carouselRef = useRef(null)

       const responsive = {
           0: { items: 1 },
           640: { items: 3 },
           1024: { items: 5.5 },
       }

       const slidePrev = () => {
           if (carouselRef.current && activeIndex > 0) {
               carouselRef.current.slidePrev()
           }
       }

       const slideNext = () => {
           if (carouselRef.current && activeIndex < items.length - 5) {
               carouselRef.current.slideNext()
           }
       }

       const syncActiveIndex = ({ item }) => setActiveIndex(item)

       const items = data.map((item) => (
           <HomeSectionCard product={item} />
       ))

       return (
           <div className="border">
            <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
               <div className="relative p-5">
                   <AliceCarousel
                       ref={carouselRef}
                       items={items}
                       disableButtonsControls
                       responsive={responsive}
                       disableDotsControls
                       onSlideChanged={syncActiveIndex}
                       activeIndex={activeIndex}
                       infinite={false}
                   />

                   {activeIndex > 0 && (
                       <Button
                           className="absolute z-50 top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white shadow-lg rounded-full p-2"
                           onClick={slidePrev}
                           aria-label="prev"
                       >
                           <KeyboardArrowLeftIcon className="rotate-0" />
                       </Button>
                   )}

                   {activeIndex < items.length - 5 && (
                       <Button
                           className="absolute z-50 top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white shadow-lg rounded-full p-2"
                           onClick={slideNext}
                           aria-label="next"
                       >
                           <KeyboardArrowLeftIcon className="-rotate-180" />
                       </Button>
                   )}
               </div>
           </div>
       )
   }

   export default HomeSectionCarousel
   