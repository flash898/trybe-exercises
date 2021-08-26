-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.

SELECT m.title, b.domestic_sales, b.international_sales FROM Pixar.BoxOffice AS b INNER JOIN Movies AS m ON m.id = b.movie_id;

-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).

SELECT m.title, b.domestic_sales, b.international_sales FROM Pixar.BoxOffice AS b INNER JOIN Movies AS m ON m.id = b.movie_id WHERE b.international_sales > b.domestic_sales;

-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.

SELECT m.title, b.rating FROM Pixar.BoxOffice AS b INNER JOIN Movies AS m ON m.id = b.movie_id ORDER BY m.title DESC;

-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.

SELECT m.title, m.director, m.`year`, m.length_minutes, t.`name`, t.location FROM Pixar.Theater AS t LEFT JOIN Movies AS m ON t.id = m.theater_id ORDER BY t.`name` ASC;

-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.

SELECT t.`name`, t.location , m.title,  m.director, m.`year`, m.length_minutes FROM Pixar.Theater AS t RIGHT JOIN Movies AS m ON t.id = m.theater_id ORDER BY t.`name` ASC;

-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.

SELECT m.title FROM Pixar.Movies AS m WHERE id IN (SELECT movie_id FROM Pixar.BoxOffice WHERE rating > 7.5);

-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.

SELECT m.title FROM Pixar.Movies AS m WHERE id IN (SELECT movie_id FROM Pixar.BoxOffice AS b WHERE year > 2009);
