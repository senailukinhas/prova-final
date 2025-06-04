create database lista;

use lista;

create table tarefas (
id int auto_increment primary key,
titulo varchar(100) NOT NULL,
descricao text,
status ENUM("pendente","em progresso","concluida") DEFAULT "pendente",
data_criacao TIMESTAMP DEFAULT current_timestamp,
data_conclusao timestamp null

);

select * from tarefas;