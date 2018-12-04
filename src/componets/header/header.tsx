import * as React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

class Header extends React.Component{
    public render(){
        return (
            <div className="header">
                <div className="header-content">
                    <ul className="nav">
                        <Link to="/" className="nav-item">首页</Link>
                        <Link to="/articles" className="nav-item">文章</Link>
                        <Link to="/about" className="nav-item">关于</Link>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;