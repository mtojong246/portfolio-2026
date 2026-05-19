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
        <button onClick={backToHome} className='w-[48px] aspect-square rounded-full flex justify-center items-center text-white hover:text-accent bg-light border border-light hover:border-accent transition-all'>
            <div className='w-[20px]'><BackIcon /></div>
        </button>
    )
}