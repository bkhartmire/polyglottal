using polyglottal.Models;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Linq;

namespace polyglottal.Services
{
    public class BookService
    {
        private readonly IMongoCollection<Book> _books;
        public BookService(IBookListDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);
            _books = database.GetCollection<Book>(settings.BooksCollectionName);
        }
        public List<Book> Get(bool read) =>
            _books.Find(book => book.read == read).ToList();

        public Book Get(string id) =>
            _books.Find<Book>(book => book.Id == id).FirstOrDefault();
        public Book Create(Book book)
        {
            _books.InsertOne(book);
            return book;
        }

        public void Update(string id, Book bookIn) =>
            _books.ReplaceOne(Book => Book.Id == id, bookIn);
        public void Remove(Book bookIn) =>
            _books.DeleteOne(book => book.Id == bookIn.Id);
        public void Remove(string id) =>
         _books.DeleteOne(book => book.Id == id);
    }
}