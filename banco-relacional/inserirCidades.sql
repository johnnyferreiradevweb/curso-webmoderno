SELECT * FROM `cidades`

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Campinas', 795, 21);

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Niteroi', 133.9, 15);

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Niteroi', 133.9, (SELECT id FROM `estados` WHERE sigla = 'PE'));

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Juazeiro do Norte', 248.2, (SELECT id FROM `estados` WHERE sigla = 'CE'));