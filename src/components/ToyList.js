import { useOutletContext } from "react-router-dom";
import Toy from "./Toy";

function ToyList() {
    const { toys, deleteToy } = useOutletContext();
    const toyComponents = toys.map(toy => {
        return <Toy key={toy.id} toy={toy} deleteToy={() => deleteToy(toy.id)} />
    });
    return (
        <div>
            {toyComponents}
        </div>
    );
}


export default ToyList;