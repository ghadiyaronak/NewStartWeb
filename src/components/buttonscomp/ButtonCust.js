
import React from "react";


const ButtonCust = () => {
  return (
    <>
      <div className="container sticky-footer " >
        <div className="row justify-content-end ">
          <div className="col-auto">
            <Button design="Positive" type="Submit" icon="save" > Save </Button>
          </div>
          <div className="col-auto">
            <Button design="Negative" type="Reset" icon="cancel"  > Cancel </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonCust;
