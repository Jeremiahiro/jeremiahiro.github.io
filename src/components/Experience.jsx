import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { IconSvg } from "../components";

const Experience = () => {
  return (
    <>
      <div className="text-gray-600 dark:text-gray-300">
        <motion.div variants={textVariant()}>
          <p className="font-semibold tracking-wider font-caveat sm:text-[18px] text-[16px]">Where I&#39;ve Worked</p>
          <h2 className='font-black font-gilroy md:text-[40px] sm:text-[28px] xs:text-[20px] text-[10px]'>Work Experience</h2>
        </motion.div>

        <div className="flex flex-col font-gilroy">
          <VerticalTimeline className="vertical-timeline-custom-line">
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                contentStyle={{ background: 'none', color: '#fff', border: '1px solid #d2d6dc', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}
                contentArrowStyle={{ borderRight: '7px solid #d2d6dc' }}
                date={
                  <time className="block px-2 text-xl font-normal leading-none text-gray-600 dark:text-gray-400">
                  {experience.date}
                  </time>
                }
                iconClassName={ experience.iconClassName }
                iconOnClick={experience.website ? () => window.open(experience.website, '_blank') : null}
                icon={
                    <IconSvg
                      name={experience.icon}
                      class="text-gray-200"
                    />
                }>

                <div data-tooltip-target={`experience-tooltip-${index}`} data-tooltip-placement={`${index % 2 === 0 ? 'right' : 'left'}`} type="button">
                  {experience.is_resume ? (
                    <div className='p-5 text-center'>
                      <button type="button" className="text-white bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                      onClick={experience.website ? () => window.open(experience.website, '_blank') : null}>
                        <span className="ml-2">View / Download Resume </span>
                        <IconSvg
                          name='download'
                          class="text-white inline-block"
                        />
                      </button>
                    </div>
                  ) : <>
                      <h3 className="flex items-center mb-1 text-lg font-bold text-gray-900 vertical-timeline-element-title dark:text-white">
                        {experience.title}
                        <span className={`${experience.is_volunteer ? 'block' : 'hidden'} bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3`}>
                        Volunteer
                        </span>
                    </h3>
                      <h4 className="mb-4 text-base font-normal text-gray-400 dark:text-gray-300">
                        {experience.company_name}
                      </h4>
                      <p className="text-sm font-normal text-gray-500 dark:text-gray-400">{experience.contract_type}</p>
                    </>
                    }
                    
                </div>
                <div id={`experience-tooltip-${index}`} role="tooltip" className="absolute z-10 invisible block w-auto px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    {experience.location}
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
            </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
