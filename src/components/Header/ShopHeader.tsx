import React from 'react'
import { Icon } from '../Icon'
import { Link } from 'react-router-dom'
import { IconNames } from '../Icon/IconNames'

export const ShopHeader = () => {
  return (
    <header className=" flex boxShadow h-24 w-full">
      <Icon
        size="exception"
        className="ml-4 lg:ml-20"
        name={IconNames.shopLogo}
      />

      <div className="lg:pt-12 ml-80 lg:pb-9 lg:flex text-sm font-medium ">
        <p className=" text-flame capitalize">BBeShop</p>

        <Link to="/">
          <p className=" lg:ml-12" style={{ color: '#747272' }}>
            Our App
          </p>
        </Link>
      </div>
    </header>
  )
}

ShopHeader.displayName = 'ShopHeader'
