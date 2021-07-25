import React, { FC } from 'react'
import { Icon } from '../Icon/Icon'
import { IconNames } from '../Icon/IconNames'



export const SocialIcons: FC = () => {
    const items = [IconNames.facebook, IconNames.linkedin, IconNames.twitter, IconNames.instagram, IconNames.youtube]

    return (
        <div  className=" inline-flex">
            {
                items.map(item => (
                    <div key={ item } className="mr-4">
                        <Icon name={ item }/>
                    </div>
                ))
            
            }
        </div>
    )
}
 
SocialIcons.displayName = 'SocialIcons'