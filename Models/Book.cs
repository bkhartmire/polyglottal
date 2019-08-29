using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace polyglottal.Models
{
    public class Book
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string title { get; set; }

        public string author { get; set; }

        public string summary { get; set; }

        public string published { get; set; }

        public int pages { get; set; }

        public string thumbnail { get; set; }

        public bool read { get; set; }


    }
}