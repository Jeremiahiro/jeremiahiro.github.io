import { Header, Sidebar, Profile, Service, Experience, Tech, Projects } from "../../components";

const Layout = () => {

  return (
    <>
      <div className="min-h-screen bg-gray-200 dark:bg-gray-800 start-0">
        <Header />
        <div className="flex justify-start pl-20 pt-5">
          <div className="sticky w-1/5 h-full">
            <div className="fixed top-20">
              <Sidebar />
            </div>
          </div>
          <div id="portfolio-tab-content" className="w-full shadow-sm">
              <div className="relative h-screen hidden overflow-hidden" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <Profile />
              </div>
              <div className="hidden" id="projects" role="tabpanel" aria-labelledby="projects-tab">
                  <Projects />
              </div>
              <div className="hidden" id="service" role="tabpanel" aria-labelledby="service-tab">
                  <Service />
              </div>
              <div className="hidden" id="experience" role="tabpanel" aria-labelledby="experience-tab">
                  <Experience />
              </div>
              <div className="hidden" id="skills" role="tabpanel" aria-labelledby="skills-tab">
                  <Tech />
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
