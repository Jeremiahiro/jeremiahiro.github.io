import { motion } from 'framer-motion';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { Card } from 'flowbite-react';
import { IconSvg } from "../components";

const Service = () => {
  return (
    <div className="text-gray-600 dark:text-gray-300">
      <motion.div variants={textVariant()}>
        <p className="font-semibold tracking-wider font-caveat sm:text-[18px] text-[16px]">What I do</p>
        <h2 className='font-black font-gilroy md:text-[40px] sm:text-[28px] xs:text-[20px] text-[10px]'>Services</h2>
      </motion.div>

      {/* <motion.p
        variants={fadeIn('top', '', 0.1, 1)}
        className="mt-4 text-[18px] max-w-3xl leading-[30px] font-gilroy">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
        sapiente ipsum dolorum dicta eaque cumque inventore molestias, beatae ea
        quaerat alias accusamus voluptas autem! Alias odit voluptates in totam
      </motion.p> */}

      <div className="grid grid-cols-3 gap-8 mt-10">
        {services.map((service, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            key={index}
            variants={fadeIn('right', '', 0.1 * index, 0.75)}
            className='group w-full relative isolate overflow-hidden rounded-2xl cursor-pointer shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:rounded-lg'
          >
            <Card className='min-h-[260px] flex flex-col items-center justify-evenly text-center'>
              <div className="flex justify-center">
                <IconSvg
                  name={service.icon}
                  class="text-gray-800 dark:text-gray-200 group-hover:text-primary dark-group-hover:text-primary"
                  width={service.width}
                  height={service.height}
                />
              </div>
              <h5 className="text-lg text-gray-600 dark:text-white font-gilroy">
                {service.title}
              </h5>
            </Card>
        </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Service, 'service');
