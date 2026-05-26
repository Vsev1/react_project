import {useState} from "react";

function Popup({isOpen, closePopup}){

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const [nameValid, setNameValid] = useState(true);
    const [phoneValid, setPhoneValid] = useState(true);

    const [submitted, setSubmitted] = useState(false);

    const onPhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const onNameChange = (e) => {
        setName(e.target.value);
    };

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

        // if (isNameValid && isPhoneValid) {
        //     console.log(name, phone);
        //     closePopup();
        // }

        if (isNameValid && isPhoneValid) {
            try {
                const response = await fetch("http://localhost:5000/api/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        phone,
                    }),
                });

                const data = await response.json();
                console.log("Saved:", data);

                closePopup();

                setName("");
                setPhone("");
                console.log("sent");

            } catch (error) {
                console.error("Error:", error);
            }
        }
    };

    return(
        <div className={`contact__popup ${isOpen ? "active" : ""}`}>
            <div className="popup__frame">
                <div className="popup__close" onClick={closePopup}>
                    <span></span><span></span>
                </div>
                <div className="popup__content">
                    <h3 className="text-center">Заповніть форму нижче, щоб отримати консультацію експерта</h3>
                    <div className="popup__form">
                        <form onSubmit={handleSubmit} className="flex flex-col">
                            <div className="flex flex-col gap-2 mb-4">
                                <label>Ваше ім'я: <span className="required">*</span></label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={onNameChange}
                                    placeholder="Ваше ім'я"
                                    style={{ borderColor: submitted && !nameValid ? "red" : "" }}
                                />
                            </div>

                            <div className="flex flex-col gap-2 mb-6">
                                <label>Телефон: <span className="required">*</span></label>
                                <input
                                    type="text"
                                    value={phone}
                                    onChange={onPhoneChange}
                                    placeholder="Телефон"
                                    style={{ borderColor: submitted && !phoneValid ? "red" : "" }}
                                />
                            </div>
                            <button type="submit">Відправити</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="overlay"></div>
        </div>
    );
}

export default Popup;