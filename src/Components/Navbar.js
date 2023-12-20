import React from 'react';

class Navbar extends React.Component {
  constructor(props){
    super(props);
}
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                APNA BAZAR {this.props.productList.length}
              </a>
            </div>
          </nav>
          
      );
    }
}
 
export default Navbar;