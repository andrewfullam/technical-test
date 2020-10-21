using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace VaultexApi.Database
{
    public class Organisation
    {
        [Key]
        [Required]
        [MaxLength(20)]
        public string OrganisationNumber { get; set; }
        [Required]
        [MaxLength(50)]
        public string OrganisationName { get; set; }
        [Required]
        [MaxLength(50)]
        public string AddressLine1 { get; set; }
        [DefaultValue("")]
        [MaxLength(50)]
        public string AddressLine2 { get; set; }
        [DefaultValue("")]
        [MaxLength(50)]
        public string AddressLine3 { get; set; }
        [DefaultValue("")]
        [MaxLength(50)]
        public string AddressLine4 { get; set; }
        [Required]
        [MaxLength(50)]
        public string Town { get; set; }
        [Required]
        [MaxLength(10)]
        public string Postcode { get; set; }
    }
}
