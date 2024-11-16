import moment from "moment";

const Header = () => {
    return (
        <div className="w-[80%] mx-auto border-black border" >
            <p className="text-6xl ">Header</p>
            <p>{
                moment().format('dddd MMMM Do YYYY')
                }</p>
        </div>
    );
};

export default Header;