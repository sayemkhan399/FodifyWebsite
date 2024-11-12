import PropTypes from 'prop-types';
import { FaPlus } from "react-icons/fa6";
const Card = ({card}) => {
    const{food_name, food_photo, price, title}=card;
    return (
        <div className="border rounded-lg drop-shadow-xl bg-white">
            <img className='w-full mb-2 rounded-lg h-3/5' src={food_photo} alt={`Cover picture of the title ${title}`}/>
            <div className="flex flex-col gap-3 m-4">
                <h1 className="font-bold">{food_name}</h1>
                <p className="font-thin">{title}</p>
                <div className="flex justify-between items-center ">
                    <p className="text-red-600">{price}</p>
                    <FaPlus className="rounded-full bg-red-600 text-white"/>
                </div>
            </div>
            
        </div>
    );
};
Card.propTypes ={
    card: PropTypes.object.isRequired
}

export default Card;