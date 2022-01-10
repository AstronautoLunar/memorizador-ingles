function randomColorRgb() {
    const randomNumber = () => {
        const VALUEMINIMUM = 50;
        const VALUEMAXIMUM = 255;

        return Math.floor(Math.random() * (VALUEMAXIMUM - VALUEMINIMUM) + VALUEMINIMUM);
    };
    
    const red = randomNumber();
    const green = randomNumber();
    const blue = randomNumber();

    return {
        alpha: `rgba(${red}, ${green}, ${blue}, 0.5)`,
        original: `rgb(${red}, ${green}, ${blue})`
    };
}