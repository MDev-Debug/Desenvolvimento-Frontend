# Definindo rotas com Angular Routing

### Criar uma aplicação angular
    ng new segundo-programa-angular --no-standalone
    
### Executar a aplicação
    ng serve --open | ou ng s -o

### Criar componentes
    ng generate component components/views/home --skip-tests  | ng g c
    ng generate component components/views/login --skip-tests | ng g c
    ng g c components/shared/navbar

### ROTAS DO FRONTEND NÃO SÃO ROTAS DO BACKEND
    [Frontend] /        |       [Backend] /
    [Frontend] /login   |       [Backend] /login
