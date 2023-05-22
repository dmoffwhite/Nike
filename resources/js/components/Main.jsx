import Login from './Login';
import Menu from './Menu';
import {Routes, Route, Navigate} from 'react-router-dom';
import Register from './Register';
import Home from './Home';
import New from './New';
import CategoryMan from './CategoryMan';
import CategoryWomen from './CategoryWoman';
import CategoryChildren from './CategoryChildren';
import Cart from './Cart';


function Main() {
    return(
        <Routes>
            <Route path="/" element={<Menu />}>
                <Route path='login' element={<Login />}/>
                <Route path='register' element={<Register/>}/>
                <Route path='home' element={<Home/>}/>
                <Route path='new' element={<New/>}/>
                <Route path='men' element={<CategoryMan/>}/>
                <Route path='women' element={<CategoryWomen/>}/>
                <Route path='children' element={<CategoryChildren/>}/>
                <Route path='cart' element={<Cart/>}/>
                <Route path='*' element={<Navigate replace to="/" />} />
            </Route>
        </Routes>
    )
}

export default Main;