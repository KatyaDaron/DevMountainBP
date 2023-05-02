-- Q1
CREATE TABLE person(
id SERIAL PRIMARY KEY,
name VARCHAR(30),
age INTEGER,
height_cm INTEGER,
city TEXT,
favorite_color TEXT
);

-- Q2
INSERT INTO person(name, age, height_cm, city, favorite_color)
VALUES('Joanna Smith', 50, 165, 'New York', 'red'),
('James Brown', 22, 175, 'Chicago', 'white'),
('Viola Lee', 20, 175, 'Chicago', 'blue'),
('William Adams', 29, 163, 'Seattle', 'blue'),
('Will Smith', 29, 160, 'Seattle', 'black');

-- Q3
SELECT * FROM person
ORDER BY height_cm DESC;

-- Q4
SELECT * FROM person
ORDER BY height_cm ASC;

-- Q5
SELECT * FROM person
ORDER BY age DESC;

-- Q6
SELECT * FROM person
WHERE age > 20;

-- Q7
SELECT * FROM person
WHERE age = 18;

-- Q8
SELECT * FROM person
WHERE age < 20 OR age > 30;

-- Q9
SELECT * FROM person
WHERE age != 27;

-- Q10
SELECT * FROM PERSON
WHERE favorite_color <> 'red'

-- Q11
SELECT * FROM person
WHERE favorite_color != 'red' AND favorite_color != 'blue';

-- Q12
SELECT * FROM person
WHERE favorite_color = 'orange' OR favorite_color = 'green';

-- Q13
SELECT * FROM person
WHERE favorite_color IN ('orange', 'green', 'blue');

-- Q14
SELECT * FROM person
WHERE favorite_color IN ('yellow', 'purple');