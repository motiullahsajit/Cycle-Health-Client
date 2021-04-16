import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
const AddReview = () => {
    document.title = 'Add Product';
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
        const reviewData = {
            name: data.name,
            imageURL: imageURL,
            companyName: data.companyName,
            review: data.review,
            rating: data.rating,
        }
        fetch('http://localhost:5055/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
        history.push(`/dashboard/manageServices`);
    };

    return (
        <div className="col-md-4">
            <h2 className='text-brand text-center'>Your Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" className='w-100 py-2 my-2' placeholder='Your name' type="text" {...register("name", { required: true })} />
                <input name="companyName" className='w-100 py-2 my-2' placeholder="Company's name Designation" type="text" {...register("companyName", { required: true })} />
                <input name="review" className='w-100 py-2 my-2' placeholder='Description' type="text" {...register("review", { required: true })} />
                <input name="rating" className='w-100 py-2 my-2' placeholder='Your Ratings' type="number" {...register("rating", { required: true })} />
                <h5 className="text-secondary">Your Image</h5>
                <input name="imageURL" className='my-3' type="file" onChange={handleImageUpload} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input className='btn btn-brand-filled w-100' type="submit" value='Submit' />
            </form>
        </div>
    );
};

export default AddReview;