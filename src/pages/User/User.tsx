import Single from '../../components/Single/Single';
import { singleUser } from '../../data';
import './style.scss';

const User = () => {

    //fetch data then send it to single comp

    return (
        <div className="user">
            <Single {...singleUser} />
        </div>
    )
}

export default User