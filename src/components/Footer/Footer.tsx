import React from 'react'
import { Icon } from '../Icon/Icon'
import { IconNames } from '../Icon/IconNames'
import { SocialIcons, SocialMedia } from '../SocialMedia'


export const Footer = () => {

    return (
        <div>
            <div>
          <h4 className="mt-52 mb-8 text-lg font-medium">Coming Soon On:</h4>
          <SocialMedia/>
        </div>
        <div className="flex mt-14">
          <div className="flex-grow">
          <Icon size="xxxl" name={IconNames.logo} />
          </div>
          <p className="font-medium text-lg mt-4">Lawrence Price & Company</p>
        </div>
        <div className="text-left mt-6">
          <h4>Coming Soon On:</h4>
          <div className="flex mt-6">
            <div className="flex-grow">
              <SocialMedia dark/>
            </div>
            <div className="-mt-2">
              <h4 className="text-lg font-medium capitalize mb-3">Follow us on social media</h4>
              <SocialIcons/>
            </div>
          </div>
        </div>
        <div className="transform mt-14 mb-4" style={{ borderBottom: '0.5px solid #000000' }} />
        <div className="flex text-left mb-8">
          <h4 className="flex-grow">Copyright © 2021 BBe App. All rights reserved.</h4>
          <h6>🇳🇬 Nigeria</h6>
        </div>
        </div>
    )
}
 Footer.displayName = 'Footer'