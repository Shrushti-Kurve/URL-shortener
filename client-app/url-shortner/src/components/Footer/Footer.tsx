import * as React from 'react';

interface IFooterProps {
  title: string;
}

const Footer: React.FunctionComponent<IFooterProps> = () => {
  return (
    <div className='bg-slate-900 text-white text-base text-center py-5'>
        Copyright@ URLshortner 
    </div>
  );
};

export default Footer;
