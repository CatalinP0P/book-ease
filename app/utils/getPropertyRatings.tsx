import { ReviewProps, RoomsProps } from '../(models)/Property'

export default function getPropertyRating(reviews: ReviewProps[]) {
    if (reviews.length <= 0) return 0

    var sum = 0
    reviews.forEach((review) => {
        sum += review.rating
    })

    return sum / reviews.length;
}
