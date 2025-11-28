using System.Net.Http.Json;
using AdminPanel.Models;

namespace AdminPanel.Services;

public class UserService : IUserService
{
    private readonly HttpClient _httpClient;
    private const string ApiUrl = "https://jsonplaceholder.typicode.com/users";

    public UserService(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public async Task<List<User>> GetUsersAsync()
    {
        try
        {
            var users = await _httpClient.GetFromJsonAsync<List<User>>(ApiUrl);
            return users ?? new List<User>();
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error fetching users: {ex.Message}");
            return new List<User>();
        }
    }
}
