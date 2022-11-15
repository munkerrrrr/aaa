import { sendRequest, urlLookup } from "./settings/settings";
import { useState, useEffect } from "react";

function App() {
  const [datas, setDatas] = useState();
  useEffect(() => {
    const bodyChiglel = {
      action: "chiglel",
    };

    sendRequest(urlLookup, bodyChiglel).then((data) => setDatas(data));
  }, []);

  return (
    <>
      <p>{datas && datas.data[9].chiglelname}</p>
      {/* <p>{datas && JSON.stringify(datas)}</p> */}
    
    </>
  );
}
export default App;
