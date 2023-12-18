import React, { useContext } from "react";
import { Store } from "../../Store/Store";

const Hollywood = () => {
  const { data } = useContext(Store);

  return (
    <>
      <div className="Main">
        <div className="Left-side">
          <h2 className="Headingg">HOLLYWOOD</h2>
          {data
            .filter((item) => item.category === "HOLLYWOOD")
            .map((item, index) => (
              <div key={index} className="Post">
              
                <div className="Image-Container">
                  <img src={item.image} alt="" />
                </div>
                <div className="Content-Container">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p className="Category-name">{item.category}:16-12-23</p>
                  
                </div>
              
              </div>
            ))}
        </div>

        <div className="Right-side">
          <h2 className="Headingg">TOP POSTS</h2>
          {/* Additional logic for top posts, if needed */}
        </div>
      </div>
    </>
  );
};

export default Hollywood;
