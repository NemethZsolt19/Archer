using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Archer.Data;
using Archer.Models;

namespace Archer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlaygrounddsController : ControllerBase
    {
        private readonly ArcherContext _context;

        public PlaygrounddsController(ArcherContext context)
        {
            _context = context;
        }

        // GET: api/Playgroundds
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Playgroundd>>> GetPlaygroundd()
        {
            return await _context.Playgroundd.ToListAsync();
        }

        // GET: api/Playgroundds/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Playgroundd>> GetPlaygroundd(int id)
        {
            var playgroundd = await _context.Playgroundd.FindAsync(id);

            if (playgroundd == null)
            {
                return NotFound();
            }

            return playgroundd;
        }

        // PUT: api/Playgroundds/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPlaygroundd(int id, Playgroundd playgroundd)
        {
            if (id != playgroundd.Id)
            {
                return BadRequest();
            }

            _context.Entry(playgroundd).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlaygrounddExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Playgroundds
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Playgroundd>> PostPlaygroundd(Playgroundd playgroundd)
        {
            _context.Playgroundd.Add(playgroundd);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPlaygroundd", new { id = playgroundd.Id }, playgroundd);
        }

        // DELETE: api/Playgroundds/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePlaygroundd(int id)
        {
            var playgroundd = await _context.Playgroundd.FindAsync(id);
            if (playgroundd == null)
            {
                return NotFound();
            }

            _context.Playgroundd.Remove(playgroundd);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PlaygrounddExists(int id)
        {
            return _context.Playgroundd.Any(e => e.Id == id);
        }
    }
}
