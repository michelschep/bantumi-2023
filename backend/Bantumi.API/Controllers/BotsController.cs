using Microsoft.AspNetCore.Mvc;

namespace Bantumi.API.Controllers;

[ApiController]
[Route("[controller]")]
public class BotsController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    private readonly ILogger<BotsController> _logger;

    public BotsController(ILogger<BotsController> logger)
    {
        _logger = logger;
    }

    [HttpGet(Name = "GetBots")]
    public IEnumerable<Bot> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new Bot
            {
                Created = DateTime.Now.AddDays(index),
                Elo = Random.Shared.Next(1000, 1400),
                Name = Summaries[Random.Shared.Next(Summaries.Length)],
                User = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
    }
}