import  React , {useSelector , useDispatch} from 'react-redux'
import { SOAP_BUY , SOAP_SELL } from './reducer/shopreducer/action';

const Home = () => {

    const soap =  useSelector(state => state.soap)
                const dispatch = useDispatch(); 
    
                const sellHandler = () => {
        dispatch({type : SOAP_SELL})
    }

    const buyHandler = () => {
            dispatch({type : SOAP_BUY , payload : 10})
    }

    return (
        <>
        <div> {soap}</div>
        <div>
            <button onClick={sellHandler}>Sell</button>
            <button onClick={buyHandler}>Buy</button>
        </div> 
             
        </>
    )
}

export default Home
