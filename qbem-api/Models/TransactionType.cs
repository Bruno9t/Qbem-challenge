using System.ComponentModel.DataAnnotations.Schema;

namespace qbem_api.Models
{
    [Table("transactions_type")]
    public class TransactionType
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string Nature { get; set; }
        public string Sinal { get; set; }
    }
}
