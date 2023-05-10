import { Link } from "react-router-dom";



const praga = [
    {
        path:"/",
        set: "Main",
        id: 1,
    },
    {
        path:"about",
        set: "About",
        id: 2,
    },
    {
        path:"posts",
        set: "Posts",
        id: 3,
    },
];

const Navbar = () => {
    return (
        <div>
           {
            praga.map((el) => (
          <Link style={{marginRight: "30px"}} to={el.path} key={`${el.id} ${el.set}`}>
          {el.set}
          </Link>
            ))
           }
        </div>
     
    )
}

export default Navbar