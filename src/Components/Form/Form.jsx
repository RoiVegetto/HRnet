import React, { useContext, useState } from 'react';
import states from '../../Data/States';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Form.css';
import { EmployeeContext } from '../../Data/EmployeeContext';

function Form() {
    const { addEmployee } = useContext(EmployeeContext);
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(formData).some(value => value !== '' && value !== null)) {
            addEmployee(formData);
            setShowModal(true);
            setFormData({
                firstName: '',
                lastName: '',
                dateOfBirth: '',
                startDate: '',
                street: '',
                city: '',
                state: '',
                zipCode: '',
                department: ''
            });
        }
    };
    
    const Modal = ({ show, onClose }) => {
        if (!show) {
            return null;
        }
        return (
            <div className="modal">
                <div className="modal-content">
                    <h2>Employee Created Successfully</h2>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        );
    };
    
    const handleCloseModal = () => {
        setShowModal(false);
    };

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        startDate: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        department: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
    <>
        <form onSubmit={handleSubmit}>
            <h2>Create Employee</h2>

            <label htmlFor="firstName">
                First Name<br/>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} />
            </label>
            <br/>

            <label htmlFor="lastName">
                Last Name<br/>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} />
            </label>
            <br/>

            <label htmlFor="dateOfBirth">
                Date of Birth<br/>
                <DatePicker
                    selected={formData.dateOfBirth} 
                    onChange={date => setFormData({ ...formData, dateOfBirth: date })}
                />
            </label>
            <br/>

            <label htmlFor="startDate">
                Start Date<br/>
                <DatePicker
                    selected={formData.startDate} 
                    onChange={date => setFormData({ ...formData, startDate: date })}
                />
            </label>
            <br/>

            <p>Address</p>
            <label htmlFor="street">
                Street<br/>
                <input type="text" id="street" name="street" value={formData.street} onChange={handleInputChange} />
            </label>
            <br/>

            <label htmlFor="city">
                City<br/>
                <input type="text" id="city" name="city" value={formData.city} onChange={handleInputChange} />
            </label>
            <br/>

            <label htmlFor="state">
                State<br/>
                <select id="state" name="state" value={formData.state} onChange={handleInputChange}>
                    {states.map((state) => (
                        <option key={state.abbreviation} value={state.abbreviation}>
                            {state.name}
                        </option>
                    ))}
                </select>
            </label>
            <br/>

            <label htmlFor="zipCode">
                Zip Code<br/>
                <input 
                    type="number"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                />
            </label>
            <br/>

            <label htmlFor="department">
                Department<br/>
                <select id="department" name="department" value={formData.department} onChange={handleInputChange}>
                    <option value="Sales">Sales</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Human Resources">Human Resources</option>
                    <option value="Legal">Legal</option>
                </select>
            </label>
            <br/>

            <button type="submit">Save</button>
        </form>
        <Modal show={showModal} onClose={handleCloseModal} />
        </>
    );
}

export default Form;
