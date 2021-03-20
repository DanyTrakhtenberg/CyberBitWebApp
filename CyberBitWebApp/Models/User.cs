using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CyberBitWebApp.Models
{
    public class User
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string Name { get; set; }
        public ICollection<Task> Tasks { get; set; }
    }

    public class Task
    {
        public int ID { get; set; }

        public string Description { get; set; }
        public string DueDate { get; set; }
    }
}
