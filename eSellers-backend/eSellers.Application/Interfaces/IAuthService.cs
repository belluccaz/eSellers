using eSellers.Domain.Entities;
using eSellers.Application.DTOs.Auth;

namespace eSellers.Application.Interfaces
{
    public interface IAuthService
    {
        Task<string> GenerateAccessTokenAsync(string userId, string email);
        Task<RefreshToken> GenerateRefreshTokenAsync(string userId);
        Task<(string accessToken, RefreshToken newRefreshToken)> RefreshAccessTokenAsync(string refreshToken);
    }
}
