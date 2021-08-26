-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.

SELECT m.title, b.domestic_sales, b.international_sales FROM Pixar.BoxOffice AS b INNER JOIN Movies AS m ON m.id = b.movie_id;

-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).

SELECT m.title, b.domestic_sales, b.international_sales FROM Pixar.BoxOffice AS b INNER JOIN Movies AS m ON m.id = b.movie_id WHERE b.international_sales > b.domestic_sales;

-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.

SELECT m.title, b.rating FROM Pixar.BoxOffice AS b INNER JOIN Movies AS m ON m.id = b.movie_id ORDER BY m.title DESC;
