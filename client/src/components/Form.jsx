import {useState} from "react";
import Select from "react-select";

function Form(){
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [message, setMessage] = useState("");


    const [nameValid, setNameValid] = useState(true);
    const [phoneValid, setPhoneValid] = useState(true);
    const [optionValid, setOptionValid] = useState(true);

    const [submitted, setSubmitted] = useState(false);

    const validateName = (name) => name.length > 2;
    const validatePhone = (phone) => {
        const phoneRegex = /^(\+?380|0)\d{9}$/;
        return phoneRegex.test(phone);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);

        const isNameValid = validateName(name);
        const isPhoneValid = validatePhone(phone);

        setNameValid(isNameValid);
        setPhoneValid(isPhoneValid);

        if (isNameValid && isPhoneValid) {
            try {
                const response = await fetch("http://localhost:5000/api/request", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        phone,
                        email,
                        selectedOption,
                        message
                    }),
                });

                const data = await response.json();
                console.log("Saved big form request:", data);

                setName("");
                setPhone("");
                setEmail("");
                setSelectedOption("");
                setMessage("");
                setSubmitted(false);

            } catch (error) {
                console.error("Error sending form:", error);
            }
        }
    };

    return (
        <section className="section__form" id="section__form">
            <div className="container">
                <div className="form__content">
                    <h2>Надішліть ваш запит зручним для вас способом</h2>
                    <div className="form__text flex flex-col space-y-16 lg:flex-row lg:space-y-0 lg:space-x-20">
                        <div data-aos="fade-right" className="form__info flex flex-col space-y-6 w-full lg:w-1/2">
                            <div className="form__telephone flex flex-col space-y-1">
                                <p>Телефонуйте нам з понеділка по п'ятницю з 9.00 до 18.00:</p>
                                <a href="tel:0630000000">+380 (63) 000 00 00</a>
                            </div>
                            <div className="form__mail">
                                <p>Напишіть нам на електронну адресу у будь-який час:</p>
                                <a href="mailto:test@gmail.com">test@gmail.com</a>
                            </div>
                            <div className="form__medias flex flex-col space-y-1">
                                <p>Ми в соц мережах:</p>
                                <div className="contacts__medias flex gap-2">
                                    <a target="_blank" href="https://www.google.com/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                            <g clipPath="url(#clip0_48_107)">
                                                <path d="M17 20.4863C18.9254 20.4863 20.4863 18.9254 20.4863 17C20.4863 15.0746 18.9254 13.5137 17 13.5137C15.0746 13.5137 13.5137 15.0746 13.5137 17C13.5137 18.9254 15.0746 20.4863 17 20.4863Z" fill="#F9FAFB"/>
                                                <path d="M17 0.398438C7.83122 0.398438 0.398438 7.83122 0.398438 17C0.398438 26.1688 7.83122 33.6016 17 33.6016C26.1688 33.6016 33.6016 26.1688 33.6016 17C33.6016 7.83122 26.1688 0.398438 17 0.398438ZM27.257 21.2195C27.1773 22.7978 26.7338 24.3542 25.5835 25.4922C24.4222 26.6411 22.8584 27.0691 21.2648 27.148H12.7353C11.1415 27.0691 9.57791 26.6413 8.41653 25.4922C7.26624 24.3542 6.82278 22.7978 6.74309 21.2195V12.7805C6.82278 11.2022 7.2663 9.64577 8.41653 8.5077C9.57791 7.35887 11.1417 6.93082 12.7353 6.852H21.2647C22.8585 6.93082 24.4221 7.35868 25.5835 8.5077C26.7338 9.64577 27.1772 11.2022 27.2569 12.7805L27.257 21.2195Z" fill="#F9FAFB"/>
                                                <path d="M21.1571 8.77515C19.0796 8.71818 14.9212 8.71818 12.8436 8.77515C11.7624 8.80484 10.5368 9.07398 9.76647 9.89676C8.96601 10.752 8.66353 11.7853 8.63285 12.9412C8.57893 14.9701 8.63285 21.0595 8.63285 21.0595C8.66798 22.2153 8.96601 23.2487 9.76647 24.104C10.5368 24.927 11.7624 25.1959 12.8436 25.2256C14.9212 25.2826 19.0796 25.2826 21.1571 25.2256C22.2383 25.1959 23.464 24.9267 24.2343 24.104C25.0347 23.2487 25.3372 22.2154 25.3679 21.0595V12.9412C25.3372 11.7853 25.0347 10.752 24.2343 9.89676C23.4637 9.07372 22.238 8.80484 21.1571 8.77515ZM17.0001 22.4042C15.9313 22.4042 14.8866 22.0872 13.9979 21.4935C13.1093 20.8997 12.4166 20.0557 12.0076 19.0683C11.5986 18.0809 11.4916 16.9944 11.7001 15.9461C11.9086 14.8979 12.4233 13.935 13.179 13.1793C13.9348 12.4236 14.8976 11.9089 15.9459 11.7004C16.9941 11.4919 18.0806 11.5989 19.0681 12.0079C20.0555 12.4169 20.8994 13.1095 21.4932 13.9982C22.087 14.8868 22.4039 15.9316 22.4039 17.0004C22.4039 18.4335 21.8346 19.808 20.8212 20.8214C19.8078 21.8348 18.4333 22.4042 17.0001 22.4042ZM22.4269 12.712C22.2131 12.7119 22.0042 12.6485 21.8265 12.5297C21.6488 12.4109 21.5103 12.2421 21.4286 12.0446C21.3468 11.8471 21.3255 11.6298 21.3672 11.4202C21.4089 11.2106 21.5119 11.018 21.663 10.8669C21.8142 10.7158 22.0068 10.6129 22.2164 10.5712C22.426 10.5295 22.6433 10.5509 22.8408 10.6328C23.0383 10.7146 23.2071 10.8531 23.3258 11.0308C23.4445 11.2085 23.5079 11.4175 23.5079 11.6312C23.5079 11.7732 23.48 11.9137 23.4256 12.0449C23.3713 12.176 23.2917 12.2952 23.1913 12.3955C23.0909 12.4959 22.9717 12.5755 22.8406 12.6298C22.7094 12.6841 22.5688 12.712 22.4269 12.712Z" fill="#F9FAFB"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_48_107">
                                                    <rect width="34" height="34" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                    <a target="_blank" href="https://www.google.com/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                            <g clipPath="url(#clip0_48_111)">
                                                <path d="M17 0C13.6377 0 10.3509 0.997033 7.55531 2.86502C4.75968 4.733 2.58075 7.38804 1.29406 10.4944C0.00736579 13.6007 -0.329291 17.0189 0.326658 20.3165C0.982607 23.6142 2.6017 26.6433 4.97919 29.0208C7.35669 31.3983 10.3858 33.0174 13.6835 33.6734C16.9811 34.3293 20.3993 33.9926 23.5056 32.706C26.612 31.4193 29.267 29.2403 31.135 26.4447C33.003 23.6491 34 20.3623 34 17C34 12.4913 32.2089 8.1673 29.0208 4.97919C25.8327 1.79107 21.5087 0 17 0ZM21.8361 11.0634C21.8361 11.3833 21.7019 11.5108 21.3887 11.5108C20.787 11.5108 20.1853 11.5108 19.5858 11.5354C18.9863 11.56 18.6597 11.8329 18.6597 12.4592C18.6463 13.1303 18.6597 13.7879 18.6597 14.4724H21.2344C21.6012 14.4724 21.7265 14.5976 21.7265 14.9667C21.7265 15.8615 21.7265 16.7607 21.7265 17.6643C21.7265 18.0289 21.6101 18.143 21.2411 18.1453H18.6374V25.424C18.6374 25.8132 18.5166 25.9362 18.1318 25.9362H15.3313C14.9936 25.9362 14.8616 25.8042 14.8616 25.4664V18.1564H12.6382C12.2892 18.1564 12.164 18.0289 12.164 17.6778C12.164 16.7726 12.164 15.8682 12.164 14.9645C12.164 14.6155 12.2959 14.4836 12.6404 14.4836H14.8616V12.5263C14.8352 11.6471 15.0462 10.7771 15.4722 10.0076C15.9152 9.23079 16.6249 8.64106 17.4697 8.3479C18.018 8.1484 18.5975 8.04841 19.1809 8.05263H21.3797C21.6951 8.05263 21.8271 8.19132 21.8271 8.5C21.8383 9.36119 21.8383 10.2134 21.8361 11.0634Z" fill="#F9FAFB"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_48_111">
                                                    <rect width="34" height="34" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                    <a target="_blank" href="https://www.google.com/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                            <g clipPath="url(#clip0_48_115)">
                                                <path d="M17 0C7.61175 0 0 7.61069 0 17C0 26.3883 7.61175 34 17 34C26.3883 34 34 26.3883 34 17C34 7.61069 26.3883 0 17 0ZM12.5842 23.6693H9.11625V13.2356H12.5842V23.6693ZM10.8503 11.8108H10.8279C9.66344 11.8108 8.91119 11.0086 8.91119 10.0077C8.91119 8.9845 9.68681 8.20569 10.8726 8.20569C12.0583 8.20569 12.7893 8.9845 12.8116 10.0077C12.8116 11.0096 12.0583 11.8108 10.8503 11.8108ZM25.0888 23.6693H21.6208V18.0869C21.6208 16.6844 21.1193 15.7282 19.8634 15.7282C18.9061 15.7282 18.3356 16.3731 18.0848 16.9968C17.9934 17.2199 17.9701 17.5312 17.9701 17.8426V23.6693H14.5031C14.5031 23.6693 14.5488 14.2152 14.5031 13.2356H17.9711V14.7135C18.4312 14.0027 19.2557 12.9901 21.097 12.9901C23.3782 12.9901 25.0888 14.4819 25.0888 17.6864V23.6693Z" fill="#F9FAFB"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_48_115">
                                                    <rect width="34" height="34" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-left" className="form__block w-full lg:w-1/2">
                            <h3>Залиште заявку та очікуйте відповіді менеджера</h3>
                            <div className="flex flex-col w-full mt-5">
                                <form onSubmit={handleSubmit} className="flex flex-col">
                                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                        <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                            <label>Ваше ім'я: <span className="required">*</span></label>
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                placeholder="Имя"
                                                style={{ borderColor: submitted && !nameValid ? "red" : "" }}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                            <label>Телефон: <span className="required">*</span></label>
                                            <input
                                                type="text"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                placeholder="Телефон"
                                                style={{ borderColor: submitted && !phoneValid ? "red" : "" }}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                        <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                            <label>Ваше email: </label>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Email"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2 w-full lg:w-1/2">
                                            <label>Виберіть послугу: <span className="required">*</span></label>
                                            <Select
                                                options={[
                                                    { value: "1", label: "Послуга 1" },
                                                    { value: "2", label: "Послуга 2" },
                                                    { value: "3", label: "Послуга 3" },
                                                ]}
                                                value={selectedOption}
                                                onChange={setSelectedOption}
                                                placeholder="Виберіть послугу"
                                                styles={{
                                                    control: (base, state) => ({
                                                        ...base,
                                                        backgroundColor: "transparent",
                                                        borderRadius: "20px",
                                                        minHeight: "48px",
                                                        padding: "0 15px",
                                                        boxShadow: "none",
                                                        cursor: "pointer",
                                                        border: "1px solid #F9FAFB",

                                                        "&:hover": {
                                                            border: "1px solid #F9FAFB",
                                                        },

                                                        borderColor: "#F9FAFB",
                                                    }),

                                                    input: (base) => ({
                                                        ...base,
                                                        margin: 0,
                                                        padding: 0,
                                                    }),

                                                    valueContainer: (base) => ({
                                                        ...base,
                                                        padding: "0px",
                                                    }),

                                                    singleValue: (base) => ({
                                                        ...base,
                                                        color: "rgba(249, 250, 251, 0.6)",
                                                    }),

                                                    placeholder: (base) => ({
                                                        ...base,
                                                        color: "rgba(249, 250, 251, 0.6)",
                                                    }),

                                                    menu: (base) => ({
                                                        ...base,
                                                        backgroundColor: "#111",
                                                        borderRadius: "12px",
                                                        overflow: "hidden",
                                                    }),

                                                    option: (base, state) => ({
                                                        ...base,
                                                        backgroundColor: state.isFocused ? "#222" : "#111",
                                                        color: "#F9FAFB",
                                                        cursor: "pointer",
                                                    }),

                                                    dropdownIndicator: (base) => ({
                                                        ...base,
                                                        color: "#F9FAFB",
                                                        opacity: 0.6,

                                                        "&:hover": {
                                                            color: "#F9FAFB",
                                                            opacity: 0.6,
                                                        }
                                                    }),

                                                    indicatorSeparator: () => ({
                                                        display: "none",
                                                    }),
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 w-full mb-6">
                                        <label>Ваш коментар: </label>
                                        <textarea className="w-full"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder="Повідомлення"
                                        />
                                    </div>
                                    <button className="w-full" type="submit">Відправити</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Form;

