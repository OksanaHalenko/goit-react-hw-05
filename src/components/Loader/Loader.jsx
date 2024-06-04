import { Hourglass } from "react-loader-spinner";

function Loader({ loading }) {
  return (
    <Hourglass
      visible={loading}
      height="80"
      width="80"
      colors={["#306cce", "#72a1ed"]}
    />
  );
}

export default Loader;
