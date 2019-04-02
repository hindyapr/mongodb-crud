const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';

const dbName = 'firstDb';







class Book {
    static createBook(data) {
        let client = new MongoClient(url, { useNewUrlParser: true });

        return client
            .connect()
            .then(() => {
                console.log("Database connected");

                const db = client.db(dbName);

                const books = db.collection('books')

                return books
                    .insertOne({
                        isbn: data.isbn,
                        title: data.title,
                        author: data.author,
                        category: data.category,
                        stock: Number(data.stock)
                    })

            })
            .then(data => {
                client.close();

                return data;
            })
            .catch(err => {
                client.close();
                throw err;
            })


    }

    static readBooks() {
        let client = new MongoClient(url, { useNewUrlParser: true });

        return client
            .connect()
            .then(() => {
                console.log("Database connected");

                const db = client.db(dbName);

                const books = db.collection('books')

                return books
                    .find({})
                    .toArray();

            })
            .then(data => {
                client.close()
                return data;
            })
            .catch(err => {
                client.close();
                throw err;
            })




    }

    static updateBook(isbn, data) {
        let client = new MongoClient(url, { useNewUrlParser: true });

        return client
            .connect()
            .then(() => {
                console.log("Database connected");

                const db = client.db(dbName);

                const books = db.collection('books')
                console.log(data, isbn);
                return books
                    .findOneAndUpdate({ isbn: isbn }, {
                        $set: {
                            title: data.title,
                            author: data.author,
                            category: data.category,
                            stock: Number(data.stock)
                        }
                    })

            })
            .then(data => {
                client.close();
                return data;
            })
            .catch(err => {
                client.close();
                return err
            })
    }


    static deleteBook(isbn) {
        let client = new MongoClient(url, { useNewUrlParser: true });
        console.log(isbn)
        return client
            .connect()
            .then(() => {
                console.log("Database connected");

                const db = client.db(dbName);

                const books = db.collection('books')

                return books
                    .findOneAndDelete({ isbn: isbn })

            })
            .then(data => {
                console.log(data);
                client.close();
                return data;
            })
            .catch(err => {
                client.close();
                return err
            })
    }

}

module.exports = Book;