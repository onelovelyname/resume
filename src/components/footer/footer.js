import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {
              this.props.socialLinks && this.props.socialLinks.map((item)=>{
                return(
                  <li>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          <ul className="copyright">
            
            
          </ul>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    );
  }
}
