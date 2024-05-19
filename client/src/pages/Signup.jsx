import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth'
import { toast } from "react-toastify";

const Signup = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  // handle the inputs
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(e.target.value);
    setUser({
      ...user,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const { storeTokenInLS, API } = useAuth();
  // handling the submit button
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch(`${API}/api/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      console.log('res:', response);

      const res_data = await response.json();
      console.log('res_data:', res_data.extraDetails);
      if (response.ok) {
        storeTokenInLS(res_data.token);
        setUser({ username: '', email: '', phone: '', password: '' });
        toast.success('Registration Successful');
        navigate('/');
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
        // alert("Registration not valid ")
      }
    } catch (error) {
      console.log('register error:', error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container registration-div ">
              <div className="registration-form">
                <h1 className="main-heading mb-3">Signup form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    sign up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Signup;
