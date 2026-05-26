import { useState } from "react";

function FAQ() {
    const [selectedFaq, setSelectedFaq] = useState(null);

    const toggleFaq = (id) => {
        setSelectedFaq(selectedFaq === id ? null : id);
    };

    return (
        <section className="section__faq">
            <div className="container">
                <div className="faq__content">
                    <h2 className="pb-5">Поширені запитання</h2>
                    <ul className="faq__tabs">
                        <li className="faq__tab">
                            <button type="button" className="w-full py-5 cursor-pointer" onClick={() => toggleFaq(1)}>
                                <div className="flex items-center justify-between">
                                    <span className="faq__question">СКЛАДНІСТЬ РОЗУМІННЯ ВИМОГ</span>
                                    <div className={`transition-transform ${selectedFaq === 1 ? "rotate-180" : ""}`}>
                                        <svg viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="m1 1 4 4 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                                        </svg>
                                    </div>
                                </div>
                            </button>
                            <div className="faq__answer overflow-hidden transition-all duration-500" style={{ maxHeight: selectedFaq === 1 ? "200px" : "0px" }}>
                                <div className="pb-4">
                                    Проводимо комплексну експертизу проєктів...
                                </div>
                            </div>
                        </li>

                        <li className="faq__tab">
                            <button type="button" className="w-full py-5 cursor-pointer" onClick={() => toggleFaq(2)}>
                                <div className="flex items-center justify-between">
                                    <span className="faq__question">СТРАХ НЕУСПІШНОГО ПРОХОДЖЕННЯ</span>
                                    <div className={`transition-transform ${selectedFaq === 2 ? "rotate-180" : ""}`}>
                                        <svg viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="m1 1 4 4 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                                        </svg>
                                    </div>
                                </div>
                            </button>
                            <div className="faq__answer overflow-hidden transition-all duration-500" style={{ maxHeight: selectedFaq === 2 ? "200px" : "0px" }}>
                                <div className="pb-4">
                                    Маємо 7 років успішного досвіду...
                                </div>
                            </div>
                        </li>

                        <li className="faq__tab">
                            <button type="button" className="w-full py-5 cursor-pointer" onClick={() => toggleFaq(3)}>
                                <div className="flex items-center justify-between">
                                    <span className="faq__question">ЖОРСТКІ ТЕРМІНИ</span>
                                    <div className={`transition-transform ${selectedFaq === 3 ? "rotate-180" : ""}`}>
                                        <svg viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="m1 1 4 4 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                                        </svg>
                                    </div>
                                </div>
                            </button>
                            <div className="faq__answer overflow-hidden transition-all duration-500" style={{ maxHeight: selectedFaq === 3 ? "200px" : "0px" }}>
                                <div className="pb-4">
                                    Гарантовано дотримуємось термінів...
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default FAQ;