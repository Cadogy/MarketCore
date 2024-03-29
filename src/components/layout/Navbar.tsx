import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  ChevronDownIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  PhoneIcon,
  PlayCircleIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';
import Link from 'next/link';
import { Fragment, useEffect, useRef, useState } from 'react';
// Icon Importation
import { AiFillFire } from 'react-icons/ai';
import { BsPeopleFill } from 'react-icons/bs';
import {
  FaBell,
  FaCoins,
  FaSearch,
  FaShieldAlt,
  FaShippingFast,
} from 'react-icons/fa';
import { GiShardSword } from 'react-icons/gi';
import { CiBellOn, CiChat1 } from 'react-icons/ci';
import { RiChat1Fill, RiChatSmileFill } from 'react-icons/ri';

//Data Importing
import GameAccountsLists from '../../models/gameAccountsLists';
import GameAccountsTitles from '../../models/gameAccountsTitles';
import GameCurrencyLists from '../../models/gameCurrencyLists';
import GameCurrencyTitles from '../../models/gameCurrencyTitles';
import GameItemLists from '../../models/gameItemLists';
import GameItemTitles from '../../models/gameItemTitles';

// ============ OTHER MENU ITEMS ============ //

const currencyOptions = [
  { name: 'USD', abbreviation: 'USD', href: '#' },
  { name: 'EUR', abbreviation: 'EUR', href: '#' },
  { name: 'GBP', abbreviation: 'GBP', href: '#' },
];

