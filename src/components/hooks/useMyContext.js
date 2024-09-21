import { useContext } from "react";
import { myContext } from "../ContextModule/ContextModule";

export const useMyContext = () => useContext(myContext);
