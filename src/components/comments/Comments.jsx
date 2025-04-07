import star from '../../images/comment/IMAGE (2).png';
import { Commente } from '../../featurs';
import './Comment.scss';

export default function Comments() {

    const comments = [
        {
            star: star,
            title: 'I can’t recommend this podcast enough',
            name: 'Betty Lacey'
        },
        {
            star: star,
            title: 'Jacob is the best in the business',
            name: 'Adam Driver'
        },
        {
            star: star,
            title: 'A wealth of audio knowledge',
            name: 'Marcus Brown'
        },
        {
            star: star,
            title: 'Every episode is a gem!',
            name: 'Jessica Knowl'
        },
        {
            star: star,
            title: 'Whoa whoa, let me take some notes!',
            name: 'Scott Adams'
        },
        {
            star: star,
            title: 'I’ve upped my game considerably since I started listening',
            name: 'Steven Blast'
        },
    ]

    return (
        <div className="comments-container">
            {
                comments && (
                    comments.map((comment) => (
                        <Commente
                            star={comment.star}
                            title={comment.title}
                            name={comment.name}
                        />
                    ))
                )
            }

        </div>
    )
}