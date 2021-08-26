-- Exercício 10: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8 e que estejam em cartaz.

SELECT m.id, m.title, m.director, m.`year`, m.length_minutes, m.theater_id  FROM Pixar.Movies AS m INNER JOIN BoxOffice AS b ON m.id = b.movie_id WHERE b.rating > 8 AND m.theater_id IS NOT NULL;
