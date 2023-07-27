using Microsoft.AspNetCore.Mvc;
using System.Text;
using System.IO;
namespace qbem_api.Controllers
{
    public class TransactionController : ControllerBase, ITransactionController
    {
        [HttpPost("uploadFile"),DisableRequestSizeLimit]
        public async Task<IActionResult> Post([FromForm] IFormFile file)
        {
            var transactions = new StringBuilder();
            using(var stream = file.OpenReadStream())
            using(var reader = new StreamReader(stream))
            {
                string data = reader.ReadLine();

                while (reader.Peek() >= 0)
                {
                    transactions.AppendLine(reader.ReadLine());
                }
                    
            }



            var lines = transactions.ToString().Split(
                new string[] { "\r\n", "\r", "\n" },
    StringSplitOptions.None);

            foreach (var line in lines)
            {
                Console.WriteLine(line);
            }


            return Ok();
        }

    }
}
