import { Header, Sidebar, Profile, Service, Experience, Tech, Projects } from "../../components";

const Layout = () => {

  return (
    <>
      <div className="min-h-screen bg-gray-200 dark:bg-gray-800 start-0 overflow-x-hidden">
        <Header />
        <div className="flex flex-col md:flex-row justify-start md:pl-20 p-10 md:pt-5">
          <div className="md:sticky md:w-1/5 md:h-full">
            <div className="md:fixed md:top-20">
              <Sidebar />
            </div>
          </div>
          <div id="portfolio-tab-content" className="pt-12 md:pt-40 md:px-10 w-full shadow-sm">
              <div className="hidden h-screen relative" id="profile" role="tabpanel" aria-labelledby="profile-tab">
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
