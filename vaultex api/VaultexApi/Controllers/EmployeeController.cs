using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using VaultexApi.Models;
using VaultexApi.Services.Abstractions;

namespace VaultexApi.Controllers
{
    // API using repository pattern so DI injection here of service
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeService _employeeService;

        public EmployeeController(IEmployeeService employeeService)
        {
            _employeeService = employeeService;
        }

        [HttpGet]
        public async Task<ActionResult<APIResponseModel<EmployeeModel>>> Get(int pageNumber, int pageSize)
        {
            // Passing in page number and page size from front end here
            var result = await _employeeService.Get(pageNumber, pageSize);

            return Ok(result);
        }

    }
}
