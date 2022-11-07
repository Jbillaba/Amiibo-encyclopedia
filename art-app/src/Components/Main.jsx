import { Route, Routes} from 'react-router-dom'
import Home from './Home'
import Amiibo from './Amiibo'
// TO DO: -add about page 
export default function Main() {
    return (
        <div className='main'> 
            <Routes>
                <Route  exact path='/' element={<Home />}/>
                <Route exact path='/amiibo' element={<Amiibo />} />
            </Routes>
        </div>
    )
}