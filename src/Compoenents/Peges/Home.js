import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    image: null,
    text1: '',
    text2: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: files ? files[0] : value // Handle file input correctly
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();  // Stops page from refreshing
    setSubmitted(true);  // Set submitted to true to display data
  };

  return (
    <div className='form_box'>
      <form className='form_in' onSubmit={handleSubmit}>
        <div className='form_img'>
          <input className='img_add' type='file' id='image' onChange={handleChange} />
        </div>
        <div className='form_img'>
          <input className='img_text' type='text' id='text1' value={formData.text1} onChange={handleChange} />
        </div>
        <div className='form_img'>
          <input className='img_text' type='text' id='text2' value={formData.text2} onChange={handleChange} />
        </div>
        <div className='form_img'>
          <input className='img_btn' type='submit' value='Submit' />
        </div>
      </form>

      {submitted && (
        <div className='card'>
          <h3>Submitted Data</h3>
          {formData.image && <img src={URL.createObjectURL(formData.image)} alt="Uploaded" />}
          <p>Text 1: {formData.text1}</p>
          <p>Text 2: {formData.text2}</p>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
