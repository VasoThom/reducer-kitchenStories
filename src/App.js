import "./App.css";
import { useReducer } from "react";
import user from "./user";

const initState = {
  inputEmail: "",
  inputPassword: "",
  loggedInUser: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "updateInputEmail":
      state = {
        ...state,
        inputEmail: action.value,
      };
      break;
    case "updateInputPassword":
      state = {
        ...state,
        inputPassword: action.value,
      };
      break;
    case "loggedInUser":
      const foundUser = user.find((u) => u.email === state.inputEmail);
      // console.log(foundUser);
      if (foundUser) {
        if (foundUser.password === foundUser.inputPassword) {
          state = {
            ...state,
            loggedInUser: foundUser.email,
          };
        }
      }
      break;
    default:
      console.warn("unkwon Action");
  }
  return state;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          {state.loggedInUser ? (
            <h1>welcome to our website {state.loggedInUser} </h1>
          ) : (
            <>
              <div>
                <input
                  type="email"
                  placeholder="email"
                  value={state.inputEmail}
                  onChange={(e) =>
                    dispatch({
                      type: "updateInputEmail",
                      value: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="email"
                  value={state.inputPassword}
                  onChange={(e) =>
                    dispatch({
                      type: "updateInputPassword",
                      value: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <button onClick={() => dispatch({ type: "loggedInUser" })}>
                  Send
                </button>
              </div>
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
