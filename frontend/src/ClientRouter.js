import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Landing from "./pages/Landing/Landing";
import "antd/dist/antd.css";
import { SocketContext, socket } from "./context/socket";
const ClientRouter = () => {
  return (
    <SocketContext.Provider value={socket}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </SocketContext.Provider>
  );
};

export default ClientRouter;
