import React from 'react';

import './Header.styled.scss';
import './Mobile.js';

// import vectorLogo from 'svg/Logo.svg';

// export default function Header() {
//   return (
//     <header>
//       <nav>
//         <a href="/">
//           <img src={vectorLogo} alt="alt-text" width="300" height="45" />
//         </a>
//         <ul>
//           <li>
//             <a href="/">Про мене</a>
//           </li>
//           <li>
//             <a href="/">Галерея</a>
//           </li>
//           <li>
//             <a href="/">Послуги</a>
//           </li>
//           <li>
//             <a href="/">Контакти</a>
//           </li>
//         </ul>
//         <a href="tel:+380973901222">+380973901222</a>
//       </nav>
//     </header>
//   );
// }

// -----------------------------------------------------------------------

export default function Header() {
  return (
    <header className="page-header">
      <div className="container">
        <button
          className="menu-toggle js-open-menu"
          aria-expanded="false"
          aria-controls="mobile-menu"
        >
          <svg
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        <ul className="menu">
          <li>
            <a href="" className="link">
              About
            </a>
          </li>
          <li>
            <a href="" className="link">
              Products
            </a>
          </li>
          <li>
            <a href="" className="link">
              Contacts
            </a>
          </li>
          <li>
            <a href="" className="link">
              Career
            </a>
          </li>
        </ul>
      </div>

      <div className="menu-container js-menu-container" id="mobile-menu">
        <button className="menu-toggle js-close-menu">
          <svg
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        <ul className="mobile-menu">
          <li>
            <a href="" className="link">
              About
            </a>
          </li>
          <li>
            <a href="" className="link">
              Products
            </a>
          </li>
          <li>
            <a href="" className="link">
              Contacts
            </a>
          </li>
          <li>
            <a href="" className="link">
              Career
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
