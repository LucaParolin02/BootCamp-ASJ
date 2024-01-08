SELECT CONCAT(c.name,' ',c.last_name) as nombre, COUNT(o.id) as Cantidad
FROM orders o
INNER JOIN clients c ON o.id_client = c.id
GROUP BY CONCAT(c.name,' ',c.last_name);

SELECT 
    p.title AS Producto,
    SUM(d.cant) AS Total
FROM
    products p
JOIN
    order_details d ON d.id_product = p.id
GROUP BY
    p.title

	
SELECT TOP 5
    g.gender AS Genero,
    COUNT(od.id) AS Total
FROM
    order_details od
JOIN products p ON od.id_product = p.id
JOIN genders g ON g.id = p.id_gender
GROUP BY 
    g.gender
ORDER BY
    Total DESC;


SELECT 
    e.legajo, 
    e.name, 
    e.last_name, 
    o.date
FROM
    employees e
INNER JOIN 
    orders o ON o.id_employee = e.id
WHERE 
    o.date >= '2024-01-12' AND o.date <= '2024-01-15'
ORDER BY 
	o.date DESC, e.legajo ASC;

--METODOS DE PAGOS UTILIZADOS POR LOS SOCIOS , SIEMPRE QUE SEA MAS DE 2 VECES

SELECT p.payment_method
FROM payment_methods p
INNER JOIN orders o ON o.id_payment_method = p.id
INNER JOIN clients c  ON c.id = o.id_client
WHERE c.is_partner = 1
GROUP BY p.payment_method
HAVING COUNT(o.id_payment_method) > 2;



	
