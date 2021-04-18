import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
const AddService = () => {
    document.title = 'Add Service';
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const history = useHistory()
    const onSubmit = data => {
        const serviceData = {
            name: data.name,
            imageURL: imageURL,
            price: data.price,
            description: data.description,
        }
        fetch('https://cycle-health-server.herokuapp.com/addService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
        history.push(`/dashboard/manageServices`);
    };

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
    return (
        <div className="col-md-4">
            <h2 className='text-brand text-center'>Service Information</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" className='w-100 py-2 my-2' placeholder='Service name' type="text" {...register("name", { required: true })} />
                <input name="price" className='w-100 py-2 my-2' placeholder='Service price' type='number' {...register("price", { required: true })} />
                <input name="description" className='w-100 py-2 my-2' placeholder='Description' type="text" {...register("description", { required: true })} />
                <h5 className="text-secondary">Select Image</h5>
                <input name="imageURL" className='my-3' type="file" onChange={handleImageUpload} />
                {errors.name && <span>This field is required</span>}
                {errors.price && <span>This field is required</span>}
                {errors.description && <span>This field is required</span>}
                <input className='btn btn-brand-filled w-100' type="submit" value='Add' />
            </form>
        </div>
    );
};

export default AddService;