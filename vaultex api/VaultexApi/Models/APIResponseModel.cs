using System.Collections.Generic;

namespace VaultexApi.Models
{
    public class APIResponseModel<T>
    {
        public IEnumerable<T> data { get; set; }
        public int numberOfPages { get; set; }
    }
}
