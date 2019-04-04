// CODE here for your Lambda Classes

class Person {
    constructor (PersonAttrs){
      this.name = PersonAttrs.name;
      this.age = PersonAttrs.age;
      this.location = PersonAttrs.location;
      this.gender = PersonAttrs.gender  
    }
    speak(){console.log(`Hello my name is ${this.name}, I am from ${this.location}`)};
}

class Instructor extends Person {
    constructor (InstructAttrs){
        super(InstructAttrs);
        this.specialty = InstructAttrs.specialty;
        this.favLanguage = InstructAttrs.favLanguage;
        this.catchphrase = InstructAttrs.catchphrase
    }
    demo(subject){console.log(`Today we are learning about ${subject}`)};
    grade(Student, subject){console.log(`${Student.name} receives a perfect score on ${subject}`)};
}

class Student extends Person {
    constructor (StudentAttrs){
        super(StudentAttrs);
        this.previousBackground = StudentAttrs.previousBackground;
        this.className = StudentAttrs.className;
        this.favSubjects = StudentAttrs.favSubjects;
    }
    listsSubjects(){this.favSubjects.forEach(subject =>{console.log(subject);})};
    PRAssignment(subject){console.log(`${this.name} has submitted a PR for ${subject}`)};
    SprintChallenge(subject){console.log(`${this.name} has begun sprint challenge on ${subject}`)};
}

class ProjectManager extends Instructor{
    constructor (PMAttrs){
        super(PMAttrs);
        this.gradClassName = PMAttrs.gradClassName;
        this.favInstructor = PMAttrs.favInstructor;
    }
    standUP(channel){console.log(`${this.name} announces ${channel}, @${channel} standby times!`)};
    debugCodes(Student, subject){console.log(`${this.name} debugs ${Student.name}'s code on ${subject}`)};
}

const terrence = new Instructor({
    name: 'Terry',
    location: 'Los Angeles',
    age: 43,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Computer Science',
    catchPhrase: `This is a fascinating problem`,
  });

  const mindy = new Instructor({
    name: 'Mindy',
    location: 'Salt Lake City',
    age: 35,
    gender: 'male',
    favLanguage: 'CSS/JavaScript',
    specialty: 'Front-end',
    catchPhrase: `I will talk very slowly at this part`,
  });

  const christie = new ProjectManager({
    name: 'Christie',
    location: 'New Orleans',
    age: 23,
    gender: 'female',
    favLanguage: 'React',
    specialty: 'Front-end',
    catchPhrase: `You can do it!`,
    gradClassName: 'Underfoot',
    favInstructor: 'Terrence',
  });

  const bryan = new ProjectManager({
    name: 'Bryan',
    location: 'Missoula',
    age: 35,
    gender: 'Male',
    favLanguage: 'Node.js',
    specialty: 'Backend',
    catchPhrase: `This is a peculiar problem!`,
    gradClassName: 'KeenSolvers',
    favInstructor: 'Mindy',
  });

  const linda = new Student({
    name: 'Linda',
    location: 'Columbus, OH',
    age: 25,
    gender: 'female',
    previousBackground: 'Retail',
    className: 'Underfoot',
    favSubjects: ['Economics', 'Design', 'Comic Books'],
  });

  const kerry = new Student({
    name: 'Kerry',
    location: 'NYC',
    age: 45,
    gender: 'male',
    previousBackground: 'Chemistry',
    className: 'KeenSolvers',
    favSubjects: ['Politics', 'Business', 'Cooking'],
  });

  terrence.speak();
  console.log(kerry.name);
  kerry.listsSubjects();
  terrence.grade(kerry,"Javascript Fundamentals");
  terrence.demo("React 1");
  linda.PRAssignment("CSS III");
  kerry.SprintChallenge("Applied Javascript");
  christie.standUP("web19");
  christie.debugCodes(linda, "Redux");