/**
 * EXERCÍCIOS
 
 * Antes de começar, certifique-se de instalar as 
 * dependências do projeto utilizando "npm install"
 
 * Você pode executar o arquivo dos exercícios usando F5, e pode colocar breakpoints no lado esquerdo da linha
 
 /* 1- Crie um tipo para representar um objeto que contenha as suas informações de 
  nome, profissão, idade e uma lista de assuntos de seu interesse.
 */
type Student = {
  firstName: string;
  profession: string;
  age: number;
  interests: string[]
};

// 2 - Crie um objeto utilizando o tipo criado no exercício 1 e o popule de acordo com suas informações.

console.log("1- ", {
  firstName: "Josie",
  profession: "Programadora",
  age: 42,
  interests: "cursos de linguagens de programação, MJV, filmes, séries"
});

/* 3 - Faça uma função que receba como argumento um objeto do tipo do exercício 1, 
 e retorne somente a lista de assuntos do objeto.
 */
function listInterests(student: Student) {
  return student.interests
}

//4 - Coloque a tipagem tanto no argumento da função do exercício 3 quanto no tipo de retorno dela.

function listInterestsWithType(student: Student): string[] {
  return student.interests
}

// 5 - Crie um enum para representar as Matérias do curso (Angular, Typescript e Git)
enum materia {
  Angular = "Angular",
  Typescript = "Typescript",
  Git = "Git"
}

// 6 - Crie mais um tipo para representar os professores, contendo nome e uma lista das materias de cada um.
type Teacher = {
  name: string,
  subjects: string[]
}

/* 7 - Crie os objetos Alan e Nathan utilizando os tipos dos exercícios 5 e 6. 
 Nathan = Angular e Git, Alan = Angular, Typescript e Git
 */
const teacher1: Teacher = {
  name: "Alan",
  subjects: ['Angular', 'Git', 'TypeScript']
}

const teacher2 = {
  name: "Nathan",
  subjects: ['Angular', 'Git']
}

// 8 - Declare e popule um array com os objetos do exercício 7.

let teachers: Teacher[] = []
teachers.push(teacher1)
teachers.push(teacher2)

/* 9 - Faça uma função que receba um argumento de array de Professor.
 e retorne um novo array de strings contendo somente os nomes dos professores.
*/

function getTeachersName(teachers: Teacher[]): string[] {
  return teachers.map(function (teacher: Teacher): string {
    return teacher.name;
  });
}

const names: string[] = getTeachersName(teachers)

//10 - Faça uma função que receba um argumento de array de Professores e retorne um array de materias.

function getSubjectsByTeacherCollection(teachers: Teacher[]): string[] {
  let collection: string[] = [];

  teachers.forEach(function (teacher: Teacher) {
    teacher.subjects.forEach(function (subject: string) {
      collection.push(subject);
    });
  });

  return collection;
}

const subjects: string[] = getSubjectsByTeacherCollection(teachers)

/* 11 - Faça uma função que receba um argumento de array de Professores e 
retorne o primeiro Professor encontrado que dê aula de Typescript.
*/
function getFirstTypescriptTeacher(teachers: Teacher[]): Teacher | undefined {
  return teachers.find(function (teacher: any) {
    return teacher.subjects.includes("TypeScript")
  });
}

const teacher: Teacher | undefined = getFirstTypescriptTeacher(teachers);

console.log(teacher)