import './footer.css';
function Footer({copyright, date}) {
    return ( 
        <footer>
            <div className="container">
                <div className="flex-footer">
                    <h4>{copyright}</h4>
                    <h4>{date}</h4>
                </div>
            </div>
        </footer>
     );
}

export default Footer;