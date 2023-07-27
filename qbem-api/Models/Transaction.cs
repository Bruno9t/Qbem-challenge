using System.ComponentModel.DataAnnotations.Schema;

namespace qbem_api.Models
{
    [Table("transactions")]
    public class Transaction
    {
        public int Id { get; set; }


        public int Type { get; set; }
        public string Date { get; set; }
        public string ProductDescription { get; set; }
        public double Value { get; set; }
        public string SellerName { get; set; }
    }
}
