-- Q1
SELECT first_name, last_name
FROM employee
WHERE city = 'Calgary';

-- Q2
SELECT MAX(birth_date)
FROM employee;

-- Q3
SELECT MIN(birth_date)
FROM employee;

-- Q4
SELECT employee_id
FROM employee
WHERE first_name = 'Nancy' AND last_name = 'Edwards';

SELECT first_name, last_name
FROM employee
WHERE reports_to = 2;

-- Q5
SELECT COUNT(*) 
FROM employee 
WHERE city = 'Lethbridge';