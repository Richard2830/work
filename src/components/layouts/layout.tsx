import { getLayoutOrPageModule } from 'next/dist/server/lib/app-dir-module';
import { Fragment, ReactNode, useEffect } from 'react';
import Header from './header';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <Fragment>
            <Header></Header>
            <div>
                <Fragment>{children}</Fragment>
            </div>
        </Fragment>
    )
}

export default Layout;