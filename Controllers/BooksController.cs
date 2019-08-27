using System;
using System.Linq;
using System.Threading.Tasks;

using polyglottal.Models;
using polyglottal.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;


namespace polyglottal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private readonly BookService _bookService;
        public BooksController(BookService bookService)
        {
            _bookService = bookService;
        }
        [HttpGet]
        public ActionResult<List<Book>> Get() =>
            _bookService.Get();

        [HttpPost]
        public ActionResult<Book> Create(Book book)
        {
            _bookService.Create(book);
            return CreatedAtRoute("GetBook", new { id = book.Id.ToString() }, book);
        }
        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var book = _bookService.Get(id);
            if (book == null)
            {
                return NotFound();
            }
            _bookService.Remove(book.Id);
            return NoContent();
        }
    }
}