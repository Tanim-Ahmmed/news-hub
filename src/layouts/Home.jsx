import { Outlet } from "react-router-dom";
import Header from "../componant/Header";
import LatestNews from "../componant/LatestNews";
import LeftNav from "../componant/layout-componant/LeftNav";
import RightNav from "../componant/layout-componant/RightNav";
import Navbar from "../componant/Navbar";


const Home = () => {
    return (
        <div className="font-poppins">
             <Header></Header>
             <section className="w-11/12 mx-auto border border-red-400">
                <LatestNews></LatestNews>
             </section>
            <nav className="border"> <Navbar></Navbar> </nav>
            <main className="grid grid-cols-12 gap-3">



              <div className="col-span-3 border border-lime-500"><LeftNav></LeftNav></div>
              <div className="col-span-6 border border-orange-500"><Outlet></Outlet></div>
              <div className="col-span-3 border border-blue-700"><RightNav></RightNav></div>


            </main>
            
        </div>
    );
};

export default Home;