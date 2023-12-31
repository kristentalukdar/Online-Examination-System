DROP DATABASE OESDBNEW;

CREATE DATABASE IF NOT EXISTS OESDBNEW;

USE OESDBNEW;

DROP TABLE IF EXISTS Subject;

CREATE TABLE Subject(
 	ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
     NAME VARCHAR(50) NOT NULL,
     DESCRIPTION VARCHAR(255)
);

-- DELETE FROM Exam;
-- DELETE FROM Question;
-- DELETE FROM Subject;
-- DELETE FROM Teacher;
-- DELETE FROM Student;


INSERT INTO Subject(NAME, DESCRIPTION) VALUES ('Python', 'Python-Desc');
INSERT INTO Subject(NAME, DESCRIPTION) VALUES ('C++', 'C++-Desc');
INSERT INTO Subject(NAME, DESCRIPTION) VALUES ('Java', 'Java-Desc');
INSERT INTO Subject(NAME, DESCRIPTION) VALUES ('HTML', 'HTML-Desc');
INSERT INTO Subject(NAME, DESCRIPTION) VALUES ('JavaScript', 'JavaScript-Desc');
INSERT INTO Subject(NAME, DESCRIPTION) VALUES ('SQL', 'SQL-Desc');
INSERT INTO Subject(NAME, DESCRIPTION) VALUES ('MySQL', 'MySQL-Desc');
INSERT INTO Subject(NAME, DESCRIPTION) VALUES ('Operating System', 'Operating System-Desc');
INSERT INTO Subject(NAME, DESCRIPTION) VALUES ('Artificial Intelligence', 'Artificial Intelligence-Desc');
INSERT INTO Subject(NAME, DESCRIPTION) VALUES ('CSS', 'CSS-Desc');
INSERT INTO Subject(NAME, DESCRIPTION) VALUES ('Data Structure', 'Data Structure-Desc');
INSERT INTO Subject(NAME, DESCRIPTION) VALUES ('Could Computing', 'Could Computing-Desc');
INSERT INTO Subject(NAME, DESCRIPTION) VALUES ('Unix', 'Unix-Desc');
INSERT INTO Subject(NAME, DESCRIPTION) VALUES ('PHP', 'PHP-Desc');
INSERT INTO Subject(NAME, DESCRIPTION) VALUES ('Data Science', 'Data Science-Desc');

DROP TABLE IF EXISTS Question;

CREATE TABLE Question(
	ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    SUBJECT_ID INT,
    QUESTION VARCHAR(255) NOT NULL,
    CHOICE1 VARCHAR(255) NOT NULL,
    CHOICE2 VARCHAR(255) NOT NULL,
    CHOICE3 VARCHAR(255) NOT NULL,
    CHOICE4 VARCHAR(255) NOT NULL,
    CHOICE1CORRECT boolean NOT NULL,
    CHOICE2CORRECT boolean NOT NULL,
    CHOICE3CORRECT boolean NOT NULL,
    CHOICE4CORRECT boolean NOT NULL,
    MARK INT
);

TRUNCATE TABLE Question;

INSERT INTO Question(SUBJECT_ID, QUESTION, CHOICE1, CHOICE2, CHOICE3, CHOICE4, CHOICE1CORRECT, CHOICE2CORRECT, CHOICE3CORRECT, CHOICE4CORRECT, MARK) 
SELECT ID, 
'Python is an',
'interpreted, high-level, general-purpose programming language',
'object-oriented programming language',
'procedural, functional, structured, and reflective programming language',
'All the above',
0, 
0, 
0, 
1, 
1 
FROM SUBJECT WHERE NAME='Python';


INSERT INTO Question(SUBJECT_ID, QUESTION, CHOICE1, CHOICE2, CHOICE3, CHOICE4, CHOICE1CORRECT, CHOICE2CORRECT, CHOICE3CORRECT, CHOICE4CORRECT, MARK) 
SELECT ID, 
'Python is designed by',
'Guido van Rossum',
'James Gosling',
'Dennis Ritchie',
'Google',
0, 
1, 
0, 
0, 
1 
FROM SUBJECT WHERE NAME='Python';


