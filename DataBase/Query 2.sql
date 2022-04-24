use proyecto2;
drop procedure update_publicacion;

DELIMITER $$
CREATE PROCEDURE add_publicacion(IN titulo VARCHAR(50), IN descripcion VARCHAR(100), IN fecha DATE, IN id_materia INT)
	BEGIN 
		INSERT INTO publicacion (titulo, descripcion, fecha, id_materia)
		VALUES (titulo, descripcion, fecha, id_materia);
END$$ 
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE update_publicacion(IN id integer,IN titulo VARCHAR(50), IN descripcion VARCHAR(100), IN fecha DATE, IN id_materia INT)
	BEGIN 
        Update
			publicacion 
        set titulo = titulo,
			descripcion = descripcion,
            fecha = fecha,
            id_materia = id_materia
		where
			id_publicacion = id;
END$$ 
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE delete_publicacion(IN id integer)
	BEGIN 
		delete from publicacion where id_publicacion = id;
END$$ 
DELIMITER ;

DELIMITER ;

DELIMITER $$
CREATE PROCEDURE publicaciones()
	BEGIN 
		select * from publicacion;
END$$ 
DELIMITER ;

call publicaciones;

DELIMITER $$
CREATE PROCEDURE delete_Alumno(IN carne varchar(50))
	BEGIN 
		delete from alumno where carne = carne;
END$$ 
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE delete_Actividad(IN id int)
	BEGIN 
		delete from actividad where id_actividad = id;
END$$ 
DELIMITER ;

drop procedure add_alumno;

DELIMITER $$
CREATE PROCEDURE add_alumno(IN nombre VARCHAR(30), IN apellido VARCHAR(30), IN carne VARCHAR(10), IN telefono VARCHAR(10), IN direccion VARCHAR(100), IN email VARCHAR(60), IN contrasenia VARCHAR(20))
	BEGIN 
		IF (SELECT count(*) FROM alumno a  where a.carne = carne OR a.email = email) > 0 THEN
        BEGIN
		END;
        ELSE
        BEGIN
			INSERT INTO alumno (nombre, apellido, carne, telefono, direccion, email, contrasenia)
			VALUES (nombre, apellido, carne, telefono, direccion, email, contrasenia);
        END;
        END IF;
END$$ 
DELIMITER ;

CALL add_alumno('Ariel', 'Macario', '201905840', '31003016', 'El por venir', 'ariaelmacario141@gmail.com', 'katiteamoxd');

CALL add_alumno('a', 'm', '201905838', '31003016', 'El por venir', 'arielmacario11@gmail.com', 'axasd');
select * from alumno;

SELECT * FROM alumno where carne = '201905837' OR email = 'arielmacario11@gmail.com'

