# Proiect Internship 2024 Info World

Proiectul front-end am utilizat vite si json-server pentru a imita o baza de date.
Am realizat si api cu node.js si express.js in care folosesc fs pentru a modifica un fisier de tip json. 
### [Partea de server poate fi gasita aici:](https://github.com/stefann9/Project-Info-World-server)
https://github.com/stefann9/Project-Info-World-server

- pornire client: rulam ```npm run dev```
- pornire server-api: ```node server.js```
- pornire json-server: ```cd /mocks/db``` pentru a intra in directorul ce contine db.json, rulam ```json-server --watch db.json --port 4000```pentru a porni server-ul.

Clients routes:
- Get /clients pentru a primi lista de clienti
- Post /clients adaugre client nou 
- Get /clients/:id pentru a primi client dupa id
- Put /clients/:id modifica client dupa id
- Delete /clients/:id sterge client dupa id

Appointment routes:
- Get /appointments pentru a primi lista cu programari
- Post /appointments adaugare programare noua
- Get /appointments/:id pentru a primi programare dupa id
- Put /appointments/:id modifica programarea dupa id

Functionalitati noi:
- Filtru de cautare dupa numele clientului in lista cu clienti si programari.
- Sortare dupa intervalul programarii, nume sau ordinea in care au fost adaugate programarile.
- Filtru pentru programari terminate sau neterminate.
