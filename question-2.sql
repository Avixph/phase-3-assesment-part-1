-- SQL Query: 

-- Write a SQL query to display the order number followed by order date and the purchase amount for each order which will be delivered by the salesman who is holding the ID 5001.

SELECT ord_no, ord_date, purch_amt 
  FROM orders 
    WHERE salesman_id = 5001;

