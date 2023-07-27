using qbem_api.Contexts;
using qbem_api.Models;

namespace qbem_api.Repositories
{
    public class TransactionRepository
    {
        private readonly TransactionContext _context;
        public TransactionRepository(TransactionContext context) 
        {
            _context = context;
        }

        public async void InsertTransactions(List<Transaction> transactions)
        {
            await _context.AddRangeAsync(transactions);
            _context.SaveChanges();
        }
        
    }
}
