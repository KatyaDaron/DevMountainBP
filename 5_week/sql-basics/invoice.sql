-- Q1
SELECT COUNT(*) 
FROM invoice 
WHERE billing_country = 'USA';

-- Q2
SELECT MAX(total)
FROM invoice;

-- Q3
SELECT MIN(total)
FROM invoice;

-- Q4
SELECT * 
FROM invoice 
WHERE total > 5;

-- Q5
SELECT COUNT(*)
FROM invoice
WHERE total < 5;

-- Q6
SELECT COUNT(*)
FROM invoice
WHERE billing_state IN ('CA', 'TX', 'AZ');

-- Q7
SELECT AVG(total)
FROM invoice;

-- Q8
SELECT SUM(total)
FROM invoice;

-- Q9
UPDATE invoice
SET total = 24
WHERE invoice_id = 5;

-- Q10
DELETE FROM invoice
WHERE invoice_id = 1;