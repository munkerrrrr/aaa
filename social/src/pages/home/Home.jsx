// import Topbar from "../../components/topbar/Topbar";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Feed from "../../components/feed/Feed";
// import Rightbar from "../../components/rightbar/Rightbar";
// import "./home.css"
// import { useEffect, useState } from "react";
// import {sendRequest, urlLookup} from "../../settings/settings";

export default function Home() {
  const [datas, setDatas] = useState();

  useEffect(() => {
    const bodyChiglel = {
      action: "aimagsum",
    };
    sendRequest(urlLookup, bodyChiglel).then((data) => setDatas(data));
  }, []);

  return (
    <>

    
      <Topbar sumname = {datas && (datas.data[9].sumduud[3]['sumname'])} />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}