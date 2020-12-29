import React from "react";

/* const ButtonsForm = () => (
      <div className="Form-Btn">
      <form>
        <div className="Form-button">
          <button type="button" className="Btn-add">
            Add
          </button>
        </div>
        <div className="Form-button">
          <button type="button" className="Btn-clear">
            Clear
          </button>
        </div>
      </form>
      </div>
); */

 const ButtonsForm =( {name} ) => (
      <div className="Form-Btn">
      <form>
        <div className="Form-button">
          <button type="button" className="Btn-add">
            {name}
          </button>
        </div>
      </form>
      </div>
); 

export default ButtonsForm;