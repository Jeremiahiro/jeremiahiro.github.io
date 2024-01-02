import { DarkThemeToggle, Navbar } from 'flowbite-react';

const Header = () => {
  return (
    <div className="fixed z-20 w-full start-0">
      <Navbar fluid className="bg-gray-200">
        <div className="flex justify-between w-full px-20">
          <Navbar.Brand href="/">
            <img src="/logo-light.png" className="hidden h-12 dark:block" alt="Jeremiah Iro Logo" />
            <img src="/logo-dark.png" className="h-12 dark:hidden" alt="Jeremiah Iro Logo" />
          </Navbar.Brand>
          <DarkThemeToggle />
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
