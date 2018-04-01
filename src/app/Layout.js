import React from 'react';
import PropTypes from 'prop-types';

const Layout = (props) => {
  return (
    <div>
      <div>Toolbar, etc</div>
      <main>{props.children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;