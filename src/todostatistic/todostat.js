import React from "react";
import ButtonsForm from "../buttons/formButtons";

const ShowStat = () => (
  <React.Fragment>
    <a href="#" className="Show-statistic">
      {" "}
      Show statistick{" "}
    </a>{" "}
    <p> Nothing to do </p>{" "}
  </React.Fragment>
);

const ShowNewpage = () => (
  <React.Fragment>
    <div className="ContainerStat">
      <p> ALL Todo: 0 </p> <p> Todo Posponed: 0 </p> <p> Todo Compleated: 0 </p>{" "}
      <p> Todo Deleted: 0 </p>{" "}
    </div>{" "}
    <ButtonsForm name={"Back to list"} />{" "}
  </React.Fragment>
);

export default ShowStat;
