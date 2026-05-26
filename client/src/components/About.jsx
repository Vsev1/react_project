import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
import about4 from "../assets/about4.jpg";

function About() {
    return (
        <section className="section__about sectiom__first">
            <div className="container">
                <div className="about__content">
                    <h2>Вирішуємо питання будь-якої складності</h2>
                    <div className="about__text flex flex-col space-y-16 sm:space-y-20">
                        <div className="issue">
                            <div className="issue__image" data-aos="fade-right">
                                <img src={about1}/>
                                <div data-aos-delay="200" className="image__decor"></div>
                            </div>
                            <div className="issue__description">
                                <div className="issue__name" data-aos="fade-left">
                                    <div className="issue__label">Проблема:</div>
                                    <h3>Складність розуміння вимог та підготовки документації</h3>
                                </div>
                                <div className="issue__solutions" data-aos="fade-left" data-aos-delay="100">
                                    <div className="issue__label">Вирішення:</div>
                                    <ul className="flex flex-col space-y-2.5 list-disc">
                                        <li><span>проводимо комплексну експертизу проектів будь-якої складності</span></li>
                                        <li><span>допомагаємо у правильному оформлені всієї необхідної документації</span></li>
                                        <li><span>покроково супроводжуємо на всіх етапах</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="issue">
                            <div className="issue__description">
                                <div className="issue__name" data-aos="fade-right">
                                    <div className="issue__label">Проблема:</div>
                                    <h3>Страх неуспішного проходження експертизи</h3>
                                </div>
                                <div className="issue__solutions" data-aos="fade-right" data-aos-delay="100">
                                    <div className="issue__label">Вирішення:</div>
                                    <ul className="flex flex-col space-y-2.5 list-disc">
                                        <li><span>маємо 7 років успішного досвіду на ринку</span></li>
                                        <li><span>над вашим проектом працюватиме команда сертифікованих експертів</span></li>
                                        <li><span>наша компанія відповідає критеріям, що визначені Міністерством регіонального розвитку, будівництва та житлово-комунального господарства України</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="issue__image" data-aos="fade-left">
                                <img src={about2}/>
                                <div data-aos-delay="200" className="image__decor"></div>
                            </div>
                        </div>
                        <div className="issue">
                            <div className="issue__image" data-aos="fade-right">
                                <img src={about3}/>
                                <div data-aos-delay="200" className="image__decor"></div>
                            </div>
                            <div className="issue__description">
                                <div className="issue__name" data-aos="fade-left">
                                    <div className="issue__label">Проблема:</div>
                                    <h3>Жорсткі терміни</h3>
                                </div>
                                <div className="issue__solutions" data-aos="fade-left" data-aos-delay="100">
                                    <div className="issue__label">Вирішення:</div>
                                    <ul className="flex flex-col space-y-2.5 list-disc">
                                        <li><span>гарантовано дотримуємось термінів проведення експертизи</span></li>
                                        <li><span>наша електронна система спрощує процес експертизи та комунікацію з клієнтом</span></li>
                                        <li><span>оперативно реагуємо на запити</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="issue">
                            <div className="issue__description">
                                <div className="issue__name" data-aos="fade-right">
                                    <div className="issue__label">Проблема:</div>
                                    <h3>Потреба в консультаціях та професійних порадах</h3>
                                </div>
                                <div className="issue__solutions" data-aos="fade-right" data-aos-delay="100">
                                    <div className="issue__label">Вирішення:</div>
                                    <ul className="flex flex-col space-y-2.5 list-disc">
                                        <li><span>робимо безкоштовний попередній аналіз проекту</span></li>
                                        <li><span>надаємо фахові консультації на всіх етапах</span></li>
                                        <li><span>допомагаємо в оформленні документації</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="issue__image" data-aos="fade-left">
                                <img src={about4}/>
                                <div data-aos-delay="200" className="image__decor"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;