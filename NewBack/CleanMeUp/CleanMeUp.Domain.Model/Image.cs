using System;

namespace CleanMeUp.Domain.Model
{
    public class Image : Entity
    {
        public string FileName { get; set; }
        public Byte[] FileBytes { get; set; }
    }
}
