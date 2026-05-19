import { useRef } from "react";
import TextAreaInput from "../../../components/Inputs/TextAreaInput";
import TextInput from "../../../components/Inputs/TextInput";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const form = useRef(null);

    const sendEmail = async (e: any) => {
        e.preventDefault();

        if (form.current) {
            await emailjs
            .sendForm("service_ug36rfu", "template_uu8j5dl", form.current, {
                publicKey: process.env.REACT_APP_EMAILJS_API_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            )
        }
    }

    return (
        <form ref={form} onSubmit={sendEmail} className="w-full rounded-[16px] h-[600px] border border-outline bg-light text-white flex flex-col justify-start items-start gap-8 p-8">
            <p className="text-[18px] font-semibold">Send me a message</p>
            <div className="flex flex-col justify-start items-start gap-6 w-full">
                <div className="flex justify-between items-center gap-4 w-full">
                    <div className="w-1/2">
                        <TextInput 
                            label="Name"
                            value=""
                            handleChange={(e:any) => {}}
                            id="name"
                        />
                    </div>
                    <div className="w-1/2">
                        <TextInput 
                            label="Email"
                            value=""
                            handleChange={(e:any) => {}}
                            id="email"
                        />
                    </div>
                </div>
                <div className="w-full">
                    <TextInput 
                        label="Subject"
                        value=""
                        handleChange={(e:any) => {}}
                        id="subject"
                    />
                </div>
                <div className="w-full">
                    <TextAreaInput 
                        label="Message"
                        value=""
                        handleChange={(e:any) => {}}
                        id="message"
                    />
                </div>
            </div>
            <input
                id="form-submit"
                type="submit"
                className="text-accent text-[14px] max-w-[160px] h-[45px] relative w-full"
                value="Send"
            />
        </form>
    )
}