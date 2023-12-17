import React from 'react';

export default function Navbar() {
    return <nav className='navbar'>
        <a href='http://localhost:8080/' className={`${window.location.pathname === '/'? 'active-nav': ''}`}>Home</a>
        <a href='http://localhost:8080/pokemons' className={`${window.location.pathname === '/pokemons'? 'active-nav': ''}`}>Pokemons</a>
    </nav>
}