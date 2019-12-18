using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using BioField.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BioField.Controllers
{
    [Route("[controller]")]
    public class HomeController : Controller
    {
        [HttpGet("[action]")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("[action]")]
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
