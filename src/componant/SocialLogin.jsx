import { FaGoogle,FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
           <h2 className="font-bold">Login With</h2>

           <div className="*:w-full space-y-4">

            <button className="btn"><FaGoogle /> Login with google </button>
            <button className="btn"> <FaGithub /> Login with Github </button>
            
            </div>
        </div>
    );
};

export default SocialLogin;