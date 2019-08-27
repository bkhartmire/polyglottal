using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace polyglottal.Controllers
{
    [Route("api/[controller]")]
    public class MongoDBController : Controller
    {

        [HttpGet("[action]")]
        public <Book>Books()
        {
            new Book
            {
                test = "hello"
            }
    }
        public class Book
        {
            public long Id { get; set; }
            public string test { get; set; }
        }
    }
}

