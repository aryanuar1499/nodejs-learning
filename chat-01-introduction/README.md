# Chat 01 — Node.js Introduction

Dokumentasi pembelajaran dan praktik pada tahap awal perjalanan saya dalam mempelajari **Node.js Developer**.

Pada sesi ini saya mempelajari fundamental Node.js, mulai dari **Runtime Environment**, **V8 Engine**, **Event Loop**, **Core Modules**, **Global Objects**, **CommonJS Modules**, hingga pengenalan **npm & Package Management**.

Pembelajaran dilakukan melalui kombinasi antara teori, praktik langsung, eksperimen, dan troubleshooting untuk memahami bagaimana Node.js bekerja secara lebih mendalam.

---

## 🎯 Tujuan Pembelajaran

Pada sesi ini, tujuan utama pembelajaran adalah:

* Memahami Node.js sebagai **JavaScript Runtime**
* Memahami **Runtime Environment** Node.js
* Memahami peran **V8 JavaScript Engine**
* Memahami perbedaan JavaScript di Browser dan Node.js
* Memahami konsep dasar **Event Loop**
* Memahami **Synchronous** dan **Asynchronous Execution**
* Menggunakan **Node.js Core Modules**
* Memahami **Global Objects**
* Memahami sistem **CommonJS Modules**
* Menggunakan `require()` dan `module.exports`
* Memahami dasar **npm & Package Management**
* Menerapkan penggunaan **Git dan GitHub** dalam workflow pembelajaran

---

# 📚 Materi yang Dipelajari

## Bagian 1 — Introduction to Node.js

Pada bagian ini saya mempelajari fundamental Node.js dan memahami bagaimana JavaScript dapat dijalankan di luar Browser.

### Materi

* Apa itu Node.js
* Node.js sebagai **JavaScript Runtime**
* Node.js Runtime Environment
* Node.js use cases
* Menjalankan JavaScript menggunakan Node.js
* First Node.js program

### Praktik

File latihan:

```text
app.js
```

Latihan digunakan untuk memahami proses dasar menjalankan program JavaScript menggunakan Node.js.

---

## Bagian 2 — Runtime Environment

Pada bagian ini saya mempelajari lingkungan tempat Node.js menjalankan JavaScript.

### Materi

* Node.js Runtime Environment
* **V8 JavaScript Engine**
* Browser JavaScript vs Node.js
* JavaScript execution di luar Browser
* Perbedaan environment antara Browser dan Node.js

Bagian ini menjadi dasar untuk memahami mengapa Node.js dapat menyediakan kemampuan yang tidak tersedia secara langsung pada JavaScript di Browser, seperti akses terhadap file system dan operating system melalui **Core Modules**.

---

## Bagian 3 — Event Loop

Pada bagian ini saya mempelajari bagaimana Node.js menangani **Synchronous** dan **Asynchronous Execution**.

### Materi

* Synchronous Execution
* Asynchronous Execution
* Callbacks
* Event Loop
* `setTimeout()`
* `setImmediate()`
* Execution Order

### Praktik

File latihan:

```text
event-loop.js
```

Saya melakukan beberapa eksperimen untuk mengamati urutan eksekusi antara **synchronous code** dan **asynchronous callbacks**.

Contoh hasil eksperimen:

```text
A
C
B
```

Saya juga melakukan eksperimen menggunakan:

```javascript
setTimeout()
setImmediate()
```

Eksperimen tersebut membantu memahami bahwa urutan kode yang ditulis tidak selalu sama dengan urutan callback asynchronous dijalankan.

---

## Bagian 4 — Core Modules & Global Objects

Pada bagian ini saya mulai menggunakan kemampuan bawaan Node.js melalui **Core Modules** dan memahami beberapa **Global Objects**.

### Core Modules

Materi yang dipelajari:

* `os`
* `path`
* `fs`

### Global Objects

Materi yang dipelajari:

* `process`
* `__dirname`
* `__filename`

### Praktik

File latihan:

```text
chat-01-bagian-4.js
```

File pendukung:

```text
data.txt
```

