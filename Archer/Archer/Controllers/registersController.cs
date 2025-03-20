using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Archer.Data;
using Archer.Models;

namespace Archer.Controllers
{
    public class registersController : Controller
    {
        private readonly ArcherContext _context;

        public registersController(ArcherContext context)
        {
            _context = context;
        }

        // GET: registers
        public async Task<IActionResult> Index()
        {
            return View(await _context.register.ToListAsync());
        }

        // GET: registers/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var register = await _context.register
                .FirstOrDefaultAsync(m => m.Id == id);
            if (register == null)
            {
                return NotFound();
            }

            return View(register);
        }

        // GET: registers/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: registers/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name,Email,Password")] register register)
        {
            if (ModelState.IsValid)
            {
                _context.Add(register);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(register);
        }

        // GET: registers/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var register = await _context.register.FindAsync(id);
            if (register == null)
            {
                return NotFound();
            }
            return View(register);
        }

        // POST: registers/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name,Email,Password")] register register)
        {
            if (id != register.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(register);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!registerExists(register.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(register);
        }

        // GET: registers/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var register = await _context.register
                .FirstOrDefaultAsync(m => m.Id == id);
            if (register == null)
            {
                return NotFound();
            }

            return View(register);
        }

        // POST: registers/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var register = await _context.register.FindAsync(id);
            if (register != null)
            {
                _context.register.Remove(register);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool registerExists(int id)
        {
            return _context.register.Any(e => e.Id == id);
        }
    }
}
