import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import { Fragment, useEffect, useState } from 'react';
import { BiSearch, BiTimeFive } from 'react-icons/bi';
import { useParams } from 'react-router-dom';

import gameAccountsLists from '../../models/gameAccountsLists';
import gameAccountsTitles from '../../models/gameAccountsTitles';
import gameCurrencyLists from '../../models/gameCurrencyLists';
import gameCurrencyTitles from '../../models/gameCurrencyTitles';
import gameItemLists from '../../models/gameItemLists';
import gameItemTitles from '../../models/gameItemTitles';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const games = [
  {
    title: 'Game Title',
  },
];

const { gameId } = useParams();

type Item = {
  title: string;
  category: string;
  photo: {
    src: string;
    width: number;
    height: number;
  };
  price: string;
  unit: string;
  guaranteedTime: string;
};

const filterOptions = [
  {
    input: (
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button className='inline-flex w-[180px] justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
            Device
            <ChevronDownIcon
              className='-mr-1 h-5 w-5 text-gray-400'
              aria-hidden='true'
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='py-1'>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    PC
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Xbox One
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Playstation 4
                  </a>
                )}
              </Menu.Item>
              <form method='POST' action='#'>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type='submit'
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full px-4 py-2 text-left text-sm'
                      )}
                    >
                      Playstation 5
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href='#'
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Xbox Series X/S
                    </a>
                  )}
                </Menu.Item>
              </form>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    ),
  },
  {
    input: (
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button className='inline-flex w-[180px] justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
            Price
            <ChevronDownIcon
              className='-mr-1 h-5 w-5 text-gray-400'
              aria-hidden='true'
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='py-1'>
              <div className='flex px-4 py-2'>
                <input
                  type='text'
                  placeholder='From'
                  className='mr-2 w-1/2 rounded border-gray-300 px-2 py-1 text-sm shadow-sm'
                />
                <input
                  type='text'
                  placeholder='To'
                  className='mr-2 w-1/2 rounded border-gray-300 px-2 py-1 text-sm shadow-sm'
                />
                <button className='rounded bg-yellow-300 px-4 py-2 text-center text-sm hover:bg-yellow-400'>
                  <BiSearch />
                </button>
              </div>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    $0 - $50
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    $50 - $150
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    $150 - $300
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    $300+
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    ),
  },
  {
    input: (
      <Menu as='div' className='relative inline-block text-left'>
        <div>
          <Menu.Button className='inline-flex w-[200px] justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
            Select Delivery Time
            <ChevronDownIcon
              className='-mr-1 h-5 w-5 text-gray-400'
              aria-hidden='true'
            />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 z-10 mt-2 h-[330px] w-56 origin-top-right overflow-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='py-1'>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Instant
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    5 min
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    20 min
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    1 h
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    5 h
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    12 h
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    1 day
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    2 days
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    3 days
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    7 days
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    14 days
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    28 days
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    45 days
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    60 days
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    ),
  },
];

