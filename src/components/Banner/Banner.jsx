import React from "react";
import { motion } from "motion/react";
import banner1 from "../../assets/Banner-1.jpg";
import banner2 from "../../assets/Banner-2.jpg";
import banner3 from "../../assets/Banner-3.jpg";
import banner4 from "../../assets/Banner-4.jpg";
import banner5 from "../../assets/Banner-5.jpg";
import banner6 from "../../assets/Banner-6.jpg";

const Banner = () => {
  return (
    <div className="lg:w-9/12 mx-auto text-center lg:text-left my-8 flex flex-col-reverse lg:flex-row justify-between items-center lg:min-h-110">

      <div className="lg:pl-20">
        <div>
          <h1 className="text-5xl font-bold">
            Find Jobs, <br /> Hire Creatives
          </h1>
          <p className="w-2/3 mx-auto lg:mx-0 my-4">
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </p>
          <div className="my-6 flex gap-8 justify-center lg:justify-normal">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
          </div>
        </div>
        <div>
          <h1>Trusted By</h1>
          <div className="flex gap-8 justify-center lg:justify-normal text-2xl text-primary font-bold">
            <span className="italic">Microsoft</span>
            <span>Sony</span>
            <span className="italic">Acer</span>
            <span>Nokia</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <motion.div
          animate={{
            y: [50, 100, 50],
          }}
          transition={{ repeat: Infinity, duration: 10 }}
          className="avatar lg:right-30"
        >
          <div className="lg:w-80 w-60 rounded-full">
            <img src={banner1} alt="" />
          </div>
        </motion.div>

        <motion.div
          animate={{
            x: [0, 50, 0],
          }}
          transition={{ repeat: Infinity, duration: 12, delay: 0.4 }}
          className="avatar absolute -top-5 right-80"
        >
          <div className="w-45 rounded-full">
            <img src={banner2} alt="" />
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: [10, 50, 10],
          }}
          transition={{ repeat: Infinity, duration: 8 }}
          className="avatar absolute -top-3 right-15"
        >
          <div className="w-35 rounded-full">
            <img src={banner3} alt="" />
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: [10, 50, 10],
          }}
          transition={{ repeat: Infinity, duration: 8 }}
          className="avatar absolute right-100 top-65"
        >
          <div className="w-45 rounded-full">
            <img src={banner4} alt="" />
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 50, 0],
          }}
          transition={{ repeat: Infinity, duration: 10 }}
          className="avatar"
        >
          <div className="w-30 rounded-full absolute top-55 right-40">
            <img src={banner5} alt="" />
          </div>
        </motion.div>

        <motion.div 
                  animate={{
            x: [10, 50, 10],
          }}
          transition={{ repeat: Infinity, duration: 8 }}
        className="avatar">
          <div className="w-30 rounded-full absolute top-15 right-10">
            <img src={banner6} alt="" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
