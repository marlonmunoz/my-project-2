import { useNavigate } from "react-router-dom";

function NewToyForm() {

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        navigate('/');  // Redirect to the home page
    }
    return (
        <form onSubmit={handleSubmit}>
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