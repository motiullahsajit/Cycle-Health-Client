import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';

const AddMember = () => {
    document.title = 'Add Member';
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const [imageURL, setImageURL] = useState(null);

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '0c53bf3485532df1166c464bcf4de627');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const onSubmit = data => {
        const memberData = {
            name: data.name,
            imageURL: imageURL,
            postion: data.postion,
            email: data.email
        }
        fetch('https://cycle-health-server.herokuapp.com/addMember', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(memberData)
        })
        history.push(`/dashboard/team`);
    };

    return (
        <div className="col-md-4">
            <h2 className='text-brand'>Detail Information</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" className='w-100 py-2 my-2' placeholder='Name' type="text" {...register("name", { required: true })} />
                <input name="postion" className='w-100 py-2 my-2' placeholder='Postion' type="text" {...register("postion", { required: true })} />
                <input name="email" className='w-100 py-2 my-2' placeholder='Email' type="text" {...register("email", { required: true })} />
                <h5 className="text-secondary">Image</h5>
                <input name="imageURL" className='my-3' type="file" onChange={handleImageUpload} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input className='btn btn-brand-filled w-100' type="submit" value='Submit' />
            </form>
        </div>
    );
};

export default AddMember;