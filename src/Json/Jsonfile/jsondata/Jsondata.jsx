/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";



const Jsondata = ({data}) => {
    
    const {id,pic,category_name,title,description,price,card_background_color,category_background_color,category_text_color,title_text_color}=data;
    
 const bgColor={backgroundColor:card_background_color}
 const bgTitle={title:title_text_color}
//  console.log(bgColor);
 
    return (
        
        <div style={bgColor}>
        <Link to={`/data/${id}`}>
        <div >
            <img src={pic} alt="" />
            <p className="text-2xl">{category_name}</p>
            <p style={bgTitle} className="text-lg">{title}</p>
            <p>{description}</p>
            <p>{price}</p>
            
        </div>
        </Link>
        </div>
    );
};

export default Jsondata;