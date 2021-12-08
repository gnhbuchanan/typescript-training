// const person: {
//     name: string;
//     age: number;
// } = {

// const person: {
//     name: string,
//     age: number, 
//     hobbies: string[],
//     role: [number, string]
// } = {
//     name: 'Gustaf',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// }

enum Role {ADMIN = 1, READ_ONLY, AUTHOR}

const person = {
    name: 'Gustaf',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
}

// person.role.push('adim')
// person.role[1] = 10

// person.role = [3,'test', 4]


let favoriteActivies: string[]
favoriteActivies = ['running']
console.log(person.name)

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
    // console.log(hobby.map) // !! ERROR !!!
}