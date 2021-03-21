using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CyberBitWebApp.Models
{
    public class User
    {
        [Key]
        public string Name { get; set; }
        public ICollection<Task> Tasks { get; set; }
    }
}
