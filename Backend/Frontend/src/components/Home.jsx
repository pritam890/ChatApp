import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/Authprovider';
 

const Home = () => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useAuth(); // replace with actual user logic (null if not logged in)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to ChatApp!</h1>
        <p className="text-gray-700 text-lg">
          Your favorite place to connect with friends in real-time.
        </p>
      </header>

      
        <div className="mt-10">
          <p className="text-xl text-gray-800 mb-6">
            Hello, Guest! If you have an account, please log in. Otherwise, register to join.
          </p>
          <div className="flex space-x-4">
          <Link
            to="/login"
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200 shadow-md inline-block text-center"
            >
            Login
            </Link>
            
            <Link
            to="/signup"
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200 shadow-md inline-block text-center"
            >
            Signup
            </Link>
            
          </div>
        </div>
      
    </div>
  );
};

export default Home;
