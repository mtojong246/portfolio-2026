import TextAreaInput from "../../../components/Inputs/TextAreaInput";
import TextInput from "../../../components/Inputs/TextInput";

export default function ContactForm() {
    return (
        <form className="w-full rounded-[16px] border border-outline bg-light text-white flex flex-col justify-start items-start gap-8 p-8">
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
        </form>
    )
}