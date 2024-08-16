import { useNavigate } from "react-router-dom";

function NewToyForm() {

    const navigate = useNavigate();

    navigate('/')
    return (
        <form>
            <h3>Add a new toy 🧸 :</h3>
            <label htmlFor="name">Toy Name: </label>
            <input type="text" id="name" name="name" />
            <br/><br/>
            <label htmlFor="image">Toy Image: </label>
            <input type="text" id="image" name="image" />
            <br/><br/>
            <label htmlFor="likes">Description: </label>
            <input type="text" id="likes" name="likes" />
            <br/><br/>
            <input type="submit" value="Add Your Toy" />
            
        </form>
    )
}
 export default NewToyForm;