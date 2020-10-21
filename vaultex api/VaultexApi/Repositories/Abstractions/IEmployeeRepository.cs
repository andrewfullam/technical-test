using System.Threading.Tasks;
using VaultexApi.Models;

namespace VaultexApi.Repositories.Abstractions
{
    public interface IEmployeeRepository
    {
        Task<APIResponseModel<EmployeeModel>> Get(int pageNumber, int pageSize);
    }
}
