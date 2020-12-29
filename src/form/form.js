import React from "react";
import ButtonsForm from "../buttons/formButtons";

const Form = () => (
  <React.Fragment>
    <h1>Create Todo</h1>
    <div className="Edit-form">
      <form>
        <div className="Form-input">
          <input type="text" className="Input" name="text" />
        </div>
        <div className="Btn-d">
          <ButtonsForm name={"add"} />
          <ButtonsForm name={"clear"} />
        </div>
      </form>
    </div>
  </React.Fragment>
);

export default Form;
