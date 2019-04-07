import React, { Component} from 'react'
import Menu from '../Menu/Menu'
import Logo from '../UI/Logo/Logo'
import User from './User/User'
import MobileMenu from '../MobileMenu/MobileMenu'
import ToggleMenu from '../UI/ToggleMenu/ToggleMenu';


class Header extends Component {

state = {
	menu: false
}

toggleMenuHandler = () => {
	this.setState({
		menu: !this.state.menu
	})
}

menuCloseHandler = () => {
	this.setState({
		menu: false
	})
}
	render() {
		return (
			<header id="header">
				<div className="container">
					<div className="header">
						<Logo/>
						<Menu/>
						<User/>
						<MobileMenu
						isOpen={this.state.menu}
						onClose={this.menuCloseHandler}
						/>
						
						{!this.state.menu ? <ToggleMenu
	        			onToggle={this.toggleMenuHandler}
	        			/> : null}

					</div>
				</div>
			</header>
			
		)
	}
}

export default Header
