namespace BioField.Models
{
    public class Entries
    {
        public int EntriesId { get; set; }
        public int JournalsId { get; set; }
        public string DateTimeString { get; set; }
        public string Site { get; set; }
        public int Temperature { get; set; }
        public string Weather { get; set; }
        public string Wind { get; set; }
        public string Soil { get; set; }
        public string Observation { get; set; }
        public virtual ApplicationUser User { get; set; }
        public virtual Journals Journal { get; set; }
    }
}