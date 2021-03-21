using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CyberBitWebApp.Data;
using CyberBitWebApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CyberBitWebApp.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly TaskContext taskContext;

        public UsersController(TaskContext taskContext)
        {
            this.taskContext = taskContext;
        }

        // GET: api/<UsersController>
        [HttpGet]
        public User Get(string name)
        {
            var users = this.taskContext.User.Include(e=>e.Tasks).First(e => e.Name == name);
            return users;

        }

        // GET api/<UsersController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<UsersController>
        [HttpPost]
        public void Post([FromBody] User user)
        {
            var userFromDb = taskContext.User.Include(e => e.Tasks).First(e => e.Name == user.Name);
            userFromDb.Tasks.Add(user.Tasks.First());
            taskContext.SaveChanges();
        }

        // PUT api/<UsersController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<UsersController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
