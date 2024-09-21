CREATE USER loja IDENTIFIED BY loja_senha;
GRANT connect, resource TO loja;
ALTER USER loja QUOTA 100M ON USERS;