INSERT INTO Question(SUBJECT_ID, QUESTION, CHOICE1, CHOICE2, CHOICE3, CHOICE4, CHOICE1CORRECT, CHOICE2CORRECT, CHOICE3CORRECT, CHOICE4CORRECT, MARK) 
SELECT ID, 
'Python first appeared in',
'January 1982',
'February 1991',
'December 1987',
'July 2001',
0, 
1, 
0, 
0, 
1 
FROM SUBJECT WHERE NAME='Python';


INSERT INTO Question(SUBJECT_ID, QUESTION, CHOICE1, CHOICE2, CHOICE3, CHOICE4, CHOICE1CORRECT, CHOICE2CORRECT, CHOICE3CORRECT, CHOICE4CORRECT, MARK) 
SELECT ID, 
'Python filename extensions is/are',
'.py',
'.pyi',
'.pyc and .pyd',
'All the above',
0, 
0, 
0, 
1, 
1 
FROM SUBJECT WHERE NAME='Python';


INSERT INTO Question(SUBJECT_ID, QUESTION, CHOICE1, CHOICE2, CHOICE3, CHOICE4, CHOICE1CORRECT, CHOICE2CORRECT, CHOICE3CORRECT, CHOICE4CORRECT, MARK) 
SELECT ID, 
'Python influenced by',
'C and C++',
'Java and Perl',
'Lisp and Haskell',
'All the above',
0, 
0, 
0, 
1, 
1 
FROM SUBJECT WHERE NAME='Python';


INSERT INTO Question(SUBJECT_ID, QUESTION, CHOICE1, CHOICE2, CHOICE3, CHOICE4, CHOICE1CORRECT, CHOICE2CORRECT, CHOICE3CORRECT, CHOICE4CORRECT, MARK) 
SELECT ID, 
'Python influenced',
'Apache Groovy',
'JavaScript',
'Ruby and Swift',
'All the above',
0, 
0, 
0, 
1, 
1 
FROM SUBJECT WHERE NAME='Python';


INSERT INTO Question(SUBJECT_ID, QUESTION, CHOICE1, CHOICE2, CHOICE3, CHOICE4, CHOICE1CORRECT, CHOICE2CORRECT, CHOICE3CORRECT, CHOICE4CORRECT, MARK) 
SELECT ID, 
'Python developed as a successor of',
'Java',
'Lisp',
'ABC',
'C',
0, 
0, 
1, 
0, 
1 
FROM SUBJECT WHERE NAME='Python';


INSERT INTO Question(SUBJECT_ID, QUESTION, CHOICE1, CHOICE2, CHOICE3, CHOICE4, CHOICE1CORRECT, CHOICE2CORRECT, CHOICE3CORRECT, CHOICE4CORRECT, MARK) 
SELECT ID, 
'Which of the following is a correct program to print Hello World as output ?',
'print("Hello, World!")',
'printf("Hello, World!")',
'console("Hello, World!")',
'put("Hello, World!")',
1, 
0, 
0, 
0, 
1 
FROM SUBJECT WHERE NAME='Python';


INSERT INTO Question(SUBJECT_ID, QUESTION, CHOICE1, CHOICE2, CHOICE3, CHOICE4, CHOICE1CORRECT, CHOICE2CORRECT, CHOICE3CORRECT, CHOICE4CORRECT, MARK) 
SELECT ID, 
'Python is used for',
'web development (server-side) and software development',
'mathematics and system scripting',
'Both the above',
'None of the above',
0, 
0, 
1, 
0, 
1 
FROM SUBJECT WHERE NAME='Python';


INSERT INTO Question(SUBJECT_ID, QUESTION, CHOICE1, CHOICE2, CHOICE3, CHOICE4, CHOICE1CORRECT, CHOICE2CORRECT, CHOICE3CORRECT, CHOICE4CORRECT, MARK) 
SELECT ID, 
'Which of the following is considered as comment in Python ?',
'# this is a comment',
'""" this is a comment """',
'Both the above',
'<< this is a comment',
0, 
0, 
1, 
0, 
1 
FROM SUBJECT WHERE NAME='Python';



INSERT INTO Question(SUBJECT_ID, QUESTION, CHOICE1, CHOICE2, CHOICE3, CHOICE4, CHOICE1CORRECT, CHOICE2CORRECT, CHOICE3CORRECT, CHOICE4CORRECT, MARK) 
SELECT ID, 
'C++ is a __________ programming language.',
'general-purpose',
'procedural and functional',
'object-oriented, generic, and modular',
'All the above',
0, 
0, 
0, 
1, 
1 
FROM SUBJECT WHERE NAME='C++';


