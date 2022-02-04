import React, { ReactNode } from 'react';

interface layoutpPropTypes {
  children: React.ReactNode;
}

const Layout = ({ children }: layoutpPropTypes) => {
  return (
    <div className="min-h-screen bg-background bg-cover bg-no-repeat">
      {children}
    </div>
  );
};

export default Layout;
