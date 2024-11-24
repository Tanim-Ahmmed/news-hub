import { list } from "postcss";
import { useLoaderData } from "react-router-dom";
import NewsCart from "../componant/NewsCart";


const CategoryNews = () => {
    const {data : news} =useLoaderData();
    console.log(news);
    return (
        <div>
            <h2 className="font-bold">News Home</h2>
            <h2> {news.length} news...</h2>

            <div>
                {
                    news.map(singleNews => ( <NewsCart key={singleNews._id} news={singleNews}></NewsCart> ))
                }
            </div>
        </div>
    );
};

export default CategoryNews;