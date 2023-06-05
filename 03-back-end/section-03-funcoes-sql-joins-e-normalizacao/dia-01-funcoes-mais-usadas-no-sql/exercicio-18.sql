SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date)
FROM hr.employees;
