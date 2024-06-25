import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaChildren } from "react-icons/fa6";
import { PiCowboyHatFill } from "react-icons/pi";

import { BsArrowLeftCircle } from 'react-icons/bs';
import { AiFillPieChart } from 'react-icons/ai';
import { MdPeopleAlt } from "react-icons/md";
import { IoInformation } from "react-icons/io5";
import { TbReportAnalytics } from "react-icons/tb";
import { RiOrganizationChart } from "react-icons/ri";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaPeopleRoof } from "react-icons/fa6";

import { SiOpenaccess } from 'react-icons/si';
import { CgProfile } from 'react-icons/cg';
import Logo from '../assets/images/logo.svg';
import HamburgerButton from './HamburgerMenuButton/HamburgerButton';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [wadahOpen, setWadahOpen] = useState(false);
  const location = useLocation();

  const Menus = [
    { title: 'Dashboard', path: '/dashboard', src: <AiFillPieChart /> },
    { title: 'Tambah Jemaat', path: '/course', src: <MdPeopleAlt /> },
    { title: 'Informasi', path: '/informasi', src: <IoInformation /> },
    { title: 'Laporan', path: '/laporan', src: <TbReportAnalytics /> },
    { 
      title: 'Wadah', 
      path: '/wadah', 
      src: <RiOrganizationChart />,
      subMenus: [
        { title: 'Kharisma Teens & Youth', path: '/wadah-pria', src: <FaChildren /> },
        { title: 'Wanita Ruth', path: '/wadah-wanita', src: <PiCowboyHatFill /> },
        { title: 'Kharisma Kidz', path: '/wadah-anak', src: <FaPeopleRoof /> },
      ]
    },
    { title: 'Absensi', path: '/Absensi', src: <AiOutlineSchedule /> },
    { title: 'Signin', path: '/login', src: <SiOpenaccess />, gap: 'true' },
  ];

  return (
    <>
      <div className={`relative ${open ? 'w-60' : 'w-fit'} hidden sm:block h-screen duration-300 bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800`}>
        {/* Hamburger button aligned with navbar */}
        <div className="absolute mb-2 top-1 left-2">
          <HamburgerButton
            setMobileMenu={setMobileMenu}
            mobileMenu={mobileMenu}
          />
        </div>

        <BsArrowLeftCircle
          className={`absolute ${open ? 'text-3xl' : 'hidden'} bg-white fill-slate-800 rounded-full cursor-pointer top-9 -right-4 dark:fill-gray-400 dark:bg-gray-800 rotate-180`}
          onClick={() => setOpen(!open)}
        />
        <Link to='/'>
          <div className={`flex ${open && 'gap-x-4'} items-center`}>
            <img src={Logo} alt='' className='pl-2' />
            {open && (
              <span className='text-xl font-medium whitespace-nowrap dark:text-white'>
                Gpia Kharisma
              </span>
            )}
          </div>
        </Link>

        <ul className='pt-6'>
          {Menus.map((menu, index) => (
            <React.Fragment key={index}>
              <Link to={menu.path}>
                <li
                  className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 ${menu.gap ? 'mt-9' : 'mt-2'} ${location.pathname === menu.path && 'bg-gray-200 dark:bg-gray-700'}`}
                  onClick={() => menu.subMenus && setWadahOpen(!wadahOpen)}
                >
                  <span className='text-2xl'>{menu.src}</span>
                  <span className={`${!open && 'hidden'} origin-left duration-300 hover:block`}>
                    {menu.title}
                  </span>
                </li>
              </Link>
              {menu.subMenus && wadahOpen && (
                <ul className='pl-10 pt-2'>
                  {menu.subMenus.map((subMenu, subIndex) => (
                    <Link to={subMenu.path} key={subIndex}>
                      <li
                        className={`flex items-center gap-x-6 p-2 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 ${location.pathname === subMenu.path && 'bg-gray-200 dark:bg-gray-700'}`}
                      >
                        <span className='text-2xl'>{/* Icon can be added here if needed */}</span>
                        <span className={`${!open && 'hidden'} origin-left duration-300 hover:block`}>
                          {subMenu.title}
                        </span>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
      
      {/* Mobile Menu */}
      <div className="pt-3">
        <HamburgerButton
          setMobileMenu={setMobileMenu}
          mobileMenu={mobileMenu}
        />
      </div>
      
      {/* Dropdown menu for mobile */}
      <div className="sm:hidden">
        <div className={`${mobileMenu ? 'flex' : 'hidden'} absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 dark:text-white bg-gray-50 dark:bg-slate-800 drop-shadow md rounded-xl`}>
          {Menus.map((menu, index) => (
            <React.Fragment key={index}>
              <Link to={menu.path} onClick={() => setMobileMenu(false)}>
                <span className={`${location.pathname === menu.path && 'bg-gray-200 dark:bg-gray-700'} p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700`}>
                  {menu.title}
                </span>
              </Link>
              {menu.subMenus && wadahOpen && (
                <ul className="pl-10 pt-2">
                  {menu.subMenus.map((subMenu, subIndex) => (
                    <Link to={subMenu.path} key={subIndex}>
                      <li className={`flex items-center gap-x-6 p-2 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 ${location.pathname === subMenu.path && 'bg-gray-200 dark:bg-gray-700'}`}>
                        <span className="text-2xl">{/* Icon can be added here if needed */}</span>
                        <span className={`${!open && 'hidden'} origin-left duration-300 hover:block`}>
                          {subMenu.title}
                        </span>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
