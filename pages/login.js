import axios from "axios";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const [logData, setLogData] = useState({ email: "", pass: "" });
  const [signData, setSignData] = useState({ email: "", pass: "", repeat: "" });
  const [log, setLog] = useState(true);
  const [logMessage, setLogMessage] = useState("");
  const [signMessage, setSignMessage] = useState("");
  const router = useRouter();

  function logChange(e) {
    const { name, value } = e.target;
    setLogData(logData => {
      return { ...logData, [name]: value };
    });
  }

  function signChange(e) {
    const { name, value } = e.target;
    setSignData(signData => {
      return { ...signData, [name]: value };
    });
  }

  function toggle() {
    setLog(log => !log);
  }

  async function handleLog(e) {
    e.preventDefault();
    if (!logData.email || !logData.pass) {
      setLogMessage("empty fields!");
    } else if (logData.email && logData.pass) {
      try {
        const res = await signIn("credentials", {
          email: logData.email,
          pass: logData.pass,
          redirect: false,
        });
        res?.ok
          ? router.push("/dashboard")
          : setLogMessage("incorrect user or password");
      } catch (err) {
        setLogMessage("error occrred");
      }
    }
  }

  async function handleSign(e) {
    e.preventDefault();
    if (!signData.email || !signData.pass) {
      setSignMessage("empty fields!");
    } else if (signData.pass != signData.repeat) {
      setSignMessage("passwords don't match");
    } else if (signData.email && signData.pass) {
      try {
        const res = await axios.post("/api/signup", {
          email: signData.email,
          pass: signData.pass,
        });
        router.push("/dashboard");
      } catch (err) {
        setSignMessage(err.message);
      }
    }
  }

  return (
    <>
      {log ? (
        <Log
          func={logChange}
          email={logData.email}
          pass={logData.pass}
          toggle={toggle}
          message={logMessage}
          handleLog={handleLog}
        />
      ) : (
        <Sign
          func={signChange}
          email={signData.email}
          pass={signData.pass}
          repeat={signData.repeat}
          toggle={toggle}
          message={signMessage}
          handleSign={handleSign}
        />
      )}
    </>
  );
}

function Log({ func, email, pass, toggle, message, handleLog }) {
  return (
    <div className="login-div">
      <div className="msg-div">
        <p className="msg-txt">{message}</p>
      </div>
      <form>
        <input
          className="login-input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={func}
          value={email}
        />
        <input
          className="login-input"
          type="password"
          name="pass"
          placeholder="Password"
          onChange={func}
          value={pass}
        />
        <button type="submit" onClick={handleLog} className="login-button">
          Log in
        </button>
      </form>
      <p onClick={toggle} className="register-txt">
        Not a member? Register your account
      </p>
    </div>
  );
}

function Sign({ func, email, pass, repeat, toggle, message, handleSign }) {
  return (
    <div className="login-div">
      <div className="msg-div">
        <p className="msg-txt">{message}</p>
      </div>
      <form>
        <input
          className="login-input"
          type="email"
          name="email"
          placeholder="Email"
          onChange={func}
          value={email}
        />
        <input
          className="login-input"
          type="password"
          name="pass"
          placeholder="Password"
          onChange={func}
          value={pass}
        />
        <input
          className="login-input"
          type="password"
          name="repeat"
          placeholder="Repeat Password"
          onChange={func}
          value={repeat}
        />
        <button type="submit" onClick={handleSign} className="login-button">
          Sign up
        </button>
      </form>
      <p onClick={toggle} className="register-txt">
        Already a member? Log in
      </p>
    </div>
  );
}
