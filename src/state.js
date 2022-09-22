const user = {
    name: "Антон",
    lastname: "Городецкий",
    email: "darkSide@mail.ru",
    id: "1",
    about: "Антон Городецкий — маг, сотрудник «Ночного дозора» города Москвы. Ты понимаешь, как все это устроено? Я — нет! А есть старый программистский закон: «Работает — не трогай!»",
    avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
};

const users = {
    0: { name: "Геннадий", lastname: "Саушкин" },
    1: { name: "Константин", lastname: "Саушкин" },
    2: { name: "Алиса", lastname: "Донникова" },
    3: { name: "Егор", lastname: "Мартынов" },
    4: { name: "Алишер", lastname: "Ганиев" },
};

export function getUser() {
    return user;
}

export function getUsers() { //если бы была БД, то была бы async
    return users;
}