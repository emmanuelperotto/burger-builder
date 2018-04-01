import React from 'react';
import PropTypes from 'prop-types';
import './Layout.css';

const Layout = (props) => {
  return (
    <div>
      <div>Toolbar, SideDrawer, BackDrop</div>
      <main className="Content">
        {props.children}
      </main>
    </div >
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;