namespace eSellers.Domain.Entities;

public class User
{
    public Guid Id { get; set; }

    // Dados pessoais
    public string FullName { get; set; } = string.Empty;
    public string CPF { get; set; } = string.Empty;
    public DateTime DateOfBirth { get; set; }

    // Contato
    public string Email { get; set; } = string.Empty;
    public string PhoneNumber { get; set; } = string.Empty;

    // Endereço
    public string AddressLine { get; set; } = string.Empty;
    public string City { get; set; } = string.Empty;
    public string State { get; set; } = string.Empty;
    public string PostalCode { get; set; } = string.Empty;

    // Acesso
    public string PasswordHash { get; set; } = string.Empty;
    public string Role { get; set; } = "User"; // User, Admin, etc.
    public bool IsActive { get; set; } = true;

    // Auditoria
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }
}
