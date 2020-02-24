# Matrix Project - Frontend
Exercise for the Matrix Project third edition - Leveling phase


The Matrix Project needs a system to manage participants and their grades.
The registration of students has the following fields: name, surname, email, age, gender, grade and if it is approved.

Data type of each field:
name, surname and email: String
age, sex and grade: Number (gender must be 1 - Male, 2 - Female)
approved: Boolean

The data will be stored in an Array.
In this system, mentors will add and remove participants.
To search for participants, searches will be made within the array and you must search for:
- name
- email
- sex
- approved | failed

* "email" is the primary key. It can't have two registrations with the same email.
In case the mentor tries to add a duplicate participant, the system should issue an error, informing that there is already a participant with the email in question within the base.

The participant is represented by an Object in JavaScript, as shown in the example:

participant var = {
	name: "João",
	surname: "Mendes",
	age: 56,
	gender: 1,
	note: 90,
	approved: true
}

Topics that will be worked on in this exercise:
- Functions creation;
- Work with objects (creation, instantiation, properties definition);
- Array operations (insert, remove, search, add some value, sort, sort by specific values);
- Modularization: (return objects with functions and properties);

The code has already been started and now you must finish it.
Fork the https://github.com/UnicariocaDev/ProjetoMatrix-Frontend repository and edit the sistema.js file.
Use unit tests (tests.js) to ensure that the implementation is working and create additional tests for the rest of the functionality if you think it's necessary.

Warnings
- Do not change the name of the functions or the properties of the Object;
- Do not delete unit tests;
- Code that has not been tested will lose points;
- To run the unit tests, just open the index.html file;
- This is part 1 of the exercise, so whoever does not do this part will not be able to do part 2.
