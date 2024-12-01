import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <header>
  <a href className="logo">Tui L<span>a Dev</span></a>
  <div id="menu" className="fas fa-bars" />
  <nav className="navbar">
    <Link to="/">home</Link>
    <Link to="/course">course</Link>
    <a href="/teacher">teacher</a>
    <a href="/price">price</a>
    <a href="/contact">contact</a>
  </nav>
</header>

  )
}
