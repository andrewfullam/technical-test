using Microsoft.EntityFrameworkCore;

namespace VaultexApi.Database
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Employee> Employee { get; set; }
        public DbSet<Organisation> Organisation { get; set; }
    }
}
