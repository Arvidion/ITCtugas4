## Setup Project

1. **Clone** repository ini 
2. Buka **xampp** kemudian jalankan **mysql** dan **apache**
3. Install dependency dengan cara mengetik `npm i` di terminal atau cmd, tunggu sampai selesai.
4. Jalankan service dengan cara mengetik `npx nodemon app`
5. Jalankan < force: true > pada file /util/assoc_db.js didalam options < await my_db.sync > kemudian tunggu tabel terbuat
6. Pastikan terdapat database dengan nama **data_itc** yang memiliki dua tabel yaitu **users** dan   **divisions**
7. Apabila database dan tabel''nya telah terbuat, jalankan < force: false > pada file /util/assoc_db.js didalam options < await my_db.sync > 
8. Uncomment < Division.bulkCreate > & < await User.create > dalam fungsi association pada file /util/assoc_db.js.
9. Pada database **divisions** pastikan terdapat data divisi'' itc yaitu WEB DEV, MOBILE DEV, dll. Pastikan juga database **user** telah terisi data seva
10. comment < Division.bulkCreate > & < await User.create > dalam fungsi association pada file /util/assoc_db.js. Agar data tidak tergenerate secara terus menerus di tabel ketika merestart server.
11. pada file .env isi CLOUDINARY_API_SECRET, CLOUDINARY_API_KEY, dan CLOUDINARY_CLOUD_NAME sesuai data cloudinary kalian

## Dokumentasi

POST `/users/register`

Deskripsi: Endpoint ini untuk register member baru ITC. 

Request Body :

```
{
    "fullName": "Dimas Pramantya",
    "nim": "123210069",
    "angkatan": 21,
    "email": "dimas@gmail.com",
    "password": "12345678",
    "division": "WEB DEV"
}
```

Response:

```
{
    "status": "success",
    "message": "Register Successfull",
    "token": "<jwt token>"
}
```
---

POST `/users/login`

Deskripsi: Endpoint ini untuk register member baru ITC. 

Request Body :

```
{
    "email": "dimas@gmail.com",
    "password": "12345678",
}
```

Response:

```
{
    "status": "success",
    "message": "Login Successfull",
    "token": "<jwt token>"
}
```
---

GET `/users/fetch-all`

Deskripsi: Endpoint ini untuk mengambil semua data user di database. 

Response:
```
{
  "status": "Success",
  "message": "Succesfully fetch all user data",
  "users": [
      {
          "id": 0,
          "fullName": "Dimas Pramantya",
          "angkatan": 2021,
          "divisionId": 1
      },
      {
          "id": 1,
          "fullName": "Yuda Saputra",
          "angkatan": 2021,
          "divisionId": 2
      },
      {
          "id": 2,
          "fullName": "Haikal Mumtaz",
          "angkatan": 2021,
          "divisionId": 1
      }
  ]
}
```
GET `/users/fetch-by-token`

Deskripsi: 
Endpoint ini untuk mengambil semua data user di database berdasarkan bearer token di auth

Request:
```
{
  headers: {
    authorization: "Bearer <jwt token>"
  }
}
```

Response:
```
{
  "status": "Success",
  "message": "Succesfully fetch user data",
  "user": {
      "id": 0,
      "fullName": "Dimas Pramantya",
      "angkatan": 2021,
      "division": {
        name: "Web Dev"
      }
  }
}
```

## TUGAS

1. PUT `/users/user-account`

Deskripsi: 
Endpoint ini untuk mengedit data akun user di db.

Request:
```
{
  headers: {
    authorization: "Bearer <jwt token>"
  },
  body: {
    image: <FILE IMAGE>,
    fullName: "Daenerys Targaryen",
    nim: "123010069",
    angkatan: 1,
    divisi: <OPSIONAL! (nilai+ jika bisa)>
  }
}
```

Response:
```
{
  "status": "Success",
  "message": "Succesfully edit user data",
  "user": {
      "id": 0,
      "fullName": "Dimas Pramantya",
      "nim": "123010069",
      "angkatan": 2021,
      "profilePicture": <url profile picture dari cloudinary>
      "division": {
        name: "Web Dev"
      }
  }
}
```
