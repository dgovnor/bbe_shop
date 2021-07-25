import React, { FC, useEffect, useState } from 'react'
import { Icon } from '../Icon'
import { IconNames } from '../Icon/IconNames'

export const Menu: FC = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    if (openMenu) document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [openMenu])

  return (
    <div className=" relative">
      <button
        id="buttonType"
        type="button"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <Icon
          size="m"
          className="lg:mr-28 lg:ml-7 mr-4 lg:-mt-2"
          name={IconNames.verified}
        />
      </button>

      {openMenu && (
        <div className="over">
          <div
            className="flex flex-col absolute rounded-2xl boxShadow bg-white"
            style={{ width: '37.125rem', top: '6.2rem', right: '108px' }}
          >
            <button
              onClick={() => setOpenMenu(false)}
              className="flex ml-auto text-grey pt-2 pr-3"
            >
              <Icon name={IconNames.close} />
            </button>
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

Menu.displayName = 'Menu'
