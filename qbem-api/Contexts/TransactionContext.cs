using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
using qbem_api.Models;
using System;
using System.Collections.Generic;
using System.Reflection.Metadata;

namespace qbem_api.Contexts
{
    public class TransactionContext : DbContext
    {
        public TransactionContext(DbContextOptions<TransactionContext> options) 
        : base(options) { }
        public DbSet<Transaction> Transactions { get; set; }
        public DbSet<TransactionType> TransactionType { get; set; }

        #region Required
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Transaction>()
                .Property(b => b.Id)
                .IsRequired();
        }
        #endregion

    }
}
