import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Employee = () => {
  const [custlist, custupdate] = useState([]);
  const [haveedit, editchange] = useState(false);
  const [haveview, viewchange] = useState(false);
  const [haveadd, addchange] = useState(false);
  const [haveremove, removechange] = useState(false);
  const [register, setRegister] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    GetUserAccess();
    loademployee();
  }, []);

  const loademployee = () => {
    fetch("http://localhost:3000/employees")
      .then((res) => {
        if (!res.ok) {
          return false;
        }
        return res.json();
      })
      .then((res) => {
        custupdate(res);
      });
  };

  const GetUserAccess = () => {
    const userrole =
      sessionStorage.getItem("userrole") != null
        ? sessionStorage.getItem("userrole").toString()
        : "";
    fetch(
      "http://localhost:3000/roleaccess?role=" + userrole + "&menu=employee"
    )
      .then((res) => {
        if (!res.ok) {
          navigate("/");
          toast.warning("You are not authorized to access");
          return false;
        }
        return res.json();
      })
      .then((res) => {
        console.log(res);
        if (res.length > 0) {
          viewchange(true);
          let userobj = res[0];
          if (userobj.role === "admin") {
            console.log("hello world");
          }else{
            console.log("not admin")
          }
          editchange(userobj.haveedit);
          addchange(userobj.haveadd);
          removechange(userobj.havedelete);
          setRegister(true);
        } else {
          navigate("/");
          toast.warning("You are not authorized to access");
        }
      });
  };

  const handleadd = () => {
    if (haveadd) {
      toast.success("added");
    } else {
      toast.warning("You are not having access for add");
    }
  };
  const handleedit = () => {
    if (haveedit) {
      toast.success("edited");
    } else {
      toast.warning("You are not having access for Edit");
    }
  };

  const handleremove = () => {
    if (haveremove) {
      toast.success("removed");
    } else {
      toast.warning("You are not having access for remove");
    }
  };

  return (
    <div className="container">
      <div>
        <div>
          <h3>employee Listing</h3>
        </div>
        <div c>
          <button onClick={handleadd} className="btn btn-success">
            Add (+)
          </button>
          <br></br>
          <table>
            <thead>
              <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
                <th>Perfomance</th>
              </tr>
            </thead>
            <tbody>
              {custlist &&
                custlist.map((item) => (
                  <tr key={item.code}>
                    <td>{item.code}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.perfomance}</td>
                    <td>
                      <button onClick={handleedit}>Edit</button> |
                      <button onClick={handleremove}>Remove</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employee;
