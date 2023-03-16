import { useState } from 'react';

export default function Contact() {
  const [firstname, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [lastname, setLastName] = useState('');
  const [business, setBusiness] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async(e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
        const response = await fetch('/api/users',{
            method: 'POST',
            body: JSON.stringify({  email,firstname, lastname,business }),
            header:{
                'content-type':'application/json'
              }
        })
        const data = await response.json()
        console.log(data);
    
      console.log({ firstname, email, lastname,business});
      
      setFirstName('');
      setEmail('');
      setLastName('');
      setBusiness('');
      setErrors({});
    } else {
      setErrors(errors);
    }
  };

  const validate = () => {
    const errors = {};
    if (!firstname.trim()) {
      errors.firstname = 'Không bỏ trống';
    }
    if (!lastname.trim()) {
        errors.lastname = 'Không bỏ trống';
      }
    if (!email.trim()) {
      errors.email = 'Không bỏ trống';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Địa chỉ email không hợp lệ';
    }
    if (!business.trim()) {
      errors.business = 'Vui lòng nhập business';
    }
    return errors;
  };

  return (
    <div>
      <div className="container">
        <div className="simple_form">
            <h2 className="heading"> Simple form</h2>
            <p className="subtile"> A simple HTML From</p>
      <form onSubmit={handleSubmit} method= "POST">
      <div className="form_group">
          <label >Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {errors.email && <div>{errors.email}</div>}
        </div>
    <div className="form_group2">
        <div className="form_group">
            <label >firstname:</label>
            <input type="text" id="firstname" name="firstname" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
            {errors.firstname && <div>{errors.firstname}</div>}
        </div>
        <div className="form_group">
            <label >lastname:</label>
            <input type="text" id="lastname" name="lastname" value={lastname} onChange={(e) => setLastName(e.target.value)} />
            {errors.lastname && <div>{errors.lastname}</div>}
        </div>
    </div>
    <div className="form_group">
        <label> Business</label>
        <select id="business" name="business" value={business} onChange={(e) => setBusiness(e.target.value)} >
        <option value="Food & Beverage">Food &amp; Beverage</option>
        <option value="Restauants">Restauants</option>
        <option value="Pet Shop">Pet Shop</option>
        <option value="Fashion">Fashion</option>
        </select>
        <span />
    </div>
    <div className="form_group">
        <label> Description</label>
        <textarea
        className="form-control"
        id="desc"
        rows={5}
        defaultValue={""}
        />
    </div>
        <div className="form_group">
          <label >busines:</label>
          <input type="text" id="business" name="business" value={business} onChange={(e) => setBusiness(e.target.value)} />
          {errors.business && <div>{errors.business}</div>}
        </div>  
        <button type="submit" className="btn btn-submit">Gửi</button>
        <button type="reset" className="btn btn-cancel"> Cancel</button>
      </form>
      </div>
      </div>
    </div>
  );
}
