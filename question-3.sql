-- SQL Query:

-- Write a SQL statement to prepare a list with salesman name, customer name and their cities for the salesmen and customer who belongs to the same city.

SELECT salesman.name AS "salesman name", 
  customer.cust_name AS "customer name", customer.city  
    FROM salesman,customer 
      WHERE salesman.city = customer.city;