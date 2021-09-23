import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

import { authActions } from "./store/auth";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const isLogin = () => {
    dispatch(authActions.login);
  };
  return (
    <Fragment>
      <Header onChange={isLogin} />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
