import { Route, Routes} from 'react-router-dom'
import Home from './Home'
// TO DO: -add about page 
export default function Main() {
    return (
        <div className='main'> 
            <Routes>
                <Route  exact path='/' element={<Home />}/>
            </Routes>
        </div>
    )
}