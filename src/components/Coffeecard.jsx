import { data } from "autoprefixer";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Coffeecard = ({ coffee ,coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`,{
            method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!",
               "Your coffee has been deleted.",
                "success");
                const remaining = coffees.filter(cof => cof._id !== _id)
                setCoffees(remaining)
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="shadow-xl card card-side bg-base-100">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="flex justify-between w-full pr-5 ">
          <div>
            <h2 className="card-title">{name}</h2>
            <p>quantity:{quantity}</p>
            <p>supplier:{supplier}</p>
            <p>taste:{taste} </p>
          </div>
          <div className="justify-end card-actions">
            <div className="space-y-4 btn-group btn-group-vertical">
              <button className="btn">view</button>
            <Link to={`/updatecoffee/${_id}`}>  <button className="btn">Edit</button></Link>
              <button
                onClick={() => handleDelete(_id)}
                className="btn bg-rose-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffeecard;