const products = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of your traffic',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Integrations',
    description: 'Connect with third-party tools',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will convert',
    href: '#',
    icon: ArrowPathIcon,
  },
];

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const isLoggedIn = true; // Replace with your login state

  const handleProfileClick = () => {
    // Implement profile menu dropdown logic
  };

  const handleSearchExpand = () => {
    setSearchExpanded(true);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const handleDropdownToggle = () => {
    setIsDropdownVisible((prevVisible) => !prevVisible);
  };

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleMouseEnter = () => {
    if (!searchExpanded) {
      setSearchExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    if (
      searchInputRef.current &&
      !searchInputRef.current.contains(document.activeElement)
    ) {
      setSearchExpanded(false);
    }
  };

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      searchContainerRef.current &&
      event.target instanceof Node &&
      !searchContainerRef.current.contains(event.target)
    ) {
      setSearchExpanded(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <header className='fixed top-0 z-[900] w-full bg-white shadow-md'>
      <div className='hidden items-center justify-between bg-gray-100 px-4 py-1 text-gray-500 md:flex'>
        <h1 className='flex items-center justify-center text-sm font-normal'>
          <FaBell className='mr-1' /> 24/7 Live Support
        </h1>
        <h1 className='flex items-center justify-center text-sm font-normal'>
          <FaShippingFast className='mr-1' /> Super-Fast Delivery
        </h1>
        <h1 className='flex items-center justify-center text-sm font-normal'>
          <FaShieldAlt className='mr-1' /> Transaction Protection
        </h1>
      </div>
      <nav
        className='mx-auto flex items-center justify-between px-6 py-1 lg:px-3'
        aria-label='Global'
      >
        <div className='lg:flex-0 mr-10 flex'>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>MarketCore</span>
            <svg
              id='Layer_1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 165 40'
              width='164'
              height='40'
            >
              <defs></defs>
              <path
                fill='orange'
                d='m30.14,0H9.86C4.42,0,0,4.42,0,9.86v20.28c0,5.45,4.42,9.86,9.86,9.86h20.28c5.45,0,9.86-4.42,9.86-9.86V9.86c0-5.45-4.42-9.86-9.86-9.86Zm-8.75,22.73c.02.09.1.15.19.15h4.87c.09,0,.17-.06.19-.15l2.58-9.78c.03-.13-.06-.25-.19-.25H11.54c-.13,0-.23.12-.19.25l4.15,16.19c.02.09.1.15.19.15h15.6c.11,0,.2.09.2.2v3.3c0,.11-.09.2-.2.2H12.81c-.09,0-.17-.06-.19-.15l-4.42-17.49c-.02-.09-.1-.15-.19-.15h-1.75c-.13,0-.22-.12-.19-.25l1.38-5.81c.02-.09.1-.15.19-.15h26.11c.13,0,.23.12.19.25l-4.21,16.36c-.02.09-.1.15-.19.15h-11c-.09,0-.17-.06-.19-.15l-2.26-8.97c-.03-.13.06-.25.19-.25h8.06c.13,0,.23.12.19.25l-.82,3.31c-.02.09-.1.15-.19.15h-2.56c-.13,0-.23.12-.19.25l.63,2.37Z'
                className='cls-1'
              ></path>
              <g>
                <polygon
                  points='68.19 30.67 72.17 30.67 72.17 9 68.19 11.05 68.19 30.67'
                  className='cls-2'
                ></polygon>
                <path
                  d='m84.46,15.95c-.72-.68-1.87-1.22-3.2-1.22-3.74,0-5.87,3.27-5.87,7.94,0,5.83,2.65,8.33,5.87,8.33,1.44,0,2.44-.62,3.2-1.3v.98h3.97V9l-3.97,2.05v4.91Zm0,3.99v5.88c-.57.78-1.21,1.31-2.44,1.31-1.55,0-2.59-1.34-2.59-4.55,0-2.62.84-3.99,2.36-3.99,1.16,0,2.07.48,2.68,1.34h0Z'
                  className='cls-2'
                ></path>
                <polygon
                  points='54.03 21.57 59.81 21.57 59.81 17.53 54.03 17.53 54.03 13.93 63.99 13.93 63.99 9.86 50 9.86 50 30.67 64.42 30.67 64.42 26.6 54.03 26.6 54.03 21.57'
                  className='cls-2'
                ></polygon>
                <path
                  d='m98.39,14.73c-3.94,0-6.82,3.36-6.82,8.15s2.88,8.12,6.82,8.12,6.85-3.33,6.85-8.12-2.91-8.15-6.85-8.15Zm0,12.31c-1.9,0-2.79-1.75-2.79-4.16s.89-4.2,2.79-4.2,2.82,1.81,2.82,4.2c0,2.17-.92,4.16-2.82,4.16Z'
                  className='cls-2'
                ></path>
                <polygon
                  points='117.16 19.85 117.15 19.85 117.15 19.85 117.16 19.85'
                  className='cls-2'
                ></polygon>
                <path
                  d='m144.22,15.95c-.72-.68-1.87-1.22-3.2-1.22-3.74,0-5.87,3.27-5.87,7.94,0,5.83,2.65,8.33,5.87,8.33,1.44,0,2.45-.62,3.2-1.3v.98h3.97V9l-3.97,2.05v4.91Zm0,3.99v5.88c-.57.78-1.21,1.31-2.44,1.31-1.55,0-2.59-1.34-2.59-4.55,0-2.62.83-3.99,2.36-3.99,1.15,0,2.07.48,2.68,1.34h0Z'
                  className='cls-2'
                ></path>
                <path
                  d='m158.15,14.73c-3.94,0-6.82,3.36-6.82,8.15s2.88,8.12,6.82,8.12,6.85-3.33,6.85-8.12-2.91-8.15-6.85-8.15Zm0,12.31c-1.9,0-2.79-1.75-2.79-4.16s.89-4.2,2.79-4.2,2.82,1.81,2.82,4.2c0,2.17-.92,4.16-2.82,4.16Z'
                  className='cls-2'
                ></path>
                <path
                  d='m126.09,14.75c-2.44,0-3.92.53-5.67,1.58l1.52,2.85c1.38-.78,2.33-1.04,4.14-1.04,1.44,0,2.16.89,2.16,1.99v.77c-.63-.33-1.52-.63-2.91-.63-3.43,0-6.13,1.72-6.13,5.17,0,3.78,2.82,5.56,5.64,5.56,1.41,0,2.68-.6,3.4-1.37v1.04h0s3.97.01,3.97.01v-10.47c0-3.51-2.48-5.47-6.13-5.47Zm2.15,11.35c-.43.74-1.47,1.43-2.77,1.43-1.7,0-2.3-.98-2.3-2.08,0-1.25.81-1.96,2.3-1.96,1.41,0,2.08.21,2.77.65v1.96Z'
                  className='cls-2'
                ></path>
                <path
                  d='m115.39,14.73c-1.41,0-2.41.63-3.11,1.37v-1.04h-3.97v15.61h3.97v-8.44c0-2.71,1.01-3.39,2.56-3.39.89,0,1.67.42,2.3,1.01l1.03-4.01c-.52-.57-1.5-1.1-2.79-1.1Z'
                  className='cls-2'
                ></path>
              </g>
            </svg>
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <Popover.Group className='hidden items-center justify-center lg:flex lg:gap-x-12'>
          {/* =============== Currency Popover Nav menu desktop =============== */}
          <Popover className='relative'>
            <Popover.Button className='flex items-center justify-center gap-x-1 text-xl text-gray-500 ring-0'>
              <FaCoins className='mr-1 h-4 w-4' /> Currency
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-0'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-0'
            >
              <Popover.Panel className='absolute -left-16 top-full z-10 max-h-[350px] w-screen max-w-6xl overflow-hidden rounded-bl-lg rounded-br-lg bg-white shadow-lg md:mt-[10px]'>
                <div className='grid grid-cols-[2fr,1fr]'>
                  <div className='col-span-1 border-r-[1px] border-gray-100 bg-white'>
                    <h3 className='mb-1 flex items-center border-b-[1px] border-gray-200/75 bg-gray-50 px-4 py-3 text-base font-normal text-gray-500'>
                      <AiFillFire className='animate-flicker mr-2 text-orange-400' />{' '}
                      Popular Game Currencies
                    </h3>
                    <div className='grid grid-cols-1 gap-2'>
                      <div className='grid h-[300px] grid-cols-2 gap-x-6 gap-y-0 overflow-y-auto px-2 py-2'>
                        {/* Render game titles based on gameList array */}
                        {GameCurrencyTitles.map((game, index) => (
                          <div
                            key={index}
                            className='group flex items-center gap-x-2 px-2 py-2 text-gray-500 transition-all hover:rounded-md hover:bg-gray-50 hover:text-gray-800'
                          >
                            <Link
                              className='inline-flex items-center justify-center gap-2'
                              href={game.link}
                            >
                              <img
                                className='h-7 w-7 transition-all group-hover:scale-105'
                                src={game.icon}
                                alt={game.title}
                              />
                              <span className='text-[20px]'>{game.title}</span>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='col-span-1 bg-gray-50'>
                    {/* All Games section */}
                    <div className='col-span-3 h-full'>
                      {searchExpanded ? (
                        <div
                          className='relative border-b-[1px] border-gray-200/75'
                          onMouseLeave={handleMouseLeave}
                          ref={searchContainerRef}
                        >
                          <input
                            type='text'
                            placeholder='Search game currencies'
                            value={searchQuery}
                            onChange={handleSearchInput}
                            className='block w-full border-0 bg-gray-50 py-3 text-base font-normal text-gray-900 placeholder-gray-500 focus:bg-gray-100 focus:ring-0'
                            ref={searchInputRef}
                          />
                          <span className='absolute inset-y-0 right-0 flex items-center pr-4'>
                            <FaSearch className='text-gray-400' />
                          </span>
                        </div>
                      ) : (
                        <div
                          className='flex cursor-pointer items-center border-b-[1px] border-gray-200/75 bg-gray-50 px-4 py-3 text-base font-normal text-gray-500'
                          onClick={handleSearchExpand}
                          onMouseEnter={handleMouseEnter}
                        >
                          {/* <FaGamepad className="mr-2 text-orange-400" /> */}
                          All Game Currencies
                          <span className='ml-auto'>
                            <FaSearch className='text-gray-400' />
                          </span>
                        </div>
                      )}

                      {/* Game list */}
                      <div className='h-[305px] overflow-y-auto'>
                        {/* Render game titles based on search query */}
                        {GameCurrencyLists.filter((game) =>
                          game.title
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase())
                        ).map((game, index) => (
                          <div
                            key={index}
                            className='group flex items-center justify-between bg-gray-50 px-4 py-2 transition-all hover:cursor-pointer hover:bg-white hover:text-black'
                          >
                            <Link href={`/shop/${game.gameId}`}>
                              <div
                                key={index}
                                className='group flex items-center justify-between bg-gray-50 px-4 py-2 transition-all hover:cursor-pointer hover:bg-white hover:text-black'
                              >
                                <div className='flex items-center'>
                                  {game.icon && (
                                    <img
                                      src={game.icon}
                                      alt='Game Icon'
                                      className='mr-2 h-6 w-6 rounded transition-all group-hover:scale-105'
                                    />
                                  )}
                                  <span className='text-gray-500 hover:text-gray-800'>
                                    {game.title}
                                  </span>
                                </div>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          {/* =============== Currency Popover Nav menu desktop =============== */}

          {/* =============== Accounts Popover Nav menu desktop =============== */}
          <Popover className='relative'>
            <Popover.Button className='flex items-center justify-center gap-x-1 text-xl text-gray-500'>
              <BsPeopleFill className='mr-1 h-4 w-4' /> Accounts
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-0'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-0'
            >
              <Popover.Panel className='absolute -left-32 top-full z-10 max-h-[350px] w-screen max-w-6xl overflow-hidden rounded-bl-lg rounded-br-lg bg-white shadow-lg md:mt-[10px]'>
                <div className='grid grid-cols-[2fr,1fr]'>
                  <div className='col-span-1 border-r-[1px] border-gray-100 bg-white'>
                    <h3 className='mb-1 flex items-center border-b-[1px] border-gray-200/75 bg-gray-50 px-4 py-3 text-base font-normal text-gray-500'>
                      <AiFillFire className='animate-flicker mr-2 text-orange-400' />{' '}
                      Popular Game Accounts
                    </h3>
                    <div className='grid grid-cols-1 gap-2'>
                      <div className='grid h-[300px] grid-cols-2 gap-x-6 gap-y-0 overflow-y-auto px-2 py-2'>
                        {/* Render game titles based on gameList array */}
                        {GameAccountsTitles.map((game, index) => (
                          <div
                            key={index}
                            className='group flex items-center gap-x-2 px-2 py-2 text-gray-500 transition-all hover:rounded-md hover:bg-gray-50 hover:text-gray-800'
                          >
                            <Link
                              className='inline-flex items-center justify-center gap-2'
                              href={game.link}
                            >
                              <img
                                className='h-7 w-7 transition-all group-hover:scale-105'
                                src={game.icon}
                                alt={game.title}
                              />
                              <span className='text-[20px]'>{game.title}</span>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='col-span-1 bg-gray-50'>
                    {/* All Games section */}
                    <div className='col-span-3 h-full'>
                      {searchExpanded ? (
                        <div
                          className='relative border-b-[1px] border-gray-200/75'
                          onMouseLeave={handleMouseLeave}
                          ref={searchContainerRef}
                        >
                          <input
                            type='text'
                            placeholder='Search game accounts'
                            value={searchQuery}
                            onChange={handleSearchInput}
                            className='block w-full border-0 bg-gray-50 py-3 text-base font-normal text-gray-900 placeholder-gray-500 focus:bg-gray-100 focus:ring-0'
                            ref={searchInputRef}
                          />
                          <span className='absolute inset-y-0 right-0 flex items-center pr-4'>
                            <FaSearch className='text-gray-400' />
                          </span>
                        </div>
                      ) : (
                        <div
                          className='flex cursor-pointer items-center border-b-[1px] border-gray-200/75 bg-gray-50 px-4 py-3 text-base font-normal text-gray-500'
                          onClick={handleSearchExpand}
                          onMouseEnter={handleMouseEnter}
                        >
                          {/* <FaGamepad className="mr-2 text-orange-400" /> */}
                          All Game Accounts
                          <span className='ml-auto'>
                            <FaSearch className='text-gray-400' />
                          </span>
                        </div>
                      )}

                      {/* Game list */}
                      <div className='h-[305px] overflow-y-auto'>
                        {/* Render game titles based on search query */}
                        {GameAccountsLists.filter((game) =>
                          game.title
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase())
                        ).map((game, index) => (
                          <Link href={`/shop/${game.gameId}`}>
                            <div
                              key={index}
                              className='group flex items-center justify-between bg-gray-50 px-4 py-2 transition-all hover:cursor-pointer hover:bg-white hover:text-black'
                            >
                              <div className='flex items-center'>
                                {game.icon && (
                                  <img
                                    src={game.icon}
                                    alt='Game Icon'
                                    className='mr-2 h-6 w-6 rounded transition-all group-hover:scale-105'
                                  />
                                )}
                                <span className='text-gray-500 hover:text-gray-800'>
                                  {game.title}
                                </span>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          {/* =============== Accounts Popover Nav menu desktop =============== */}

          {/* =============== Items Popover Nav menu desktop =============== */}
          <Popover className='relative'>
            <Popover.Button className='flex items-center justify-center gap-x-1 text-xl text-gray-500'>
              <GiShardSword className='mr-1 h-4 w-4' /> Items
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-0'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-0'
            >
              <Popover.Panel className='absolute -left-48 top-full z-10 max-h-[350px] w-screen max-w-6xl overflow-hidden rounded-bl-lg rounded-br-lg bg-white shadow-lg md:mt-[10px]'>
                <div className='grid grid-cols-[2fr,1fr]'>
                  <div className='col-span-1 border-r-[1px] border-gray-100 bg-white'>
                    <h3 className='mb-1 flex items-center border-b-[1px] border-gray-200/75 bg-gray-50 px-4 py-3 text-base font-normal text-gray-500'>
                      <AiFillFire className='animate-flicker mr-2 text-orange-400' />{' '}
                      Popular Game Items
                    </h3>
                    <div className='grid grid-cols-1 gap-2'>
                      <div className='grid h-[300px] grid-cols-2 gap-x-6 gap-y-0 overflow-y-auto px-2 py-2'>
                        {/* Render game titles based on gameList array */}
                        {GameItemTitles.map((game, index) => (
                          <div
                            key={index}
                            className='group flex items-center gap-x-2 px-2 py-2 text-gray-500 transition-all hover:rounded-md hover:bg-gray-50 hover:text-gray-800'
                          >
                            <Link
                              className='inline-flex items-center justify-center gap-2'
                              href={game.link}
                            >
                              <img
                                className='h-7 w-7 transition-all group-hover:scale-105'
                                src={game.icon}
                                alt={game.title}
                              />
                              <span className='text-[20px]'>{game.title}</span>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='col-span-1 bg-gray-50'>
                    {/* All Games section */}
                    <div className='col-span-3 h-full'>
                      {searchExpanded ? (
                        <div
                          className='relative border-b-[1px] border-gray-200/75'
                          onMouseLeave={handleMouseLeave}
                          ref={searchContainerRef}
                        >
                          <input
                            type='text'
                            placeholder='Search game items'
                            value={searchQuery}
                            onChange={handleSearchInput}
                            className='block w-full border-0 bg-gray-50 py-3 text-base font-normal text-gray-900 placeholder-gray-500 focus:bg-gray-100 focus:ring-0'
                            ref={searchInputRef}
                          />
                          <span className='absolute inset-y-0 right-0 flex items-center pr-4'>
                            <FaSearch className='text-gray-400' />
                          </span>
                        </div>
                      ) : (
                        <div
                          className='flex cursor-pointer items-center border-b-[1px] border-gray-200/75 bg-gray-50 px-4 py-3 text-base font-normal text-gray-500'
                          onClick={handleSearchExpand}
                          onMouseEnter={handleMouseEnter}
                        >
                          {/* <FaGamepad className="mr-2 text-orange-400" /> */}
                          All Game Items
                          <span className='ml-auto'>
                            <FaSearch className='text-gray-400' />
                          </span>
                        </div>
                      )}

                      {/* Game list */}
                      <div className='h-[305px] overflow-y-auto'>
                        {/* Render game titles based on search query */}
                        {GameItemLists.filter((game) =>
                          game.title
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase())
                        ).map((game, index) => (
                          <div
                            key={index}
                            className='group flex items-center justify-between bg-gray-50 px-4 py-2 transition-all hover:cursor-pointer hover:bg-white hover:text-black'
                          >
                            <Link href={`/shop/${game.gameId}`}>
                              <div className='flex items-center'>
                                {game.icon && (
                                  <img
                                    src={game.icon}
                                    alt='Game Icon'
                                    className='mr-2 h-6 w-6 rounded transition-all group-hover:scale-105'
                                  />
                                )}
                                <span className='text-gray-500 hover:text-gray-800'>
                                  {game.title}
                                </span>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          {/* =============== Items Popover Nav menu desktop =============== */}
        </Popover.Group>
        {/* =============== Right side user menu desktop =============== */}
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <div className='flex items-center space-x-3'>
            {!isLoggedIn ? (
              <a href='/login' className='text-gray-600 hover:text-gray-800'>
                Login
              </a>
            ) : (
              <>
                <button className='rounded-md p-1 text-gray-300 transition-all hover:bg-gray-100 hover:text-gray-400'>
                  <CiBellOn className='h-8 w-8' />
                </button>
                <button className='rounded-md p-1 text-gray-300 transition-all hover:bg-gray-100 hover:text-gray-400'>
                  <CiChat1 className='h-8 w-8' />
                </button>
                <button
                  onClick={handleProfileClick}
                  className='text-gray-600 transition-all hover:scale-105 hover:text-gray-800'
                >
                  <img
                    src='https://assetsdelivery.eldorado.gg/v7/_assets_/miscellaneous/v6/profile-avatar.svg'
                    alt='Profile'
                    className='h-10 w-10 rounded'
                  />
                </button>
                {/* Profile menu dropdown */}
                {/* Implement your dropdown menu logic here */}
              </>
            )}
          </div>
        </div>
      </nav>
      {/* =============== Mobile navigation menu =============== */}
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-[999] w-full overflow-y-auto bg-white px-6 py-1 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <Link href='/' className='-m-1.5 p-1.5'>
              <span className='sr-only'>MarketCore</span>
              <svg
                id='Layer_1'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 165 40'
                width='164'
                height='40'
              >
                <defs></defs>
                <path
                  fill='orange'
                  d='m30.14,0H9.86C4.42,0,0,4.42,0,9.86v20.28c0,5.45,4.42,9.86,9.86,9.86h20.28c5.45,0,9.86-4.42,9.86-9.86V9.86c0-5.45-4.42-9.86-9.86-9.86Zm-8.75,22.73c.02.09.1.15.19.15h4.87c.09,0,.17-.06.19-.15l2.58-9.78c.03-.13-.06-.25-.19-.25H11.54c-.13,0-.23.12-.19.25l4.15,16.19c.02.09.1.15.19.15h15.6c.11,0,.2.09.2.2v3.3c0,.11-.09.2-.2.2H12.81c-.09,0-.17-.06-.19-.15l-4.42-17.49c-.02-.09-.1-.15-.19-.15h-1.75c-.13,0-.22-.12-.19-.25l1.38-5.81c.02-.09.1-.15.19-.15h26.11c.13,0,.23.12.19.25l-4.21,16.36c-.02.09-.1.15-.19.15h-11c-.09,0-.17-.06-.19-.15l-2.26-8.97c-.03-.13.06-.25.19-.25h8.06c.13,0,.23.12.19.25l-.82,3.31c-.02.09-.1.15-.19.15h-2.56c-.13,0-.23.12-.19.25l.63,2.37Z'
                  className='cls-1'
                ></path>
                <g>
                  <polygon
                    points='68.19 30.67 72.17 30.67 72.17 9 68.19 11.05 68.19 30.67'
                    className='cls-2'
                  ></polygon>
                  <path
                    d='m84.46,15.95c-.72-.68-1.87-1.22-3.2-1.22-3.74,0-5.87,3.27-5.87,7.94,0,5.83,2.65,8.33,5.87,8.33,1.44,0,2.44-.62,3.2-1.3v.98h3.97V9l-3.97,2.05v4.91Zm0,3.99v5.88c-.57.78-1.21,1.31-2.44,1.31-1.55,0-2.59-1.34-2.59-4.55,0-2.62.84-3.99,2.36-3.99,1.16,0,2.07.48,2.68,1.34h0Z'
                    className='cls-2'
                  ></path>
                  <polygon
                    points='54.03 21.57 59.81 21.57 59.81 17.53 54.03 17.53 54.03 13.93 63.99 13.93 63.99 9.86 50 9.86 50 30.67 64.42 30.67 64.42 26.6 54.03 26.6 54.03 21.57'
                    className='cls-2'
                  ></polygon>
                  <path
                    d='m98.39,14.73c-3.94,0-6.82,3.36-6.82,8.15s2.88,8.12,6.82,8.12,6.85-3.33,6.85-8.12-2.91-8.15-6.85-8.15Zm0,12.31c-1.9,0-2.79-1.75-2.79-4.16s.89-4.2,2.79-4.2,2.82,1.81,2.82,4.2c0,2.17-.92,4.16-2.82,4.16Z'
                    className='cls-2'
                  ></path>
                  <polygon
                    points='117.16 19.85 117.15 19.85 117.15 19.85 117.16 19.85'
                    className='cls-2'
                  ></polygon>
                  <path
                    d='m144.22,15.95c-.72-.68-1.87-1.22-3.2-1.22-3.74,0-5.87,3.27-5.87,7.94,0,5.83,2.65,8.33,5.87,8.33,1.44,0,2.45-.62,3.2-1.3v.98h3.97V9l-3.97,2.05v4.91Zm0,3.99v5.88c-.57.78-1.21,1.31-2.44,1.31-1.55,0-2.59-1.34-2.59-4.55,0-2.62.83-3.99,2.36-3.99,1.15,0,2.07.48,2.68,1.34h0Z'
                    className='cls-2'
                  ></path>
                  <path
                    d='m158.15,14.73c-3.94,0-6.82,3.36-6.82,8.15s2.88,8.12,6.82,8.12,6.85-3.33,6.85-8.12-2.91-8.15-6.85-8.15Zm0,12.31c-1.9,0-2.79-1.75-2.79-4.16s.89-4.2,2.79-4.2,2.82,1.81,2.82,4.2c0,2.17-.92,4.16-2.82,4.16Z'
                    className='cls-2'
                  ></path>
                  <path
                    d='m126.09,14.75c-2.44,0-3.92.53-5.67,1.58l1.52,2.85c1.38-.78,2.33-1.04,4.14-1.04,1.44,0,2.16.89,2.16,1.99v.77c-.63-.33-1.52-.63-2.91-.63-3.43,0-6.13,1.72-6.13,5.17,0,3.78,2.82,5.56,5.64,5.56,1.41,0,2.68-.6,3.4-1.37v1.04h0s3.97.01,3.97.01v-10.47c0-3.51-2.48-5.47-6.13-5.47Zm2.15,11.35c-.43.74-1.47,1.43-2.77,1.43-1.7,0-2.3-.98-2.3-2.08,0-1.25.81-1.96,2.3-1.96,1.41,0,2.08.21,2.77.65v1.96Z'
                    className='cls-2'
                  ></path>
                  <path
                    d='m115.39,14.73c-1.41,0-2.41.63-3.11,1.37v-1.04h-3.97v15.61h3.97v-8.44c0-2.71,1.01-3.39,2.56-3.39.89,0,1.67.42,2.3,1.01l1.03-4.01c-.52-.57-1.5-1.1-2.79-1.1Z'
                    className='cls-2'
                  ></path>
                </g>
              </svg>
            </Link>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {/* =============== Mobile Currency menu =============== */}
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                        Currency
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='max-h-[300px] space-y-2 overflow-y-auto bg-gray-50'>
                        {[...GameCurrencyLists].map((game, index) => (
                          <Disclosure.Button
                            key={index}
                            as='a'
                            href={game.link}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-normal leading-7 text-gray-900 hover:bg-gray-50'
                          >
                            {game.title}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                {/* =============== Mobile Accounts menu =============== */}
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                        Accounts
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='max-h-[300px] space-y-2 overflow-y-auto bg-gray-50'>
                        {[...GameAccountsLists].map((game, index) => (
                          <Disclosure.Button
                            key={index}
                            as='a'
                            href={game.link}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-normal leading-7 text-gray-900 hover:bg-gray-50'
                          >
                            {game.title}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                {/* =============== Mobile Items menu =============== */}
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                        Items
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='max-h-[300px] space-y-2 overflow-y-auto bg-gray-50'>
                        {[...GameItemLists].map((game, index) => (
                          <Disclosure.Button
                            key={index}
                            as='a'
                            href={game.link}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-normal leading-7 text-gray-900 hover:bg-gray-50'
                          >
                            {game.title}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      {/* =============== End mobile navigation menu =============== */}
    </header>
  );
}
