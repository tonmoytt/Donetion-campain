import { Link } from "react-router-dom";


 

const Jsondata = ({data}) => {
    
    const {id,pic,category_name,title,description,price,card_background_color,category_background_color,category_text_color,title_text_color}=data;
    return (
        <Link to={`/data/${id}`}>
        <div className="bg-red-500">
            <img src={pic} alt="" />
            <p>{category_name}</p>
            <p>{title}</p>
            <p>{description}</p>
            <p>{price}</p>
            <p>{card_background_color}</p>
            <p>{category_background_color}</p>
        </div>
        </Link>
    );
};

export default Jsondata;