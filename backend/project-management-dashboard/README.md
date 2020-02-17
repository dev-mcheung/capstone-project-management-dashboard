This is the Java backend for this project.
It uses Spring boot as the framework and connects
to MariaDB.

## ``application.properties``
Set the variables first in this file.

* ``${DATABASE_URL}`` -
Handles directing the database url. Format is
``IP:PORT/DATABASE_NAME``.
* ``${DATABASE_USERNAME}`` - Username for the database.
* ``${DATABASE_PASSWORD}`` - Password for the username.