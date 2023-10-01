import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, FingerPrintIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

import { navigation, userNavigation } from 'configs/header-nav-links'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Nav() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <Logo />
                <NavLinks />
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <NotificationsDropdown />
                  <ProfileDropdown />
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <MobileMenuButton open={open} />
              </div>
            </div>
          </div>

          <MobileMenu />
        </>
      )}
    </Disclosure>
  )
}

export default Nav

function MobileMenu() {
  return (
    <Disclosure.Panel className="md:hidden">
      <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
        {navigation.map(item => (
          <Disclosure.Button
            key={item.name}
            as={NavLink}
            path={item.path}
            className={({ isActive }) =>
              classNames(
                isActive
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )
            }
          >
            {item.name}
          </Disclosure.Button>
        ))}
      </div>
      <div className="border-t border-gray-700 pb-3 pt-4">
        <div className="flex items-center px-5">
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
          </div>
          <div className="ml-3">
            <div className="text-base font-medium leading-none text-white">{user.name}</div>
            <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
          </div>
          <button
            type="button"
            className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-3 space-y-1 px-2">
          {userNavigation.map(item => (
            <Disclosure.Button
              key={item.name}
              as={NavLink}
              path={item.path}
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
              end={item.path === '/'}
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
      </div>
    </Disclosure.Panel>
  )
}

function NavLinks() {
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">
        {navigation.map(item => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              classNames(
                isActive
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'rounded-md px-3 py-2 text-sm font-medium'
              )
            }
            end={item.path === '/'}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

function NotificationsDropdown() {
  return (
    <button
      type="button"
      className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      <span className="absolute -inset-1.5" />
      <span className="sr-only">View notifications</span>
      <BellIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  )
}

function Logo() {
  return (
    <div className="flex-shrink-0">
      <FingerPrintIcon className="h-8 w-8 text-indigo-100" aria-hidden="true" />
    </div>
  )
}

function MobileMenuButton(open) {
  return (
    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
      <span className="absolute -inset-0.5" />
      <span className="sr-only">Open main menu</span>
      {open ? (
        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
      )}
    </Disclosure.Button>
  )
}

function ProfileDropdown() {
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {userNavigation.map(item => (
            <Menu.Item key={item.name}>
              {active => (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    classNames(
                      isActive ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                    )
                  }
                >
                  {item.name}
                </NavLink>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
