using AdminPanel.Models;

namespace AdminPanel.Services;

public interface IUserService
{
    Task<List<User>> GetUsersAsync();
}
