import "./App.css";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");

  const submit = async () => {
    try {
      let error = false;
      if (!email || !name || !address) {
        error = true;
      }

      if (error) {
        alert("all fields are required");
        return;
      }

      let result = await fetch(
        `/api/email?emailName=${email}&name=${name}&address=${address}`
      );
      if (result.status === 200) {
        alert("Email was sent to you");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      alert("Something from the server went wrong");
    }
  };

  return (
    <div className="App">
      <div className="logo">
        <img
          className="img"
          alt="logo"
          src="https://insights.centiro.com/hs-fs/hubfs/centiro_logo_registrated_rgb_pos-1.png?width=200&height=43&name=centiro_logo_registrated_rgb_pos-1.png"
        />
      </div>
      <div className="container">
        <div className="title">Your Order details!</div>
        <div className="fields">
          <div className="name">
            <span>Name</span>
            <div>
              <input
                type="text"
                value={name}
                placeholder="Your name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="email">
            <span>Email</span>
            <div className="emailInput">
              <input
                type="email"
                placeholder="gmail is recommended "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="address">
            <span>Address</span>
            <div>
              <input
                type="text"
                value={address}
                placeholder="Your address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="btn">
          <button onClick={submit}> Submit </button>
        </div>
      </div>
    </div>
  );
}

export default App;
