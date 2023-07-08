import { getAuth } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    profileImage: null,
    state: "",
  });

  useEffect(() => {
    if (auth.currentUser) {
      setFormData((prevState) => ({
        ...prevState,
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
      }));
    }
  }, [auth.currentUser]);

  const { name, email, dateOfBirth, gender, profileImage, state } = formData;

  function onLogout() {
    auth.signOut();
    navigate('../../Sign-In');
    toast.success("Signed out successfully");
  }

  function handleProfileImageChange(event) {
    const file = event.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      profileImage: file,
    }));
  }

  return (
    <div className="bg-[#CFB9FF]">
      <h1 className="text-3xl text-center pt-6 font-bold">Profile</h1>
      <section className="p-6">
        <h2 className="text-xl py-2 font-bold">Personal Info</h2>
        <div className="flex justify-around items-center">
          <div className="w-[50%]">
            <form>
              <table>
                <tbody>
                  <tr className="">
                    <td className="w-[40%] text-lg font-medium py-4">Name:</td>
                    <td>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        disabled
                        className="w-[140%] px-4 py-2 text-lg text-center text-black bg-[#ffe6e2] rounded-xl border-none transition ease-in-out"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[40%] text-lg font-medium py-4">Email:</td>
                    <td>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        disabled
                        className="w-[140%] px-4 py-2 text-lg text-center text-black bg-[#ffe6e2] rounded-xl border-none transition ease-in-out"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[40%] text-lg font-medium py-4">
                      Date of Birth:
                    </td>
                    <td>
                      <input
                        type="date"
                        id="dateOfBirth"
                        value={dateOfBirth}
                        onChange={(e) =>
                          setFormData((prevState) => ({
                            ...prevState,
                            dateOfBirth: e.target.value,
                          }))
                        }
                        className="w-[140%] px-4 py-2 text-lg text-center text-black bg-[#ffe6e2] rounded-xl border-none transition ease-in-out"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[40%] text-lg font-medium py-4">
                      Gender:
                    </td>
                    <td>
                      <select
                        id="gender"
                        value={gender}
                        onChange={(e) =>
                          setFormData((prevState) => ({
                            ...prevState,
                            gender: e.target.value,
                          }))
                        }
                        className="w-[140%] px-4 py-2 text-lg text-center text-black bg-[#ffe6e2] rounded-xl border-none transition ease-in-out"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[40%] text-lg font-medium py-4">
                      Profile Picture:
                    </td>
                    <td>
                      <input
                        type="file"
                        id="profileImage"
                        accept="image/*"
                        onChange={handleProfileImageChange}
                        className="w-[140%] px-4 py-2 text-lg items-center text-black bg-[#ffe6e2] rounded-xl border-none transition ease-in-out"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
          <div className="w-[30%] flex flex-col items-center">
            <img
              src={profileImage ? URL.createObjectURL(profileImage) : ""}
              alt="ProfilePic"
              className="mb-6 h-[200px] w-[200px] text-center rounded-full border-none bg-[#ffe6e2]"
            />

            <button
              onClick={onLogout}
              className="w-[60%] px-4 py-2 text-xl text-white bg-orange-600 rounded-xl border-none shadow-lg hover:bg-red-600 transition duration-200 ease-in-out"
            >
              Sign out
            </button>
          </div>
        </div>
      </section>
      <section className="p-6">
        <h2 className="text-xl py-2 font-bold">Contact Details</h2>
        <div className="flex justify-around items-center">
          <div className="w-[50%]">
            <form>
              <table>
                <tbody>
                  <tr>
                    <td className="w-[40%] text-lg font-medium py-4">
                      Phone Number:
                    </td>
                    <td>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        pattern="[0-9]{10}"
                        placeholder="Enter 10-digit phone number"
                        required
                        className="w-[210%] px-4 py-2 text-lg text-center text-black bg-[#ffe6e2] rounded-xl border-none transition ease-in-out"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[40%] text-lg font-medium py-4">Email:</td>
                    <td>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        disabled
                        className="w-[210%] px-4 py-2 text-lg text-center text-black bg-[#ffe6e2] rounded-xl border-none transition ease-in-out"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[40%] text-lg font-medium py-4">
                      Street Address:
                    </td>
                    <td>
                      <input
                        type="text"
                        id="streetAddress"
                        name="streetAddress"
                        placeholder="Enter Street Address"
                        className="w-[210%] px-4 py-2 text-lg text-center text-black bg-[#ffe6e2] rounded-xl border-none transition ease-in-out"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[40%] text-lg font-medium py-4">City:</td>
                    <td>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Enter City"
                        className="w-[210%] px-4 py-2 text-lg text-center text-black bg-[#ffe6e2] rounded-xl border-none transition ease-in-out"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[40%] text-lg font-medium py-4">State:</td>
                    <td>
                      <select
                        id="state"
                        value={state}
                        onChange={(e) =>
                          setFormData((prevState) => ({
                            ...prevState,
                            state: e.target.value,
                          }))
                        }
                        className="w-[210%] px-4 py-2 text-lg text-center text-black bg-[#ffe6e2] rounded-xl border-none transition ease-in-out"
                      >
                        <option value="">Select State</option>
                        <option value="Andaman and Nicobar Islands">
                          Andaman and Nicobar Islands
                        </option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Arunachal Pradesh">
                          Arunachal Pradesh
                        </option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Dadra and Nagar Haveli">
                          Dadra and Nagar Haveli
                        </option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">
                          Himachal Pradesh
                        </option>
                        <option value="Jammu and Kashmir">
                          Jammu and Kashmir
                        </option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-[49.5%] text-lg font-medium py-4">
                      Pin Code:
                    </td>
                    <td>
                      <input
                        type="tel"
                        id="postalCode"
                        name="postalCode"
                        placeholder="Enter 6 digit Pin Code"
                        pattern="[0-9]{6}"
                        className="w-[210%] px-4 py-2 text-lg text-center text-black bg-[#ffe6e2] rounded-xl border-none transition ease-in-out"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
          <div className="w-[30%] flex flex-col items-center"></div>
        </div>
      </section>
    </div>
  );
}
