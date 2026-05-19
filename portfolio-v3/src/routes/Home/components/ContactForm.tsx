import { ChangeEvent, useRef, useState } from "react";
import TextAreaInput from "../../../components/Inputs/TextAreaInput";
import TextInput from "../../../components/Inputs/TextInput";
import emailjs from '@emailjs/browser';
import { ReactComponent as ArrowRight } from '../../../assets/icons/Arrow-Right.svg';
import { ReactComponent as ArrowLeft } from '../../../assets/icons/Arrow-Left.svg';
import { ReactComponent as Check } from '../../../assets/icons/Check.svg';
import { motion, AnimatePresence } from 'motion/react';

interface ContactInfo {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const defaultForm: ContactInfo = {
    name: '',
    email: '',
    subject: '',
    message: '',
}

export default function ContactForm() {
    const form = useRef(null);
    const [ contactInfo, setContactInfo ] = useState<ContactInfo>(defaultForm);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isSuccess, setIsSuccess ] = useState(false);

    const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = e.target.name;
        const value = e.target.value;
        
        setContactInfo((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const sendEmail = async (e: any) => {
        e.preventDefault();

        setIsLoading(true);

        if (form.current) {
            await emailjs
            .sendForm("service_ug36rfu", "template_uu8j5dl", form.current, {
                publicKey: "MRFx3qzjDd3uk3HOq",
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setIsSuccess(true);
                },
                (error) => {
                    console.log('FAILED...', error);
                }
            )
        };

        setIsLoading(false);
    }

    const back = (e: any) => {
        e.preventDefault();
        setIsSuccess(false);
        setContactInfo(defaultForm);
    }



    return (
        <AnimatePresence mode="wait">
        <div className="w-full rounded-[16px] h-[600px] border border-outline bg-light p-8">
            <p className="text-[18px] font-semibold mb-8 text-white">Send me a message</p>
            {!isSuccess ? (
                <motion.form 
                    ref={form} 
                    onSubmit={sendEmail} 
                    className="w-full text-white flex flex-col justify-start items-start gap-8"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="flex flex-col justify-start items-start gap-6 w-full">
                        <div className="flex justify-between items-center gap-4 w-full">
                            <div className="w-1/2">
                                <TextInput 
                                    label="Name"
                                    handleChange={handleInput}
                                    id="name"
                                    value={contactInfo.name}
                                />
                            </div>
                            <div className="w-1/2">
                                <TextInput 
                                    label="Email"
                                    handleChange={handleInput}
                                    id="email"
                                    value={contactInfo.email}
                                    type="email"
                                />
                            </div>
                        </div>
                        <div className="w-full">
                            <TextInput 
                                label="Subject"
                                handleChange={handleInput}
                                id="subject"
                                value={contactInfo.subject}
                            />
                        </div>
                        <div className="w-full">
                            <TextAreaInput 
                                label="Message"
                                handleChange={handleInput}
                                id="message"
                                value={contactInfo.message}
                            />
                        </div>
                    </div>
                    <button
                        id="form-submit"
                        type="submit"
                        className="text-accent text-[14px] max-w-[160px] h-[45px] relative w-full flex justify-center items-center gap-2"
                    >
                        {isLoading ? (
                            <p>Sending...</p>
                        ) : (
                            <>
                                <p>Send message</p>
                                <div className="w-[16px] icon"><ArrowRight /></div>
                            </>
                        )}
                    </button>
                </motion.form>
            ) : (
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.3 }}
                    className="w-full flex flex-col justify-center items-center text-white text-center gap-4 py-4"
                >
                    <div className="w-[56px] aspect-square flex justify-center items-center rounded-full bg-dark">
                        <div className="w-[24px] text-white"><Check /></div>
                    </div>
                    <p className="text-[24px] font-semibold">Message received!</p>
                    <p className="text-[14px] text-secondary max-w-[200px] leading-[1.7] font-light">Thank you for reaching out. We'll be in touch shortly.</p>
                    <button id="form-back" onClick={back} className="flex justify-center items-center gap-2 text-[14px] text-white mt-8">
                        <div className="w-[16px] icon"><ArrowLeft /></div>
                        <p>Send another message</p>
                    </button>
                </motion.div>
            )}
        </div>
        </AnimatePresence>
    )
}