SELECT job_id, AVG(salary) AS media_salario
FROM hr.employees
GROUP BY job_id
ORDER BY media_salario DESC;
