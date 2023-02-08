using First_ASP.NET_Core_with_React.js.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace First_ASP.NET_Core_with_React.js.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly PubContext _dbcontext;

        public EmployeeController(PubContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        [HttpGet]
        [Route("GetEmployee")]
        public IActionResult GetEmployee()
        {
            List<Employee> lista = _dbcontext.Employees.ToList();
            return StatusCode(StatusCodes.Status200OK, lista);
        }
    }
}