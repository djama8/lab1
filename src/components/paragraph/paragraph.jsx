import './paragraph.css'
function Paragraph({par}) {
    return ( 
        <div className="par">
        <div className="conrainer">
            <h4>
               {par} 
            </h4>
        </div>
        </div>
     );
}

export default Paragraph;