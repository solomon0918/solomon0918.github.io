import React from 'react';

const Footer = () => {
  return (
    <footer className=" py-8">
      <div className="container mx-auto">
        <div className="text-center">
          <p className="text-white text-sm">© {new Date().getFullYear()} Erwin Mark Anora E-Portfolio</p>
        </div>
      </div>
    </footer>
  );
};
 
export default Footer;