import React, {Component} from 'react'
import logo from '../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
    this.handToggle = this.handToggle.bind(this)
  }
  //用来控制navbar的展开
  handToggle = () => {
    this.setState({isOpen: !this.state.isOpen})
  }
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <button type="button" className="nav-btn" onClick={this.handToggle}>
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}
          >
            <li>
              <Link to="/">主页</Link>
            </li>
            <li>
              <Link to="/rooms">房间</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
