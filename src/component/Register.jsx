import React, { useState } from "react";
import LogoVanness from "../assets/image/LogoVanness.png";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import { db } from "../Firebase";
import { collection,addDoc } from "firebase/firestore";

function Register() {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [telephoneNumber, setTelephoneNumber] = useState("");
    const [birthday, setBirthday] = useState("");
    const [gender, setGender] = useState("");
    const [error, setError] = useState("");
    const { signUp } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmitSignUp = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email, password);
            await saveUserDataToFirestore();
            navigate("/login");
        } catch (err) {
            setError(err.message);
        }
    };

    const saveUserDataToFirestore = async () => {
        const userData = {
            name,
            surname,
            email,
            address,
            telephoneNumber,
            birthday,
            gender,
        };
        try {
            const docRef = await addDoc(collection(db, "users"), userData);
            console.log("Document written with ID: ", docRef.id);
        } catch (err) {
            console.error("Error adding document: ", err);
        }
    };


  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-auto vw-100">
      <div className="bg-white p-3 rounded w-50">
        <img className="SignUpPageLogo" src={LogoVanness} alt="logo" />
        <h2>Create an account</h2>
        <form onSubmit={handleSubmitSignUp}>
          <div className="row mb-3">
            <div className="col mb-3">
              <label htmlFor="name">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control rounded-0"
              />
            </div>
            <div className="col mb-3">
              <label htmlFor="surname">
                <strong>Surname</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Surname"
                name="surname"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                className="form-control rounded-0"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control rounded-0"
            />
          </div>
          <div className="row mb-3">
            <div className="col mb-3">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control rounded-0"
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="address">
              <strong>Address</strong>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your address"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="telephonenumber">
              <strong>Telephone Number</strong>
            </label>
            <input
              type="tel"
              placeholder="Enter Telephone number"
              name="telephonenumber"
              value={telephoneNumber}
              onChange={(e) => setTelephoneNumber(e.target.value)}
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="birthday">
              <strong>Birthday</strong>
            </label>
            <input
              type="date"
              placeholder="Enter Birthday"
              name="birthday"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              className="form-control rounded-0"
            />
            <p className="d-flex justify-content-left">Your birthday</p>
          </div>
          <div className="mb-3">
            <label htmlFor="gender">
              <strong>Gender</strong>
            </label>
            <select name="gender" value={gender} onChange={(e) => setGender(e.target.value)}  className="form-control rounded-0">
              <option value="" disabled hidden>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <p className="d-flex justify-content-left">
            Already have an account?
          </p>
          <div className="row mb-3">
            <Link
              to="/"
              className="col btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
            >
              Login
            </Link>
            <button
              type="submit"
              className="col btn btn-success border w-100 rounded-0 text-decoration-none"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
