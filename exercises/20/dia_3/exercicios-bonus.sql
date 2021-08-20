-- 1- Escreva uma query para exibir todas as informações de todos os cientistas que possuam a letra e em seu nome.

USE Scientists;
SELECT * FROM Scientists
WHERE Name LIKE '%e%';

-- 2- Escreva uma query para exibir o nome de todos os projetos cujo o código inicie com a letra A . Ordene o resultado em ordem alfabética.

USE Scientists;
SELECT Name FROM Projects
WHERE Code LIKE 'A%' ORDER BY Name;

-- 3- Escreva uma query para exibir o código e nome de todos os projetos que possuam em seu código o número 3 . Ordene o resultado em ordem alfabética.

USE Scientists;
SELECT Code, Name FROM Projects
WHERE Code LIKE '%3%' ORDER BY Name;

-- 4- Escreva uma query para exibir todos os cientistas (valores numéricos) cujos projetos sejam AeH3 , Ast3 ou Che1 .

USE Scientists;
SELECT Scientist FROM AssignedTo
WHERE Project IN ('AeH3', 'Ast3', 'Che1');

-- 5- Escreva uma query para exibir todas as informações de todos os projetos com mais de 500 horas.

USE Scientists;
SELECT * FROM Projects
WHERE Hours >= 500;