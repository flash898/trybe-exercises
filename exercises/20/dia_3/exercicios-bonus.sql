-- 1- Escreva uma query para exibir todas as informações de todos os cientistas que possuam a letra e em seu nome.

USE Scientists;
SELECT * FROM Scientists
WHERE Name LIKE '%e%';

-- 2- Escreva uma query para exibir o nome de todos os projetos cujo o código inicie com a letra A . Ordene o resultado em ordem alfabética.

USE Scientists;
SELECT * FROM Projects
WHERE Code LIKE 'A%' ORDER BY Name;