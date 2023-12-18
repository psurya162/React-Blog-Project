import React, { useContext } from "react";
import "./Home.css";
import { Store } from "../../Store/Store";

const Home = () => {
  const { data } = useContext(Store);

  return (
    <>
    <div className="Parent">
    <div className="Home-Image-Container">
        <div className="Left-side-image">
          <img
            className="LeftImagee"
            src="https://imgs.search.brave.com/99m3ILzJDc0zktpcxxXqwDAUPNBfXSEAGZ-HNgv5tG4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by93/aWRlLWFuZ2xlLXNo/b3Qtc2luZ2xlLXRy/ZWUtZ3Jvd2luZy1j/bG91ZGVkLXNreS1k/dXJpbmctc3Vuc2V0/LXN1cnJvdW5kZWQt/YnktZ3Jhc3NfMTgx/NjI0LTIyODA3Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn"
            alt=""
          />
        </div>
        <div className="Right-side-image">
          <div className="Image-1">
            <img
              className="Rightimagee"
              src="https://imgs.search.brave.com/_0dNJm6N-yoQG2tgvQkWS6ldRbe6X-3SNpd_Uh7Zqi0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9m/b3Jlc3QtbGFuZHNj/YXBlXzcxNzY3LTEy/Ny5qcGc_c2l6ZT02/MjYmZXh0PWpwZw"
              alt=""
            />
          </div>
          <div className="Image-2">
            <img
              className="Rightimagee"
              src="https://imgs.search.brave.com/-gAHXey_g_zxP9zTurAhi1kiLWL-RtRl8kktVibTxZQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMx/NzMyMzczNi9waG90/by9hLXZpZXctdXAt/aW50by10aGUtdHJl/ZXMtZGlyZWN0aW9u/LXNreS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9aTRIWU83/eGhhbzdDa0d5N1pj/XzhYU05YX2lxRzB2/QXdOc3JIMUVSbXcy/UT0"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* <h2 className="Headingg Latest-Heading">The Latest</h2>
      <div className="Latest-Card-Container">
        {data.slice(0, 3).map((item, index) => (
          <div key={index} className="Latest-card">
            <div className="Latest-Card">
             
              <img src={item.image} alt={item.name} />
            </div>
            <div className="Latest-Card ">{item.name}</div>
            <div className="Latest-Card">{item.description}</div>
            <div className="Latest-Card ">{item.category} : 16-12-23</div>
          </div>
        ))}
      </div> */}
    </div>
      
      
    </>
  );
};

export default Home;


// <div className="Latest-Card-Container">
//         {data.slice(0, 3).map((item, index) => (
//           <div key={index}>
//             <div className="Latest-Card">
//               <img src={item.image} alt={item.name} />
//             </div>
//             <div className="Latest-Card Card-Head-name">{item.name}</div>
//             <div className="Latest-Card">{item.description}</div>
//             <div className="Latest-Card">{item.category} : 16-12-23</div>
//           </div>
//         ))}
//       </div>
