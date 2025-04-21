using eSellers.Application.DTOs.Auth;
using eSellers.Infrastructure.Services.Auth;
using eSellers.Domain.Entities;
using eSellers.Infrastructure.Persistence;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;

namespace eSellers.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly JwtService _jwt;

    public AuthController(ApplicationDbContext context, IConfiguration config)
    {
        _context = context;
        _jwt = new JwtService(config);
    }

    [HttpPost("register")]
    public async Task<IActionResult> Register(RegisterUserRequest request)
    {
        if (await _context.Users.AnyAsync(u => u.Email == request.Email))
            return BadRequest("Email já cadastrado.");

        var user = new User
        {
            Id = Guid.NewGuid(),
            FullName = request.FullName,
            CPF = request.CPF,
            Email = request.Email,
            PasswordHash = ComputeSha256Hash(request.Password),
            CreatedAt = DateTime.UtcNow
        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        var token = _jwt.GenerateToken(user);

        return Ok(new AuthResponse
        {
            Token = token,
            Email = user.Email,
            FullName = user.FullName
        });
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginRequest request)
    {
        var hash = ComputeSha256Hash(request.Password);
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == request.Email && u.PasswordHash == hash);

        if (user == null)
            return Unauthorized("Credenciais inválidas.");

        var token = _jwt.GenerateToken(user);

        return Ok(new AuthResponse
        {
            Token = token,
            Email = user.Email,
            FullName = user.FullName
        });
    }

    private static string ComputeSha256Hash(string rawData)
    {
        using var sha256 = SHA256.Create();
        var bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(rawData));
        return BitConverter.ToString(bytes).Replace("-", "").ToLower();
    }
}
