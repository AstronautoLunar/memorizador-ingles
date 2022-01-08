function createTodayDate(): string {
    const date = new Date();

    const currentDate = date.toLocaleDateString();
    const currentTime = date.toLocaleTimeString();

    const currentToday = `${currentDate}-${currentTime}`;

    const arrayLetter = currentToday.split("");

    const newArrayLetter = arrayLetter.map(item => {
        if(item === "/" || item === ":") {
            return "-";
        } else {
            return item;
        }
    });

    const newCurrentToday = newArrayLetter.join("");

    return newCurrentToday;
}

export default createTodayDate;