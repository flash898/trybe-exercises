-- 1. Escreva uma query que exiba o maior salário da tabela.
SELECT FIRST_NAME, MAX(SALARY) AS BIGGEST_SALARY FROM hr.employees;

-- 2. Escreva uma query que exiba a diferença entre o maior e o menor salário.

SELECT MAX(SALARY) - MIN(SALARY) AS DIFF_SALARY FROM hr.employees;

-- 3. Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.

SELECT JOB_ID, AVG(SALARY) AS AVERAGE_SALARY FROM hr.employees GROUP BY JOB_ID ORDER BY AVERAGE_SALARY DESC;

-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.

SELECT SUM(SALARY) AS TOTAL_PAYMENTS FROM hr.employees;