INSERT INTO Question(SUBJECT_ID, QUESTION, CHOICE1, CHOICE2, CHOICE3, CHOICE4, CHOICE1CORRECT, CHOICE2CORRECT, CHOICE3CORRECT, CHOICE4CORRECT, MARK) 
SELECT ID, 
'C++ designed by',
'Bjarne Stroustrup',
'Dennis Ritchie',
'James Gosling',
'Albert Einstein',
1, 
0, 
0, 
0, 
1 
FROM SUBJECT WHERE NAME='C++';


INSERT INTO Question(SUBJECT_ID, QUESTION, CHOICE1, CHOICE2, CHOICE3, CHOICE4, CHOICE1CORRECT, CHOICE2CORRECT, CHOICE3CORRECT, CHOICE4CORRECT, MARK) 
SELECT ID, 
'C++ was first appeared in',
'1985',
'1984',
'1995',
'1994',
1, 
0, 
0, 
0, 
1 
FROM SUBJECT WHERE NAME='C++';


INSERT INTO Question(SUBJECT_ID, QUESTION, CHOICE1, CHOICE2, CHOICE3, CHOICE4, CHOICE1CORRECT, CHOICE2CORRECT, CHOICE3CORRECT, CHOICE4CORRECT, MARK) 
SELECT ID, 
'C++ influenced by',
'C',
'Ada and ALGOL',
'Modula-2 and Simula',
'All the above',
0, 
0, 
0, 
1, 
1 
FROM SUBJECT WHERE NAME='C++';


INSERT INTO Question(SUBJECT_ID, QUESTION, CHOICE1, CHOICE2, CHOICE3, CHOICE4, CHOICE1CORRECT, CHOICE2CORRECT, CHOICE3CORRECT, CHOICE4CORRECT, MARK) 
SELECT ID, 
'C++ influenced',
'Java',
'Perl, PHP and Python',
'C# and D',
'All the above',
0, 
0, 
0, 
1, 
1 
FROM SUBJECT WHERE NAME='C++';


INSERT INTO Question(SUBJECT_ID, QUESTION, CHOICE1, CHOICE2, CHOICE3, CHOICE4, CHOICE1CORRECT, CHOICE2CORRECT, CHOICE3CORRECT, CHOICE4CORRECT, MARK) 
SELECT ID, 
'Which of the following is a correct program in C++ to print "Hello World" ?',
'#include<iostream>
using namespace std;
int main()
{
   cout<<"Hello World";
   return 0;
}',

'#include<iostream>
int main()
{
   std::cout<<"Hello World";
   return 0;
}',

'#include<iostream>
using namespace std;
void codescracker();
int main()
{
   codescracker();
   return 0;
}
void codescracker()
{
   cout<<"Hello World";
}',
'All the above',
0, 
0, 
0, 
1, 
1 
FROM SUBJECT WHERE NAME='C++';


INSERT INTO Question(SUBJECT_ID, QUESTION, CHOICE1, CHOICE2, CHOICE3, CHOICE4, CHOICE1CORRECT, CHOICE2CORRECT, CHOICE3CORRECT, CHOICE4CORRECT, MARK) 
SELECT ID, 
'What is the filename extension of a C++ program?',
'.cpp',
'.cp',
'.cpr',
'All the above',
1, 
0, 
0, 
0, 
1 
FROM SUBJECT WHERE NAME='C++';


INSERT INTO Question(SUBJECT_ID, QUESTION, CHOICE1, CHOICE2, CHOICE3, CHOICE4, CHOICE1CORRECT, CHOICE2CORRECT, CHOICE3CORRECT, CHOICE4CORRECT, MARK) 
SELECT ID, 
'C++ is an extension of C with a major addition of the class construct feature of',
'Simula57',
'Simula67',
'Simula47',
'Simula87',
0, 
1, 
0, 
0, 
1 
FROM SUBJECT WHERE NAME='C++';


INSERT INTO Question(SUBJECT_ID, QUESTION, CHOICE1, CHOICE2, CHOICE3, CHOICE4, CHOICE1CORRECT, CHOICE2CORRECT, CHOICE3CORRECT, CHOICE4CORRECT, MARK) 
SELECT ID, 
'C++ has the name _____ before it was changed to C++.',
'Improved C',
'Integrated C',
'C with Simula',
'C with classes',
0, 
0, 
0, 
1, 
1 
FROM SUBJECT WHERE NAME='C++';


