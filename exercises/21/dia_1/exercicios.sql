-- 1. Escreva uma query que exiba o maior salário da tabela.
SELECT FIRST_NAME, MAX(SALARY) AS BIGGEST_SALARY FROM hr.employees;

-- 2. Escreva uma query que exiba a diferença entre o maior e o menor salário.

SELECT MAX(SALARY) - MIN(SALARY) AS DIFF_SALARY FROM hr.employees;