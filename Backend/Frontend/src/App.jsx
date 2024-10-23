import React from 'react';
import Left from './home/Leftpart/Left';
import Right from './home/Rightpart/Right';
import Signup from './components/Signup';
import Login from './components/Login';
import { useAuth } from './context/Authprovider';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [authUser] = useAuth();  // Keeping authUser from context

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                  <Right />
                </div>
                <div className="drawer-side">
                  <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                  <ul
                    className="menu w-80 min-h-full bg-black text-base-content"
                    style={{
                      scrollbarWidth: 'none', // Firefox
                      msOverflowStyle: 'none', // IE and Edge
                    }}
                  >
                    <Left />
                  </ul>
                </div>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
