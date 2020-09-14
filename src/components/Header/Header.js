import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import Search from '../Search/SearchContainer';
// import { HamburgerSqueeze } from 'react-animated-burgers';

class Header extends React.Component {
  state = {
    isActive: false,
  }

  toggleButton = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  }

  render() {
    return (
      <header className={ styles.component }>
        <Container>
          <div className={ styles.wrapper }>
            <Link to='/' className={ styles.logo }>
              <Icon exact to ='/' name='moon' />
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink>
              {/* <HamburgerSqueeze isActive={ this.state.isActive } toggleButton={ this.toggleButton } barColor='white' buttonWidth={ 20 } /> */}
            </nav>
            <Search />
          </div>
        </Container>
      </header>
    );
  }
}

export default Header;