-- 1- Escreva uma query para exibir todas as peças que começam com GR .

USE PecasFornecedores;
SELECT * FROM Pecas WHERE name LIKE 'GR%';

-- 2- Escreva uma query para exibir todos os fornecimentos que contenham a peça com code 2 . Organize o resultado por ordem alfabética de fornecedor.

USE PecasFornecedores;
SELECT * FROM Fornecimentos WHERE peca = 2 ORDER BY Fornecedor;
