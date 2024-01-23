import { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import './Header.css';


const Header = () => {
  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [visible, setVisible] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.pageYOffset;

  //     setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);

  //     setPrevScrollPos(currentScrollPos);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [prevScrollPos]);
  return (
    <div className='nav_bar'>
      <nav className="navbar navbar-expand-lg ">
        {/* <!-- Navbar content --> */}
            <a href="#" className="navbar-brand">
              <img src={logo} alt="Fix Health" className="header_image" />
            </a>
      </nav>
      <nav className='nav_bar_primary'>
        <a href="#" className="badge badge-dark nav_bar_links" >Home</a>
        <a href="#" className="badge badge-dark nav_bar_links">Services</a>
        <a href="#" className="badge badge-dark nav_bar_links">Blogs</a>
        <a href="#" className="badge badge-dark nav_bar_links">About</a>
        <a href="#"><button className='btn btn-info'>Book Now</button></a>
      </nav>
    </div>
  )
}

export default Header