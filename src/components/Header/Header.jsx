import React from 'react'
import './Header.css'
import TeslaLogo from '../../assets/teslaLogoSmall.svg'

export default function Header() {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={TeslaLogo} alt="Tesla" />
            </div>

            <div className="header__center">
                <div>Model S</div>
                <div>Model 3</div>
                <div>Model X</div>
                <div>Model Y</div>
                <div>Solar Roof</div>
                <div>Solar Panel</div>
            </div>

            <div className="header__right">
                <div>Shop</div>
                <div>Tesla Account</div>
            </div>
            
        </div>
    )
}
