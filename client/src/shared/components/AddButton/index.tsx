import React from "react";
import { AddButtonEle } from "./Styles";

/* local interface */
interface Params {
  onClick: React.MouseEventHandler;
  className: string;
}

const AddButton = ({ onClick, className }: Params) => {
  return <AddButtonEle onClick={onClick} className={className} />;
};

export default AddButton;
