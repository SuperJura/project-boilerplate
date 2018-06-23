import React from 'react';
import { Header, MainContent, Footer, Navigation } from 'storybook-project/dist';

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
                <Footer>
                    Jurica Adamek 2018
                </Footer>
            </div>
        )
    }
}