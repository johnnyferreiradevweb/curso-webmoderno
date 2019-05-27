SELECT * FROM prefeitos;
SELECT * FROM cidades;
SELECT * FROM cidades c inner join prefeitos p on c.id = p.cidade_id;
SELECT * FROM cidades c left join prefeitos p on c.id = p.cidade_id;
SELECT * FROM cidades c right join prefeitos p on c.id = p.cidade_id;

-- Full Join
SELECT * FROM cidades c left join prefeitos p on c.id = p.cidade_id
union
SELECT * FROM cidades c right join prefeitos p on c.id = p.cidade_id;