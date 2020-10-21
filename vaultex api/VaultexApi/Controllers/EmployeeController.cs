using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using VaultexApi.Models;
using VaultexApi.Services.Abstractions;

namespace VaultexApi.Controllers
{
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
            var result = await _employeeService.Get(pageNumber, pageSize);

            return Ok(result);
        }

    }
}
