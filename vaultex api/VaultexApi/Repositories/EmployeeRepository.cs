using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using VaultexApi.Database;
using VaultexApi.Models;
using VaultexApi.Repositories.Abstractions;

namespace VaultexApi.Repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly ApplicationContext _applicationContext;

        public EmployeeRepository(ApplicationContext applicationContext)
        {
            _applicationContext = applicationContext;
        }

        public async Task<APIResponseModel<EmployeeModel>> Get(int pageNumber, int pageSize)
        {
            var results = await _applicationContext.Employee.Select(e => new EmployeeModel
            {
                Id = e.Id,
                FirstName = e.FirstName,
                LastName = e.LastName,
                Organisation = new OrganisationModel
                {
                    OrganisationName = e.Organisation.OrganisationName,
                    OrganisationNumber = e.Organisation.OrganisationNumber,
                    AddressLine1 = e.Organisation.AddressLine1,
                    AddressLine2 = e.Organisation.AddressLine2,
                    AddressLine3 = e.Organisation.AddressLine3,
                    AddressLine4 = e.Organisation.AddressLine4,
                    Town = e.Organisation.Town,
                    Postcode = e.Organisation.Postcode
                }
            })
            .OrderBy(e => e.FirstName)
            .Skip(pageSize * (pageNumber - 1))
            .Take(pageSize)
            .ToListAsync();

            var response = new APIResponseModel<EmployeeModel>
            {
                data = results,
                numberOfPages = (await _applicationContext.Employee.CountAsync() - 1) / pageSize + 1
            };

            return response;
        }
    }
}