INSERT INTO Question(SUBJECT_ID, QUESTION, CHOICE1, CHOICE2, CHOICE3, CHOICE4, CHOICE1CORRECT, CHOICE2CORRECT, CHOICE3CORRECT, CHOICE4CORRECT, MARK) 
SELECT ID, 
'_____ refer to the names of variables, functions, arrays, classes etc. created by the programmer.',
'Identifiers',
'Keywords',
'Constraints',
'Strings',
1, 
0, 
0, 
0, 
1 
FROM SUBJECT WHERE NAME='C++';


INSERT INTO Question(SUBJECT_ID, QUESTION, CHOICE1, CHOICE2, CHOICE3, CHOICE4, CHOICE1CORRECT, CHOICE2CORRECT, CHOICE3CORRECT, CHOICE4CORRECT, MARK) 
SELECT ID, 
'What do you understand by HTML?',
'HTML describes the structure of a webpage',
'HTML is the standard markup language mainly used to create web pages',
'HTML consists of a set of elements that helps the browser how to view the content',
'All of the above',
0,
0,
0,
1,
1
FROM SUBJECT WHERE NAME='HTML';

INSERT INTO Question(SUBJECT_ID, QUESTION, CHOICE1, CHOICE2, CHOICE3, CHOICE4, CHOICE1CORRECT, CHOICE2CORRECT, CHOICE3CORRECT, CHOICE4CORRECT, MARK) 
SELECT ID, 
'Who is the father of HTML?',
'Rasmus Lerdorf',
'Tim Berners-Lee',
'Brendan Eich',
'Sergey Brin',
0,
1,
0,
0,
1
FROM SUBJECT WHERE NAME='HTML';

INSERT INTO Question(SUBJECT_ID, QUESTION, CHOICE1, CHOICE2, CHOICE3, CHOICE4, CHOICE1CORRECT, CHOICE2CORRECT, CHOICE3CORRECT, CHOICE4CORRECT, MARK) 
SELECT ID, 
'HTML stands for ___',
'HyperText Markup Language',
'HyperText Machine Language',
'HyperText Marking Language',
'HighText Marking Language',
1,
0,
0,
0,
1
FROM SUBJECT WHERE NAME='HTML';

INSERT INTO Question(SUBJECT_ID, QUESTION, CHOICE1, CHOICE2, CHOICE3, CHOICE4, CHOICE1CORRECT, CHOICE2CORRECT, CHOICE3CORRECT, CHOICE4CORRECT, MARK) 
SELECT ID, 
'Which is used to read an HTML page and render it?',
'Web server',
'Web network',
'Web browser',
'Web matrix',
0,
0,
3,
0,
1
FROM SUBJECT WHERE NAME='HTML';


INSERT INTO Question(SUBJECT_ID, QUESTION, CHOICE1, CHOICE2, CHOICE3, CHOICE4, CHOICE1CORRECT, CHOICE2CORRECT, CHOICE3CORRECT, CHOICE4CORRECT, MARK) 
SELECT ID, 
'Which tag is used for inserting the largest heading in HTML?',
'head',
'<h1>',
'<h6>',
'heading',
0,
1,
0,
0,
1
FROM SUBJECT WHERE NAME='HTML';

INSERT INTO Question(SUBJECT_ID, QUESTION, CHOICE1, CHOICE2, CHOICE3, CHOICE4, CHOICE1CORRECT, CHOICE2CORRECT, CHOICE3CORRECT, CHOICE4CORRECT, MARK) 
SELECT ID, 
'Which is used to create Web Pages ?',
'C++',
'Java',
'HTML',
'JVM',
0,
0,
1,
0,
1
FROM SUBJECT WHERE NAME='HTML';

INSERT INTO Question(SUBJECT_ID, QUESTION, CHOICE1, CHOICE2, CHOICE3, CHOICE4, CHOICE1CORRECT, CHOICE2CORRECT, CHOICE3CORRECT, CHOICE4CORRECT, MARK) 
SELECT ID, 
'HTML is a set of markup ___.',
'tags',
'sets',
'attributes',
'none of the above',
1,
0,
0,
0,
1
FROM SUBJECT WHERE NAME='HTML';

