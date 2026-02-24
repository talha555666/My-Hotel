import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
import Footer from "../pages/Footer";




function Root() {
    return (
        <div style={{width:'1400px',margin:"auto",padding:'10px'}}>
            <Header></Header>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    ) 
}

export default Root;