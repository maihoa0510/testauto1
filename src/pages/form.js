
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

export default function Simpleform() {
  const router = useRouter()
  const { register, handleSubmit, formState: {errors} } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    router.push('/showlist')
  };
    return (
    <>
      <div className="container">
            <div className="simple_form">
              <h2 className="heading"> Simple form</h2>
              <p className="subtile"> A simple HTML From</p>
              <form action="/submit" method='post' onSubmit={handleSubmit(onSubmit)}>
                
                <div className="form_group">
                  <label> Email</label>
                  <input type="text" className="form_input"  {...register("email", {required: true,  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })} id="email" name= "email" />
                  {errors.email && <div> Email không đúng định dạng</div>}
                  <span />
                </div>
                <div className="form_group2">
                  <div className="form_group ">
                    <label> First Name </label>
                    <input type="text" className="form_input" id="firstname"  name="firstname" {...register("firstname", {required: true})}/>
                    {errors.firstname && <div>Không bỏ trống</div>}
                    <span />
                  </div>
                  <div className="form_group">
                    <label> Last Name</label>
                    <input type="text" className="form_input" id="lastname" {...register("lastname", {required: true})}/>
                    {errors.lastname && <div>Không bỏ trống</div>}
                    <span />
                  </div>
                </div>
                <div className="form_group">
                  <label> Business</label>
                  <select id="business" name="business">
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
                <button type="submit" className="btn btn-submit">
                  Save
                </button>
                <button type="reset" className="btn btn-cancel">
                  Cancel
                </button>
              </form>
            </div>
          </div>

    </>)
  }