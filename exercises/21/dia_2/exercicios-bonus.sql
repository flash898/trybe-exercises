-- Exercício 10: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8 e que estejam em cartaz.

SELECT m.id, m.title, m.director, m.`year`, m.length_minutes, m.theater_id  FROM Pixar.Movies AS m INNER JOIN BoxOffice AS b ON m.id = b.movie_id WHERE b.rating > 8 AND m.theater_id IS NOT NULL;

-- Exercício 11: Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo diretor.

SELECT m1.title, m1.length_minutes, m2.title, m2.length_minutes FROM Pixar.Movies AS m1, Pixar.Movies AS m2 WHERE m1.director = m2.director;
