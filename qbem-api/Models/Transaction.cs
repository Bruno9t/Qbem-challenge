namespace qbem_api.Models
{
    public class Transaction
    {
        public int Type { get; set; }
        public string Date { get; set; }
        public string ProductDescription { get; set; }
        public double Value { get; set; }
        public string SellerName { get; set; }
    }
}
