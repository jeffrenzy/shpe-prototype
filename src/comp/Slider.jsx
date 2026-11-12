import { Children, useEffect, useState } from 'react';
import './Slider.css';

function Slider({ children, cardsPerSlide = 3 }) {
    const cards = Children.toArray(children);
    const maxSlide = Math.ceil(cards.length / cardsPerSlide);

    const [currSlide, setCurrSlide] = useState(0);

    useEffect(() => {
        setCurrSlide((current) => Math.min(current, maxSlide - 1));
    }, [maxSlide]);

    const canSlideForward = currSlide < maxSlide - 1;
    const canSlideBack = currSlide > 0;

    const slides = [];

    for (let i = 0; i < cards.length; i += cardsPerSlide) {
        slides.push(cards.slice(i, i + cardsPerSlide));
    }

    function nextSlide() {
        if (canSlideForward) {
            setCurrSlide(currSlide + 1);
        }
    }

    function previousSlide() {
        if (canSlideBack) {
            setCurrSlide(currSlide - 1);
        }
    }

    return (
        <section className="slider">
            <div className="slider__window">
                <div
                    className="slider__track"
                    style={{
                        width: `${maxSlide * 100}%`,
                        transform: `translateX(-${(currSlide * 100) / maxSlide}%)`,
                    }}
                >
                    {slides.map((slideCards, slideIndex) => (
                        <div
                            className="slider__slide"
                            style={{ 
                                width: `${100 / maxSlide}%`,
                                '--cards-per-slide': cardsPerSlide
                            }}
                            key={slideIndex}
                        >
                            {slideCards.map((card, cardIndex) => (
                                <div className="slider__card" key={cardIndex}>
                                    {card}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="slider__controls">
                <button
                    type="button"
                    onClick={previousSlide}
                    disabled={!canSlideBack}
                >
                    Back
                </button>

                <button
                    type="button"
                    onClick={nextSlide}
                    disabled={!canSlideForward}
                >
                    Next
                </button>
            </div>
        </section>
    );
}

export default Slider;