import React from "react";
import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";
import {
  DocumentReportIcon,
  UserCircleIcon,
  LogoutIcon,
} from "@heroicons/react/solid";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-1 bg-blue-400">
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
            <ul className="flex flex-col flex-grow justify-end lg:items-center lg:flex-row list-none lg:ml-auto">
              <li className="nav-item ">
                <Link to="/">
                  <a
                    className="px-5 py-2 flex text-xs uppercase font-bold leading-snug text-white hover:bg-green-400 rounded-md"
                    href="#pablo"
                  >
                    <span className="">Home</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/calculator">
                  <a
                    className="px-5 py-2 flex text-xs uppercase font-bold leading-snug text-white hover:bg-green-400 rounded-md"
                    href="#pablo"
                  >
                    <span className="">Calculator</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/food">
                  <a
                    className="px-5 py-2 flex text-xs uppercase font-bold leading-snug text-white hover:bg-green-400 rounded-md"
                    href="#pablo"
                  >
                    <span className="">Food</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about">
                  <a
                    className="px-5 py-2 flex text-xs uppercase font-bold leading-snug text-white hover:bg-green-400 rounded-md"
                    href="#pablo"
                  >
                    <span className="">About</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Popover className="relative">
                  <Popover.Button className="px-5 flex">
                    <div class="avatar">
                      <div class="rounded-full w-10 h-10">
                        <img src="http://daisyui.com/tailwind-css-component-profile-1@56w.png" />
                      </div>
                    </div>
                  </Popover.Button>
                  <Popover.Panel className="absolute z-10 lg:top-15 lg:right-0 bg-white rounded-md w-screen max-w-xs md:w-52">
                    <div className="flex flex-wrap">
                      <div className="w-full font-medium">
                        <Link to="/user/dashboard" className="">
                          <a
                            className="flex flex-row items-center m-1 px-4 py-1  rounded-md hover:bg-gray-200"
                            href="/analytics"
                          >
                            <span className="">
                              <UserCircleIcon className="w-5 h-5" />
                            </span>
                            <span>Dashboard</span>
                          </a>
                        </Link>
                        <Link to="/user/food_management">
                          <a
                            className="flex flex-row items-center m-1 px-4 py-1  rounded-md hover:bg-gray-200"
                            href="/engagement"
                          >
                            <span>
                              <DocumentReportIcon className="w-5 h-5" />
                            </span>
                            <span>Food Management</span>
                          </a>
                        </Link>
                        <a
                          className="flex flex-row items-center m-1 px-4 py-1  rounded-md hover:bg-gray-200"
                          href="/engagement"
                        >
                          <span>
                            <LogoutIcon className="w-5 h-5" />
                          </span>
                          <span>Log Out</span>
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
