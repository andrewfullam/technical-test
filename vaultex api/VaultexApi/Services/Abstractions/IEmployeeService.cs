using System.Threading.Tasks;
using VaultexApi.Models;

namespace VaultexApi.Services.Abstractions
{
    public interface IEmployeeService
    {
        Task<APIResponseModel<EmployeeModel>> Get(int pageNumber, int pageSize);
    }
}
