-- Exercício 10: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8 e que estejam em cartaz.

SELECT m.id, m.title, m.director, m.`year`, m.length_minutes, m.theater_id  FROM Pixar.Movies AS m INNER JOIN BoxOffice AS b ON m.id = b.movie_id WHERE b.rating > 8 AND m.theater_id IS NOT NULL;

-- Exercício 11: Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo diretor.

SELECT m1.title, m1.length_minutes, m2.title, m2.length_minutes FROM Pixar.Movies AS m1, Pixar.Movies AS m2 WHERE m1.director = m2.director;

-- Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.

SELECT m.title FROM Pixar.Movies AS m WHERE m.id IN (SELECT b.movie_id FROM Pixar.BoxOffice AS b WHERE b.international_sales >= 500000000 AND m.length_minutes > 110);