Beberapa praktik yang dilakukan:

* Membaca informasi Node.js melalui `os`
* Membaca informasi platform dan architecture
* Mengetahui current working directory
* Menggunakan `path` untuk bekerja dengan file path
* Membuat dan membaca file menggunakan `fs`
* Membaca file secara asynchronous
* Mengamati callback asynchronous
* Mempelajari error pada operasi file system
* Membandingkan `setTimeout()` dan `setImmediate()`

---

## CommonJS Modules

Masih dalam Bagian 4, saya mempelajari bagaimana kode JavaScript dapat dipisahkan menjadi beberapa **Modules** menggunakan sistem **CommonJS**.

### Materi

* `require()`
* `module.exports`
* `exports`
* Object Methods
* `this`
* `bind()`

### Praktik

Saya membuat module sederhana untuk memahami proses **export** dan **import** antar file.

File:

```text
matematika.js
```

Salah satu eksperimen menggunakan:

```javascript
module.exports = tambah;
```

Kemudian function tersebut digunakan dari file lain menggunakan:

```javascript
require("./matematika");
```

Saya juga melakukan eksperimen terhadap `this` pada Object Method.

Ketika sebuah method dilepas dari object:

```javascript
const fungsiSaya = produk.tampilkan;
```

context `this` dapat berubah karena function tersebut tidak lagi dipanggil sebagai method dari object.

Eksperimen kemudian dilanjutkan menggunakan:

```javascript
bind()
```

untuk mempertahankan context `this`.

Eksperimen ini membantu memahami bahwa perilaku `this` bergantung pada bagaimana sebuah function dipanggil.

---

# 📦 Bagian 5 — npm & Package Management

**Status: 🔄 In Progress**

Pada bagian ini saya mulai mempelajari bagaimana Node.js menggunakan **npm (Node Package Manager)** untuk mengelola project dan packages.

### Materi yang sudah dipraktikkan

* npm fundamentals
* `package.json`
* `npm install`
* Dependencies
* `node_modules`
* `package-lock.json`
* Third-party packages
* `lodash`
* `nodemon`

### Struktur latihan

```text
chat-01-bagian-5/
├── app.js
├── package.json
└── package-lock.json
```

Dalam praktiknya, package seperti `lodash` digunakan sebagai contoh **third-party dependency**, sedangkan `nodemon` digunakan untuk membantu proses development.

Saya juga mulai memahami fungsi `package.json` dan `package-lock.json` dalam sebuah Node.js project.

### Git & node_modules

Dalam proses dokumentasi project, saya menemukan bahwa `node_modules` tidak seharusnya dimasukkan ke repository Git.

Oleh karena itu, repository menggunakan:

```text
.gitignore
```

dengan konfigurasi:

```gitignore
node_modules/
```

Dengan demikian:

```text
package.json
package-lock.json
        ↓
    npm install
        ↓
    node_modules/
```

`node_modules` dapat dibuat kembali berdasarkan konfigurasi package project dan tidak perlu disimpan di GitHub.

**Materi npm & Package Management masih akan dilanjutkan pada sesi berikutnya.**

---

# 🧪 Praktik & Eksperimen

Pembelajaran pada Chat 01 tidak hanya dilakukan melalui teori, tetapi juga melalui eksperimen langsung.

Beberapa praktik yang dilakukan meliputi:

### Node.js Runtime

* Menjalankan JavaScript menggunakan Node.js
* Menggunakan Node.js melalui Command Line
* Memeriksa informasi Runtime Environment

### Event Loop

* Membandingkan Synchronous dan Asynchronous Execution
* Mengamati urutan eksekusi
* Menggunakan `setTimeout()`
* Menggunakan `setImmediate()`
* Mengamati callback execution

### Core Modules

* Menggunakan `os`
* Menggunakan `path`
* Menggunakan `fs`
* Membaca dan menulis file
* Menggunakan asynchronous file operation

### CommonJS Modules

* Membuat module
* Export function
* Import module menggunakan `require()`
* Membandingkan `exports` dan `module.exports`
* Memahami `this`
* Menggunakan `bind()`

