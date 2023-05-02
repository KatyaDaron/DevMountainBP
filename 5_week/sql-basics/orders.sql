-- Q1
CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    person_id INTEGER,
    product_name TEXT,
    product_price INTEGER,
    quantity INTEGER
);

-- Q2
INSERT INTO orders (person_id, product_name, product_price, quantity)
VALUES(1, 'mascara', 29, 1),
(1, 'powder', 20, 1),
(2, 'mascara', 29, 1),
(2, 'powder', 20, 1),
(2, 'face wash', 19, 1);

-- Q3
SELECT * FROM orders;

-- Q4
SELECT SUM (quantity) 
FROM orders;

-- Q5
SELECT SUM (product_price)
FROM orders;

-- Q6
SELECT SUM (product_price)
FROM orders
GROUP BY person_id;