INSERT INTO Question(SUBJECT_ID, QUESTION, CHOICE1, CHOICE2, CHOICE3, CHOICE4, CHOICE1CORRECT, CHOICE2CORRECT, CHOICE3CORRECT, CHOICE4CORRECT, MARK) 
SELECT ID, 
'HTML tags are used to describe document ___.',
'definition',
'content',
'language',
'model',
0,
2,
0,
0,
1
FROM SUBJECT WHERE NAME='HTML';

INSERT INTO Question(SUBJECT_ID, QUESTION, CHOICE1, CHOICE2, CHOICE3, CHOICE4, CHOICE1CORRECT, CHOICE2CORRECT, CHOICE3CORRECT, CHOICE4CORRECT, MARK) 
SELECT ID, 
'HTML program is saved using ___ extension.',
'.htmn',
'.html',
'.htnl',
'.htnl',
0,
2,
0,
0,
1
FROM SUBJECT WHERE NAME='HTML';

INSERT INTO Question(SUBJECT_ID, QUESTION, CHOICE1, CHOICE2, CHOICE3, CHOICE4, CHOICE1CORRECT, CHOICE2CORRECT, CHOICE3CORRECT, CHOICE4CORRECT, MARK) 
SELECT ID, 
'HTML program can be read and rendered by ___.',
'Compiler',
'Server',
'Web Browser',
'Interpreter',
0,
0,
3,
0,
1
FROM SUBJECT WHERE NAME='HTML';



DROP TABLE IF EXISTS teacher;

CREATE TABLE teacher(
	ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	REGISTRATIONNO	VARCHAR(50),
    TITLE VARCHAR(10),
    FIRSTNAME VARCHAR(50),
    MIDDLENAME VARCHAR(50),
    LASTNAME VARCHAR(50),
    CONTACTNO VARCHAR(50),
    EMAILID VARCHAR(50),
    GENDER VARCHAR(10),
    STREET1 VARCHAR(50),
    STREET2 VARCHAR(50),
    CITY VARCHAR(50),
    STATE VARCHAR(50),
    PINCODE VARCHAR(50),
    PASSWORD VARCHAR(50)
);

TRUNCATE TABLE teacher;

INSERT INTO teacher(TITLE, FIRSTNAME, MIDDLENAME, LASTNAME, GENDER, CONTACTNO, EMAILID, REGISTRATIONNO, CITY, STATE, STREET1, STREET2, PINCODE)
SELECT 'Mr.', 'Farazul', '', 'Hasan', 'Male', '8770364706', 'hasanfaraz862@gmail.com', 'REG-T-001', 'Baikunthpur, Korea', 'Chhattisgarh', 'Baikunthpur-Street01', 'Baikunthpur-Street02', '123456';

INSERT INTO teacher(TITLE, FIRSTNAME, MIDDLENAME, LASTNAME, GENDER, CONTACTNO, EMAILID, REGISTRATIONNO, CITY, STATE, STREET1, STREET2, PINCODE)
SELECT 'Mr.', 'Dhushasan', '', 'Mahanta', 'Male', '9437476359', 'dhushasan.2011@gmail.com', 'REG-T-002', 'Keonjhar', 'Odisha', 'Keonjhar-Street01', 'Keonjhar-Street02', '123456';

INSERT INTO teacher(TITLE, FIRSTNAME, MIDDLENAME, LASTNAME, GENDER, CONTACTNO, EMAILID, REGISTRATIONNO, CITY, STATE, STREET1, STREET2, PINCODE)
SELECT 'Mr.', 'Bharat', '', 'Bhushan', 'Male', '9988305696', 'Bhushanbharat30@gmail.com', 'REG-T-003', 'Chandigarh', 'Chandigarh', 'Chandigarh-Street01', 'Chandigarh-Street02', '123456';

INSERT INTO teacher(TITLE, FIRSTNAME, MIDDLENAME, LASTNAME, GENDER, CONTACTNO, EMAILID, REGISTRATIONNO, CITY, STATE, STREET1, STREET2, PINCODE)
SELECT 'Mr.', 'Naveen', '', 'Kumar', 'Male', '9649722872', 'Naveen74yadav@gmail.com', 'REG-T-004', 'Jaipur', 'Rajasthan', 'Rajasthan-Street01', 'Rajasthan-Street02', '123456';

