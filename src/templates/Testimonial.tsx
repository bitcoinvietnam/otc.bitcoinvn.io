/*
<style>
.snap-x {
    scroll-snap-type: x mandatory;
    
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
}
.snap-start {
  scroll-snap-align: start;
}
</style>
*/

import React from 'react';

const Testimonial = () => (
  <div className="flex flex-col items-center m-8">
    <div className="w-full overflow-x-hidden flex snap-x">
      <div
        className="py-20 rounded-xl bg-gradient-to-l from-gold-700 to-gold-600 grid-cols-2 snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0"
        id="slide-1"
      >
        <div className="">
          <img
            className="rounded-full px-10"
            src={`/assets/images/testimony-1.jpg`}
            alt="Our Team Leadership"
          />
        </div>
        <div className="text-gray-100 text-2xl text-justify px-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
          <div className="text-gray-400 text-lg pt-10 italic text-center">
            John from Company A
          </div>
        </div>
      </div>
      <div
        className="py-20 rounded-2xl bg-gradient-to-l from-gold-600 to-gold-700  grid-cols-2 snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0"
        id="slide-2"
      >
        <div className="">
          <img
            className="rounded-full px-10"
            src={`/assets/images/testimony-2.jpg`}
            alt="Our Team Leadership"
          />
        </div>
        <div className="text-gray-100 text-2xl text-justify px-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
          <div className="text-gray-400 text-lg pt-10 italic text-center">
            Smith from Organization B
          </div>
        </div>
      </div>
      <div
        className="py-20 rounded-2xl bg-gradient-to-l from-gold-700 to-gold-600  grid-cols-2 snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0"
        id="slide-3"
      >
        <div className="">
          <img
            className="rounded-full px-10"
            src={`/assets/images/testimony-3.jpg`}
            alt="Our Team Leadership"
          />
        </div>
        <div className="text-gray-100 text-2xl text-justify px-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
          <div className="text-gray-400 text-lg pt-10 italic text-center">
            Ana from Company C
          </div>
        </div>
      </div>
    </div>
    <div className="flex mt-8">
      <a
        className="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center"
        href="#slide-1"
      >
        1
      </a>
      <a
        className="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center"
        href="#slide-2"
      >
        2
      </a>
      <a
        className="w-8 mr-1 h-8 text-gray-700 rounded-full bg-white flex justify-center items-center"
        href="#slide-3"
      >
        3
      </a>
    </div>
  </div>
);

export { Testimonial };
