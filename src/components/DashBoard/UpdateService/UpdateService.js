import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';

const UpdateService = () => {
    document.title = 'Update Service';
    const { id } = useParams();
    const history = useHistory()
    const [updateItem, setUpdateItem] = useState([])
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const data = await axios(`https://cycle-health-server.herokuapp.com/service/${id}`);
            return data;
        }
        fetchData().then(data => setUpdateItem(data?.data))
    }, [id])

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
        const UpdateData = {
            name: data.name,
            imageURL: imageURL || data.imageURL,
            price: data.price,
            description: data.description,
        }
        fetch(`https://cycle-health-server.herokuapp.com/updateService/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdateData)
        })
        history.push(`/dashboard/manageServices`);
    };


    return (
        <div className="col-md-4">
            <h2 className='text-brand text-center'>Service Information</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" className='w-100 py-2 my-2' defaultValue={updateItem.name} placeholder='Service name' type="text" {...register("name", { required: true })} />
                <input name="price" className='w-100 py-2 my-2' defaultValue={updateItem.price} placeholder='Service price' type='number' {...register("price", { required: true })} />
                <input name="description" className='w-100 py-2 my-2' defaultValue={updateItem.description} placeholder='Description' type="text" {...register("description", { required: true })} />
                <h5 className="text-secondary">ReUpload Image</h5>
                <input name="imageURL" className='my-3' type="file" defaultValue={updateItem.imageURL} onChange={handleImageUpload} />
                {errors.name && <span>This field is required</span>}
                {errors.price && <span>This field is required</span>}
                {errors.description && <span>This field is required</span>}
                <input className='btn btn-brand-filled w-100' type="submit" value='Update' />
            </form>
        </div>
    );
};

export default UpdateService;