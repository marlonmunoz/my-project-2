import { useOutletContext, useNavigate } from "react-router-dom";
import { useState } from "react";


function NewToyForm() {      

    const navigate = useNavigate();  // Use the navigate function from the react-router-dom

    const [formData, setFormData] = useState({          
        name: "",
        image: "",
        age: "",
        price: "",
        description: ""
    });

    

    const {addNewToy } = useOutletContext();   // Use the addNewToy function from the context

    function handleSubmit(event) {    
        event.preventDefault();   
        addNewToy(formData);  // Call the addNewToy function from the context
        setFormData({  // Reset the form    
            name: "",
            image: "",
            age: "",
            price: "",
            description: ""
        });
        navigate('/home');  // Redirect to the home page
    }

    function updateForm(event) {    
        setFormData({...formData, [event.target.name]: event.target.value});
    }
 
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>   
                <h3> Your Toy Recommendations 🧸 :</h3>

                {/* NAME */}
                <div className="form-group">
                    <label htmlFor="name">Toy Name: </label>
                    <input
                    className="my-inputs" 
                    onChange={updateForm}
                    type="text" 
                    autoComplete="off"
                    id="name" 
                    name="name" 
                    value= {formData.name}
                    />
                </div>

                {/* IMAGE */}
                <br/><br/>
                <div className="form-group">
                    <label htmlFor="image">Toy URL Image: </label>
                    <input
                    className="my-inputs" 
                    onChange={updateForm} 
                    type="text" 
                    id="image" 
                    name="image" 
                    value= {formData.image}
                    />
                </div>

                {/* AGE */}
                <br/><br/>
                <div className="form-group">
                    <label htmlFor="age">Toy By Age: </label>
                    <input
                    className="my-inputs" 
                    onChange={updateForm} 
                    type="text" 
                    id="age" 
                    name="age" 
                    value= {formData.age}
                    />
                </div>
               
                {/* PRICE */} 
                <br/><br/>
                <div className="form-group">
                    <label htmlFor="price">Toy Price: </label>
                    <input
                    className="my-inputs" 
                    onChange={updateForm} 
                    type="text" 
                    id="price" 
                    name="price" 
                    value= {formData.price}
                    />
                </div>

                {/* DESCRIPTION */}
                <br/><br/>
                <div className="form-group">
                    <label htmlFor="description">Toy Description: </label>
                    <input
                    className="my-inputs" 
                    onChange={updateForm} 
                    type="text" 
                    id="description" 
                    name="description" 
                    value= {formData.description}
                    />
                </div>
                <br/><br/>
                <button className="add-to-list" type="submit">Add To List</button>
            </form>
        </div>
    )
}
 export default NewToyForm;