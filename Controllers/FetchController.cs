// using polyglottal.Models;
// using polyglottal.Services;
// using Microsoft.AspNetCore.Mvc;
// using System.Collections.Generic;
// using Microsoft.Extensions.Configuration;
// using System.Net.Http;
// using Newtonsoft.Json.Linq;
// using System.Threading.Tasks;


// namespace polyglottal.Controllers
// {
//     [Route("api/[controller]")]
//     public class FetchController : ControllerBase
//     {
//         // private string _SecretApiKey = null;
//         // _SecretApiKey = Configuration["GoogleBooks:ApiKey"]
//         public IConfiguration Configuration { get; }
//         public FetchController(IConfiguration config)
//         {
//             Configuration = config;
//         }
//         [HttpGet("{query}")]

//         public static async  GetSearchResults()
//         {
//             string baseUrl = "http://pokeapi.co/api/v2/pokemon/";

//             using (HttpClient client = new HttpClient())
//             {
//                 using (HttpResponseMessage res = await client.GetAsync(baseUrl))
//                 {
//                     using (HttpContent content = res.Content)
//                     {
//                         var data = await content.ReadAsStringAsync();
//                         return data;
//                     }
//                 }
//             }

//         }
//     }
// }