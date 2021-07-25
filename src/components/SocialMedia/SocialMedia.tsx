import React, { FC } from 'react'
import { Icon } from '../Icon/Icon'
import { IconNames } from '../Icon/IconNames'


interface MediaProps {
    name: IconNames
    title: string
    subTitle: string
    dark?: boolean
}

interface SocialProps {
    dark?: boolean
 }

const MediaContainer: FC<MediaProps> = ({ name, title, subTitle, dark }) => {
    return (
        <div className="border px-4 mr-4 flex rounded-md" style={{height: '53px', color: dark ? '#000000' : '#747272'}}>
            <Icon size='m' name={name} />
            <div className=" my-3">
                <div className=" text-xs uppercase font-10 ml-1">{ subTitle }</div>
                <div className=" text-lg capitalize font-medium -mt-2">{ title }</div>
            </div>
        </div>
    )
 }

export const SocialMedia: FC<SocialProps> = ({ dark }) => {
    const items = [
        {
            iconName: IconNames.google,
            title: 'Google Play',
            subTitle: 'Get it on'
        },
        {
            iconName: IconNames.apple,
            title: 'App Store',
            subTitle: 'Download on the'
        },
        {
            iconName: IconNames.web,
            title: 'Use Web',
            subTitle: 'BlackBox on web'
        },
    ]

    return (
        <div  className=" inline-flex">
            {
                items.map(item => (
                    <MediaContainer key={ item.iconName } dark={ dark } name={item.iconName} title={item.title} subTitle={ item.subTitle }/>

                ))
            
            }
        </div>
    )
}
 
SocialMedia.displayName = 'SocialMedia'