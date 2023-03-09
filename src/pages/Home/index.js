import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductCard from "components/ProductCard";
import ListCate from "./components/ListCate";
const data = {
    title: '',
    image: ''
}
function Home() {
    return ( 
        <div>
            {/* <ListCate /> */}
            <div>
                <FontAwesomeIcon icon='magnifying-glass' />
            </div>
            {/* <div>
                <ProductCard data={data} />
            </div> */}
        </div>
     );
}

export default Home;