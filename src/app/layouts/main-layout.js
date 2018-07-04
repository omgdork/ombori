import React from 'react';

const MainLayout = (props) => (
  <div>
    <main>
      <div className="container">
        {props.children}
      </div>
    </main>
  </div>
);

export default MainLayout;
