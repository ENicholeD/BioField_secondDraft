using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BioField.Models;

namespace BioField.Controllers
{
    [Route("[controller]")]
    public class EntriesController : Controller
    {
        private readonly BioFieldContext _db;

        public EntriesController(BioFieldContext db)
        {
            _db = db;
        }


        [HttpPost("[action]")]
        public ActionResult Create(Entries entry)
        {
            _db.Entries.Add(entry);
            _db.SaveChanges();
            return RedirectToAction("Index");
        }

        [HttpGet("[action]")]
        public ActionResult Info(int id)
        {
            var thisEntry = _db.Entries
            .FirstOrDefault(entry => entry.EntriesId == id);
            return View(thisEntry);
        }

        [HttpPost("[action]")]
        public ActionResult Edit(Entries entry)
        {
            _db.Entry(entry).State = EntityState.Modified;
            _db.SaveChanges();
            return RedirectToAction("Index");
        }

       [HttpPost("[action]")]
        public void DeleteConfirmed(int id)
        {
            var thisEntry = _db.Entries.FirstOrDefault(entry => entry.EntriesId == id);
            _db.Entries.Remove(thisEntry);
            _db.SaveChanges();
        }
    }
}