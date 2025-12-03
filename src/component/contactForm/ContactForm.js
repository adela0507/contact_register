import React from "react";
import "../../App.css"

function ContactForm({ contact, addContacts }) {
  const initialValue = { full_name: "", phone_number: "" };
  const [form, setForm] = React.useState(initialValue);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.full_name === "" || form.phone_number === "") {
      alert("Please enter the data");
      return;
    }

    addContacts([...contact, form]);   
    setForm(initialValue);            
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input 
          type="text" 
          name="full_name" 
          placeholder="Full name" 
          value={form.full_name}
          onChange={onChangeInput}
        />
      </div>

      <div>
        <input 
          type="number" 
          name="phone_number" 
          placeholder="Phone number"  
          value={form.phone_number}
          onChange={onChangeInput}
        />
      </div>

      <div className="button">
        <button>Add</button>
      </div>
    </form>
  );
}

export default ContactForm;
