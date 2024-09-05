using Microsoft.AspNetCore.Mvc;


[Route("api/[controller]")]
[ApiController]

public class PersonController : ControllerBase
{
    private readonly IPersonService _personService;

    public PersonController(IPersonService personService)
    {
        _personService = personService;
    }

    [HttpPost]
    public IActionResult Post([FromBody] Person person)
    {
        var result = _personService.SavePerson(person);
        return Ok(result);
    }
}
