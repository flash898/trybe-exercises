-- 1- Escreva uma query para exibir todas as peças que começam com GR .

USE PecasFornecedores;
SELECT * FROM Pecas WHERE name LIKE 'GR%';

-- 2- Escreva uma query para exibir todos os fornecimentos que contenham a peça com code 2 . Organize o resultado por ordem alfabética de fornecedor.

USE PecasFornecedores;
SELECT * FROM Fornecimentos WHERE peca = 2 ORDER BY Fornecedor;

-- 3- Escreva uma query para exibir as peças, preço e fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra N .

USE PecasFornecedores;
SELECT peca, Fornecedor, Preco FROM Fornecimentos 
WHERE Fornecedor LIKE '%N%';

-- 4- Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA). Ordene os resultados em ordem alfabética decrescente

USE PecasFornecedores;
SELECT * FROM Fornecedores
WHERE name LIKE '%LTDA%' ORDER BY name DESC;

-- 5- Escreva uma query para exibir o número de empresas (fornecedores) que contém a letra F no código.

USE PecasFornecedores;
SELECT COUNT(*) FROM Fornecedores
WHERE code LIKE '%F%';