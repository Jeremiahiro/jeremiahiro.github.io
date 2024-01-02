import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { SectionWrapper } from '../hoc';
import { textVariant, staggerContainer } from '../utils/motion';
import { projects } from '../constants';

const Projects = () => {
  return (
    <>
      <div className="text-gray-600 dark:text-gray-300">
        <motion.div variants={textVariant()}>
          <p className="font-semibold tracking-wider font-caveat sm:text-[18px] text-[16px]">What I&#39;ve Done</p>
          <h2 className='font-black font-gilroy md:text-[40px] sm:text-[28px] xs:text-[20px] text-[10px]'>Projects Done</h2> 
        </motion.div>

        <div className="grid grid-cols-2 gap-8 mt-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id + index}
              variants={staggerContainer()}
              initial="hidden"
              whileInView="show"
              className="group w-full relative isolate px-8 pb-4 pt-36 flex flex-col justify-end overflow-hidden rounded-2xl cursor-pointer shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:rounded-lg"
            >
              <img
                src={project.image}
                alt={project.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="group-hover:from-gray-700 group-hover:via-gray-900/40 absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60"></div>

              <h3 className="z-10 mt-3 text-2xl font-bold text-white">
                {project.name}
                <a href={project.demo} target="blank" className={`${project.is_active ? '' : 'hidden'}`}>
                  <svg viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                    <path d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" />
                  </svg>
                </a>
              </h3>
              <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                {project.description}
              </div>
              <div className="z-10 mt-2 flex flex-wrap gap-2">
                {project.stack.map((stack, stackIndex) => (
                  <small
                    key={stackIndex}
                    className="bg-blue-100 text-primary text-xs font-medium items-center px-1 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-primary"
                  >
                    {stack}
                  </small>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
    
      </div>
    </>
  );
};

export default SectionWrapper(Projects, 'projects');
