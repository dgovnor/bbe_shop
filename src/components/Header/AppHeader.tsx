import React from 'react'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { IconNames } from '../Icon/IconNames'
import { Link } from 'react-router-dom'
import { Input } from '../Input'
import { Menu } from '../Menu'

export const AppHeader = () => {
  return (
    <header className=" flex boxShadow h-24 w-full justify-between">
      <Icon size="exception" className="ml-4 lg:ml-20" name={IconNames.logo} />
      <div className="lg:pt-12 pt-4 lg:pb-9 lg:flex text-sm font-medium ">
        <Link to="/shop">
          <p className=" text-flame capitalize">BBe</p>
        </Link>
        <p className=" lg:ml-12" style={{ color: '#747272' }}>
          Join Waitlist
        </p>
      </div>
      <div className="lg:pt-12 lg:pb-9 pt-8 flex h-full">
        <code className=" text-seaGreen code uppercase text-xs lg:text-sm">
          verified Access
        </code>

        <Menu>
          <div className="py-5 px-11">
            <div className="flex text-left">
              <h1 className="text-4xl font-medium capitalize flex-grow">
                Private Access
              </h1>
              <code className="text-seaGreen uppercase mt-4 text-sm">
                Verified Access ✔{' '}
              </code>
            </div>
            <div className=" mt-14">
              <Input placeholder="Username" />
            </div>
            <div className="mt-6 ">
              <Input placeholder="Password" />
            </div>
            <div className="mt-6 w-full" style={{ width: '167px' }}>
              <Button bgColor="#FF0000" name="Access" />
            </div>
            <p
              className="font-6 text-grey uppercase mt-10 mb-4 text-justify"
              style={{ width: '31.563rem' }}
            >
              Verified Access: Only Verified User is allowed to access Blackbox
              Website via this login. User profiles are created based on unique
              request. NOTE: Your Access to the Blackbox website might and can
              be limited at any point in time.
            </p>
          </div>
        </Menu>
      </div>
    </header>
  )
}

AppHeader.displayName = 'AppHeader'
