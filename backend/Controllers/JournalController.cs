using Microsoft.AspNetCore.Mvc;
using BioField.Models;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System;

namespace BioField.Controllers
{
    [Route("[controller]")]
    public class JournalController : Controller
    {
        private readonly BioFieldContext _db;

        public JournalController(BioFieldContext db)
        {
            _db = db;
        }
        [HttpGet("[action]")]
        public List<Journals> JournalList()
        {
            List<Journals> model = _db.Journals.ToList();
            return model;
        }
        [HttpPost("[action]")]
        public void Create([FromBody] Journals journal)
        {
            Console.WriteLine("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
            Console.WriteLine(journal);
            _db.Journals.Add(journal);
            _db.SaveChanges();
        }
        [HttpGet("[action]")]
        public ActionResult Info(int id)
        {
            List<Entries> thisJournal = _db.Entries.Where(entry => entry.JournalsId == id).ToList();
            Console.WriteLine("----------");
            Console.WriteLine(thisJournal);
            Console.WriteLine("----------");
            return View(thisJournal);
        }

        [HttpPost("[action]")]
        public void Edit(JournalController journal)
        {
            _db.Entry(journal).State = EntityState.Modified;
            _db.SaveChanges();
        }
        [HttpPost("[action]")]
        public void DeleteConfirmed(int id)
        {
            var thisJournal = _db.Journals.FirstOrDefault(journal => journal.JournalsId == id);
            _db.Journals.Remove(thisJournal);
            _db.SaveChanges();
        }
    }
}