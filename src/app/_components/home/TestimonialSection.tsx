"use client"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Autoplay, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import AppButton from "../common/AppButton"

const testimonials = [
  {
    name: "Saina Williams",
    text: "We've used Bizticle for Business development, graphic design, and backend web development. Working with Bizticle makes my job a little easier every day.",
    rating: 5,
  },
  {
    name: "John Doe",
    text: "Bizticle helped me scale my freelance career. The tools are simple, effective, and save me a ton of time.",
    rating: 4,
  },
  {
    name: "Emma Smith",
    text: "I’ve collaborated with amazing clients thanks to Bizticle. Highly recommend for freelancers and businesses alike.",
    rating: 5,
  },
]

const TestimonialSection = () => {
  return (
    <section className="bg-[#F0F7F8] mt-[300px]">
      <div className="relative container min-h-[724px] flex items-end justify-center py-20">
        {/* Background */}
        <div className="absolute w-full rounded-lg h-[534px] top-0 transform left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[url('/testimonial-bg.png')] bg-cover bg-center bg-no-repeat" >
          {/* Swiper */}
          <div className="bg-white/90 max-w-[360px] md:max-w-[421px] mx-auto min-h-[300px] p-8 md:ml-20 rounded-b-lg">
            <h3 className="text-[30px] md:text-[40px] text-[#272727] font-semibold">
              People Trust Us
            </h3>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000 }}
              loop
            >
              {testimonials.map((item, i) => (
                <SwiperSlide key={i}>
                  <div>

                    <p className="text-base font-normal mt-5">{item.text}</p>
                    <div className="flex items-center justify-between mt-6">
                      {/* Rating */}
                      <div className="flex items-center gap-x-1">
                        {Array.from({ length: item.rating }).map((_, idx) => (
                          <svg
                            key={idx}
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.83132 0.402344L11.3352 5.47485L16.9344 6.29326L12.8828 10.2394L13.839 15.8143L8.83132 13.1809L3.82364 15.8143L4.7798 10.2394L0.728271 6.29326L6.32748 5.47485L8.83132 0.402344Z"
                              fill="#F0B61E"
                            />
                          </svg>
                        ))}
                      </div>
                      <h4 className="text-base font-semibold text-[#2D2D2D]">
                        {item.name}
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Right Side CTA */}
        <div className="max-w-[720px] flex flex-col items-center justify-center mx-auto text-center gap-y-6">
          <h3 className="text-[40px] leading-[55px] md:text-[60px] text-black font-semibold md:leading-[75px] text-center">
            Have Questions in Mind? Lets Chat!
          </h3>
          <AppButton label="Contact Us" />
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