INSERT INTO teacher(TITLE, FIRSTNAME, MIDDLENAME, LASTNAME, GENDER, CONTACTNO, EMAILID, REGISTRATIONNO, CITY, STATE, STREET1, STREET2, PINCODE)
SELECT 'Mr.', 'R', '', 'Srinivasan', 'Male', '9445889560', 'Srinivasan.chemi@gmail.com', 'REG-T-005', 'Karaikal', 'Puducherry', 'Karaikal-Street01', 'Karaikal-Street02', '123456';

INSERT INTO teacher(TITLE, FIRSTNAME, MIDDLENAME, LASTNAME, GENDER, CONTACTNO, EMAILID, REGISTRATIONNO, CITY, STATE, STREET1, STREET2, PINCODE)
SELECT 'Ms.', 'Madhavi', '', 'Goswami', 'Female', '8860876246', 'Madhavigoswami121@gmail.com', 'REG-T-006', 'Ghaziabad Uttar', 'Pradesh', 'Ghaziabad-Street01', 'Ghaziabad-Street02', '123456';

INSERT INTO teacher(TITLE, FIRSTNAME, MIDDLENAME, LASTNAME, GENDER, CONTACTNO, EMAILID, REGISTRATIONNO, CITY, STATE, STREET1, STREET2, PINCODE)
SELECT 'Ms.', 'Reeja', '', 'Chandran', 'Female', '9846740432', 'Reejachandran33@gmail.com', 'REG-T-007', 'Kannur', 'Kerala', 'Kannur-Street01', 'Kannur-Street02', '123456';

INSERT INTO teacher(TITLE, FIRSTNAME, MIDDLENAME, LASTNAME, GENDER, CONTACTNO, EMAILID, REGISTRATIONNO, CITY, STATE, STREET1, STREET2, PINCODE)
SELECT 'Ms.', 'Sushma', '', 'Yadav', 'Female', '9654692369', 'Oceanvidya2127@gmail.com', 'REG-T-008', 'Pataudi', 'Haryana', 'Pataudi-Street01', 'Pataudi-Street02', '123456';

INSERT INTO teacher(TITLE, FIRSTNAME, MIDDLENAME, LASTNAME, GENDER, CONTACTNO, EMAILID, REGISTRATIONNO, CITY, STATE, STREET1, STREET2, PINCODE)
SELECT 'Mr.', 'Akashdeep', '', 'Thapa', 'Male', '6395427756', 'Akashdeep@purkal.org', 'REG-T-009', 'Dehradun', 'Uttarakhand', 'Dehradun-Street01', 'Dehradun-Street02', '123456';

INSERT INTO teacher(TITLE, FIRSTNAME, MIDDLENAME, LASTNAME, GENDER, CONTACTNO, EMAILID, REGISTRATIONNO, CITY, STATE, STREET1, STREET2, PINCODE)
SELECT 'Mr.', 'Kalpesh', 'Narendra', 'Kothale', 'Male', '9766333047', 'Kalpeshkothale@gmail.com', 'REG-T-010', 'Nigdi Pune', 'Maharashtra', 'Nigdi-Street01', 'Nigdi-Street02', '123456';

INSERT INTO teacher(TITLE, FIRSTNAME, MIDDLENAME, LASTNAME, GENDER, CONTACTNO, EMAILID, REGISTRATIONNO, CITY, STATE, STREET1, STREET2, PINCODE)
SELECT 'Mr.', 'Sandip', 'Sudhakarrao', 'Pande', 'Male', '9730760981', 'Technosankalp@gmail.com', 'REG-T-011', 'Nagpur', 'Maharashtra', 'Nagpur-Street01', 'Nagpur-Street02', '123456';

UPDATE TEACHER SET PASSWORD=REGISTRATIONNO;

DROP TABLE IF EXISTS student;

CREATE TABLE student(
	ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	REGISTRATIONNO	VARCHAR(50),
    TITLE VARCHAR(10),
    FIRSTNAME VARCHAR(50),
    MIDDLENAME VARCHAR(50),
    LASTNAME VARCHAR(50),
    CONTACTNO VARCHAR(50),
    EMAILID VARCHAR(50),
    GENDER VARCHAR(10),
    STREET1 VARCHAR(50),
    STREET2 VARCHAR(50),
    CITY VARCHAR(50),
    STATE VARCHAR(50),
    PINCODE VARCHAR(50),
    PASSWORD VARCHAR(50)
);

