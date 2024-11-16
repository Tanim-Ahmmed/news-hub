import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-2">
          <p className="bg-purple-500 p-3 ">lateest</p>
          <Marquee pauseOnHover={true} speed={100} className="space-x-20 bg-base-200 ">
          <Link to="/news" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, mollitia.</Link>

          <Link to="/news" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, molli.</Link>


          <Link to="/news" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, llitia.</Link>
          </Marquee>
        </div>
    );
};

export default LatestNews;