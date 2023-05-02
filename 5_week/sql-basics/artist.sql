-- Q1
INSERT INTO artist (name)
VALUES ('Ariana Grande'),
('Bruno Mars'),
('Taylor Swift');

-- Q2
SELECT name 
FROM artist
ORDER BY name DESC
LIMIT 10;

-- Q3
SELECT name 
FROM artist
ORDER BY name 
LIMIT 5;

-- Q4
SELECT name 
FROM artist
WHERE name LIKE ('Black%');

-- Q5
SELECT name 
FROM artist
WHERE name LIKE ('%Black%');