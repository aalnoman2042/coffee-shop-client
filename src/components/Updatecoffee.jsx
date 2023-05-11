import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Updatecoffee = () => {
    const coffee = useLoaderData()
    const { _id, name, supplier, taste, category,  photo } =
    coffee;

    const handleUpdate = event =>{
        event.preventDefault()
        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
       

        const updatedCoffee = {name, quantity, supplier, taste, category, details, photo}

        console.log(updatedCoffee);

        // send data to server
        fetch(`http://localhost:5000/coffee/${_id}`,
        {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount >0){
                Swal.fire({
                    title: 'success!',
                    text: 'coffee added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }
    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl font-extrabold">update coffee</h2>
        <form onSubmit={handleUpdate}>
          {/* form name and quantity row */}
          <div className="mb-8 md:flex">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Coffe name</span>
              </label>
              <label className="input-group">
                <span>name</span>
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Coffee name"
                  className="w-full input input-bordered"
                />
              </label>
            </div> 
            <div className="ml-4 form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Available quantity</span>
              </label>
              <label className="input-group">
                <span>Quantity</span>
                <input
                  type="text"
                  name="quantity"
                  placeholder="available quantity"
                  className="w-full input input-bordered"
                />
              </label>
            </div> 
          </div>
          {/* form supllier  row */}
          <div className="mb-8 md:flex">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">supllier</span>
              </label>
              <label className="input-group">
                <span>name</span>
                <input
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  placeholder="supllier name"
                  className="w-full input input-bordered"
                />
              </label>
            </div> 
            <div className="ml-4 form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <span>Taste</span>
                <input
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  placeholder="Taste"
                  className="w-full input input-bordered"
                />
              </label>
            </div> 
          </div>
          {/* form category and details row */}
          <div className="mb-8 md:flex">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <span>name</span>
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  placeholder="Categpry"
                  className="w-full input input-bordered"
                />
              </label>
            </div> 
            <div className="ml-4 form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <span>Details</span>
                <input
                  type="text"
                  name="details"
                  defaultValue={category}
                  placeholder="Details"
                  className="w-full input input-bordered"
                />
              </label>
            </div> 
          </div>
          {/* form photo url row */}
          <div className="mb-8">
            <div className="w-full form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <span>URL</span>
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  placeholder="Categpry"
                  className="w-full input input-bordered"
                />
              </label>
            </div> 
          </div>
          
          <input type="submit" className="btn btn-block" value="update coffee" />
        </form>
      </div>
    );
};

export default Updatecoffee;