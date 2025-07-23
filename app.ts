const year: string = "1989";

const month: string = "09";

const day: string = "26";

const birthDate: Date = new Date(`${year}-${month}-${day}`);

const today: Date = new Date();

const calculateAge = (birthDate: Date, today: Date): string => {
    let age: number = today.getFullYear() - birthDate.getFullYear();

    const currentMonth: number = today.getMonth() + 1;
    const birthMonth: number = birthDate.getMonth() + 1;
    const currentDay: number = today.getDate();
    const birthDay: number = birthDate.getDate();

    if (currentMonth < birthMonth) {
        age -= 1;
    } else if (birthMonth === currentMonth) {
        if (currentDay < birthDay) {
            age -= 1;
        }
    }

    return `Su edad es ${age} años`;
};

console.log(calculateAge(birthDate, today));
