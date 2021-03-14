namespace CleanMeUp.Domain.Model
{
    public class File: Entity
    {
        public string Name { get; set; }
        public byte[] FileInBytes { get; set; }
    }
}
