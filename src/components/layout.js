import React from "react";
import './layout.module.css';

const Layout = ({children}) => {
    return (
      <>
        <main>
          {children}
        </main>
      </>
    )

}

export default Layout