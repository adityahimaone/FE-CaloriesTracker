import React from "react";
import { Popover } from "@headlessui/react";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-400">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              <i class="fas fa-fire text-lg leading-lg text-white mr-1"></i>
              Daily Calories
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col flex-grow justify-end lg:flex-row list-none lg:ml-auto">
              <li className="nav-item ">
                <a
                  className="px-5 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:bg-green-400 rounded-md"
                  href="#pablo"
                >
                  <span className="">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-5 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:bg-green-400 rounded-md"
                  href="#pablo"
                >
                  <span className="">About</span>
                </a>
              </li>
              <li className="nav-item">
                <Popover className="relative">
                  <Popover.Button className="px-5 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:bg-green-400 rounded-md">
                    Account
                  </Popover.Button>
                  <Popover.Panel className="absolute z-10 bg-white rounded-md w-screen max-w-xs md:w-32">
                    <div className="flex flex-wrap">
                      <div className="w-full font-medium">
                        <a
                          className="block m-1 px-4 py-1  rounded-md hover:bg-gray-200"
                          href="/analytics"
                        >
                          <i className="fas fa-sign-in-alt mr-2"></i>
                          Login
                        </a>
                        <a
                          className="block m-1 px-4 py-1  rounded-md hover:bg-gray-200"
                          href="/engagement"
                        >
                          <i class="fas fa-sign-out-alt mr-2"></i>
                          Logout
                        </a>
                      </div>
                    </div>
                    <img src="/solutions.jpg" alt="" />
                  </Popover.Panel>
                </Popover>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
