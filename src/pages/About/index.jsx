import React from 'react';
import { Header, MainContent, Navigation } from 'storybook-project/dist';
import FooterLinks from '../../Components/FooterLinks'

export default class About extends React.Component
{
    render()
    {
        return (
            <div>
                <Header title="About"/>
                <Navigation
                    links =
                    {
                        [
                            {
                                link: "Cart",
                                title: "My Cart"
                            },
                            {
                                link: "/",
                                title: "Main"
                            },
                        ]
                    }
                />
                <MainContent>
                    <h1>
                        NKS Project - Duff beers
                    </h1>
                    <p>
                        Made with React and Redux!
                    </p>
                </MainContent>
                <FooterLinks/>
            </div>
        )
    }
}