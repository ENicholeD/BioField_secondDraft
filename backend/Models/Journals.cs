using System.Collections.Generic;

namespace BioField.Models
{
    public class Journals
    {
        public Journals()
        {
            this.Entries = new HashSet<Entries>();
        }

        public int JournalsId { get; set; }
        public string Name { get; set; }
        public virtual ApplicationUser User { get; set; }
        public virtual ICollection<Entries> Entries { get; set; }
    }
}