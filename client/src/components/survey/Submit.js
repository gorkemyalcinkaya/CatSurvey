import axios from "axios";
import { SUBMIT_SURVEY } from "../../actions/types";

async function submit(values, dispatch) {
  await axios.post("/api/submit", values).then((res) => {
    dispatch({ type: SUBMIT_SURVEY, payload: res.data });
    History.navigate("/surveys/submit_success");
  });
}
export default submit;
