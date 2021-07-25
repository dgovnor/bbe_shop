import React, { FC } from 'react'
import { ShopHeader } from './ShopHeader'
import { AppHeader } from './AppHeader'

export const Header: FC = () => {
  const { pathname } = window.location
  const match = pathname.includes('/shop')
  return (
    <>
      {match && <ShopHeader />}
      {!match && <AppHeader />}
    </>
  )
}

Header.displayName = 'Header'
