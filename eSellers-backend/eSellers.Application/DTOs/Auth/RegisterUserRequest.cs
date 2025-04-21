using System;

namespace eSellers.Application.DTOs.Auth;

public class RegisterUserRequest
{
    public string FullName { get; set; } = string.Empty;
    public string CPF { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;

}
