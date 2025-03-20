using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Archer.Models;

namespace Archer.Data
{
    public class ArcherContext : DbContext
    {
        public ArcherContext (DbContextOptions<ArcherContext> options)
            : base(options)
        {
        }

        public DbSet<Archer.Models.Booking> Booking { get; set; } = default!;
        public DbSet<Archer.Models.Playgroundd> Playgroundd { get; set; } = default!;
        public DbSet<Archer.Models.register> register { get; set; } = default!;
    }
}
