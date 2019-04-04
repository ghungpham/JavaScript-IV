// CODE here for your Lambda Classes

class Person {
    constructor (PersonAttrs){
      this.name = PersonAttrs.name;
      this.age = PersonAttrs.age;
      this.location = PersonAttrs.location;
      this.gender = PersonAttrs.gender  
    }
    speak(){`Hello my name is ${this.name}, I am from ${this.location}`};
}

class Instructor extends Person {
    constructor (InstructAttrs){
        super(InstructAttrs);
        this.specialty = InstructAttrs.specialty;
        this.favLanguage = InstructAttrs.favLanguage;
        this.catchphrase = InstructAttrs.catchphrase
    }
    demo(subject){console.log("Today we are learning about " + subject)};
    grade(Student,subject){console.log(Student.name + " receives a perfect score on "+ subject)};
}

class Student extends Person {
    constructor (StudentAttrs){
        super(StudentAttrs);
        this.previousBackground = StudentAttrs.previousBackground;
        this.className = StudentAttrs.className;
        this.favSubjects = StudentAttrs.favSubjects;
    }
    listsSubjects(SubjArr){console.log(SubjArr)};
    PRAssignment(subject){console.log(`${Student.name} has submitted a PR for ${subject}`)};
    SprintChallenge(subject){console.log(`${Student.name} has begun sprint challenge on ${subject}`)};
}

class ProjectManager extends Instructor{
    constructor (PMAttrs){
        super(PMAttrs);
        this.gradClassName = PMAttrs.gradClassName;
        this.favInstructor = PMAttrs.favInstructor;
    }
    standUP(channel){console.log(`${ProjectManager.name} announces ${channel}, @${channel}  standby times!`)};
    debugCodes(Student, subject){`${ProjectManager.name} debugs ${Student.name}'s code on ${subject}`};
}
