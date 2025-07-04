import * as React from 'react';

interface IHeaderProps {
  title: string;
}

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return(
  <div className='bg-slate-900'>
    <div className='container p-2 mx-auto'>
      <nav className='py-5'>
        <div className='text-base text-white'>URL shortner</div>
      </nav>
    </div>
  </div>
);

};

export default Header;
