using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace VaultexApi.Database
{
    public class Employee
    {
        public int Id { get; set; }
        [ForeignKey("Organisation")]
        [Required]
        [MaxLength(20)]
        public string OrganisationNumber { get; set; }
        [Required]
        [MaxLength(50)]
        public string FirstName { get; set; }
        [Required]
        [MaxLength(50)]
        public string LastName { get; set; }

        public Organisation Organisation { get; set; }
    }
}
