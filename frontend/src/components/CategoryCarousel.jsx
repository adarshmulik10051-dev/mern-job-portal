import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Button } from '@base-ui/react'
const Category = [
    "Frontend Devloper",
    "Backend Devloper",
    "Data Anyalst",
    "Data Science",
    "Graphic Designer",
    "fullStack Devloper"
]
const CategoryCarousel = () => {
    return (
        <div>
            <Carousel className="w-full max-w-xl mx-auto my-20">
                <CarouselContent>
                    {
                        Category.map((cat, index) => (
                            <CarouselItem className="md:basis-1/2 lg-basis-1/3">
                                <Button  variant="outline" className="rounded-full">{cat}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default CategoryCarousel