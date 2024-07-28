import "./adsettings.css";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateUserAPI } from "../../Services/allAPI";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";


const AdSettings = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username:"",
    email:"",
    password:"",
    companyname: "",
    address: "",
    contactemail: "",
    adduser: "",
    assignrole: "",
  });
  console.log(formData);

  useEffect(()=>{
    
  },[])

  const handleSubmit = async () => {
    //e.preventDefault();
    const userId = sessionStorage.getItem("user");
    console.log(userId);
    const uniqueId = JSON.stringify(userId._id)
    console.log(uniqueId);
    const token = sessionStorage.getItem("token")
    const reqBody = formData
    try {

      const reqHeader = {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
      const result = await updateUserAPI(uniqueId,reqBody,reqHeader);
      if (result.status === 200) {
        toast.success("Settings updated successfully");
        navigate('/dashboard');
      } else {
        toast.error("Failed to update settings. Please try again.");
      }
    } catch (err) {
      
      toast.error('Failed to update settings. Please try again.');
    }
  };


  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="listContainer">
          <div className="listTitle"><h1 className="fw-bolder">Settings</h1></div>
          <div className="settingsSections">
            <div className="settingsSection">
              <h2>General Settings</h2>
              <form style={{ marginLeft: "20px" }}>
                <div className="formGroup">
                  <label>Company Name:</label>
                  <input type="text" name="companyname" value={formData.companyname} onChange={e=>setFormData({...formData,companyname:e.target.value})} placeholder="Enter company name" required />
                </div>
                <div className="formGroup">
                  <label>Address:</label>
                  <input type="text" name="address" value={formData.address} onChange={e=>setFormData({...formData,address:e.target.value})} placeholder="Enter address" required />
                </div>
                <div className="formGroup">
                  <label>Contact Email:</label>
                  <input type="email" name="contactemail" value={formData.contactemail} onChange={e=>setFormData({...formData,contactemail:e.target.value})} placeholder="Enter contact email" required />
                </div>
              </form>
            </div>
            <div className="settingsSection">
              <h2>User Management</h2>
              <form>
                <div style={{ marginLeft: "5px" }} className="formGroup">
                  <label>Add User:</label>
                  <input type="text" name="adduser" value={formData.adduser} onChange={e=>setFormData({...formData,adduser:e.target.value})} placeholder="Enter user name" />
                </div>
                <div style={{ marginLeft: "-80px" }} className="formGroup">
                  <label>Assign Role:</label>
                  <select name="assignrole" value={formData.assignrole} onChange={e=>setFormData({...formData,assignrole:e.target.value})}>
                    <option value="admin">Admin</option>
                    <option value="cashier">Cashier</option>
                    <option value="manager">Manager</option>
                  </select>
                </div>
              </form>
            </div>                
            <div>
                <button onClick={e=>handleSubmit(e)} type="button">Update</button>
            </div>           
          </div>
        </div>
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </div>
  );
};

export default AdSettings;
