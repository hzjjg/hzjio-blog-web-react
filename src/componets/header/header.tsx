import * as React from 'react';
import './header.scss';

class Header extends React.Component{
    public render(){
        return (
            <div className="header">
                <div className="header-content">
                    <ul className="nav">
                        <li className="nav-item">首页</li>
                        <li className="nav-item">文章</li>
                        <li className="nav-item">关于</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;