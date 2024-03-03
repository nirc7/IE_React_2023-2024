using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Student[]> Get()
        {
            try
            {
                return Ok(StudentsDBMock.students.ToArray());
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status400BadRequest, e.Message);
            }
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Student))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult Get(int id)
        {
            try
            {
                Student value = StudentsDBMock.students.FirstOrDefault(stu => stu.ID == id);
                if (value == null)
                {
                    return NotFound($"student with id = {id} was not found in the Get Action!!!");
                }
                return Ok(value);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(Student))]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult Post([FromBody] Student value)
        {
            try
            {
                if (value == null)
                {
                    return BadRequest(value);
                }
                else if (value.ID != 0)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError);
                }

                value.ID = StudentsDBMock.students.Max(stu => stu.ID) + 1;
                StudentsDBMock.students.Add(value);

                return CreatedAtAction(nameof(Get), new { id = value.ID }, value);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public IActionResult Put(int id, [FromBody] Student value)
        {
            try
            {
                if (value == null || value.ID != id)
                {
                    return BadRequest(value);
                }

                Student stu = StudentsDBMock.students.FirstOrDefault(stu => stu.ID == id);
                if (stu == null)
                {
                    return NotFound($"student with id={id} was not found in the POUT ACTION!!!");
                }

                stu.Name = value.Name;
                stu.Grade = value.Grade;

                return NoContent();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        public IActionResult Delete(int id)
        {
            try
            {
                if (id == 0)
                {
                    return BadRequest();
                }

                Student stu = StudentsDBMock.students.FirstOrDefault(stu => stu.ID == id);
                if (stu == null)
                {
                    return NotFound($"student with id={id} was not found in the Delete ACTION!!!");
                }

                StudentsDBMock.students.Remove(stu);

                return NoContent();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

    }
}
