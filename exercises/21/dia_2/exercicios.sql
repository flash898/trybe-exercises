-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.

SELECT m.title, b.domestic_sales, b.international_sales FROM Pixar.BoxOffice AS b INNER JOIN Movies AS m ON m.id = b.movie_id;
