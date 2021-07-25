import React, { FC, useEffect } from 'react'

export const Modal: FC = ({ children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])
  return (
    <div className="over flex justify-center content-center">
      <div
        className="bg-white mt-10"
        style={{ height: '757px', borderRadius: '20px' }}
      >
        {children}
      </div>
    </div>
  )
}
Modal.displayName = 'Modal'