TRUNCATE TABLE student;

INSERT INTO student(TITLE, REGISTRATIONNO, FIRSTNAME, MIDDLENAME, LASTNAME, CONTACTNO, GENDER) SELECT 'Ms.', 'REG-1001', 'RAKSHITA', 'SHYAM', 'SINGH', '8902467580', 'Female';
INSERT INTO student(TITLE, REGISTRATIONNO, FIRSTNAME, MIDDLENAME, LASTNAME, CONTACTNO, GENDER) SELECT 'Mr.', 'REG-1002', 'Irfan', 'Rahaman', 'Anisur', '8638045954', 'Male';
INSERT INTO student(TITLE, REGISTRATIONNO, FIRSTNAME, MIDDLENAME, LASTNAME, CONTACTNO, GENDER) SELECT 'Mr.', 'REG-1003', 'NITISH', 'SHARMA', 'NEELAM', '9780229407', 'Male';
INSERT INTO student(TITLE, REGISTRATIONNO, FIRSTNAME, MIDDLENAME, LASTNAME, CONTACTNO, GENDER) SELECT 'Ms.', 'REG-1004', 'beauty', 'singh', 'Rama', '7889224126', 'Female';
INSERT INTO student(TITLE, REGISTRATIONNO, FIRSTNAME, MIDDLENAME, LASTNAME, CONTACTNO, GENDER) SELECT 'Ms.', 'REG-1005', 'Sneha', 'Kumari', 'Rabindra', '8392904074', 'Female';
INSERT INTO student(TITLE, REGISTRATIONNO, FIRSTNAME, MIDDLENAME, LASTNAME, CONTACTNO, GENDER) SELECT 'Ms.', 'REG-1006', 'Preeti', 'Jit', 'singh', '8146450735S', 'Female';
INSERT INTO student(TITLE, REGISTRATIONNO, FIRSTNAME, MIDDLENAME, LASTNAME, CONTACTNO, GENDER) SELECT 'Ms.', 'REG-1007', 'Sneha', 'P', 'Mathapati', '6283795549', 'Female';
INSERT INTO student(TITLE, REGISTRATIONNO, FIRSTNAME, MIDDLENAME, LASTNAME, CONTACTNO, GENDER) SELECT 'Ms.', 'REG-1008', 'Jyoti', 'Kushwaha', 'Ashok', '9463402491', 'Female';
INSERT INTO student(TITLE, REGISTRATIONNO, FIRSTNAME, MIDDLENAME, LASTNAME, CONTACTNO, GENDER) SELECT 'Ms.', 'REG-1009', 'Kumari', 'yukti', 'Tejpal', '9877601299', 'Female';
INSERT INTO student(TITLE, REGISTRATIONNO, FIRSTNAME, MIDDLENAME, LASTNAME, CONTACTNO, GENDER) SELECT 'Ms.', 'REG-1010', 'Sumedha', 'Guman', 'singh', '9463522200', 'Female';
INSERT INTO student(TITLE, REGISTRATIONNO, FIRSTNAME, MIDDLENAME, LASTNAME, CONTACTNO, GENDER) SELECT 'Mr.', 'REG-1011', 'ADITYA', 'KUMAR', 'RAJEEV', '8146295399', 'Male';
INSERT INTO student(TITLE, REGISTRATIONNO, FIRSTNAME, MIDDLENAME, LASTNAME, CONTACTNO, GENDER) SELECT 'Ms.', 'REG-1012', 'Khushi', 'Dhanpat', 'Rai', '9780540177', 'Female';
INSERT INTO student(TITLE, REGISTRATIONNO, FIRSTNAME, MIDDLENAME, LASTNAME, CONTACTNO, GENDER) SELECT 'Mr.', 'REG-1013', 'Shivam', 'Pathania', 'Bhupinder', '8054885100', 'Male';
INSERT INTO student(TITLE, REGISTRATIONNO, FIRSTNAME, MIDDLENAME, LASTNAME, CONTACTNO, GENDER) SELECT 'Ms.', 'REG-1014', 'Monika', 'Kumari', 'Subodh', '6283526750', 'Female';
INSERT INTO student(TITLE, REGISTRATIONNO, FIRSTNAME, MIDDLENAME, LASTNAME, CONTACTNO, GENDER) SELECT 'Ms.', 'REG-1015', 'Mehak', 'Dogra', 'Ravinder', '7508801995', 'Female';
INSERT INTO student(TITLE, REGISTRATIONNO, FIRSTNAME, MIDDLENAME, LASTNAME, CONTACTNO, GENDER) SELECT 'Mr.', 'REG-1016', 'Sahil', 'kaushal', 'Sanjeev', '9418040551', 'Male';
INSERT INTO student(TITLE, REGISTRATIONNO, FIRSTNAME, MIDDLENAME, LASTNAME, CONTACTNO, GENDER) SELECT 'Mr.', 'REG-1017', 'Prashant', 'Chandra', 'Mukesh', '6239172836', 'Male';
INSERT INTO student(TITLE, REGISTRATIONNO, FIRSTNAME, MIDDLENAME, LASTNAME, CONTACTNO, GENDER) SELECT 'Ms.', 'REG-1018', 'Palak', 'Pathania', 'Bhupinder', '8198036248', 'Female';
INSERT INTO student(TITLE, REGISTRATIONNO, FIRSTNAME, MIDDLENAME, LASTNAME, CONTACTNO, GENDER) SELECT 'Ms.', 'REG-1019', 'Srijal', 'verma', 'Pramod', '9956010866', 'Female';
INSERT INTO student(TITLE, REGISTRATIONNO, FIRSTNAME, MIDDLENAME, LASTNAME, CONTACTNO, GENDER) SELECT 'Mr.', 'REG-1020', 'Shishir', 'pandey', 'Pradeep', '8918149040', 'Male';
INSERT INTO student(TITLE, REGISTRATIONNO, FIRSTNAME, MIDDLENAME, LASTNAME, CONTACTNO, GENDER) SELECT 'Ms.', 'REG-1021', 'Ankita', 'Pravin', 'Ban', '9584931223', 'Female';
INSERT INTO student(TITLE, REGISTRATIONNO, FIRSTNAME, MIDDLENAME, LASTNAME, CONTACTNO, GENDER) SELECT 'Ms.', 'REG-1022', 'Kavyashree', 'Saikia', 'Jayanta', '7069475611', 'Female';
INSERT INTO student(TITLE, REGISTRATIONNO, FIRSTNAME, MIDDLENAME, LASTNAME, CONTACTNO, GENDER) SELECT 'Mr.', 'REG-1023', 'Piyush', 'Khera', 'Babu', '9915925475', 'Male';
INSERT INTO student(TITLE, REGISTRATIONNO, FIRSTNAME, MIDDLENAME, LASTNAME, CONTACTNO, GENDER) SELECT 'Mr.', 'REG-1024', 'Nishant', 'Sharma', 'Vinod', '7018327685', 'Male';
INSERT INTO student(TITLE, REGISTRATIONNO, FIRSTNAME, MIDDLENAME, LASTNAME, CONTACTNO, GENDER) SELECT 'Ms.', 'REG-1025', 'Kumari', 'Ankita', 'Yadav', '7889578375', 'Female';
INSERT INTO student(TITLE, REGISTRATIONNO, FIRSTNAME, MIDDLENAME, LASTNAME, CONTACTNO, GENDER) SELECT 'Ms.', 'REG-1026', 'Rakhi', 'Bhagat', '9490810099', 'Female', 'Male';
INSERT INTO student(TITLE, REGISTRATIONNO, FIRSTNAME, MIDDLENAME, LASTNAME, CONTACTNO, GENDER) SELECT 'Ms.', 'REG-1027', 'Anushika', 'Sharma', 'Kanwal', '7986361432', 'Female';

UPDATE STUDENT SET PASSWORD=REGISTRATIONNO;

DROP TABLE IF EXISTS Exam;

CREATE TABLE Exam(
	ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    SUBJECT_ID INT NOT NULL,	
    DESCRIPTION VARCHAR(255),
    NOOFQUESTIONS INT,
    EXAMDATE DATETIME
);

TRUNCATE TABLE Exam;

INSERT INTO Exam(SUBJECT_ID, NOOFQUESTIONS, DESCRIPTION)
SELECT ID, 10, 'Python-Beginner-Test' FROM Subject WHERE NAME='Python';

INSERT INTO Exam(SUBJECT_ID, NOOFQUESTIONS, DESCRIPTION)
SELECT ID, 10, 'C++-Beginner-Test' FROM Subject WHERE NAME='C++';