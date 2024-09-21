import { MutatingDots } from "react-loader-spinner";
import s from "./Loader.module.css";
const Loader = () => {
  return (
    <MutatingDots
      visible={true}
      height="100"
      width="100"
      color="#808080"
      secondaryColor="#808080"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass={s.wrapper}
    />
  );
};

export default Loader;
