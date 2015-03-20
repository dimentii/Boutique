using System;
using System.Collections.Generic;
using System.IO;

namespace Web.Models
{
    public class QuestionDetails
    {
        public String Name { get; set; }
        public String Email { get; set; }
        public String Phone { get; set; }
        public String Comments { get; set; }
        public IEnumerable<FileInfo> Files { get; set; }
    }
}