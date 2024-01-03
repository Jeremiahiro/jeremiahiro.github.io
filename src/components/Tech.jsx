import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { techSkills, softSkills } from '../constants';
import { fadeIn, slideIn, textVariant } from '../utils/motion';
import IconSvg from './IconSvg';
import { Card } from 'flowbite-react';

const Tech = () => {
  return (
    <>
    <div className="text-gray-600 dark:text-gray-300">
      <div className="w-full flex md:flex-row flex-col">
        <div className="w-full md:w-2/3">
          <div className="pr-2">
            <motion.div variants={textVariant()}>
              <p className="font-semibold tracking-wider font-caveat sm:text-[18px] text-[16px]">My Skills</p>
              <h2 className='font-black font-gilroy md:text-[30px] text-[16px]'>Technical Skills</h2>
            </motion.div>

            <div className="mt-5">
              <Card >
                <div className="grid grid-cols-3 gap-4 md:grid-cols-5">
                  {techSkills.map((technology, index) => (
                    <motion.div
                      variants={fadeIn('right', '', 0.1 * index, 0.75)}
                      key={index}
                      className="group flex flex-col items-center justify-center h-auto max-w-full"
                    >
                      <IconSvg
                        name={technology.icon}
                        class="grayscale group-hover:grayscale-0 transition-all duration-300 hover:-translate-y-1"
                        width={technology.width ?? 40}
                        height={technology.height ?? 40}
                      />
                    </motion.div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className="pl-2">
          <motion.div variants={textVariant()}>
            <p className="font-semibold tracking-wider font-caveat sm:text-[18px] text-[16px] invisible">My Skills</p>
            <h2 className='font-black font-gilroy md:text-[30px] text-[16px]'>Soft Skills</h2>
          </motion.div>

          <div className="mt-5">
            <Card >
            <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                {softSkills.map((skill, index) => (
                   <motion.li
                    variants={slideIn('up', 'tween', 0.1 * index, 0.75)}
                    className="flex items-center"
                    key={index}
                  >
                    <IconSvg
                      name="check"
                      class="me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                    />
                    {skill}
                </motion.li>
                ))}
              </ul>
            </Card>
          </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default SectionWrapper(Tech, 'tech');
