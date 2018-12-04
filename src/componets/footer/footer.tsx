import * as React from 'react';
import './footer.scss';

class Footer extends React.Component{
    public render(){
        return (
            <div className="footer">
                <div className="footer-content">
                    <a href="https://github.com/hzjjg/hzjio-blog-web-react" className="footer-link" >github</a>
                </div>
            </div>
        );
    }
}

export default Footer;