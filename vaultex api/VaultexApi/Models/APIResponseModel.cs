using System.Collections.Generic;

namespace VaultexApi.Models
{
    // Generic model used here to allow me to reuse this if necessary with other data responses. I've set the data property
    // here to IEnumerable but this could just as easily be passed in from where the model is used
    public class APIResponseModel<T>
    {
        public IEnumerable<T> data { get; set; }
        public int numberOfPages { get; set; }
    }
}
