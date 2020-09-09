import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import './index.scss';

const Header = ({ history, currentUser }) => {
  return (
    <header className="header">
      <Logo 
        className="header__logo" 
        onClick={ ()=> history.push('/') }
      />
      <ul>
        <li>
          <Link to='/shop'>SHOP</Link>
        </li>
        <li>
          <Link to='/contact'>CONTACT</Link>
        </li>
        <li>
          { currentUser 
            ? <div onClick={ () => auth.signOut() }>SIGN OUT</div>
            : <Link to='/signin'>SIGN IN</Link>
          }  
        </li>
      </ul>
    </header>
  );
}

export default withRouter(Header);