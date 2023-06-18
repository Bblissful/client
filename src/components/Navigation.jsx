 import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

 const Navigation = () => {
  return (
    <div className="h-0 w-full flex justify-between items-center">
      <figure className="w-[20%] md:w-[13%]">
        <img src="/images/logo.png" alt="logo" className="md:p-4 p-2 w-full" />
      </figure>
      <ul className="flex justify-between p-3">
        <li className="p-1 md:p-4 md:m-2">
          <Link to="/" className="font-bold">
            HOME
          </Link>
        </li>
        <li className="p-1 md:p-4 md:m-2 hidden sm:block">
          <Link to="/dashboard" className="font-bold">
            GET STARTED
          </Link>
        </li>
        <li className="p-1 md:p-4 md:m-2">
          <Link to="/contact" className="font-bold">
            CONTACT US
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
