use proyecto2;

DELIMITER $$
CREATE PROCEDURE loginAlumno(IN carne VARCHAR(50), IN contrasenia varchar(50))
	BEGIN 
		Select * from alumno a where a.carne = carne and a.contrasenia = contrasenia;
END$$ 
DELIMITER ;
drop procedure add_pregunta;
DELIMITER $$
CREATE PROCEDURE add_pregunta(IN pregunta VARCHAR(100), IN nota FLOAT, IN id_examen INT)
	BEGIN 
		INSERT INTO pregunta (pregunta, nota, id_examen)
		VALUES (pregunta, nota, id_examen);
        
        SELECT * FROM pregunta p order by p.id_pregunta desc limit 1;
END$$ 
DELIMITER ;

CALL loginAlumno('201908321','123');

DELIMITER $$
CREATE PROCEDURE loginMaestro(IN registro VARCHAR(50), IN contrasenia varchar(50))
	BEGIN 
		Select * from maestro m where m.no_registro = registrono_registro and m.contrasenia = contrasenia;
END$$ 
DELIMITER ;

ALTER TABLE alumno MODIFY telefono varchar(20) NOT NULL;
