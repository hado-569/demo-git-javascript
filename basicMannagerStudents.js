var fs = require('fs');
var readLineSync = require('readline-sync');
var listStudent=[];

function Student(name,age,sex,classes){
	this.name=name;
	this.age= age;
	this.sex= sex;
	this.classes= classes;
};
function ShowAll(){
	var showAllList= fs.readFileSync('./listStudents.json',{encoding:'utf8'});
	listStudent = JSON.parse(showAllList);
	for(var list of listStudent){
		console.log(list.name, list.age, list.sex, list.classes);
	}
};
function Create(){
	var Name = readLineSync.question("Student'name:");
	var Age = readLineSync.question("Student'age:");
	var Sex = readLineSync.question("Student'sex:");
	var Classes = readLineSync.question("Student'classes:");
	var s = new Student(Name,Age,Sex,Classes);
	listStudent.push(s);
};
function Save(){
	var listStudentString = JSON.stringify(listStudent);
	fs.writeFileSync('./listStudents.json',listStudentString);
};
do{
	console.log('1. Show all Student 2. Create Student 3. Save and exit');
	var choose = readLineSync.question('Choose your option: ');
	switch(choose) {
		case '1' :
				ShowAll();
			break;
		case '2' :
				Create();
			break;
		case '3' :
				Save();
			break;
		default:
			console.log('Try other option !');
	}

}while(choose!=='3');





