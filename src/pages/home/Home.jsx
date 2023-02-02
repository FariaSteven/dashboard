import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Hosts from "../../components/hosts/Hosts";
import Packackes from "../../components/packages/Packages";
import Updates from "../../components/updates/Updates";

const Home = () => {
  const [render, setRender] = useState("hosts");

  const renderComponent = () => {
    switch (render) {
      case "hosts":
        return <Hosts />;
      case "packages":
        return <Packackes />;
      case "updates":
        return <Updates />;
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => setRender("hosts")}>Hosts</button>
        <button onClick={() => setRender("packages")}>Packages</button>
        <button onClick={() => setRender("updates")}>Updates</button>
      </div>
      {renderComponent()}
    </div>
  );
};

export default Home;
