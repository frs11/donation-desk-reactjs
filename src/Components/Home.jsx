// import { useLoaderData } from "react-router-dom";
import Cards from "./Card/Cards";
import "./Style.css"
const Home = () => {

  // const cardsData = useLoaderData();
  
  return (
    <div>
          <div className="headerbg w-full">
            <div className="my-20 lg:my-32 text-center">
            <h1 className="text-3xl lg:text-5xl font-semibold">I Grow by Helping People in Need</h1>      
            <div className="flex pt-8 justify-center">
              <input type="text" name="Search" id="search-box" className="w-44 md:w-54 lg:w-72 border border-solid rounded-l-md bg-white px-3 py-2 border-gray-300" placeholder="Search here...." />
              <button className="bg-red-500 px-6 rounded-r-md py-1 text-white">Search</button>
            </div>
            </div>
          </div>

          <div>
            <Cards></Cards>
          </div>

    </div>
  );
};

export default Home;