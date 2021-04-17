import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

const MakeAdmin = () => {
    document.title = 'Make Admin';
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory()
    const onSubmit = data => {
        fetch('https://cycle-health-server.herokuapp.com/makeAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        history.push(`/dashboard/admins`);
    };

    return (
        <div className="col-md-4">
            <h2 className='text-brand text-center'>Service Information</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" className='w-100 py-2 my-2' placeholder="Admin's name" type='text' {...register("name", { required: true })} />
                <input name="email" className='w-100 py-2 my-2' placeholder="Admin's email" type='email' {...register("email", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input className='btn btn-brand-filled w-100' type="submit" value='Add' />
            </form>
        </div>
    );
};

export default MakeAdmin;