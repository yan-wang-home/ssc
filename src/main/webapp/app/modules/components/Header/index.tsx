import React, { Fragment, useState } from 'react';

import { Img, Text } from '../../components';
import { Link } from 'react-router-dom';
import { Translate, Storage } from 'react-jhipster';
import { LocaleMenu } from 'app/shared/layout/menus';
import { useAppDispatch, useAppSelector } from 'app/config/store';
import { hasAnyAuthority } from 'app/shared/auth/private-route';
import { AUTHORITIES } from 'app/config/constants';
import { setLocale } from 'app/shared/reducers/locale';
import { Disclosure, Menu, Transition } from '@headlessui/react';

type HeaderProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & Partial<{}>;

const Header: React.FC<HeaderProps> = props => {
  const currentLocale = useAppSelector(state => state.locale.currentLocale);
  const isAuthenticated = useAppSelector(state => state.authentication.isAuthenticated);
  const isAdmin = useAppSelector(state => hasAnyAuthority(state.authentication.account.authorities, [AUTHORITIES.ADMIN]));
  const isOpenAPIEnabled = useAppSelector(state => state.applicationProfile.isOpenAPIEnabled);

  const dispatch = useAppDispatch();

  const handleLocaleChange = event => {
    const langKey = event.target.value;
    Storage.session.set('locale', langKey);
    dispatch(setLocale(langKey));
  };

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <header className="mt-[104px]">
            <nav className="px-4 py-4 flex sm:flex-row justify-between items-center bg-white/80 backdrop-blur-md shadow-md lg:px-6 w-full fixed top-0 left-0 right-0 z-10 ">
              <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white lg:hidden">
                <svg className="block sm:w-6 md:w-8 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </Disclosure.Button>
              <div className="text-3xl font-bold leading-none">
                <div
                  id="company-logo"
                  className="h-14 flex flex-row gap-2 items-center lg:justify-items-start md:justify-items-center sm:justify-items-center transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out"
                >
                  <Link to="/" className="alert-link">
                    <Img className="h-[65px] md:h-[56px] sm:h-[45px]" src="content/images/logo.png" alt="Group448" />
                  </Link>
                  <Link to="/" className="pl-2 alert-link items-center">
                    <Text className="lg:text-[25px] md:text-[30px] sm:text-[20px] text-sky-800" size="txtCinzelDecorativeBold16">
                      <Translate contentKey="header.title" />
                    </Text>
                  </Link>
                </div>
              </div>
              <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
                <li>
                  <Link
                    to="/products"
                    className="text-sky-800 text-xl alert-link transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out"
                  >
                    <Translate contentKey="header.products" />
                  </Link>
                </li>
                <li className="text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    className="w-4 h-4 current-fill"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </li>
                <li>
                  <Link
                    to="/rates"
                    className="text-sky-800 text-xl alert-link transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out"
                  >
                    <Translate contentKey="header.rates" />
                  </Link>
                </li>
                <li className="text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    className="w-4 h-4 current-fill"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </li>
                <li>
                  <Link
                    to="/calculators"
                    className="text-sky-800 text-xl alert-link transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out"
                  >
                    <Translate contentKey="header.calculators" />
                  </Link>
                </li>
                <li className="text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    className="w-4 h-4 current-fill"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </li>
                <li>
                  <Link
                    to="/comingsoon"
                    className="text-sky-800 text-xl alert-link transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out"
                  >
                    <Translate contentKey="header.events" />
                  </Link>
                </li>
                <li className="text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    className="w-4 h-4 current-fill"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </li>
                <li>
                  <Link
                    to="/partners"
                    className="text-sky-800 text-xl alert-link transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out"
                  >
                    <Translate contentKey="header.partners" />
                  </Link>
                </li>
                <li className="text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    className="w-4 h-4 current-fill"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-sky-800 text-xl alert-link transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out"
                  >
                    <Translate contentKey="header.aboutus" />
                  </Link>
                </li>
              </ul>
              <div className="hidden lg:flex lg:inline-block py-2">
                <LocaleMenu currentLocale={currentLocale} onClick={handleLocaleChange} />
              </div>
              <div className="lg:hidden"></div>
            </nav>
            <Disclosure.Panel className="lg:hidden">
              {({ close }) => (
                <div className="navbar-menu relative z-50">
                  <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                  <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <div
                          id="company-logo"
                          className="flex flex-row gap-2 items-end lg:justify-items-start md:justify-items-center sm:justify-items-center"
                        >
                          <Link to="/" className="alert-link">
                            <Img className="h-[50px] w-[50px]" src="content/images/logo.png" alt="Group448" />
                          </Link>
                          <Link to="/" className="pl-2 alert-link items-center">
                            <Text className="mb-[10px] md:text-[23px] sm:text-[19px] text-sky-800" size="txtCinzelDecorativeBold16">
                              <Translate contentKey="header.title" />
                            </Text>
                          </Link>
                        </div>
                        <button className="navbar-close absolute right-3" onClick={() => close()}>
                          <svg
                            className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                        </button>
                      </div>
                      <div className="flex justify-end py-2">
                        <LocaleMenu currentLocale={currentLocale} onClick={handleLocaleChange} />
                      </div>
                    </div>
                    <hr className="h-0.5 border-t-0 bg-blue-800 dark:bg-blue-800 mt-3 w-full" />
                    <div>
                      <ul>
                        <li className="mb-1">
                          <Link
                            to="/products"
                            className="block p-4 hover:bg-gray-100 hover:text-blue-600 rounded text-sky-800 md:text-2xl sm:text-xl alert-link transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out"
                          >
                            <Translate contentKey="header.products" />
                          </Link>
                        </li>
                        <li className="mb-1">
                          <Link
                            to="/rates"
                            className="block p-4 hover:bg-gray-100 hover:text-blue-600 rounded text-sky-800 md:text-2xl sm:text-xl alert-link transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out"
                          >
                            <Translate contentKey="header.rates" />
                          </Link>
                        </li>
                        <li className="mb-1">
                          <Link
                            to="/calculators"
                            className="block p-4 hover:bg-gray-100 hover:text-blue-600 rounded text-sky-800 md:text-2xl sm:text-xl alert-link transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out"
                          >
                            <Translate contentKey="header.calculators" />
                          </Link>
                        </li>
                        <li className="mb-1">
                          <Link
                            to="/comingsoon"
                            className="block p-4 hover:bg-gray-100 hover:text-blue-600 rounded text-sky-800 md:text-2xl sm:text-xl alert-link transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out"
                          >
                            <Translate contentKey="header.events" />
                          </Link>
                        </li>
                        <li className="mb-1">
                          <Link
                            to="/partners"
                            className="block p-4 hover:bg-gray-100 hover:text-blue-600 rounded text-sky-800 md:text-2xl sm:text-xl alert-link transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out"
                          >
                            <Translate contentKey="header.partners" />
                          </Link>
                        </li>
                        <li className="mb-1">
                          <Link
                            to="/about"
                            className="block p-4 hover:bg-gray-100 hover:text-blue-600 rounded text-sky-800 md:text-2xl sm:text-xl alert-link transform hover:scale-110 hover:border-white transition-transform duration-3000 ease-in-out"
                          >
                            <Translate contentKey="header.aboutus" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-auto">
                      <p className="my-4 md:text-sm sm:text-xs text-center text-gray-400">
                        <span>© Copyright, All Rights Reserved by Smart Solutions Capital</span>
                      </p>
                    </div>
                  </nav>
                </div>
              )}
            </Disclosure.Panel>
          </header>
        </>
      )}
    </Disclosure>
  );
};

Header.defaultProps = {};

export default Header;
