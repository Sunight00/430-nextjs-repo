'use client'
import { useEffect, useState } from "react";
import { getRatings } from '@/app/lib/actions';
type Review = {
  id: number;
  commentor: string;
  ratings: number;
  reviews: string;
};
export function Rating( {productId}: {productId: number} ) {
    const [ratings, setRatings] = useState<Review[]>([]);

    useEffect(() => {
    getRatings(productId).then(setRatings);
    }, [productId]);

    return(
        <div>
            <h1>Reviews and Ratings</h1>
            <div className="text-left">
                {ratings.map((review)=>(
                    <div key={review.id}>
                        <p>Name: {review.commentor}</p>
                        <p>Rating: {review.ratings}</p>
                        <p>Review: {review.reviews}</p>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}