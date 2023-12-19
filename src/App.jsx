import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  // Hero,
  // Navbar,
  Tech,
  Projects,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex">
      <div className='w-1/4'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sunt. Sed, fuga alias. Facilis, soluta sit enim repellendus nesciunt vel quod, repudiandae laudantium ab, hic voluptas minima quos! Facilis, quae.
      </div>
      <div className='w-full'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, sunt. Sed, fuga alias. Facilis, soluta sit enim repellendus nesciunt vel quod, repudiandae laudantium ab, hic voluptas minima quos! Facilis, quae.
      </div>
      </div>
      <div className="relative z-0">
        <div>
          {/* <Navbar /> */}
          {/* <Hero /> */}
        </div>

        <div className="bg-center bg-no-repeat bg-cover bg-about">
          <About />
        </div>

        <div className="pb-10 bg-center bg-no-repeat bg-cover bg-tech">
          <Tech />
        </div>

        <Projects />

        <div
          className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]">
          <div
            className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]">
            <Experience />
          </div>
        </div>
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
