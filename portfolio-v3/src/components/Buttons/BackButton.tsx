import { MouseEvent } from 'react';
import { useNavigate } from 'react-router';
import { ReactComponent as BackIcon } from '../../assets/icons/Arrow-Left.svg';

export default function BackButton() {
    const navigate = useNavigate();

    const backToHome = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate('/')
    }

    return (
        <button onClick={backToHome} className='w-[48px] aspect-square rounded-full flex justify-center items-center bg-light'>
            <div className='w-[20px] text-white'><BackIcon /></div>
        </button>
    )
}