using Microsoft.AspNetCore.Mvc;

namespace qbem_api.Controllers
{
    public interface ITransactionController
    {
        public Task<IActionResult> Post(IFormFile file);
    }
}
