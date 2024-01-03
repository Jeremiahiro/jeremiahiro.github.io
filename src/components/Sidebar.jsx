import { useState } from 'react';
import { IconSvg } from "../components";
import { navLinks } from '../constants';

const Sidebar = () => {

  const [selectedTab, setSelectedTab] = useState(navLinks[0].id);

  return (
    <>
      <div className="md:flex md:flex-col md:divide-y md:divide-slate-200 [&>*]:py-12">
        <div
          className="md:space-y-8 md:relative md:before:absolute md:before:-translate-x-1/2 md:before:-translate-y-3 md:before:ml-[1.25rem] md:before:h-5/6 md:before:w-0.5 md:before:bg-gradient-to-b md:before:from-transparent md:before:via-slate-300 md:before:to-transparent md:block flex justify-between"
          id="portfolio-tab" data-tabs-toggle="#portfolio-tab-content" role="tablist"
        >
          {navLinks.map((tab) => {
            return (
              <div 
                key={tab.id} 
                className="relative py-4 group cursor-pointer" 
                role="presentation"
              >
                <div className="flex flex-col items-center mb-1 sm:flex-row"
                  id={`${tab.id}-tab`}
                  data-tabs-target={`#${tab.id}`}
                  type="button"
                  role="tab"
                  aria-controls={tab.id}
                  aria-selected={selectedTab === tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                >
                  <div>
                    <div
                      className={`hidden md:flex items-center justify-center w-10 h-10 transition duration-300 ease-in-out transform rounded-full shadow md:order-1 group-hover:bg-primary group-hover:rotate-45 ${selectedTab === tab.id ? 'bg-primary rotate-45' : 'bg-slate-800 dark:bg-white'}`}>
                      <IconSvg
                        name={tab.id}
                        class={`group-hover:text-white ${
                          selectedTab === tab.id ? 'text-white' : 'text-gray-200 dark:text-gray-800'
                        }`}
                        width={tab.width}
                        height={tab.height}
                      />
                    </div>
                  </div>
                  <div
                    className={`md:ml-2 text-base md:text-2xl ${selectedTab === tab.id ? 'active border-b-2 border-primary text-primary' : ''} aria-selected:border-b-2 aria-selected:border-primary aria-selected:text-primary text-gray-700 dark:text-gray-400 hover:border-b-2 group-hover:border-b-2  hover:text-primary group-hover:text-primary group-hover:border-primary hover:border-primary font-caveat`}
                  >
                    {tab.title}
                  </div>
                </div>
            </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