### npm

* Membuat Node.js package
* Menggunakan `npm install`
* Menggunakan third-party packages
* Memahami `package.json`
* Memahami `package-lock.json`
* Menggunakan `nodemon`
* Menggunakan `.gitignore` untuk mengabaikan `node_modules`

---

# 💡 Key Concepts

Beberapa konsep penting yang berhasil dipahami melalui sesi ini:

### 1. Node.js adalah JavaScript Runtime

Node.js memungkinkan JavaScript dijalankan di luar Browser dengan menyediakan Runtime Environment berbasis V8.

### 2. Event Loop

**Event Loop** merupakan bagian penting dari mekanisme asynchronous Node.js dan memungkinkan Node.js menangani operasi asynchronous tanpa menghentikan seluruh execution flow.

### 3. Core Modules

Node.js menyediakan berbagai **Core Modules** yang dapat digunakan tanpa harus menginstall third-party package.

Contohnya:

```javascript
os
path
fs
```

### 4. CommonJS Modules

CommonJS memungkinkan kode JavaScript dibagi menjadi beberapa module yang dapat digunakan kembali.

Konsep penting yang dipelajari:

```javascript
require()
module.exports
exports
```

### 5. `this` Context

Nilai `this` bergantung pada bagaimana sebuah function dipanggil.

Eksperimen dengan Object Method dan `bind()` membantu memperjelas konsep tersebut.

### 6. npm

**npm** digunakan untuk mengelola package dan dependencies dalam Node.js project.

Konsep yang mulai dipahami:

```text
package.json
package-lock.json
node_modules
dependencies
```

### 7. Git dan Node.js Project

`node_modules` tidak perlu disimpan di repository karena dependencies dapat di-install kembali menggunakan npm berdasarkan konfigurasi project.

---

# 🛠️ Development Environment

Pembelajaran dilakukan menggunakan:

| Tool               | Keterangan               |
| ------------------ | ------------------------ |
| Node.js            | JavaScript Runtime       |
| npm                | Package Manager          |
| Visual Studio Code | Code Editor              |
| Git                | Version Control          |
| Git Bash           | Command Line Environment |
| GitHub             | Repository & Portfolio   |
| Windows            | Development Environment  |

---

# 📁 Directory Structure

Struktur directory saat ini:

```text
chat-01-introduction/
│
├── README.md
├── app.js
├── event-loop.js
├── chat-01-bagian-4.js
├── matematika.js
├── data.txt
│
└── chat-01-bagian-5/
    ├── app.js
    ├── package.json
    └── package-lock.json
```

---

# 📊 Learning Progress

| Bagian   | Materi                        | Status         |
| -------- | ----------------------------- | -------------- |
| Bagian 1 | Introduction to Node.js       | ✅ Completed    |
| Bagian 2 | Runtime Environment           | ✅ Completed    |
| Bagian 3 | Event Loop                    | ✅ Completed    |
| Bagian 4 | Core Modules & Global Objects | ✅ Completed    |
| Bagian 4 | CommonJS Modules              | ✅ Completed    |
| Bagian 5 | npm & Package Management      | 🔄 In Progress |

---

# 🎓 Learning Outcome

Chat 01 memberikan fondasi awal untuk melanjutkan pembelajaran Node.js ke materi yang lebih kompleks.

Setelah menyelesaikan bagian-bagian yang sudah dipelajari, saya memiliki pemahaman dasar mengenai:

* Node.js Runtime Environment
* V8 JavaScript Engine
* Event Loop
* Synchronous dan Asynchronous Execution
* Core Modules
* Global Objects
* CommonJS Modules
* `require()`
* `module.exports`
* `exports`
* `this`
* `bind()`
* npm
* `package.json`
* `package-lock.json`
* Dependencies
* `node_modules`

Pembelajaran berikutnya akan melanjutkan **npm & Package Management** hingga seluruh materi pada bagian tersebut selesai.

---

> **Learning principle:** memahami konsep terlebih dahulu, mempraktikkannya melalui eksperimen, kemudian mendokumentasikan hasil pembelajaran.
