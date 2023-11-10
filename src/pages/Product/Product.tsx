import Single from '../../components/Single/Single';
import { singleProduct } from '../../data';
import './style.scss';

const Product = () => {

    //fetch data then send it to single comp

    return (
        <div className="product">
            <Single {...singleProduct} />
        </div>
    )
}

export default Product