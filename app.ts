interface BirthDateParts {
    year: string;
    month: string;
    day: string;
}

const input: BirthDateParts = {
    year: "1989",
    month: "09",
    day: "26",
};

const birthDate: Date = new Date(`${input.year}-${input.month}-${input.day}`);

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
