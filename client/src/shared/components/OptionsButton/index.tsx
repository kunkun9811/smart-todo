import React from "react";
import { MoreOptionsButton } from "./Styles";

/* local interface */
interface Params {
  onClick: React.MouseEventHandler;
  className: string;
}

const OptionsButton = ({ onClick, className }: Params) => {
  return <MoreOptionsButton onClick={onClick} className={className} />;
};

export default OptionsButton;
