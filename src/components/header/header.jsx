import './header.css';
function Header({img, text}) {
    return ( 
        
        <header>
            <div className="container">
                <div className="header-flex">
            <img src={img} alt="1" />
            <h2>{text}</h2>
                </div>
            </div>
        </header>
        
     );
}

export default Header;