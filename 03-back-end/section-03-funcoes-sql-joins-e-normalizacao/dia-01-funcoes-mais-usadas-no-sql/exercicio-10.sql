SELECT department_id, (salary), COUNT(department_id) AS total
FROM hr.employees
GROUP BY department_id
HAVING total > 10;