const Shop = () => {
  const [game, setGame] = useState(null);
  const [items, setItems] = useState<Item[]>([
    {
      title: 'US East - Azena',
      category:
        '🔥【XBOX ONE】✔️ 16 Trillion Pure Cash ✔️ 7900+ Level ✔️ Max S...',
      photo: {
        src: 'https://assetsdelivery.eldorado.gg/v7/_assets_/items/v6/50/Lost-Ark-currency.jpg',
        width: 58,
        height: 58,
      },
      price: '0.444',
      unit: 'k',
      guaranteedTime: '20',
    },
    {
      title: 'US East - Azena',
      category:
        '🔥【XBOX ONE】✔️ 16 Trillion Pure Cash ✔️ 7900+ Level ✔️ Max S...',
      photo: {
        src: 'https://assetsdelivery.eldorado.gg/v7/_assets_/items/v6/50/Lost-Ark-currency.jpg',
        width: 58,
        height: 58,
      },
      price: '0.444',
      unit: 'k',
      guaranteedTime: '20',
    },
    {
      title: 'US East - Azena',
      category:
        '🔥【XBOX ONE】✔️ 16 Trillion Pure Cash ✔️ 7900+ Level ✔️ Max S...',
      photo: {
        src: 'https://assetsdelivery.eldorado.gg/v7/_assets_/items/v6/50/Lost-Ark-currency.jpg',
        width: 58,
        height: 58,
      },
      price: '0.444',
      unit: 'k',
      guaranteedTime: '20',
    },
    {
      title: 'US East - Azena',
      category:
        '🔥【XBOX ONE】✔️ 16 Trillion Pure Cash ✔️ 7900+ Level ✔️ Max S...',
      photo: {
        src: 'https://assetsdelivery.eldorado.gg/v7/_assets_/items/v6/50/Lost-Ark-currency.jpg',
        width: 58,
        height: 58,
      },
      price: '0.444',
      unit: 'k',
      guaranteedTime: '20',
    },
    {
      title: 'US East - Azena',
      category:
        '🔥【XBOX ONE】✔️ 16 Trillion Pure Cash ✔️ 7900+ Level ✔️ Max S...',
      photo: {
        src: 'https://assetsdelivery.eldorado.gg/v7/_assets_/items/v6/50/Lost-Ark-currency.jpg',
        width: 58,
        height: 58,
      },
      price: '0.444',
      unit: 'k',
      guaranteedTime: '20',
    },
    {
      title: 'US East - Azena',
      category:
        '🔥【XBOX ONE】✔️ 16 Trillion Pure Cash ✔️ 7900+ Level ✔️ Max S...',
      photo: {
        src: 'https://assetsdelivery.eldorado.gg/v7/_assets_/items/v6/50/Lost-Ark-currency.jpg',
        width: 58,
        height: 58,
      },
      price: '0.444',
      unit: 'k',
      guaranteedTime: '20',
    },
    {
      title: 'US East - Azena',
      category:
        '🔥【XBOX ONE】✔️ 16 Trillion Pure Cash ✔️ 7900+ Level ✔️ Max S...',
      photo: {
        src: 'https://assetsdelivery.eldorado.gg/v7/_assets_/items/v6/50/Lost-Ark-currency.jpg',
        width: 58,
        height: 58,
      },
      price: '0.444',
      unit: 'k',
      guaranteedTime: '20',
    },
    {
      title: 'US East - Azena',
      category:
        '🔥【XBOX ONE】✔️ 16 Trillion Pure Cash ✔️ 7900+ Level ✔️ Max S...',
      photo: {
        src: 'https://assetsdelivery.eldorado.gg/v7/_assets_/items/v6/50/Lost-Ark-currency.jpg',
        width: 58,
        height: 58,
      },
      price: '0.444',
      unit: 'k',
      guaranteedTime: '20',
    },
    {
      title: 'US East - Azena',
      category:
        '🔥【XBOX ONE】✔️ 16 Trillion Pure Cash ✔️ 7900+ Level ✔️ Max S...',
      photo: {
        src: 'https://assetsdelivery.eldorado.gg/v7/_assets_/items/v6/50/Lost-Ark-currency.jpg',
        width: 58,
        height: 58,
      },
      price: '0.444',
      unit: 'k',
      guaranteedTime: '20',
    },
    {
      title: 'US East - Azena',
      category:
        '🔥【XBOX ONE】✔️ 16 Trillion Pure Cash ✔️ 7900+ Level ✔️ Max S...',
      photo: {
        src: 'https://assetsdelivery.eldorado.gg/v7/_assets_/items/v6/50/Lost-Ark-currency.jpg',
        width: 58,
        height: 58,
      },
      price: '0.444',
      unit: 'k',
      guaranteedTime: '20',
    },
    {
      title: 'US East - Azena',
      category:
        '🔥【XBOX ONE】✔️ 16 Trillion Pure Cash ✔️ 7900+ Level ✔️ Max S...',
      photo: {
        src: 'https://assetsdelivery.eldorado.gg/v7/_assets_/items/v6/50/Lost-Ark-currency.jpg',
        width: 58,
        height: 58,
      },
      price: '0.444',
      unit: 'k',
      guaranteedTime: '20',
    },
    {
      title: 'US East - Azena',
      category:
        '🔥【XBOX ONE】✔️ 16 Trillion Pure Cash ✔️ 7900+ Level ✔️ Max S...',
      photo: {
        src: 'https://assetsdelivery.eldorado.gg/v7/_assets_/items/v6/50/Lost-Ark-currency.jpg',
        width: 58,
        height: 58,
      },
      price: '0.444',
      unit: 'k',
      guaranteedTime: '20',
    },
  ]);

  useEffect(() => {
    // Fetch game details
    fetch(`../../gameAccountsLists/${gameId}.ts`)
      .then((res) => res.json())
      .then((data) => setGame(data));

    // Fetch items for this game
    fetch(`../../gameItemLists/${gameId}.ts`)
      .then((res) => res.json())
      .then((data) => setItems(data));

    // Similarly, fetch other required data...
  }, [gameId]);

  if (!game || items.length === 0) return <div>Loading...</div>;

  return (
    <div className='mt-24 flex justify-center'>
      <div className='mx-20 h-[100px] w-full max-w-7xl'>
        <div className='my-4 flex items-center gap-4'>
          <Image
            src='https://assetsdelivery.eldorado.gg/v7/_assets_/icons/v13/lost-ark.png?w=28&h=28&q=40'
            width='28'
            height='28'
            alt={games[0].title}
            className=''
          />
          <h1 className='text-2xl font-semibold'>{games[0].title}</h1>{' '}
          <span className='ml-auto text-sm'>{items.length} listings found</span>
        </div>
        <div className='my-4 flex w-full gap-4'>
          <form>
            <div className='relative w-[300px]'>
              <input
                type='search'
                id='default-search'
                className='block h-[40px] w-full rounded-md border border-gray-300 bg-white p-4 text-sm text-gray-900 focus:border-yellow-500 focus:ring-yellow-500'
                placeholder='Search Listings'
                required
              />
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
                <svg
                  aria-hidden='true'
                  className='h-5 w-5 text-gray-500 dark:text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  ></path>
                </svg>
              </div>
            </div>
          </form>

          <div className='flex items-center gap-4'>
            {filterOptions.map((option, index) => (
              <div key={index}>{option.input}</div>
            ))}
            <p className='text-gray-500'>Clear filters</p>
          </div>
        </div>
        <div>
          <div className='grid gap-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3'>
            {items.map((item, index) => (
              <div
                key={index}
                className='group w-full rounded-lg border-0 bg-gray-50 p-4 transition-all hover:bg-gray-100 hover:transition-all'
              >
                <div className='mb-3 w-full rounded-md border-b-[0px] border-b-slate-200 bg-gray-300/20 px-1 py-1 transition-all hover:transition-all group-hover:bg-gray-200'>
                  <p className='font-semibold'>{item.title}</p>
                </div>
                <div className='mb-8 flex w-full justify-between'>
                  <p>{item.category}</p>
                  <Image
                    className='rounded-md'
                    src={item.photo}
                    alt={item.title}
                  />
                </div>
                <div className='flex w-full items-center justify-between'>
                  <p className='rounded-md bg-gray-300/20 px-2 py-1 transition-all hover:transition-all group-hover:bg-gray-200'>
                    <span className='text-sm text-green-600'>$</span>
                    {item.price}
                    <span className='text-sm text-gray-400'>/{item.unit}</span>
                  </p>
                  <p className='flex items-center gap-1 rounded-md bg-gray-300/20 px-2 py-1 transition-all hover:transition-all group-hover:bg-gray-200'>
                    <BiTimeFive className='text-sm' />
                    {item.guaranteedTime} min
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className='flex items-center justify-between bg-white py-10'>
            <div className='flex flex-1 justify-between sm:hidden'>
              <a
                href='#'
                className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
              >
                Previous
              </a>
              <a
                href='#'
                className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
              >
                Next
              </a>
            </div>
            <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
              <div>
                <p className='self-end text-sm text-gray-700'>
                  Showing <span className='font-medium'>1</span> to{' '}
                  <span className='font-medium'>12</span> of{' '}
                  <span className='font-medium'>{items.length}</span> results
                </p>
              </div>
              <div>
                <nav
                  className='isolate inline-flex -space-x-px rounded-md shadow-sm'
                  aria-label='Pagination'
                >
                  <a
                    href='#'
                    className='relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                  >
                    <span className='sr-only'>Previous</span>
                    <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
                  </a>
                  {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                  <a
                    href='#'
                    aria-current='page'
                    className='relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    1
                  </a>
                  <a
                    href='#'
                    className='relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                  >
                    2
                  </a>
                  <a
                    href='#'
                    className='relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex'
                  >
                    3
                  </a>
                  <span className='relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0'>
                    ...
                  </span>
                  <a
                    href='#'
                    className='relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex'
                  >
                    8
                  </a>
                  <a
                    href='#'
                    className='relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                  >
                    9
                  </a>
                  <a
                    href='#'
                    className='relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                  >
                    10
                  </a>
                  <a
                    href='#'
                    className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                  >
                    <span className='sr-only'>Next</span>
                    <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='flex flex-col gap-3 py-20 lg:p-10'>
          <h2>Lost Ark Gold</h2>
          <p>
            Lost Ark Gold is the main currency of the MMOARPG video game Lost
            Ark. Lost Ark Gold can be gained and acquired through battling
            bosses, discovering islands, doing quests, participating in PVP
            matches and much more enjoyable content that you can experience.
            Lost Ark Gold is playing a major role in letting you progress
            through the game, it's not easy to get it, since that requires a lot
            of time and patience to get a comfortable amount of Lost Ark Gold
            for you to progress which for most players can be frustrating to
            commit to. This is where Eldorado.gg comes into play, a safe and
            reliable Lost Ark RMT platform where you can buy cheap Lost Ark gold
            and save tons of time no matter whether you need Lost Ark Gold on
            Valtan, Azena or any other server. Using Eldorado Lost Ark gold
            shop, you can purchase in-game goods and services which will help
            you accelerate your upgrades and get to the level that you want way
            quicker and if it's not fast enough, you can always order Lost Ark
            Power Leveling services as well.
          </p>

          <h2>Buy Lost Ark Gold</h2>
          <p>
            You can buy Lost Ark Gold safely from other players just like you on
            Eldorado. Whether you are looking for the cheapest Lost Ark Gold or
            quickest deliveries, discounts for bulk purchases and even bonuses
            if you're a returning customer, you will always find something just
            for you on this Lost Ark gold shop. The smoothest experience of
            buying Lost Ark Gold can only be found on Eldorado, due to
            particular attention being given to making sure Lost Ark Gold prices
            are always best in the market, website is fast and responsive,
            delivery is as quick as it can be and only done by trusted Lost Ark
            gold sellers which have passed all our safety checks.
          </p>

          <h2>How to buy Lost Ark Gold</h2>
          <p>
            Buying Lost Ark Gold fast and safely has never been easier, just
            follow these steps to make your Lost Ark experience a resounding
            success:
          </p>
          <ol className='ml-6'>
            <li>
              1. Look through Lost Ark Gold offers and pick the one that you are
              interested in.
            </li>
            <li>2. Choose your desired Lost Ark Gold amount</li>
            <li>
              3. Click "Buy Now" and make the payment through your favorite
              payment method
            </li>
            <li>
              4. Once the payment is registered, the chat box will appear where
              you can talk with the seller
            </li>
            <li>
              5. Seller will guide you on how you can receive Lost Ark Gold.
              Follow the instructions and you will be getting your Lost Ark Gold
              in no time.
            </li>
            <li>
              6. Once Lost Ark Gold is received, we ask to mark the order as
              "Received" and leave appropriate feedback (it is optional but much
              appreciated).
            </li>
          </ol>

          <p>
            That is it! Now you have your Lost Ark Gold and you can continue
            playing the game the way you like.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Shop;
