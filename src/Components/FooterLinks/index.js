import React from 'react'
import { Footer, HyperlinkButton } from 'storybook-project/dist'
import style from './index.css'

export default class FooterLinks extends React.Component
{
    render()
    {
        const footer = 
        (
            <Footer>
                <HyperlinkButton img="http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c53e.png" link="https://twitter.com/" linkTitle="Twitter"/>
                <HyperlinkButton img="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19759.png" link="https://facebook.com/" linkTitle="Facebook"/>
                <span className={style.footerText}>
                    Jurica Adamek - 2018
                </span>
            </Footer>
        )

        return footer
    }
}