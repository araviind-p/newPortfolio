import React, { useState, useEffect } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import Photo from "../images/Photo.png";
import { useDispatch, useSelector } from "react-redux";
import { switch_theme } from "../redux/appSlice";

const initialNavigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'About', href: '#about', current: false },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Contact', href: '#contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const { darkMode } = useSelector((state) => state.appSlice);
  const dispatch = useDispatch();
  const [navigation, setNavigation] = useState(initialNavigation);

  const handleClick = (clickedItemName) => {
    setNavigation((prevNavigation) =>
      prevNavigation.map((item) =>
        item.name === clickedItemName
          ? { ...item, current: true }
          : { ...item, current: false }
      )
    );
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - document.querySelector('nav').offsetHeight, // Adjust for navbar height
            behavior: 'smooth'
          });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Handle initial page load with hash

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <Disclosure as="nav" className={classNames(
      darkMode ? 'bg-gray-900' : 'bg-[#b6cdd6]',
      'fixed w-screen z-10'
    )}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className={classNames(
              darkMode ? 'text-gray-400 hover:bg-gray-800 focus:ring-white' : 'text-black hover:bg-gray-700 focus:ring-gray-900',
              'group relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset'
            )}>
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    onClick={() => handleClick(item.name)}
                    className={classNames(
                      item.current ? (darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-900 text-gray-100') : (darkMode ? 'text-gray-300 hover:bg-gray-800 hover:text-gray-200' : 'text-gray-900 hover:bg-gray-700 hover:text-gray-100'),
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Theme toggle button */}
            <button
              onClick={() => dispatch(switch_theme())} // Dispatch switch_theme without payload
              className={classNames(
                darkMode ? 'text-gray-300' : 'text-gray-600',
                'p-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-inset'
              )}
            >
              {darkMode ? (
                <SunIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MoonIcon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className={classNames(
                  darkMode ? 'bg-gray-800 text-gray-400 focus:ring-gray-900' : 'bg-gray-700 text-gray-300 focus:ring-gray-700',
                  'relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-offset-2'
                )}>
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt="Profile"
                    src={Photo}
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
            </Menu>
          </div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden">
        <div className={classNames(
          darkMode ? 'bg-gray-800' : 'bg-[#b6cdd6]',
          'space-y-1 px-2 pb-3 pt-2 pr-8'
        )}>
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              onClick={() => handleClick(item.name)}
              className={classNames(
                item.current ? (darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-800 text-gray-100') : (darkMode ? 'text-gray-300 hover:bg-gray-800 hover:text-gray-200' :  'text-gray-900 hover:bg-gray-700 hover:text-gray-100'),
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
