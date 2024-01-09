SELECT o.number_order, o.date, o.total 
FROM orders as o
GROUP BY o.number_order, o.date, o.total
HAVING o.total > (SELECT AVG(p.sale_price) FROM products p);


SELECT o.number_order, o.date, o.total 
	FROM orders as o
	WHERE o.total > (SELECT AVG(p.sale_price) FROM products p);

