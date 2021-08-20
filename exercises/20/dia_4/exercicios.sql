-- Exercício 1 : Insira as produções da Pixar abaixo na tabela Movies :

INSERT INTO Pixar.Movies (title, director, year, length_minutes)
VALUES 
	('Monstros SA', 'Pete Docter', 2001, 92),
	('Procurando Nemo', 'John Lasseter', 2003, 107),
	('Os Incríveis', 'Brad Bird', 2004, 116),
	('WALL-E', 'Pete Docter', 2008, 104);

-- Exercício 2 : Procurando Nemo foi aclamado pela crítica! Foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional. Adicione as informações à tabela BoxOffice .

INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales)
	VALUES(9, 6.8, 450000000, 370000000);

-- Exercício 3 : O diretor do filme "Procurando Nemo" está incorreto, na verdade ele foi dirigido por Andrew Staton. Corrija esse dado utilizando o UPDATE .

SET SQL_SAFE_UPDATES = 0;
UPDATE Pixar.Movies
SET director = 'Andrew Staton'
WHERE director = 'John Lasseter';

-- Exercício 4 : O título do filme "Ratatouille" esta escrito de forma incorreta na tabela Movies , além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o UPDATE .

SET SQL_SAFE_UPDATES = 0;
UPDATE Pixar.Movies
SET title = 'Ratatouille', year = 2007
WHERE id = 3;

-- Exercício 5 : Insira as novas classificações abaixo na tabela BoxOffice , lembre-se que a coluna movie_id é uma foreign key referente a coluna id da tabela Movies :

INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales)
	VALUES(8, 8.5, 300000000, 250000000),
		    (10, 7.4, 460000000, 510000000),
		    (11, 9.9, 290000000, 280000000);

-- Exercício 6 : Exclua da tabela Movies o filme "WALL-E".

SET SQL_SAFE_UPDATES = 0;

DELETE FROM Pixar.BoxOffice
WHERE movie_id = 11;
DELETE FROM Pixar.Movies
WHERE title = 'WALL-E';

-- Exercício 7 : Exclua da tabela Movies todos os filmes dirigidos por "Andrew Staton".

SET SQL_SAFE_UPDATES = 0;

DELETE FROM Pixar.BoxOffice
WHERE movie_id IN (1, 2, 5, 6, 9);
DELETE FROM Pixar.Movies
WHERE director = 'Andrew Staton';