import { useLoaderData } from "react-router-dom";


const CategoryNews = () => {
    const data =useLoaderData();
    console.log(data.data);
    return (
        <div>
            <h2> {data.data.length} news...</h2>
        </div>
    );
};

export default CategoryNews;