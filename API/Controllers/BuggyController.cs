using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Swashbuckle.AspNetCore.Annotations;

namespace API.Controllers;

public class BuggyController : BaseApiController
{
    [HttpGet("not-found")]
    [SwaggerOperation(Summary = "Returns a 404 Not Found response")]
    public IActionResult GetNotFoundResult()
    {
        return NotFound();
    }

    [HttpGet("bad-request")]
    public IActionResult GetBadRequestResult()
    {
        return BadRequest(new ProblemDetails()
        {
            Title = "This is a bad request"
        });
    }

    [HttpGet("unauthorized")]
    public IActionResult GetUnauthorizedResult()
    {
        return Unauthorized();
    }

    [HttpGet("validation-error")]
    public IActionResult GetValidationErrorResult()
    {
        ModelState.AddModelError("Test", "This is a test error");
        ModelState.AddModelError("Test2", "This is a test error 2");
        
        return ValidationProblem();
    }
    
    [HttpGet("server-error")]
    public IActionResult GetServerErrorResult()
    {
        throw new Exception("This is a server error");
    }
}